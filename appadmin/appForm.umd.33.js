((typeof self !== 'undefined' ? self : this)["webpackJsonpappForm"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpappForm"] || []).push([[33],{

/***/ "e248":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"38d0f794-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/ConfigsForms/StepConfiguration.vue?vue&type=template&id=4c5361d0&scoped=true&lang=html&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-modal',{attrs:{"size":"lg","id":_vm.idModal,"title":"Configuration de l'etape","hide-footer":""},on:{"ok":_vm.handleOk},model:{value:(_vm.isOpen),callback:function ($$v) {_vm.isOpen=$$v},expression:"isOpen"}},[_c('form',{ref:"forme",on:{"submit":_vm.handleSubmit,"reset":_vm.resetModal,"hidden":_vm.resetModal}},[_c('b-form-group',{attrs:{"label":"Titre","invalid-feedback":"Name is required"}},[_c('b-input-group',[_c('b-form-input',{attrs:{"required":""},on:{"input":_vm.input},model:{value:(_vm.formDatas.info.title),callback:function ($$v) {_vm.$set(_vm.formDatas.info, "title", $$v)},expression:"formDatas.info.title"}}),_c('b-form-input',{attrs:{"required":"","readonly":_vm.readonly,"state":_vm.state_name},on:{"dblclick":_vm.toogleReadOnly},model:{value:(_vm.formDatas.info.name),callback:function ($$v) {_vm.$set(_vm.formDatas.info, "name", $$v)},expression:"formDatas.info.name"}})],1)],1),_c('b-form-group',{attrs:{"label":"Titre texte d'aide","invalid-feedback":"the header title is required"}},[_c('b-form-input',{model:{value:(_vm.formDatas.info.headerTitle),callback:function ($$v) {_vm.$set(_vm.formDatas.info, "headerTitle", $$v)},expression:"formDatas.info.headerTitle"}})],1),_c('b-form-group',{attrs:{"label":"Texte d'aide","invalid-feedback":"the header title is required"}},[_c('b-form-input',{model:{value:(_vm.formDatas.info.description),callback:function ($$v) {_vm.$set(_vm.formDatas.info, "description", $$v)},expression:"formDatas.info.description"}})],1),_c('ValidationEtapes',{attrs:{"currentFormDatas":_vm.formDatas}}),_c('hr'),_c('b-row',{attrs:{"align-h":"end"}},[_c('div',{staticClass:"mr-3"},[_c('b-button',{attrs:{"type":"submit","variant":"outline-info","size":"sm"}},[_c('b-icon',{attrs:{"icon":"plus"}}),_vm._v(" Mettre à jour ")],1)],1)])],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/App/ConfigsForms/StepConfiguration.vue?vue&type=template&id=4c5361d0&scoped=true&lang=html&

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

// EXTERNAL MODULE: ./src/App/ConfigsForms/ValidationEtapes.vue + 4 modules
var ValidationEtapes = __webpack_require__("b9f1");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/ConfigsForms/StepConfiguration.vue?vue&type=script&lang=js&




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var StepConfigurationvue_type_script_lang_js_ = ({
  name: "StepConfiguration",
  props: {
    idModal: {
      type: String,
      default: "step-configuration"
    }
  },
  components: {
    ValidationEtapes: ValidationEtapes["a" /* default */]
  },
  data: function data() {
    return {
      isOpen: false,
      readonly: true,
      state_name: true
    };
  },
  mounted: function mounted() {//
  },
  watch: {//
  },
  computed: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, Object(vuex_esm["c" /* mapState */])(["mode", "form"])), Object(vuex_esm["b" /* mapGetters */])(["formDatas"])), {}, {
    ListNameforms: function ListNameforms() {
      var lists = [];

      for (var i in this.form.forms) {
        lists.push(this.form.forms[i].info.name);
      }

      return lists;
    }
  }),
  methods: {
    openPopUp: function openPopUp() {
      this.isOpen = !this.isOpen;
    },
    handleOk: function handleOk(event) {
      // Prevent modal from closing
      event.preventDefault(); // Trigger submit handler

      this.handleSubmit();
    },
    handleSubmit: function handleSubmit(event) {
      var _this = this;

      event.preventDefault(); // Hide the modal manually

      this.$nextTick(function () {
        _this.$bvModal.hide(_this.idModal);
      });
    },
    resetModal: function resetModal() {//this.type = null;
    },
    input: function input() {
      if (this.readonly && this.formDatas.info.name.length <= 32) {
        var valName = Object(dist_es2015["a" /* snakeCase */])(this.formDatas.info.title);

        if (this.ListNameforms.includes(valName)) {
          this.state_name = false;
        } else {
          this.state_name = true;
        }

        this.formDatas.info.name = valName;
      }
    },
    toogleReadOnly: function toogleReadOnly() {
      if (this.readonly) this.readonly = false;else this.readonly = true;
    }
  }
});
// CONCATENATED MODULE: ./src/App/ConfigsForms/StepConfiguration.vue?vue&type=script&lang=js&
 /* harmony default export */ var ConfigsForms_StepConfigurationvue_type_script_lang_js_ = (StepConfigurationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/App/ConfigsForms/StepConfiguration.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ConfigsForms_StepConfigurationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "4c5361d0",
  null
  
)

/* harmony default export */ var StepConfiguration = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=appForm.umd.33.js.map