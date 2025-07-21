// Loading animation 
window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  preloader.classList.add("hidden");
});

//// Navbar Flexible 
function openSidebar() {
  document.getElementById('sidebar').classList.remove('translate-x-full');
}
function closeSidebar() {
  document.getElementById('sidebar').classList.add('translate-x-full');
}

document.addEventListener("DOMContentLoaded", function () {
  const whatsappBtn = document.getElementById("whatsappButton");
  const hero = document.getElementById("header"); // assuming your hero/header section has this ID

  let scrollTimeout;

  window.addEventListener("scroll", () => {
    // Optional: Only show after scrolling past header
    const scrolledPastHero = window.scrollY > (hero?.offsetHeight || 100);

    if (scrolledPastHero) {
      whatsappBtn.classList.remove("opacity-0");
    } else {
      whatsappBtn.classList.add("opacity-0");
    }

    // Fade in only when scrolling stops
    whatsappBtn.style.opacity = "0";
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      whatsappBtn.style.opacity = "1";
    }, 300);
  });
});


//   get in touch 
const modal = document.getElementById('getInTouchModal');
const openBtns = document.querySelectorAll('.openModalBtn');

openBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    modal.classList.remove('hidden');
  });
});

function closeModal() {
  modal.classList.add('hidden');
}


// Email
// Form 
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const phoneInput = document.getElementById("phone");
  const codeSelect = document.getElementById("countryCode");
  const hiddenPhone = document.getElementById("phoneFull");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");
  const phoneErro = document.getElementById("phoneError");

    // Reset errors
    nameError.classList.add("hidden");
    emailError.classList.add("hidden");
    messageError.classList.add("hidden");
    phoneErro.classList.add("hidden");


    let isValid = true;

    if (name.value.trim() === "") {
      nameError.classList.remove("hidden");
      isValid = false;
    }

    if (email.value.trim() === "") {
      emailError.classList.remove("hidden");
      isValid = false;
    }

    if (message.value.trim() === "") {
      messageError.classList.remove("hidden");
      isValid = false;
    }
    if (phoneInput.value.trim() === "") {
      phoneErro.classList.remove("hidden");
      isValid = false;
    }
    

    if (!isValid) return;

    // Show loader
    document.getElementById("formLoader").classList.remove("hidden");

    // Prepare form data
    const formData = {
      name: name.value.trim(),
      email: email.value.trim(),
      message: message.value.trim(),
      phone: `${codeSelect.value} ${phoneInput.value.trim()}`
    };

    try {
      const response = await fetch("https://formsubmit.co/ajax/info.infinityglobaltech@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      
        if (response.ok) {
          form.reset();
          window.location.href = "./thank-you.html";
      } else {
        alert("Something went wrong. Please try again later.");
      }
    } catch (error) {
      alert("Error submitting form.");
      console.error(error);
    } finally {
      document.getElementById("formLoader").classList.add("hidden");
    }
  });
});
