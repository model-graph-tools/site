document.querySelectorAll('table').forEach(function (element) {
    if (element.classList.length === 0) {
        element.classList.add('table');
    }
});
