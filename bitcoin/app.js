var express = require("express");
var app = express();
var request = require("request");

  request({
    url:"https://blockchain.info/stats?format=json",
    json:true
  }, function(error, response, body){
      btcPrice = body.market_price_usd;
      btcBlocks = body.n_blocks_total;
  });

  app.get("/", function(req, res){
    res.send("bitcoin to the moon : " + btcPrice);
  });

  app.get("/block", function(req, res){
    res.send("current blockheight : " + btcBlocks);
  });

  app.listen(80, function(){
    console.log("go");
  });
