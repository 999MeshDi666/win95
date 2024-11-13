export function moveDesktopItems(
  event,
  elementBody,
  handleMoveItem,
  eventType = "mousemove"
) {
  const { clientX, clientY } =
    eventType === "mousemove" ? event : event.touches[0];

  const outOfScreenY = clientY > window.innerHeight || clientY < 0;
  const outOfScreenX = clientX > window.innerWidth || clientX < 0;

  if (outOfScreenY || outOfScreenX) {
    document.removeEventListener(eventType, handleMoveItem);
  }
  elementBody.style.top = clientY - 20 + "px";
  elementBody.style.left = clientX - 40 + "px";
}
