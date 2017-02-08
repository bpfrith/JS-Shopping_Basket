buyOneGetOneFree = {
  items: {},
  BOGOFItems: [],
  deduction: 0,

  addBOGOFItem: function(itemType){
    this.BOGOFItems.push(itemType);
  },

  countItems: function(basket){
    for(var item of basket.itemsInBasket){
      if(this.items[item.type] === undefined){
        this.items[item.type] = 1;
      } else {
        this.items[item.type]++;
      }
    }
  },

  calculateDeduction: function(basket){
    this.countItems(basket);

    for(var item of basket.itemsInBasket){
      if(this.items.hasOwnProperty(item.type))
      if(this.items[item.type] % 2 > 0){
        this.items[item.type] -= 1;
      }
      this.deduction += item.price * (this.items[item.type] / 2);
      this.items[item.type] -= 2;
    }
  },

  discount: function(basket){
    if(basket.total === undefined){
      basket.total = basket.calculateTotal();
    }

    this.calculateDeduction(basket);
    basket.total -= this.deduction;
    basket.total = (basket.total).toFixed(2);
  }
}

module.exports = buyOneGetOneFree;
