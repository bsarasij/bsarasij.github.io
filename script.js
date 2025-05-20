// script.js

document.addEventListener('DOMContentLoaded', () => {
  // 1) Highlight active nav link
  document.querySelectorAll('nav a').forEach(link => {
    if (link.href === location.href) link.classList.add('active');
  });

// 2) Theme toggle + persistence
const body = document.body;
const themeToggleBtn = document.querySelector('.theme-toggle');

// 2a) On load: read stored theme (if any) and apply it
const stored = localStorage.getItem('theme');
if (stored) {
  body.dataset.theme = stored;
  // set the correct icon
  themeToggleBtn.textContent = stored === 'dark' ? '☀️' : '🌙';
}

// 2b) On click: flip theme, update icon & store choice
themeToggleBtn.addEventListener('click', () => {
  const next = body.dataset.theme === 'dark' ? 'light' : 'dark';
  body.dataset.theme = next;
  themeToggleBtn.textContent = next === 'dark' ? '☀️' : '🌙';
  localStorage.setItem('theme', next);
});




  // 3) (Optional) scroll helper for Software link
  window.scrollToSection = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  // 4) Typewriter effect
  function typeWriter(el, text, speed, cb) {
    let i = 0;
    el.textContent = '';
    const iv = setInterval(() => {
      el.textContent += text.charAt(i++);
      if (i >= text.length) {
        clearInterval(iv);
        if (cb) cb();
      }
    }, speed);
  }

  const nameEl = document.querySelector('.name');
  const affEl  = document.querySelector('.affiliation');
  if (nameEl && affEl) {
    const nameTxt = nameEl.textContent.trim();
    const affTxt  = affEl.textContent.trim();
    nameEl.textContent = '';
    affEl.textContent  = '';
    // type out the name, then the affiliation
    typeWriter(nameEl, nameTxt, 100, () => {
      setTimeout(() => typeWriter(affEl, affTxt, 80), 300);
    });
  }
});


// script.js

// Wrap in DOMContentLoaded to ensure the #cloud div is available
document.addEventListener('DOMContentLoaded', () => {
const topics = [
  ["Model Predictive Control (MPC)",            40],
  ["Control‑Relevant Modeling",                  20],
  ["Multi‑Degree‑of‑Freedom MPC",                20],
  ["Hybrid MPC",     			       25],
  ["Kalman‑Filtering",                    30],
  ["Data‑Driven Estimation & Control",           20],
  ["System Identification",                      35],
  ["Input Signal Design",                    30],
  ["Neural‑Networks",			         20],
  ["Multivariable Control",                      20],
  ["Sustainability",		                 15],
  ["Human Behavior",				  25],
  ["Robust Control",                             15],
  ["Observer Design",                            15],
  ["Nonlinear Control",                          15],
  ["Optimal Control",                            15],
["Internal Model Control", 		     20],
["Epidemic Control", 		     20],
["Nonparametric Estimation", 		     20],
["Local Polynomial Modeling", 		     20],
["Linear Systems Theory", 		     30],
["Frequency Domain Analysis", 		     20],
["Sampled-Data Closed-Loop System", 		     20],


];




  const container = document.getElementById('cloud');
  WordCloud(container, {
    list: topics,
    gridSize: Math.round(16 * container.offsetWidth / 1024),
    weightFactor: (size) => size * container.offsetWidth / 1024,
    fontFamily: 'Helvetica, sans-serif',
    color: 'random-dark',
    rotateRatio: 0,
    backgroundColor: '#f0f0f0',
    click: (item) => {
      if (item) {
        window.location.href = `/publications?topic=${encodeURIComponent(item[0])}`;
      }
    }
  });

  // Regenerate on resize for responsiveness
  window.addEventListener('resize', () => {
    WordCloud(container, null);
  });
});


window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;
  const cloud = document.getElementById("cloud");
  if (cloud) {
    cloud.style.transform = `translateY(${scrolled * 0.4}px)`;
  }
});

