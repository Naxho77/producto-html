let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');

function showImage(index) {
    if (index >= items.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = items.length - 1;
    } else {
        currentIndex = index;
    }

    items.forEach((item, idx) => {
        item.style.display = (idx === currentIndex) ? 'block' : 'none';
    });
}

function changeImage(direction) {
    showImage(currentIndex + direction);
}

window.onload = () => {
    showImage(currentIndex);
};
