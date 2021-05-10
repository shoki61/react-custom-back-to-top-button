

function ___$insertStyle(css) {
  if (!css) {
    return;
  }
  if (typeof window === 'undefined') {
    return;
  }

  var style = document.createElement('style');

  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);
  return css;
}

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var reactTransitionGroup = require('react-transition-group');
var KeyboardArrowUpIcon = require('@material-ui/icons/KeyboardArrowUp');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () {
                        return e[k];
                    }
                });
            }
        });
    }
    n['default'] = e;
    return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);
var KeyboardArrowUpIcon__default = /*#__PURE__*/_interopDefaultLegacy(KeyboardArrowUpIcon);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

___$insertStyle(".CustomBackToTopButton {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  position: fixed;\n  z-index: 25000;\n  outline: none;\n  cursor: pointer;\n}\n\n.backToTopButton-enter {\n  opacity: 0;\n  transform: scale(0.9);\n}\n\n.backToTopButton-enter-active {\n  opacity: 1;\n  transform: translateX(0);\n  transition: opacity 300ms, transform 300ms;\n}\n\n.backToTopButton-exit {\n  opacity: 1;\n}\n\n.backToTopButton-exit-active {\n  opacity: 0;\n  transform: scale(0.9);\n  transition: opacity 300ms, transform 300ms;\n}");

var useState = React__namespace.useState;
var App = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.toShow, toShow = _c === void 0 ? 300 : _c, _d = _a.fontSize, fontSize = _d === void 0 ? 16 : _d, _e = _a.showIcon, showIcon = _e === void 0 ? true : _e, _f = _a.width, width = _f === void 0 ? '3rem' : _f, _g = _a.height, height = _g === void 0 ? '3rem' : _g, _h = _a.bottom, bottom = _h === void 0 ? 45 : _h, _j = _a.right, right = _j === void 0 ? 45 : _j, _k = _a.left, left = _k === void 0 ? '' : _k, _l = _a.icon, icon = _l === void 0 ? React__namespace.createElement(KeyboardArrowUpIcon__default['default'], { style: { fontSize: 25 } }) : _l, _m = _a.style, style = _m === void 0 ? {} : _m, _o = _a.backgroundColor, backgroundColor = _o === void 0 ? '#363636' : _o, _p = _a.color, color = _p === void 0 ? '#fff' : _p, _q = _a.borderRadius, borderRadius = _q === void 0 ? 100 : _q, _r = _a.children, children = _r === void 0 ? null : _r;
    var _s = useState(false), show = _s[0], setShow = _s[1];
    var backToTop = function () { return window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }); };
    var handleScroll = function () { return setShow(window.scrollY > toShow); };
    window.addEventListener('scroll', handleScroll);
    return React__namespace.createElement(reactTransitionGroup.CSSTransition, { in: show, timeout: 200, classNames: "backToTopButton", unmountOnExit: true },
        React__namespace.createElement("button", { style: __assign({ backgroundColor: backgroundColor,
                color: color,
                borderRadius: borderRadius,
                fontSize: fontSize,
                width: width,
                height: height,
                right: right,
                left: left,
                bottom: bottom }, style), className: "CustomBackToTopButton " + className, onClick: backToTop },
            showIcon && icon,
            children));
};

exports.default = App;
//# sourceMappingURL=index.js.map
