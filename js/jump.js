const buttonJump = document.querySelector('.main__btn');
const body = document.body;
const contentSection = Array.from(body.children);
console.log(contentSection);
const homeLink = document.querySelectorAll('.home__link')
console.log(homeLink)

function scrollTo(element) {
  window.scroll({
    left: 0,
    top: element.offsetTop,
    behavior: "smooth"
  })
}

buttonJump.addEventListener('click', function () {
  contentSection.forEach(function (section) {
    section.classList.remove('hidden');
    scrollTo(contentSection[2]);
    })
})



homeLink[0].addEventListener('click', function() {
  contentSection.forEach(function (section) {
    section.classList.remove('hidden');
    scrollTo(contentSection[2]);
    })
})
homeLink[1].addEventListener('click', function() {
  contentSection.forEach(function (section) {
    section.classList.remove('hidden');
    scrollTo(contentSection[5]);
    })
})