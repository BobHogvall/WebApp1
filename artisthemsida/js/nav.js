const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");
const coll = document.querySelectorAll(".collapsible");
const form = document.querySelector(".review-form");
const review = document.querySelector(".review");
const error = document.querySelector(".error");

navToggle.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");

  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", "true");
    navToggle.setAttribute("aria-expanded", "true");
  } else {
    primaryNav.setAttribute("data-visible", "false");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

coll.forEach((collapsible) => {
  collapsible.addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
});

function encodeHtmlEntities(input) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


if (form) {
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const reviewValue = review.value;
  const encodedReviewValue = encodeHtmlEntities(reviewValue);

  if (encodedReviewValue.length < 3) {
    error.textContent = "Your review is too short.";
  } else if (encodedReviewValue.length > 200) {
    error.textContent = "Your review is too long.";
  } else {
    error.textContent = "";
  }
});
}



function createNode(element) {
    return document.createElement(element);
  }
  
  function append(parent, el) {
    return parent.appendChild(el);
  }
  
  const ul = document.querySelector('#about');
  const url = 'js/about.json';
  
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      let about = data.about;
  
      about.forEach(function(about){
        let li = createNode('li');
        li.innerHTML = about;
        append (ul,li);
      })
    })
    .catch(error => {
      console.error('Error:', error);
    });

