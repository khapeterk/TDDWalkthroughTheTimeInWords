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
  it('should translate 5:10 to ten minutes past five', () => {
    expect(theTimeInWords('5:10')).toBe('ten minutes past five')
  })
  it('should translate 5:45 to quarter to six', () => {
    expect(theTimeInWords('5:45')).toBe('quarter to six')
  })
  it('should translate 5:40 to twenty minutes to six', () => {
    expect(theTimeInWords('5:40')).toBe('twenty minutes to six')
  })
  it('should translate 5:47 to thirteen minutes to six', () => {
    expect(theTimeInWords('5:47')).toBe('thirteen minutes to six')
  })
  it('should translate 5:28 to twenty eight minutes past five', () => {
    expect(theTimeInWords('5:28')).toBe('twenty eight minutes past five')
  })
})
