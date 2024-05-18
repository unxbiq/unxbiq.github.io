// TOMBOL UNDUH
$(document).ready(function(){
  $("#btn01").click(function(){
    downloadFile("sc1");
  });

  $("#btn02").click(function(){
    downloadFile("sc2");
  });
  
  $("#btn03").click(function(){
    downloadFile("sc3");
  });

  function downloadFile(key) {
    $.getJSON("../Qa7inW8nE10383qewAiJdj0iBdi01PKqoi16913kiqQei/Qa7x.json", function(data) {
      var url = data[key]; // Mendapatkan URL file dari JSON berdasarkan kunci (key)
      fetch(url)
        .then(response => response.blob())
        .then(blob => {
          var url = window.URL.createObjectURL(blob);
          var anchor = document.createElement('a');
          anchor.href = url;
          anchor.download = key + ".html"; // Menetapkan nama file
          anchor.click(); // Memicu proses download
        });
    });
  }
});
