// NOTICE
// Provide feedback or additional information.
// -----------------------------------------------------------------------------

(function() {
  let noticeDismissArray = document.querySelectorAll(".c-notice__dismiss");

  function dismissNotice(event) {
    let notice = event.target.closest(".c-notice--dismissible");
    notice.classList.add("u-display-none");
  }

  noticeDismissArray.forEach(function(item) {
    item.addEventListener("click", dismissNotice);
  });
})();
