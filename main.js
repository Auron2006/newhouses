document.getElementById('fetchHousesBtn').addEventListener('click', async () => {
    try {
        const response = await fetch('/api/houses');  // Fetch from backend API
        const data = await response.json();
        document.getElementById('houseData').innerHTML = JSON.stringify(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});