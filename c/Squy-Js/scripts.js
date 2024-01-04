const button = document.querySelector('.burger');
const quickSettings = document.querySelector('.quick-settings');
const quickSettingso = document.querySelector('.close');

button.addEventListener('click', () => {
    quickSettings.classList.remove('none');
    quickSettings.classList.remove('hide');
});

quickSettingso.addEventListener('click', () => {
    quickSettings.classList.add('hide');
});


// Get the checkbox element
    var checkbox = document.getElementById("mode");

    // Add an event listener to change the body class and save the mode
    checkbox.addEventListener("change", function() {
      document.body.classList.toggle("dark-mode");
      saveMode(checkbox);
    });

    // Define a function to save the mode to localStorage
    function saveMode(checkbox) {
      // Save the value of the checkbox to localStorage with the key "mode"
      localStorage.setItem("mode", checkbox.checked);
    }

    // Define a function to load the mode from localStorage
    function loadMode() {
      // Get the value from localStorage with the key "mode"
      var mode = localStorage.getItem("mode");

      // If the value exists, then set the checkbox value and toggle the dark mode class
      if (mode !== null) {
        checkbox.checked = JSON.parse(mode);
        document.body.classList.toggle("dark-mode", checkbox.checked);
      }
    }

    // Call the loadMode function when the document is loaded
    document.addEventListener("DOMContentLoaded", loadMode);
    
    
// NOTIFIKASI | TIDAK DIPAKAI 

    function toggleText() {
            const hiddenText = document.getElementById("noti");

            // Mengubah status tampilan berdasarkan kondisi sebelumnya
            const isDisplayed = hiddenText.style.display !== "none";
            hiddenText.style.display = isDisplayed ? "none" : "block";


            // Menutup teks secara otomatis setelah 5 detik jika sedang ditampilkan
            if (!isDisplayed) {
                setTimeout(() => {
                    hiddenText.style.display = "none";
                }, 7000);
            }
        }
        
// FOTO AYE
    $(document).ready(function () {
            $(".profile").on("click", function () {
                showText();
            });

            function showText() {
                const hiddenText = $(".pils");

                // Menampilkan teks
                hiddenText.css({display: "flex"}).animate({opacity: 1}, 400);

                // Menutup teks secara otomatis setelah 4 detik
                setTimeout(function () {
                    hiddenText.animate({opacity: 0}, 400, function () {
                        $(this).css({display: "none"});
                    });
                }, 3500);
            }
        });
    
    
        
// TO TOP PAGE 
const scrollTopButton = document.querySelector(".topso");

scrollTopButton.addEventListener('click', () => {
  window.scrollTo({ behavior: 'smooth' });
});

document.addEventListener('scroll', (event) => {
  if (window.pageYOffset < 100) {
    scrollTopButton.style.opacity = 0;
  } else {
    scrollTopButton.style.opacity = 1;
  }
});


 // HALAMAN
 function loadPage(pageId) {
    /*var overlay = document.getElementById("overlay");
    var loading = document.getElementById("loading");*/
    var pages = document.getElementsByClassName("page");

    /*overlay.style.display = "flex";
    loading.style.display = "block";*/

    setTimeout(function () {
        for (var i = 0; i < pages.length; i++) {
            pages[i].style.display = "none";
        }

        var currentPage = document.getElementById(pageId);
        currentPage.style.display = "flex";
        

        /*overlay.style.display = "none";
        loading.style.display = "none";*/
        

        // Menyimpan halaman terakhir yang dikunjungi ke localStorage
        localStorage.setItem("lastVisitedPage", pageId);
    }, 1000);
}

// Fungsi untuk memuat halaman terakhir yang dikunjungi saat halaman dimuat
function loadLastVisitedPage() {
    var lastVisitedPage = localStorage.getItem("lastVisitedPage");
    if (lastVisitedPage) {
        loadPage(lastVisitedPage);
    } else {
        // Jika belum ada halaman terakhir, tampilkan halaman default
        loadPage("home"); // Gantilah dengan ID halaman default yang sesuai
    }
}

