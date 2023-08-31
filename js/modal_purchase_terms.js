const btnOpen = document.querySelectorAll('.modal__open');
const modalWrapper = document.querySelectorAll('.modal__wrapper');
const modalWindow = document.querySelectorAll('.modal__window');
const modalClose = document.querySelectorAll('.modal__close');


const modal = () => {
  for(i = 0; i <= btnOpen.length; i++) {
    for(i of modalWrapper) {
      if(btnOpen[i] === modalWrapper[i]) {
        btnOpen[i].addEventListener("click", function() {
          modalWrapper[i].classList('open')
        })
      }
    }
  }
}



// btnOpen[0].addEventListener('click', function() {
//   modalWrapper[0].classList.add('open');
// })
// btnOpen[1].addEventListener('click', function() {
//   modalWrapper[1].classList.add('open');
// })
// btnOpen[2].addEventListener('click', function() {
//   modalWrapper[2].classList.add('open');
// })
// btnOpen[3].addEventListener('click', function() {
//   modalWrapper[3].classList.add('open');
// })

// modalClose[0].addEventListener('click', function() {
//   modalWrapper[0].classList.remove('open');
// })
// modalClose[1].addEventListener('click', function() {
//   modalWrapper[1].classList.remove('open');
// })
// modalClose[2].addEventListener('click', function() {
//   modalWrapper[2].classList.remove('open');
// })
// modalClose[3].addEventListener('click', function() {
//   modalWrapper[3].classList.remove('open');
// })

// window.addEventListener('keydown', function(e) {
//   if(e.key === "Escape") {
//     modalWrapper[0].classList.remove('open');
//   }
// })
// window.addEventListener('keydown', function(e) {
//   if(e.key === "Escape") {
//     modalWrapper[1].classList.remove('open');
//   }
// })
// window.addEventListener('keydown', function(e) {
//   if(e.key === "Escape") {
//     modalWrapper[2].classList.remove('open');
//   }
// })
// window.addEventListener('keydown', function(e) {
//   if(e.key === "Escape") {
//     modalWrapper[3].classList.remove('open');
//   }
// })



