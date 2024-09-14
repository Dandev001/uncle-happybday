const cake = document.getElementById('birthday-cake');
const specialWishButton = document.getElementById('special-wish-button');
const starsContainer = document.getElementById('stars');

function createStars() {
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 5}s`;
        starsContainer.appendChild(star);
    }
}

createStars();

cake.addEventListener('click', () => {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#bb86fc', '#03dac6', '#cf6679']
    });
    
    cake.style.animation = 'bounce 0.5s';
    setTimeout(() => {
        cake.style.animation = '';
    }, 500);
});

specialWishButton.addEventListener('click', () => {
    specialWishButton.style.transform = 'scale(0.95)';
    setTimeout(() => {
        window.location.href = 'special-wish.html';
    }, 200);
});

// Add bounce animation
const style = document.createElement('style');
style.textContent = `
    @keyframes bounce {
        0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
        40% { transform: translateY(-20px); }
        60% { transform: translateY(-10px); }
    }
`;
document.head.appendChild(style);
