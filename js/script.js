window.addEventListener('DOMContentLoaded', () => {


  //Animation

  const progressLine = document.querySelectorAll('.progress__line'),
    progressTooltip = document.querySelectorAll('.progress__tooltip'),
    skills = document.querySelector('.skills');

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

  function showProgressBar() {
    if (skills.offsetTop <= window.pageYOffset + 400) {
      moveProgressBar();
      window.removeEventListener('scroll', showProgressBar);
    }
  }

  window.addEventListener('scroll', showProgressBar);

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
