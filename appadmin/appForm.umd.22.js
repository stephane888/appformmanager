((typeof self !== 'undefined' ? self : this)["webpackJsonpappForm"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpappForm"] || []).push([[22],{

/***/ "10b2":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "30eb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_userlogin_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("10b2");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_userlogin_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_userlogin_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "4c93":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return alpha; });
/* unused harmony export alpha_dash */
/* unused harmony export alpha_num */
/* unused harmony export alpha_spaces */
/* unused harmony export between */
/* unused harmony export confirmed */
/* unused harmony export digits */
/* unused harmony export dimensions */
/* unused harmony export double */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return email; });
/* unused harmony export excluded */
/* unused harmony export ext */
/* unused harmony export image */
/* unused harmony export integer */
/* unused harmony export is */
/* unused harmony export is_not */
/* unused harmony export length */
/* unused harmony export max */
/* unused harmony export max_value */
/* unused harmony export mimes */
/* unused harmony export min */
/* unused harmony export min_value */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return numeric; });
/* unused harmony export oneOf */
/* unused harmony export regex */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return required; });
/* unused harmony export required_if */
/* unused harmony export size */
/**
  * vee-validate v3.4.13
  * (c) 2021 Abdelrahman Awad
  * @license MIT
  */
/**
 * Some Alpha Regex helpers.
 * https://github.com/chriso/validator.js/blob/master/src/lib/alpha.js
 */
