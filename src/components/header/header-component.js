import hamburguerImg from 'assets/hamburguer.png';

/**
 * Function for handle functionality of hamburguer nav icon
 */
const handleHamburguer = () => {
  const hamburguer = document.querySelector('#hamburguer');
  const header = document.querySelector('header');
  // add hamburguer img
  const img = document.createElement('img');
  img.src = hamburguerImg;
  hamburguer.appendChild(img);
  // handle on click hamburguer
  hamburguer.addEventListener('click', (e) => {
    e.preventDefault();
    header.classList.toggle('menu-open');
  });
};

export const initializeHeader = () => {
  handleHamburguer();
};

export default{
  initializeHeader
}