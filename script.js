const dataCollection = [
    {
        source: 'images/photos/1.png',
        alternative: 'india',
        hiddenDescription: 'FENNEC<br />FOX',
        extraDescription: 'India',
        link: 'https://en.wikipedia.org/wiki/Fennec_fox'
    },
    {
        source: 'images/photos/2.png',
        alternative: 'south-africa',
        hiddenDescription: 'HUMPBACK<br />WHALE',
        extraDescription: 'South Africa',
        link: 'https://www.nationalgeographic.com/animals/mammals/facts/humpback-whale'
    },
    {
        source: 'images/photos/3.png',
        alternative: 'south-africa',
        hiddenDescription: 'COMMON BROWN<br />BABOON',
        extraDescription: 'South Africa',
        link: 'https://en.wikipedia.org/wiki/Chacma_baboon#:~:text=The%20chacma%20baboon%20is%20generally,do%20not%20have%20a%20mane.'
    },
    {
        source: 'images/photos/4.png',
        alternative: 'amazon',
        hiddenDescription: 'SPOTTED<br />DEER',
        extraDescription: 'Amazon',
        link: 'https://www.nathab.com/know-before-you-go/asia-the-pacific/india/wildlife-guide/spotted-deer/'
    }
];

const galleryContainer = document.getElementById('gallery');

function generateImageElement(data) {
    const wrapper = document.createElement('div');
    wrapper.className = 'image';

    const imageElement = document.createElement('img');
    imageElement.src = data.source;
    imageElement.alt = data.alternative;
    wrapper.appendChild(imageElement);

    const textOverlay = document.createElement('div');
    textOverlay.className = 'overlay';

    const hiddenParagraph = document.createElement('p');
    hiddenParagraph.className = 'hidden-text';
    hiddenParagraph.innerHTML = data.hiddenDescription;

    const extraParagraph = document.createElement('p');
    extraParagraph.className = 'additional-text';
    extraParagraph.textContent = data.extraDescription;

    const moreInfo = document.createElement('div');
   

    const spanElement = document.createElement('span');
    const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgElement.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svgElement.setAttribute('width', '16');
    svgElement.setAttribute('height', '16');
    svgElement.setAttribute('fill', 'currentColor');
    svgElement.setAttribute('class', 'bi bi-arrow-right');
    svgElement.setAttribute('viewBox', '0 0 16 16');

    const pathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathElement.setAttribute('fill-rule', 'evenodd');
    pathElement.setAttribute('d', 'M10.293 12.707a1 1 0 0 1 0-1.414L12.586 9H1.5a1 1 0 0 1 0-2h11.086L10.293 4.707a1 1 0 1 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0z');
    svgElement.appendChild(pathElement);
    spanElement.appendChild(svgElement);
    moreInfo.appendChild(spanElement);

    moreInfo.addEventListener('click', () => {
        window.location.href = data.link;
    });

    textOverlay.appendChild(hiddenParagraph);
    textOverlay.appendChild(extraParagraph);
    textOverlay.appendChild(moreInfo);
    wrapper.appendChild(textOverlay);

    return wrapper;
}

function displayGallery() {
    galleryContainer.innerHTML = '';
    dataCollection.forEach(item => {
        const imgElement = generateImageElement(item);
        galleryContainer.appendChild(imgElement);
    });
}

window.addEventListener('resize', () => {
    const displayText = window.innerWidth > 767;
    document.querySelectorAll('.hidden-text, .additional-text').forEach(el => {
        el.style.display = displayText ? 'block' : 'none';
    });
});

displayGallery();
