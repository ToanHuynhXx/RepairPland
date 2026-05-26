const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwrGfw1Ou86RpiWV6IFpLi2GRS6nTP21vCguD73i5Ddb5EDST5tfb7IytMJi5AvSd1S/exec";

let autoLoad; // Biến toàn cục để quản lý interval
const ctc = document.getElementById('SecChart').getContext('2d');
const SecChart = new Chart(ctc, {
    type: 'bar',
    data: {
        labels: ['FAN', 'PCB', 'OTO', 'STEP', 'COVER', 'ĐÚC', 'ROTOR', 'SƠN','DẬP','MOLD'],
        datasets: [
            {
            //label: 'Số lượng thiết bị',
            data: [12, 19, 3,5,6,25,1,23,54,65,12,32], // Dữ liệu thực tế (số lượng)
            backgroundColor: [
                'rgb(17, 130, 68)'
            ],
            borderColor: [
                'rgba(27, 150, 70, 0.5)'
            ],
            borderWidth: 1
            },
            {
            //label: 'Số lượng thiết bị',
            data: [5, 2, 4,1,2,5,12,22,11,32,12,1], // Dữ liệu thực tế (số lượng)
            backgroundColor: [
                'rgba(253, 184, 10, 0.5)'
            ],
            borderColor: [
                'rgb(247, 180, 10)' 
            ],
            borderWidth: 1
            }
        ]
    },
    plugins: [ChartDataLabels],
    options: {
        plugins: {
            legend: {
                display: false // Ẩn chú thích nếu không cần thiết,
            },
            datalabels: {
            // Hàm này sẽ chạy cho từng phần của cột
            formatter: (value, ctc) => {
                // Chỉ hiển thị con số ở phần trên cùng (dataset cuối cùng)
                // Nếu là dataset đầu tiên (chỉ số 0), chúng ta ẩn đi để tránh trùng lặp
                if (ctc.datasetIndex === ctc.chart.data.datasets.length - 1) {
                    let sum = 0;
                    let dataIndex = ctc.dataIndex;
                    // Cộng dồn giá trị của tất cả các tầng trong cột này
                    ctc.chart.data.datasets.forEach(dataset => {
                        sum += dataset.data[dataIndex];
                    });
                    return sum; // Trả về con số tổng
                } else {
                    return ""; // Các tầng dưới trả về rỗng để không hiện số lẻ
                }
            },
            color: '#000',      // Màu chữ đen
            anchor: 'end',      // Điểm neo ở đỉnh cột
            align: 'top',       // Đẩy con số lên phía trên đỉnh
            offset: -5,        // Đẩy con số lên cao hơn một chút
            font: {
                weight: 'bold',
                size: 12,
            }
            }},
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: { 
                stacked: true, // Bật chế độ chồng cột cho trục X
                ticks: {
                maxRotation: 0, // Không cho phép xoay tối đa
                minRotation: 0,  // Luôn giữ góc xoay là 0 độ
                font: {
                    size: 10 // Chỉnh kích thước chữ nhỏ lại để đủ chỗ nằm ngang
                }   
                }
            },
            y: {
                stacked: true, // Bật chế độ chồng cột cho trục Y
                beginAtZero: true // Trục dọc bắt đầu từ số 0
            }
        }
    }
});



