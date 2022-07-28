/*Element acess through java script*/
const hmbg = document.querySelector('.fa-bars');
const clo = document.querySelector('#closebtn');
const linkitems = document.querySelectorAll('.linkitems');
const navbar = document.querySelector('.header2');

/*Event listner for hem icon*/
hmbg.addEventListener('click', () => {
  navbar.style.display = 'block';
  hmbg.style.display = 'none';
});

/*Event listner for close button*/
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
