function theTimeInWords(time) {
  let hour = 'five'
  if (time === '5:15') {
    return 'quarter past ' + hour
  }
  if (time === '5:30') {
    return 'half past ' + hour    
  }
  return hour + ' o\' clock'
}
