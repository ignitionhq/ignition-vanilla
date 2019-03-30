// TAG
// Label items and reference content using keywords.
// -----------------------------------------------------------------------------

class Tag {
  dismiss(element) {
    element.classList.add("u-display-none")
  }
}

document.addEventListener("click", function (event) {
  if (event.target.closest(".c-tag__dismiss")) {
    event.preventDefault();
    let tag = new Tag()
    tag.dismiss(event.target.closest(".c-tag"))
	}
})

export default Tag
