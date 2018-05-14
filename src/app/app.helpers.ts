export function isTokenValid(jwt) {

  // check if obj is empty
  if (!jwt) return false;

  // token or expiryDate is empty
  if (!jwt.token || !jwt.expiresAt) return false;

  // token is expired
  if (jwt.expiresAt < Date.now()) {
    console.log('token is expired');
    return false;
  }

  // token is valid
  return true;
}

export function capitalizeFirstLetter(string) {
  if (!string) return;
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function getDates() {
  let months = MONTHS();
  let years = [];

  let today = new Date();
  let currentYear = today.getFullYear();

  for (let i = 2018; i <= currentYear; i++) {
    years.push(i);
  }

  return {
    currentDay: today.getDate(),
    currentMonth: today.getMonth(),
    currentYear: currentYear,
    months: months,
    years: years
  }
}

function MONTHS() {
  return [
    {
      id: 0,
      name: 'January',
      days: 31
    },
    {
      id: 1,
      name: 'February',
      days: 28
    },
    {
      id: 2,
      name: 'March',
      days: 31
    },
    {
      id: 3,
      name: 'April',
      days: 30
    },
    {
      id: 4,
      name: 'May',
      days: 31
    },
    {
      id: 5,
      name: 'June',
      days: 30
    },
    {
      id: 6,
      name: 'July',
      days: 31
    },
    {
      id: 7,
      name: 'August',
      days: 31
    },
    {
      id: 8,
      name: 'September',
      days: 30
    },
    {
      id: 9,
      name: 'October',
      days: 31
    },
    {
      id: 10,
      name: 'November',
      days: 30
    },
    {
      id: 11,
      name: 'December',
      days: 31
    }
  ]
}
