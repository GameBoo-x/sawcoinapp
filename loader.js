const script = document.createElement('script');
script.src = 'scripttt.js'; // المسار إلى الملف الرئيسي
script.onload = () => {
    console.log('Main script loaded successfully');
};
script.onerror = () => {
    console.error('Failed to load the main script.');
};
document.head.appendChild(script);
