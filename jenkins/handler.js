'use strict';

const qs = require("qs");
const commands = require("./js/commands")();
const rp = require("request-promise");

module.exports.handler = (event, context, cb) => {

  const prepareJsonFromString = (text) => {
    if(typeof text === "string"){
      return qs.parse(text);
    }else{
      return text;
    }
  };

  if(event.method === "POST"){
    let data = prepareJsonFromString(event.payload);
    console.log(data);
    
    if(data.token === process.env.TOKEN){
      if(typeof commands[data.text] === "undefined") 
        return cb();
      
      commands[data.text](data.text.split(" ")[1], function(err, data){
        if (err){ return cb(err);  }
        return cb(null, data);
      });

    }else{
      return cb(new Error("TOKEN INVALID"));
    }
  }else{
    return cb(new Error("Not found")); 
  }
};