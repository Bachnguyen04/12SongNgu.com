function randomNumber() {
  var number = Math.floor(Math.random()*42);

  const hocSinhLopSN = [
    "Nguyễn Chúc An",
    "Phạm Phú An",
    "Trần Quốc An",
    "Lưu Tuấn Anh",
    "Nguyễn Công Anh",
    "Nguyễn Nhật Anh",
    "Phan Ngân Anh",
    "Trần Hà Anh",
    "Trần Mỹ Anh",
    "Vương Thúy Anh",
    "Nguyễn Quang Bách",
    "Lê Vũ Bảo Châu",
    "Cấn Việt Dũng",
    "Nguyễn Tiến Đức",
    "Nguyễn Vân Hà",
    "Phạm Quang Huy",
    "Đào Duy Hưng",
    "Đỗ Anh Khôi",
    "Phạm Trung Kiên",
    "Bùi Khánh Lam",
    "Vũ Đức Lâm",
    "Đỗ Khánh Linh",
    "Nguyễn Vũ Khánh Linh",
    "Phạm Hồ Hải Linh",
    "Phạm Khánh Linh",
    "Đoàn Hải Long",
    "Trương Ngọc Mai",
    "Đỗ Bá Minh",
    "Ngô Trần Hoàng Minh",
    "Phạm Hải Nam",
    "Vương Hải Nam",
    "Lê Quỳnh Nhi",
    "Nguyễn Ngọc Quang",
    "Đàm Thái Sơn",
    "Phùng Thị Bích Thủy",
    "Hoàng Anh Thư",
    "Lê Vũ Quỳnh Trang",
    "Ngô Huyền Trang",
    "Trịnh Thị Thủy Tú",
    "Nguyễn Minh Tuấn",
    "Trần Xuân Tùng",
    "Nguyễn Lân Uyên",
    ];

  let outputNumber = document.getElementById("nameOutput");

  outputNumber.innerHTML = hocSinhLopSN[number]

  }