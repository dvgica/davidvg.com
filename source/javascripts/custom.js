function initializeSite() {
  $("a.pop-up").click(function(event) {
    window.open(this.href);
    event.preventDefault();
  });
}