/* eslint-disable no-misleading-character-class */
var alpha$1 = {
    en: /^[A-Z]*$/i,
    cs: /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,
    da: /^[A-ZÆØÅ]*$/i,
    de: /^[A-ZÄÖÜß]*$/i,
    es: /^[A-ZÁÉÍÑÓÚÜ]*$/i,
    fa: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی]*$/,
    fr: /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,
    it: /^[A-Z\xC0-\xFF]*$/i,
    lt: /^[A-ZĄČĘĖĮŠŲŪŽ]*$/i,
    nl: /^[A-ZÉËÏÓÖÜ]*$/i,
    hu: /^[A-ZÁÉÍÓÖŐÚÜŰ]*$/i,
    pl: /^[A-ZĄĆĘŚŁŃÓŻŹ]*$/i,
    pt: /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,
    ro: /^[A-ZĂÂÎŞŢ]*$/i,
    ru: /^[А-ЯЁ]*$/i,
    sk: /^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,
    sr: /^[A-ZČĆŽŠĐ]*$/i,
    sv: /^[A-ZÅÄÖ]*$/i,
    tr: /^[A-ZÇĞİıÖŞÜ]*$/i,
    uk: /^[А-ЩЬЮЯЄІЇҐ]*$/i,
    ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/,
    az: /^[A-ZÇƏĞİıÖŞÜ]*$/i,
    el: /^[Α-ώ]*$/i,
    ja: /^[A-Z\u3000-\u303F\u3040-\u309F\u30A0-\u30FF\uFF00-\uFFEF\u4E00-\u9FAF]*$/i,
    he: /^[A-Z\u05D0-\u05EA']*$/i
};
var alphaSpaces = {
    en: /^[A-Z\s]*$/i,
    cs: /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ\s]*$/i,
    da: /^[A-ZÆØÅ\s]*$/i,
    de: /^[A-ZÄÖÜß\s]*$/i,
    es: /^[A-ZÁÉÍÑÓÚÜ\s]*$/i,
    fa: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی]*$/,
    fr: /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ\s]*$/i,
    it: /^[A-Z\xC0-\xFF\s]*$/i,
    lt: /^[A-ZĄČĘĖĮŠŲŪŽ\s]*$/i,
    nl: /^[A-ZÉËÏÓÖÜ\s]*$/i,
    hu: /^[A-ZÁÉÍÓÖŐÚÜŰ\s]*$/i,
    pl: /^[A-ZĄĆĘŚŁŃÓŻŹ\s]*$/i,
    pt: /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ\s]*$/i,
    ro: /^[A-ZĂÂÎŞŢ\s]*$/i,
    ru: /^[А-ЯЁ\s]*$/i,
    sk: /^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ\s]*$/i,
    sr: /^[A-ZČĆŽŠĐ\s]*$/i,
    sv: /^[A-ZÅÄÖ\s]*$/i,
    tr: /^[A-ZÇĞİıÖŞÜ\s]*$/i,
    uk: /^[А-ЩЬЮЯЄІЇҐ\s]*$/i,
    ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ\s]*$/,
    az: /^[A-ZÇƏĞİıÖŞÜ\s]*$/i,
    el: /^[Α-ώ\s]*$/i,
    ja: /^[A-Z\u3000-\u303F\u3040-\u309F\u30A0-\u30FF\uFF00-\uFFEF\u4E00-\u9FAF\s]*$/i,
    he: /^[A-Z\u05D0-\u05EA'\s]*$/i
};
var alphanumeric = {
    en: /^[0-9A-Z]*$/i,
    cs: /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,
    da: /^[0-9A-ZÆØÅ]$/i,
    de: /^[0-9A-ZÄÖÜß]*$/i,
    es: /^[0-9A-ZÁÉÍÑÓÚÜ]*$/i,
    fa: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی]*$/,
    fr: /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,
    it: /^[0-9A-Z\xC0-\xFF]*$/i,
    lt: /^[0-9A-ZĄČĘĖĮŠŲŪŽ]*$/i,
    hu: /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]*$/i,
    nl: /^[0-9A-ZÉËÏÓÖÜ]*$/i,
    pl: /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]*$/i,
    pt: /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,
    ro: /^[0-9A-ZĂÂÎŞŢ]*$/i,
    ru: /^[0-9А-ЯЁ]*$/i,
    sk: /^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,
    sr: /^[0-9A-ZČĆŽŠĐ]*$/i,
    sv: /^[0-9A-ZÅÄÖ]*$/i,
    tr: /^[0-9A-ZÇĞİıÖŞÜ]*$/i,
    uk: /^[0-9А-ЩЬЮЯЄІЇҐ]*$/i,
    ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/,
    az: /^[0-9A-ZÇƏĞİıÖŞÜ]*$/i,
    el: /^[0-9Α-ώ]*$/i,
    ja: /^[0-9A-Z\u3000-\u303F\u3040-\u309F\u30A0-\u30FF\uFF00-\uFFEF\u4E00-\u9FAF]*$/i,
    he: /^[0-9A-Z\u05D0-\u05EA']*$/i
};
var alphaDash = {
    en: /^[0-9A-Z_-]*$/i,
    cs: /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ_-]*$/i,
    da: /^[0-9A-ZÆØÅ_-]*$/i,
    de: /^[0-9A-ZÄÖÜß_-]*$/i,
    es: /^[0-9A-ZÁÉÍÑÓÚÜ_-]*$/i,
    fa: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی]*$/,
    fr: /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ_-]*$/i,
    it: /^[0-9A-Z\xC0-\xFF_-]*$/i,
    lt: /^[0-9A-ZĄČĘĖĮŠŲŪŽ_-]*$/i,
    nl: /^[0-9A-ZÉËÏÓÖÜ_-]*$/i,
    hu: /^[0-9A-ZÁÉÍÓÖŐÚÜŰ_-]*$/i,
    pl: /^[0-9A-ZĄĆĘŚŁŃÓŻŹ_-]*$/i,
    pt: /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ_-]*$/i,
    ro: /^[0-9A-ZĂÂÎŞŢ_-]*$/i,
    ru: /^[0-9А-ЯЁ_-]*$/i,
    sk: /^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ_-]*$/i,
    sr: /^[0-9A-ZČĆŽŠĐ_-]*$/i,
    sv: /^[0-9A-ZÅÄÖ_-]*$/i,
    tr: /^[0-9A-ZÇĞİıÖŞÜ_-]*$/i,
    uk: /^[0-9А-ЩЬЮЯЄІЇҐ_-]*$/i,
    ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ_-]*$/,
    az: /^[0-9A-ZÇƏĞİıÖŞÜ_-]*$/i,
    el: /^[0-9Α-ώ_-]*$/i,
    ja: /^[0-9A-Z\u3000-\u303F\u3040-\u309F\u30A0-\u30FF\uFF00-\uFFEF\u4E00-\u9FAF_-]*$/i,
    he: /^[0-9A-Z\u05D0-\u05EA'_-]*$/i
};

var validate$r = function (value, _a) {
    var _b = (_a === void 0 ? {} : _a).locale, locale = _b === void 0 ? '' : _b;
    if (Array.isArray(value)) {
        return value.every(function (val) { return validate$r(val, { locale: locale }); });
    }
    // Match at least one locale.
    if (!locale) {
        return Object.keys(alpha$1).some(function (loc) { return alpha$1[loc].test(value); });
    }
    return (alpha$1[locale] || alpha$1.en).test(value);
};
var params$k = [
    {
        name: 'locale'
    }
];
var alpha = {
    validate: validate$r,
    params: params$k
};

var validate$q = function (value, _a) {
    var _b = (_a === void 0 ? {} : _a).locale, locale = _b === void 0 ? '' : _b;
    if (Array.isArray(value)) {
        return value.every(function (val) { return validate$q(val, { locale: locale }); });
    }
    // Match at least one locale.
    if (!locale) {
        return Object.keys(alphaDash).some(function (loc) { return alphaDash[loc].test(value); });
    }
    return (alphaDash[locale] || alphaDash.en).test(value);
};
var params$j = [
    {
        name: 'locale'
    }
];
var alpha_dash = {
    validate: validate$q,
    params: params$j
};

