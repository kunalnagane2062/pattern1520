/* ============================================
   VALENTINE QUESTION PAGE - PLAYFUL INTERACTIONS
   ============================================ */

let noClickCount = 0;
let yesButtonSize = 18; // Initial font size

const funnyNoTexts = [
    "No",
    "Are you sure? 🥺",
    "Really? 💔",
    "Think again! 😢",
    "Please? 🥹",
    "Don't break my heart! 💔",
    "Give me a chance! 😭",
    "Pretty please? 🙏",
    "I'll be sad... 😞",
    "You're breaking my heart! 💔",
    "Last chance! 😢",
    "Okay fine... but look at the Yes button! 👀"
];

const hintTexts = [
    "",
    "Hmm... interesting choice 🤔",
    "The 'Yes' button is looking pretty good right now... ✨",
    "I see you're playing hard to get 😏",
    "The 'Yes' button is getting bigger... notice? 👀",
    "Come on, you know you want to click 'Yes' 💕",
    "I'll wait... the 'Yes' button will keep growing 😌",
    "At this rate, 'Yes' will be the only option! 😂",
    "You can't resist forever! 💖",
    "The 'Yes' button is taking over! 😄",
    "Just give in already! 💝",
    "Look how big 'Yes' is now! It's destiny! ✨"
];

// Handle "No" button hover - it moves away!
function handleNoHover() {
    const noBtn = document.getElementById('noBtn');
    const container = document.querySelector('.question-card');
    
    // Get container dimensions
    const containerRect = container.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();
    
    // Calculate random position within container
    const maxX = containerRect.width - btnRect.width - 40;
    const maxY = containerRect.height - btnRect.height - 40;
    
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    // Move the button
    noBtn.style.position = 'absolute';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
    noBtn.style.transition = 'all 0.3s ease';
    
    // Make Yes button bigger
    yesButtonSize += 3;
    document.getElementById('yesBtn').style.fontSize = yesButtonSize + 'px';
    document.getElementById('yesBtn').style.padding = (15 + noClickCount * 2) + 'px ' + (40 + noClickCount * 4) + 'px';
}

// Mobile touch support - move button on touch start
document.addEventListener('DOMContentLoaded', () => {
    const noBtn = document.getElementById('noBtn');
    if (noBtn) {
        // Add touchstart event for mobile
        noBtn.addEventListener('touchstart', (e) => {
            e.preventDefault(); // Prevent default touch behavior
            handleNoHover();
        });
    }
});

// Handle "No" button click - change text and give hints
function handleNoClick() {
    noClickCount++;
    
    const noBtnText = document.getElementById('noBtnText');
    const hintText = document.getElementById('hintText');
    const noBtn = document.getElementById('noBtn');
    
    // Change the "No" button text
    if (noClickCount < funnyNoTexts.length) {
        noBtnText.textContent = funnyNoTexts[noClickCount];
    }
    
    // Show hint text
    if (noClickCount < hintTexts.length) {
        hintText.textContent = hintTexts[noClickCount];
        hintText.style.animation = 'fadeIn 0.5s ease-out';
    }
    
    // Make Yes button even bigger
    yesButtonSize += 5;
    document.getElementById('yesBtn').style.fontSize = yesButtonSize + 'px';
    document.getElementById('yesBtn').style.padding = (15 + noClickCount * 3) + 'px ' + (40 + noClickCount * 5) + 'px';
    
    // Add shake animation to Yes button
    document.getElementById('yesBtn').style.animation = 'shake 0.5s ease';
    
    // After many clicks, make No button tiny and Yes button huge
    if (noClickCount > 8) {
        noBtn.style.fontSize = '10px';
        noBtn.style.padding = '5px 10px';
        noBtn.style.opacity = '0.5';
    }
    
    // After too many clicks, just disable No button
    if (noClickCount >= 12) {
        noBtn.style.display = 'none';
        hintText.textContent = "Okay, I removed the 'No' button. Now you have no choice! 😂💕";
        hintText.style.fontSize = '18px';
        hintText.style.color = 'var(--primary-pink)';
    }
}

// Handle "Yes" button click - CELEBRATION!
function handleYes() {
    const overlay = document.getElementById('celebrationOverlay');
    overlay.style.display = 'flex';
    
    // Create heart explosion effect
    createHeartExplosion();
    
    // Play celebration animation
    setTimeout(() => {
        overlay.querySelector('.celebration-content').style.animation = 'scaleIn 0.6s ease-out';
    }, 100);
}

// Create heart explosion effect
function createHeartExplosion() {
    const hearts = ['💗', '💕', '💖', '💝', '💓', '💞', '💘', '❤️', '💙', '💜', '💛', '🧡'];
    
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.className = 'explosion-heart';
            heart.style.left = '50%';
            heart.style.top = '50%';
            heart.style.position = 'fixed';
            heart.style.fontSize = (Math.random() * 30 + 20) + 'px';
            heart.style.zIndex = '10000';
            heart.style.pointerEvents = 'none';
            
            const angle = (Math.random() * 360) * (Math.PI / 180);
            const velocity = Math.random() * 300 + 200;
            const tx = Math.cos(angle) * velocity;
            const ty = Math.sin(angle) * velocity;
            
            heart.style.animation = `explode 1.5s ease-out forwards`;
            heart.style.setProperty('--tx', tx + 'px');
            heart.style.setProperty('--ty', ty + 'px');
            
            document.body.appendChild(heart);
            
            setTimeout(() => heart.remove(), 1500);
        }, i * 50);
    }
}

// Add shake animation for Yes button
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px) rotate(-5deg); }
        75% { transform: translateX(10px) rotate(5deg); }
    }
    
    @keyframes explode {
        0% {
            transform: translate(0, 0) scale(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translate(var(--tx), var(--ty)) scale(1) rotate(720deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
