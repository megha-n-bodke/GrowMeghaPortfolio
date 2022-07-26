/* let h = document.querySelector("#hmbg");
console.log(h); */

/* document.addEventListener('click', function(event){
    h.cl
}
); */
const hmbg = document.querySelector('#hmbg');
const clo = document.querySelector('#closebtn');
const linkitems = document.querySelectorAll('.linkitems');

const navbar = document.querySelector('.header2');
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
