import $ from "jquery";
const easeOutCubic = (t, b, c, d) => c * ((t = t / d - 1) * t * t + 1) + b;

export const smoothScrollTo = (top, scrollDuration, callback) => {
  let abort = false;
  const finalY = Math.min(
    Math.ceil(top),
    document.documentElement.scrollHeight - window.innerHeight
  );
  const originalY = Math.ceil(window.scrollY);
  const offset = Math.ceil(finalY - originalY);
  const initialTimestamp = performance.now();
  const step = (newTimestamp) => {
    const nextY = Math.ceil(
      easeOutCubic(
        newTimestamp - initialTimestamp,
        originalY,
        offset,
        scrollDuration
      )
    );
    if (
      abort ||
      (finalY >= originalY && nextY >= finalY) ||
      (finalY <= originalY && nextY <= finalY + 1)
    ) {
      window.scrollTo(0, finalY);
      if (callback) callback();
      return;
    } else {
      window.scrollTo(0, nextY);
    }
    window.requestAnimationFrame(step);
  };
  window.requestAnimationFrame(step);
  return () => {
    abort = true;
  };
};

export const getDevice = () => {
  let device;
  const width = $(window).width();
  if (width > 1440) device = "desktop";
  else if (width > 1024) device = "laptop";
  else if (width > 767) device = "tablet";
  else device = "phone";
  return device;
};

export const watchIfVisible = (element, callback) => {
  execIfVisible(element, callback);
  const handleScroll = () => {
    if (execIfVisible(element, callback)) $(window).off("scroll", handleScroll);
  };
  $(window).on("scroll", handleScroll);
};

export const execIfVisible = (element, callback) => {
  const rect = element.get(0).getBoundingClientRect();
  if (rect.top > -rect.height && rect.top < window.innerHeight) {
    callback();
    return true;
  }
};

export const listenMediaChange = (rule, callback) => {
  const match = window.matchMedia(rule);
  if (match.addEventListener) {
    match.addEventListener("change", callback);
  } else if (match.addListener) {
    match.addListener(callback);
  }
};

export const getRectCenteredOffset = (rect) =>
  rect.top +
  document.documentElement.scrollTop -
  window.innerHeight / 2 +
  rect.height / 2;
