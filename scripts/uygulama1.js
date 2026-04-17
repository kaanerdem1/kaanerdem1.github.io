document.getElementById('hesaplaBtn').addEventListener('click', function () {
    const adSoyad = document.getElementById('adSoyad').value.trim();
    const vize = parseFloat(document.getElementById('vize').value);
    const final = parseFloat(document.getElementById('final').value);

    if (!adSoyad || isNaN(vize) || isNaN(final)) {
        alert('Lütfen tüm alanları doldurun.');
        return;
    }

    const ortalama = (vize * 0.4) + (final * 0.6);
    const harf = harfNotu(ortalama);
    const durum = ortalama >= 50 ? 'Geçti' : 'Kaldı';

    document.getElementById('sonucAd').textContent = adSoyad;
    document.getElementById('sonucOrtalama').textContent = 'Ortalama: ' + ortalama.toFixed(2);
    document.getElementById('sonucHarf').textContent = 'Harf Notu: ' + harf;
    document.getElementById('sonucDurum').textContent = 'Durum: ' + durum;

    document.getElementById('sonuc').style.display = 'block';
});

function harfNotu(ort) {
    if (ort >= 90) return 'AA';
    if (ort >= 85) return 'BA';
    if (ort >= 80) return 'BB';
    if (ort >= 75) return 'CB';
    if (ort >= 70) return 'CC';
    if (ort >= 65) return 'DC';
    if (ort >= 60) return 'CB'; // Görseldeki değer
    if (ort >= 55) return 'DD';
    if (ort >= 50) return 'FD';
    return 'FF';
}
