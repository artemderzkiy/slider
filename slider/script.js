$(document).ready(function() {

  var currentPos=0;
  var slideWidth=600;
  var createSliderWindow=$("<div id='sliderWindow'></div>");
  var createSlide=$("<div id='slide'></div>");
  var createSlide=$("<div id='slide'></div>");
  var createButtons=$("<div id='buttonRight'>&gt</div><div id='buttonLeft'>&lt</div>");
  var butR=$("#buttonRight")
  var createSlideWrap=$("<div id='slideWrap'></div>");
  var createBullet=$("<div id='bullet'></div>");

  var slider=$("#slider");
  var imageJSON = [
  {
    "image": "img/1.png",
    "order": "2",
    "url": "#",
    "slideText": "first"
  },
  {
    "image": "img/2.png",
    "order": "3",
    "url": "#",
    "slideText": "second"
  }, 
  {
    "image": "img/3.png",
    "order": "1",
    "url": "#",
    "slideText": "third"
  },
  {
    "image": "img/4.png",
    "order": "4",
    "url": "#",
    "slideText": "forth"
  }
  ];

  imageJSON.sort(function(a, b) {
    return a.order - b.order;
  });


    // var images=["img/1.png","img/2.png","img/3.png","img/4.png"]
    // var numberSlides=images.length;
    var numberSlides=imageJSON.length;


    slider.append(createSliderWindow);
    $("#sliderWindow").append(createButtons);   
    $("#sliderWindow").append(createSlide);
    $("#sliderWindow").append(createBullet);


    $.each( imageJSON, function( key, val ) {
      var img="<b class='text'>"+val.slideText+"</b><a href='"+ val.url +"'><img src='" + val.image + "' alt='' width=600></a>";
      
      var bullet="<div class='bulletitem' id='" + val.order + "'></div>";
      
      
      
      
      $("#slide").append(img);      
      $("#bullet").append(bullet);

    });

  //for (var i = 0; i < numberSlides; i++) {
    //$("#slide").append("<img src='"+images[i]+"' width=500 />");
  //}
  $("#slide").wrapAll(createSlideWrap);
  $("#slideWrap").css("float","left");
  $("#slideWrap").css("width",slideWidth*numberSlides);
  function moveSlideB(currentPos)
  {
    $("#slideWrap").animate({"marginLeft": slideWidth*(-currentPos)});

  }
  function moveSlide()
  {
    $("#slideWrap").animate({"marginLeft": slideWidth*(-currentPos)});

    

    
   // console.log(id);
   // ($(this).attr('id')).addClass("active");

 }

 function changePos(flag) {
  if (currentPos==numberSlides-1 &&!flag)
  {
    currentPos=0;
  }
  else if (!flag)
  {
    currentPos++;
  }
  if (currentPos==0 && flag)
  {
    currentPos=numberSlides-1;
  }
  else if (flag)
  {
    currentPos--;
  }
  moveSlide();
}


$('.bulletitem').on('click', function() {
  var id = ($(this).attr('id'));
  moveSlideB(id-1);
});
$("#buttonLeft").click(function () {
 changePos(true);
});
$("#buttonRight").click(function () {
 changePos(false);
});

startTimer();
slider.on('mouseenter mouseleave', function(e){ 
  var onMouEnt = (e.type === 'mouseenter') ?  
  clearInterval(intervalID) : startTimer();               
});
function startTimer() {
  intervalID = setInterval(function() { changePos(false); }, 2000);
  return intervalID;
};

});
