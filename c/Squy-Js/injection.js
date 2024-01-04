$(document).ready(function(){
        // Mengambil data dari file JSON
        $.getJSON('../images.json', function(data){
            $('.tekss24').text(data[0].teks1)
        });
    });
