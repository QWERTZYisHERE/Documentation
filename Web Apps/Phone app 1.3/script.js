function navigateTo(url) {
  document.body.classList.add('exiting');
  setTimeout(function () {
    location.href = url;
  }, 220);
}