var validate$p = function (value, _a) {
    var _b = (_a === void 0 ? {} : _a).locale, locale = _b === void 0 ? '' : _b;
    if (Array.isArray(value)) {
        return value.every(function (val) { return validate$p(val, { locale: locale }); });
    }
    // Match at least one locale.
    if (!locale) {
        return Object.keys(alphanumeric).some(function (loc) { return alphanumeric[loc].test(value); });
    }
    return (alphanumeric[locale] || alphanumeric.en).test(value);
};
var params$i = [
    {
        name: 'locale'
    }
];
var alpha_num = {
    validate: validate$p,
    params: params$i
};

var validate$o = function (value, _a) {
    var _b = (_a === void 0 ? {} : _a).locale, locale = _b === void 0 ? '' : _b;
    if (Array.isArray(value)) {
        return value.every(function (val) { return validate$o(val, { locale: locale }); });
    }
    // Match at least one locale.
    if (!locale) {
        return Object.keys(alphaSpaces).some(function (loc) { return alphaSpaces[loc].test(value); });
    }
    return (alphaSpaces[locale] || alphaSpaces.en).test(value);
};
var params$h = [
    {
        name: 'locale'
    }
];
var alpha_spaces = {
    validate: validate$o,
    params: params$h
};

var validate$n = function (value, _a) {
    var _b = _a === void 0 ? {} : _a, min = _b.min, max = _b.max;
    if (Array.isArray(value)) {
        return value.every(function (val) { return !!validate$n(val, { min: min, max: max }); });
    }
    return Number(min) <= value && Number(max) >= value;
};
var params$g = [
    {
        name: 'min'
    },
    {
        name: 'max'
    }
];
var between = {
    validate: validate$n,
    params: params$g
};

var validate$m = function (value, _a) {
    var target = _a.target;
    return String(value) === String(target);
};
var params$f = [
    {
        name: 'target',
        isTarget: true
    }
];
var confirmed = {
    validate: validate$m,
    params: params$f
};

var validate$l = function (value, _a) {
    var length = _a.length;
    if (Array.isArray(value)) {
        return value.every(function (val) { return validate$l(val, { length: length }); });
    }
    var strVal = String(value);
    return /^[0-9]*$/.test(strVal) && strVal.length === length;
};
var params$e = [
    {
        name: 'length',
        cast: function (value) {
            return Number(value);
        }
    }
];
var digits = {
    validate: validate$l,
    params: params$e
};

var validateImage = function (file, width, height) {
    var URL = window.URL || window.webkitURL;
    return new Promise(function (resolve) {
        var image = new Image();
        image.onerror = function () { return resolve(false); };
        image.onload = function () { return resolve(image.width === width && image.height === height); };
        image.src = URL.createObjectURL(file);
    });
};
var validate$k = function (files, _a) {
    var width = _a.width, height = _a.height;
    var list = [];
    files = Array.isArray(files) ? files : [files];
    for (var i = 0; i < files.length; i++) {
        // if file is not an image, reject.
        if (!/\.(jpg|svg|jpeg|png|bmp|gif)$/i.test(files[i].name)) {
            return Promise.resolve(false);
        }
        list.push(files[i]);
    }
    return Promise.all(list.map(function (file) { return validateImage(file, width, height); })).then(function (values) {
        return values.every(function (v) { return v; });
    });
};
var params$d = [
    {
        name: 'width',
        cast: function (value) {
            return Number(value);
        }
    },
    {
        name: 'height',
        cast: function (value) {
            return Number(value);
        }
    }
];
var dimensions = {
    validate: validate$k,
    params: params$d
};

var validate$j = function (value, _a) {
    var multiple = (_a === void 0 ? {} : _a).multiple;
    // eslint-disable-next-line
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (multiple && !Array.isArray(value)) {
        value = String(value)
            .split(',')
            .map(function (emailStr) { return emailStr.trim(); });
    }
    if (Array.isArray(value)) {
        return value.every(function (val) { return re.test(String(val)); });
    }
    return re.test(String(value));
};
var params$c = [
    {
        name: 'multiple',
        default: false
    }
];
var email = {
    validate: validate$j,
    params: params$c
};

function isNullOrUndefined(value) {
    return value === null || value === undefined;
}
function isEmptyArray(arr) {
    return Array.isArray(arr) && arr.length === 0;
}
// eslint-disable-next-line @typescript-eslint/ban-types
function isCallable(fn) {
    return typeof fn === 'function';
}

function includes(collection, item) {
    return collection.indexOf(item) !== -1;
}
/**
 * Converts an array-like object to array, provides a simple polyfill for Array.from
 */
