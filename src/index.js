import './scss/style.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Rellax from 'rellax';

// AOS.init();
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: true, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 299, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 270, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1200, // values from 0 to 3000, with step 50ms
  easing: 'ease-in-out', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});

new Rellax('.rellax', {
  speed: -2,
  center: false,
  wrapper: null,
  round: true,
  vertical: true,
  horizontal: false,
});

function projectCard() {
  const angle = 10;
  const card = document.querySelector('.project-card');
  card.addEventListener('mouseout', e => {
    card.style.transform = `perspective(400px) rotateX(0deg) rotateY(0deg)`;
  });

  card.addEventListener('mousemove', e => {
    const w = card.clientWidth;
    const h = card.clientHeight;
    const y = ((e.offsetX - w * 0.5) / w) * angle;
    const x = ((1 - (e.offsetY - h * 0.5)) / h) * angle;
    card.style.transform = `perspective(400px) rotateX(${x}deg) rotateY(${y}deg)`;
  });
}

projectCard();
