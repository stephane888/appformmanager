((typeof self !== 'undefined' ? self : this)["webpackJsonpappForm"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpappForm"] || []).push([[23],{

/***/ "3684":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Addfield_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ce14");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Addfield_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Addfield_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "36bc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"09ade5b7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/gestions-chemps/Addfield.vue?vue&type=template&id=3c33b4b8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-modal',{attrs:{"size":"lg","id":'modal-addForm--' + _vm.idModal,"title":"Ajouter un champs dans le gestionnaire de champs","hide-footer":"","content-class":['mange-add-field']},on:{"ok":_vm.handleOk}},[_c('loaderIcon',{attrs:{"busy":_vm.busy}}),_c('form',{ref:"forme",on:{"submit":_vm.handleSubmit,"reset":_vm.resetModal,"hidden":_vm.resetModal}},[_c('b-row',[_c('b-col',{attrs:{"cols":"6"}},[_c('b-form-group',{attrs:{"label":"Sélectionner un model de base","label-for":"type-input","invalid-feedback":"type is required"}},[_c('b-form-select',{attrs:{"options":_vm.typeOptions,"id":"type-input","required":""},model:{value:(_vm.field.type),callback:function ($$v) {_vm.$set(_vm.field, "type", $$v)},expression:"field.type"}})],1)],1),_c('b-col',{attrs:{"cols":"6"}},[_c('b-form-group',{attrs:{"label":"Accosier à un formulaire","label-for":"type-input","invalid-feedback":"type is required","description":"Cela permet de grouper ce champs avec le formulaire selectionné"}},[_c('b-form-select',{attrs:{"options":_vm.listForms,"disabled":_vm.defaultFormid !== '' ? true : false,"id":"type-input-2","required":""},model:{value:(_vm.field.formid),callback:function ($$v) {_vm.$set(_vm.field, "formid", $$v)},expression:"field.formid"}})],1)],1)],1),_c('input-option-form',{staticClass:"content-config-field",attrs:{"type":_vm.field.type,"field":_vm.field}}),_c('b-row',{attrs:{"align-h":"end"}},[_c('div',{staticClass:"mt-3 mx-3"},[_c('b-button',{staticClass:"mr-2",attrs:{"type":"submit","variant":"primary","disabled":_vm.field.name.length > 2 ? false : true}},[_vm._v(" "+_vm._s(_vm.nameButtonOk)+" ")])],1)])],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/App/gestions-chemps/Addfield.vue?vue&type=template&id=3c33b4b8&

// EXTERNAL MODULE: ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js + 1 modules
var objectSpread2 = __webpack_require__("f3f3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("a9e3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("159b");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// EXTERNAL MODULE: ./src/App/inputOptionForm.vue + 29 modules
var inputOptionForm = __webpack_require__("4fa8");

// EXTERNAL MODULE: ./src/App/components/loaderIcon.vue + 4 modules
var loaderIcon = __webpack_require__("021a");

// EXTERNAL MODULE: ./src/App/Utilities.js
var Utilities = __webpack_require__("2c10");

// EXTERNAL MODULE: ./src/App/config/config.js + 72 modules
var config = __webpack_require__("f158");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/gestions-chemps/Addfield.vue?vue&type=script&lang=js&



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var Addfieldvue_type_script_lang_js_ = ({
  components: {
    inputOptionForm: inputOptionForm["a" /* default */],
    loaderIcon: loaderIcon["a" /* default */]
  },
  props: {
    field: {
      type: Object,
      required: true
    },

    /**/
    genre: {
      type: String,
      default: ""
    },

    /**
     * liste de formulaire fournit.
     */
    listForms: {
      type: Array,
      required: true
    },

    /**
     * Valeur du formulaire par defaut
     */
    defaultFormid: {
      type: String,
      default: null
    },
    idModal: {
      type: [String, Number],
      required: true
    }
  },
  data: function data() {
    return {
      typeFieldSelected: null,
      type: null,
      //datas to check form validity
      labelState: null,
      typeOptions: Utilities["a" /* default */].typeOptions(),
      busy: false
    };
  },
  computed: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, Object(vuex_esm["b" /* mapGetters */])(["formDatas", "uid"])), {}, {
    nameButtonOk: function nameButtonOk() {
      return this.field.id ? "Mettre à jour" : "Ajouter";
    }
  }),
  watch: {
    defaultFormid: function defaultFormid(val) {
      var _this = this;

      this.listForms.forEach(function (option) {
        if (option.value === val) {
          _this.field.formid = option.value;
        }
      });
    }
  },
  methods: {
    resetModal: function resetModal() {
      this.type = null;
    },
    handleOk: function handleOk(event) {
      // Prevent modal from closing
      event.preventDefault(); // Trigger submit handler

      this.handleSubmit();
    },
    handleSubmit: function handleSubmit(event) {
      var _this2 = this;

      this.busy = true;
      event.preventDefault();
      config["a" /* default */].prepareFieldToSave(this.field, this.uid).then(function (datas) {
        config["a" /* default */].saveForm(datas).then(function (resp) {
          datas.forEach(function (tb) {
            if (tb.table == "appformmanager_fields") {
              if (!tb.where) {
                resp.data.forEach(function (r) {
                  if (r.table == "appformmanager_fields") {
                    _this2.$store.state.StoreGestionChamps.fields.push(Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, _this2.field), {}, {
                      id: r.result,
                      stepes: []
                    }));
                  }
                });
              }
            }
          });

          _this2.$bvModal.hide("modal-addForm--" + _this2.idModal);

          _this2.busy = false;

          _this2.$emit("set_default_field");
        }).catch(function () {
          _this2.busy = false;
        });
      });
    }
  }
});
// CONCATENATED MODULE: ./src/App/gestions-chemps/Addfield.vue?vue&type=script&lang=js&
 /* harmony default export */ var gestions_chemps_Addfieldvue_type_script_lang_js_ = (Addfieldvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/App/gestions-chemps/Addfield.vue?vue&type=style&index=0&lang=scss&
var Addfieldvue_type_style_index_0_lang_scss_ = __webpack_require__("3684");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/App/gestions-chemps/Addfield.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  gestions_chemps_Addfieldvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Addfield = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "70f9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"09ade5b7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/gestions-chemps/filtres.vue?vue&type=template&id=24ef4de6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"firstValue":_vm.firstValue}},[_c('b-form',{staticClass:"mb-5"},[_c('b-row',[_c('b-col',{attrs:{"md":"4"}},[_c('b-form-group',{attrs:{"label":"Grouper par formulaire.","label-for":"type-input","invalid-feedback":"type is required"}},[_c('b-form-select',{attrs:{"options":_vm.listForms,"disabled":_vm.loaders.GestionFieldFiltre},on:{"input":_vm.SelectionForm},model:{value:(_vm.filtre.formid),callback:function ($$v) {_vm.$set(_vm.filtre, "formid", $$v)},expression:"filtre.formid"}})],1)],1),_c('b-col',{staticClass:"d-flex align-items-end pb-md-3 justify-content-end",attrs:{"md":"8"}},[_c('b-button',{staticClass:"mt-3 mr-3",attrs:{"variant":"outline-info"},on:{"click":_vm.OpenModalAddField}},[_vm._v(" + Ajouter un champs ")]),_c('b-button',{staticClass:"mt-3 mr-3 d-none",attrs:{"variant":"outline-info"}},[_vm._v(" + Exporter ")]),_c('b-button',{staticClass:"mt-3 d-none",attrs:{"variant":"outline-info"}},[_vm._v(" + Importer ")])],1)],1)],1),_c('AddForm',{attrs:{"listForms":_vm.listForms,"defaultFormid":_vm.filtre.formid,"field":_vm.field,"idModal":"filter"},on:{"set_default_field":_vm.set_default_field}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/App/gestions-chemps/filtres.vue?vue&type=template&id=24ef4de6&

// EXTERNAL MODULE: ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js + 1 modules
var objectSpread2 = __webpack_require__("f3f3");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// EXTERNAL MODULE: ./src/App/gestions-chemps/Addfield.vue + 4 modules
var Addfield = __webpack_require__("36bc");

// EXTERNAL MODULE: ./src/App/Utilities.js
var Utilities = __webpack_require__("2c10");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/gestions-chemps/filtres.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var filtresvue_type_script_lang_js_ = ({
  created: function created() {},
  name: "Filtres",
  props: {
    listForms: {
      type: Array,
      required: true
    }
  },
  components: {
    AddForm: Addfield["a" /* default */]
  },
  data: function data() {
    return {
      field: Utilities["a" /* default */].field()
    };
  },
  computed: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, Object(vuex_esm["c" /* mapState */])({
    filtre: function filtre(state) {
      return state.StoreGestionChamps.filtre;
    },
    loaders: function loaders(state) {
      return state.StoreGestionChamps.loaders;
    }
  })), {}, {
    firstValue: function firstValue() {
      if (this.listForms[0] > 0) {
        var val = localStorage.getItem("gestionfields.defaultformid");
        if (!val) this.listForms[0].value;
        this.$store.dispatch("SetFiltre", {
          key: "formid",
          value: val
        });
        return this.listForms[0].value;
      }

      return null;
    }
  }),
  methods: {
    OpenModalAddField: function OpenModalAddField() {
      this.$bvModal.show("modal-addForm--filter");
    },

    /**
     * Remet la valeur par defaut apres selection.
     */
    set_default_field: function set_default_field() {
      this.field = Utilities["a" /* default */].field();
      this.field.formid = this.filtre.formid;
    },

    /**
     * --
     */
    SelectionForm: function SelectionForm(val) {
      localStorage.setItem("gestionfields.defaultformid", val);
      this.field.formid = this.filtre.formid;
      this.$store.dispatch("GetFields");
    }
  }
});
// CONCATENATED MODULE: ./src/App/gestions-chemps/filtres.vue?vue&type=script&lang=js&
 /* harmony default export */ var gestions_chemps_filtresvue_type_script_lang_js_ = (filtresvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/App/gestions-chemps/filtres.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  gestions_chemps_filtresvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var filtres = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "ce14":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=appForm.common.23.js.map