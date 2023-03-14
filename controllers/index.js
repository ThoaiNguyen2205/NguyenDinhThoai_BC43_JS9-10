var mangNhanVien = [];
var kiemTra= new Validation();

document.getElementById("btnThem").onclick = function() {
  var nv = new NhanVien();
  nv.taiKhoan = document.getElementById('tknv').value;
  nv.hoTen = document.getElementById('name').value;
  nv.email = document.getElementById('email').value;
  nv.matKhau = document.getElementById('password').value;
  nv.ngayLam = document.getElementById('datepicker').value;
  nv.LuongCoBan = document.getElementById('luongCB').value;
  nv.chucVu = document.getElementById('chucvu').value;
  nv.gioLam = document.getElementById('gioLam').value;
  document.getElementById('btnThemNV').disabled = false;
}

// Thêm Nhân viên
document.getElementById('btnThemNV').onclick = function () {
  var nv = new NhanVien();
  nv.taiKhoan = document.getElementById('tknv').value;
  nv.hoTen = document.getElementById('name').value;
  nv.email = document.getElementById('email').value;
  nv.matKhau = document.getElementById('password').value;
  nv.ngayLam = document.getElementById('datepicker').value;
  nv.luongCoBan = document.getElementById('luongCB').value;
  nv.chucVu = document.getElementById('chucvu').value;
  nv.gioLam = document.getElementById('gioLam').value;
  // Kiểm tra rỗng
  var valid =true;
  valid =kiemTra.kiemTraRong(nv.taiKhoan,'tbTKNV','Tài khoản')&kiemTra.kiemTraRong(nv.hoTen,'tbTen','Họ tên')&kiemTra.kiemTraRong(nv.email,'tbEmail','Email')&kiemTra.kiemTraRong(nv.matKhau,'tbMatKhau','Mật khẩu')&kiemTra.kiemTraRong(nv.ngayLam,'tbNgay','Ngày làm')&kiemTra.kiemTraRong(nv.luongCoBan,'tbLuongCB','Lương cơ bản')&kiemTra.kiemTraRong(nv.gioLam,'tbGiolam','Giờ làm');
  // Kiểm tra định dạng tài khoản
  valid=valid&kiemTra.kiemTraGiaTri(nv.taiKhoan,'tbTKNV-so','Tài Khoản',4,6);
  // Kiểm tra định dạng họ tên
  valid= valid & kiemTra.kiemTraKyTu(nv.hoTen.toLowerCase(),'ktHoTen','Tên nhân viên');
  // Kiểm tra định dạng email
  valid=valid & kiemTra.kiemTraEmail(nv.email,'ktEmail','Email');
  // Kiểm tra định dạng mật khẩu
  valid=valid & kiemTra.kiemTraMatKhau(nv.matKhau,'ktMatKhau','Mật khẩu');
  // Kiểm tra định dạng ngày tháng
  valid=valid & kiemTra.kiemTraNgayLam(nv.ngayLam,'ktNgayLam','Ngày làm');
  // Kiểm tra lương cơ bản
  valid=valid & kiemTra.kiemTraLuongCB(nv.luongCoBan,'ktLuongCB','Lương cơ bản',1000000,20000000);
  // Kiểm tra giờ làm
  valid=valid & kiemTra.kiemTraGioLam(nv.gioLam,'ktGioLam','Giờ làm',80,200);
  // Kiểm tra chức vụ
  valid=valid & kiemTra.kiemTraChucVu(nv.gioLam,'tbChucVu','Chức vụ');
  if(!valid){
    return ;
  }

  mangNhanVien.push(nv);
  renderTableNhanVien(mangNhanVien);
  luuLocalStorage();
};

