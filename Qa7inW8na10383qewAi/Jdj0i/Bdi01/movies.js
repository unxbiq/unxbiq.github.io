$(document).ready(function() {
  // Memuat data JSON dari file
  $.getJSON('movies.json', function(data) {
    var keywords = data[0];
    var errorMessage = data[1].kesalahan;

    // Fungsi untuk menampilkan video atau pesan kesalahan
    function displayContent(keyword) {
      var videoPath = keywords[keyword];
      if (videoPath) {
        $('#videoContainer').html('<div class="vid"><iframe id="vii" src="' + videoPath + '" controls controlsList="nodownload"></iframe></div><button class="back"> Kembali</button>');
        $('#inputans').hide();
        $('.back').on('click', function() {
          $('.vid').hide();
          $('.back').hide();
          $('#inputans').show();
        });
      } else {
        $('#videoContainer').text(errorMessage);
      }
    }

    // Event handler untuk input ketika tombol enter ditekan
    $('#keywordInput').on('keypress', function(e) {
      if (e.which == 13) {
        var keyword = $(this).val();
        displayContent(keyword);
      }
    });
  });
});

$(document).ready(function(){
    // Menghilangkan tombol unduh dari iframe
    $('#vii').on('load', function(){
        $(this).contents().find('a[href*="download"]').hide();
    });
});


$(document).ready(function(){
    // Cari elemen iframe dengan class "google-drive-video"
    var iframe = $('#vii');

    // Sembunyikan tombol panah di dalam iframe
    iframe.on('load', function(){
        $(this).contents().find('.ndfHFb-c4YZDc-Bz112c').hide(); // class tombol panah diubah sesuai versi saat ini
    });
});
