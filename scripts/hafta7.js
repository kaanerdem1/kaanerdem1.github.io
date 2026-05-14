const temaButonu = document.getElementById("temaButonu");
temaButonu.addEventListener("click", function() {
    const body = document.getElementById("mainBody");
    body.classList.toggle("bg-dark");
    body.classList.toggle("text-white");
});

document.getElementById("etkinlikFormu").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const ad = document.getElementById("adSoyad").value;
    const email = document.getElementById("email").value;
    const oturum = document.getElementById("oturum").value;
    const sonucAlani = document.getElementById("sonucAlani");

    if (!ad || !email || !oturum) {
        alert("Lütfen tüm alanları doldurunuz!");
        return;
    }

    sonucAlani.innerHTML = `
        <h4>Başvuru Özeti</h4>
        <p><strong>Öğrenci:</strong> ${ad}</p>
        <p><strong>E-posta:</strong> ${email}</p>
        <p><strong>Oturum:</strong> ${oturum}</p>
        <p class="text-success fw-bold">Kaydınız başarıyla alındı!</p>
    `;
    
    sonucAlani.classList.remove("d-none"); // Görünür yap [cite: 45]
});
