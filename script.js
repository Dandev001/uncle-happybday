const cake = document.getElementById('birthday-cake');
const message = document.getElementById('message');
const balloons = document.getElementById('balloons');

let clickCount = 0;
const messages = [
    "Happy Birthday, Uncle Zed! 🎉",
    "May your day be filled with joy! 😊",
    "Wishing you an amazing year ahead! 🌟",
    "You're the best uncle ever! 🏆",
    "Time to party! 🎈🎊"
];

cake.addEventListener('click', () => {
    clickCount++;
    
    // Trigger confetti
    confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff']
    });

    // Display message
    message.textContent = messages[clickCount % messages.length];
    message.classList.remove('show');
    void message.offsetWidth; // Trigger reflow
    message.classList.add('show');

    // Animate cake
    cake.style.animation = 'none';
    cake.offsetHeight; // Trigger reflow
    cake.style.animation = 'float 3s ease-in-out infinite, spin 0.5s ease-out';

    // Reset cake animation after spin
    setTimeout(() => {
        cake.style.animation = 'float 3s ease-in-out infinite';
    }, 500);

    // Add balloon
    addBalloon();
});

// Add spin animation
const style = document.createElement('style');
style.textContent = `
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);

// Background color animation
function animateBackground() {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9d56e', '#ff8e72'];
    let currentIndex = 0;

    setInterval(() => {
        currentIndex = (currentIndex + 1) % colors.length;
        document.body.style.background = `linear-gradient(135deg, ${colors[currentIndex]}, ${colors[(currentIndex + 1) % colors.length]})`;
    }, 5000);
}

function addBalloon() {
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');
    balloon.textContent = '🎈';
    balloon.style.left = `${Math.random() * 100}vw`;
    balloon.style.animationDuration = `${Math.random() * 5 + 5}s`;
    balloons.appendChild(balloon);

    setTimeout(() => {
        balloon.remove();
    }, 10000);
}

animateBackground();

// Initial balloons
for (let i = 0; i < 5; i++) {
    setTimeout(addBalloon, i * 1000);
}
