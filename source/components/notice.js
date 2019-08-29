// NOTICE
// Provide feedback or additional information.
// -----------------------------------------------------------------------------

const NoticeClasses = {
  COMPONENT: ".c-notice",
  DISMISS_BUTTON: ".c-notice__dismiss-button",
  HIDE: "u-display-none"
};

class Notice {
  constructor() {
    this.elementArray = document.querySelectorAll(NoticeClasses.COMPONENT);
  }

  handle() {
    this.elementArray.forEach(element => {
      element
        .querySelector(NoticeClasses.DISMISS_BUTTON)
        .addEventListener("click", () => {
          this.dismiss(event.target.closest(NoticeClasses.COMPONENT));
        });
    });
  }

  dismiss(element) {
    element.classList.add(NoticeClasses.HIDE);
  }
}

const notice = new Notice();
notice.handle();

export default Notice;
