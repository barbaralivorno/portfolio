export const isElementVisible = (elementSelector) => {
  const element = document.querySelector(elementSelector);
  if (!element) {
    return false;
  }

  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top >= 0 && rect.top <= windowHeight) {
    return true;
  }

  if (rect.bottom >= 0 && rect.bottom <= windowHeight) {
    return true;
  }

  return false;
}