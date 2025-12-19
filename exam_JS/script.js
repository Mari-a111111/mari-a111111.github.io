const input = document.getElementById("myInput");

document.onmouseup = function () {
  setTimeout(() => {
    const selection = window.getSelection();
    const selectedText = selection.toString().trim();

    if (selectedText) {
      input.value = selectedText;
      selection.removeAllRanges();
    }
  }, 0);
};

input.onclick = function () {
  this.select();
};
