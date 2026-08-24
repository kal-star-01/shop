export const IMG = (name) => `/assets/img/${name}`;

export function ratingStars(rating) {
  const stars = [];
  for (let i = 1; i <= 5; i++) stars.push(i <= rating ? 'active' : '');
  return stars;
}

export const validEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v || '');
export const required = (v) => v !== undefined && v !== null && String(v).trim() !== '';
export const minLength = (n) => (v) => (v ? String(v).length >= n : false);
export const sameAs = (field, obj) => (v) => obj[field] !== undefined && v === obj[field];
