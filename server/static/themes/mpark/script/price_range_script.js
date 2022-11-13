$(document).ready(function(){
	
	$('.rek').slick({
	  slidesToShow: 5,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 2000,
	  responsive: [
	    {
	      breakpoint: 800,
	      settings: {
	        slidesToShow: 4,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 2000,
	      }
	    },
	    {
	      breakpoint: 520,
	      settings: {
	        slidesToShow: 3,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 2000,
	      }
	    },
	    {
	      breakpoint: 450,
	      settings: {
	        slidesToShow: 2,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 2000,
	      }
	    }
	  ]
	  
	});
	$('#price-range-submit').hide();

	$("#min_price,#max_price").on('change', function () {

	  $('#price-range-submit').show();

	  var min_price_range = parseInt($("#min_price").val());

	  var max_price_range = parseInt($("#max_price").val());

	  if (min_price_range > max_price_range) {
		$('#max_price').val(min_price_range);
	  }

	  $("#slider-range").slider({
		values: [min_price_range, max_price_range]
	  });
	  var form=$('.filter_form');
		if(form){
			var serializedData = form.serialize();
			console.log(serializedData);
			document.location.href='?'+serializedData;
		}
	});


	var minVal=parseInt($('#min_price').attr('min'));
	var maxVal=parseInt($('#max_price').attr('max'));
	var min_price_range = parseInt($("#min_price").val());

	var max_price_range = parseInt($("#max_price").val());
	$("#min_price,#max_price").on("paste keyup", function () {                                        
		minVal=parseInt($('#min_price').attr('min'));
		maxVal=parseInt($('#max_price').attr('max'));
		min_price_range = parseInt($("#min_price").val());

		max_price_range = parseInt($("#max_price").val());
	  $('#price-range-submit').show();
	  
	  if(min_price_range > max_price_range-10000){

			min_price_range = max_price_range - 10000;
			
			$("#min_price").val(min_price_range);		
			$("#max_price").val(max_price_range);
	  }

	  $("#slider-range").slider({
		values: [min_price_range, max_price_range]
	  });
	});


	$(function () {
	  $("#slider-range").slider({
		range: true,
		orientation: "horizontal",
		min: minVal,
		max: maxVal,
		values: [min_price_range, max_price_range],
		step: 10000,

		slide: function (event, ui) {
		  if (ui.values[0] == ui.values[1]) {
			  return false;
		  }
		  
		  $("#min_price").val(ui.values[0]);
		  $("#max_price").val(ui.values[1]);
		},
		change: function( event, ui ) {
			var form=$('.filter_form');
		    if(form){
		      var serializedData = form.serialize();
		      document.location.href='?'+serializedData;
		    }
		}
	  });

	  $("#min_price").val($("#slider-range").slider("values", 0));
	  $("#max_price").val($("#slider-range").slider("values", 1));

	});

	$("#slider-range,#price-range-submit").click(function () {

	  var min_price = $('#min_price').val();
	  var max_price = $('#max_price').val();

	  $("#searchResults").text("Here List of products will be shown which are cost between " + min_price  +" "+ "and" + " "+ max_price + ".");
	});

});


let filterActives = document.querySelectorAll(".goods-section-false")

filterActives.forEach(function (Block) {
    let Open = Block.querySelector(".open_filter_body_item")
    Open.addEventListener("click", function(){
        Block.classList.toggle("goods-section-active")
    })

})
filterActives.forEach(function (Block) {
let ActiveInput = Block.querySelectorAll(".goods-section-input")
ActiveInput.forEach(function (Active) {
	if (Active.checked == true) {
		Block.classList.add("goods-section-active")
		// console.log(Active.nextSibling.nextSibling.textContent)

	}
	// textContent
})
})

let Filtor = document.querySelector(".filtor-open-button")
let FiltorBlock = document.querySelector(".goods-section-left")
let Bg = document.querySelector(".fastwatchbgc")
let FiltorClose = document.querySelector(".filtor-block-close")
let Filtor2 = document.querySelector(".filtor-open-button-block")

Filtor2.addEventListener("click", function(){
	FiltorBlock.classList.toggle("goods-section-left-active");
	Bg.classList.toggle("showbgc");
	FiltorClose.classList.toggle("filtor-block-close-active");
})
Filtor.addEventListener("click", function(){
	FiltorBlock.classList.toggle("goods-section-left-active");
	Bg.classList.toggle("showbgc");
	FiltorClose.classList.toggle("filtor-block-close-active");
})

Bg.addEventListener("click", function(){
	FiltorBlock.classList.remove("goods-section-left-active");
	FiltorClose.classList.remove("filtor-block-close-active");
})
FiltorClose.addEventListener("click", function(){
	Bg.classList.remove("showbgc");
	FiltorBlock.classList.remove("goods-section-left-active");
	FiltorClose.classList.remove("filtor-block-close-active");
})

let FilterPuts = document.querySelectorAll(".goods-section-left-checkbox")
let FiltorMap = document.querySelector(".filtor-maps")

FilterPuts.forEach(function (FilterPut){
	let Checkeds = FilterPut.querySelectorAll(".goods-section-left-checkbox-block")
	Checkeds.forEach(function(Checked){
     if(Checked.childNodes[1].checked == true) {
		FiltorMap.innerHTML += (`<label for=${Checked.childNodes[3].htmlFor}>${Checked.childNodes[3].textContent}</label>`)

	 }
	})
})

let TopFiltor = document.querySelector(".filtor-section-left-main")
let label = TopFiltor.getElementsByTagName("label")


if(label.length == 0){
	TopFiltor.classList.add("filtor-section-left-main-none")
}