function toArray(arrayLike) {
    if (isCallable(Array.from)) {
        return Array.from(arrayLike);
    }
    /* istanbul ignore next */
    return _copyArray(arrayLike);
}
/* istanbul ignore next */
function _copyArray(arrayLike) {
    var array = [];
    var length = arrayLike.length;
    for (var i = 0; i < length; i++) {
        array.push(arrayLike[i]);
    }
    return array;
}

var validate$i = function (value, options) {
    if (Array.isArray(value)) {
        return value.every(function (val) { return validate$i(val, options); });
    }
    return toArray(options).some(function (item) {
        // eslint-disable-next-line
        return item == value;
    });
};
var oneOf = {
    validate: validate$i
};

var validate$h = function (value, args) {
    return !validate$i(value, args);
};
var excluded = {
    validate: validate$h
};

var validate$g = function (files, extensions) {
    var regex = new RegExp(".(" + extensions.join('|') + ")$", 'i');
    if (Array.isArray(files)) {
        return files.every(function (file) { return regex.test(file.name); });
    }
    return regex.test(files.name);
};
var ext = {
    validate: validate$g
};

var validate$f = function (files) {
    var regex = /\.(jpg|svg|jpeg|png|bmp|gif|webp)$/i;
    if (Array.isArray(files)) {
        return files.every(function (file) { return regex.test(file.name); });
    }
    return regex.test(files.name);
};
var image = {
    validate: validate$f
};

var validate$e = function (value) {
    if (Array.isArray(value)) {
        return value.every(function (val) { return /^-?[0-9]+$/.test(String(val)); });
    }
    return /^-?[0-9]+$/.test(String(value));
};
var integer = {
    validate: validate$e
};

var validate$d = function (value, _a) {
    var other = _a.other;
    return value === other;
};
var params$b = [
    {
        name: 'other'
    }
];
var is = {
    validate: validate$d,
    params: params$b
};

var validate$c = function (value, _a) {
    var other = _a.other;
    return value !== other;
};
var params$a = [
    {
        name: 'other'
    }
];
var is_not = {
    validate: validate$c,
    params: params$a
};

var validate$b = function (value, _a) {
    var length = _a.length;
    if (isNullOrUndefined(value)) {
        return false;
    }
    if (typeof value === 'string') {
        value = toArray(value);
    }
    if (typeof value === 'number') {
        value = String(value);
    }
    if (!value.length) {
        value = toArray(value);
    }
    return value.length === length;
};
var params$9 = [
    {
        name: 'length',
        cast: function (value) { return Number(value); }
    }
];
var length = {
    validate: validate$b,
    params: params$9
};

var validate$a = function (value, _a) {
    var length = _a.length;
    if (isNullOrUndefined(value)) {
        return length >= 0;
    }
    if (Array.isArray(value)) {
        return value.every(function (val) { return validate$a(val, { length: length }); });
    }
    return String(value).length <= length;
};
var params$8 = [
    {
        name: 'length',
        cast: function (value) {
            return Number(value);
        }
    }
];
var max = {
    validate: validate$a,
    params: params$8
};

var validate$9 = function (value, _a) {
    var max = _a.max;
    if (isNullOrUndefined(value) || value === '') {
        return false;
    }
    if (Array.isArray(value)) {
        return value.length > 0 && value.every(function (val) { return validate$9(val, { max: max }); });
    }
    return Number(value) <= max;
};
var params$7 = [
    {
        name: 'max',
        cast: function (value) {
            return Number(value);
        }
    }
];
var max_value = {
    validate: validate$9,
    params: params$7
};

var validate$8 = function (files, mimes) {
    var regex = new RegExp(mimes.join('|').replace('*', '.+') + "$", 'i');
    if (Array.isArray(files)) {
        return files.every(function (file) { return regex.test(file.type); });
    }
    return regex.test(files.type);
};
var mimes = {
    validate: validate$8
};

var validate$7 = function (value, _a) {
    var length = _a.length;
    if (isNullOrUndefined(value)) {
        return false;
    }
    if (Array.isArray(value)) {
        return value.every(function (val) { return validate$7(val, { length: length }); });
    }
    return String(value).length >= length;
};
var params$6 = [
    {
        name: 'length',
        cast: function (value) {
            return Number(value);
        }
    }
];
var min = {
    validate: validate$7,
    params: params$6
};

var validate$6 = function (value, _a) {
    var min = _a.min;
    if (isNullOrUndefined(value) || value === '') {
        return false;
    }
    if (Array.isArray(value)) {
        return value.length > 0 && value.every(function (val) { return validate$6(val, { min: min }); });
    }
    return Number(value) >= min;
};
var params$5 = [
    {
        name: 'min',
        cast: function (value) {
            return Number(value);
        }
    }
];
var min_value = {
    validate: validate$6,
    params: params$5
};

