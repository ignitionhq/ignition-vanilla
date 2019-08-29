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

// TABS
// Navigate between related sections of content.
// -----------------------------------------------------------------------------

class Tabs {
  select(element) {
    let tabLinks = document.querySelectorAll(".c-tabs__link"),
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
  if (event.target.closest(".c-tabs__link")) {
    event.preventDefault();
    let tabs = new Tabs();
    tabs.select(event.target.closest(".c-tabs__link"));
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
