// // Select all elements with the "fade-in" class
// const features = document.querySelectorAll('.fade-in');

// // Observer options
// const observerOptions = {
//     threshold: 0.1 // Trigger when 10% of the element is visible
// };

// // Intersection Observer callback
// const observerCallback = (entries, observer) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('active'); // Add the "active" class
//             observer.unobserve(entry.target); // Stop observing once it's visible
//         }
//     });
// };


// const observer = new IntersectionObserver(observerCallback, observerOptions);


// features.forEach(feature => {
//     observer.observe(feature);
// });



// Select all elements with the class "fade-in"
const faders = document.querySelectorAll('.fade-in');

// Observer options
const options = {
    threshold: 0.1 // Trigger when 10% of the element is visible
};

// Callback function for the observer
const fadeInOnScroll = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active'); // Add the "active" class to trigger animation
            observer.unobserve(entry.target); // Stop observing once visible
        }
    });
};

// Create the observer
const observer = new IntersectionObserver(fadeInOnScroll, options);

// Observe each fade-in element
faders.forEach(fader => {
    observer.observe(fader);
});


// Highlight active tweet while scrolling
const twitterSlider = document.querySelector('.twitter-slider');
const tweets = document.querySelectorAll('.tweet');

twitterSlider.addEventListener('scroll', () => {
    tweets.forEach(tweet => {
        const rect = tweet.getBoundingClientRect();
        const sliderRect = twitterSlider.getBoundingClientRect();
        if (rect.top >= sliderRect.top && rect.bottom <= sliderRect.bottom) {
            tweet.style.backgroundColor = '#FFEEF0'; // Highlight visible tweet
        } else {
            tweet.style.backgroundColor = 'white'; // Reset others
        }
    });
});


// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-btn"); // Select all filter buttons
    const imageItems = document.querySelectorAll(".image-item"); // Select all image items

    // Loop through each filter button
    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            // Remove the 'active' class from all buttons
            filterButtons.forEach((btn) => btn.classList.remove("active"));
            // Add the 'active' class to the clicked button
            button.classList.add("active");

            const selectedCategory = button.getAttribute("data-category"); // Get the selected category

            // Filter image items
            imageItems.forEach((item) => {
                const itemCategory = item.getAttribute("data-category"); // Get the item's category

                // Show the item if it matches the selected category or "all"
                if (selectedCategory === "all" || selectedCategory === itemCategory) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });
});



