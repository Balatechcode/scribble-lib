const gsap = window.gsap;

// Predefined path styles
const ScribblePaths = {
  underline: 'M9.3,127.3c49.3-3,150.7-7.6,199.7-7.4c121.9,0.4,189.9,0.4,282.3,7.2C380.1,129.6,181.2,130.6,70,139 c82.6-2.9,254.2-1,335.9,1.3c-56,1.4-137.2-0.3-197.1,9',
  wave: 'M0,15 Q25,0 50,15 T100,15 T150,15 T200,15',
  zigzag: 'M0,15 L25,0 L50,15 L75,0 L100,15',
  scribble: 'M0,15 Q10,5 20,15 T40,15 T60,15 T80,15 T100,15'
};

// Animation effects
export const ScribbleAnimations = {
  draw: (path, options = {}) => {
    const len = path.getTotalLength();
    path.style.strokeDasharray = len;
    path.style.strokeDashoffset = len;

    gsap.fromTo(path, 
      { strokeDashoffset: len }, 
      {
        strokeDashoffset: 0,
        duration: options.duration || 1.5,
        ease: options.ease || 'power2.out',
        repeat: options.repeat ? -1 : 0,
        repeatDelay: options.repeatDelay || 0
      }
    );
  },

  glow: (path, options = {}) => {
    path.style.filter = `drop-shadow(0 0 4px ${options.stroke || 'black'})`;
    gsap.fromTo(path, 
      { opacity: 0.5 }, 
      {
        opacity: 1,
        repeat: -1,
        yoyo: true,
        duration: options.duration || 1,
        ease: options.ease || 'sine.inOut'
      }
    );
  },

  bounce: (path, options = {}) => {
    gsap.fromTo(path, 
      { y: -5 }, 
      {
        y: 5,
        duration: options.duration || 0.6,
        repeat: -1,
        yoyo: true,
        ease: options.ease || 'bounce.out'
      }
    );
  }
};

// Main library class
export class ScribbleSVG {
  static init(selector = '[data-animation]') {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => ScribbleSVG.apply(el));
  }

  static apply(el) {
    const animation = el.dataset.animation || 'draw';
    const pathKey = el.dataset.path || 'underline';
    const stroke = el.dataset.stroke || 'black';
    const strokeWidth = el.dataset.strokeWidth || '2';
    const trigger = el.dataset.trigger || 'load';
    const offsetX = el.dataset.offsetX || '0';
    const offsetY = el.dataset.offsetY || '0';
    const repeat = el.dataset.repeat === 'true';
    const repeatDelay = parseFloat(el.dataset.repeatDelay) || 0;
    const duration = parseFloat(el.dataset.duration) || undefined;
    const ease = el.dataset.ease || undefined;

    const pathData = ScribblePaths[pathKey] || pathKey; // allow custom path d

    // Create wrapper
    const wrapper = document.createElement('span');
    wrapper.classList.add('scribble-wrapper');
    wrapper.style.position = 'relative';
    wrapper.style.display = 'inline-block';
    el.parentNode.insertBefore(wrapper, el);
    wrapper.appendChild(el);

    // Create SVG
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 500 150');
    svg.setAttribute('preserveAspectRatio', 'none');
    svg.style.position = 'absolute';
    svg.style.bottom = `${offsetY}px`;
    svg.style.left = `${offsetX}px`;
    svg.style.width = '100%';
    svg.style.height = '30px';
    svg.style.pointerEvents = 'none';
    svg.style.overflow = 'visible';

    // Create Path
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', pathData);
    path.setAttribute('stroke', stroke);
    path.setAttribute('stroke-width', strokeWidth);
    path.setAttribute('fill', 'none');

    svg.appendChild(path);
    wrapper.appendChild(svg);

    const play = () => {
      if (ScribbleAnimations[animation]) {
        ScribbleAnimations[animation](path, {
          stroke,
          strokeWidth,
          repeat,
          repeatDelay,
          duration,
          ease
        });
      }
    };

    if (trigger === 'hover') {
      wrapper.addEventListener('mouseenter', play);
    } else if (trigger === 'click') {
      wrapper.addEventListener('click', play);
    } else {
      play(); // auto on load
    }
  }
}
