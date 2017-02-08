var assert = require('assert');
var tenPercentOff = require('../tenPercentOff');
var basket = require('../basket');
var item = require('../item');

describe('ten percent off', function(){
  it('should reduce total by 10% if subtotal is greater than 20', function(){
    basket.empty();
    basket.total = undefined;
    basket.addItem(item.cheese);
    basket.addItem(item.cheese);
    basket.addItem(item.cheese);
    basket.addItem(item.cheese);
    basket.addItem(item.toothBrush);
    basket.dealCheck(tenPercentOff);
    assert.equal(20.70, basket.total);
  });

  it('should not reduce a total of less than 20', function(){
    basket.empty();
    basket.total = undefined;
    basket.addItem(item.cheese);
    basket.dealCheck(tenPercentOff);
    assert.equal(5.00, basket.total);
  });
});
