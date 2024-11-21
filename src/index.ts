import iconifySetNames from './iconify.json'

/**
 * [iconify](https://iconify.design/) icon set names
 *
 * @see {@link https://github.com/iconify/icon-sets/tree/master/json}
 */
export const ICONIFY_SET_NAMES: string[] = iconifySetNames

/**
 * Check if given string is a valid [iconify](https://iconify.design/) set name
 * @param name - string to check
 * @returns `true` if given string is a valid iconify set name, `false` otherwise
 *
 * @see {@link ICONIFY_SET_NAMES}
 *
 * @example
 *
 *```ts
 *import { isIconifySetName } from 'iconify-set'
 *
 *console.log(isIconifySetName('mdi')) // -> true
 *console.log(isIconifySetName('carbon')) // -> true
 *
 *console.log(isIconifySetName('foobar')) // -> false
 *```
 */
export function isIconifySetName(name: string) {
  if (!name || typeof name !== 'string') return false
  return ICONIFY_SET_NAMES.includes(name)
}
