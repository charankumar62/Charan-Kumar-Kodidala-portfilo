// Simple smooth scroll (already handled by CSS, but ready for features)
console.log("Welcome to KCK Portfolio!");
// Show the Scroll-to-Top button when scrolling
window.onscroll = function () {
    let scrollButton = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      scrollButton.style.display = "block";
    } else {
      scrollButton.style.display = "none";
    }
  };
  
  // Scroll to the top when the button is clicked
  function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  