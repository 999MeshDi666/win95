//move items in desktop device
export function moveDesktopItems(event, elementBody, handleMoveItem) {
  const outOfScreenY = event.clientY > window.innerHeight || event.clientY < 0;
  const outOfScreenX = event.clientX > window.innerWidth || event.clientX < 0;

  if (outOfScreenY || outOfScreenX) {
    console.log("here");
    document.removeEventListener("mousemove", handleMoveItem);
  }
  elementBody.style.top = `${event.clientY}px`;
  elementBody.style.left = `${event.clientX}px`;
}

//move items in mobile device
export function moveMobileItems(event, elementBody, handleMoveItem) {
  const outOfScreenY =
    event.touches[0]?.clientY > window.innerHeight ||
    event.touches[0]?.clientY < 0;
  const outOfScreenX =
    event.touches[0]?.clientX > window.innerWidth ||
    event.touches[0]?.clientX < 0;

  if (outOfScreenY || outOfScreenX) {
    document.removeEventListener("touchmove", handleMoveItem);
  }
  elementBody.style.top = `${event.touches[0]?.clientY}px`;
  elementBody.style.left = `${event.touches[0]?.clientX}px`;
}
