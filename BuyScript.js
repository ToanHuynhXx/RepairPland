const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyJ1ENEbvwKE5UnqUQtaf6p4E-93EUfy0l9UppAzgtb5S3aMxnzS1JtjPsylUnRDXYq/exec";
let autoLoad; // Biến toàn cục để quản lý interval
window.addEventListener('DOMContentLoaded', (event) => {
        const tbody1 = document.getElementById('Table-1-Body');
        const tbody2 = document.getElementById('Table-2-Body');
        let rowsHtml = '';

        // Vòng lặp chạy 10 lần để tạo 10 hàng
        for (let i = 1; i <= 50; i++) {
            rowsHtml += `
                <tr>
                    <td style="text-align: center; font-weight: bold;font-size =11px; ">${i}</td>
                    <td><input type="text" style="font-size: 11px;" placeholder="Nhập tên..."></td>
                    <td><input type="text" style="font-size: 11px;" placeholder="Mã số..."></td>
                    <td><input type="number"  style="font-size: 11px"; placeholder="0"></td>
                    <td><input type="text" style="font-size: 11px;" placeholder="VD: Cái, Bộ"></td>
                    <td><input type="text" style="font-size: 11px;" placeholder="Mục đích..."></td>
                    <td style="text-align: center;"><input type="checkbox" style="transform: scale(1.5);"></td>
                    <td style="text-align: center;"><input type="checkbox" style="transform: scale(1.5);"></td>
                </tr>
            `;
        }
        
        tbody1.innerHTML = rowsHtml;
        tbody2.innerHTML = rowsHtml;
    });

async function loadData() {
    const finalUrl = `${SCRIPT_URL}?action=${"YCMuaHang"}`;
    try {
        const response = await fetch(finalUrl, {
            method: 'GET',
            redirect: 'follow' // Bắt buộc phải có dòng này để tránh lỗi CORS
        });

        if (!response.ok) throw new Error("Không thể kết nối Google Sheets");

        const responseObj = await response.json();
        const data = responseObj.data; // Giả sử dữ liệu trả về có cấu trúc { data: [...] }
        const tbody1 = document.getElementById("Table-1-Body");
        const tbody2 = document.getElementById("Table-2-Body");

        if (!tbody1) {
            console.error("LỖI CỰC KỲ QUAN TRỌNG: Không tìm thấy <tbody>. Hãy kiểm tra lại ID bảng trong HTML!");
            return; // Dừng lại ở đây để không bị báo lỗi 'innerHTML'
        }
        if (!tbody2) {
            console.error("LỖI CỰC KỲ QUAN TRỌNG: Không tìm thấy <tbody>. Hãy kiểm tra lại ID bảng trong HTML!");
            return; // Dừng lại ở đây để không bị báo lỗi 'innerHTML'
        }

        // Bắt đầu duyệt từ hàng thứ 1 (bỏ qua hàng tiêu đề 0)
for (let i = 2; i < 52; i++) {
    
    // Xác định vị trí hàng trong HTML. 
    // Vì data bắt đầu từ i=1, nhưng tbody.rows bắt đầu từ 0, nên vị trí hàng HTML sẽ là i - 1
    let rowIndex = i - 2; 
    let row1 = tbody1.rows[rowIndex]; 
    let row2 = tbody2.rows[rowIndex]; 
    let rowData = data[i] || [];
    // Kiểm tra xem hàng này có tồn tại trong bảng HTML hay không
    if (row1) {
        // Tìm thẻ input bên trong ô và cập nhật thuộc tính .value của nó
        let inputTen = row1.cells[1].querySelector('input');
        if (inputTen) inputTen.value = rowData[1] || ""; // Cột Tên linh kiện

        let inputMa = row1.cells[2].querySelector('input');
        if (inputMa) inputMa.value = rowData[2] || "";   // Cột Mã linh kiện

        let inputSL = row1.cells[3].querySelector('input');
        if (inputSL) inputSL.value = rowData[3] || "";   // Cột Số lượng

        let inputDonVi = row1.cells[4].querySelector('input');
        if (inputDonVi) inputDonVi.value = rowData[4] || ""; // Cột Đơn vị

        let inputMucDich = row1.cells[5].querySelector('input');
        if (inputMucDich) inputMucDich.value = rowData[5] || ""; // Cột Mục đích

        // TRƯỜNG HỢP 3: Cập nhật cho Checkbox (Xác nhận và Nhận)
        // Checkbox không dùng .value mà dùng .checked (true/false)
        let checkXacNhan = row1.cells[6].querySelector('input[type="checkbox"]');
        if (checkXacNhan) checkXacNhan.checked = (rowData[6] === "OK");
        let checkNhan = row1.cells[7].querySelector('input[type="checkbox"]');
        if (checkNhan) checkNhan.checked = (rowData[7] === "OK");
    }
        if (row2) {
        // Tìm thẻ input bên trong ô và cập nhật thuộc tính .value của nó
        let inputTen = row2.cells[1].querySelector('input');
        if (inputTen) inputTen.value =  rowData[10] || ""; // Cột Tên linh kiện

        let inputMa = row2.cells[2].querySelector('input');
        if (inputMa) inputMa.value =  rowData[11] || "";   // Cột Mã linh kiện

        let inputSL = row2.cells[3].querySelector('input');
        if (inputSL) inputSL.value =  rowData[12] || "";   // Cột Số lượng

        let inputDonVi = row2.cells[4].querySelector('input');
        if (inputDonVi) inputDonVi.value =  rowData[13] || ""; // Cột Đơn vị

        let inputMucDich = row2.cells[5].querySelector('input');
        if (inputMucDich) inputMucDich.value =  rowData[14] || ""; // Cột Mục đích

        // TRƯỜNG HỢP 3: Cập nhật cho Checkbox (Xác nhận và Nhận)
        // Checkbox không dùng .value mà dùng .checked (true/false)
        let checkXacNhan = row2.cells[6].querySelector('input[type="checkbox"]');
        if (checkXacNhan) checkXacNhan.checked = ( rowData[15] === "OK");

        let checkNhan = row2.cells[7].querySelector('input[type="checkbox"]');
        if (checkNhan) checkNhan.checked = (rowData[16] === "OK");
        }
        
    }
        console.log("Đã cập nhật dữ liệu thành công!");
    } 
    catch (error) {
        console.error("Lỗi lấy dữ liệu:", error);
    }
}
function startAutoLoad() {
    if (autoLoad) clearInterval(autoLoad);
    autoLoad = setInterval(loadData, 5000);
    console.log("đã bật autoload");
}
function stopAutoLoad() {
    if (autoLoad) {
        clearInterval(autoLoad); // Dừng vòng lặp setInterval
        autoLoad = null;         // Đặt lại biến về null để đánh dấu là đã dừng
        console.log("Đã tắt autoload");
    }
}

