welcomeMessage();
function welcomeMessage() {
    let name = prompt("Please enter your name:");

    if (name != null) {
        document.getElementById('welcome-speech').innerHTML =
            'Selamat Datang ' + name + ', di <span class="text-blue-600 font-bold">Jasa Kuli Bangunan</span>';
    }
}

function validateForm() {
    // Ambil nilai input
    let nama = document.getElementById("nama").value;
    let tanggal = document.getElementById("tanggal").value;
    let pesan = document.getElementById("pesan").value;
    let gender = document.querySelector("input[name='gender']:checked");

    // Validasi input
    if (nama === "") {
        alert("Nama tidak boleh kosong!");
        return false;
    }

    if (tanggal === "") {
        alert("Tanggal lahir harus diisi!");
        return false;
    }

    if (!gender) {
        alert("Pilih jenis kelamin!");
        return false;
    }

    if (pesan === "") {
        alert("Pesan tidak boleh kosong!");
        return false;
    }

    // Jika lulus validasi maka tampilkan output
    document.getElementById("rNama").innerText = nama;
    document.getElementById("rTanggal").innerText = tanggal;
    document.getElementById("rGender").innerText = gender.value;
    document.getElementById("rPesan").innerText = pesan;

    // Kosongkan form setelah submit
    document.getElementById("messageForm").reset();

    return false; // cegah reload halaman
}
function toggleMenu() {
  const nav = document.getElementById("nav-menu");
  nav.classList.toggle("show");
}


    // Menampilkan tahun saat ini di footer
  document.getElementById("footerText").innerHTML =
    "&copy; " + new Date().getFullYear() + " ConstructPro. Hak Cipta Dilindungi.";

    //  Validasi formulir kontak
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Ambil nilai input
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    // Elemen error
    let errName = document.getElementById("errName");
    let errEmail = document.getElementById("errEmail");
    let errMessage = document.getElementById("errMessage");

    // Kosongkan error sebelum validasi ulang
    errName.textContent = "";
    errEmail.textContent = "";
    errMessage.textContent = "";

    let valid = true;

    // Validasi sesuai aturan Zod
    if (name.length < 2) {
      errName.textContent = "Nama harus minimal 2 karakter.";
      valid = false;
    }

    if (!email.includes("@") || !email.includes(".")) {
      errEmail.textContent = "Masukkan email yang valid.";
      valid = false;
    }

    if (message.length < 10) {
      errMessage.textContent = "Pesan harus minimal 10 karakter.";
      valid = false;
    }

    if (!valid) return;

    // Jika valid maka submit form dan reset form
    showToast();
    form.reset();
  });

    // 
  function goToContact() {
    location.href = "#message-page";
  }

    const words = ["Tukang Bangunan", "Renovasi Rumah", "Pemasangan Keramik", "Finishing & Pengecatan"];
  let index = 0;

  function changeText() {
    document.getElementById("dynamicText").innerText = words[index];
    index = (index + 1) % words.length;
  }

  setInterval(changeText, 2000);
