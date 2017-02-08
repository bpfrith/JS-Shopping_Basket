tenPercentOff = {
  discount: function(basket){
    if(basket.total === undefined){
      var subtotal = basket.calculateTotal();
    } else {
      var subtotal = basket.total;
    }

    if(subtotal > 20){
      basket.total = (subtotal * 0.9).toFixed(2);
    } else {
      basket.total = subtotal;
    }
  }
}

module.exports = tenPercentOff