function renderTableNhanVien(arrNhanVien) {
  var htmlString = '';
  for (var i = 0; i < arrNhanVien.length; i++) {
    var nv = new NhanVien();
    nv = arrNhanVien[i];
    htmlString += `
        <tr>
        <td>${nv.taiKhoan}</td>
        <td>${nv.hoTen}</td>
        <td>${nv.email}</td>
        <td>${nv.ngayLam}</td>
        <td>${nv.chucVu}</td>
        <td> ${nv.tinhLuong()}</td>
        <td> ${nv.xepLoai()}</td>
        <td>
                        <button
                        class="btn btn-primary"
                        onclick="xoaNhanVien('${nv.taiKhoan}')"
                        >
                            Xóa
                        </button
                        >
                        <button
                        class="btn btn-danger mt-2"
                        onclick="suaNhanVien('${nv.taiKhoan}')"
                        data-toggle="modal"
                        data-target="#myModal"
                        >
                            Chỉnh Sửa
                        </button>
                    </td>
        </tr>
        `;
  }
  document.querySelector('tbody').innerHTML = htmlString;
  return htmlString;
}
// Xóa nhân viên
function xoaNhanVien(indelNV) {
  var indexDel = -1;
  for (var i = 0; i < mangNhanVien.length; i++) {
    if (mangNhanVien[i].taiKhoan === indelNV) {
      indexDel = i;
      break;
    }
  }
  mangNhanVien.splice(indexDel, 1);
  renderTableNhanVien(mangNhanVien);
  luuLocalStorage();
}
// chỉnh sửa nhân viên
function suaNhanVien(maNhanVienClick) {
  document.getElementById('tknv').disabled = true;
  document.getElementById('btnThemNV').disabled = true;
  for (var index = 0; index < mangNhanVien.length; index++) {
    if (mangNhanVien[index].taiKhoan === maNhanVienClick) {
      //in thông tin sinh viên tìm thấy lên giao diện
      document.getElementById('tknv').value = mangNhanVien[index].taiKhoan;
      document.getElementById('name').value = mangNhanVien[index].hoTen;
      document.getElementById('email').value = mangNhanVien[index].email;
      document.getElementById('password').value = mangNhanVien[index].matKhau;
      document.getElementById('datepicker').value =
      mangNhanVien[index].ngayLam;
      document.getElementById('luongCB').value = mangNhanVien[index].luongCoBan;
      document.getElementById('gioLam').value = mangNhanVien[index].gioLam;
      document.getElementById('chucvu').value = mangNhanVien[index].chucVu;
      break;
    }
  }
  if(!valid){
    return ;
  }
  
  renderTableNhanVien(mangNhanVien);
  luuLocalStorage();
}
// cập nhật thông tin nhân viên
document.getElementById('btnCapNhat').onclick = function () {
  var nhanVienEdit = new NhanVien();
  nhanVienEdit.taiKhoan = document.getElementById('tknv').value;
  nhanVienEdit.hoTen = document.getElementById('name').value;
  nhanVienEdit.email = document.getElementById('email').value;
  nhanVienEdit.matKhau = document.getElementById('password').value;
  nhanVienEdit.ngayLam = document.getElementById('datepicker').value;
  nhanVienEdit.luongCoBan = document.getElementById('luongCB').value;
  nhanVienEdit.chucVu = document.getElementById('chucvu').value;
  nhanVienEdit.gioLam = document.getElementById('gioLam').value;
  for (var index = 0; index < mangNhanVien.length; index++) {
    if (mangNhanVien[index].taiKhoan === nhanVienEdit.taiKhoan) {
      mangNhanVien[index].hoTen = nhanVienEdit.hoTen;
      mangNhanVien[index].email = nhanVienEdit.email;
      mangNhanVien[index].matKhau = nhanVienEdit.mayKhau;
      mangNhanVien[index].ngayLam = nhanVienEdit.ngayLam;
      mangNhanVien[index].luongCoBan = nhanVienEdit.luongCoBan;
      mangNhanVien[index].chucVu = nhanVienEdit.chucVu;
      mangNhanVien[index].gioLam = nhanVienEdit.gioLam;
      break;
    }
  }
  
  renderTableNhanVien(mangNhanVien);
  luuLocalStorage();
  if(!valid){
    return ;
  }
  // Sau khi cập nhật trả về rỗng
  document.getElementById('tknv').value = '';
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('password').value = '';
  document.getElementById('datepicker').value = '';
  document.getElementById('luongCB').value = '';
  document.getElementById('chucvu').value = '';
  document.getElementById('gioLam').value = '';
  
  
  document.getElementById('tknv').disabled = false;
  document.getElementById('btnThemNV').disabled = false;
  
};
// lưu thông tin trên LocalStorage
function luuLocalStorage() {
  var stringMangNhanVien = JSON.stringify(mangNhanVien);

  localStorage.setItem("mangNhanVien", stringMangNhanVien);
}
// lấy thông tin từ LocalStorage
function laylocalStorage() {
  if (localStorage.getItem('mangNhanVien')) {
    var stringMangNhanVien = localStorage.getItem('mangNhanVien');

    //Chuyển dữ string liệu về dạng object
    var mang = JSON.parse(stringMangNhanVien);
    for (var i = 0; i < mang.length; i++) {
      var nv = new NhanVien();
      nv.taiKhoan = mang[i].taiKhoan;
      nv.hoTen = mang[i].hoTen;
      nv.email = mang[i].email;
      nv.matKhau = mang[i].matKhau;
      nv.ngayLam = mang[i].ngayLam;
      nv.luongCoBan= mang[i].luongCoBan;
      nv.chucVu = mang[i].chucVu;
      nv.gioLam = mang[i].gioLam;
      nv.heSoLuong = mang[i].heSoLuong;
      mangNhanVien.push(nv);
    }
    console.log(mangNhanVien);
    //Gọi hàm tạo giao diện từ mảng
    renderTableNhanVien(mangNhanVien);
  }
}
laylocalStorage();

// tìm kiếm nhân viên
document.getElementById('searchName').oninput = function() {
    timKiemNhanVien(mangNhanVien);   
}
function timKiemNhanVien() {
  let search = document.querySelector('#searchName').value;
  let newNhanVien = mangNhanVien.filter((nv) => {
    let xepLoai = nv.xepLoai().toLowerCase();
    search = search.toLowerCase();

    return xepLoai.indexOf(search) !== -1;
  });
  renderTableNhanVien(newNhanVien);
}



