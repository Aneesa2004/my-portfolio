document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.toggle-details-btn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const details = button.nextElementSibling;
            details.classList.toggle('hidden');

            if (details.classList.contains('hidden')) {
                button.textContent = 'Show Details';
            } else {
                button.textContent = 'Hide Details';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        let isValid = true;

        // Validate name
        const name = document.getElementById('name');
        const nameError = document.getElementById('name-error');
        if (name.value.trim() === '') {
            nameError.textContent = 'Please enter your name.';
            isValid = false;
        } else {
            nameError.textContent = '';
        }

        // Validate email
        const email = document.getElementById('email');
        const emailError = document.getElementById('email-error');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value)) {
            emailError.textContent = 'Please enter a valid email address.';
            isValid = false;
        } else {
            emailError.textContent = '';
        }

        // Validate message
        const message = document.getElementById('message');
        const messageError = document.getElementById('message-error');
        if (message.value.trim() === '') {
            messageError.textContent = 'Please enter a message.';
            isValid = false;
        } else {
            messageError.textContent = '';
        }

        if (isValid) {
            alert('Form submitted successfully!');
            form.reset(); 
        }
    });
});

// Scroll to top functionality
const scrollTopBtn = document.getElementById("scrollTopBtn");

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

  
  document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('skillsChart').getContext('2d');
    const skillsChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['HTML', 'CSS', 'JavaScript'],
            datasets: [{
                label: 'Skill Level (%)',
                data: [90, 85, 70],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});

// Dark Mode Toggle
const darkToggle = document.getElementById("darkModeToggle");

darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
// 🧩 Project Filtering
const filterButtons = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const category = button.getAttribute("data-category");

    projects.forEach(project => {
      const projectCategory = project.getAttribute("data-category");

      if (category === "all" || projectCategory === category) {
        project.style.display = "block";
      } else {
        project.style.display = "none";
      }
    });
  });
});
