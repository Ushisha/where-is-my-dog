function smoolthScroll(target, duration) {
  const targetEl = document.querySelector(target);
  const targetPosition = targetEl.getBoundingClientRect().top;
  console.log(targetPosition);
  const startPosition = window.pageYOffset; //0.0

  var distance = targetPosition - startPosition;
  var startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }
  requestAnimationFrame(animation);
}

const section1 = document.querySelector(".section1");
section1.addEventListener("click", function () {
  smoolthScroll(".box2", 1000);
});
