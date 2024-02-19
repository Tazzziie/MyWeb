// You can add JavaScript functionality here if needed
document.getElementById('contact-form').addEventListener('submit', function (event) {
    // Add logic for form submission if required
    event.preventDefault();
    alert('Form submitted!');
});

function submitReview() {
    const username = document.getElementById('username').value;
    const rating = document.getElementById('rating').value;
    const comment = document.getElementById('comment').value;

    if (username && rating && comment) {
        const reviewList = document.getElementById('reviews-list');

        const reviewDiv = document.createElement('div');
        reviewDiv.classList.add('review');
        reviewDiv.innerHTML = `
            <strong>${username}</strong> - ${rating} Stars<br>
            <p>${comment}</p>
        `;

        reviewList.appendChild(reviewDiv);

        // Clear the form after submission
        document.getElementById('review-form').reset();
    } else {
        alert('Please fill in all fields.');
    }
}