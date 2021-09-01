
let scrollTop = $('#about').offset().top;
console.log(scrollTop);

$(window).scroll(function(){
  let scrolWindow = $(window).scrollTop();

    if(scrolWindow > scrollTop -50 ){

      $('#main-nav').css('backgroundColor','rgba(0,0,0,0.5)');
      $('#btnUp').fadeIn(500);

    }
    else{

      $('#main-nav').css('backgroundColor','transparent');
      $('#btnUp').fadeOut(500);

    }
});

$('#btnUp').click(function(){

  $('html,body').animate( {scrollTop:0} ,2000);

});

$('a').click(function(e){

  let hrefA = $(e.target).attr('href');

  let TopA = $(hrefA).offset().top;

  $('html,body').animate( {scrollTop:TopA } ,1500);


})