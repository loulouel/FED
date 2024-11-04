console.log("Hi")

let itemCount = 0; // Initialize item count

document.getElementById('addToCart').addEventListener('click', function () {
    itemCount++; // Increase item count
    updateCartCount(); // Update cart count display
    animateCart(); // Trigger animation
});

function updateCartCount() {
    document.getElementById('cart-count').textContent = itemCount; // Update the text in cart count
}

function animateCart() {
    const cartCountElement = document.getElementById('cart-count');
    cartCountElement.classList.add('animate'); // Add animation class

    // Remove animation class after animation ends
    setTimeout(() => {
        cartCountElement.classList.remove('animate');
    }, 500); // Match the duration of the animation
}

// Selecting the hamburger button, sidebar, and close button 
var hamburgerButton = document.getElementById("hamburger");
var sidebar = document.getElementById("sidebar");
var closeBtn = document.getElementById("close-btn");  // Corrected with quotes

// Event listener for opening the sidebar when clicking the hamburger menu
hamburgerButton.onclick = function () {
    if (sidebar.classList.contains("active")) {
        sidebar.classList.remove("active");  // Close the sidebar
        hamburgerButton.setAttribute('aria-expanded', "false");
    } else {
        sidebar.classList.add("active");  // Open the sidebar
        hamburgerButton.setAttribute('aria-expanded', "true");
    }
};

// Event listener for the close button (x) in the sidebar 
closeBtn.onclick = function () {
    sidebar.classList.remove("active");  // Close the sidebar
    hamburgerButton.setAttribute('aria-expanded', "false");
};


// with help from chat gpt. Prompt: how to make a carrousel that at the end in jumps back to the beginning//
const carousel = document.querySelector('.carousel');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentIndex = 0;

// Get all the carousel items
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

// Event listener for previous button
prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalItems - 1; // Loop to the last item if at the beginning
    }
    updateCarousel();
});

// Event listener for next button
nextBtn.addEventListener('click', () => {
    if (currentIndex < totalItems - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Loop to the first item if at the end
    }
    updateCarousel();
});

// Function to update the position of the carousel
function updateCarousel() {
    const offset = -currentIndex * 100; // Calculate the offset to move the carousel
    carousel.style.transform = `translateX(${offset}%)`;
}





// shop page //

// Asked Chat gpt how to do this with the prompt: How do I make it so that when you fill in your name in the text box, it automatically updates elsewhere in the text?//

// Function to update the name in the personalized section // //gevraagd aan chat GPT. Prompt: //
function updateName() {
    const nameInput = document.getElementById('name-input').value.trim().toUpperCase();
    const namePlaceholder = document.getElementById('name-placeholder');

    // Update the placeholder with the user's input or default to 'YOUR NAME' if empty
    if (nameInput === '') {
        namePlaceholder.textContent = 'YOUR NAME';
    } else {
        namePlaceholder.textContent = nameInput;
    }
}


//I asked ChatGPT how to create a feedback form that provides an alert if the user hasn't selected options for size, personalization, or color.//
// Also asked https://www.shecodes.io/athena#question-554678 //

const form = document.getElementById('feedbackForm');
const message = document.getElementById('message');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value;
    const feedback = document.getElementById('name').value;

    if (!name || !feedback) {
        message.textContent = 'Please fill in all fields!';
    } else {
        message.textContent = ''; // Clear the message if all fields are filled
        // Proceed with form submission or processing
        alert('Feedback submitted!'); // For demonstration
    }
});
