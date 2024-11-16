// loader.js
import('./scripttt.js')
    .then(() => {
        console.log('Main script loaded successfully');
    })
    .catch(error => {
        console.error('Failed to load the main script:', error);
    });
