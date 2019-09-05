// TABSET
// Navigate between related sections of content.
// -----------------------------------------------------------------------------

const TabsetSelectors = {
  COMPONENT: ".c-tabset",
  TAB: ".c-tabset__tab",
  PANEL: ".c-tabset__panel",
  SELECT: "is-selected",
  HIDE: "hidden"
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
      tab.classList.remove(TabsetSelectors.SELECT);
    });
    tab.classList.add(TabsetSelectors.SELECT);

    panels.forEach(panel => {
      panel.setAttribute(TabsetSelectors.HIDE, "");
      if (panel.id == tabId) {
        panel.removeAttribute(TabsetSelectors.HIDE);
      }
    });
  }
}

const tabset = new Tabset();
tabset.handle();

export default Tabset;
