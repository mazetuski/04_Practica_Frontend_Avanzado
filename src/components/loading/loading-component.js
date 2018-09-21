import loadingImg from 'assets/loading.png';

export const createLoading = () => {
  const loading = document.createElement('div');
  loading.classList.add('loading-wrapper');
  loading.innerHTML = `<img src="${loadingImg}" alt="Cargando">`;
  return loading;
};
