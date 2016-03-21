'use strict';

require('file?name=[name].[ext]!./public/index.html');
require("bootstrap-webpack");

require("./public/img/coldstorage-importkey.png");
require("./public/img/update-account.png");

import {Address, Aes, PrivateKey, PublicKey, Signature, key} from "@graphene/ecc"
import QRCode from 'qrcode';

let qrcodedraw = new QRCode.QRCodeDraw();

let priv = key.get_random_key()
let wif = priv.toWif()
let pub = priv.toPublicKey().toPublicKeyString()

$("#wiftext").text(wif);
$("#pubtext").text(pub);

qrcodedraw.draw(document.getElementById("wif"), wif, function(error,canvas){
  if(error){
     return console.log('Error =( ',error);
  }
  console.log('WIF QR code generated');
});

qrcodedraw.draw(document.getElementById("pub"), pub, function(error,canvas){
  if(error){
     return console.log('Error =( ',error);
  }
  console.log('PUB QR code generated');
});
