var assert = require('assert');
var basket = require('../basket');
var item = require('../item');

describe('basket', function(){
  it('should be able to hold items', function(){
    basket.addItem(item.cheese);
    assert.equal(1, basket.itemCount());
  });

    it('should be able to be emptied', function(){
      basket.addItem(item.cheese);
      basket.empty();
      assert.equal(0, basket.itemCount());

    });

    it('should be able to remove items', function(){
      basket.addItem(item.toothBrush);
      basket.removeItem('toothBrush');
      assert.equal(0, basket.itemCount());
    });

    it('should be able to calculate total', function(){
      basket.addItem(item.cheese);
      assert.equal(5.00, basket.calculateTotal());
    });

    it('should be able to have a total set', function(){
      basket.total = 20;
      assert.equal(20, basket.total);
    });

    it('should be able to have loyalty card', function(){
      assert.equal(false, basket.loyaltyCard);
      basket.loyaltyCard = true;
      assert.equal(true, basket.loyaltyCard);
    });
  });
