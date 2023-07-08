// Add event listeners to all certificate links
let certificateLinks = document.getElementsByClassName("certificateLink");
for (let i = 0; i < certificateLinks.length; i++) {
  certificateLinks[i].addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default link behavior
    let certificateUrl = this.getAttribute("href");
    window.open(certificateUrl, "_blank");
  });
}
