(function() {
	let tabLinks = document.querySelectorAll(".c-tabs__link");
  function tabClicks(tabClick) {
		for (let i = 0; i < tabLinks.length; i++) {
			tabLinks[i].classList.remove("is-selected");
		}
		let selectedTab = tabClick.currentTarget;
		selectedTab.classList.add("is-selected");
		tabClick.preventDefault();
		let tabPanels = document.querySelectorAll(".js-tab-panel");
		for (i = 0; i < tabPanels.length; i++) {
			tabPanels[i].setAttribute("hidden", "");
		}
		let anchorRef = tabClick.target;
		let activePanelId = anchorRef.getAttribute("href");
		let activePanel = document.querySelector(activePanelId);
		activePanel.removeAttribute("hidden");
	}
	for (i = 0; i < tabLinks.length; i++) {
		tabLinks[i].addEventListener("click", tabClicks)
	}
})();
