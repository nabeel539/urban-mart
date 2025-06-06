import { useState, useEffect } from "react";

const Timer = () => {
  // Initialize time in seconds (5 hours = 18000 seconds)
  const initialTime = 5 * 60 * 60;
  const [timeLeft, setTimeLeft] = useState(initialTime);

  // Function to format time into hours, minutes, seconds
  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return {
      hours: hours.toString().padStart(2, "0"),
      minutes: minutes.toString().padStart(2, "0"),
      seconds: seconds.toString().padStart(2, "0"),
    };
  };

  // useEffect to handle countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer); // Stop when timer reaches zero
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, []);

  // Destructure the formatted time
  const { hours, minutes, seconds } = formatTime(timeLeft);

  return (
    <div className="hidden sm:flex items-center space-x-4">
      {/* Timer for Hours */}
      <div className="flex flex-col items-center">
        <span className="text-4xl font-bold text-gray-800">{hours}</span>
        <span className="text-sm font-medium text-gray-500">Hours</span>
      </div>

      <span className="text-4xl font-bold text-gray-800">:</span>

      {/* Timer for Minutes */}
      <div className="flex flex-col items-center">
        <span className="text-4xl font-bold text-gray-800">{minutes}</span>
        <span className="text-sm font-medium text-gray-500">Minutes</span>
      </div>

      <span className="text-4xl font-bold text-gray-800">:</span>

      {/* Timer for Seconds */}
      <div className="flex flex-col items-center">
        <span className="text-4xl font-bold text-gray-800">{seconds}</span>
        <span className="text-sm font-medium text-gray-500">Seconds</span>
      </div>
    </div>
  );
};

export default Timer;