var ar = /^[٠١٢٣٤٥٦٧٨٩]+$/;
var en = /^[0-9]+$/;
var validate$5 = function (value) {
    var testValue = function (val) {
        var strValue = String(val);
        return en.test(strValue) || ar.test(strValue);
    };
    if (Array.isArray(value)) {
        return value.every(testValue);
    }
    return testValue(value);
};
var numeric = {
    validate: validate$5
};

var validate$4 = function (value, _a) {
    var regex = _a.regex;
    if (Array.isArray(value)) {
        return value.every(function (val) { return validate$4(val, { regex: regex }); });
    }
    return regex.test(String(value));
};
var params$4 = [
    {
        name: 'regex',
        cast: function (value) {
            if (typeof value === 'string') {
                return new RegExp(value);
            }
            return value;
        }
    }
];
var regex = {
    validate: validate$4,
    params: params$4
};

var validate$3 = function (value, _a) {
    var allowFalse = (_a === void 0 ? { allowFalse: true } : _a).allowFalse;
    var result = {
        valid: false,
        required: true
    };
    if (isNullOrUndefined(value) || isEmptyArray(value)) {
        return result;
    }
    // incase a field considers `false` as an empty value like checkboxes.
    if (value === false && !allowFalse) {
        return result;
    }
    result.valid = !!String(value).trim().length;
    return result;
};
var computesRequired$1 = true;
var params$3 = [
    {
        name: 'allowFalse',
        default: true
    }
];
var required = {
    validate: validate$3,
    params: params$3,
    computesRequired: computesRequired$1
};

var testEmpty = function (value) {
    return isEmptyArray(value) || includes([false, null, undefined], value) || !String(value).trim().length;
};
var validate$2 = function (value, _a) {
    var target = _a.target, values = _a.values;
    var required;
    if (values && values.length) {
        if (!Array.isArray(values) && typeof values === 'string') {
            values = [values];
        }
        // eslint-disable-next-line
        required = values.some(function (val) { return val == String(target).trim(); });
    }
    else {
        required = !testEmpty(target);
    }
    if (!required) {
        return {
            valid: true,
            required: required
        };
    }
    return {
        valid: !testEmpty(value),
        required: required
    };
};
var params$2 = [
    {
        name: 'target',
        isTarget: true
    },
    {
        name: 'values'
    }
];
var computesRequired = true;
var required_if = {
    validate: validate$2,
    params: params$2,
    computesRequired: computesRequired
};

var validate$1 = function (files, _a) {
    var size = _a.size;
    if (isNaN(size)) {
        return false;
    }
    var nSize = size * 1024;
    if (!Array.isArray(files)) {
        return files.size <= nSize;
    }
    for (var i = 0; i < files.length; i++) {
        if (files[i].size > nSize) {
            return false;
        }
    }
    return true;
};
var params$1 = [
    {
        name: 'size',
        cast: function (value) {
            return Number(value);
        }
    }
];
var size = {
    validate: validate$1,
    params: params$1
};

var validate = function (value, params) {
    var _a = params || {}, _b = _a.decimals, decimals = _b === void 0 ? 0 : _b, _c = _a.separator, separator = _c === void 0 ? 'dot' : _c;
    var delimiterRegexPart = separator === 'comma' ? ',?' : '\\.?';
    var decimalRegexPart = decimals === 0 ? '\\d*' : "(\\d{" + decimals + "})?";
    var regex = new RegExp("^-?\\d+" + delimiterRegexPart + decimalRegexPart + "$");
    return Array.isArray(value) ? value.every(function (val) { return regex.test(String(val)); }) : regex.test(String(value));
};
var params = [
    {
        name: 'decimals',
        default: 0
    },
    {
        name: 'separator',
        default: 'dot'
    }
];
var double = {
    validate: validate,
    params: params
};




/***/ }),

/***/ "b6d1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _siteweb_AppVuejs_app_form_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f3f3");
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("7bb1");
/* harmony import */ var vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4c93");


 // No message specified.

Object(vee_validate__WEBPACK_IMPORTED_MODULE_1__[/* extend */ "c"])("email", vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_2__[/* email */ "b"]); // Override the default message.

Object(vee_validate__WEBPACK_IMPORTED_MODULE_1__[/* extend */ "c"])("required", Object(_siteweb_AppVuejs_app_form_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(_siteweb_AppVuejs_app_form_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_2__[/* required */ "d"]), {}, {
  message: "Ce champs est requis"
}));
Object(vee_validate__WEBPACK_IMPORTED_MODULE_1__[/* extend */ "c"])("alpha", vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_2__[/* alpha */ "a"]);
Object(vee_validate__WEBPACK_IMPORTED_MODULE_1__[/* extend */ "c"])("alpha", vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_2__[/* numeric */ "c"]); //export default extend;

/***/ }),

