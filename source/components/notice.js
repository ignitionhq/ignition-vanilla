// NOTICE
// Provide feedback or additional information.
// -----------------------------------------------------------------------------

class Notice {
  constructor() {
    this.notices = [];
  }
  select() {
    this.notices = Array.from(document.getElementsByClassName("c-notice"));
    this.notices.forEach(notice => {
      notice.addEventListener("click", () => {
        this.dismiss(event.target.closest(".c-notice"));
      });
    });
  }
  dismiss(element) {
    element.classList.add("u-display-none");
  }
}

let notice = new Notice();
notice.select();

export default Notice;
