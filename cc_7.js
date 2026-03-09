const input = [document.getElementById('heroInput')];
const button = document.getElementById('updateButton');
const headline = document.getElementById('ctaHeadline');
button.addEventListener('click', () => {
    const newText = input[0].value;
    if (newText) {
        headline.textContent = newText;
    }
});