const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar', // Loại biểu đồ cột
    data: {
        labels: ['Tháng 4','Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12', 'Tháng 1', 'Tháng 2', 'Tháng 3'], // Các nhãn ở trục ngang
        datasets: [
            {
            //label: 'Số lượng thiết bị',
            data: [12, 19, 3,5,6,25,1,23,54,65,12,32], // Dữ liệu thực tế (số lượng)
            backgroundColor: [
                'rgb(17, 130, 68)'
            ],
            borderColor: [
                'rgba(27, 150, 70, 0.5)'
            ],
            borderWidth: 1
            },
            {
            //label: 'Số lượng thiết bị',
            data: [5, 2, 4,1,2,5,12,22,11,32,12,1], // Dữ liệu thực tế (số lượng)
            backgroundColor: [
                'rgba(253, 184, 10, 0.5)'
            ],
            borderColor: [
                'rgb(247, 180, 10)' 
            ],
            borderWidth: 1
            }
        ]
    },
    plugins: [ChartDataLabels],
    options: {
        plugins: {
            legend: {
                display: false // Ẩn chú thích nếu không cần thiết,
            },
            datalabels: {
            // Hàm này sẽ chạy cho từng phần của cột
            formatter: (value, ctx) => {
                // Chỉ hiển thị con số ở phần trên cùng (dataset cuối cùng)
                // Nếu là dataset đầu tiên (chỉ số 0), chúng ta ẩn đi để tránh trùng lặp
                if (ctx.datasetIndex === ctx.chart.data.datasets.length - 1) {
                    let sum = 0;
                    let dataIndex = ctx.dataIndex;
                    // Cộng dồn giá trị của tất cả các tầng trong cột này
                    ctx.chart.data.datasets.forEach(dataset => {
                        sum += dataset.data[dataIndex];
                    });
                    return sum; // Trả về con số tổng
                } else {
                    return ""; // Các tầng dưới trả về rỗng để không hiện số lẻ
                }
            },
            color: '#000',      // Màu chữ đen
            anchor: 'end',      // Điểm neo ở đỉnh cột
            align: 'top',       // Đẩy con số lên phía trên đỉnh
            offset: -5,        // Đẩy con số lên cao hơn một chút
            font: {
                weight: 'bold',
                size: 12,
            }
            }
            },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: { 
                stacked: true, // Bật chế độ chồng cột cho trục X
                ticks: {
                maxRotation: 0, // Không cho phép xoay tối đa
                minRotation: 0,  // Luôn giữ góc xoay là 0 độ
                font: {
                    size: 10 // Chỉnh kích thước chữ nhỏ lại để đủ chỗ nằm ngang
                }   
                }
            },
            y: {
                stacked: true, // Bật chế độ chồng cột cho trục Y
                beginAtZero: true // Trục dọc bắt đầu từ số 0
            }
        }
    }
});


