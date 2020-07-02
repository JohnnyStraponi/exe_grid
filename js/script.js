/*
$(document).ready(function () {

  $('.works__btns button, .works__btns a').on('focus', function (e) {
    $(this).parents('.works__element').addClass('works__element--active');
  });

  $('.works__btns button, .works__btns a').on('blur', function (e) {
    $(this).parents('.works__element').removeClass('works__element--active');
  });

  function moveProgressBar(node, nodeLine, tooltip, animationLength = 1500) {
    const progressElement = $(node);
    progressElement.each(function (value, item) {
      $(item).find(nodeLine).animate({
        width: item.dataset.progressPercent+'%'
      }, animationLength);
      $(item).find(tooltip).show(animationLength);
    });
  }

  let animate = true;


  $(window).scroll(function () {

    if($('.skills').offset().top <= $(window).scrollTop() + 150) {
      if(animate) {
        moveProgressBar('.progress__element', '.progress__line', '.progress__tooltip');
      }
      animate = false;
    }

  });

});
*/
window.addEventListener('DOMContentLoaded', () => {


  //Animation

  const progressLine = document.querySelectorAll('.progress__line'),
    progressTooltip = document.querySelectorAll('.progress__tooltip');

  function moveProgressBar() {
    progressLine.forEach(item => {
      item.animate([{
          width: 0 + '%'
        },
        {
          width: item.firstElementChild.textContent
        }
      ], 1500);
      item.style.width = item.firstElementChild.textContent;
    });

    setTimeout(() => {
      progressTooltip.forEach(item => {
        item.style.display = 'block';
      })
    }, 1500);
  }

  moveProgressBar();

  //Carousel

  $('.carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    navText: [],
    items: 5,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      768: {
        items: 3
      },
      980: {
        items: 5
      }
    }
  })

  //
});
