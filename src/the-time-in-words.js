function theTimeInWords(time) {
  let timeMinutes = time.slice(2);
  let hour = 'five'
  let pastString = ' past '
  let minutes
  let minutesConversion = {
    '01': 'one minute',
    '15': 'quarter',
    '30': 'half'
  }
  if (timeMinutes === '00') {
    return hour + ' o\' clock'    
  }
  if (timeMinutes === '01') {
    minutes = minutesConversion[timeMinutes]
  }
  if (timeMinutes === '15') {
    minutes = minutesConversion[timeMinutes]
  }
  if (timeMinutes === '30') {
    minutes = minutesConversion[timeMinutes]
  }
  return minutes + pastString + hour    
  
}
