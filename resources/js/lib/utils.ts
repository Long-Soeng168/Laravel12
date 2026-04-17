import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const formatToKhmerDateTime = (utcDate?: string, showTime = true, showFulllYear = false) => {
    if (!utcDate) return '-';

    const date = new Date(utcDate);

    // Get date parts using Intl.DateTimeFormat
    const dFormatter = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Asia/Bangkok',
        day: '2-digit',
        month: 'short',
        year: showFulllYear ? 'numeric' : '2-digit',
    });

    const parts = dFormatter.formatToParts(date);
    const day = parts.find((p) => p.type === 'day')?.value;
    const month = parts.find((p) => p.type === 'month')?.value;
    const year = parts.find((p) => p.type === 'year')?.value;

    // Join with dashes: 12-Dec-02
    const datePart = `${day}-${month}-${year}`;

    if (!showTime) return datePart;

    // Time formatting remains the same
    const tOptions: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Bangkok',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
    };

    const timePart = date.toLocaleTimeString('en-GB', tOptions);

    // Join with a dash between Date and Time
    return `${datePart} - ${timePart}`;
};
