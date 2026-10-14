(function() {
  const button = document.querySelector('#ucb-sidebar-toggle-button');
  const main = document.querySelector('main');

  button.addEventListener('click', event => {
    event.preventDefault();

    // check the toggle state of the button 
    const status = button.dataset.status;

    // Toggle toggle
    if (status == 'open') {
      main.classList.add('ucb-sidebar-closed');
    } else {
      main.classList.remove('ucb-sidebar-closed');
    }

    // and toggle the icon/data attribute 
    toggleButton();
  });

  function toggleButton() {
    const openButton = '<i class="fa-solid fa-2x fa-toggle-on"></i>';
    const closeButton = '<i class="fa-solid fa-2x fa-toggle-off"></i>';
    const myStatus = button.dataset.status;

    if (myStatus == 'open') {
      // Set the data attribute to closed 
      button.dataset.status = 'closed';

      // Switch to the closed icon 
      button.innerHTML = closeButton;

    } else {
      // Set open
      button.dataset.status = 'open';

      // Switch to  open icon 
      button.innerHTML = openButton;
    }
  }
})();
