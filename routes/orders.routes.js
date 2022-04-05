const express = require("express");
const Orders = require("../models/orders.model");
const router = express.Router();

router.get('/orders', (req, res, next) => {
	Orders.find({})
		.then((data) => {
			console.log('Got order: ' + data);
			res.json(data);
		})
		.catch(next);
});

router.get('/orders/:username', (req, res, next) => {
	console.log(`Getting orders for Username: ${req.params.username}`);
	Orders.findOne({ username: req.params.username })
		.then((data) => {
			console.log('Got orders for ' + req.params.username + ': ' + data);
			res.json(data);
		})
		.catch(next);
});

router.post("/orders", (req, res, next) => {
    if(req.body.order_id && req.body.order && req.body.addresses && req.body.order_status && req.body.username && req.body.payment_method) {
      Orders.create({
          order_id: req.body.order_id,
          order: req.body.order,
          addresses: req.body.addresses,
          order_status: req.body.order_status,
          username: req.body.username,
          payment_method: req.body.payment_method})
        .then((data) => res.json(data))
        .catch(next);
    }
    else {
      res.json({
        error: "There are empty fields",
      });
    }
  });

  router.patch('/orders/:order_id', (req, res, next) => {
    console.log(`Updating order status for ${req.params.order_id} with following data: ` + JSON.stringify(req.body.cart))
    if (req.body.order_id && req.params.order_status) {
      Orders.findOneAndUpdate({order_id: req.body.order_id}, {
        order_status
      })
      .then((data) => res.json(data))
      .catch(next);
    } else {
      res.json({
        error: 'Name or price is empty',
      });
    }
  });
  
  router.delete('/orders/:order_id', (req, res, next) => {
    Orders.findOneAndDelete({ order_id: req.params.order_id })
      .then((data) => res.json(data))
      .catch(next);
  });
          
          module.exports = router;