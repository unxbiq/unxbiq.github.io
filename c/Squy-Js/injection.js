$(document).ready(function(){
        // Mengambil data dari file JSON
        $.getJSON('../images.json', function(data){
            // Menampilkan teks1 di class "vargo1"
            $('.spasi').text(data[0].teks1);
            // Menampilkan teks2 di class "vargo2"
            $('.tekss24').text(data[0].teks2);
        });
    });
