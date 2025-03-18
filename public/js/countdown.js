document.addEventListener('DOMContentLoaded', function() {
    // Compteur décroissant
    const countdown = () => {
        const startDate = new Date('2025-01-01T00:00:00').getTime(); // Start from January 1, 2025
        const endDate = new Date('2025-01-31T23:59:59').getTime(); // End on January 31, 2025

        const updateTimer = () => {
            const now = new Date().getTime(); // Current time

            const distance = endDate - now; // Calculate remaining time
            const remainingDays = Math.floor(distance / (1000 * 60 * 60 * 24)); // Calculate remaining days
            const remainingHours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Calculate remaining hours
            const remainingMinutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)); // Calculate remaining minutes
            const remainingSeconds = Math.floor((distance % (1000 * 60)) / 1000); // Calculate remaining seconds

            document.getElementById('days').textContent = remainingDays.toString().padStart(2, '0');
            document.getElementById('hours').textContent = remainingHours.toString().padStart(2, '0');
            document.getElementById('minutes').textContent = remainingMinutes.toString().padStart(2, '0');
            document.getElementById('seconds').textContent = remainingSeconds.toString().padStart(2, '0');

            if (now > endDate) {
                document.getElementById('days').textContent = '00';
                document.getElementById('hours').textContent = '00';
                document.getElementById('minutes').textContent = '00';
                document.getElementById('seconds').textContent = '00';
                return;
            }
        };

        updateTimer();
        setInterval(updateTimer, 1000);
    };

    countdown();
});
