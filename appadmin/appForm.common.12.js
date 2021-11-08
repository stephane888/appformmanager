((typeof self !== 'undefined' ? self : this)["webpackJsonpappForm"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpappForm"] || []).push([[12],{

/***/ "3dfd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"38d0f794-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=8324de3e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-form",attrs:{"id":"app"}},[(_vm.$store.state.mode)?_c('div',{attrs:{"id":"nav"}}):_vm._e(),_c('b-container',{staticClass:"app-container",attrs:{"fluid":"md"}},[_c('router-view')],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=8324de3e&

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// EXTERNAL MODULE: ./src/App/components/loaderIcon.vue + 4 modules
var loaderIcon = __webpack_require__("021a");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"38d0f794-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/AddFormField.vue?vue&type=template&id=7e5771d3&
var AddFormFieldvue_type_template_id_7e5771d3_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-modal',{ref:"addForm",attrs:{"size":"lg","id":'modal-addForm--' + _vm.idModal,"title":"Ajouter un champs dans cette etape","hide-footer":"","content-class":['mange-add-field']},on:{"ok":_vm.handleOk},model:{value:(_vm.isOpen),callback:function ($$v) {_vm.isOpen=$$v},expression:"isOpen"}},[_c('form',{ref:"forme",on:{"submit":_vm.handleSubmit,"reset":_vm.resetModal,"hidden":_vm.resetModal}},[_c('b-row',{},[_c('b-col',{attrs:{"md":"6"}},[(!_vm.dynamicfield)?_c('b-form-group',{attrs:{"label":"Sélectionner un type de champs","invalid-feedback":"type is required"}},[_c('b-form-select',{attrs:{"options":_vm.typeOptions,"required":""},model:{value:(_vm.field.type),callback:function ($$v) {_vm.$set(_vm.field, "type", $$v)},expression:"field.type"}})],1):_vm._e(),(_vm.dynamicfield)?_c('b-form-group',{attrs:{"label":"Formulaire","invalid-feedback":"type is required"}},[_c('b-form-select',{attrs:{"options":_vm.formItems,"required":""},model:{value:(_vm.typeFormId),callback:function ($$v) {_vm.typeFormId=$$v},expression:"typeFormId"}})],1):_vm._e()],1),_c('b-col',{attrs:{"md":"6"}},[_c('b-form-group',{attrs:{"isOverride":_vm.isOverride}},[_c('b-form-checkbox',{attrs:{"switch":"","size":"lg"},model:{value:(_vm.dynamicfield),callback:function ($$v) {_vm.dynamicfield=$$v},expression:"dynamicfield"}},[_vm._v(" Champs dynamique ")])],1)],1)],1),_c('div',{staticClass:"content-config-field"},[(!_vm.dynamicfield)?_c('input-option-form',{attrs:{"type":_vm.field.type,"field":_vm.field}}):_vm._e(),(_vm.dynamicfield)?_c('div',[_c('hr'),_c('b-form-group',{attrs:{"label":"Sélectionner le champs dynamique","invalid-feedback":"type is required"}},[_c('b-form-select',{attrs:{"options":_vm.OptionDynamicsField},on:{"change":_vm.selectDynamicLabel},model:{value:(_vm.field.name),callback:function ($$v) {_vm.$set(_vm.field, "name", $$v)},expression:"field.name"}})],1),_c('compositeHeaderField',{attrs:{"field":_vm.field}})],1):_vm._e()],1),_c('b-row',{attrs:{"align-h":"end"}},[_c('div',{staticClass:"mr-3"},[_c('b-button',{staticClass:"mr-2",attrs:{"type":"submit","variant":"primary"}},[_vm._v(" "+_vm._s(_vm.nameButtonOk)+" ")])],1)])],1)])}
var AddFormFieldvue_type_template_id_7e5771d3_staticRenderFns = []


// CONCATENATED MODULE: ./src/App/AddFormField.vue?vue&type=template&id=7e5771d3&

// EXTERNAL MODULE: ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("276c");

// EXTERNAL MODULE: ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js + 1 modules
var objectSpread2 = __webpack_require__("f3f3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("a9e3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("159b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// EXTERNAL MODULE: ./src/App/inputOptionForm.vue + 29 modules
var inputOptionForm = __webpack_require__("4fa8");

// EXTERNAL MODULE: ./src/App/EditsFields/compositeHeaderField.vue + 4 modules
var compositeHeaderField = __webpack_require__("d3ee");

// EXTERNAL MODULE: ./src/App/Utilities.js
var Utilities = __webpack_require__("2c10");

// EXTERNAL MODULE: ./src/App/config/config.js
var config = __webpack_require__("f158");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/AddFormField.vue?vue&type=script&lang=js&





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





/* harmony default export */ var AddFormFieldvue_type_script_lang_js_ = ({
  components: {
    inputOptionForm: inputOptionForm["a" /* default */],
    compositeHeaderField: compositeHeaderField["default"]
  },
  props: {
    nouveau: {
      type: Boolean,
      require: true,
      default: true
    },
    field: {
      type: Object,
      default: function _default() {
        return Utilities["a" /* default */].field();
      }
    },

    /**/
    genre: {
      type: String,
      default: ""
    },
    idModal: {
      type: [String, Number],
      required: true
    }
  },
  data: function data() {
    return {
      isOpen: false,
      typeFieldSelected: null,
      type: null,
      //datas to check form validity
      labelState: null,
      typeOptions: Utilities["a" /* default */].typeOptions(),
      OptionDynamicsField: [],
      dynamicfield: false,
      typeFormId: "",
      DynamicFields: []
    };
  },
  watch: {
    dynamicfield: function dynamicfield() {
      this.watchDynamicFields();
    },
    typeFormId: function typeFormId() {
      this.loadDynamicFields();
    }
  },
  computed: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, Object(vuex_esm["b" /* mapGetters */])(["formDatas"])), Object(vuex_esm["c" /* mapState */])(["items", "formId"])), {}, {
    nameButtonOk: function nameButtonOk() {
      return this.nouveau ? "Ajouter" : "Mettre à jour";
    },
    formItems: function formItems() {
      var r = [];
      this.items.forEach(function (item) {
        r.push({
          text: item.name,
          value: item.id
        });
      });
      return r;
    },
    isOverride: function isOverride() {
      this.init();

      if (this.field.override) {
        return true;
      }

      return false;
    }
  }),
  methods: {
    init: function init() {
      this.typeFormId = this.formId;

      if (this.field.override) {
        this.dynamicfield = true;
      }
    },
    optionAddToFields: function optionAddToFields() {
      var proto = function proto(hauteur) {
        Object(classCallCheck["a" /* default */])(this, proto);

        this.hauteur = hauteur;
      };

      var protoD = new proto(this.field);
      var sh = {};

      for (var i in protoD.hauteur) {
        sh[i] = protoD.hauteur[i];
      }

      this.formDatas.fields.push(sh);
      Utilities["a" /* default */].resetField(this.field);
    },
    resetModal: function resetModal() {
      this.type = null;
    },
    handleOk: function handleOk(event) {
      // Prevent modal from closing
      event.preventDefault(); // Trigger submit handler

      this.handleSubmit();
    },
    handleSubmit: function handleSubmit(event) {
      var _this = this;

      event.preventDefault();
      this.isOpen = !this.isOpen;

      if (this.nouveau) {
        this.optionAddToFields();
      } // Push the name to submitted names


      this.$emit("input_to_add", this.field); // Hide the modal manually

      this.$nextTick(function () {
        _this.$bvModal.hide("modal-prevent-closing");
      });
    },

    /**
     * Charge les options en function du choix de l'utilisateur.
     */
    watchDynamicFields: function watchDynamicFields() {
      if (this.dynamicfield) {
        this.loadDynamicFields();
      } else this.typeOptions = Utilities["a" /* default */].typeOptions();
    },
    loadDynamicFields: function loadDynamicFields() {
      var _this2 = this;

      var data = " select * from appformmanager_fields ";

      if (this.typeFormId) {
        data += " where formid='" + this.typeFormId + "'";
      }

      config["a" /* default */].getData(data).then(function (resp) {
        var results = [];
        _this2.DynamicFields = [];
        resp.data.forEach(function (item) {
          var jsonfield = JSON.parse(item.jsonfield);

          _this2.DynamicFields.push(jsonfield);

          results.push({
            value: item.machine_name,
            text: jsonfield.label
          });
        });
        _this2.OptionDynamicsField = results;
      });
    },
    selectDynamicLabel: function selectDynamicLabel(val) {
      // this.OptionDynamicsField.forEach((option) => {
      //   if (option.value == val) this.field.label = option.text;
      // });
      //on selectionne le champs et on demande sa MAJ.
      for (var i in this.DynamicFields) {
        var f = this.DynamicFields[i];

        if (f.name == val) {
          this.$emit("update_current_field", JSON.stringify(f));
          break;
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./src/App/AddFormField.vue?vue&type=script&lang=js&
 /* harmony default export */ var App_AddFormFieldvue_type_script_lang_js_ = (AddFormFieldvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/App/AddFormField.vue?vue&type=style&index=0&lang=scss&
var AddFormFieldvue_type_style_index_0_lang_scss_ = __webpack_require__("f67f");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/App/AddFormField.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  App_AddFormFieldvue_type_script_lang_js_,
  AddFormFieldvue_type_template_id_7e5771d3_render,
  AddFormFieldvue_type_template_id_7e5771d3_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var AddFormField = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//



external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component("loaderIcon", loaderIcon["a" /* default */]);
external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component("AddFormField", AddFormField);
/* harmony default export */ var Appvue_type_script_lang_js_ = ({
  name: "App"
});
// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Appvue_type_script_lang_js_ = (Appvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/App.vue?vue&type=style&index=0&lang=scss&
var Appvue_type_style_index_0_lang_scss_ = __webpack_require__("5c0b");

// CONCATENATED MODULE: ./src/App.vue






/* normalize component */

var App_component = Object(componentNormalizer["a" /* default */])(
  src_Appvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var App = __webpack_exports__["default"] = (App_component.exports);

/***/ }),

/***/ "5c0b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9c0c");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "64d1":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9c0c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f67f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddFormField_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("64d1");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddFormField_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddFormField_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ })

}]);
//# sourceMappingURL=appForm.common.12.js.map