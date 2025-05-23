import { generateMedia } from 'styled-media-query';

export function formatReadingTime(minutes) {
  let cups = Math.round(minutes / 5);
  let bowls = 0;
  if (cups > 5) {
    return `${new Array(Math.round(cups / Math.E)).join(
      ''
    )} ${minutes} min read`;
  } else {
    return `${new Array(cups || 1).join('')} ${minutes} min read`;
  }
}

// `lang` is optional and will default to the current user agent locale
export function formatPostDate(date, lang) {
  if (typeof Date.prototype.toLocaleDateString !== 'function') {
    return date;
  }

  date = new Date(date);
  const args = [
    lang,
    { day: 'numeric', month: 'long', year: 'numeric' },
  ].filter(Boolean);
  return date.toLocaleDateString(...args);
}

export const breakpoints = {
  sm: '480px',
  md: '640px',
  lg: '1024px',
};

export const media = generateMedia(breakpoints);
