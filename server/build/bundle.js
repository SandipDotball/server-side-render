/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var FETCH__USER = exports.FETCH__USER = 'FETCH__USER';

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(5);

var _Home = __webpack_require__(6);

var _Home2 = _interopRequireDefault(_Home);

var _UserList = __webpack_require__(14);

var _UserList2 = _interopRequireDefault(_UserList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// function Routes() {
//   return (
//     <div>
//       <Route exact path='/' component={Home} />
//       <Route exact path='/users' component={UserList} />
//     </div>
//   );
// }

var Routes = [{
  path: '/',
  component: _Home2.default,
  exact: true
}, {
  path: '/users',
  component: _UserList2.default,
  exact: true,
  loadData: _UserList.loadData
}];

exports.default = Routes;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Home() {
  return _react2.default.createElement(
    'div',
    null,
    'This is a Home page Component Hello baby',
    ' ',
    _react2.default.createElement(
      'button',
      { onClick: function onClick() {
          return console.log('Hi');
        } },
      'CLick'
    )
  );
}

exports.default = Home;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(9);

var _reactRouterConfig = __webpack_require__(2);

var _store = __webpack_require__(10);

var _Routes = __webpack_require__(4);

var _Routes2 = _interopRequireDefault(_Routes);

var _redux = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = __webpack_require__(17);
var app = express();
var renderer = __webpack_require__(18).default;


app.use(express.static('public'));

app.get('*', function (req, res) {
  // const newStore = createStore();
  // Load data from the store
  var promiss = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref) {
    var route = _ref.route;

    return route.loadData ? route.loadData(_store.store) : null;
  });

  // ALL DATA COMING FROM SERVER WITH HTML CODE
  Promise.all(promiss).then(function () {
    res.send(renderer(req, _store.store));
  });

  // DATA COMING FROM SERVER BUT LATTER
  // res.send(renderer(req, store));
});

app.listen(3000, function () {
  console.log('Listening on port 3000');
});

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = undefined;

var _redux = __webpack_require__(1);

var _reduxThunk = __webpack_require__(11);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

var store = exports.store = (0, _redux.createStore)(_reducers.rootReducer,
//   composeEnhancers(applyMiddleware(thunk))
(0, _redux.applyMiddleware)(_reduxThunk2.default));

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rootReducer = undefined;

var _redux = __webpack_require__(1);

var _userReducer = __webpack_require__(13);

var _userReducer2 = _interopRequireDefault(_userReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = exports.rootReducer = (0, _redux.combineReducers)({
  users: _userReducer2.default
});

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actionTypes = __webpack_require__(3);

var userReducer = function userReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case _actionTypes.FETCH__USER:
      return action.payload;
    default:
      return state;
  }
};

exports.default = userReducer;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadData = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(7);

var _userActions = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserList = function (_Component) {
  _inherits(UserList, _Component);

  function UserList() {
    _classCallCheck(this, UserList);

    return _possibleConstructorReturn(this, (UserList.__proto__ || Object.getPrototypeOf(UserList)).apply(this, arguments));
  }

  _createClass(UserList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.loadUser();
    }
  }, {
    key: 'render',
    value: function render() {
      var users = this.props.users;

      return _react2.default.createElement(
        'div',
        { className: 'UserList' },
        _react2.default.createElement(
          'h3',
          null,
          'Here\'s a big list of user'
        ),
        _react2.default.createElement(
          'ul',
          null,
          users && users.length && users.map(function (user) {
            return _react2.default.createElement(
              'li',
              { key: user.id },
              user.name
            );
          })
        )
      );
    }
  }]);

  return UserList;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    users: state.users
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    loadUser: function loadUser() {
      return dispatch((0, _userActions.fetchUsers)());
    }
  };
};

var loadData = exports.loadData = function loadData(store) {
  console.dir('We need load Data from Users');
  return store.dispatch((0, _userActions.fetchUsers)());
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(UserList);

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchUsers = undefined;

var _axios = __webpack_require__(16);

var _axios2 = _interopRequireDefault(_axios);

var _actionTypes = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var fetchUsers = exports.fetchUsers = function fetchUsers() {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _axios2.default.get('https://react-ssr-api.herokuapp.com/users');

            case 2:
              res = _context.sent;

              try {
                dispatch({
                  type: _actionTypes.FETCH__USER,
                  payload: res.data
                });
              } catch (error) {
                console.log(error);
              }

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(19);

var _Home = __webpack_require__(6);

var _Home2 = _interopRequireDefault(_Home);

var _reactRouterDom = __webpack_require__(5);

var _reactRouterConfig = __webpack_require__(2);

var _Routes = __webpack_require__(4);

var _Routes2 = _interopRequireDefault(_Routes);

var _reactRedux = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var context = {};

exports.default = function (req, store) {
  var content = (0, _server.renderToString)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { context: context, location: req.path },
      _react2.default.createElement(
        'div',
        null,
        (0, _reactRouterConfig.renderRoutes)(_Routes2.default)
      )
    )
  ));
  var html = '<!DOCTYPE html>\n  <html lang="en">\n  <head>\n    <meta charset="UTF-8"/>\n    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>\n    <title>Document</title>\n  </head>\n  <body>\n    <div id="root">' + content + '</div>\n    <script src="bundle.js"></script>\n  </body>\n  </html>';
  return html;
};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ })
/******/ ]);