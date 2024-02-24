let header = document.getElementById('header');
document.addEventListener('DOMContentLoaded', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        let currentTabUrl = tabs[0].url;
        header.innerHTML = currentTabUrl;
        generateQRCode(currentTabUrl, 'qrcode');
    });

    document.getElementById('generateCustom').addEventListener('click', function() {
        let customUrl = document.getElementById('customUrl').value;
        header.innerHTML = customUrl;
        generateQRCode(customUrl, 'qrcode');
    });

    document.getElementById('generateTAB').addEventListener('click', function() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            let currentTabUrl = tabs[0].url;
            header.innerHTML = currentTabUrl;
            generateQRCode(currentTabUrl, 'qrcode');
        });
    });
});

function generateQRCode(url, elementId) {
    if (url) {
        let qrCodeContainer = document.getElementById(elementId);
        qrCodeContainer.innerHTML = ""; // Clear the previous QR code
        new QRCode(qrCodeContainer, {
            text: url,
            width: 128,
            height: 128,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
    }
}

