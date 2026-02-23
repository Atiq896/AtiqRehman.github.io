// script.js for Interactive Login

// Functionality for dragging lamp pin
let lampPin = document.getElementById('lampPin');

// Mouse events
lampPin.addEventListener('mousedown', startDragging);
lampPin.addEventListener('mouseup', stopDragging);
lampPin.addEventListener('mouseleave', stopDragging);

// Touch events
lampPin.addEventListener('touchstart', startDragging);
lampPin.addEventListener('touchend', stopDragging);

let isDragging = false;

function startDragging(event) {
    isDragging = true;
    document.addEventListener('mousemove', dragLampPin);
    document.addEventListener('touchmove', dragLampPin);
}

function stopDragging() {
    isDragging = false;
    document.removeEventListener('mousemove', dragLampPin);
    document.removeEventListener('touchmove', dragLampPin);
}

function dragLampPin(event) {
    if (!isDragging) return;
    const mouseX = event.clientX || event.touches[0].clientX;
    const mouseY = event.clientY || event.touches[0].clientY;
    lampPin.style.left = mouseX + 'px';
    lampPin.style.top = mouseY + 'px';
}

// Character animations when typing password
const passwordInput = document.getElementById('password');
passwordInput.addEventListener('input', animateCharacters);

function animateCharacters() {
    const characters = passwordInput.value.split('');
    // Animation logic here (e.g., add classes to characters)
}

// Form validation
const form = document.getElementById('loginForm');
form.addEventListener('submit', validateForm);

function validateForm(event) {
    const password = passwordInput.value;
    if (password.length < 6) {
        event.preventDefault();
        alert('Password must be at least 6 characters long.');
    }
}

// Event listeners for keyboard navigation
passwordInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        form.submit();
    }
});

// Accessibility features
passwordInput.setAttribute('aria-label', 'Password Input');

// Ensure that form and lamp elements are accessible
form.setAttribute('role', 'form');
lampPin.setAttribute('role', 'slider');
