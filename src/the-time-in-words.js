function theTimeInWords(time) {
  let timeMinutes = time.slice(2);
  let hour = 'five'
  let pastString = ' past '
  let minutes
  let minutesConversion = {
    '01': 'one minute',
    '10': 'ten minutes',
    '28': 'twenty eight minutes',
    '15': 'quarter',
    '30': 'half',
    '40': 'twenty minutes',
    '45': 'quarter',
    '47': 'thirteen minutes',    
  }
  if (parseInt(timeMinutes) > 30) {
    pastString = ' to '
    hour = 'six'
  }
  if (timeMinutes === '00') {
    return hour + ' o\' clock'    
  }
  minutes = minutesConversion[timeMinutes]
  return minutes + pastString + hour    
  
}
