
function sendMail(){

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let message = document.getElementById("message").value;

let subject = "Website Message from " + name;

let body =
"Name: " + name + "%0D%0A" +
"Email: " + email + "%0D%0A%0D%0A" +
"Message:%0D%0A" + message;

window.location.href =
"mailto:1996dragrat@gmail.com?subject="+subject+"&body="+body;

}

function toggleMenu(){
var menu = document.getElementById("navMenu");
menu.classList.toggle("show");
}

/* close menu when clicking link */
document.querySelectorAll("#navMenu a").forEach(function(link){
link.addEventListener("click", function(){
document.getElementById("navMenu").classList.remove("show");
});
});

/* COUNTER */

document.addEventListener("DOMContentLoaded", function () {
  let countersAnimated = false;
  let ratingsAnimated = false;

  function animateCounter(id, target) {
    let c = 0;
    let i = setInterval(() => {
      c++;
      document.getElementById(id).innerText = c;
      if (c >= target) clearInterval(i);
    }, 20);
  }

  function animateRatings() {
    document.querySelectorAll(".rating-fill").forEach(bar => {
      const fill = bar.getAttribute("data-fill");
      bar.style.width = fill;
    });
  }

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom >= 0;
  }

  function animateOnScroll() {
    const section = document.getElementById("achievements");

    if (isElementInViewport(section)) {
      if (!countersAnimated) {
        animateCounter("c1", 120);
        animateCounter("c2", 80);
        animateCounter("c3", 150);
        countersAnimated = true;
      }

      if (!ratingsAnimated) {
        animateRatings();
        ratingsAnimated = true;
      }
    }
  }

  window.addEventListener("scroll", animateOnScroll);
  window.addEventListener("resize", animateOnScroll);
  animateOnScroll(); // check on load
});
