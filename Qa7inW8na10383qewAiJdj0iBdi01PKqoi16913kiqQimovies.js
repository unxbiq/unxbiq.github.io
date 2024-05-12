$(document).ready(function() {
  // Memuat data JSON dari file
  $.getJSON('Qa7inW8ni10383qewAiJdj0iBdi01PKqoi16913kiqQimovies.json', function(data) {
    var keywords = data[0];
    var errorMessage = data[1].kesalahan;

    // Fungsi untuk menampilkan video atau pesan kesalahan
    function displayContent(keyword) {
      var videoPath = keywords[keyword];
      if (videoPath) {
        $('#videoContainer').html('<div class="vid"><iframe id="vii" src="' + videoPath + '" controls frameborder="0"></iframe></div><button class="back"> Kembali</button>');
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

$(document).ready(function(){
  $('.vid').click(function(){
    var elem = $(this)[0];
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
      elem.msRequestFullscreen();
    }
  });
});


/* CLOSE LAN */
$('.btns').on('click', function() {
  $('#lanA').hide();
});

$('.btns0').on('click', function() {
  $('#lanB').hide();
});

/* HIDE */
$(document).ready(function(){
  var originalValue = '';
  $('#toggle').on('click', function() {
    var input = $('#keywordInput');
    if(input.data('masked')) {
      input.val(originalValue);
      input.data('masked', false);
    } else {
      originalValue = input.val();
      var maskedValue = originalValue.replace(/./g, ' ⚅ ');
      input.val(maskedValue);
      input.data('masked', true);
    }
  });
});

/* MAKS 20 KARAKTER */
$(document).ready(function(){
    $('#keywordInput').on('input', function() {
        var input = $(this).val();
        if(input.length > 35) {
            $(this).val(input.slice(0, 35));
        }
    });
});
