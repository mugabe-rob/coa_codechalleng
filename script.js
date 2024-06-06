const imagesData = [
    {
        src: 'images/photos/india.png',
        alt: 'india',
        hiddenText: 'FENNEC<br />FOX',
        additionalText: 'India',
        url: 'https://www.thesprucepets.com/about-fennec-foxes-as-pets-1236778'
    },
    {
        src: 'images/photos/south1.png',
        alt: 'south-africa',
        hiddenText: 'HUMPBACK<br />WHALE',
        additionalText: 'South Africa',
        url: 'https://www.nationalgeographic.com/animals/mammals/facts/humpback-whale'
    },
    {
        src: 'images/photos/south2.png',
        alt: 'south-africa',
        hiddenText: 'COMMON BROWN<br />BABOON',
        additionalText: 'South Africa',
        url: 'https://www.nationalgeographic.com/animals/mammals/facts/baboons'
    },
    {
        src: 'images/photos/amazon.png',
        alt: 'amazon',
        hiddenText: 'SPOTTED<br />DEER',
        additionalText: 'Amazon',
        url: 'https://www.vedantu.com/animal/chital'
    }
];

const galleryElement = document.getElementById('gallery');

function createImageElement(image) {
    const imageElement = document.createElement('div');
    imageElement.className = 'image';

    const img = document.createElement('img');
    img.src = image.src;
    img.alt = image.alt;
    imageElement.appendChild(img);

    const overlay = document.createElement('div');
    overlay.className = 'overlay';

    const hiddenText = document.createElement('p');
    hiddenText.className = 'hidden-text';
    hiddenText.innerHTML = image.hiddenText;

    const additionalText = document.createElement('p');
    additionalText.className = 'additional-text';
    additionalText.textContent = image.additionalText;

    const knowMore = document.createElement('div');
    knowMore.className = 'know-more';
    knowMore.textContent = 'Know more';

    const span = document.createElement('span');
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svg.setAttribute('width', '16');
    svg.setAttribute('height', '16');
    svg.setAttribute('fill', 'currentColor');
    svg.setAttribute('class', 'bi bi-arrow-right');
    svg.setAttribute('viewBox', '0 0 16 16');

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('fill-rule', 'evenodd');
    path.setAttribute('d', 'M10.293 12.707a1 1 0 0 1 0-1.414L12.586 9H1.5a1 1 0 0 1 0-2h11.086L10.293 4.707a1 1 0 1 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0z');
    svg.appendChild(path);
    span.appendChild(svg);
    knowMore.appendChild(span);

    knowMore.addEventListener('click', () => {
        window.location.href = image.url;
    });

    overlay.appendChild(hiddenText);
    overlay.appendChild(additionalText);
    overlay.appendChild(knowMore);
    imageElement.appendChild(overlay);

    return imageElement;
}

function renderGallery() {
    galleryElement.innerHTML = '';
    imagesData.forEach(image => {
        const imageElement = createImageElement(image);
        galleryElement.appendChild(imageElement);
    });
}

window.addEventListener('resize', () => {
    const showText = window.innerWidth > 767;
    document.querySelectorAll('.hidden-text, .additional-text').forEach(el => {
        el.style.display = showText ? 'block' : 'none';
    });
});

renderGallery();
