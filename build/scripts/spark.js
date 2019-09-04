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

const TabsetSelectors = {
  COMPONENT: ".c-tabset",
  TAB: ".c-tabset__tab",
  PANEL: ".c-tabset__panel"
};

class Tabset {
  constructor() {
    this.components = document.querySelectorAll(TabsetSelectors.COMPONENT);
  }

  handle() {
    this.components.forEach(component => {
      component.addEventListener("click", () => {
        const tabs = component.querySelectorAll(TabsetSelectors.TAB);
        const panels = component.querySelectorAll(TabsetSelectors.PANEL);

        if (event.target.matches(TabsetSelectors.TAB)) {
          this.select(tabs, panels);
        }
      });
    });
  }

  select(tabs, panels) {
    event.preventDefault();

    const tab = event.target;
    const tabId = tab.getAttribute("href").split("#")[1];

    tabs.forEach(tab => {
      tab.classList.remove("is-selected");
    });
    tab.classList.add("is-selected");

    panels.forEach(panel => {
      panel.setAttribute("hidden", "");
      if (panel.id == tabId) {
        panel.removeAttribute("hidden");
      }
    });
  }
}

const tabset = new Tabset();
tabset.handle();

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
