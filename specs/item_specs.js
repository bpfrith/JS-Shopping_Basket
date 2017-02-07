var assert = require('assert');
var item = require('../item');

describe('item', function(){
  it('should have a type', function(){
    assert.equal('cheese', item.cheese.type);
  });

  it('should have a price', function(){
    assert.equal(5, item.cheese.price);
  });
});
