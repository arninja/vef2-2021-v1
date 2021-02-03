/**
 * Format a timestamp as dd.mm.yyyy hh:mm:ss e.g. "01.11.2020 12:00:00".
 *
 * @param {number} timestamp Unix timestamp to format
 * @returns {string} Formatted string.
 */
function formatTime(milliseconds) {
  const time = Date.now() - milliseconds;
  const sek = Math.floor(time / 1000);
  const hour = Math.floor(sek / 3600);
  if (hour === 1) return 'Fyrir 1 klukkustund síðan';
  if (hour <= 24) return `Fyrir ${hour} klukkustundum síðan`;
  const day = Math.floor(hour / 24);
  if (day === 1) return 'Fyrir 1 degi síðan';
  if (day <= 7) return `Fyrir ${day} dögum síðan`;
  const week = Math.floor(day / 7);
  if (week === 1) return 'Fyrir 1 viku síðan';
  if (week <= 4) return `Fyrir ${week} vikum síðan`;
  const month = Math.floor(day / 30);
  if (month === 1) return 'Fyrir 1 mánuði síðan';
  if (month <= 11) return `Fyrir ${month} mánuðum síðan`;
  const year = Math.floor(month / 12);
  if (year === 1) return 'Fyrir 1 ári síðan';
  return `Fyrir ${year} árum síðan`;
}

/**
 * Format a timestamp as mm:ss e.g. "11:12".
 *
 * @param {number} timestamp Unix timestamp to format
 * @returns {string} Formatted string.
 */
function formatTimeAdd(seconds) {
  // minutes
  const m = Math.floor(seconds / 60);
  // seconds
  const s = (seconds % 60);
  return `${m}:${s < 10 ? 0 : ' '}${s}`;
}
module.exports = { formatTimeAdd, formatTime };
