window.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('background-video');
  
  // Video duration: 19 minutes * 60 + 43 seconds = 1183 seconds
  const VIDEO_DURATION = 1183; 

  const syncVideoToTimeOfDay = () => {
    const now = new Date();
    
    // Total seconds passed since midnight
    const secondsSinceMidnight = 
      now.getHours() * 3600 + 
      now.getMinutes() * 60 + 
      now.getSeconds() + 
      now.getMilliseconds() / 1000;

    // Modulo by duration to get position in loop
    const targetTime = secondsSinceMidnight % VIDEO_DURATION;

    // Apply synced position
    video.currentTime = targetTime;
  };

  if (video.readyState >= 1) {
    syncVideoToTimeOfDay();
  } else {
    video.addEventListener('loadedmetadata', syncVideoToTimeOfDay);
  }
});