async function UpdateDS1(btnElement)
{
    btnElement.innerText = "Đang Update...";
    const tbody = document.getElementById("Table-1-Body");
    if (!tbody) {
        alert("Không tìm thấy bảng để lấy dữ liệu!");
        return;
    }
    let tableData = []; // Mảng trống để gom dữ liệu 50 dòng

    // 2. QUÉT TỪNG DÒNG ĐỂ LẤY GIÁ TRỊ TỪ CÁC THẺ <INPUT>
    for (let i = 0; i < tbody.rows.length; i++) {
        let row = tbody.rows[i];
        // Rút trích dữ liệu từ các ô nhập liệu
        let no = i + 1; 
        let ten = row.cells[1].querySelector('input').value;
        let ma = row.cells[2].querySelector('input').value;
        let sl = row.cells[3].querySelector('input').value;
        let dv = row.cells[4].querySelector('input').value;
        let md = row.cells[5].querySelector('input').value;
        
        // Rút trích trạng thái của checkbox (Đổi thành "OK"/"TRUE" hoặc để trống)
        let xacNhan = row.cells[6].querySelector('input').checked ? "OK" : "";
        let nhan = row.cells[7].querySelector('input').checked ? "OK" : "";

        // Gói thành 1 mảng con (tương đương 1 dòng trên Sheets) và nhét vào mảng lớn
        tableData.push([no, ten, ma, sl, dv, md, xacNhan, nhan]);
    }

    // 3. ĐÓNG GÓI JSON VÀ GỬI ĐI (Phương thức POST)
    let payload = {
        action: "updateYCMuaHang1", // Tên lệnh để báo cho Apps Script biết
        data: tableData            // Khối dữ liệu 10 dòng vừa quét được
    };

    try {
        console.log("Đang gửi dữ liệu lên Google Sheets...");
        
        const response = await fetch(SCRIPT_URL, {
            method: 'POST',
            redirect: 'follow',
            // Mẹo cực hay: Bắt buộc dùng 'text/plain' để Google không báo lỗi chặn chéo CORS
            headers: { 'Content-Type': 'text/plain;charset=utf-8' }, 
            body: JSON.stringify(payload)
        });

        const result = await response.json();
        if (result.status === "success") {
            alert("Đã cập nhật dữ liệu thành công lên Google Sheets!");
        } else {
            alert("Lỗi từ máy chủ: " + result.error);
        }
    } catch (error) {
        console.error("Lỗi khi gửi dữ liệu:", error);
        alert("Gặp lỗi trong quá trình gửi. Vui lòng xem Console.");
    }
    btnElement.innerText = "Update Danh Sách 1";
    startAutoLoad(); // Gọi lại hàm tự động tải sau khi cập nhật để làm mới dữ liệu trên bảng
}

