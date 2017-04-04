const getMonthName = (num) => {
  if (num === '1') return 'Jan'
  else if (num === '2') return 'Feb'
  else if (num === '3') return 'Mar'
  else if (num === '4') return 'April'
  else if (num === '5') return 'May'
  else if (num === '6') return 'June'
  else if (num === '7') return 'July'
  else if (num === '8') return 'Aug'
  else if (num === '9') return 'Sep'
  else if (num === '10') return 'Oct'
  else if (num === '11') return 'Nov'
  else if (num === '12') return 'Dec'
}

const getDateString = (day, month, year) => {
  if (day) return `${day} ${getMonthName(month)} ${year}`
  else return `${getMonthName(month)} ${year}`
}

module.exports = getDateString
