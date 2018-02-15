document.addEventListener("DOMContentLoaded", function() {
  greetings();
  setupContact();
});

function greetings() {
  console.log(
    "%cHey there! \uD83D\uDE1C I love to inspect codes too \ud83d\udc40",
    "font-size: 16px; color: #ff0f00"
  );
  console.log(
    "%cI'm sure we can do great things together. Find me at! window.atob('dGFkZXUudmFsZW50dEBnbWFpbC5jb20=');",
    "font-size: 16px; color: #5d1eb2"
  );
}

function setupContact() {
  var contact = document.getElementById("contact");

  toogleContact(this.location.hash);

  window.onhashchange = function() {
    toogleContact(this.location.hash);
  };

  function toogleContact(hash) {
    if (hash == "#contact") {
      contact.classList.add("active");
    } else {
      contact.classList.remove("active");
    }
  }
}
