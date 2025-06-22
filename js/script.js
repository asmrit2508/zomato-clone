// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Focus effect on search input
    const searchInput = document.querySelector('main input');
    
    searchInput.addEventListener('focus', () => {
        searchInput.style.boxShadow = '0 0 15px #ff6f61';
    });

    searchInput.addEventListener('blur', () => {
        searchInput.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.2)';
    });

    // Alert when clicking on "Add Restaurant"
    const addRestaurantLink = document.querySelector('nav ul li:nth-child(2) a');
    addRestaurantLink.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Coming Soon! Add your restaurant to Zomato.');
    });
});
