function palindromeChecker(str) {
  const re = /[^A-Za-z0-9]/g

  const lowRegStr = str.toLowerCase().replace(re, '')
  const reversedStr = lowRegStr.split('').reverse().join('')

  return lowRegStr === reversedStr
}

export default palindromeChecker
