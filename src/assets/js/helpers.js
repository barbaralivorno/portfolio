export const isElementVisible = (elementSelector) => {
  const element = document.querySelector(elementSelector);
  if (!element) {
    return false;
  }

  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  const visibleThreshold = windowHeight * 0.25;

  if (
    (rect.top >= 0 && rect.top <= windowHeight - visibleThreshold) ||
    (rect.bottom >= visibleThreshold && rect.bottom <= windowHeight) ||
    (rect.top <= 0 && rect.bottom >= windowHeight)
  ) {
    return true;
  }

  return false;
};


export const getDevice = () => {
  let device;
  const width = window.innerWidth;
  if (width > 1440) device = 'desktop';
  else if (width > 1024) device = 'laptop';
  else if (width > 767) device = 'tablet';
  else device = 'phone';
  return device;
};