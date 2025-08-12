window.onscroll = function () {
  const scrollButton = document.getElementById("scrollTopBtn");
  if (
    document.body.scrollTop > 200 || 
    document.documentElement.scrollTop > 200
  ) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
};

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
