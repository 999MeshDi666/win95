function moveDesktopItems(event) {
  const icon = event.target.closest("div");
  const outOfScreenY = event.clientY > window.innerHeight || event.clientY < 0;
  const outOfScreenX = event.clientX > window.innerWidth || event.clientX < 0;
  if (outOfScreenY || outOfScreenX) {
    document.removeEventListener("mousemove", moveDesktopItems);
  }
  icon.style.top = `${event.clientY - 25}px`;
  icon.style.left = `${event.clientX - 40}px`;
}
function actionMouseDown(event) {
  const icon = event.target.closest("div");
  icon.style.top = `${event.clientY - 25}px`;
  icon.style.left = `${event.clientX - 40}px`;
  document.addEventListener("mousemove", moveDesktopItems);
}
function actionMouseUp(event) {
  const icon = event.target.closest("div");
  icon.style.top = `${event.clientY - 50}px`;
  icon.style.left = `${event.clientX - 50}px`;
  document.removeEventListener("mousemove", moveDesktopItems);
}
