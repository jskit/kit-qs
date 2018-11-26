// import { expect } from 'chai';
import assert from 'assert'
import { describe, it } from 'mocha'
import compat from '../src/compat'

let temp;
const result1 = {
  from: 'singlemessage',
  isappinstalled: '0',
  t3: null,
  t4: 0,
  id: '646156',
  platform: '5',
}
const test1 = {
  from: 'singlemessage',
  isappinstalled: '0',
  t1: '',
  t2: temp,
  t3: null,
  t4: 0,
  id: '646156',
  platform: '5',
}

describe('kit-qs', () => {
  describe('compat', () => {
    it('test1', () => {
      const result = compat(test1)
      assert.equal(JSON.stringify(result), JSON.stringify(result1))
    })
    // it('test2', () => {
    //   const result = compat(test2)
    //   assert.equal(result, result2)
    // })
  })
})
