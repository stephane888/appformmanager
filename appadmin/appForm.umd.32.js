((typeof self !== 'undefined' ? self : this)["webpackJsonpappForm"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpappForm"] || []).push([[32],{

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

/***/ "e412":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return validationRessource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationInstance; });
/* harmony import */ var _siteweb_AppVuejs_app_form_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("276c");
/* harmony import */ var _siteweb_AppVuejs_app_form_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("e954");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("b0c0");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("caad");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("2532");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("f158");






var validationRessource = {
  conditions: function conditions() {
    return {
      action: "",
      name: "",
      operator: "",
      value: "",
      state_name: ""
    };
  },
  listsOperators: function listsOperators() {
    return [{
      text: "Validé",
      value: "validated"
    }, {
      text: "non vide",
      value: "not_empty"
    }, {
      text: " vide",
      value: "empty"
    }, {
      text: "la valeur du champs est egal à",
      value: "egal"
    }, {
      text: "la valeur du champs est superieur à",
      value: ">"
    }];
  },
  Action: function Action() {
    var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Ce champs";
    return [{
      text: val + " est visible",
      value: "visible"
    }, {
      text: val + " est caché",
      value: "hidden"
    }];
  },

  /**
   * Validation des champs.
   * Retourne false, pour desactiver.
   * NB: formDatasValidate prend plus de temps pour ce mettre à jour.
   */
  computedValidation: function computedValidation(formDatas, currentField, formDatasValidate) {
    for (var i in formDatas.fields) {
      var field = formDatas.fields[i];

      if (field.name !== currentField.name) {
        for (var j in currentField.states) {
          var state = currentField.states[j]; // si le champs n'est pas definit on retourne false;

          if (formDatasValidate[state.name] === undefined) {
            //console.log("Validation non forunit : ", formDatasValidate);
            return null;
          }

          if (field.name === state.name) {
            // visible
            if (state.action === "visible") {
              if (field.value === "" && state.operator === "not_empty") return false;else if (field.value !== "" && state.operator === "empty") return false;else if (state.operator === "validated" && formDatasValidate[field.name]) return formDatasValidate[field.name].valid;else if (state.operator === "egal") {
                /*
                console.log(
                  "Valeur requise : ",
                  state.value,
                  " :: Valeur du parent",
                  field.value
                );
                /**/
                if (field.value) {
                  if (_config_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].typeSelection.includes(field.type) && field.value.includes) {
                    return field.value.includes(state.value) ? true : false;
                  } else {
                    var x = new String(field.value);
                    var y = new String(state.value);
                    return x.localeCompare(y) === 0 ? true : false;
                  }
                } else {
                  return false;
                }
              } else if (state.operator === ">") {
                if (field.value) {
                  var _x = parseInt(field.value);

                  var _y = parseInt(state.value);

                  return _y < _x ? true : false;
                } else {
                  return false;
                }
              }
            }
          }
        }
      }
    }
  },

  /**
   * Retourne la liste des etapes.
   */
  listesEtapes: function listesEtapes(form, formDatas) {
    var etapes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

    if (form && form.forms.length > 1) {
      //console.log("listesEtapes ");
      for (var i in form.forms) {
        var currentForm = form.forms[i];

        if (currentForm.info.name !== "") {
          etapes.push({
            text: "(" + i + ") " + currentForm.info.title,
            value: currentForm.info.name
          });
        }
      }
    }
  },
  getFormStateByName: function getFormStateByName(state_name, forms) {
    for (var i in forms) {
      var form = forms[i];

      if (form.info.name === state_name) {
        return form;
      }
    }
  },
  getFieldByName: function getFieldByName(name, fields) {
    for (var i in fields) {
      if (fields[i].name === name) {
        return fields[i];
      }
    }
  }
};

var ValidationInstance = /*#__PURE__*/function () {
  function ValidationInstance() {
    Object(_siteweb_AppVuejs_app_form_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, ValidationInstance);

    //
    this.StepeValidationOptions = [];
  } //Retourne les etapes sous forme de listes.


  Object(_siteweb_AppVuejs_app_form_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(ValidationInstance, [{
    key: "listeDesChamps",
    value: function listeDesChamps(condition, form) {
      var fields = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

      if (condition.state_name && condition.state_name !== "") {
        var currentForm = validationRessource.getFormStateByName(condition.state_name, form.forms);

        if (currentForm !== undefined) {
          //console.log("listeDesChamps ", currentForm);
          for (var i in currentForm.fields) {
            var field = currentForm.fields[i];

            if (condition.name == field.name && field.options.length) {
              this.StepeValidationOptions = field.options;
            }

            fields.push({
              text: field.label,
              value: field.name
            });
          }
        }
      }
    }
  }]);

  return ValidationInstance;
}();
/**/




/***/ }),

