welcomeMessage();
function welcomeMessage() {
    let name = prompt("Please enter your name:");

    if (name != null) {

    document.getElementById('welcome-speech').innerHTML = 'Hello ' + name +', welcome to our website!';
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

    // ✅ Jika lulus validasi → tampilkan output
    document.getElementById("rNama").innerText = nama;
    document.getElementById("rTanggal").innerText = tanggal;
    document.getElementById("rGender").innerText = gender.value;
    document.getElementById("rPesan").innerText = pesan;

    // Kosongkan form setelah submit
    document.getElementById("messageForm").reset();

    return false; // cegah reload halaman
}
