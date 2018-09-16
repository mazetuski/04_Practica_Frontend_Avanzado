/**
 * Function for append components in a container
 * @param elems
 * @param container
 */
export const appendComponents = (container, elems) =>{
  elems.forEach(elem => container.appendChild(elem));
};
