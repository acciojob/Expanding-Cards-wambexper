//your JS code here. If required.
// JavaScript
function expandPanel(panelNumber) {
  // Reset all panels to default size
  for (let i = 1; i <= 5; i++) {
    const panel = document.getElementById(`panel-${i}`);
    panel.classList.remove("active");
  }

  // Expand the clicked panel
  const clickedPanel = document.getElementById(`panel-${panelNumber}`);
  clickedPanel.classList.add("active");
}
