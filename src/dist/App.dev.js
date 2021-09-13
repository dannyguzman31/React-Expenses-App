"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Expenses = _interopRequireDefault(require("./components/Expenses/Expenses"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var App = function App() {
  var expenses = [{
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14)
  }, {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12)
  }, {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28)
  }, {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12)
  }]; // Method 1: 
  // return (
  //   <div>
  //     <h2>Let's get started!</h2>
  //     <Expenses items={expenses}/>
  //   </div>
  // );
  // Method 2: 

  return _react["default"].createElement('div', {}, _react["default"].createElement('h2', {}, "Let's get started!"), _react["default"].createElement(_Expenses["default"], {
    items: expenses
  }));
};

var _default = App;
exports["default"] = _default;