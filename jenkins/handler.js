'use strict';

const qs = require("qs");

module.exports.handler = (event, context, cb) => {

  const prepareJsonFromString = (text) => {
    if(typeof text === "string"){
      return qs.parse(text);
    }else{
      return text;
    }
  };

  if(event.method === "POST"){
    let obj = prepareJsonFromString(event.payload);

    return cb(null, "SUCCESS");
  }else{
    return cb(new Error("Not found"));    
  }
};
