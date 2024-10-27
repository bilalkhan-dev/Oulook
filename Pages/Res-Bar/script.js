
const searchIconContainer = document.querySelector('.search-icon-container');
const searchIcon = searchIconContainer.querySelector('.fi-rr-search');
const forLgElements = document.querySelectorAll('.for-lg');

searchIconContainer.addEventListener('click', toggleSearch);
document.addEventListener('click', outsideClick);
window.addEventListener('scroll', toggleSearch);

function toggleSearch() {
  forLgElements.forEach((element) => {
    element.style.display = element.style.display === 'block' ? 'none' : 'block';
  });
  searchIcon.style.display = search
