// تحميل ملف JSON
fetch('configs.json')
  .then(response => {
    if (!response.ok) {
      throw new Error(`Failed to load config.json: ${response.status}`);
    }
    return response.json();
  })
  .then(config => {
    // إنشاء عنصر script لتحميل الملف الرئيسي
    const script = document.createElement('script');
    script.src = config.mainScript; // المسار إلى ملف السكربت
    script.onload = () => {
      console.log('Main script loaded successfully');
    };
    script.onerror = () => {
      console.error('Failed to load the main script.');
    };
    document.head.appendChild(script);
  })
  .catch(error => {
    console.error('Error loading JSON or script:', error);
  });
