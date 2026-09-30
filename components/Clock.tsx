'use client';

import { useEffect, useState } from 'react';

function formatTime(date: Date) {
  const parts = new Intl.DateTimeFormat(undefined, {
    hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true,
  }).formatToParts(date);
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? '';
  return { hour: get('hour'), minute: get('minute'), second: get('second'), dayPeriod: get('dayPeriod') };
}

export default function Clock() {
  const [time, setTime] = useState(() => formatTime(new Date()));
  useEffect(() => {
    const id = window.setInterval(() => setTime(formatTime(new Date())), 1000);
    return () => window.clearInterval(id);
  }, []);
  return (
    <div className="digital-clock" aria-label={`Current time ${time.hour}:${time.minute}:${time.second} ${time.dayPeriod}`}>
      <span>{time.hour}</span><b>:</b><span>{time.minute}</span><b>:</b><span>{time.second}</span><em>{time.dayPeriod}</em>
    </div>
  );
}
