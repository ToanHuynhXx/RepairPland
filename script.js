const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwey6DuLnJGlPaaIcmIIMsXPoSyYA2Gfzd6C5N5EK8Mb-AcYx4sE-4tYvUxMY9ZzcaV/exec";

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
    const Name = row.querySelector(".row-name0").value;
    const MC = row.querySelector(".row-name1").value;
    const ThietBi = row.querySelector(".row-name2").value;
    const Bophan = row.querySelector(".row-name3").value;
    const Loi = row.querySelector(".row-name4").value;
    const LinhKien = row.querySelector(".row-name5").value;
    const DateKH = row.querySelector(".row-date1").value;
    const DateTN = row.querySelector(".row-date2").value;
    const DateMua = row.querySelector(".row-date3").value;
    const DateKZ = row.querySelector(".row-date4").value;
    const DateNCC = row.querySelector(".row-date5").value;
    const DateHT = row.querySelector(".row-rate").value;
    const status = row.querySelector(".row-status").value;

    if (!Loi || !ThietBi || !Bophan || !DateKH || !Name) {
        alert("Vui lòng nhập thông tin!");
        return;
    }

    // Đổi trạng thái nút để người dùng biết đang xử lý
    button.innerText = "Đang lưu...";
    button.disabled = true;

    const data = {
        name: Name,
        mayso: MC,
        thietbi: ThietBi,
        bophan: Bophan,
        loi: Loi,
        linhKien: LinhKien,
        ngayCan: DateKH,
        tiepNhan: DateTN,
        muaHang: DateMua,
        kaizen: DateKZ,
        nCC: DateNCC,
        ngayHT: DateHT,
        trangThai: status
    };
    try {
        // 3. Gửi lên Google Sheets
        await fetch(SCRIPT_URL, {
            method: "POST",
            mode: "no-cors", // Để không bị lỗi CORS
            body: JSON.stringify(data)
        });

        alert("Đã lưu thiết bị: " + ThietBi);
        
        // 4. Xóa hàng này sau khi lưu xong để tránh nhập trùng
        row.remove(); 
        
        // 5. Tải lại danh sách dữ liệu hiển thị bên dưới (nếu có)
       // if (typeof loadData === "function") loadData();

    } catch (error) {
        console.error("Lỗi:", error);
        alert("Không thể lưu, hãy thử lại!");
        button.innerText = "Lưu";
        button.disabled = false;
    }
}
async function loadData() {
 const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwey6DuLnJGlPaaIcmIIMsXPoSyYA2Gfzd6C5N5EK8Mb-AcYx4sE-4tYvUxMY9ZzcaV/exec";
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
            row.dataset.rowId = i + 1; // Gán chỉ số hàng để dễ quản lý sau này nếu cần
            row.insertCell(0).innerText = data[i][0]; // Name
            row.insertCell(1).innerText = data[i][1]; // MC
            row.insertCell(2).innerText = data[i][2]; // Thiet bi
            row.insertCell(3).innerText = data[i][3]; // Bo Phan
            row.insertCell(4).innerText = data[i][4]; // Noi dung loi
            row.insertCell(5).innerText = data[i][5]; // Linh kien thay the
            row.insertCell(6).innerText = formatDateDisplay(data[i][6]); // Ngay can
            row.insertCell(7).innerText = formatDateDisplay(data[i][7]); // Ngay tiep nhan
            row.insertCell(8).innerText = formatDateDisplay(data[i][8]); // Ngay mua hang
            row.insertCell(9).innerText = formatDateDisplay(data[i][9]); // Ngay kaizen sửa
            row.insertCell(10).innerText = formatDateDisplay(data[i][10]); // Ngay ncc sưa
            row.insertCell(11).innerText = data[i][11]*1 + "%"; // Ngay hoan thanh
            row.insertCell(12).innerText = data[i][12]; // Trang thai           
            let actionCell = row.insertCell(13); // Cột hành động
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
    const data = cells[12].innerText;
    // Lưu lại giá trị cũ để hiển thị trong input
    const status = cells[12].innerText;
    const rate = cells[11].innerText.replace("%", ""); // Lấy phần trăm và bỏ dấu %
    // Biến các ô thành input
    cells[11].innerHTML = `<select class="edit-rate">
        <option value="0" ${rate === '0' ? 'selected' : ''}>0%</option>
        <option value="10" ${rate === '10' ? 'selected' : ''}>10%</option>
        <option value="30" ${rate === '30' ? 'selected' : ''}>30%</option>
        <option value="50" ${rate === '50' ? 'selected' : ''}>50%</option>
        <option value="70" ${rate === '70' ? 'selected' : ''}>70%</option>
        <option value="90" ${rate === '90' ? 'selected' : ''}>90%</option>
    </select>`;
    cells[12].innerHTML = `
        <select class="edit-status">
            <option value="Kiểm tra" ${status === 'Kiểm tra' ? 'selected' : ''}>Kiểm tra</option>
            <option value="Chờ linh kiện" ${status === 'Chờ linh kiện' ? 'selected' : ''}>Chờ linh kiện</option>
            <option value="Kaizen sửa" ${status === 'Kaizen sửa' ? 'selected' : ''}>Kaizen sửa</option>
            <option value="NCC sửa" ${status === 'NCC sửa' ? 'selected' : ''}>NCC sửa</option>
            <option value="hoan thanh" ${status === 'hoan thanh' ? 'selected' : ''}>Hoan Thanh</option>
            <option value="huy" ${status === 'huy' ? 'selected' : ''}>Huy Y/C</option>
        </select>`;
    // Thay nút "Sửa" thành nút "Cập nhật"
    cells[13].innerHTML = `<button onclick="updateRow(this,'${data}')">Cập nhật</button> <button onclick="startAutoLoad()">Hủy</button>`;

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
    if (row.cells[12].querySelector(".edit-status").value === "Kiểm tra" && oldStatus !== "Kiểm tra") {
        tiepNhan = new Date().toISOString().split('T')[0]; // Lấy ngày hiện tại theo định dạng yyyy-mm-dd
    }
    else tiepNhan = formatDate(row.cells[7].innerText); // Nếu không phải "Kiểm tra" thì giữ nguyên ngày cũ
    if (row.cells[12].querySelector(".edit-status").value === "Chờ linh kiện"&& oldStatus !== "Chờ linh kiện") {
        muaHang = new Date().toISOString().split('T')[0]; // Lấy ngày hiện tại theo định dạng yyyy-mm-dd
    }
    else muaHang = formatDate(row.cells[8].innerText); // Nếu không phải "Chờ linh kiện" thì giữ nguyên ngày cũ
    if (row.cells[12].querySelector(".edit-status").value === "Kaizen sửa"&& oldStatus !== "Kaizen sửa") {
        kaizen = new Date().toISOString().split('T')[0]; // Lấy ngày hiện tại theo định dạng yyyy-mm-dd
    }
    else kaizen = formatDate(row.cells[9].innerText); // Nếu không phải "Kaizen sửa" thì giữ nguyên ngày cũ
    if (row.cells[12].querySelector(".edit-status").value === "NCC sửa"&& oldStatus !== "NCC sửa") {
        nCC = new Date().toISOString().split('T')[0]; // Lấy ngày hiện tại theo định dạng yyyy-mm-dd
    }
    else nCC = formatDate(row.cells[10].innerText); // Nếu không phải "NCC sửa" thì giữ nguyên ngày cũ
    const updatedData = {
        action: "update",
        rowIndex: rowIndex,
        tiepNhan: tiepNhan,
        muaHang: muaHang,
        kaizen: kaizen,
        nCC: nCC,
        ngayHT: row.querySelector(".edit-rate").value,
        trangThai: row.querySelector(".edit-status").value
    };

    button.disabled = true;
    button.innerText = "Đang lưu...";

    try {
        await fetch(SCRIPT_URL, {
            method: "POST",
            mode: "no-cors",
            body: JSON.stringify(updatedData)
        });
        
        alert("Cập nhật thành công!");
        startAutoLoad(); // Bật lại tự động tải
        } catch (error) {
        console.error("Lỗi:", error);
        alert("Không thể cập nhật!");
        }
}

startAutoLoad(); // Bắt đầu tự động tải dữ liệu 