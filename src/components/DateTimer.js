import React, { useState, useEffect } from 'react';
import { FcAlarmClock } from 'react-icons/fc';

export const DateTTime = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <div>
      {' '}
      <FcAlarmClock style={{ color: '#0290ff', fontSize: '1.5em', marginRight: '0.8rem' }} />
      {date.toLocaleTimeString()}
      {' '}
      {date.toLocaleDateString()}
    </div>
  );
};

export default DateTTime;
