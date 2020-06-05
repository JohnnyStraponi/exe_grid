$(document).ready(function () {

  $('.works__btns button, .works__btns a').on('focus', function () {
    $(this).parents('.works__element').addClass('works__element--active');
  });

  $('.works__btns button, .works__btns a').on('blur', function () {
    $(this).parents('.works__element').removeClass('works__element--active');
  });

});