async function UpdateDS2(btnElement)
{
    btnElement.innerText = "Đang Update...";
    const tbody = document.getElementById("Table-2-Body");
    if (!tbody) {
        alert("Không tìm thấy bảng để lấy dữ liệu!");
        return;
    }
    let tableData = []; // Mảng trống để gom dữ liệu 50 dòng

    // 2. QUÉT TỪNG DÒNG ĐỂ LẤY GIÁ TRỊ TỪ CÁC THẺ <INPUT>
    for (let i = 0; i < tbody.rows.length; i++) {
        let row = tbody.rows[i];
        // Rút trích dữ liệu từ các ô nhập liệu
        let no = i + 1; 
        let ten = row.cells[1].querySelector('input').value;
        let ma = row.cells[2].querySelector('input').value;
        let sl = row.cells[3].querySelector('input').value;
        let dv = row.cells[4].querySelector('input').value;
        let md = row.cells[5].querySelector('input').value;
        
        // Rút trích trạng thái của checkbox (Đổi thành "OK"/"TRUE" hoặc để trống)
        let xacNhan = row.cells[6].querySelector('input').checked ? "OK" : "";
        let nhan = row.cells[7].querySelector('input').checked ? "OK" : "";

        // Gói thành 1 mảng con (tương đương 1 dòng trên Sheets) và nhét vào mảng lớn
        tableData.push([no, ten, ma, sl, dv, md, xacNhan, nhan]);
    }

    // 3. ĐÓNG GÓI JSON VÀ GỬI ĐI (Phương thức POST)
    let payload = {
        action: "updateYCMuaHang2", // Tên lệnh để báo cho Apps Script biết
        data: tableData            // Khối dữ liệu 10 dòng vừa quét được
    };

    try {
        console.log("Đang gửi dữ liệu lên Google Sheets...");
        
        const response = await fetch(SCRIPT_URL, {
            method: 'POST',
            redirect: 'follow',
            // Mẹo cực hay: Bắt buộc dùng 'text/plain' để Google không báo lỗi chặn chéo CORS
            headers: { 'Content-Type': 'text/plain;charset=utf-8' }, 
            body: JSON.stringify(payload)
        });

        const result = await response.json();
        if (result.status === "success") {
            alert("Đã cập nhật dữ liệu thành công lên Google Sheets!");
        } else {
            alert("Lỗi từ máy chủ: " + result.error);
        }
    } catch (error) {
        console.error("Lỗi khi gửi dữ liệu:", error);
        alert("Gặp lỗi trong quá trình gửi. Vui lòng xem Console.");
    }
    btnElement.innerText = "Update Danh Sách 2";
    startAutoLoad(); // Gọi lại hàm tự động tải sau khi cập nhật để làm mới dữ liệu trên bảng
}

async function EditDS(btnElement)
{
// Kiểm tra xem nút có đang là màu xanh không
    const isActive = btnElement.classList.toggle('btn-blue');

    if (isActive) {
        stopAutoLoad();
        btnElement.innerText = "Đang chỉnh sửa...";
    } else {
        startAutoLoad(); // Gọi lại hàm tự động tải nếu tắt chế độ chỉnh sửa
        btnElement.innerText = "Edit Danh Sách";
    }

}

startAutoLoad(); // Bắt đầu tự động tải dữ liệu 