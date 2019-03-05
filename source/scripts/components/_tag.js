// TAG
// Label items and reference content using keywords.
// -----------------------------------------------------------------------------

(function() {
  let tagDismissArray = document.querySelectorAll(".c-tag__dismiss");

  function dismissTag(event) {
    let tag = event.target.closest(".c-tag");
    tag.classList.add("u-display-none");
  }

  tagDismissArray.forEach(function(item) {
    item.addEventListener("click", dismissTag);
  });
})();
