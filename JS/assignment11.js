const lightbulb = document.getElementById('lightbulb');

lightbulb.addEventListener('click', () => {
    if (lightbulb.classList.contains('off')) {
        lightbulb.classList.remove('off');
        lightbulb.classList.add('on');
    } else {
        lightbulb.classList.remove('on');
        lightbulb.classList.add('off');
    }
});
