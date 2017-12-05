function theTimeInWords(time) {
  let timeMinutes = time.slice(2);
  let hour = 'five'
  let pastString = ' past '
  let minutes
  let minutesConversion = {
    '01': 'one minute',
    '10': 'ten minutes',
    '15': 'quarter',
    '30': 'half',
    '40': 'twenty minutes',
    '45': 'quarter',
  }
  if (parseInt(timeMinutes) > 30) {
    let toString = ' to '
    hour = 'six'
    return minutesConversion[timeMinutes] + toString + hour
  }
  if (timeMinutes === '00') {
    return hour + ' o\' clock'    
  }
  minutes = minutesConversion[timeMinutes]
  return minutes + pastString + hour    
  
}
