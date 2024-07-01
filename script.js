function pad(number) {
    return number < 10 ? '0' + number : number;
}

function updateImage() {
    // Get the current time and subtract 1.1 seconds
    const now = new Date(Date.now() - 1100);

    const year = now.getFullYear();
    const month = pad(now.getMonth() + 1);
    const day = pad(now.getDate());
    const hours = pad(now.getHours());
    const minutes = pad(now.getMinutes());
    const seconds = pad(now.getSeconds());

    const datePart = `${year}${month}${day}`;
    const timePart = `${hours}${minutes}${seconds}`;

    const url = `https://smi.lmoniexp.bosai.go.jp/data/map_img/RealTimeImg/jma_s/${datePart}/${datePart}${timePart}.jma_s.gif`;

    // Set the URL to the iframe's src attribute
    const iframe = document.getElementById('realTimeImageFrame');
    iframe.src = url;

    // Check for iframe loading errors
    iframe.onerror = function() {
        console.error(`Failed to load image from URL: ${url}`);
    };

    // Log a message when the iframe loads successfully
    iframe.onload = function() {
        console.log(`Successfully loaded image from URL: ${url}`);
    };
}

// Initial execution
updateImage();

// Execute updateImage every second
setInterval(updateImage, 1000);
