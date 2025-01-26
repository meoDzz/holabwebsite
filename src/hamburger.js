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
