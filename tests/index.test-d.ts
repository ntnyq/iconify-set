import { assertType, describe, expectTypeOf, it } from 'vitest'
import { isIconifySetName } from '../src'

describe('typecheck', () => {
  it('should return type match', () => {
    expectTypeOf(isIconifySetName).returns.toBeBoolean()
  })

  it('should params type match', () => {
    assertType<(code: string) => boolean>(isIconifySetName)

    expectTypeOf(isIconifySetName).parameters.toMatchTypeOf<[string]>()
  })
})