// Panggil loadLastVisitedPage saat halaman dimuat
window.addEventListener("load", loadLastVisitedPage);


 
 //HALAMAN2
 // loadPage('home'); /
// function loadPage(pageId) {
//    var overlay = document.getElementById("overlay");
//    var loading = document.getElementById("loading");
//    var pages = document.getElementsByClassName("page");

//    overlay.style.display = "flex";
//    loading.style.display = "block";

//    setTimeout(function () {
//        for (var i = 0; i < pages.length; i++) {
//            pages[i].style.display = "none";
//        }

//        var currentPage = document.getElementById(pageId);
//        currentPage.style.display = "flex"; /* block */

//        overlay.style.display = "none";
//        loading.style.display = "none";

//        pages.innerHTML = currentPage.id.charAt(0).toUpperCase() + currentPage.id.slice(1);
//    }, 1000);
//}





// TOMBOL MENU
const bx1 = document.querySelector('#hal1');
const bx2 = document.querySelector('#hal2');
const bx3 = document.querySelector('#hal3')
const bx4 = document.querySelector('#hal4');
const by = document.querySelector('.quick-settings');
bx1.addEventListener('click', () => {
    by.classList.add('hide');
});
bx2.addEventListener('click', () => {
    by.classList.add('hide');
});
bx3.addEventListener('click', () => {
    by.classList.add('hide');
});
bx4.addEventListener('click', () => {
    by.classList.add('hide');
});




//ACTIVE button
//$(document).ready(function() {
//  $(".switch__label").click(function() {
//    $(".switch__label").removeClass("aioz");
//    $(this).addClass("aioz");
//    localStorage.setItem('hoveredButton', $(this).attr('id'));
//  });
//  var hoveredButtonId = localStorage.getItem('hoveredButton');
//  if (hoveredButtonId) {
//    $("#" + hoveredButtonId).addClass("aioz");
//  }
//});

//$(document).ready(function() {
//  $(".switch-wrapper .switch__label").click(function() {
  // Hapus kelas aktif dari semua tombol
//  $(".switch-wrapper .switch__label").removeClass("aioz");
        // Tambahkan kelas aktif ke tombol yang diklik
//  $(this).addClass("aioz");
//  });
//});



// MENAMPILKAN TEKS ( tidak dipakai )

function getData() {
  // Menggunakan fetch() untuk mengirim permintaan ke file JSON
  fetch("novel.json")
  .then(response => response.json()) 
  .then(data => {
    
   var desktop = data.desktop;
   document.getElementById("dep").innerHTML = desktop;
  })
    .catch(error => console.error(error)); 
}
// Memanggil fungsi getData() saat halaman dimuat
 window.onload = getData;



// IKLANSU 
        document.addEventListener('DOMContentLoaded', function () {

            const container = document.querySelector('.iklansu');

            const slidesContainer = document.querySelector('.iklans');
            const slides = document.querySelectorAll('.ikl');
            let currentIndex = 0;

            function showSlide(index) {
                if (index < 0) {
                    currentIndex = slides.length - 1;
                } else if (index >= slides.length) {
                    currentIndex = 0;
                } else {
                    currentIndex = index;
                }

                const translateValue = -currentIndex * 100 + '%';
                slidesContainer.style.transform = `translateX(${translateValue})`;
            }

            function nextSlide() {
                showSlide(currentIndex + 1);
            }

            function prevSlide() {
                showSlide(currentIndex - 1);
            }

            setInterval(nextSlide, 3000); // Ganti gambar setiap 3 detik

            // Tambahkan kemampuan geser oleh pengguna
            let touchStartX = 0;

            container.addEventListener('touchstart', (e) => {
                touchStartX = e.touches[0].clientX;
            });

            container.addEventListener('touchmove', (e) => {
                const touchEndX = e.touches[0].clientX;
                const deltaX = touchEndX - touchStartX;

                if (Math.abs(deltaX) > 50) {
                    deltaX > 0 ? prevSlide() : nextSlide();
                }
            });
        });
        


