welcomeMessage();
function welcomeMessage() {
    let name = prompt("Please enter your name:");

    if (name != null) {
        document.getElementById('welcome-speech').innerHTML =
            'Selamat Datang ' + name + ', di <span class="text-blue-600 font-bold">Jasa Kuli Bangunan</span>';
    }
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

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
e.preventDefault(); // mencegah halaman reload

let name = document.getElementById("name").value.trim();
let email = document.getElementById("email").value.trim();
let message = document.getElementById("message").value.trim();

document.getElementById("errName").textContent = name ? "" : "Nama wajib diisi";
document.getElementById("errEmail").textContent = email ? "" : "Email wajib diisi";
document.getElementById("errMessage").textContent = message ? "" : "Pesan wajib diisi";

if (name && email && message) {
            const toast = document.getElementById("toast");
            
            toast.classList.add("show"); // tampilkan toast
            setTimeout(() => toast.classList.remove("show"), 2500); // hilang otomatis

            this.reset(); // reset form
        }
});
