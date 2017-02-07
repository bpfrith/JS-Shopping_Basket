var assert = require('assert');
var loyaltyDiscount = require('../loyaltyCard');
var basket = require('../basket');
var item = require('../item')

describe('five percent off with loyalty card', function(){
  it('should reduce subtotal by 5%', function(){
    basket.empty();
    basket.total = undefined;
    basket.loyaltyCard = true;
    basket.addItem(item.cheese);
    basket.addItem(item.cheese);
    basket.addItem(item.toothBrush);
    basket.dealCheck(loyaltyCard);
    assert.equal(12.35, basket.finalTotal);
  });
});
