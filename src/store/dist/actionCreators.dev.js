"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTodoList = exports.getListAction = exports.deleteItemAction = exports.addItemAction = exports.changeInputAction = void 0;

var _actionType = require("./actionType");

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var changeInputAction = function changeInputAction(value) {
  return {
    type: _actionType.CHANGE_INPUT,
    value: value
  };
};

exports.changeInputAction = changeInputAction;

var addItemAction = function addItemAction(value) {
  return {
    type: _actionType.ADD_ITEM
  };
};

exports.addItemAction = addItemAction;

var deleteItemAction = function deleteItemAction(index) {
  return {
    type: _actionType.DELETE_ITEM,
    index: index
  };
};

exports.deleteItemAction = deleteItemAction;

var getListAction = function getListAction(data) {
  return {
    type: _actionType.GET_LIST,
    data: data
  };
};

exports.getListAction = getListAction;

var getTodoList = function getTodoList() {
  return function (dispatch) {
    _axios["default"].get('https://www.easy-mock.com/mock/5f47dd07cad6947846f0009b/learn/list').then(function (res) {
      var data = res.data;
      var action = getListAction(data);
      dispatch(action);
    });
  };
};

exports.getTodoList = getTodoList;