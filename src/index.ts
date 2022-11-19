/**
 * The program generates all possible mnemonics for the given number.
 *
 * By:      Daria Bernice Calitis
 * Version: 1.0
 * Since:   2022-11-18
 */

import promptSync from 'prompt-sync'

const prompt = promptSync()

const DIAL_LETTERS = [
  'ABC', 'DEF',
  'GHI', 'JKL', 'MNO',
  'PQRS', 'TUV', 'WXYZ'
]

/**
 * The listMnemonics function.
 *
 * @param {string}   phoneNumber - the number to be converted to a mnemonic.
 * @param {string}   currentMnemonic - the current mnemonic being made.
 * @param {string[]} mnemonics - the list of all possible mnemonics.
 * @param {number}   index - the current index.
 * @returns {string[]} list of all of the possible mnemonics.
 */
function listMnemonics(
  phoneNumber: String, currentMnemonic: String,
  mnemonics: String[], index: number
): String[] {
  if (currentMnemonic.length === phoneNumber.length) {
    mnemonics.push(currentMnemonic)
  } else {
    let mnemonic = ''

    const letters = DIAL_LETTERS[Number(phoneNumber[index]) - 2]

    for (let count = 0; count < letters.length; count++) {
      const letter = letters[count]
      mnemonic = currentMnemonic.concat(letter)

      listMnemonics(phoneNumber, mnemonic, mnemonics, index + 1)

      mnemonic = mnemonic.substring(0, mnemonic.length - 1)
    }
  }

  return mnemonics
}

console.log('Mnemonic Generator')
console.log(
  'The number must have digits from 2 to 9, inclusive\n'
)

const phoneNumber = prompt('Enter a phone number: ')

console.log()
try {
  console.log(listMnemonics(phoneNumber, '', [], 0).toString())
} catch (err) {
  console.log('Invalid Input.')
}

console.log('\nDone.')
