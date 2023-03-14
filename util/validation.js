

function Validation(){
  // Kiểm tra rỗng
  this.kiemTraRong=function(value,idError,name){
    if(value.trim()=== ''){
        document.getElementById(idError).innerHTML=`${name} không được bỏ trống !`;
        return false;
    }else
    document.getElementById(idError).innerHTML='';
        return true;
  }
  //Kiểm tra định dạng tài Khoản
  this.kiemTraGiaTri= function(value,idError,name,minValue,maxValue){
    var regexNumber= /^[0-9]+$/;
    if(regexNumber.test(value)){
        // Kiểm tra giá trị
        if(value.length<minValue || value.length>maxValue){
            document.getElementById(idError).innerHTML=`${name} giá trị từ ${minValue} đến ${maxValue} !`;
            return false
        }
        document.getElementById(idError).innerHTML='';
        return true;
    }
    document.getElementById(idError).innerHTML=`${name} giá trị không hợp lệ !`;
    return false;
  }
  // Kiểm tra định dạng kí tự
  this.kiemTraKyTu = function(value,idError,name){
    var regexLetter=/^[a-v xyỳọáầảấờễàạằệếýộậốũứĩõúữịỗìềểẩớặòùồợãụủíỹắẫựỉỏừỷởóéửỵẳẹèẽổẵẻỡơôưăêâđ ]+$/;
  
    if(regexLetter.test(value)){
      document.getElementById(idError).innerHTML='';
      return true;
    }
    document.getElementById(idError).innerHTML=`${name} phải là chữ !`;
    return false; 
  }
  this.kiemTraEmail =function (value,idError,name){
    var regexEmail= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\ [[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(regexEmail.test(value)){
        document.getElementById(idError).innerHTML='';
        return true;
    }
    document.getElementById(idError).innerHTML=`${name} không hợp lệ`;
    return false;
  }
  this.kiemTraMatKhau = function(value,idError,name){
    var regexMatKhau= /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,10}$/;
    console.log(value);
    if(regexMatKhau.test(value)){
      document.getElementById(idError).innerHTML='';
        return true;
    }
    document.getElementById(idError).innerHTML=`${name} gồm 6-10 ký tự,có ít nhất 1 ký tự số, 1 chữ cái Viết hoa và 1 ký tự đặc biệt`;
    return false;
  }
  this.kiemTraNgayLam = function(value,idError,name){
    var regexNgayLam= /^(0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2}$/;
    if(regexNgayLam.test(value)){
      document.getElementById(idError).innerHTML='';
        return true;
    }
    document.getElementById(idError).innerHTML=`${name} không đúng định dạng`;
    return false;
  }
  this.kiemTraLuongCB=function(value,idError,name,minValue,maxValue){
    var regexNumber= /^[0-9]+$/;
    if(regexNumber.test(value)){
        // Kiểm tra giá trị
        if(Number(value)<minValue || Number(value)>maxValue){
            document.getElementById(idError).innerHTML=`${name} giá trị từ ${minValue} đến ${maxValue} !`;
            return false
        }
        document.getElementById(idError).innerHTML='';
        return true;
    }
    document.getElementById(idError).innerHTML=`${name} giá trị không hợp lệ !`;
    return false;       
  }
  this.kiemTraGioLam=function(value,idError,name,minValue,maxValue){
    var regexNumber= /^[0-9]+$/;
    if(regexNumber.test(value)){
        // Kiểm tra giá trị
        if(Number(value)<minValue || Number(value)>maxValue){
            document.getElementById(idError).innerHTML=`${name} giá trị từ ${minValue} đến ${maxValue} !`;
            return false
        }
        document.getElementById(idError).innerHTML='';
        return true;
    }
    document.getElementById(idError).innerHTML=`${name} không hợp lệ !`;
    return false;       
  }
  this.kiemTraChucVu=function(value,idError,name){
    var chucVu=document.getElementById('chucvu').value;
    if(chucVu==="Chọn chức vụ"){
      document.getElementById(idError).innerHTML=`${name} không được bỏ trống !`;
            return false
    }
    document.getElementById(idError).innerHTML='';
        return true;
  }
}

