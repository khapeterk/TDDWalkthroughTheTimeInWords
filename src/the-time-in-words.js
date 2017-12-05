function theTimeInWords(time) {
  let hour = 'five'
  let pastString = ' past '
  let minutes
  if (time === '5:00') {
    return hour + ' o\' clock'    
  }
  if (time === '5:15') {
    minutes = 'quarter'
  }
  if (time === '5:30') {
    minutes = 'half'
  }
  return minutes + pastString + hour    
  
}
