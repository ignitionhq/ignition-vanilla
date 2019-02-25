// NOTICE
// Provide feedback or additional information.
// -----------------------------------------------------------------------------

(function() {
  let notice = document.querySelector(".c-notice--dismissible");
  let noticeDismiss = document.querySelector(".c-notice__dismiss");

  function dismissNotice() {
    notice.classList.add("u-display-none");
  }

  noticeDismiss.addEventListener("click", dismissNotice);
})();
