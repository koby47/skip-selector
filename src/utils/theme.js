// theme.js or inside a component
export function setTheme(mode) {
  const root = document.documentElement;

  if (mode === 'system') {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    root.setAttribute('data-theme', isDark ? 'dark' : 'light');
  } else {
    root.setAttribute('data-theme', mode); // 'dark' or 'light'
  }

  localStorage.setItem('theme', mode);
}

export function getSavedTheme() {
  return localStorage.getItem('theme') || 'system';
}
