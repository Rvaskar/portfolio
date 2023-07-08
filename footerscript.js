document.addEventListener("DOMContentLoaded", function() {
    const footerText = document.getElementById("footerText");
    const textOptions = [
      "software developer",
      "IT Engineer",
      "Web Developer",
      " Designer"
    ];
    let currentIndex = 0;
  
    // Function to change the footer text
    function changeText() {
      footerText.textContent = textOptions[currentIndex];
      currentIndex = (currentIndex + 1) % textOptions.length;
    }
  
    // Ensure the initial text is displayed
    footerText.textContent = textOptions[currentIndex];
  
    // Set the interval to change the text every 3 seconds
    setInterval(changeText, 3000);
  });