const video = document.getElementById('video');
const startBtn = document.getElementById('startBtn');
const output = document.getElementById('output');

// Fungsi untuk menyalakan kamera
startBtn.addEventListener('click', async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.srcObject = stream;
    output.textContent = "Kamera aktif! Siap deteksi...";
  } catch (err) {
    console.error("Error akses kamera:", err);
    output.textContent = "Gagal mengakses kamera!";
  }
});