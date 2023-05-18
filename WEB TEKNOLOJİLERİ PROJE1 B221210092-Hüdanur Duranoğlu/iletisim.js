function validateForm() {
    var ad = document.getElementById("isimKullanici").value;
    var soyad = document.getElementById("soyIsimKullanici").value;
    var mail = document.getElementById("mailKullanici").value;
    var sifre = document.getElementById("sifreKullanici").value;
  
    var sonucDiv = document.getElementById("Sonuc");
    sonucDiv.innerHTML = ""; // Önceki sonuçları temizle
  
    // Ad, soyad, mail ve şifre alanlarının boş olup olmadığını kontrol et
    if (ad == "" || soyad == "" || mail == "" || sifre == "") {
      sonucDiv.innerHTML = "Lütfen bütün alanları doldurunuz.";
      return;
    }
  
    // E-posta formatını kontrol et
    var emailRegex = /^[a-zA-Z0-9._-]+@sakarya\.edu\.tr$/;
    if (!emailRegex.test(mail)) {
      sonucDiv.innerHTML = "Lütfen Geçerli bir sakarya.edu.tr e-posta adresi girin.";
      return;
    }
  
  var nameRegex = /^[a-zA-ZğüşıöçĞÜŞİÖÇ\s]+$/;
    if (!nameRegex.test(ad) || !nameRegex.test(soyad)) {
      sonucDiv.innerHTML = "Ad ve soyad alanlarına sadece harf girin.";
      return;
    }
  
    // Şifre en az 6 karakter olmalı
    if (sifre.length < 6) {
      sonucDiv.innerHTML = "Şifre en az 6 karakterden oluşmalıdır!";
      return;
    }
  
    // Tüm kontroller başarılı ise 
    sonucDiv.innerHTML = "Başarılı bir şekilde Formu doldurdunuz.Gönder butonuna basınız";
  }
