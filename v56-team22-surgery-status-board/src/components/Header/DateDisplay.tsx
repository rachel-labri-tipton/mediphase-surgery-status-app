// components/header/DateDisplay.tsx
import { useEffect, useState } from 'react';

const DateDisplay = () => {
  const [date, setDate] = useState('');

  useEffect(() => {
    const now = new Date();
    const formatted = now.toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
    setDate(formatted);
  }, []);

  return (
    <span className="text-sm text-primary font-black font-sans tracking-wide border border-primary px-3 py-1 rounded-md">
      {date}
    </span>
  );
};

export default DateDisplay;
