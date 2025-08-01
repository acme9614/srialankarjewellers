const menuToggle = document.getElementById("menu-toggle");
const drawer = document.getElementById("drawer");
const closeDrawer = document.getElementById("close-drawer");
const overlay = document.getElementById("overlay");

menuToggle.addEventListener("click", () => {
  drawer.classList.remove("-translate-x-full");
  overlay.classList.remove("hidden");
});

closeDrawer.addEventListener("click", () => {
  drawer.classList.add("-translate-x-full");
  overlay.classList.add("hidden");
});

overlay.addEventListener("click", () => {
  drawer.classList.add("-translate-x-full");
  overlay.classList.add("hidden");
});

// drawers menu
function navigateToScheme() {
  Toaster.postMessage("navigateScheme");
}

function navigateToCatalogues() {
  Toaster.postMessage("navigateToCatalogues");
}

function navigateToQuickPurchase() {
  Toaster.postMessage("navigateToQuickPurchase");
}


function navigateToBankDetails() {
  Toaster.postMessage("navigateBankDetails");
}

function navigateToKyc() {
  Toaster.postMessage("navigateKyc");
}

function navigateToRate() {
  Toaster.postMessage("navigateRate");
}

function navigateSchemeRecords() {
  Toaster.postMessage("navigateSchemeRecords");
}

function navigateToCustomerCard() {
  Toaster.postMessage("navigateCustomerCard");
}

function navigateTransactionHistory() {
  Toaster.postMessage("navigateTransactionHistory");
}

function navigateToMyOrder() {
  Toaster.postMessage("navigateToMyOrder");
}

function navigateToUserProfile() {
  Toaster.postMessage("navigateToUserProfile");
}

function navigateToDigitalGold() {
  Toaster.postMessage("navigateToDigitalGold");
}

function navigateToPanchang() {
  Toaster.postMessage("navigateToPanchang");
}

function navigateToFeedback() {
  Toaster.postMessage("navigateToFeedback");
}

function navigateToSetting() {
  Toaster.postMessage("navigateToSetting");
}

function setUserName(username) {
  // Find the element by ID and set the text content
  document.getElementById("user-name-display").innerText =
    "Welcome, " + username;
}
function navigateToHomePage() {
  Toaster.postMessage("navigateToHomePage");
}


// branding slider on mobile screen 

  new Swiper('.myMobileSlider', {
    slidesPerView: "auto",
    spaceBetween: 12,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });



//   services 
 AOS.init({
      duration: 700,
      once: false,
    });


     function toggleTabs() {
      const extraTabs = document.querySelectorAll('[data-extra]');
      const text = document.getElementById('toggleText');
      const icon = document.getElementById('toggleIcon');

      let isHidden = [...extraTabs].some(tab => tab.classList.contains('hidden'));
      extraTabs.forEach(tab => {
        tab.classList.toggle('hidden', !isHidden);
      });

      text.innerText = isHidden ? 'Show Less' : 'Show More';
      icon.classList.toggle('rotate-180', isHidden);
    }