document.addEventListener("DOMContentLoaded", function () {
  var dropdownLinks = document.querySelectorAll(".dropdown-content a");

  dropdownLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default link behavior
      var page = this.textContent.toLowerCase(); // Get the text content of the clicked link

      // Redirect to the corresponding page
      if (page === "home") {
        window.location.href = "index.html";
      } else if (page === "about") {
        window.location.href = "about.html";
      } else if (page === "membership") {
        window.location.href = "membership.html";
      } else if (page === "community") {
        window.location.href = "community.html";
      } else if (page === "news") {
        window.location.href = "news.html";
      } else if (page === "resources") {
        window.location.href = "resources.html";
      } else if (page === "contact") {
        window.location.href = "contact.html";
      }
    });
  });
});

// Function for search button
document.querySelector(".btn-primary").addEventListener("click", function () {
  var searchInput = document.querySelector(".search-input");
  if (searchInput.value) {
    window.location.href = "/search?q=" + searchInput.value;
  }
});

// Function for social media icons
var socialMediaIcons = document.querySelectorAll(".share a");
socialMediaIcons.forEach(function (icon) {
  icon.addEventListener("click", function (event) {
    event.preventDefault();
    var socialMedia = this.classList[1];
    var socialMediaUrls = {
      "fa-facebook": "https://www.facebook.com",
      "fa-twitter": "https://twitter.com",
      "fa-instagram": "https://www.instagram.com",
      "fa-linkedin": "https://www.linkedin.com",
      "fa-pinterest": "https://www.pinterest.com",
    };
    if (socialMediaUrls.hasOwnProperty(socialMedia)) {
      window.open(socialMediaUrls[socialMedia], "_blank");
    }
  });
});

// Function for links
var links = document.querySelectorAll(".links a");
links.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    var targetId = this.getAttribute("href").substring(1);
    var targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Select the search button and input field
const searchBtn = document.getElementById("search-btn");
const searchInput = document.querySelector(".search-input");

// Add click event listener to the search button
searchBtn.addEventListener("click", function () {
  // Check if the search input field is not empty
  if (searchInput.value) {
    // Redirect to the search page with the search query
    window.location.href = 'https://www.google.com' + searchInput.value;
  }
});

// Add keydown event listener to the search input field
searchInput.addEventListener("keydown", function (event) {
  // Check if the user pressed the Enter key
  if (event.key === "Enter") {
    // Redirect to the search page with the search query
    window.location.href = 'https://www.google.com' + searchInput.value;
  }
});

const joinUsButton = document.querySelector('.btn');

  // Add click event listener to the "Join Us" button
  joinUsButton.addEventListener('click', function() {
    // Redirect to the contact form URL
    window.location.href = '/contact us.html';
  });

  
  
