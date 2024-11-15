export function moveDesktopItems(
  event,
  moveableItem,
  handleMoveItem,
  offsetX,
  offsetY,
  eventType = "mousemove"
) {
  const { clientX, clientY } =
    eventType === "mousemove" ? event : event.touches[0];

  const outOfScreenY = clientY > window.innerHeight || clientY < 0;
  const outOfScreenX = clientX > window.innerWidth || clientX < 0;

  if (outOfScreenY || outOfScreenX) {
    document.removeEventListener(eventType, handleMoveItem);
  }

  moveableItem.style.top = clientY - offsetY + "px";
  moveableItem.style.left = clientX - offsetX + "px";
}