// TEKS SUMBER FILE json | DIPAKAI
$(document).ready(function() {
      // Menggunakan jQuery untuk memuat dan menampilkan teks dari file JSON
      $.getJSON('../Squy-Js/Jagal/B/X/image.json', function(data) {
        // Memastikan file JSON memiliki format yang diharapkan
        if (Array.isArray(data) && data.length > 0 && data[0].teksu) {
          //$('.xzc').text(data[0].teksu);
          //$('.xzoc').text(data[0].teksuu);
          $('#dep').text(data[0].desktop);
          $('.spasi').text(data[0].spasi);
          $('.tekss24').text(data[0].teksjam);
        } else {
          console.error('! Format JSON tidak sesuai.');
        }
      })
      .fail(function() {
        console.error('! Gagal memuat file JSON.');
      });
    });
    
    



// UNTUK TOMBOL DOWNLOAD WALLPAPER
$(document).ready(function() {
      $('.btn-download').click(function() {
        $('#cloud').css('display', 'block');
      });
    });
    
    
// FILE IMAGE JSON khusus WALLPAPER
  $(document).ready(function(){
  //mengambil data dari file json
  $.getJSON("../c/Squy-Kw/Kanton/Jagal/Babi/X/image.json", function(data){
    //mengulang setiap elemen data
    $.each(data, function(i, item){
      //mengambil elemen img dengan id sesuai dengan nama foto
      var img = $("#"+item.nama);
      //mengatur atribut src dari elemen img sesuai dengan url foto
      img.attr("src", item.url);
      //mengambil elemen a dengan id sesuai dengan nama foto
      var a = $("#"+item.nama+"_a");
      //mengatur atribut href dan download dari elemen a sesuai dengan url dan nama foto
      a.attr("href", item.url).attr("download", item.nama);
      //menambahkan elemen br ke dalam elemen div dengan id foto
      $(".wollpaper").append('');
    });
  });
});
// FILE IMAGE JSON khusus FOTO PROFIL
  $(document).ready(function(){
  //mengambil data dari file json
  $.getJSON("../c/Squy-Kw/Kanton/Jagal/Babi/X/image.json", function(data){
    //mengulang setiap elemen data
    $.each(data, function(i, item){
      //mengambil elemen img dengan id sesuai dengan nama foto
      var img = $("#"+item.nama);
      //mengatur atribut src dari elemen img sesuai dengan url foto
      img.attr("src", item.url);
      //mengambil elemen a dengan id sesuai dengan nama foto
      var a = $("#"+item.nama+"_a");
      //mengatur atribut href dan download dari elemen a sesuai dengan url dan nama foto
      a.attr("href", item.url).attr("download", item.nama);
      //menambahkan elemen br ke dalam elemen div dengan id foto
      $(".fP").append('');
    });
  });
});




// SEARCH WALLPAPER | DIPAKAI
    $(document).ready(function(){
            // Function to load JSON data from external file
            function loadJSON(callback) {
                var xobj = new XMLHttpRequest();
                xobj.overrideMimeType("application/json");
                xobj.open('GET', '../c/Squy-Kw/Kanton/Jagal/Babi/X/wallpaper.json', true);
                xobj.onreadystatechange = function () {
                    if (xobj.readyState == 4 && xobj.status == "200") {
                        callback(JSON.parse(xobj.responseText));
                    }
                };
                xobj.send(null);
            }

            // Function to display the page based on input
            function displayPages(input, data) {
                // Check if input is empty
                if (!input.trim()) {
                    // Show all pages except "tidak"
                    $('.wollpaper').show();
                    $('.notresult').hide();
                    return;
                }

                // Find all associated pages in the JSON data
                var matchedPages = data.filter(function(item) {
                    var keywords = Object.keys(item)[0].split(', ');
                    return keywords.includes(input);
                });

                // Display the corresponding pages or "Tidak Tersedia" if not found
                if (matchedPages.length > 0) {
                    // Hide all pages and show matched pages
                    $('.wollpaper, .notresult').hide();
                    matchedPages.forEach(function(page) {
                        var pageClass = page[Object.keys(page)[0]];
                        $('.' + pageClass).show();
                    });
                } else {
                    // If no match found, show "Tidak Tersedia"
                    $('.wollpaper').hide();
                    $('.notresult').show();
                }

                // Clear the input field
                $('#inputs').val('');
            }

            // Load JSON data and execute the displayPages function
            loadJSON(function(response) {
                var jsonData = response;
                
                // Input handling when pressing Enter
                $('#inputs').keypress(function(event){
                    if(event.which === 13){
                        var userInput = $(this).val().toLowerCase();
                        displayPages(userInput, jsonData);
                    }
                });
            });
        });
    
