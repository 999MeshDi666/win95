//move items in desktop device function
function moveDesktopItems(event) {
  const icon = event.target.closest("div");
  if (!icon) return;

  const outOfScreenY = event.clientY > window.innerHeight || event.clientY < 0;
  const outOfScreenX = event.clientX > window.innerWidth || event.clientX < 0;

  if (outOfScreenY || outOfScreenX) {
    document.removeEventListener("mousemove", moveDesktopItems);
  }
  icon.style.top = `${event.clientY - 25}px`;
  icon.style.left = `${event.clientX - 45}px`;
}
export function onMouseDown(event) {
  const icon = event.target.closest("div");
  icon.style.top = `${event.clientY - 25}px`;
  icon.style.left = `${event.clientX - 45}px`;
  icon.style.zIndex = 1;
  document.addEventListener("mousemove", moveDesktopItems);
}
export function onMouseUp(event) {
  const icon = event.target.closest("div");
  icon.style.top = `${event.clientY - 50}px`;
  icon.style.left = `${event.clientX - 50}px`;
  icon.style.zIndex = 0;
  document.removeEventListener("mousemove", moveDesktopItems);
}

//move items in mobile device function
function moveMobileItems(event) {
  const icon = event.target.closest("div");
  if (!icon) return;

  const outOfScreenY =
    event.touches[0]?.clientY > window.innerHeight ||
    event.touches[0]?.clientY < 0;
  const outOfScreenX =
    event.touches[0]?.clientX > window.innerWidth ||
    event.touches[0]?.clientX < 0;

  if (outOfScreenY || outOfScreenX) {
    document.removeEventListener("touchmove", moveMobileItems);
  }
  icon.style.top = `${event.touches[0]?.clientY - 25}px`;
  icon.style.left = `${event.touches[0]?.clientX - 45}px`;
}
export function onTouchStart(event) {
  const icon = event.target.closest("div");
  icon.style.top = `${event.touches[0]?.clientY - 25}px`;
  icon.style.left = `${event.touches[0]?.clientX - 45}px`;
  icon.style.zIndex = 1;
  document.addEventListener("touchmove", moveMobileItems);
}
export function onTouchEnd(event) {
  const icon = event.target.closest("div");
  icon.style.top = `${event.touches[0]?.clientY - 50}px`;
  icon.style.left = `${event.touches[0]?.clientX - 50}px`;
  icon.style.zIndex = 0;
  document.removeEventListener("touchmove", moveMobileItems);
}
