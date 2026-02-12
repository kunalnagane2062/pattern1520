# 💖 Valentine's Day Website for Your Girlfriend

A beautiful, romantic, interactive website to celebrate your love story with your girlfriend this Valentine's Day!

## 🎨 Features

### 💘 Playful "Will You Be My Valentine?" Page
A fun, interactive page that asks THE question:
- **Playful "No" button** that runs away when you hover over it!
- **Growing "Yes" button** that gets bigger with each "No" attempt
- **Funny text changes** - "No" button changes its text with funny messages
- **Hint system** that gently encourages clicking "Yes"
- **Epic celebration** when she finally clicks "Yes" with heart explosions!
- After too many "No" clicks, the button disappears entirely 😂

### ✨ Romantic Background Effects
- Floating hearts animations
- Sparkles and shimmer effects
- Gradient overlays that shift and breathe
- Additional random floating hearts throughout

### 💑 Special Moments Gallery
Showcase the intimate moments you share:
- You in my clothes
- Your cooking
- Your peaceful sleep
- Your loving gaze
- You while eating
- Our first stay together
- Our first meeting
- Every little thing

Each moment has:
- A dedicated icon
- Beautiful description
- Personal photo
- Detailed love story
- Romantic quote

### 📸 Photo Gallery
- Polaroid-style photo presentation
- Smooth hover effects
- Individual photo viewing with captions

### 💌 Love Letter
- Typing animation effect
- Beautifully styled letter box
- Personal message space

### 🎵 Background Music
- Toggle music on/off
- Smooth controls on every page

## 📁 File Structure

```
valentine-website/
├── index.html              # Landing page
├── valentine-question.html # "Will you be my Valentine?" page
├── valentine-question.js   # JavaScript for the question page
├── moments.html            # Moments gallery
├── moment-detail.html      # Individual moment view
├── gallery.html            # Photo gallery
├── photo.html             # Individual photo view
├── final.html             # Love letter
├── style.css              # All styles and animations
├── script.js              # All functionality
├── music.mp3              # Background music
└── images/                # Your photos AND videos folder
    ├── moment1.jpg        # Photo: You in my clothes (or .mp4 for video)
    ├── moment2.mp4        # Video: Your cooking (or .jpg for photo)
    ├── moment3.jpg        # Photo: Your peaceful sleep
    ├── moment4.jpg        # Photo: Your gaze
    ├── moment5.mp4        # Video: You while eating
    ├── moment6.jpg        # Photo: Our first stay
    ├── moment7.mp4        # Video: Our first meet
    ├── moment8.jpg        # Photo: Every little thing
    ├── image1.jpg         # Gallery photo 1 (or .mp4)
    ├── image2.mp4         # Gallery video 2 (or .jpg)
    ├── image3.jpg         # Gallery photo 3
    ├── image4.mp4         # Gallery video 4
    ├── image5.jpg         # Gallery photo 5
    └── image6.jpg         # Gallery photo 6
```

**Note:** You can use BOTH images (.jpg, .png, .jpeg) and videos (.mp4, .mov, .webm) for moments and gallery!

## 🚀 Setup Instructions

### Step 1: Organize Your Photos AND Videos 📸🎥
1. Create an `images` folder in the same directory as your HTML files
2. Add photos OR videos for each moment:
   - For images: Use .jpg, .png, or .jpeg format
   - For videos: Use .mp4, .mov, or .webm format (MP4 is recommended for best compatibility)
   - Mix and match! Some moments can be photos, others can be videos
3. Add general gallery photos/videos (image1 through image6)
4. **Important for videos:** Keep video files under 50MB for smooth loading on mobile

### Step 2: Configure Media Types in script.js
1. Open `script.js`
2. Find the `moments` array at the top
3. For each moment, set:
   - `media`: Your file path (e.g., "images/moment1.mp4" or "images/moment1.jpg")
   - `mediaType`: Either "video" or "image"

Example:
```javascript
{
    icon: "🍳",
    title: "Your Cooking",
    media: "images/moment2.mp4",  // Video file
    mediaType: "video",            // Set to "video"
    story: "...",
    quote: "..."
}
```

4. Do the same for the `photos` array - set `type: "video"` or `type: "image"` for each item

### Step 3: Customize the Love Letter
1. Open `script.js`
2. Find the "LOVE LETTER - Typing Effect" section (near the bottom)
3. Replace the text in the `text` variable with your personal love letter
4. Don't forget to replace `[Your Name]` with your actual name!

### Step 3: Customize Moments (Optional)
1. Open `script.js`
2. Find the `moments` array at the top
3. Edit the `story` and `quote` fields for each moment
4. Make them personal to your relationship!

### Step 4: Customize Photo Captions
1. Open `script.js`
2. Find the `photos` array
3. Edit the captions to match your photos

### Step 5: Add Your Music
1. Get a romantic song (MP3 format)
2. Name it `music.mp3`
3. Place it in the same folder as your HTML files
4. Or change the filename in `index.html` and `script.js`

