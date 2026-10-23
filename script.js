const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-xmark');
});

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const top = window.scrollY;

    sections.forEach(sec => {
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => link.classList.remove('active'));
            const current = document.querySelector(`.navbar a[href="#${id}"]`);
            if (current) current.classList.add('active');
        }
    });

    header.classList.toggle('sticky', top > 100);

    navbar.classList.remove('active');
    menuIcon.classList.add('fa-bars');
    menuIcon.classList.remove('fa-xmark');
});

const words = ['IT Student', 'Aspiring Multimedia Artist', '"Infamous" Memer :P'];
const typingSpan = document.querySelector('.typing-text span');

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function type() {
    const word = words[wordIndex];

    if (deleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typingSpan.textContent = word.substring(0, charIndex);

    let delay = deleting ? 60 : 120;

    if (!deleting && charIndex === word.length) {
        delay = 1500;
        deleting = true;
    } else if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        delay = 400;
    }

    setTimeout(type, delay);
}

type();

const lightbox = document.querySelector('#lightbox');
const lightboxImg = document.querySelector('#lightbox-img');

document.querySelectorAll('.work-item img').forEach(img => {
    img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightbox.classList.add('show');
    });
});

lightbox.addEventListener('click', e => {
    if (e.target !== lightboxImg) lightbox.classList.remove('show');
});

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') lightbox.classList.remove('show');
});