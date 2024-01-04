document.addEventListener('DOMContentLoaded', function() {
        // Membuat objek XMLHTTPRequest
        var xhr = new XMLHttpRequest();

        // Mengatur jenis permintaan dan sumber data JSON
        xhr.open('GET', '../images.json', true);

        // Menangani perubahan status permintaan
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                // Parsing JSON dan menampilkan teks
                var data = JSON.parse(xhr.responseText);
                document.querySelector('.tekss24').textContent = data[0].teks1;
            }
        };

        // Mengirimkan permintaan
        xhr.send();
    });
