const username = prompt('Selamat Datang!, silakan Masukkan Nama anda:');
const greetingelement = document.getElementById('greeting');
if (username) {
    greetingelement.textContent = "Selamat Datang " + username + "!";
} else {
    greetingelement.textContent = 'Hi, User!'
}

function submitForm() {
    const currentTime = new Date;
    const nama = document.getElementById('Name').value;
    const tanggalLahir = document.getElementById('TTL').value;
    const jenisKelamin = document.querySelector('input[name="jenis-kelamin"]:checked').value;
    const pesan = document.getElementById('Box-2').value;
    document.getElementById('currentTime').textContent = currentTime;
    document.getElementById('outputName').textContent = nama;
    document.getElementById('outputTanggalLahir').textContent = tanggalLahir;
    document.getElementById('outputJenisKelamin').textContent = jenisKelamin;
    document.getElementById('outputPesan').textContent = pesan;
}

