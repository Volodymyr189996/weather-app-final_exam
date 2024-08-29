document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '233bc7cbd164e72378a398a42ddedc50';
    const city = 'Kyiv';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ua`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherElement = document.getElementById('weather');
            const temp = data.main.temp;
            const description = data.weather[0].description;

            weatherElement.innerHTML = `
                <p>Температура: ${temp}°C</p>
                <p>Опис: ${description.charAt(0).toUpperCase() + description.slice(1)}</p>
            `;
        })
        .catch(error => {
            console.error('Помилка отримання даних:', error);
            document.getElementById('weather').innerHTML = `<p>Не вдалося завантажити дані.</p>`;
        });
});
