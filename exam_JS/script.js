const input = document.getElementById('myInput');

document.onmouseup = function() {
    setTimeout(() => {
        const selection = window.getSelection();
        const selectedText = selection.toString().trim();

        if (selectedText) {
            input.value = selectedText;
            
            selection.removeAllRanges();
            
            input.style.borderColor = '#2ecc71';
            setTimeout(() => {
                input.style.borderColor = '#4a6bbf';
            }, 500);
        }
    }, 0);
};

input.onclick = function() {
    this.select();
};