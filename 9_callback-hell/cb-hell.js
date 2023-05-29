// Callback Hell
// luego de 1s primero rojo;
// luego de 3s segundo azul;
// luego de 2s tercero verde;
// ! SECUENCIALMENTE !!!!

const primero = document.querySelector('.primero')
const segundo = document.querySelector('.segundo')
const tercero = document.querySelector('.tercero')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
  setTimeout(() => {
    primero.style.color = 'red';
    setTimeout(() => {
      segundo.style.color = 'blue';
      setTimeout(() => {
       tercero.style.color = 'green';
      }, 2000);
    }, 3000);
  }, 5000);
})
