describe('a function for the time in words', () => {
  it('should translate 5:00 to five o\' clock', () => {
    expect(theTimeInWords('5:00')).toBe('five o\' clock')
  })
  it('should translate 5:30 to half past five', () => {
    expect(theTimeInWords('5:30')).toBe('half past five')
  })
  it('should translate 5:15 to quarter past five', () => {
    expect(theTimeInWords('5:15')).toBe('quarter past five')
  })
  it('should translate 5:01 to one minute past five', () => {
    expect(theTimeInWords('5:01')).toBe('one minute past five')
  })
})
