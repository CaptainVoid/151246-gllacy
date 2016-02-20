  var link = document.querySelector(".feedback-button");
  var flow = document.querySelector(".flow-trans")

  var popup = document.querySelector(".feedback-popup");
  var close = popup.querySelector(".feedback-cross");
  var firstname = popup.querySelector("[name=first-name]");
  var secondname = popup.querySelector("[name=second-name]");
  var info = popup.querySelector("[name=information]");
  var form = popup.querySelector("form");
  var storage = localStorage.getItem("firstname");

  link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("feedback-popup-show");
    flow.classList.add("feedback-flow-show")
  });
  close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("feedback-popup-show");
    flow.classList.remove("feedback-flow-show");
  });
  flow.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("feedback-popup-show");
    flow.classList.remove("feedback-flow-show");
  });
  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (popup.classList.contains("feedback-popup-show")) {
        popup.classList.remove("feedback-popup-show");
        flow.classList.remove("feedback-flow-show");
      }
    }
  });
