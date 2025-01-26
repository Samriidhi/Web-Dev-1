const saveIcons = document.querySelectorAll('.save-icon');
const favCountElement = document.querySelector('#fav-count');
const favHeartElement = document.querySelector('#fav-heart');

let favCount = 0;

saveIcons.forEach((icon) => {
  icon.addEventListener('click', () => {
    icon.classList.toggle('red');
    if (icon.classList.contains('red')) {
      favCount++;
    } else {
      favCount--;
    }
    favCountElement.textContent = favCount;
    if (favCount > 0) {
      favHeartElement.setAttribute('data-state', 'filled');
    } else {
      favHeartElement.setAttribute('data-state', 'empty');
    }
  });
});
