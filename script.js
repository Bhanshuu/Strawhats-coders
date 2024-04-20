// Define irrigation schedules for different crops
const irrigationSchedules = {
    wheat: [
        { day: 3, description: "Need water 3 days after sowing" },
        { day: 17, description: "Need water 17 days after sowing" },
        { day: 30, description: "Need water 30 days after sowing" }
    ],
    rice: [
        { day: 2, description: "Need water 2 days after sowing" },
        { day: 15, description: "Need water 15 days after sowing" },
        { day: 30, description: "Need water 30 days after sowing" }
    ],
    cotton: [
        { day: 5, description: "Need water 5 days after sowing" },
        { day: 20, description: "Need water 20 days after sowing" },
        { day: 40, description: "Need water 40 days after sowing" }
    ]
};

// Get elements
const cropSelect = document.getElementById('cropSelect');
const irrigationSchedule = document.getElementById('irrigationSchedule');
const scheduleList = document.getElementById('scheduleList');

// Event listener for crop selection
cropSelect.addEventListener('change', function() {
    const selectedCrop = this.value;

    // Check if a crop is selected
    if (selectedCrop) {
        const schedule = irrigationSchedules[selectedCrop];
        irrigationSchedule.classList.remove('hidden');
        scheduleList.innerHTML = ''; // Clear previous schedule

        // Create list items for the schedule
        schedule.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item.description;
            scheduleList.appendChild(listItem);
        });
    } else {
        irrigationSchedule.classList.add('hidden');
        scheduleList.innerHTML = ''; // Clear schedule
    }
});
