// NOTICE
// Provide feedback or additional information.
// -----------------------------------------------------------------------------

class Notice {
  constructor() {
    this.elementArray = document.querySelectorAll(".c-notice");
  }

  listen() {
    this.elementArray.forEach(element => {
      element
        .querySelector(".c-notice__dismiss-button")
        .addEventListener("click", () => {
          this.dismiss(event.target.closest(".c-notice"));
        });
    });
  }

  dismiss(element) {
    element.classList.add("u-display-none");
  }
}

let notice = new Notice();
notice.listen();

export default Notice;
