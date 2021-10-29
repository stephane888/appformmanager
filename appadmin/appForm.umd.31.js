((typeof self !== 'undefined' ? self : this)["webpackJsonpappForm"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpappForm"] || []).push([[31],{

/***/ "762c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7817":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"38d0f794-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/userpage.vue?vue&type=template&id=59d0bced&scoped=true&lang=html&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-container',{staticClass:"bv-example-row p-5",attrs:{"fluid":"lg"}},[_c('div',[_c('title-bar',{attrs:{"id":_vm.id}}),_c('loaderIcon',{attrs:{"busy":_vm.isComplete}}),_c('b-row',{attrs:{"align-h":"center"}},[_c('transition',{attrs:{"name":"fade"}},[(_vm.formDatas && _vm.formDatas.info)?_c('b-col',{attrs:{"cols":"12","lg":"10"}},[_c('pages',{attrs:{"level":_vm.stepsIndex}})],1):_vm._e()],1)],1)],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/App/userpage.vue?vue&type=template&id=59d0bced&scoped=true&lang=html&

// EXTERNAL MODULE: ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js + 1 modules
var objectSpread2 = __webpack_require__("f3f3");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// EXTERNAL MODULE: ./src/App/FormStep.vue + 19 modules
var FormStep = __webpack_require__("0b7d");

// EXTERNAL MODULE: ./src/App/components/TitleBar.vue + 4 modules
var TitleBar = __webpack_require__("63c9");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/userpage.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var userpagevue_type_script_lang_js_ = ({
  name: "userpage",
  props: {
    id: {
      type: String,
      required: true
    }
  },
  components: {
    pages: FormStep["a" /* default */],
    TitleBar: TitleBar["a" /* default */]
  },
  data: function data() {
    return {//
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$store.dispatch("setFormId", this.id);
    /**
     * Cette function charge progressivement les données.
     */

    this.$store.dispatch("loadStepsDatas", {
      formId: this.id
    }).then(function () {
      _this.busy = false;
    });
  },
  watch: {//
  },
  computed: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, Object(vuex_esm["c" /* mapState */])(["stepsIndex", "allStepsDatas", "fields", "price", "form"])), Object(vuex_esm["b" /* mapGetters */])(["formDatas", "uid"])), {}, {
    /**
     * La fonction qui charge les données(loadStepsDatas) le fait de maniere progressive, ainsi il faut verifier s'il ya deja les données.
     * s'il ya deja des champs à afficher,enleve le loading, ou si on a rien trouvé (busy est revenu à false;)
     */
    isComplete: function isComplete() {
      if (this.formDatas && this.formDatas.fields.length || !this.busy) {
        return false;
      } else return true;
    }
  }),
  methods: {
    returnHome: function returnHome() {
      this.$router.push({
        path: "/"
      });
    }
  }
});
// CONCATENATED MODULE: ./src/App/userpage.vue?vue&type=script&lang=js&
 /* harmony default export */ var App_userpagevue_type_script_lang_js_ = (userpagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/App/userpage.vue?vue&type=style&index=0&id=59d0bced&lang=scss&scoped=true&
var userpagevue_type_style_index_0_id_59d0bced_lang_scss_scoped_true_ = __webpack_require__("cb9b");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/App/userpage.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  App_userpagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "59d0bced",
  null
  
)

/* harmony default export */ var userpage = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "cb9b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_userpage_vue_vue_type_style_index_0_id_59d0bced_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("762c");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_userpage_vue_vue_type_style_index_0_id_59d0bced_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_userpage_vue_vue_type_style_index_0_id_59d0bced_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ })

}]);
//# sourceMappingURL=appForm.umd.31.js.map