document.addEventListener('DOMContentLoaded', () => {
    // --- Internationalization (i18n) ---
    const translations = {
        es: {
            pageTitle: "Julen Cruz Gómez - Futuro Ingeniero de Software",
            navHome: "Inicio",
            navProjects: "Proyectos",
            navSkills: "Habilidades",
            navTrajectory: "Trayectoria",
            navContact: "Contacto",
            heroGreeting: "Hola, soy <span>Julen Cruz Gómez</span>",
            heroSubtitle: "Futuro Ingeniero de Software",
            heroDescription: "Desarrollador con ganas de crear experiencias digitales excepcionales con tecnologías modernas y buenas prácticas de desarrollo.",
            heroPortfolio: "Ver Portfolio",
            heroContact: "Contactar",
            projectsTitle: "Proyectos Destacados",
            projectsSubtitle: "Una selección de mis trabajos más recientes que demuestran mis habilidades y experiencia en desarrollo de software.",
            project1Title: "MuscleApp",
            project1Description: "Aplicación móvil para seguimiento de rutinas deportivas creadas por usuarios con sincronización en la nube y análisis de progreso.",
            project2Title: "Queens - Testing",
            project2Description: "Se desarrolló un juego tipo Queens (o Star Battle) aplicando TDD, con pruebas unitarias de caja blanca y negra. El proyecto sigue el patrón MVC y utiliza mocks para aislar componentes durante el testeo.",
            project3Title: "TodoRelojes",
            project3Description: "Proyecto de ecommerce sencillo para practicar PHP, JavaScript, HTML, CSS y jQuery, implementando el patrón MVC y usando cookies y AJAX para gestionar el carrito y mejorar la interacción.",
            project4Title: "Ikea web - Testing",
            project4Description: "Proyecto de testing de la web de IKEA utilizando Selenium, Cucumber con Gherkin y Java para automatizar pruebas de interfaz.",
            project5Title: "Etiquetador IA - KNN",
            project5Description: "Sistema de etiquetado automático de prendas usando inteligencia artificial. Se empleó KNN para identificar el tipo de ropa y Kmeans para el color. Se entrenó el modelo para clasificar el tipo de ropa a partir de imágenes.",
            project6Title: "Infraestructura de Red con Docker",
            project6Description: "Diseño y despliegue de una red simulada con Docker Compose: balanceador Nginx, múltiples servidores Apache/PHP, base de datos PostgreSQL y PGAdmin, todo conectado por redes virtuales y volúmenes, simulando un entorno escalable y profesional.",
            viewDemo: "Ver Demo",
            viewCode: "Código",
            allProjects: "Ver todos mis proyectos en GitHub",
            skillsTitle: "Mis Habilidades",
            skillsSubtitle: "Tecnologías y herramientas que domino y utilizo en mis proyectos.",
            skillsLanguages: "Lenguajes de Programación",
            skillsFrontend: "Frontend",
            skillsBackend: "Backend y Bases de Datos",
            skillsTesting: "QA y Testing", 
            skillsTools: "Herramientas", 
            trajectoryTitle: "Mi Trayectoria",
            trajectorySubtitle: "Mi camino en la informática y formación académica.",
            trajectory1Date: "2022 - 2026",
            trajectory1Title: "Grado en Ingeniería Informática",
            trajectory1University: "Universitat Autònoma de Barcelona (UAB)",
            trajectory1Description: "Actualmente estoy cursando cuarto curso de Ingeniería Informática en la Universidad Autónoma de Barcelona. Realicé la mención de Ingeniería de Software. Enfocado en desarrollar software mantenible y de calidad y la cooperación entre software y hardware.",
            contactTitle: "¿Trabajamos Juntos?",
            contactSubtitle: "Estoy siempre abierto a nuevos proyectos y oportunidades interesantes. ¡No dudes en contactarme!",
            contactEmail: "Email",
            contactLinkedIn: "LinkedIn",
            contactGitHub: "GitHub",
            contactWhatsApp: "WhatsApp",
            sendMessage: "Enviar Mensaje",
            footerCopyright: "© 2025 Julen Cruz Gómez. Desarrollado con ❤️."
        },
        en: {
            pageTitle: "Julen Cruz Gómez - Future Software Engineer",
            navHome: "Home",
            navProjects: "Projects",
            navSkills: "Skills",
            navTrajectory: "Trajectory",
            navContact: "Contact",
            heroGreeting: "Hi, I'm <span>Julen Cruz Gómez</span>",
            heroSubtitle: "Future Software Engineer",
            heroDescription: "Developer eager to create exceptional digital experiences with modern technologies and good development practices.",
            heroPortfolio: "View Portfolio",
            heroContact: "Contact Me",
            projectsTitle: "My Projects",
            projectsSubtitle: "A selection of my most recent work showcasing my skills and experience in software development.",
            project1Title: "MuscleApp",
            project1Description: "Mobile application for tracking sports user-created routines with cloud synchronization and progress analysis.",
            project2Title: "Queens - Testing",
            project2Description: "A Queens-style game (Star Battle) was developed using TDD, with unit tests following both white-box and black-box approaches. The project follows the MVC pattern and uses mocks to isolate components during testing.",
            project3Title: "TodoRelojes",
            project3Description: "Simple e-commerce project to practice PHP, JavaScript, HTML, CSS, and jQuery. It implements the MVC pattern and uses cookies and AJAX to manage the cart and enhance interactivity.",
            project4Title: "Ikea web - Testing",
            project4Description: "Web testing project for IKEA using Selenium, Cucumber with Gherkin, and Java to automate UI tests.",
            project5Title: "AI Labeler - KNN",
            project5Description: "Automatic clothing labeling system using artificial intelligence. KNN was used to identify clothing type and Kmeans for color. The model was trained to classify clothing types from images.",
            project6Title: "Infrastructure of the Internet with Docker",
            project6Description: "Design and deployment of a simulated network using Docker Compose: Nginx load balancer, multiple Apache/PHP web servers, PostgreSQL database, and PGAdmin, all connected by virtual networks and volumes, simulating a scalable and professional environment.",
            viewDemo: "View Demo",
            viewCode: "Code",
            allProjects: "View all my projects on GitHub",
            skillsTitle: "My Skills",
            skillsSubtitle: "Technologies and tools I master and use in my projects.",
            skillsLanguages: "Programming Languages",
            skillsFrontend: "Frontend",
            skillsBackend: "Backend and Databases",
            skillsTesting: "QA and Testing", 
            skillsTools: "Tools", 
            trajectoryTitle: "My Trajectory",
            trajectorySubtitle: "My path in computer science and academic training.",
            trajectory1Date: "2022 - 2026",
            trajectory1Title: "Degree in Computer Engineering",
            trajectory1University: "Universitat Autònoma de Barcelona (UAB)",
            trajectory1Description: "Currently studying the fourth year of Computer Engineering at the Autonomous University of Barcelona. I made the mention of Software Engineering. Focused on developing maintainable and quality software and the cooperation between software and hardware.",
            contactTitle: "Let's Work Together?",
            contactSubtitle: "I'm always open to new projects and interesting opportunities. Don't hesitate to contact me!",
            contactEmail: "Email",
            contactLinkedIn: "LinkedIn",
            contactGitHub: "GitHub",
            contactWhatsApp: "WhatsApp",
            sendMessage: "Send Message",
            footerCopyright: "© 2025 Julen Cruz Gómez. Developed with ❤️."
        }
    };

    const langIndicator = document.getElementById('lang-indicator');
    const langEsButton = document.getElementById('lang-es');
    const langEnButton = document.getElementById('lang-en');

    const setLanguage = (lang) => {
        document.documentElement.lang = lang;
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                if (key === 'heroGreeting') {
                    element.innerHTML = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });

        // Update active class for buttons
        langEsButton.classList.remove('active');
        langEnButton.classList.remove('active');
        if (lang === 'es') {
            langEsButton.classList.add('active');
            langIndicator.style.transform = 'translateX(0)';
        } else {
            langEnButton.classList.add('active');
            langIndicator.style.transform = 'translateX(100%)';
        }

        localStorage.setItem('portfolioLang', lang);
    };

    // Initialize language
    const userLang = navigator.language.startsWith('es') ? 'es' : 'en';
    const storedLang = localStorage.getItem('portfolioLang');
    setLanguage(storedLang || userLang);

    // Language switcher event listeners
    langEsButton.addEventListener('click', () => setLanguage('es'));
    langEnButton.addEventListener('click', () => setLanguage('en'));

    // --- Theme Toggle ---
    const themeToggleButton = document.getElementById('theme-toggle');
    const themeIcon = themeToggleButton.querySelector('i');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    const applyTheme = (isDarkMode) => {
        if (isDarkMode) {
            document.body.classList.add('dark-theme');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        } else {
            document.body.classList.remove('dark-theme');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
        localStorage.setItem('themePreference', isDarkMode ? 'dark' : 'light');
    };

    // Check for stored theme preference or system preference on load
    const storedTheme = localStorage.getItem('themePreference');
    if (storedTheme) {
        applyTheme(storedTheme === 'dark');
    } else {
        applyTheme(systemPrefersDark.matches);
    }

    // Listen for changes in system theme preference
    systemPrefersDark.addEventListener('change', (e) => {
        if (!localStorage.getItem('themePreference')) {
            applyTheme(e.matches);
        }
    });

    // Manual theme toggle
    themeToggleButton.addEventListener('click', () => {
        const currentThemeIsDark = document.body.classList.contains('dark-theme');
        applyTheme(!currentThemeIsDark);
    });

    // --- Smooth scrolling for navigation links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const navbarHeight = document.getElementById('navbar').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - navbarHeight - 20;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Intersection Observer for animations on scroll ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Element is 15% in view
    };

    const sections = document.querySelectorAll('.section');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const section = entry.target;
                const sectionTitle = section.querySelector('.section-title');
                const sectionSubtitle = section.querySelector('.section-subtitle');

                if (sectionTitle) sectionTitle.classList.add('animate-in');
                if (sectionSubtitle) sectionSubtitle.classList.add('animate-in');

                section.querySelectorAll('.project-card, .skill-category-card, .timeline-item, .contact-item').forEach((item, index) => {
                    item.style.setProperty('--item-index', index);
                    item.classList.add('animate-in');
                });
                observer.unobserve(section);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // --- Initial check for hero section animation ---
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.querySelectorAll('h1, .hero-subtitle, .hero-description, .hero-buttons, .hero-avatar-wrapper').forEach((el, index) => {
            el.style.animationDelay = `${0.2 + index * 0.2}s`;
            if (el.classList.contains('hero-avatar-wrapper')) {
                el.style.animation = 'bounceIn 1s ease-out forwards';
            } else {
                el.style.animation = 'fadeIn 1s ease-out forwards';
            }
            // `el.style.opacity = '0';` fue eliminado intencionadamente,
            // ya que las animaciones bounceIn y fadeIn manejan la opacidad.
        });
    }

    // --- Language Indicator Initial Position ---
    const initializeLanguageIndicator = () => {
        if (langEsButton.classList.contains('active')) {
            langIndicator.style.transform = 'translateX(0)';
        } else if (langEnButton.classList.contains('active')) {
            langIndicator.style.transform = 'translateX(100%)';
        }
    };
    initializeLanguageIndicator();
    window.addEventListener('resize', initializeLanguageIndicator);


    // --- Menú Hamburguesa Lógica ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    // Cerrar el menú al hacer clic en un enlace
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });

    // Cerrar el menú si se hace clic fuera
    document.addEventListener('click', (event) => {
        if (!navMenu.contains(event.target) && !menuToggle.contains(event.target) && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    const whatsappLink = document.querySelector('.whatsapp-link');
function updateWhatsappHref() {
    const lang = document.documentElement.lang;
    let message = lang === 'es'
        ? '¡Hola Julen! Me gustaría contactar contigo desde tu portfolio web.'
        : 'Hi Julen! I would like to contact you from your portfolio website.';
    if (whatsappLink) {
        whatsappLink.href = `https://wa.me/34611421087?text=${encodeURIComponent(message)}`;
    }
}
updateWhatsappHref();
[langEsButton, langEnButton].forEach(btn => {
    btn.addEventListener('click', updateWhatsappHref);
});

});

// --- Fondo de nodos animados en el hero ---
(function() {
  const canvas = document.getElementById('hero-nodes-bg');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width, height;
  let nodes = [];
  const NODE_COUNT = 28;
  const NODE_COLOR = '#007bff';
  const LINE_COLOR = 'rgba(0,123,255,0.18)';
  const NODE_RADIUS = 3.5;
  const MAX_DIST = 120;
  const MAGNET_RADIUS = 90;
  let mouse = { x: null, y: null };

  function resize() {
    width = canvas.offsetWidth = canvas.parentElement.offsetWidth;
    height = canvas.offsetHeight = canvas.parentElement.offsetHeight;
    canvas.width = width;
    canvas.height = height;
  }

  function randomNode() {
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
    };
  }

  function initNodes() {
    nodes = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      nodes.push(randomNode());
    }
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    // Líneas entre nodos
    for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MAX_DIST) {
            ctx.strokeStyle = LINE_COLOR;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
        }
        }
    }

    // Línea del nodo al ratón si está cerca
    if (mouse.x !== null && mouse.y !== null) {
        for (let node of nodes) {
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MAGNET_RADIUS) {
            ctx.strokeStyle = 'rgba(0,123,255,0.35)';
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
        }
        }
    }

    // Dibuja los nodos
    for (let node of nodes) {
        ctx.beginPath();
        ctx.arc(node.x, node.y, NODE_RADIUS, 0, 2 * Math.PI);
        ctx.fillStyle = NODE_COLOR;
        ctx.shadowColor = NODE_COLOR;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
    }

    // Dibuja la pelotita azul que sigue al ratón
    if (mouse.x !== null && mouse.y !== null) {
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, NODE_RADIUS * 1.5, 0, 2 * Math.PI);
        ctx.fillStyle = NODE_COLOR;
        ctx.shadowColor = NODE_COLOR;
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.shadowBlur = 0;
    }
    }

  function update() {
    for (let node of nodes) {
        // Movimiento normal
        node.x += node.vx;
        node.y += node.vy;

        // Rebote en los bordes
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;
        node.x = Math.max(0, Math.min(width, node.x));
        node.y = Math.max(0, Math.min(height, node.y));
        }
    }

  function animate() {
    update();
    draw();
    requestAnimationFrame(animate);
  }

  canvas.addEventListener('mousemove', function(e) {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });
  canvas.addEventListener('mouseleave', function() {
    mouse.x = null;
    mouse.y = null;
  });

  window.addEventListener('resize', () => {
    resize();
    initNodes();
  });

  // Inicialización
  setTimeout(() => {
    resize();
    initNodes();
    animate();
  }, 100);
})();