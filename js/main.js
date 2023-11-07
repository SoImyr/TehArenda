$(document).ready(function(){
  $('.burger, .overlay').on('click',function(e) {
    e.preventDefault()
    $('.header__nav').toggleClass('header__nav--open')
    $('.overlay').toggleClass('overlay--show')
  })
})