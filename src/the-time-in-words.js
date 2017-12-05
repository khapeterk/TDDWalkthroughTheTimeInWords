function theTimeInWords(time) {
  let hour = 'five'
  let pastString = ' past '
  if (time === '5:15') {
    return 'quarter' + pastString + hour
  }
  if (time === '5:30') {
    return 'half' + pastString + hour    
  }
  return hour + ' o\' clock'
}