/***/ "be10":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"38d0f794-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/input/userlogin.vue?vue&type=template&id=ffbb543e&lang=html&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:!_vm.validationField && _vm.mode ? 'mb-5' : ''},[(_vm.validationField && (!_vm.uid || (_vm.uid && _vm.mode)))?_c('transition',{attrs:{"name":"fade"}},[_c('form',{ref:"form_userlogin",staticClass:"form-userlogin choice-section min-height",on:{"submit":function($event){$event.stopPropagation();$event.preventDefault();return _vm.handleSubmit.apply(null, arguments)}}},[_c('ul',{staticClass:"d-flex p-0 mx-0 select-tab"},[_c('li',{staticClass:"item",class:[_vm.current_tab === 'register' ? 'active' : ''],on:{"click":function($event){return _vm.select_tab('register')}}},[_vm._v(" Creer un compte ... ")]),_c('li',{staticClass:"item",class:[_vm.current_tab !== 'register' ? 'active' : ''],on:{"click":function($event){return _vm.select_tab('login')}}},[_vm._v(" Se connecter ")])]),_c('b-row',{staticClass:"rs-login"},[_c('b-col',{attrs:{"cols":"12","md":"12"}},[_c('loginGoogle',{staticClass:"mb-3",attrs:{"idHtml":"app-form-login","returnUidInfo":true},on:{"ev_logingoogle":_vm.ev_logingoogle}})],1),_c('b-col',{staticClass:"p-3 rs-login__btn rs-login__btn--face border",class:_vm.mediaBtn ? '' : 'bg-light',attrs:{"cols":"12","md":"12"},on:{"click":_vm.initFacebookLogin}},[_c('b-icon',{staticClass:"mr-3",attrs:{"icon":"facebook "}}),_vm._v(" Se connecter avec facebook ")],1)],1),_c('div',{staticClass:"text-center sepation-login"},[_c('strong',{staticClass:"sepation-login-text"},[_vm._v("Ou")])]),_c('ValidationProvider',{ref:"userlogin_name",staticClass:"d-block",attrs:{"rules":"required","name":"Nom"},scopedSlots:_vm._u([{key:"default",fn:function(v){return [_c('div',{staticClass:"login-form"},[_c('label',{staticClass:"label d-flex align-items-center"},[_c('span',[_vm._v(_vm._s(_vm.field.label))])])]),_c('b-form-group',{attrs:{"label":_vm.nomDisplay}},[_c('b-form-input',{attrs:{"type":"text"},on:{"input":function($event){return _vm.input($event, 'name')}},model:{value:(_vm.userlogin.name.value),callback:function ($$v) {_vm.$set(_vm.userlogin.name, "value", $$v)},expression:"userlogin.name.value"}})],1),_c('div',{staticClass:"text-danger"},_vm._l((v.errors),function(error,ii){return _c('small',{key:ii,staticClass:"d-block"},[_vm._v(" "+_vm._s(error)+" ")])}),0)]}}],null,false,1650481904)}),(_vm.current_tab === 'register')?_c('b-form-group',{attrs:{"label":"Prenom"}},[_c('b-form-input',{attrs:{"type":"text"},on:{"input":function($event){return _vm.input($event, 'prenom')}},model:{value:(_vm.userlogin.prenom.value),callback:function ($$v) {_vm.$set(_vm.userlogin.prenom, "value", $$v)},expression:"userlogin.prenom.value"}})],1):_vm._e(),(_vm.current_tab === 'register')?_c('ValidationProvider',{ref:"userlogin_tel",staticClass:"d-block",attrs:{"rules":"required","name":"Telephone"},scopedSlots:_vm._u([{key:"default",fn:function(v){return [_c('b-form-group',{attrs:{"label":"Telephone"}},[_c('b-form-input',{attrs:{"type":"text"},on:{"input":function($event){return _vm.input($event, 'telephone')}},model:{value:(_vm.userlogin.telephone.value),callback:function ($$v) {_vm.$set(_vm.userlogin.telephone, "value", $$v)},expression:"userlogin.telephone.value"}})],1),_c('div',{staticClass:"text-danger"},_vm._l((v.errors),function(error,ii){return _c('small',{key:ii,staticClass:"d-block"},[_vm._v(" "+_vm._s(error)+" ")])}),0)]}}],null,false,1994085191)}):_vm._e(),(_vm.current_tab === 'register')?_c('ValidationProvider',{ref:"userlogin_email",staticClass:"d-block",attrs:{"rules":"required|email","name":"Email"},scopedSlots:_vm._u([{key:"default",fn:function(v){return [_c('b-form-group',{attrs:{"label":"Email"}},[_c('b-form-input',{attrs:{"type":"email"},on:{"input":function($event){return _vm.input($event, 'email')}},model:{value:(_vm.userlogin.email.value),callback:function ($$v) {_vm.$set(_vm.userlogin.email, "value", $$v)},expression:"userlogin.email.value"}})],1),_c('div',{staticClass:"text-danger"},_vm._l((v.errors),function(error,ii){return _c('small',{key:ii,staticClass:"d-block"},[_vm._v(" "+_vm._s(error)+" ")])}),0)]}}],null,false,1829562814)}):_vm._e(),(_vm.current_tab === 'login')?_c('ValidationProvider',{ref:"userlogin_password",staticClass:"d-block",attrs:{"rules":"required","name":"Password"},scopedSlots:_vm._u([{key:"default",fn:function(v){return [_c('b-form-group',{attrs:{"label":"Mot de passe"}},[_c('b-form-input',{attrs:{"type":"password"},on:{"input":function($event){return _vm.input($event, 'password')}},model:{value:(_vm.userlogin.password.value),callback:function ($$v) {_vm.$set(_vm.userlogin.password, "value", $$v)},expression:"userlogin.password.value"}})],1),_c('div',{staticClass:"text-danger"},_vm._l((v.errors),function(error,ii){return _c('small',{key:ii,staticClass:"d-block"},[_vm._v(" "+_vm._s(error)+" ")])}),0)]}}],null,false,3320814594)}):_vm._e()],1)]):_vm._e()],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/App/input/userlogin.vue?vue&type=template&id=ffbb543e&lang=html&

