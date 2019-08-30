// NOTICE
// Provide feedback or additional information.
// -----------------------------------------------------------------------------

const NoticeSelectors = {
  COMPONENT: ".c-notice",
  DISMISS_BUTTON: ".c-notice__dismiss-button",
  HIDE: "u-display-none"
};

class Notice {
  constructor() {
    this.elementArray = document.querySelectorAll(NoticeSelectors.COMPONENT);
  }

  handle() {
    this.elementArray.forEach(element => {
      element
        .querySelector(NoticeSelectors.DISMISS_BUTTON)
        .addEventListener("click", () => {
          this.dismiss(event.target.closest(NoticeSelectors.COMPONENT));
        });
    });
  }

  dismiss(element) {
    element.classList.add(NoticeSelectors.HIDE);
  }
}

const notice = new Notice();
notice.handle();

export default Notice;
