const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('search-input');
const tempElement = document.getElementById('temp');
const cityElement = document.getElementById('city');
const humidityElement = document.getElementById('humidity');
const windElement = document.getElementById('wind');

// Mock data simulation
function fetchWeather(city) {
    if(city.trim() === '') return;
    
    // Simulate loading
    tempElement.innerText = '...';
    
    setTimeout(() => {
        // Generate random realistic weather data based on city length
        const baseTemp = 10 + (city.length * 2) % 25;
        const temp = baseTemp + Math.floor(Math.random() * 5);
        const humidity = 30 + Math.floor(Math.random() * 50);
        const wind = 5 + Math.floor(Math.random() * 20);
        
        cityElement.innerText = city.charAt(0).toUpperCase() + city.slice(1);
        tempElement.innerText = `${temp}°C`;
        humidityElement.innerText = `${humidity}%`;
        windElement.innerText = `${wind} km/h`;
    }, 600);
}

searchBtn.addEventListener('click', () => {
    fetchWeather(searchInput.value);
});

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        fetchWeather(searchInput.value);
    }
});
