// NOTICE
// Provide feedback or additional information.
// -----------------------------------------------------------------------------

const Name = {
  COMPONENT: ".c-notice",
  DISMISS_BUTTON: ".c-notice__dismiss-button",
  HIDE: "u-display-none"
};

class Notice {
  constructor() {
    this.elementArray = document.querySelectorAll(Name.COMPONENT);
  }

  listen() {
    this.elementArray.forEach(element => {
      element
        .querySelector(Name.DISMISS_BUTTON)
        .addEventListener("click", () => {
          this.dismiss(event.target.closest(Name.COMPONENT));
        });
    });
  }

  dismiss(element) {
    element.classList.add(Name.HIDE);
  }
}

const notice = new Notice();
notice.listen();

export default Notice;
