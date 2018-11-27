var header = document.querySelector('header');
var sidebar = document.getElementById("sidebar");
var sidebarGrid = document.getElementById("sidebar-grid");
var arrow = document.getElementById("wallet-arrow");
var dropdowns = document.getElementsByClassName("dropdown-content");
var login = document.getElementById("profile-nav");
var logout = document.getElementById("quit-nav");
var popupContainerLogin = document.getElementsByClassName("popup-container")[0];
var popupContainerLogout = document.getElementsByClassName("popup-container")[1];
var closeIcon = document.querySelector(".popup-container .close-popup-container i");
var cancelBtn = document.getElementById("cancel-btn");
var popups = document.getElementsByClassName('popup-container');


// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('#wallet-nav') && !event.target.matches('#wallet-nav h1') && !event.target.matches('#wallet-nav i')) {
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
        arrow.classList.remove('icon-arrow-up');
      }
    }
  }
}

/*Switch sidebar - click on Hamburger*/
function switchSidebar() {
    sidebar.classList.toggle("sidebar-big");
    sidebarGrid.classList.toggle("sidebar-big");
    sidebar.classList.toggle("sidebar-small");
    sidebarGrid.classList.toggle("sidebar-small");
}
/*Show-Hide Header - click on Hamburger*/
function toggleHeader(visible) {
  header.classList.toggle('show-header', visible);
}
document.querySelector('#hamburger').addEventListener('click', function(e) {
  e.preventDefault();
  switchSidebar();
  if(sidebarGrid.classList.contains("sidebar-big")) {
    toggleHeader();
  } else if (sidebarGrid.classList.contains("sidebar-small")) {
    toggleHeader();
  } else {
    console.log("err");
  }
});

/*Show-Hide Header - click on icon - arrow up*/
document.querySelector('.hide-nav i').addEventListener('click', function(e) {
  e.preventDefault();
  toggleHeader();
  switchSidebar();
});

document.querySelector('#wallet-nav').addEventListener('click', function(e) {
  e.preventDefault();
  showDropdown();
});

/* Show dropdown for wallet on click*/
function showDropdown() {
    document.getElementById("wallet-dropdown").classList.toggle("show");
    document.getElementById("wallet-arrow").classList.toggle("icon-arrow-up");
}

/* Popups */
//login
function togglePopup(visible) {
  popupContainerLogin.classList.toggle('show-popup', visible);
}

login.addEventListener('click', function(e) {
  e.preventDefault();
  togglePopup();
});

closeIcon.addEventListener('click', function(e) {
  e.preventDefault();
  togglePopup();
});

//logout
function togglePopupLogout(visible) {
   document.querySelectorAll('#login-overlay > *').forEach(function(modal) {
    modal.classList.remove('show')
  })
  popupContainerLogout.classList.toggle('show-popup', visible);
}
logout.addEventListener('click', function(e) {
  document.querySelectorAll('#logout-overlay > *').forEach(function(modal) {
  modal.classList.remove('show')
  })
  e.preventDefault();
  if(sidebarGrid.classList.contains("sidebar-big")) {
    toggleHeader();
    switchSidebar();
    togglePopupLogout();
  } else {
    togglePopupLogout();
  }

});

cancelBtn.addEventListener('click', function(e) {
  e.preventDefault();
  togglePopupLogout();
});

/*Modals*/
function closeModal() {  
  for(var i = 0; i < popups.length; i++) {
    popups[i].classList.remove("show-popup");
  }
}

document.querySelectorAll('.popup-container .js--close-modal').forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.preventDefault()
    closeModal()
  })
})


/*Close modals on backgond click */
popups[0].addEventListener('click', function(e) {
  if(e.target === this) {
    closeModal()
  }
})
popups[1].addEventListener('click', function(e) {
  if(e.target === this) {
    closeModal()
  }
})
/*Close modals on with esc key */
document.addEventListener('keyup', function(e) {
  if(e.keyCode === 27) {
    closeModal()
  }
})


