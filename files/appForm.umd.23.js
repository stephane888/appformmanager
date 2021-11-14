((typeof self !== 'undefined' ? self : this)["webpackJsonpappForm"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpappForm"] || []).push([[23],{

/***/ "6575":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"38d0f794-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/ConfigsForms/import-export.vue?vue&type=template&id=75710c8d&scoped=true&lang=html&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-modal',{ref:"modal",attrs:{"id":"export-import-stepe","title":"Exporter ou importer","hide-footer":"","size":"lg"}},[(_vm.watchFormDatas && _vm.CurrentForm.info)?_c('form',{ref:"forme",on:{"submit":_vm.handleSubmit}},[_c('b-form-group',{attrs:{"label":"Contenu de l'etape","description":"Le contenu par defaut est celui de l'etape encours,(exportation), vous pouvez le remplacer par un autre contenu et importer"}},[_c('b-form-textarea',{attrs:{"required":"","size":"sm"},model:{value:(_vm.formStep),callback:function ($$v) {_vm.formStep=$$v},expression:"formStep"}})],1),_c('hr'),_c('b-row',{attrs:{"align-h":"end"}},[_c('div',{staticClass:"mr-3"},[_c('b-button',{attrs:{"type":"submit","variant":"outline-info","size":"sm"}},[_c('b-icon',{attrs:{"icon":"plus"}}),_vm._v(" Importer ")],1)],1)])],1):_vm._e(),_c('div',{staticClass:"accordion",attrs:{"role":"tablist"}},[_c('b-card',{staticClass:"mb-1",attrs:{"no-body":""}},[_c('b-card-header',{staticClass:"p-1",attrs:{"header-tag":"header","role":"tab"}},[_c('b-button',{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-import-export",modifiers:{"accordion-import-export":true}}],attrs:{"block":"","variant":"info"}},[_vm._v(" Condition d'affichage ")])],1),_c('b-collapse',{attrs:{"id":"accordion-import-export","role":"tabpanel","visible":""}},[_c('b-card-body',[_c('div',{staticClass:"p-2"},[_vm._v(_vm._s(JSON.stringify(_vm.formDatas)))])])],1)],1)],1)])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/App/ConfigsForms/import-export.vue?vue&type=template&id=75710c8d&scoped=true&lang=html&

// EXTERNAL MODULE: ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js + 1 modules
var objectSpread2 = __webpack_require__("f3f3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__("caad");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__("2532");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// EXTERNAL MODULE: ./node_modules/snake-case/dist.es2015/index.js + 5 modules
var dist_es2015 = __webpack_require__("a4d6");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/ConfigsForms/import-export.vue?vue&type=script&lang=js&




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var import_exportvue_type_script_lang_js_ = ({
  name: "reOrderStepes",
  data: function data() {
    return {
      CurrentForm: {},
      readonly: true,
      state_name: true,
      formStep: ""
    };
  },
  computed: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, Object(vuex_esm["c" /* mapState */])(["form"])), Object(vuex_esm["b" /* mapGetters */])(["formDatas"])), {}, {
    watchFormDatas: function watchFormDatas() {
      if (this.formDatas.fields) {
        this.getCurrentForm(JSON.stringify(this.formDatas));
        return this.formDatas.fields.length;
      }

      return null;
    },
    ListNameforms: function ListNameforms() {
      var lists = [];

      for (var i in this.form.forms) {
        lists.push(this.form.forms[i].info.name);
      }

      return lists;
    }
  }),
  methods: {
    handleOk: function handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault(); // Trigger submit handler

      this.handleSubmit();
    },
    handleSubmit: function handleSubmit(event) {
      event.preventDefault();
      var newStep = JSON.parse(this.formStep);
      this.form.forms.push(newStep);
      this.$bvModal.hide("export-import-stepe");
    },
    input: function input() {
      if (this.readonly && (this.CurrentForm.info.name.length <= 32 || this.CurrentForm.info.title.length <= 32)) {
        var valName = Object(dist_es2015["a" /* snakeCase */])(this.CurrentForm.info.title);

        if (this.ListNameforms.includes(valName)) {
          this.state_name = false;
        } else {
          this.state_name = true;
        }

        this.CurrentForm.info.name = valName;
      }
    },
    toogleReadOnly: function toogleReadOnly() {
      if (this.readonly) this.readonly = false;else this.readonly = true;
    },
    getCurrentForm: function getCurrentForm(currentForm) {
      this.CurrentForm = JSON.parse(currentForm);
    }
  }
});
// CONCATENATED MODULE: ./src/App/ConfigsForms/import-export.vue?vue&type=script&lang=js&
 /* harmony default export */ var ConfigsForms_import_exportvue_type_script_lang_js_ = (import_exportvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/App/ConfigsForms/import-export.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ConfigsForms_import_exportvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "75710c8d",
  null
  
)

/* harmony default export */ var import_export = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=appForm.umd.23.js.map