const isResearchPage = document.body.classList.contains('research-page');
if (isResearchPage) {
  const nav = document.getElementById('mainNav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });
}


const projects = [
  {
    imgSrc: 'assets/cl_results.gif',
    imgAlt: 'Three-Degree-of-Freedom Kalman Filter MPC',
    repoUrl: 'https://github.com/bsarasij/Three-Degree-of-Freedom-MPC',
    description: 'A robust MPC framework that allows independent tuning of parameters associated with Setpoint Tracking, Measured Disturbance Rejection, and Unmeasured Disturbance Rejection.',
    papers: [
      { title: '3DoF-KF MIMO MoD MPC I&ECR 2025', url: 'assets/MoDMPC_InECR.pdf' },
      { title: '3DoF-KF MIMO MoD MPC SysID 2024', url: 'assets/MoDMPC_SYSID24.pdf' },
      { title: '3DoF-KF HMPC CEP 2024', url: 'assets/3DoF_KF_HMPC_CEP.pdf' }
    ],
    languages: ['MATLAB | ', 'C++ | '],
    libraries: ['Eigen | ', 'CPLEX']
  },
  {
    imgSrc: 'assets/cr_spec_gif.gif',
    imgAlt: 'Control-Relevant Input Signal Design for Integrating Dynamics',
    repoUrl: 'https://github.com/bsarasij/Control-Relevant-Input-Signal-Design',
    description: 'An input signal power-spectrum shaping guideline for data-driven modeling of extremely slow systems, which enables significantly faster closed-loop performance.',
    papers: [
      { title: 'C-R Signal SysID 2024', url: 'assets/CR_SYSID24.pdf' }
    ],
    languages: ['MATLAB'],
    libraries: ['']
  },
{
    imgSrc: 'assets/spsa_algorithm_trails.gif',
    imgAlt: 'DSPSA-based modeling of Human Behavior',
    repoUrl: 'https://github.com/bsarasij/Discrete-Stochastic-Search-For-Behavioral-Intervention',
    description: 'A Discrete Simultaneous Perturbation Stochastic Approximation search algorithm for feature selection and modeling of Physical Activity',
    papers: [
      { title: 'DSPSA JPC 2024', url: 'assets/DSPSA_GA_JPC.pdf' }
    ],
    languages: ['Python | ', 'MATLAB | '],
    libraries: ['NumPy | ', 'Pandas | ', 'Scikit-learn']
  },
{
    imgSrc: 'assets/mod_reg.gif',
    imgAlt: 'Model-on-Demand Estimation',
    repoUrl: 'https://github.com/bsarasij/Model-on-Demand-Estimation',
    description: 'A Data-Driven Local Polynomial modeling approach with Adaptive Bandwidth parameter for highly Nonlinear Systems.',
    papers: [
      { title: '3DoF-KF MIMO MoD MPC I&ECR 2025', url: 'assets/MoDMPC_InECR.pdf' },
      { title: '3DoF-KF MIMO MoD MPC SysID 2024', url: 'assets/MoDMPC_SYSID24.pdf' },
      { title: 'MoD SSA SysID 2024', url: 'assets/MoDSSA_SYSID24.pdf' },
      { title: '3DoF-KF HMPC CEP 2024', url: 'assets/3DoF_KF_HMPC_CEP.pdf' }
    ],
    languages: ['MATLAB | ', 'C++ | '],
    libraries: ['Eigen | ', 'CPLEX']
  },
{
    imgSrc: 'assets/hmpc.png',
    imgAlt: '3DoF-KF Hybrid Model Predictive Control Framework',
    repoUrl: 'https://github.com/bsarasij/Hybrid-MPC',
    description: 'A Robust MPC framework for dynamic systems involving categorical decisions.',
    papers: [
      { title: '3DoF-KF HMPC ACC 2025', url: 'assets/HMPC_ACC_2025.pdf' },
      { title: '3DoF-KF HMPC CEP 2024', url: 'assets/3DoF_KF_HMPC_CEP.pdf' }
	
    ],
    languages: ['Python | ', 'MATLAB | ', 'MongoDB | '],
    libraries: ['CPLEX | ', 'Pandas']
  },
];







document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.projects-section');
  const tmpl      = document.getElementById('project-template');

  projects.forEach(proj => {
    const clone = document.importNode(tmpl.content, true);

    // fill in image
    const img = clone.querySelector('.project-thumb');
    img.src   = proj.imgSrc;
    img.alt   = proj.imgAlt;

    // fill in repo link & title
    const link = clone.querySelector('.repo-link');
    link.href  = proj.repoUrl;
    link.textContent = proj.imgAlt;

    // fill in Code button
    const codeBtn = clone.querySelector('.btn-code');
    codeBtn.href = proj.repoUrl;

    // build the Papers list
    const menu = clone.querySelector('.dropdown-menu');
    proj.papers.forEach(p => {
      const li = document.createElement('li');
      li.innerHTML = `<a href="${p.url}" target="_blank">${p.title}</a>`;
      menu.appendChild(li);
    });
// fill in tech badges
const techDiv = clone.querySelector('.project-tech');

// first languages
if (proj.languages?.length) {
  proj.languages.forEach(lang => {
    const span = document.createElement('span');
    span.classList.add('tech-badge', 'lang-badge');
    span.textContent = lang;
    techDiv.appendChild(span);
  });
}

// then libraries
if (proj.libraries?.length) {
  proj.libraries.forEach(lib => {
    const span = document.createElement('span');
    span.classList.add('tech-badge', 'lib-badge');
    span.textContent = lib;
    techDiv.appendChild(span);
  });
}
const desc = clone.querySelector('.project-desc');
desc.textContent = proj.description;

    container.appendChild(clone);
  });
});

// ——————————————
// Dropdown: toggle & close (delegated)
// ——————————————
document.addEventListener('click', function(event) {
  const toggle = event.target.closest('.dropdown-toggle');

  if (toggle) {
    // clicked a “Papers ▾” button
    event.preventDefault();
    event.stopPropagation();
    toggle.closest('.dropdown').classList.toggle('open');
  }
  else if (!event.target.closest('.dropdown')) {
    // clicked outside any dropdown → close them all
    document.querySelectorAll('.dropdown.open')
            .forEach(dd => dd.classList.remove('open'));
  }
});