/***/ "fd80":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"38d0f794-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/input/Autocomplete.vue?vue&type=template&id=7fff9966&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:!_vm.validationField && _vm.mode ? 'mb-5' : ''},[(_vm.validationField)?_c('transition',{attrs:{"name":"fade"}},[_c('div',{staticClass:"choice-section min-height"},[_c('ValidationProvider',{staticClass:"col-12 p-0",attrs:{"rules":_vm.field.require,"name":_vm.field.name},scopedSlots:_vm._u([{key:"default",fn:function(v){return [_c('div',{staticClass:"autocomplete"},[_c('multiselect',{attrs:{"options":_vm.options,"custom-label":_vm.nameWithLang,"placeholder":"","label":"text","track-by":"text","show-no-results":false,"showLabels":false,"loading":_vm.isLoading},on:{"search-change":_vm.asyncFind},model:{value:(_vm.field.value),callback:function ($$v) {_vm.$set(_vm.field, "value", $$v)},expression:"field.value"}},[_c('template',{slot:"noResult"},[_c('span',{staticClass:"option__titl d-none"},[_vm._v(" Aucun contenu ")])]),_c('template',{slot:"placeholder"},[_c('span',{staticClass:"option__title"},[_vm._v(" Code postal ou nom de la ville ")])]),_c('template',{slot:"noOptions"},[_c('span',{staticClass:"option__title"},[_vm._v(" Saisir un code postal ou le nom d'une ville ")])])],2),_c('div',{staticClass:"text-danger"},_vm._l((v.errors),function(error,ii){return _c('small',{key:ii,staticClass:"d-block"},[_vm._v(" "+_vm._s(error)+" ")])}),0)],1)]}}],null,false,3155301819)})],1)]):_vm._e()],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/App/input/Autocomplete.vue?vue&type=template&id=7fff9966&

// EXTERNAL MODULE: ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js + 1 modules
var objectSpread2 = __webpack_require__("f3f3");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// EXTERNAL MODULE: ./node_modules/vee-validate/dist/vee-validate.esm.js
var vee_validate_esm = __webpack_require__("7bb1");

// EXTERNAL MODULE: ./src/App/config/validation.js
var validation = __webpack_require__("e412");

// EXTERNAL MODULE: ./src/App/EditsFields/vee-validate-custom.js
var vee_validate_custom = __webpack_require__("b6d1");

// EXTERNAL MODULE: ./node_modules/vue-multiselect/dist/vue-multiselect.min.js
var vue_multiselect_min = __webpack_require__("8e5f");
var vue_multiselect_min_default = /*#__PURE__*/__webpack_require__.n(vue_multiselect_min);

// EXTERNAL MODULE: ../drupal-vuejs/index.js + 16 modules
var drupal_vuejs = __webpack_require__("e674");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/input/Autocomplete.vue?vue&type=script&lang=js&

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






/* harmony default export */ var Autocompletevue_type_script_lang_js_ = ({
  props: {
    field: {
      type: Object,
      require: true
    }
  },
  components: {
    Multiselect: vue_multiselect_min_default.a,
    ValidationProvider: vee_validate_esm["b" /* ValidationProvider */]
  },
  data: function data() {
    return {
      isLoading: false,
      options: []
    };
  },
  computed: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, Object(vuex_esm["b" /* mapGetters */])(["formDatas"])), Object(vuex_esm["c" /* mapState */])(["formDatasValidate", "mode"])), {}, {
    validationField: function validationField() {
      var status = true;

      if (this.field.states.length) {
        status = validation["b" /* validationRessource */].computedValidation(this.formDatas, this.field, this.formDatasValidate);
        if (status === undefined) status = false;
        this.setStatus(status);
        return status;
      } else {
        this.setStatus(status);
        return status;
      }
    }
  }),
  methods: {
    setStatus: function setStatus(status) {
      this.$set(this.field, "status", status);
    },
    nameWithLang: function nameWithLang(_ref) {
      var text = _ref.text;
      //return `${text} — [${value}]`;
      return "".concat(text);
    },
    asyncFind: function asyncFind(search) {
      var _this = this;

      //console.log("search : ", search);
      if (search.length > 2) {
        var terms = new drupal_vuejs["d" /* termsTaxo */]("departements"); //console.log("find");

        this.isLoading = true;
        terms.getSearch(search).then(function () {
          _this.options = terms.getOptions();
          _this.isLoading = false; //console.log("this.options : ", this.options);
        });
      }
    }
  }
});
// CONCATENATED MODULE: ./src/App/input/Autocomplete.vue?vue&type=script&lang=js&
 /* harmony default export */ var input_Autocompletevue_type_script_lang_js_ = (Autocompletevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css&
var vue_multiselect_minvue_type_style_index_0_lang_css_ = __webpack_require__("60bc");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/App/input/Autocomplete.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  input_Autocompletevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Autocomplete = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=appForm.umd.32.js.map