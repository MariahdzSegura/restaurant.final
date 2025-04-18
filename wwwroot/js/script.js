let currentIndex = 0;

// Function to move the carousel
function moveCarousel(direction) {
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    // Update the current index
    currentIndex += direction;

    // Ensure the index is within bounds
    if (currentIndex < 0) {
        currentIndex = totalItems - 1; // Go to the last item
    } else if (currentIndex >= totalItems) {
        currentIndex = 0; // Go back to the first item
    }

    // Move the carousel
    const offset = -currentIndex * 100; // Calculate the offset
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

// Function to go to the next step in the reservation form
function nextStep(step) {
    const currentStep = document.querySelector(`#step${step - 1}`);
    const nextStep = document.querySelector(`#step${step}`);

    // Update confirmation information
    if (step === 3) {
        document.getElementById('confirmName').textContent = document.getElementById('name').value;
        document.getElementById('confirmEmail').textContent = document.getElementById('email').value;
        document.getElementById('confirmDate').textContent = document.getElementById('date').value;
        document.getElementById('confirmTime').textContent = document.getElementById('time').value;
    }

    currentStep.style.display = 'none';
    nextStep.style.display = 'block';
}

// Function to scroll to a specific section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}