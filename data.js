// App data and configuration
window.appData = {
    title: "Web Application",
    version: "1.0.0",
    data: [
        { id: 1, name: "Sample Item 1", value: 100 },
        { id: 2, name: "Sample Item 2", value: 200 },
        { id: 3, name: "Sample Item 3", value: 150 }
    ]
};

// Export for module environments if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = window.appData;
}