/* ============================================
   MOMENT DATA - Customize these with your photos/videos and stories!
   ============================================ */

const moments = [
    {
        icon: "👕",
        title: "You in My Clothes",
        description: "The way you look in my oversized hoodie, so cozy and adorable... it melts my heart every single time",
        media: "images/moment1.mp4",  // Can be .jpg, .png, .mp4, .mov, etc.
        mediaType: "video", // "image" or "video"
        story: "you in my hoodie is my fav genre. tu majhi kapde ghatlela saglyat jast advta mala..",
        
    },
    {
        icon: "🍳",
        title: "Your Cooking",
        description: "The day you cooked for me... not just the food, but the love you poured into every bite. Best meal ever!",
        media: "images/moment2.mp4", // Example: video file
        mediaType: "video",
        story: "as you know ki mala kiti avdta tujhya hatcha khayla je ki khup kami milta mila..."
    },
    {
        icon: "😴",
        title: "Your Peaceful Sleep",
        description: "Watching you sleep so peacefully... those quiet moments when the world fades and it's just you, so serene",
        media: "images/moment3.jpg",
        mediaType: "image",
        story: "the moment jevha sagla jag shant asta majha....."      
    },
    {
        icon: "👀",
        title: "Your Gaze",
        description: "When you stare at me with those eyes... I feel seen, loved, and completely lost in you",
        media: "images/moment4.jpg",
        mediaType: "image",
        story: "Sampto mi ithe, directttt samptoooooooooooo, vishay endddddd....",

    },
    {
        icon: "🍽️",
        title: "You While Eating",
        description: "The cute way you eat, your expressions, your little reactions... everything about you is endlessly adorable",
        media: "images/moment5.mp4",
        mediaType: "video",
        story: "saglyat jast mi kashacha vichar kart asel tar te mhanje tula khayla kay hava ahe ani tu te kasa khateys...",
    },
    {
        icon: "🏍️💨",
        title: "Teaching You Bike",
        description: "gadi tu chalvychi gand majhi fataychi...",
        media: "images/moment6.mp4",
        mediaType: "video",
        story: "aplya gf la bike chalvyla shikvaycha he pahilya pasun dokyat hota. maghe basun gand fattat hoti pan tevdach bhari pan vattat hota ki tu ky tari shikteys majhya kadhun. mast hota to experience although tu ajun purna nahis shikli ahe chalvyla. ",
    },
    {
        icon: "💫",
        title: "The Indelible Moment - 1920",
        description: "The moment our eyes met for the first time... I knew my life had just changed forever",
        media: "images/moment7.jpg",
        mediaType: "image",
        story: "ya moment chi story tar tula mahitch ahe....",
        
    },
    {
        icon: "✨",
        title: "Every Little Thing",
        description: "Your laugh, your smile, your voice... every single moment with you is a treasure I hold dear",
        media: "images/moment8.jpg",
        mediaType: "image",
        story: "It's the little things that make me fall for you over and over again. Your laugh that lights up the room, your smile that makes my heart skip, your voice that soothes my soul, the way you scrunch your nose when you're thinking, your random dance moves, your silly jokes... Every tiny detail about you is imprinted in my heart. You are my collection of perfect little moments.",
    }
];

/* ============================================
   PHOTO GALLERY DATA
   ============================================ */

const photos = [
    { src: "images/image1.jpg", caption: "", type: "image" },
    { src: "images/image2.jpg", caption: "", type: "image" },
    { src: "images/image3.jpg", caption: "", type: "image" },
    { src: "images/image4.mp4", caption: "", type: "video" },
    { src: "images/image5.jpg", caption: "", type: "image" },
    { src: "images/image6.jpg", caption: "", type: "image" }
];

/* ============================================
   MUSIC CONTROL
   ============================================ */

let music = document.getElementById("bg-music");
let isPlaying = false;

function toggleMusic() {
    const musicBtn = document.querySelector('.music-btn');
    const musicIcon = document.querySelector('.music-icon');
    
    if (!music) {
        // If no music element on current page, try to load it
        music = document.getElementById("bg-music");
        if (!music) {
            // Create music element if it doesn't exist
            music = document.createElement('audio');
            music.id = 'bg-music';
            music.src = 'music.mp3';
            music.loop = true;
            document.body.appendChild(music);
        }
    }

    if (isPlaying) {
        music.pause();
        if (musicIcon) musicIcon.textContent = '🎵';
    } else {
        music.play().catch(err => console.log('Music play failed:', err));
        if (musicIcon) musicIcon.textContent = '🔊';
    }
    isPlaying = !isPlaying;
}

// Auto-play music attempt (will only work after user interaction)
document.addEventListener('DOMContentLoaded', () => {
    if (music) {
        music.volume = 0.3; // Set to 30% volume for pleasant listening
    }
});

/* ============================================
   NAVIGATION
   ============================================ */

function nextPage(url) {
    document.body.style.opacity = '0';
    setTimeout(() => {
        window.location.href = url;
    }, 300);
}

function goBack() {
    document.body.style.opacity = '0';
    setTimeout(() => {
        window.history.back();
    }, 300);
}

/* ============================================
   MOMENTS PAGE - Open Moment Detail
   ============================================ */

function openMoment(index) {
    localStorage.setItem("momentIndex", index);
    nextPage("moment-detail.html");
}

