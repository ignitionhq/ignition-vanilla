// NOTICE
// Provide feedback or additional information.
// -----------------------------------------------------------------------------

class Notice {
  dismiss(element) {
    element.classList.add("u-display-none")
  }
}

document.addEventListener("click", function (event) {
  if (event.target.closest(".c-notice__dismiss")) {
    event.preventDefault()
    let notice = new Notice()
    notice.dismiss(event.target.closest(".c-notice"))
	}
})

export default Notice
