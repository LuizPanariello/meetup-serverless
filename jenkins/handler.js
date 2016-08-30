'use strict';

const qs = require("qs");
const commands = require("./js/commands");

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

    return cb(null, "SUCCESS");
  }else{
    return cb(new Error("Not found"));    
  }
};
