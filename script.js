function calculateGraduationProgress() {
    // Define your specific start and end dates WITH times
    // Format: 'YYYY-MM-DDTHH:mm:ss'
    const startDate = new Date('2025-07-10T07:30:00'); // July 10, 2025, 07:30 AM
    const endDate = new Date('2026-04-11T09:30:00');   // April 11, 2026, 09:30 AM

    const now = new Date(); // Current date and time

    // Ensure we don't go below 0% or above 100%
    if (now < startDate) {
        return 0; // Project hasn't started yet
    }
    if (now > endDate) {
        return 100; // Project is already complete
    }

    // Calculate the total duration of the period in milliseconds
    const totalDuration = endDate.getTime() - startDate.getTime();

    // Calculate the elapsed time in milliseconds
    const elapsedTime = now.getTime() - startDate.getTime();

    // Calculate the progress percentage
    const progress = (elapsedTime / totalDuration) * 100;

    return progress;
}

document.addEventListener('DOMContentLoaded', () => {
    const progressBarFill = document.getElementById('progressBarFill');
    const progressText = document.getElementById('progressText');

    const progress = calculateGraduationProgress();

    // Set the width of the progress bar using the precise value for smoother visual progression
    progressBarFill.style.width = `${progress}%`;

    // Set the text below the bar, explicitly rounding DOWN using Math.floor()
    const flooredProgress = Math.floor(progress);
    progressText.textContent = `${flooredProgress}% complete.`;

    // Optional: Update every second if you want it to be live
    // setInterval(() => {
    //     const liveProgress = calculateGraduationProgress();
    //     progressBarFill.style.width = `${liveProgress}%`;
    //     const flooredLiveProgress = Math.floor(liveProgress);
    //     progressText.textContent = `${flooredLiveProgress}% complete.`;
    // }, 1000); // Update every 1 second
});
