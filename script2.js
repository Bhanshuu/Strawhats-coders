document.addEventListener('DOMContentLoaded', () => {
    const calculateBtn = document.getElementById('calculateBtn');
    const areaInput = document.getElementById('areaInput');
    const pressureInput = document.getElementById('pressureInput');
    const cropInput = document.getElementById('cropInput');
    const depthInput = document.getElementById('depthInput');
    const result = document.getElementById('result');
    const estimatedTime = document.getElementById('estimatedTime');

    calculateBtn.addEventListener('click', () => {
        const area = parseFloat(areaInput.value);
        const pressure = parseFloat(pressureInput.value);
        const crop = cropInput.value;
        const depth = parseFloat(depthInput.value);

        // Random data for calculation
        const time = (area * pressure * depth) / (crop === 'wheat' ? 2 : 3); // Just a placeholder formula
        
        estimatedTime.textContent = `${time.toFixed(2)} hours`;
        result.classList.remove('hidden');
    });
});
