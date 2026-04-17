document.getElementById('hesaplaBtn').addEventListener('click', function () {
  var adSoyad = document.getElementById('adSoyad').value.trim();
  var vize = parseFloat(document.getElementById('vize').value);
  var final = parseFloat(document.getElementById('final').value);

  if (!adSoyad || isNaN(vize) || isNaN(final)) {
    alert('Lütfen tüm alanları doğru şekilde doldurun.');
    return;
  }

  if (vize < 0 || vize > 100 || final < 0 || final > 100) {
    alert('Notlar 0 ile 100 arasında olmalıdır.');
    return;
  }

  var ortalama = vize * 0.40 + final * 0.60;

  var harf = harfNotu(ortalama);
  var durum = ortalama >= 50 ? 'Geçti' : 'Kaldı';

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
  if (ort >= 60) return 'CB';
  if (ort >= 55) return 'DD';
  if (ort >= 50) return 'FD';
  return 'FF';
}
