import React, { useState, useEffect } from 'react';

const DigitalClock: React.FC = () => {
  const [time, setTime] = useState<Date>(new Date());

  // Initialize showDate state from localStorage or default to true
  const [showDate, setShowDate] = useState<boolean>(() => {
    const savedShowDate = localStorage.getItem('showDate');
    return savedShowDate ? JSON.parse(savedShowDate) : true;
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  // Save showDate value to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('showDate', JSON.stringify(showDate));
  }, [showDate]);

  const formatTime = (date: Date): string => {
    const hours = date.getHours() % 12 || 12;
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const amPm = date.getHours() >= 12 ? 'PM' : 'AM';

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${amPm}`;
  };

  const formatDate = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    return date.toLocaleDateString(undefined, options);
  };

  const handleClockClick = () => {
    setShowDate(!showDate);
  };

  return (
    <div className="container">
      <div className="clock" onClick={handleClockClick}>
        {formatTime(time)}
      </div>
      {showDate && (
        <div className="date">
          {formatDate(time)}
        </div>
      )}
    </div>
  );
};

export default DigitalClock;
