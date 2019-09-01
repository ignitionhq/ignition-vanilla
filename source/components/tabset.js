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

export default Tabset;
