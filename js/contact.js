document.addEventListener("DOMContentLoaded", () => {
      const emailInput = document.getElementById("userEmail");
      const form = document.getElementById("contactForm");
      const savedEmailDisplay = document.getElementById("savedEmailDisplay");

      const savedEmail = localStorage.getItem("userGmail");
      if (savedEmail) {
        savedEmailDisplay.innerText = `📧 Saved Email: ${savedEmail}`;
        savedEmailDisplay.classList.add("text-success");
      }

      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = emailInput.value.trim();
        if (email.endsWith("@gmail.com")) {
          localStorage.setItem("userGmail", email);
          savedEmailDisplay.innerText = `📧 Saved Email: ${email}`;
          emailInput.value = "";
        } else {
          alert("Please enter a valid Gmail address.");
        }
      });

      const cartCount = document.getElementById("cart-count");
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      let total = 0;
      cart.forEach(item => total += item.quantity || 1);
      cartCount.innerText = total;
    });