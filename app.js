const devContainer = document.querySelector('.dev-container');

devContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('details')) {
    const details = e.target.parentElement;
    const p = e.target.parentElement.lastElementChild;
    e.preventDefault();
    p.classList.remove('slide-in');
    setTimeout(() => {
      if (!details.open) {
        setTimeout(() => {
          p.classList.add('slide-in');
        }, 0);
      }
      details.open = details.open ? false : true;
    }, 200);
  }
});
