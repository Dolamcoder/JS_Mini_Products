function getEle(id) {
    return document.getElementById(id);
}

// Hàm lấy giá trị bill
function bill() {
    return parseFloat(getEle('bill').value) || 0;
}

// Xử lý sự kiện khi nhấn nút "TÍNH NGAY!"
getEle('tinhTien').onclick = function() {
    // ngắn hành vi sumit bình thường
    event.preventDefault();
    // Lấy giá trị tip (phần trăm) từ select
    var tip = parseFloat(getEle('service').value);
    var soNguoi = parseInt(getEle('soNguoi').value) || 1;

    // Kiểm tra dữ liệu đầu vào
    if (bill() <= 0 || tip ==0) {
        alert("Vui lòng nhập số tiền bill và chọn mức độ hài lòng!");
        return;
    }

    // Tính tổng tiền tip
    var tongTip = bill() * tip;

    // Tính tiền mỗi người
    var tienMoiNguoi = tongTip / soNguoi;

    // Hiển thị kết quả
    getEle('thanhTien').innerText = tienMoiNguoi.toFixed(2); 
    getEle('chia_tien').style.display='block';
}