// SEARCH FOTO PROFIL | TIDAK DIPAKAI
$(document).ready(function() {
      $('#inputsp0').on('input', function() {
        const searchTerm = $(this).val().toLowerCase();
        let founds = false;

        $('.fP0').each(function() {
          const keywords = $(this).data('keywords').toLowerCase();
          const isVisible = keywords.includes(searchTerm);

          if (isVisible) {
            $(this).removeClass('sems');
            founds = true;
          } else {
            $(this).addClass('sems');
          }
        });
        $('.notresultp0').toggle(!founds);
      });
    });
    
    
    
// SEARCH FOTO PROFIL | DIPAKAI
    $(document).ready(function(){
            // Function to load JSON data from external file
            function loadJSON(callback) {
                var xobj = new XMLHttpRequest();
                xobj.overrideMimeType("application/json");
                xobj.open('GET', '../c/Squy-Kw/Kanton/Jagal/Babi/X/fotoProfil.json', true);
                xobj.onreadystatechange = function () {
                    if (xobj.readyState == 4 && xobj.status == "200") {
                        callback(JSON.parse(xobj.responseText));
                    }
                };
                xobj.send(null);
            }

            // Function to display the page based on input
            function displayPages(input, data) {
                // Check if input is empty
                if (!input.trim()) {
                    // Show all pages except "tidak"
                    $('.fP').show();
                    $('.notresultp').hide();
                    return;
                }

                // Find all associated pages in the JSON data
                var matchedPages = data.filter(function(item) {
                    var keywords = Object.keys(item)[0].split(', ');
                    return keywords.includes(input);
                });

                // Display the corresponding pages or "Tidak Tersedia" if not found
                if (matchedPages.length > 0) {
                    // Hide all pages and show matched pages
                    $('.fP, .notresultp').hide();
                    matchedPages.forEach(function(page) {
                        var pageClass = page[Object.keys(page)[0]];
                        $('.' + pageClass).show();
                    });
                } else {
                    // If no match found, show "Tidak Tersedia"
                    $('.fP').hide();
                    $('.notresultp').show();
                }

                // Clear the input field
                $('#inputsp').val('');
            }

            // Load JSON data and execute the displayPages function
            loadJSON(function(response) {
                var jsonData = response;
                
                // Input handling when pressing Enter
                $('#inputsp').keypress(function(event){
                    if(event.which === 13){
                        var userInput = $(this).val().toLowerCase();
                        displayPages(userInput, jsonData);
                    }
                });
            });
        });
    
    
// SEARCH UTAMA DI MENU
       $(document).ready(function () {

            // Fungsi untuk melakukan pencarian dan menampilkan hasil
            function searchAndDisplay(keyword) {
                // Memuat data dari file JSON
                $.getJSON("../c/Squy-Kw/Kanton/Jagal/Babi/X/searchUtama.json", function(data) {
                    // Cari ID halaman berdasarkan keyword
                    var result = data.find(function (item) {
                        return keyword in item;
                    });

                    if (result) {
                        // Tampilkan div dengan ID yang sesuai
                        var pageId = result[keyword];
                        $('#' + pageId).show().siblings('.page').hide();
                    }
                    // Jika tidak ditemukan, tidak ada perubahan pada tampilan halaman
                });
            }

            // Event ketika tombol 'Enter' ditekan pada input
            $('#searchUtama').keypress(function (e) {
                if (e.which === 13) { // 13 adalah kode ASCII untuk tombol 'Enter'
                    var keyword = $(this).val();
                    searchAndDisplay(keyword);
                    $(this).val(''); // Membuat teks inputan hilang
                    $('.quick-settings').addClass('hide');
                }
            });

        });

    
    // KOMENTAR TAMPIL 
    $(document).ready(function(){
        $.getJSON('../c/Squy-Kw/Kanton/Jagal/Babi/X/image.json', function(data){
            var output = '';

            if (data.length === 0 || (!data[0].nama && !data[0].toeks && !data[0].tanoggal)) {
                output = '<div class="nokoments">- Belum Ada Komentar -</div>';
            } else {
                $.each(data, function(index, item){
                    if (item.nama || item.toeks || item.tanoggal) {
                        output += '<div class="users">' + (item.nama || '') + '</div>';
                        output += '<div class="koments">' + (item.toeks || '') + '</div>';
                        output += '<div class="tgls">' + (item.tanoggal || '') + '</div>';
                        output += '<hr>'; // Pemisah antara setiap entri
                    }
                });
            }

            $('.bgkoments').html(output);
        });
    });
    
    
    
