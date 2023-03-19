window.onload = function() {
  const noLink = document.querySelector("#no-link");
  noLink.addEventListener("click", function(event) {
    event.preventDefault();
    alert("No, Bakhmut has not fallen.");
  });
};
