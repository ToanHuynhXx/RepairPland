const SCRIPT_URL = "https://script.google.com/macros/s/AKfycby_JDqlDJ9Eip_yuDCcjm9Cib0Xh1o4xS0OHiCju4ciok3B7Z_10xkS4-MjM0GllpIV/exec";

async function addrow() 
{
 //   clearInterval(aotuoLoad); // Tạm dừng tự động tải dữ liệu để tránh xung đột khi thêm hàng mới

 // 1. Tìm bảng theo ID
    const table = document.getElementById("input-repair");

    if (!table) {
        console.error("Không tìm thấy bảng có ID: repair-table");
        return;
    }

// 1. Kiểm tra chính xác ID của phần bạn muốn chèn hàng vào
    // Ở đây mình giả sử bạn muốn chèn vào 'repair-table' hoặc 'input-body'
    const tbody = document.getElementById("input-repair").getElementsByTagName('tbody')[0] || document.getElementById("input-repair");

    if (!tbody) {
        console.error("Không tìm thấy bảng hoặc tbody có ID là 'repair-body'");
        alert("Lỗi: Không tìm thấy bảng dữ liệu trên giao diện!");
        return;
    }

    // 2. Tiến hành chèn hàng
    try {
        const row = tbody.insertRow(); // Dòng số 5 thường bị lỗi ở đây
        row.innerHTML = `
            <td><input type="text" class="row-name" placeholder="Tên máy..."></td>
            <td><input type="date" class="row-start"></td>
            <td><input type="date" class="row-end"></td>
            <td>
                <select class="row-status">
                    <option value="Đang sửa chữa">Đang sửa chữa</option>
                    <option value="Đã xong">Đã xong</option>
                    <option value="Chờ linh kiện">Chờ linh kiện</option>
                </select>
            </td>
            <td>
                <button type="button" onclick="sendSingleRow(this)" style="background-color: #4CAF50; color: white;">Lưu</button>
                <button type="button" onclick="this.parentElement.parentElement.remove()">Xóa</button>
            </td>
        `;
    } catch (err) {
        console.error("Lỗi khi insertRow:", err);
    }
}

async function sendSingleRow(button) {
    // 1. Tìm hàng chứa cái nút vừa nhấn
    const row = button.parentElement.parentElement;
    
    // 2. Lấy dữ liệu từ các ô input trong hàng đó
    const name = row.querySelector(".row-name").value;
    const start = row.querySelector(".row-start").value;
    const end = row.querySelector(".row-end").value;
    const status = row.querySelector(".row-status").value;

    if (!name) {
        alert("Vui lòng nhập tên thiết bị!");
        return;
    }

    // Đổi trạng thái nút để người dùng biết đang xử lý
    button.innerText = "Đang lưu...";
    button.disabled = true;

    const data = {
        thietBi: name,
        ngayBatDau: start,
        ngayKetThuc: end,
        trangThai: status
    };

    try {
        // 3. Gửi lên Google Sheets
        await fetch(SCRIPT_URL, {
            method: "POST",
            mode: "no-cors", // Để không bị lỗi CORS
            body: JSON.stringify(data)
        });

        alert("Đã lưu thiết bị: " + name);
        
        // 4. Xóa hàng này sau khi lưu xong để tránh nhập trùng
        row.remove(); 
        
        // 5. Tải lại danh sách dữ liệu hiển thị bên dưới (nếu có)
        if (typeof loadData === "function") loadData();

    } catch (error) {
        console.error("Lỗi:", error);
        alert("Không thể lưu, hãy thử lại!");
        button.innerText = "Lưu";
        button.disabled = false;
    }
}

async function loadData() {
    
 const SCRIPT_URL = "https://script.google.com/macros/s/AKfycby_JDqlDJ9Eip_yuDCcjm9Cib0Xh1o4xS0OHiCju4ciok3B7Z_10xkS4-MjM0GllpIV/exec";

    try {
        const response = await fetch(SCRIPT_URL, {
            method: 'GET',
            redirect: 'follow' // Bắt buộc phải có dòng này để tránh lỗi CORS
        });

        if (!response.ok) throw new Error("Không thể kết nối Google Sheets");

        const data = await response.json();
        const tbody = document.getElementById("data-repair");

        if (!tbody) {
            console.error("LỖI CỰC KỲ QUAN TRỌNG: Không tìm thấy <tbody>. Hãy kiểm tra lại ID bảng trong HTML!");
            return; // Dừng lại ở đây để không bị báo lỗi 'innerHTML'
        }

        tbody.innerHTML = ""; // Xóa bảng cũ để nạp bảng mới

        // Bắt đầu duyệt từ hàng thứ 1 (bỏ qua hàng tiêu đề 0)
        for (let i = 1; i < data.length; i++) {
            let row = tbody.insertRow();
            row.insertCell(0).innerText = i;           // STT
            row.insertCell(1).innerText = data[i][1]; // Thiết bị
            row.insertCell(2).innerText = data[i][2]; // Ngày bắt đầu
            row.insertCell(3).innerText = data[i][3]; // Ngày kết thúc
            row.insertCell(4).innerText = data[i][4]; // Trạng thái
        }
        console.log("Đã cập nhật dữ liệu thành công!");
    } catch (error) {
        console.error("Lỗi lấy dữ liệu:", error);
}
}

// Tự động cập nhật mỗi 5 giây để máy tính chủ thấy dữ liệu mới
//let aotuoLoad = setInterval(loadData, 5000);
loadData(); // Chạy lần đầu khi mở web