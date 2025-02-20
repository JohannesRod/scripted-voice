const container = document.getElementById("container");
const stopButton = document.getElementById("stop-all-sounds");
const audioMap = new Map(); // Stores playing audio elements

const images = [
    { src: 'images/image1.jpeg', sound: 'sounds/sound1.mp3', x: 1153, y: 965 },
      { src: 'images/image2.jpeg', sound: 'sounds/sound2.mp3', x: 1600, y: 951 },
      { src: 'images/image3.jpeg', sound: 'sounds/sound3.mp3', x: 1880, y: 510 },
      { src: 'images/image4.jpeg', sound: 'sounds/sound4.m4a', x: 2436, y: 800 },
      { src: 'images/image5.jpeg', sound: 'sounds/sound5.m4a', x: 144, y: 1736 },
      { src: 'images/image6.jpeg', sound: 'sounds/sound6.m4a', x: 3024, y: 1691 },
      { src: 'images/image7.jpeg', sound: 'sounds/sound7.m4a', x: 3071, y: 1509 },
      { src: 'images/image8.jpeg', sound: 'sounds/sound8.m4a', x: 3360, y: 1607 },
      { src: 'images/image9.jpeg', sound: 'sounds/sound9.m4a', x: 3162, y: 1661 },
      { src: 'images/image10.jpeg', sound: 'sounds/sound10.m4a', x: 3142, y: 1965 },
      { src: 'images/image11.jpeg', sound: 'sounds/sound11.m4a', x: 2632, y: 1668 },
      { src: 'images/image12.jpeg', sound: 'sounds/sound12.m4a', x: 2134, y: 1760 },
      { src: 'images/image13.jpeg', sound: 'sounds/sound13.m4a', x: 3430, y: 1865 },
      { src: 'images/image14.jpeg', sound: 'sounds/sound14.m4a', x: 2500, y: 1719 },
      { src: 'images/image15.jpeg', sound: 'sounds/sound15.m4a', x: 3739, y: 2258 },
      { src: 'images/image16.jpeg', sound: 'sounds/sound16.m4a', x: 3628, y: 2144 },
      { src: 'images/image17.jpeg', sound: 'sounds/sound17.m4a', x: 2021, y: 1594 },
      { src: 'images/image18.jpeg', sound: 'sounds/sound18.m4a', x: 1984, y: 2007 },
      { src: 'images/image19.jpeg', sound: 'sounds/sound19.m4a', x: 2153, y: 1138 },
      { src: 'images/image20.jpeg', sound: 'sounds/sound200.m4a', x: 2108, y: 945 },
      { src: 'images/image21.jpeg', sound: 'sounds/sound21.m4a', x: 1596, y: 1361 },
      { src: 'images/image22.jpeg', sound: 'sounds/sound22.m4a', x: 1900, y: 1509 },
      { src: 'images/image23.jpeg', sound: 'sounds/sound23.m4a', x: 1865, y: 1672 },
      { src: 'images/image24.jpeg', sound: 'sounds/sound24.m4a', x: 1989, y: 1370 },
      { src: 'images/image25.jpeg', sound: 'sounds/sound25.m4a', x: 3280, y: 2185 },
      { src: 'images/image26.jpeg', sound: 'sounds/sound26.m4a', x: 2739, y: 2149 },
      { src: 'images/image27.jpeg', sound: 'sounds/sound27.m4a', x: 2198, y: 1538 },
      { src: 'images/image28.jpeg', sound: 'sounds/sound28.m4a', x: 1713, y: 1792 },
      { src: 'images/image29.jpeg', sound: 'sounds/sound29.m4a', x: 897, y: 1636 },
      { src: 'images/image30.jpeg', sound: 'sounds/sound30.m4a', x: 748, y: 1902},
      { src: 'images/image31.jpeg', sound: 'sounds/sound31.m4a', x: 2596, y: 2059},
      { src: 'images/image32.jpeg', sound: 'sounds/sound32.m4a', x: 471, y: 2176 },
      { src: 'images/image33.jpeg', sound: 'sounds/sound33.m4a', x: 960, y: 2161 },
      { src: 'images/image34.jpeg', sound: 'sounds/sound34.m4a', x: 725, y: 2140 },
      { src: 'images/image35.jpeg', sound: 'sounds/sound35.m4a', x: 3887, y: 1576 },
      { src: 'images/image36.jpeg', sound: 'sounds/sound36.m4a', x: 380, y: 2021 },
      { src: 'images/image37.jpeg', sound: 'sounds/sound37.m4a', x: 556, y: 2007 },
      { src: 'images/image38.jpeg', sound: 'sounds/sound38.m4a', x: 471, y: 1709 },
      { src: 'images/image39.jpeg', sound: 'sounds/sound39.m4a', x: 924, y: 2046 },
      { src: 'images/image40.jpeg', sound: 'sounds/sound40.m4a', x: 980, y: 1815 },
      { src: 'images/image41.jpeg', sound: 'sounds/sound41.m4a', x: 630, y: 1669 },
      { src: 'images/image42.jpeg', sound: 'sounds/sound42.m4a', x: 504, y: 1868 },
      { src: 'images/image43.jpeg', sound: 'sounds/sound44.m4a', x: 666, y: 1807 },
      { src: 'images/image44.jpeg', sound: 'sounds/sound44.m4a', x: 1105, y: 1946 },
      { src: 'images/image45.jpeg', sound: 'sounds/sound45.m4a', x: 1459, y: 1865 },
      { src: 'images/image46.jpeg', sound: 'sounds/sound46.m4a', x: 1144, y: 802 },
      { src: 'images/image47.jpeg', sound: 'sounds/sound47.m4a', x: 1315, y: 1213},
      { src: 'images/image48.jpeg', sound: 'sounds/sound48.m4a', x: 2067, y: 809},
      { src: 'images/image49.jpeg', sound: 'sounds/sound49.m4a', x: 1517, y: 1080},
      { src: 'images/image50.jpeg', sound: 'sounds/sound50.m4a', x: 1655, y: 429},
      { src: 'images/image51.jpeg', sound: 'sounds/sound51.m4a', x: 1403, y: 857},
      { src: 'images/image52.jpeg', sound: 'sounds/sound52.m4a', x: 1306, y: 1093},
      { src: 'images/image53.jpeg', sound: 'sounds/sound53.m4a', x: 1554, y: 770},
      { src: 'images/image54.jpeg', sound: 'sounds/sound54.m4a', x: 2296, y: 954},
      { src: 'images/image55.jpeg', sound: 'sounds/sound55.m4a', x: 1870, y: 1000},
      { src: 'images/image56.jpeg', sound: 'sounds/sound56.m4a', x: 1655, y: 669},
      { src: 'images/image57.jpeg', sound: 'sounds/sound57.m4a', x: 1712, y: 1206},
      { src: 'images/image58.jpeg', sound: 'sounds/sound58.m4a', x: 1887, y: 1138},
      { src: 'images/image59.jpeg', sound: 'sounds/sound59.m4a', x: 40, y: 556},
      { src: 'images/image60.jpeg', sound: 'sounds/sound60.m4a', x: 1889, y: 774},
      { src: 'images/image61.jpeg', sound: 'sounds/sound61.m4a', x: 1447, y: 1233},
      { src: 'images/image62.jpeg', sound: 'sounds/sound62.m4a', x: 1903, y: 664},
      { src: 'images/image63.jpeg', sound: 'sounds/sound63.m4a', x: 1757, y: 889},
      { src: 'images/image64.jpeg', sound: 'sounds/sound64.m4a', x: 2231, y: 742},
      { src: 'images/image65.jpeg', sound: 'sounds/sound65.m4a', x: 2728, y: 1044},
      { src: 'images/image66.jpeg', sound: 'sounds/sound66.m4a', x: 2844, y: 903},
      { src: 'images/image67.jpeg', sound: 'sounds/sound67.m4a', x: 2844, y: 1113},
      { src: 'images/image68.jpeg', sound: 'sounds/sound68.m4a', x: 3208, y: 908},
      { src: 'images/image69.jpeg', sound: 'sounds/sound69.m4a', x: 2448, y: 1474},
      { src: 'images/image70.jpeg', sound: 'sounds/sound70.m4a', x: 2554, y: 1489},
      { src: 'images/image71.jpeg', sound: 'sounds/sound71.m4a', x: 3067, y: 1005},
      { src: 'images/image72.jpeg', sound: 'sounds/sound72.m4a', x: 922, y: 1083},
      { src: 'images/image73.jpeg', sound: 'sounds/sound73.m4a', x: 724, y: 1051},
      { src: 'images/image74.jpeg', sound: 'sounds/sound74.m4a', x: 2316, y: 38},
      { src: 'images/image75.jpeg', sound: 'sounds/sound75.m4a', x: 1423, y: 635},
      { src: 'images/image76.jpeg', sound: 'sounds/sound76.m4a', x: 2095, y: 591},
      { src: 'images/image77.jpeg', sound: 'sounds/sound77.m4a', x: 2046, y: 322},
      { src: 'images/image78.jpeg', sound: 'sounds/sound78.m4a', x: 3349, y: 2276},
      { src: 'images/image79.jpeg', sound: 'sounds/sound79.m4a', x: 3889, y: 2033},
      { src: 'images/image80.jpeg', sound: 'sounds/sound80.m4a', x: 3363, y: 2061},
      { src: 'images/image81.jpeg', sound: 'sounds/sound81.m4a', x: 2974, y: 2179},
      { src: 'images/image82.jpeg', sound: 'sounds/sound82.m4a', x: 3128, y: 2132},
      { src: 'images/image83.jpeg', sound: 'sounds/sound83.m4a', x: 2326, y: 2063},
      { src: 'images/image84.jpeg', sound: 'sounds/sound84.m4a', x: 2463, y: 2149}
      
    
];

  

// Load images
function loadImages() {
  images.forEach((image) => {
    const box = document.createElement("div");
    box.classList.add("image-box");
    box.style.left = `${image.x}px`;
    box.style.top = `${image.y}px`;

    const img = document.createElement("img");
    img.src = image.src;
    box.appendChild(img);

    container.appendChild(box);

    // Click to play/stop sound
    box.addEventListener("click", () => playSound(image.sound, box));
  });
}

  
  
  

// Play sound with 5-second delayed looping
function playSound(src, box) {
  if (audioMap.has(box)) {
    const audio = audioMap.get(box);
    audio.pause();
    audioMap.delete(box);
    return;
  }

  const audio = new Audio(src);
  audio.loop = false;
  audio.play().catch(error => console.error("Playback error:", error));

  audioMap.set(box, audio);

  setTimeout(() => {
    if (audioMap.has(box)) {
      audio.loop = true;
      audio.play();
    }
  }, 10000);
}

// Stop all sounds
stopButton.addEventListener("click", () => {
  audioMap.forEach((audio) => {
    audio.pause();
  });
  audioMap.clear();
});

// Initialize
window.addEventListener("load", () => {
  loadImages();
  drawBackgroundLines();
});
