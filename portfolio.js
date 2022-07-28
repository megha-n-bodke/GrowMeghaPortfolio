/*Asign var to the query selector emlement*/

const hmbg = document.querySelector('.fa-bars');
const clo = document.querySelector('#closebtn');
const linkitems = document.querySelectorAll('.linkitems');
const navbar = document.querySelector('.header2');

/*add event listner to hem*/

hmbg.addEventListener('click', () => {
  navbar.style.display = 'block';
  hmbg.style.display = 'none';
});

clo.addEventListener('click', () => {
  navbar.style.display = 'none';
  hmbg.style.display = 'block';
});

[].forEach.call(linkitems, (item) => {
  item.addEventListener('click', () => {
    navbar.style.display = 'none';
    hmbg.style.display = 'block';
  });
});
