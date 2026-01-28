"use client";

import { useEffect, useState } from "react";

interface LocalTimestampProps {
  /** Raw timestamp value from the pricing feed */
  value: string | number | Date | null | undefined;
  /** Server-rendered fallback string (shown before hydration) */
  fallback?: string;
  /** Prefix text (e.g., "As of: ") */
  prefix?: string;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Client component that displays a timestamp in the user's local timezone.
 * 
 * - On SSR/initial render: shows the fallback string
 * - After hydration: parses the value and formats it in local time
 * - Handles invalid/empty timestamps gracefully by showing fallback
 */
export default function LocalTimestamp({
  value,
  fallback = "",
  prefix = "",
  className,
}: LocalTimestampProps) {
  const [localTime, setLocalTime] = useState<string | null>(null);

  useEffect(() => {
    if (value === null || value === undefined || value === "") {
      return;
    }

    try {
      const date = value instanceof Date ? value : new Date(value);
      
      // Check if the date is valid
      if (isNaN(date.getTime())) {
        return;
      }

      // Format in user's local timezone using browser defaults
      const formatted = new Intl.DateTimeFormat(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        timeZoneName: "short",
      }).format(date);

      setLocalTime(formatted);
    } catch {
      // Keep showing fallback on error
    }
  }, [value]);

  // Display: prefix + (localTime if available, else fallback)
  const displayText = localTime ?? fallback;

  return (
    <span className={className}>
      {prefix}
      {displayText}
    </span>
  );
}
