/**
 * Function for handle functionality of hamburguer nav icon
 */
const handleHamburguer = () => {
  const hamburguer = document.querySelector('#hamburguer');
  const header = document.querySelector('header');
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