export const createVideoIframe = (url) => {
  return `
    <div class="iframe-container">
        <iframe src="${url}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </div>`;
};
