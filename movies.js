$(document).ready(function() {
  // Memuat data JSON dari file
  $.getJSON('dmovies.json', function(data) {
    var keywords = data[0];
    var errorMessage = data[1].kesalahan;

    // Fungsi untuk menampilkan video atau pesan kesalahan
    function displayContent(keyword) {
      var videoPath = keywords[keyword];
      if (videoPath) {
        $('#videoContainer').html('<div class="vid"><video id="vii" src="' + videoPath + '" type="video/mp4" controls controlsList="nodownload"></video></div><button class="back"> Kembali</button>');
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
