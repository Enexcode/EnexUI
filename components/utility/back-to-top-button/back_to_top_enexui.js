/*
 * EnexUi Framework
 * --------------------------------------------
 * Category    : Utility
 * Component   : Back to Top Button
 * Version     : 1.0.0
 * Author      : Enexcode Team
 * License     : MIT
 *
 * USAGE OPTIONS:
 * ---------------
 * 👉 Option 1: Link this JS file directly:
 *    <script src="back_to_top_enexui.js"></script>
 *
 * 👉 Option 2: Copy & paste the JS code into your script file.
 *
 * HOW TO USE:
 * ------------
 * 1. Include this JS file after the HTML element with ID #back_to_top_enexui.
 * 2. Optionally customize the scroll threshold or animation behavior.
 * 3. Make sure you also include back_to_top_enexui.css for styling.
 */

document.addEventListener("DOMContentLoaded", function () {
  const backToTopBtn = document.getElementById("back_to_top_enexui");

  // Show the button when user scrolls down a bit
  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  });

  // Scroll to top smoothly when clicked
  backToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
