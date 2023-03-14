function NhanVien() {
    this.taiKhoan = '';
    this.hoTen = '';
    this.email = '';
    this.matKhau = '';
    this.ngayLam = '';
    this.luongCoBan = '';
    this.gioLam = '';
    this.heSoLuong = '';
    this.chucVu = '';
}

NhanVien.prototype.tinhLuong = function(){
    if(this.chucVu === 'Giám đốc'){
        return this.luongCoBan * 3;
    }else if(this.chucVu === 'Trưởng phòng'){
        return this.luongCoBan * 2;
    }else{
        return this.luongCoBan;
    }
}

NhanVien.prototype.xepLoai = function(){
    if(this.gioLam >= 192){
        return ' Xuất sắc';
    }else if(this.gioLam >= 176 && this.gioLam < 192){
        return ' Giỏi';
    }else if(this.gioLam >= 160 && this.gioLam < 176){
        return ' Khá';
    }else{
        return ' Trung bình';
    }
}