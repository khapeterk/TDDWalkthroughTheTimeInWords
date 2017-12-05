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
    minutes = 'one minute'
  }
  if (timeMinutes === '15') {
    minutes = 'quarter'
  }
  if (timeMinutes === '30') {
    minutes = 'half'
  }
  return minutes + pastString + hour    
  
}
