const products = {
    1: { id: 1, 
        name: 'Lenovo IdeaPad 3i Chromebook', 
        price: 150, 
        imgUrl: '/images/laptop.jpg' ,
        description: 
        `Excellent Performance: Powered by the Intel Celeron N5100 processor (4 cores, 4 threads, 1.1/2.8GHz), ensuring smooth and responsive performance.
        Storage & Memory: Comes with 32GB DDR4 RAM and a 1TB SSD, providing quick data access and plenty of storage for your needs.
        Elegant Display & Design: Features a 15.6-inch FHD (1920x1080) anti-glare screen for crisp, vivid visuals that are easy on the eyes.
        Comprehensive Connectivity & Security: Equipped with a variety of ports, ensuring flexible connectivity options while maintaining strong security features.`
    },
    2: { id: 2, 
        name: 'Apple iPhone 15', 
        price: 572,
        imgUrl: '/images/mobile.jpg' ,
        description: 
        `6.1-inch Super Retina XDR Display: Enjoy stunning visuals on a vibrant, high-resolution screen with advanced color accuracy.
        Durable Design: Crafted with aluminum and a color-infused glass back for a sleek and premium finish.
        Memory & Storage: The device is equipped with 8 GB of RAM for smooth multitasking and efficient performance. It also offers a 128 GB storage capacity, providing ample space for your files, apps, and media.
        Advanced Dual-Camera System: Capture exceptional photos with a 48MP main camera and an Ultra Wide lens, offering super-high-resolution images (24MP and 48MP).`
    },
    3: { id: 3, 
        name: 'Samsung Led TV', 
        price: 200,
        imgUrl: '/images/TV.jpg' ,
        description: 
        `PurColor: Enjoy a wider spectrum of colors for more vivid, true-to-life visuals with PurColor technology.
        4K Upscaling: Enhance your shows and videos with clearer picture quality using 4K Upscaling.
        Motion Xcelerator: Experience smoother content with reduced lag and blur for a seamless viewing experience.
        Object Tracking Sound Lite: Hear 3D surround sound that follows the on-screen action with virtual top-channel audio.`
    },
    4: { id: 4, 
        name: 'Bose bluetooth 5.1 headphone', 
        price: 199,
        imgUrl: '/images/headphone.jpg' ,
        description: 
        `Noise Cancelling Technology: These wireless Bluetooth 5.1 headphones effectively block out external noise, allowing you to immerse yourself in your music.
        Comfortable Design: The plush earpad cushions and adjustable headband ensure a secure, comfortable fit for extended listening sessions.
        Two Listening Modes: Choose between Quiet Mode for complete noise cancellation or Aware Mode to stay aware of your surroundings.
        High-Fidelity Audio & EQ Control: Adjust the bass, mid-range, and treble for customized sound with high-fidelity audio and an adjustable EQ.`
    },
    5: { id: 5, 
        name: 'Apple Watch SE', 
        price: 150,
        imgUrl: '/images/smartwatch.jpg' ,
        description: 
        `Apple Watch SE: The Apple Watch SE helps you stay active, connected, and track your health with features like Fall Detection and enhanced workout metrics.
        Stay Connected: It allows you to send texts, make calls, listen to music, and use Siri, keeping you in touch through iPhone or Wi-Fi.
        Health & Safety: Monitor your health with alerts for abnormal heart rhythms, and get help through Fall Detection, Crash Detection, and Emergency SOS.
        Seamless Compatibility: It integrates smoothly with other Apple devices, unlocking your Mac and allowing easy payments with Apple Pay.`
    },
    6: { id: 6, 
        name: 'Digital camera for photography', 
        price: 53,
        imgUrl: '/images/camera.jpg' ,
        description: 
        `4K Ultra HD Resolution: Capture stunning photos and videos in 4K Ultra HD resolution with 12 MP webcam image quality.
        Optical and Digital Zoom: Featuring a 1x optical zoom and 18x digital zoom for clear, detailed close-up shots.
        Wi-Fi Connectivity: Built-in Wi-Fi allows for easy sharing of photos and videos directly from the camera.
        Compatibility and Image Quality: Compatible with Canon EF mount lenses and uses CMOS sensor technology for improved image clarity and stability.`
    },
    7: { id: 7, 
        name: 'Marshall Acton III Bluetooth Home Speaker', 
        price: 199,
        imgUrl: '/images/speaker.jpg' ,
        description: 
        `Compact yet Powerful Sound: The Marshall may be small, but it delivers impressive Marshall Pro Sound with punchier bass that will surprise your friends.
        Extended Playtime: Enjoy up to 7 hours of playtime on a single charge, and with Playtime Boost, add an extra 2 hours for uninterrupted listening.
        Durable and Weather-Resistant: With an IP67 rating, the Marshall Acton III is both waterproof and dustproof, making it perfect for outdoor use, whether at the pool or the beach.
        Enhanced Sound with Multi-Speaker Connection: For even bigger sound, connect two Marshall Acton III speakers in stereo mode, or use Auracast to link multiple speakers wirelessly.`
    },
    8: { id: 8, 
        name: 'HP Wireless Color Inkjet Printer', 
        price: 70,
        imgUrl: '/images/printer.jpg' ,
        description: 
        `Trusted Brand: Perfect for home printing, offering reliable performance for color documents.
        All-in-One Functionality: Print, copy, and scan in color, with wireless printing options.
        HP+ Features: Upgrade to HP+ for enhanced mobile printing and security features.
        Seamless Connectivity: Dual-band Wi-Fi with auto-reset and a USB 2.0 port for easy connections.`
    },
    
};
  
 
function getProducts() {
    return Object.values(products); 
}

function getProductById(id) {
    return products[id];
}

export default {
    getProducts,
    getProductById,
};
  