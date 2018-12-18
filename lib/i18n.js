"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
 * Copyright (c) 2018, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

var i18nConfig = {
  "en-US": {
    "Type the link and press enter": "Type the link and press enter",
    "Invalid Link": "Invalid Link",
    "Can't show plugin, component {{type}} not found.": "Can't show plugin, component {{type}} not found.",
    "Block List": "Block List"
  },
  "pt-BR": {
    "Type the link and press enter": "Digite o link e pressione enter",
    "Invalid Link": "Link inválido",
    "Can't show plugin, component {{type}} not found.": "Não é possível exibir o plugin, componente {{type}} não encontrado",
    "Block List": "Lista de Blocos"
  }
};

var replaceData = exports.replaceData = function replaceData(str, data) {
  var rgx = /{{\s?(\w+)\s?}}/gm;
  var msg = str;
  msg = msg.replace(rgx, function (_, key) {
    return data[key];
  });
  return msg;
};

exports.default = i18nConfig;