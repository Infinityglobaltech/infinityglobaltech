const projectsData = {
  "Logo Design": {
    projects: [
      {
        title: "Chachan Stone",
        subtitle: "Provides Positive Energy Stones & Bracelets",
        image: './Resources/portfolio/Logoes/chachan.png',
        description: "The logo features a refined lotus motif and symbolizing purity and growth."
      },
      {
        title: "PowerUp Gym",
        subtitle: "Fitness Brand",
        image: "./Resources/portfolio/Logoes/Power Gym.png",
        description: "A bold and energetic logo designed for a modern fitness brand. It uses sharp lines and a strong typeface to convey strength and motivation, resonating well with gym-goers and athletes."
      },
        {
          title: "KP",
          subtitle: "E-Commerce Wholesaler",
          image: "./Resources/portfolio/Logoes/KP.png",
          description: "A bold and modern logo designed for an e-commerce wholesaler brand. The overlapping K and P initials are styled with a vibrant gradient of sunset orange to ocean blue, symbolizing energy and trust. The shopping cart icon reinforces the brand’s identity and purpose."
        },
        {
          title: "SV",
          subtitle: "Handmade Embroidery",
          image: "./Resources/portfolio/Logoes/sv.png",
          description: "A refined logo for a handmade embroidery brand, featuring elegant initials within a golden embroidery hoop. Surrounded by colorful stitched flowers and a vertical needle, the design reflects creativity, tradition, and detailed craftsmanship."
        },
        {
          title: "Nena",
          subtitle: "Beauty & Bridal",
          image: "./Resources/portfolio/Logoes/Nena.png",
          description: "A graceful logo crafted for a beauty and bridal brand. Featuring an elegant female line illustration with flowing hair, this design captures sophistication, femininity, and timeless beauty—ideal for a premium salon or bridal service."
        },
        {
          title: "Shivansh Diagnostic Lab",
          subtitle: "Healthcare & Laboratory",
          image: "./Resources/portfolio/Logoes/shivansh.png",
          description: "A trustworthy and professional logo for a diagnostic lab. A protective hand cradles medical elements—a DNA strand, blood drop, and test tube—symbolizing advanced diagnostics, care, and precision in healthcare services."
        },
        {
          title: "Kreative Tech Partners",
          subtitle: "Technology Brand",
          image: "./Resources/portfolio/Logoes/Kp.png",
          description: "A minimalistic and refined logo that blends creativity with technology. Using the initials KTP in a modern serif style, complemented by subtle leaf accents and clean lines, it represents innovation, sustainability, and collaboration."
        },
        {
          title: "Wood Carft",
          subtitle: "Wood Business",
          image: "./Resources/portfolio/Logoes/woodcarft.png",
          description: "A character-rich logo designed for a traditional wood business. Featuring a strong lumberjack and wood-textured badge, the logo evokes rugged craftsmanship, reliability, and a deep connection to timber and carpentry work."
        }
    ]
  },

  "Business Card": {
    projects: [
      {
        title: "Cafe Bliss",
        subtitle: "Coffee Shop",
        image: "./Resources/portfolio/coffee_businesscard.png",
        description: "Designed minimalist yet elegant business cards that reflect the brand colors and identity of Cafe Bliss. The layout ensures clear contact details with visual elements like a coffee cup icon and social handles."
      }
    ]
  }
};

let currentIndex = 0;
let currentProjects = [];
let autoScrollInterval = null;

function openServiceModal(serviceName) {
  const service = projectsData[serviceName];
  if (!service) return;

  currentProjects = service.projects;
  currentIndex = 0;

  updateModalContent();
  document.getElementById("customModal").classList.remove("hidden");

  startAutoScroll(); // Start scrolling
}

function updateModalContent() {
  const project = currentProjects[currentIndex];

  const modalImage = document.getElementById("modalImage");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");

  // 🔁 Remove and re-add slide animation
  modalImage.classList.remove("animate-slide-in");
  void modalImage.offsetWidth; // ✨ Trigger reflow to restart animation
  modalImage.classList.add("animate-slide-in");

  // ✅ Update content
  modalImage.src = project.image;
  modalTitle.textContent = project.title;
  modalDescription.innerHTML = `
    <p class="font-semibold text-indigo-700 dark:text-indigo-300">${project.subtitle}</p>
    <p class="mt-2">${project.description}</p>
  `;
}


function showNext() {
  currentIndex = (currentIndex + 1) % currentProjects.length;
  updateModalContent();
}

function showPrev() {
  currentIndex = (currentIndex - 1 + currentProjects.length) % currentProjects.length;
  updateModalContent();
}

function closeClientModal() {
  document.getElementById("customModal").classList.add("hidden");
  stopAutoScroll();
}

function startAutoScroll() {
  stopAutoScroll(); // Reset
  autoScrollInterval = setInterval(showNext, 4000); // Change every 4s
}

function stopAutoScroll() {
  clearInterval(autoScrollInterval);
}
