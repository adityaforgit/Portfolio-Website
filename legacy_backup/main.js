// ------------ LOADING SCREEN ------------
window.addEventListener('load', () => {
  const loadingScreen = document.getElementById('loading-screen');
  setTimeout(() => {
    loadingScreen.style.opacity = '0';
    setTimeout(() => {
      loadingScreen.style.display = 'none';
    }, 500);
  }, 1500);
});

// ------------ CUSTOM CURSOR ------------
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
  
  setTimeout(() => {
    cursorFollower.style.left = e.clientX + 'px';
    cursorFollower.style.top = e.clientY + 'px';
  }, 100);
});

// Add hover effects to interactive elements
const interactiveElements = document.querySelectorAll('a, button, .tab-links, .filter-btn');
interactiveElements.forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.classList.add('cursor-hover');
    cursorFollower.classList.add('cursor-hover');
  });
  
  el.addEventListener('mouseleave', () => {
    cursor.classList.remove('cursor-hover');
    cursorFollower.classList.remove('cursor-hover');
  });
});

// ------------ PARTICLES.JS BACKGROUND ------------
particlesJS('particles-js', {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: '#0ef'
    },
    shape: {
      type: 'circle'
    },
    opacity: {
      value: 0.5,
      random: false
    },
    size: {
      value: 3,
      random: true
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#0ef',
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'repulse'
      },
      onclick: {
        enable: true,
        mode: 'push'
      },
      resize: true
    }
  },
  retina_detect: true
});

// ------------ ABOUT ME TAB SWITCHING ------------
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (let tablink of tablinks) tablink.classList.remove("active-link");
  for (let tabcontent of tabcontents) tabcontent.classList.remove("active-tab");

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
  
  // Animate skill bars when skills tab is opened
  if (tabname === 'skills') {
    setTimeout(animateSkillBars, 200);
  }
}

// ------------ SKILL BARS ANIMATION ------------
function animateSkillBars() {
  const skillBars = document.querySelectorAll('.skill-progress');
  
  skillBars.forEach(bar => {
    const progress = bar.getAttribute('data-progress');
    bar.style.width = progress + '%';
  });
}

// Trigger skill bars on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && entry.target.id === 'skills') {
      animateSkillBars();
    }
  });
});

const skillsTab = document.getElementById('skills');
if (skillsTab) observer.observe(skillsTab);

// ------------ PORTFOLIO FILTER ------------
const filterBtns = document.querySelectorAll('.filter-btn');
const workItems = document.querySelectorAll('.work');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class from all buttons
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    const filter = btn.getAttribute('data-filter');
    
    workItems.forEach(item => {
      const categories = item.getAttribute('data-category');
      
      if (filter === 'all' || categories.includes(filter)) {
        item.style.display = 'block';
        setTimeout(() => {
          item.style.opacity = '1';
          item.style.transform = 'scale(1)';
        }, 10);
      } else {
        item.style.opacity = '0';
        item.style.transform = 'scale(0.8)';
        setTimeout(() => {
          item.style.display = 'none';
        }, 300);
      }
    });
  });
});

// ------------ SIDEMENU ------------
var sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}

// ------------ SCROLL TO TOP BUTTON ------------
let mybutton = document.getElementById("myBtn");

window.addEventListener("scroll", function () {
  if (document.documentElement.scrollTop > 1000) {
    mybutton.classList.add("show");
  } else {
    mybutton.classList.remove("show");
  }
});

function topFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ------------ SMOOTH IMAGE LOADING ------------
const images = document.querySelectorAll("img");
images.forEach((img) => {
  img.onload = () => img.classList.add("loaded");
});

// ------------ TYPING EFFECT IN HEADER ------------
const text = "Full stack Developer";
let i = 0;

function typingEffect() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typingEffect, 120);
  }
}
typingEffect();

// ------------ SCROLL REVEAL ------------
function reveal() {
  const reveals = document.querySelectorAll(".reveal");

  for (let r of reveals) {
    let windowHeight = window.innerHeight;
    let revealTop = r.getBoundingClientRect().top;

    if (revealTop < windowHeight - 100) r.classList.add("active");
  }
}

window.addEventListener("scroll", reveal);
reveal(); // Trigger once on load

// ------------ PARALLAX EFFECT ON SCROLL ------------
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const parallax = document.querySelector('#header');
  
  if (parallax) {
    parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});

// ------------ SERVICE CARDS HOVER EFFECT ------------
const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  });
});

// ---------------------- THEME TOGGLE ----------------------
function toggleTheme() {
    const body = document.body;
    const icon = document.getElementById("themeIcon");

    body.classList.toggle("light-theme");

    if (body.classList.contains("light-theme")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
        localStorage.setItem("theme", "light");
        
        // Update particle color for light theme
        updateParticleColor('#007bff');
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
        localStorage.setItem("theme", "dark");
        
        // Update particle color for dark theme
        updateParticleColor('#0ef');
    }
}

function updateParticleColor(color) {
  if (window.pJSDom && window.pJSDom[0]) {
    window.pJSDom[0].pJS.particles.color.value = color;
    window.pJSDom[0].pJS.particles.line_linked.color = color;
    window.pJSDom[0].fn.particlesRefresh();
  }
}

window.addEventListener("load", () => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
        document.body.classList.add("light-theme");
        document.getElementById("themeIcon").classList.remove("fa-moon");
        document.getElementById("themeIcon").classList.add("fa-sun");
        setTimeout(() => updateParticleColor('#007bff'), 100);
    }
});

// ------------ SMOOTH SCROLL FOR NAVIGATION ------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      
      // Close mobile menu if open
      closemenu();
    }
  });
});

// ------------ TEXT ANIMATION ON SCROLL ------------
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.sub-title, .services-list div, .work');
  
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight - 100;
    
    if (isVisible) {
      el.classList.add('animate-in');
    }
  });
};

window.addEventListener('scroll', animateOnScroll);
animateOnScroll();