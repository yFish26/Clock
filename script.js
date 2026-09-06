// Common timezones for the dropdown
const timezones = [
  { label: 'UTC', value: 'UTC' },
  { label: 'New York (EST/EDT)', value: 'America/New_York' },
  { label: 'Chicago (CST/CDT)', value: 'America/Chicago' },
  { label: 'Denver (MST/MDT)', value: 'America/Denver' },
  { label: 'Los Angeles (PST/PDT)', value: 'America/Los_Angeles' },
  { label: 'London (GMT/BST)', value: 'Europe/London' },
  { label: 'Paris / Berlin (CET/CEST)', value: 'Europe/Paris' },
  { label: 'Moscow (MSK/MSK+1)', value: 'Europe/Moscow' },
  { label: 'Dubai (GST)', value: 'Asia/Dubai' },
  { label: 'India (IST)', value: 'Asia/Kolkata' },
  { label: 'China (CST)', value: 'Asia/Shanghai' },
  { label: 'Tokyo (JST)', value: 'Asia/Tokyo' },
  { label: 'Sydney (AEST/AEDT)', value: 'Australia/Sydney' },
  { label: 'Auckland (NZST/NZDT)', value: 'Pacific/Auckland' },
];

const timezoneSelect = document.getElementById('timezone');
const timeDisplay = document.getElementById('currentTime');

// Populate select
timezones.forEach(function (tz) {
  const option = document.createElement('option');
  option.value = tz.value;
  option.textContent = tz.label;
  timezoneSelect.appendChild(option);
});

function showTime() {
  const selectedTimezone = timezoneSelect.value;
  const now = new Date();
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: selectedTimezone,
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });
  timeDisplay.textContent = formatter.format(now);
}

// Detect user's timezone and preselect it
const userTZ = Intl.DateTimeFormat().resolvedOptions().timeZone;
const matchOption = Array.from(timezoneSelect.options).find(function (opt) {
  return opt.value === userTZ;
});
if (matchOption) {
  timezoneSelect.value = userTZ;
}

showTime();
setInterval(showTime, 1000);