// IKLAN TEKS BERJALAN
    $(document).ready(function() {
            const scrollingTextContainer = $('.bg_teks24');
            let isGrabbed = false;
            let initialX;

            scrollingTextContainer.on('touchstart mousedown', function(e) {
                isGrabbed = true;
                initialX = e.clientX || e.originalEvent.touches[0].clientX;
                scrollingTextContainer.addClass('grabbing');
            });

            $(document).on('touchend mouseup', function() {
                if (isGrabbed) {
                    isGrabbed = false;
                    scrollingTextContainer.removeClass('grabbing');
                }
            });

            $(document).on('touchmove mousemove', function(e) {
                if (isGrabbed) {
                    const clientX = e.clientX || e.originalEvent.touches[0].clientX;
                    const deltaX = clientX - initialX;
                    const scrollingText = $('#teks24jam');
                    const currentTransform = scrollingText.css('transform');
                    const currentTranslateX = currentTransform ? parseInt(currentTransform.split(',')[4]) : 0;
                    scrollingText.css('transform', `translateX(${currentTranslateX + deltaX}px)`);
                    initialX = clientX;
                }
            });
        });
        
        
        
// DARK WEBS 
$(document).ready(function() {
      $("#searchDe").keypress(function(e) {
        if (e.which === 13) {
          var kataKunci = $("#searchDe").val();
          $.getJSON("../c/Squy-Kw/Kanton/Jagal/Babi/X/dark.json", function(data) {

            var mediaArray = data[kataKunci];

            $(".ponsived").empty(); // Menghapus semua konten sebelumnya

            if (mediaArray) {
              $.each(mediaArray, function(i, media) {
                if (media.type.startsWith("image/")) {
                  $(".ponsived").append(`<div class="dw"><img class="foto" src="${media.src}" alt="${kataKunci}"></div>`);
                } else if (media.type.startsWith("video/")) {
                  $(".ponsived").append(`<div class="dw dwv"><video autoplay controlsList="nodownload"><source src="${media.src}" type="${media.type}"></video></div>`);
                }
              });
            } else if (kataKunci !== "") {
              $(".ponsived").append(`<div class="notsresult"><div class="dx" <p>[ ! ] Kode Akses Salah !</p><ion-icon id="notsclose"  name="close-outline"></ion-icon></div></div>`);
              
              $(document).ready(function() {
                var bto = $('#notsclose');
                var dx = $('.dx');
                bto.click(function() {
                  bto.hide();
                  dx.hide();
                });
              });
              
            }

            $("#searchDe").val("");
          });
        }
      });
    });
    


// TAG WALLPAPER 
$(document).ready(function () {
        var data;

        // Load data from JSON file
        $.getJSON("tags.json", function (jsonData) {
            data = jsonData;

            $(".btn").click(function () {
                var keyword = $(this).text().toLowerCase();

                $.each(data, function (index, item) {
                    var key = Object.keys(item)[0];
                    var className = item[key];
                    var elements = $("." + className);

                    if (key === keyword || !className) {
                        elements.show();
                    } else {
                        elements.hide();
                    }
                });
            });
        });
    });
