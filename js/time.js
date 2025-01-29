function updateDateTime() {
    const now = new Date();

    // Format time as HH:MM:SS AM/PM
    const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    const formattedTime = now.toLocaleTimeString("en-US", timeOptions);

    // Format date as Weekday, Month Day, Year
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = now.toLocaleDateString("en-US", dateOptions);

    document.getElementById("current-time").textContent = formattedTime;
    document.getElementById("current-date").textContent = formattedDate;
}

updateDateTime(); // Initial call
setInterval(updateDateTime, 1000); // Update every second