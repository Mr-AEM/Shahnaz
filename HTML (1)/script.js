const tabsContainer = document.getElementById("tabs-container");
const floatingButton = document.getElementById("floating-button");

// Show the tabs on button click
floatingButton.addEventListener("click", () => {
  tabsContainer.classList.add("visible");
  tabsContainer.classList.remove("hidden");
});

// Hide the tabs when clicking outside
document.addEventListener("click", (e) => {
  if (!tabsContainer.contains(e.target) && e.target !== floatingButton) {
    tabsContainer.classList.add("hidden");
    tabsContainer.classList.remove("visible");
  }
});

// Hide the tabs when scrolling
window.addEventListener("scroll", () => {
  tabsContainer.classList.add("hidden");
  tabsContainer.classList.remove("visible");
});


// Define URLs for each tab
const tabUrls = {
  tab1: "Artist.html",      // URL für Tab 1
  tab2: "Software versions.html",    // URL für Tab 2
  tab3: "AAhome.html", // URL für Tab 3
  tab4: "info.html"      // URL für Tab 4
};
// Add event listeners to open URLs when a tab is selected
document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("change", (e) => {
    const selectedTab = e.target.id; // Get the id of the selected tab
    if (tabUrls[selectedTab]) {
      window.location.href = tabUrls[selectedTab]; // Öffnet im gleichen Tab
    }
  });
});