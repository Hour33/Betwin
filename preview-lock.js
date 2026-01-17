// Global preview lock – redirects any interaction to login
document.addEventListener(
  "click",
  function (e) {
    e.preventDefault();
    e.stopPropagation();
    window.location.href = "register.html";
  },
  true
);
