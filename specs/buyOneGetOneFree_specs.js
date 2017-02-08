var assert = require('assert');
var bogof = require('../buyOneGetOneFree');
var basket = require('../basket');
var item = require('../item');

describe('bogof', function(){
  it('should be able to count items', function(){
    basket.empty();
    basket.total = undefined;
    basket.addItem(item.cheese);
    basket.addItem(item.cheese);
    basket.addItem(item.cheese);
    bogof.items = {};
    bogof.countItems(basket);
    assert.equal(3, bogof.items['cheese']);
  });

  it('should be able to calculate the deduction', function(){
    basket.empty();
    basket.total = undefined;
    bogof.deduction = 0;
    basket.addItem(item.cheese);
    basket.addItem(item.cheese);
    basket.addItem(item.cheese);
    basket.addItem(item.cheese);
    basket.addItem(item.toothBrush);
    bogof.items = {};
    bogof.addBOGOFItem(item.cheese);
    bogof.calculateDeduction(basket);
    assert.equal(10.00, bogof.deduction.toFixed(2));
  });

  it('should perform bogof on a basket', function(){
    basket.empty();
    basket.total = undefined;
    bogof.items = {}
    bogof.deduction = 0;
    basket.addItem(item.cheese);
    basket.addItem(item.cheese);
    basket.addItem(item.cheese);
    basket.addItem(item.cheese);
    basket.addItem(item.toothBrush);
    basket.dealCheck(bogof);
    assert.equal(13.00, basket.total);
  });
});