// EXTERNAL MODULE: ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js + 1 modules
var objectSpread2 = __webpack_require__("f3f3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// EXTERNAL MODULE: ./node_modules/vee-validate/dist/vee-validate.esm.js
var vee_validate_esm = __webpack_require__("7bb1");

// EXTERNAL MODULE: ./src/App/EditsFields/vee-validate-custom.js
var vee_validate_custom = __webpack_require__("b6d1");

// EXTERNAL MODULE: ../drupal-vuejs/index.js + 16 modules
var drupal_vuejs = __webpack_require__("e674");

// EXTERNAL MODULE: ./src/App/config/config.js
var config = __webpack_require__("f158");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/testrenjsx.vue?vue&type=script&lang=js&
/* harmony default export */ var testrenjsxvue_type_script_lang_js_ = ({
  name: "CardsJSXTest",
  functional: true,
  props: {
    multiline: Boolean,
    name: String,
    value: String
  },
  render: function render(createElement, context) {
    var self = this;
    console.log("context : ", context);
    var input = createElement("b-form-input", {
      props: {
        type: "text"
      },
      on: {
        input: function input(e) {
          self.$emit("ev_select_project", e);
          console.log(" Vue instance : ", self.$emit);
        }
      }
    });
    var g = createElement("h2", {
      on: {
        click: function click() {
          self.$emit("click_h2", "kk888");
        },
        ev_select_project: function ev_select_project() {
          alert("ev_select_project");
        }
      }
    }, ["kksa888 ?????", input]);
    return g;
  }
});
// CONCATENATED MODULE: ./src/App/testrenjsx.vue?vue&type=script&lang=js&
 /* harmony default export */ var App_testrenjsxvue_type_script_lang_js_ = (testrenjsxvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/App/testrenjsx.vue
var testrenjsx_render, testrenjsx_staticRenderFns




/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  App_testrenjsxvue_type_script_lang_js_,
  testrenjsx_render,
  testrenjsx_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var testrenjsx = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/input/userlogin.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




 //import { drupalFormFields } from "drupal-vuejs";

 //import facebook from "drupal-vuejs/src/App/rx/facebook";

/* harmony default export */ var userloginvue_type_script_lang_js_ = ({
  name: "userloginV2",
  props: {
    field: {
      type: Object,
      require: true,
      validator: function validator(val) {
        return val.states !== undefined && val.states !== undefined ? true : false;
      }
    }
  },
  components: {
    ValidationProvider: vee_validate_esm["b" /* ValidationProvider */],
    loginGoogle: drupal_vuejs["b" /* loginGoogle */]
  },
  data: function data() {
    return {
      tabIndex: 0,
      current_tab: "register",
      fieldsRegisterRender: [],
      modelsFields: {},
      testrenjsx: testrenjsx,
      mediaBtn: true,
      userFacebook: "",
      userGoogle: ""
    };
  },
  mounted: function mounted() {
    this.TryToLoginWithFacebook();
    drupal_vuejs["c" /* loginfacebook */].appId = 889256191665205;
    this.loadScript();
  },
  watch: {//
  },
  computed: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, Object(vuex_esm["c" /* mapState */])(["userlogin", "mode"])), Object(vuex_esm["b" /* mapGetters */])(["uid"])), {}, {
    validationField: function validationField() {
      return true;
    },
    nomDisplay: function nomDisplay() {
      if (this.current_tab === "register") {
        return "Nom";
      } else {
        return "Login ou email";
      }
    }
  }),
  methods: {
    loadScript: function loadScript() {
      var _this = this;

      //var self = this
      this.$nextTick(function () {
        _this.mediaBtn = false;
        drupal_vuejs["c" /* loginfacebook */].chargement();
        _this.mediaBtn = true;
      });
    },

    /**
     * Ecoute un evenement afin de determiner si l'utilisateur a clique sur le bonton de connexion et que le processus soit terminé.
     */
    TryToLoginWithFacebook: function TryToLoginWithFacebook() {
      var _this2 = this;

      document.addEventListener("wbu-fb-status-change", function () {
        _this2.isBusy = true;
        console.log("TryToLoginWithFacebook", _this2.isBusy);
        config["a" /* default */].post("/login-rx-vuejs/facebook-check", drupal_vuejs["c" /* loginfacebook */].user).then(function (resp) {
          console.log("TryToLoginWithFacebook resp : ", resp);

          if (resp.reponse && resp.reponse.config.url !== resp.reponse.request.responseURL) {
            //window.location.assign(resp.reponse.request.responseURL);
            console.log("user is connect : ", resp.reponse); //on connecte l'utilisateur:

            _this2.$store.dispatch("getCurrentUser").then(function () {
              //save form
              setTimeout(function () {
                _this2.$store.dispatch("saveDatasUser");
              }, 600);
            });
          } // il faut s'assurer que les données sont ok.
          else if (resp.data) {
            if (resp.data.createuser) {
              _this2.stepe = "final-fb-register";
            }
          }
        });
      }, false);
    },
    handleOk: function handleOk(event) {
      event.preventDefault();
      this.handleSubmit();
    },
    handleSubmit: function handleSubmit(event) {
      var _this3 = this;

      event.preventDefault();
      this.isOpen = !this.isOpen; // Push the name to submitted names

      this.$emit("input_to_add", this.fields); // Hide the modal manually

      this.$nextTick(function () {
        _this3.$bvModal.hide("modal-prevent-closing");
      });
    },
    setRefs: function setRefs() {
      var _this4 = this;

      this.$nextTick(function () {
        //alert("Dd");
        _this4.userlogin.name.ref = _this4.$refs.userlogin_name;
        _this4.userlogin.telephone.ref = _this4.$refs.userlogin_tel;
        _this4.userlogin.email.ref = _this4.$refs.userlogin_email;
        _this4.userlogin.password.ref = _this4.$refs.userlogin_password;
      });
    },
    input: function input(value, field) {
      this.field.value[field].value = value;
    },
    initValue: function initValue() {
      if (!this.field.value) {
        this.$set(this.field, "value", {
          name: {
            value: "",
            label: "Nom"
          },
          prenom: {
            value: "",
            label: "Prenom"
          },
          telephone: {
            value: "",
            label: "Telephone"
          },
          email: {
            value: "",
            label: "Email"
          },
          password: {
            value: "",
            label: "Password"
          }
        });
      } else if (this.field.value.name) {
        this.userlogin.name.value = this.field.value.name.value;
        this.userlogin.prenom.value = this.field.value.prenom.value;
        this.userlogin.telephone.value = this.field.value.telephone.value;
        this.userlogin.email.value = this.field.value.email.value;
        this.userlogin.password.value = this.field.value.password.value;
      }
    },
    select_tab: function select_tab(val) {
      var self = this;
      this.current_tab = val;
      this.userlogin.tabIndex = val;
      self.setRefs();
    },

    /* facebook login methods */
    getFacebookLoginStatus: function getFacebookLoginStatus() {
      drupal_vuejs["c" /* loginfacebook */].getUserStatus();
    },
    facebookStatusCallback: function facebookStatusCallback(reponse) {
      console.log("status", reponse);
      console.log(reponse.status == "connected" ? "je suis connecté avec facebook" : "Pas connecté avec facebook");
    },
    initFacebookLogin: function initFacebookLogin() {
      drupal_vuejs["c" /* loginfacebook */].openPopup();
    },
    ev_logingoogle: function ev_logingoogle(user) {
      console.log("user : ", user);
      this.$store.dispatch("setCurrentUser", user);
    }
  }
});
// CONCATENATED MODULE: ./src/App/input/userlogin.vue?vue&type=script&lang=js&
 /* harmony default export */ var input_userloginvue_type_script_lang_js_ = (userloginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/App/input/userlogin.vue?vue&type=style&index=0&lang=scss&
var userloginvue_type_style_index_0_lang_scss_ = __webpack_require__("30eb");

// CONCATENATED MODULE: ./src/App/input/userlogin.vue






/* normalize component */

var userlogin_component = Object(componentNormalizer["a" /* default */])(
  input_userloginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var userlogin = __webpack_exports__["default"] = (userlogin_component.exports);

/***/ })

}]);
//# sourceMappingURL=appForm.umd.22.js.map