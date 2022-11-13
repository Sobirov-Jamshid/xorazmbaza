var randomColors    = ["green", "red", "white"];
var clrI    = 0;
$('#carousel-example-generic').on('slide.bs.carousel', function(e) {
    $(this).css('background-color', randomColors[clrI]);
    clrI++;
    if(clrI>=randomColors.length) {
        clrI    = 0;
    }
});

let MediaparkData = document.querySelector(".mediapark-data-main");

let FooterData = new Date
MediaparkData.textContent = `© OOO "MEDIAPARK GROUP" 2015-${FooterData.getFullYear()}`

  

