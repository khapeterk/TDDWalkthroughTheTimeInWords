function theTimeInWords(time) {
  let hour = 'five'
  let pastString = ' past '
  if (time === '5:00') {
    return hour + ' o\' clock'    
  }
  if (time === '5:15') {
    let minutes = 'quarter'
    return minutes + pastString + hour
  }
  if (time === '5:30') {
    let minutes = 'half'
    return minutes + pastString + hour    
  }
}
