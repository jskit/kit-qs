// import { expect } from 'chai';
import assert from 'assert'
import { describe, it } from 'mocha'
import stringify from '../src/stringify'

const result1 = 'from=singlemessage&isappinstalled=0&id=646156&platform=5'
const test1 = {
  from: 'singlemessage',
  isappinstalled: '0',
  id: '646156',
  platform: '5',
}
const result2 = 'activityId=1'
const test2 = {
  activityId: '1',
}

describe('kit-qs', () => {
  describe('stringify', () => {
    it('test1', () => {
      const result = stringify(test1)
      assert.equal(result, result1)
    })
    it('test2', () => {
      const result = stringify(test2)
      assert.equal(result, result2)
    })
  })
})
