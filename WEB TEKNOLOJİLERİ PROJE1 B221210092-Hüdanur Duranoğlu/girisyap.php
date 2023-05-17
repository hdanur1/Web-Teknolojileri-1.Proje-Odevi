<?php

$kullaniciAdi = "b221210092@sakarya.edu.tr";
$sifre1 = "b221210092";

$mail = $_POST["kullaniciAdi"];

if (filter_var($mail, FILTER_VALIDATE_EMAIL)){
	
    if (($kullaniciAdi==$mail) && ($_POST["sifre"]==$sifre1)) {
        echo "Hoşgeldiniz ". $sifre1."<br>";
        echo "<a href=hakkımda.html>Siteye Girmek İçin Tıklayınız</a>";
    }

    else {
        
        echo "Kullanıcı Adı Veya Şifre Yanlış!<br>";
        echo "<a href=girişyap.html>Tekrar Giriş İçin Tıklayınız...</a>";
        
    
    }
    
}

else {

    echo "Lütfen kullanıcı adını e-posta formatında giriniz.!!<br>";
    echo "Giriş sayfasına yönlendiriliyorsunuz.";
    echo "<a href=girişyap.html>tekrar giriş İçin Tıklayınız...</a>";

}

?>