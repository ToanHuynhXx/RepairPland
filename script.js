const SCRIPT_URL = "https://script.google.com/macros/s/AKfycby_JDqlDJ9Eip_yuDCcjm9Cib0Xh1o4xS0OHiCju4ciok3B7Z_10xkS4-MjM0GllpIV/exec";

async function addrow() {
    // 1. Lấy dữ liệu từ các ô nhập liệu (ví dụ lấy từ hàng cuối hoặc form)
    const data = {
        stt: document.querySelectorAll("#repair-table").length + 1,
        thietBi: "Thiết bị mới", // Bạn có thể lấy từ input.value
        ngayBatDau: "2024-07-01",
        ngayKetThuc: "2024-07-05",
        trangThai: "Đang sửa chữa"
    };

    // 2. Gửi dữ liệu lên Google Sheets
    await fetch(SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(data)
    });

    // 3. Sau khi gửi xong, gọi hàm load dữ liệu để tất cả các máy đều thấy
    loadData();
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
        const tbody = document.querySelector("#repair-table");

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
setInterval(loadData, 5000);
loadData(); // Chạy lần đầu khi mở web