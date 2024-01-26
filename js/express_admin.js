const button = document.querySelector('#ucb-sidebar-toggle-button');
const mainDiv = document.querySelector('#ucb-edit-container');

button.addEventListener('click', () => {
    // debug, sanity check 
    // alert("You clicked me!");

    // check the toggle state of the button 
    let status = button.dataset.status; 

    // if the toggle status is 'open'
    if(status == 'open') {
        mainDiv.classList.add("sidebar-closed");
        mainDiv.classList.remove("sidebar-open");

    } else {
        mainDiv.classList.add("sidebar-open");
        mainDiv.classList.remove("sidebar-closed");
    }
    // and toggle the icon/data attribute 
    toggleButton();

});

function toggleButton () {
    const buttonLink  = document.querySelector('#ucb-sidebar-toggle-button');
    const openButton  = '<i class="fa-solid fa-2x fa-toggle-on"></i>';
    const closeButton = '<i class="fa-solid fa-2x fa-toggle-off"></i>';
    var myStatus = button.dataset.status; 

    if(myStatus == 'open') {
        // set the data attribute to closed 
        button.dataset.status = 'closed';

        // and switch to the closed icon 
        button.innerHTML = closeButton;

    } else {
        // set the data attribute to open 
        button.dataset.status = 'open';

        // ans switch to the open icon 
        button.innerHTML = openButton;
    }
};