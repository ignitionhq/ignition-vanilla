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

// TABSET
// Navigate between related sections of content.
// -----------------------------------------------------------------------------

class Tabset {
  select(element) {
    let tabLinks = document.querySelectorAll(".c-tabset__tab"),
      activePanelId = element.getAttribute("href"),
      tabPanels = document.querySelectorAll(".js-tab-panel"),
      activePanel = document.querySelector(activePanelId);
    for (let i = 0; i < tabPanels.length; i++) {
      tabLinks[i].classList.remove("is-selected");
      tabPanels[i].setAttribute("hidden", "");
    }
    element.classList.add("is-selected");
    activePanel.removeAttribute("hidden");
  }
}

document.addEventListener("click", function(event) {
  if (event.target.closest(".c-tabset__tab")) {
    event.preventDefault();
    let tabset = new Tabset();
    tabset.select(event.target.closest(".c-tabset__tab"));
  }
});

// TAG
// Label items and reference content using keywords.
// -----------------------------------------------------------------------------

class Tag {
  dismiss(element) {
    element.classList.add("u-display-none");
  }
}

document.addEventListener("click", function(event) {
  if (event.target.closest(".c-tag__dismiss")) {
    event.preventDefault();
    let tag = new Tag();
    tag.dismiss(event.target.closest(".c-tag"));
  }
});