async function addrow() 
{
 // 1. Tìm bảng theo ID
    const table = document.getElementById("input-repair");

    if (!table) {
        console.error("Không tìm thấy bảng có ID: repair-table");
        return;
    }

// 1. Kiểm tra chính xác ID của phần bạn muốn chèn hàng vào
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
            <td><input type="text" class="row-name0" placeholder=Name..."></td>
            <td><input type="text" class="row-name1" placeholder=MC..."></td>
            <td><input type="text" class="row-name2" placeholder=Name..."></td>
            <td><input type="text" class="row-name3" placeholder=Sec..."></td>
            <td><input type="text" class="row-name4" placeholder=Alarm..."></td>
            <td><input type="text" class="row-name5" placeholder=Device..."></td>

            <td><input type="date" class="row-date1"></td>
            <td><input type="date" class="row-date2"></td>
            <td><input type="date" class="row-date3"></td>
            <td><input type="date" class="row-date4"></td>
            <td><input type="date" class="row-date5"></td>
            <td><input type="date" class="row-date6"></td>
            <td>
                <select class="row-rate">
                    <option value="0">0%</option>
                    <option value="10">10%</option>
                    <option value="30">30%</option>
                    <option value="50">50%</option>
                    <option value="70">70%</option>
                    <option value="90">90%</option>
                </select>   
            </td>
            <td>
                <select class="row-status">
                    <option value="Chờ xác nhận">Chờ xác nhận</option>
                    <option value="Kiểm tra">Kiểm tra</option>
                    <option value="Chờ linh kiện">Chờ linh kiện</option>
                    <option value="Kaizen sửa">Kaizen sửa</option>
                    <option value="NCC sửa">NCC sửa</option>
                    <option value="hoan thanh">Hoan Thanh</option>
                    <option value="huy">Huy Y/C</option>
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
    const data = {
        action: "AddRow", // Hoặc "update" nếu bạn muốn cập nhật dòng cũ
        rowIndex: row.dataset.rowId, // Nếu là update, cần dòng này để biết vị trí
        name: row.querySelector(".row-name0").value,
        mayso: row.querySelector(".row-name1").value,
        thietbi: row.querySelector(".row-name2").value,
        bophan: row.querySelector(".row-name3").value,
        loi: row.querySelector(".row-name4").value,
        linhKien: row.querySelector(".row-name5").value,
        ngayCan: row.querySelector(".row-date1").value,
        keHoachKaizen: row.querySelector(".row-date2").value,
        tiepNhan: row.querySelector(".row-date3").value,
        muaHang: row.querySelector(".row-date4").value,
        kaizen: row.querySelector(".row-date5").value,
        nCC: row.querySelector(".row-date6").value,
        ngayHT: row.querySelector(".row-rate").value,
        trangThai: row.querySelector(".row-status").value
    };

    if (!data.loi || !data.thietbi || !data.bophan || !data.ngayCan || !data.name) {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    button.innerText = "Đang lưu...";
    button.disabled = true;

    try {
        // 3. Gửi bằng phương thức POST với Header chuẩn
        const response = await fetch(SCRIPT_URL, {
            method: "POST",
            redirect: "follow",
            headers: { "Content-Type": "text/plain;charset=utf-8" },
            body: JSON.stringify(data)
        });

        // Với text/plain, ta có thể đọc được phản hồi từ Apps Script
        const resultText = await response.text(); 
        
        if (resultText === "Added" || resultText === "Updated") {
            alert("Thành công: " + resultText);
            row.remove(); 
        } else {
            throw new Error("Máy chủ phản hồi: " + resultText);
        }

    } catch (error) {
        console.error("Lỗi:", error);
        alert("Không thể lưu: " + error.message);
        button.innerText = "Lưu";
        button.disabled = false;
    }
}
// Hàm hiển thị màu sắc cho trạng thái
document.addEventListener("DOMContentLoaded", function() {
    const tableBody = document.getElementById("data-repair");

    // Nếu không tìm thấy bảng thì dừng lại
    if (!tableBody) return; 

    // Hàm thực hiện việc tô màu
    function applyColoring() {
        let rows = tableBody.querySelectorAll("tr");
        
        rows.forEach(function(row) {
            let cells = row.querySelectorAll("td");

            // Kiểm tra xem hàng có đủ số cột không
            if (cells.length >= 14) {
                // Cột TIẾN ĐỘ là cột 13 (index 12)
                let statusValue = cells[13].textContent.trim();

                // Dùng .includes() thay vì === để đề phòng trường hợp chữ "Kiểm tra" nằm chung với nút "Sửa"
                if (statusValue === "Kiểm tra" || statusValue === "Kaizen sửa" || statusValue === "NCC sửa") {
                    row.style.backgroundColor = "yellow"; 
                }
                if (statusValue === "Chờ linh kiện") {
                    row.style.backgroundColor = "#FFD580";// màu cam nhạt
                }
                if (statusValue === "Hoan thanh") {
                    row.style.backgroundColor = "#0c9731";// màu xanh lá đậm
                }
            }
        });
    }

    // Tạo một 'Người canh gác' (Observer) để theo dõi sự thay đổi của bảng
    const observer = new MutationObserver(function(mutationsList, observer) {
        // Mỗi khi bảng được thêm dữ liệu (thêm thẻ tr), hàm tô màu sẽ tự động chạy
        applyColoring();
    });

    // Bắt đầu theo dõi bảng id="data-repair"
    observer.observe(tableBody, { childList: true, subtree: true });
});


async function loadData() {
    const finalUrl = `${SCRIPT_URL}?action=${"KHRepair"}`;
    try {
        const response = await fetch(finalUrl, {
            method: 'GET',
            redirect: 'follow' // Bắt buộc phải có dòng này để tránh lỗi CORS
        });

        if (!response.ok) throw new Error("Không thể kết nối Google Sheets");

        const responseObj = await response.json();
        const data = responseObj.data; // Giả sử dữ liệu trả về có cấu trúc { data: [...] }
        const tbody = document.getElementById("data-repair");

        if (!tbody) {
            console.error("LỖI CỰC KỲ QUAN TRỌNG: Không tìm thấy <tbody>. Hãy kiểm tra lại ID bảng trong HTML!");
            return; // Dừng lại ở đây để không bị báo lỗi 'innerHTML'
        }

        tbody.innerHTML = ""; // Xóa bảng cũ để nạp bảng mới

        // Bắt đầu duyệt từ hàng thứ 1 (bỏ qua hàng tiêu đề 0)
        for (let i = 1; i < data.length; i++) {
            let row = tbody.insertRow();
            row.dataset.rowId = i + 1; // Gán chỉ số hàng để dễ quản lý sau này nếu cần
            row.insertCell(0).innerText = data[i][0]; // Name
            row.insertCell(1).innerText = data[i][1]; // MC
            row.insertCell(2).innerText = data[i][2]; // Thiet bi
            row.insertCell(3).innerText = data[i][3]; // Bo Phan
            row.insertCell(4).innerText = data[i][4]; // Noi dung loi
            row.insertCell(5).innerText = data[i][5]; // Linh kien thay the
            row.insertCell(6).innerText = formatDateDisplay(data[i][6]); // Ngay can
            row.insertCell(7).innerText = formatDateDisplay(data[i][7]); // Ke hoach Kaizen
            row.insertCell(8).innerText = formatDateDisplay(data[i][8]); // Ngay tiep nhan
            row.insertCell(9).innerText = formatDateDisplay(data[i][10]); // Ngay mua hang
            row.insertCell(10).innerText = formatDateDisplay(data[i][11]); // Ngay Kaizen sưa
            row.insertCell(11).innerText = formatDateDisplay(data[i][12]); // Ngay NCC sưa
            row.insertCell(12).innerText = data[i][13]*1 + "%"; // Trang thai  
            row.insertCell(13).innerText = data[i][15]; // Trang thai         
            let actionCell = row.insertCell(14); // Cột hành động
            actionCell.innerHTML = `<button onclick="editRow(this)">Sửa</button>`; // Nút sửa (chưa có chức năng)
        }   
        console.log("Đã cập nhật dữ liệu thành công!");
    } 
    catch (error) {
        console.error("Lỗi lấy dữ liệu:", error);
    }
}

function formatDateDisplay(dateString) {
    if (!dateString) return "";
    
    // Tạo đối tượng ngày từ chuỗi hệ thống
    const date = new Date(dateString);
    
    // Kiểm tra nếu ngày không hợp lệ
    if (isNaN(date.getTime())) return dateString;

    // Lấy Ngày, Tháng, Năm
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Tháng trong JS chạy từ 0-11
    const year = date.getFullYear();

    return `${day}/${month}/${year}`; // Trả về định dạng VN
}

function editRow(button) {
        
    // Dừng tự động load để tránh bị mất giao diện đang sửa
    clearInterval(autoLoad);
    console.log("đã tắt autoload");
    const row = button.parentElement.parentElement;
    const cells = row.cells;
    // Lấy giá trị cũ của ô cần sửa (ví dụ ô "Trạng thái")
    const data = cells[13].innerText;
    // Lưu lại giá trị cũ để hiển thị trong input
    const status = cells[13].innerText;
    const rate = cells[12].innerText.replace("%", ""); // Lấy giá trị và bỏ dấu %
    // Biến các ô thành input
  //  cells[0].innerHTML = `<input type="text" class="edit-name0" value="${cells[0].innerText}">`;
    cells[1].innerHTML = `<input type="text" class="edit-name1" value="${cells[1].innerText}">`;
    cells[2].innerHTML = `<input type="text" class="edit-name2" value="${cells[2].innerText}">`;
    cells[3].innerHTML = `<input type="text" class="edit-name3" value="${cells[3].innerText}">`;
    cells[4].innerHTML = `<input type="text" class="edit-name4" value="${cells[4].innerText}">`;
    cells[5].innerHTML = `<input type="text" class="edit-name5" value="${cells[5].innerText}">`;
    cells[6].innerHTML = `<input type="date" class="edit-date1" value="${formatDate(cells[6].innerText)}">`;
    cells[7].innerHTML = `<input type="date" class="edit-date2" value="${formatDate(cells[7].innerText)}">`;
    cells[8].innerHTML = `<input type="date" class="edit-date3" value="${formatDate(cells[8].innerText)}">`;
    cells[9].innerHTML = `<input type="date" class="edit-date4" value="${formatDate(cells[9].innerText)}">`;
    cells[10].innerHTML = `<input type="date" class="edit-date5" value="${formatDate(cells[10].innerText)}">`;
    cells[11].innerHTML = `<input type="date" class="edit-date6" value="${formatDate(cells[11].innerText)}">`;
    cells[12].innerHTML = `<select class="edit-rate">
        <option value="0" ${rate === '0' ? 'selected' : ''}>0%</option>
        <option value="10" ${rate === '10' ? 'selected' : ''}>10%</option>
        <option value="30" ${rate === '30' ? 'selected' : ''}>30%</option>
        <option value="50" ${rate === '50' ? 'selected' : ''}>50%</option>
        <option value="70" ${rate === '70' ? 'selected' : ''}>70%</option>
        <option value="90" ${rate === '90' ? 'selected' : ''}>90%</option>
    </select>`;
    cells[13].innerHTML = `
        <select class="edit-status">
            <option value="Kiểm tra" ${status === 'Kiểm tra' ? 'selected' : ''}>Kiểm tra</option>
            <option value="Chờ linh kiện" ${status === 'Chờ linh kiện' ? 'selected' : ''}>Chờ linh kiện</option>
            <option value="Bộ phận xác nhận" ${status === 'Bộ phận xác nhận' ? 'selected' : ''}>Bộ phận xác nhận</option>
            <option value="Kaizen sửa" ${status === 'Kaizen sửa' ? 'selected' : ''}>Kaizen sửa</option>
            <option value="NCC sửa" ${status === 'NCC sửa' ? 'selected' : ''}>NCC sửa</option>
            <option value="hoan thanh" ${status === 'hoan thanh' ? 'selected' : ''}>Hoan Thanh</option>
            <option value="huy" ${status === 'huy' ? 'selected' : ''}>Huy Y/C</option>
        </select>`;
    // Thay nút "Sửa" thành nút "Cập nhật"
    cells[14].innerHTML = `<button onclick="updateRow(this,'${data}')">Cập nhật</button> <button onclick="startAutoLoad()">Hủy</button>`;
}

// Hàm phụ để định dạng ngày yyyy-mm-dd cho ô input date
function formatDate(dateStr) {
    if(!dateStr) return "";
    const parts = dateStr.split("/"); // Giả sử date từ sheet là dd/mm/yyyy
    if(parts.length === 3) return `${parts[2]}-${parts[1]}-${parts[0]}`;
    return dateStr;
}

function startAutoLoad() {
    if (autoLoad) clearInterval(autoLoad);
    autoLoad = setInterval(loadData, 5000);
    console.log("đã bật autoload");
}

async function updateRow(button, oldStatus) {
    const row = button.parentElement.parentElement;
    const rowIndex = row.dataset.rowId; // Lấy vị trí hàng đã lưu ở bước 1
    const Linhkien = row.querySelector(".edit-name5").value;
    // KHAI BÁO CÁC BIẾN ĐỂ TRÁNH LỖI REFERENCE ERROR
    let TGKiemTra = "";
    let TGSuaChua = "";
    let tiepNhan, muaHang, kaizen, nCC;
    
    // ... Giữ nguyên logic tính toán ngày tháng của bạn ...
    const status = row.querySelector(".edit-status").value;

    if (status === "hoan thanh") {
        if (!Linhkien) { alert("Vui lòng nhập linh kiện thay thế!"); return; }
        TGSuaChua = prompt("Nhập thời gian đã sửa chữa (số ngày):");
        if (!TGSuaChua) { alert("Vui lòng nhập thời gian!"); return; }
    }

    // Logic ngày tháng (giả định hàm formatDate đã có sẵn trong dự án của bạn)
    tiepNhan = (status === "Kiểm tra" && oldStatus !== "Kiểm tra") ? 
                new Date().toISOString().split('T')[0] : formatDate(row.cells[8].querySelector(".edit-date3").value);
    
    if (status === "Chờ linh kiện" && oldStatus !== "Chờ linh kiện") {
        TGKiemTra = prompt("Nhập thời gian đã kiểm tra (số ngày):");
        if (!TGKiemTra) { alert("Vui lòng nhập thời gian!"); return; }
        muaHang = new Date().toISOString().split('T')[0];
    } else {
        muaHang = formatDate(row.cells[9].querySelector(".edit-date4").value);
    }
    
    kaizen = (status === "Kaizen sửa" && oldStatus !== "Kaizen sửa") ? 
              new Date().toISOString().split('T')[0] : formatDate(row.cells[10].querySelector(".edit-date5").value);
    
    nCC = (status === "NCC sửa" && oldStatus !== "NCC sửa") ? 
           new Date().toISOString().split('T')[0] : formatDate(row.cells[11].querySelector(".edit-date6").value);

    const updatedData = {
        action: "update",
        rowIndex: rowIndex,
        mayso: row.querySelector(".edit-name1").value,
        thietbi: row.querySelector(".edit-name2").value,
        bophan: row.querySelector(".edit-name3").value,
        loi: row.querySelector(".edit-name4").value,
        linhKien: Linhkien,
        ngayCan: formatDate(row.cells[6].querySelector(".edit-date1").value),
        keHoachKaizen: formatDate(row.cells[7].querySelector(".edit-date2").value),
        tiepNhan: tiepNhan,
        TGkiemTra: TGKiemTra,
        muaHang: muaHang,
        kaizen: kaizen,
        nCC: nCC,
        ngayHT: row.querySelector(".edit-rate").value,
        TGsuaChua: TGSuaChua,
        trangThai: status
    };

    button.disabled = true;
    button.innerText = "Đang lưu...";

    try {
        // GỬI BẰNG PHƯƠNG THỨC POST CHUẨN
        const response = await fetch(SCRIPT_URL, {
            method: "POST",
            redirect: "follow",
            headers: { "Content-Type": "text/plain;charset=utf-8" },
            body: JSON.stringify(updatedData)
        });
        
        const result = await response.text();
        
        if (result === "Updated") {
            alert("Cập nhật thành công!");
            // Đóng chế độ chỉnh sửa (giả sử bạn có hàm này)
            // finishEditMode(row); 
        } else {
            throw new Error(result);
        }
    } catch (error) {
        console.error("Lỗi:", error);
        alert("Không thể cập nhật!");
    } finally {
        button.disabled = false;
        button.innerText = "Lưu";
        startAutoLoad(); 
    }
}

// Hàm bật/tắt menu xổ xuống
function toggleMenu() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Đóng menu nếu người dùng click ra ngoài vùng nút 3 gạch
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

window.onload = function() {
    const finalUrl = `${SCRIPT_URL}?action=${"KHRepair"}`;
    fetch(finalUrl)
        .then(response => response.json())
        .then(responseObj => {
            console.log("Dữ liệu Apps Script trả về:", responseObj);
            if(responseObj && responseObj.dataSelect){
                for (let i = 1; i <= 9; i++) {
                    let btn = document.getElementById('btn-' + i);
                    if (btn && responseObj.dataSelect[i - 1] !== undefined) {
                        btn.innerText = "⛳ " + responseObj.dataSelect[i - 1];
                    }
                }
                
            }
            })
        .catch(error =>{ console.error('Lỗi:', error);
            for (let i = 1; i <= 9; i++) {
                let btn = document.getElementById('btn-' + i);
                if (btn) btn.innerText = "ErrorLoadData";
            }
            });
    }

startAutoLoad(); // Bắt đầu tự động tải dữ liệu 