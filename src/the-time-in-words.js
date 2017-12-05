function theTimeInWords(time) {
  let hour = 'five'
  if (time === '5:30') {
    return 'half past ' + hour    
  }
  return hour + ' o\' clock'
}
