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
    this.componentArray = document.querySelectorAll(TabsetSelectors.COMPONENT);
  }

  handle() {
    this.componentArray.forEach(component => {
      component.addEventListener("click", () => {
        const tabArray = component.querySelectorAll(TabsetSelectors.TAB);
        const panelArray = component.querySelectorAll(TabsetSelectors.PANEL);

        if (event.target.matches(TabsetSelectors.TAB)) {
          this.select(tabArray, panelArray);
        }
      });
    });
  }

  select(tabArray, panelArray) {
    event.preventDefault();

    const tab = event.target;
    const tabId = tab.getAttribute("href").split("#")[1];

    tabArray.forEach(tab => {
      tab.classList.remove("is-selected");
    });
    tab.classList.add("is-selected");

    panelArray.forEach(panel => {
      panel.setAttribute("hidden", "");
      if (panel.id == tabId) {
        panel.removeAttribute("hidden");
      }
    });
  }
}

const tabset = new Tabset();
tabset.handle();

export default Tabset;