/* ============================================
   MOMENT DETAIL PAGE - Load Data
   ============================================ */

if (document.getElementById("momentIcon")) {
    const index = localStorage.getItem("momentIndex");
    const moment = moments[index];

    if (moment) {
        document.getElementById("momentIcon").textContent = moment.icon;
        document.getElementById("momentTitle").textContent = moment.title;
        
        // Handle both images and videos
        const mediaContainer = document.getElementById("momentPhoto");
        const mediaParent = mediaContainer.parentElement;
        
        if (moment.mediaType === "video") {
            // Create video element
            const video = document.createElement("video");
            video.id = "momentPhoto";
            video.className = "moment-photo";
            video.src = moment.media;
            video.controls = true;
            video.playsInline = true; // Important for mobile!
            video.preload = "metadata";
            
            // Replace image with video
            mediaParent.replaceChild(video, mediaContainer);
        } else {
            // It's an image
            mediaContainer.src = moment.media;
        }
        
        document.getElementById("momentStory").textContent = moment.story;
        document.getElementById("momentQuote").textContent = `"${moment.quote}"`;
    }
}

/* ============================================
   GALLERY PAGE - Load Photos/Videos
   ============================================ */

if (document.getElementById("photo-list")) {
    let container = document.getElementById("photo-list");
    
    photos.forEach((item, i) => {
        let mediaElement;
        
        if (item.type === "video") {
            // Create video element
            mediaElement = document.createElement("video");
            mediaElement.src = item.src;
            mediaElement.alt = item.caption;
            mediaElement.playsInline = true; // Important for mobile!
            mediaElement.preload = "metadata";
            mediaElement.muted = true; // Muted by default for autoplay capability
            
            // Add play button overlay
            const wrapper = document.createElement("div");
            wrapper.className = "gallery-video-wrapper";
            wrapper.onclick = () => openPhoto(i);
            
            const playIcon = document.createElement("div");
            playIcon.className = "gallery-play-icon";
            playIcon.innerHTML = "▶";
            
            wrapper.appendChild(mediaElement);
            wrapper.appendChild(playIcon);
            wrapper.style.animation = `fadeIn 0.6s ease-out ${i * 0.1}s backwards`;
            
            container.appendChild(wrapper);
        } else {
            // Create image element
            mediaElement = document.createElement("img");
            mediaElement.src = item.src;
            mediaElement.alt = item.caption;
            mediaElement.onclick = () => openPhoto(i);
            mediaElement.style.animation = `fadeIn 0.6s ease-out ${i * 0.1}s backwards`;
            
            container.appendChild(mediaElement);
        }
    });
}

/* ============================================
   PHOTO VIEW PAGE - Load Selected Photo/Video
   ============================================ */

function openPhoto(index) {
    localStorage.setItem("photoIndex", index);
    nextPage("photo.html");
}

if (document.getElementById("photo")) {
    const index = localStorage.getItem("photoIndex");
    const data = photos[index];

    if (data) {
        const photoElement = document.getElementById("photo");
        const photoParent = photoElement.parentElement;
        
        if (data.type === "video") {
            // Create video element
            const video = document.createElement("video");
            video.id = "photo";
            video.className = "photo-img";
            video.src = data.src;
            video.controls = true;
            video.playsInline = true; // Important for mobile!
            video.autoplay = true;
            video.preload = "auto";
            
            // Replace image with video
            photoParent.replaceChild(video, photoElement);
        } else {
            // It's an image
            photoElement.src = data.src;
        }
        
        document.getElementById("caption").textContent = data.caption;
    }
}

/* ============================================
   LOVE LETTER - Typing Effect
   ============================================ */

document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.getElementById("typingText");
    if (!textElement) return;

    // CUSTOMIZE YOUR LOVE LETTER HERE!
    const text = `My Dearest Love,

Mala mahit nahiye mi tujhya sathi je kartoy te kami kartoy ka jast pan je kahi 
kartoy te khup manane kartoy,mala mahit nahiye he kadhi parynt chalel kasa 
chalel pan jo parynt ahe to parynt mi maja best deycha try karnar ahe ani 
mi make sure karel ki tula khushch thevel. 

Your's Nagane`;

    let index = 0;

    function typeLetter() {
        if (index < text.length) {
            textElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeLetter, 40); // Adjust typing speed (lower = faster)
        }
    }

    // Start typing after a brief delay
    setTimeout(typeLetter, 500);
});

/* ============================================
   ADDITIONAL ROMANTIC EFFECTS
   ============================================ */

// Add random floating hearts
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.textContent = ['💗', '💕', '💖', '💝'][Math.floor(Math.random() * 4)];
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.bottom = '-50px';
    heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
    heart.style.opacity = '0';
    heart.style.zIndex = '1';
    heart.style.pointerEvents = 'none';
    heart.style.animation = 'floatHeart 15s ease-in-out forwards';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 15000);
}

// Create hearts periodically
setInterval(createFloatingHeart, 8000);

// Create initial hearts
for (let i = 0; i < 3; i++) {
    setTimeout(createFloatingHeart, i * 3000);
}

/* ============================================
   PAGE TRANSITION EFFECT
   ============================================ */

window.addEventListener('pageshow', (event) => {
    if (event.persisted) {
        document.body.style.opacity = '1';
    }
});
