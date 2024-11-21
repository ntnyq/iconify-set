import { expect, it } from 'vitest'
import { isIconifySetName } from '../src'

const validNames = [
  'mdi',
  'ic',
  'fa',
  'ri',
  'ph',
  'carbon',
  'vscode-icons',
  'rivet-icons',
  'si-glyph',
  'si',
  'simple-icons',
  'simple-line-icons',
  'skill-icons',
  'solar',
  'stash',
  'streamline-emojis',
  'streamline',
  'subway',
  'svg-spinners',
  'teenyicons',
  'token-branded',
]
const invalidNames = [
  // not string
  1,
  true,
  undefined,
  null,

  // empty string
  '',

  // valid icon set name with special chars and whitespace
  'mdi-',
  ' mdi',
  'mdi ',

  // invalid string
  'foobar',
]

it.each(validNames)('valid iconify set name', name => {
  expect(isIconifySetName(name)).toBe(true)
})

it.each(invalidNames)('invalid iconify set name', name => {
  expect(isIconifySetName(name as string)).toBe(false)
})
