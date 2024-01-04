$(document).ready(function(){
        // Mengambil data dari file JSON
        $.getJSON('../images.json', function(data){
            $('#dep').text(data[0].teks);
            $('.spasi').text(data[0].teks1);
            $('.tekss24').text(data[0].teks2);
        });
    });