### Step 6: Test Everything
1. Open `index.html` in your web browser
2. Click through all pages to make sure everything works
3. Check that all photos/videos load correctly
4. Test the music player
5. **IMPORTANT: Test on mobile!** Open on your phone to see how it looks

## 📱 Mobile Optimization

This website is **fully optimized for mobile devices** since your girlfriend will be viewing it on her phone!

### Mobile Features:
✅ **Touch-friendly buttons** - All buttons are sized for easy tapping
✅ **Responsive design** - Looks perfect on all screen sizes
✅ **Video support** - Videos play natively with mobile controls
✅ **Performance optimized** - Reduced animations on mobile for smooth experience
✅ **Portrait & landscape** - Works in both orientations
✅ **No button escapes on touch** - The "No" button in the Valentine question moves away when you try to touch it! 😂

### Mobile Testing Tips:
1. Test on your actual phone before sending to her
2. Check both WiFi and mobile data (for video loading)
3. Make sure videos aren't too large (keep under 50MB each)
4. Test the music - some phones require user interaction to play
5. Try both portrait and landscape modes

### Video Recommendations for Mobile:
- **Format:** MP4 (best compatibility)
- **Resolution:** 1080p or lower (720p is fine for mobile)
- **File size:** Keep under 50MB per video
- **Length:** Shorter videos (under 30 seconds) load faster
- **Compression:** Use a tool like HandBrake to compress if needed

## 🎨 Customization Ideas

### Change Colors
In `style.css`, find the `:root` section and modify:
- `--primary-pink`: Main pink color
- `--soft-pink`: Lighter pink
- `--deep-rose`: Darker rose color
- `--cream`: Background cream color

### Add More Moments
In `script.js`, add more objects to the `moments` array:
```javascript
{
    icon: "🎂",
    title: "Your Birthday",
    description: "Celebrating you...",
    photo: "images/moment9.jpg",
    story: "Your story here...",
    quote: "Your quote here"
}
```

Then add a corresponding card in `moments.html`:
```html
<div class="moment-card" onclick="openMoment(8)">
    <!-- Card content -->
</div>
```

### Add More Gallery Photos
In `script.js`, add more to the `photos` array:
```javascript
{ src: "images/image7.jpg", caption: "Your caption here" }
```

### Change Fonts
Replace the Google Fonts link in the HTML files:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont&display=swap" rel="stylesheet">
```

## 💝 Tips for Maximum Impact

1. **Choose High-Quality Photos**: Use the best photos you have together
2. **Write from the Heart**: Personalize the love letter and moment stories
3. **Test on Mobile**: Make sure it looks good on her phone too
4. **Pick the Right Music**: Choose a song that's special to both of you
5. **Add Surprise Elements**: Consider adding inside jokes or special dates
6. **Timing**: Send it to her at midnight or first thing in the morning

## 📱 Sharing Options

### Option 1: Send as Files
1. Zip all files together
2. Send via email or messaging app
3. She can extract and open `index.html`

### Option 2: Host Online (Free)
1. Sign up for GitHub Pages (free)
2. Upload all files
3. Share the link with her

### Option 3: USB Drive
1. Copy all files to a pretty USB drive
2. Give it to her as a physical gift
3. She can open `index.html` from the drive

## 🐛 Troubleshooting

**Photos not showing?**
- Check that all photo paths in `script.js` match your actual file names
- Make sure photos are in the `images` folder

**Videos not playing?**
- Make sure you set `mediaType: "video"` in script.js for video files
- Use MP4 format for best compatibility
- Check file size - large videos may load slowly on mobile
- Some browsers require user interaction before playing videos

**Music not playing?**
- Make sure `music.mp3` is in the correct location
- Some browsers require user interaction before playing audio
- Try clicking the music button

**Page looks different on mobile?**
- The site is responsive and will adjust automatically
- Some features may look slightly different, but all will work
- Videos will have native mobile controls

**"No" button not moving on mobile?**
- Make sure JavaScript is enabled
- The button moves on both hover (desktop) and touch (mobile)
- Try tapping near the button instead of directly on it

**Typing effect too fast/slow?**
- In `script.js`, find `setTimeout(typeLetter, 40)`
- Change `40` to a higher number for slower, lower for faster

**Videos too large/slow to load?**
- Compress videos using tools like:
  - HandBrake (free, desktop)
  - Online converters (search "compress MP4 online")
  - Phone apps like "Video Compress"
- Target: Under 20MB for smooth mobile experience

## ❤️ Final Notes

This website is a labor of love, just like your relationship! Take the time to personalize every detail. The more personal touches you add, the more special it will be for her.

Remember: It's not about perfection, it's about the thought and effort you put into showing her how much she means to you.

Happy Valentine's Day! 💕

---

**Need help?** The code is well-commented. Look for sections marked with comment headers like this:
```javascript
/* ============================================
   SECTION NAME
   ============================================ */
```
