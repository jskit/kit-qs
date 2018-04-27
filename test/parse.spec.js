// import { expect } from 'chai';
import assert from 'assert'
import { describe, it } from 'mocha'
import parse from '../src/parse'

const test1 = 'https://m.iqianggou.com/?from=singlemessage&isappinstalled=0#bargain?id=646156&platform=5'
const result1 = {
  from: 'singlemessage',
  isappinstalled: '0',
  id: '646156',
  platform: '5',
}
const test2 = 'haoshiqi://com.doweidu/activityshare?activityId=1'
const result2 = {
  activityId: '1',
}

describe('qs', () => {
  describe('parse', () => {
    it('test1', () => {
      const result = parse(test1)
      assert.equal(JSON.stringify(result), JSON.stringify(result1))
    })
    it('test2', () => {
      const result = parse(test2)
      assert.equal(JSON.stringify(result), JSON.stringify(result2))
    })
  })
})
