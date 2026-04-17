document.getElementById('hesaplaBtn').addEventListener('click', function() {
    // Input değerlerini al
    const deger = parseFloat(document.getElementById('deger').value);
    const tip = document.getElementById('donusumTipi').value;
    const sonucAlani = document.getElementById('sonucAlani');
    const sonucDeger = document.getElementById('sonucDeger');

    // Boş değer kontrolü
    if (isNaN(deger)) {
        alert("Lütfen geçerli bir sayı giriniz.");
        return;
    }

    let sonuc = 0;

    // Dönüşüm mantığı
    switch (tip) {
        case 'm-km':
            sonuc = deger / 1000;
            break;
        case 'c-f':
            sonuc = (deger * 9/5) + 32;
            break;
        case 'kg-gr':
            sonuc = deger * 1000;
            break;
        default:
            sonuc = 0;
    }

    // Sonucu görseldeki formatta yazdır (Binlik ayırıcı ile)
    sonucDeger.textContent = sonuc.toLocaleString('tr-TR');
    
    // Sonuç kutusunu göster
    sonucAlani.style.display = 'block';
});
