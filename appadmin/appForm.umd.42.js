((typeof self !== 'undefined' ? self : this)["webpackJsonpappForm"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpappForm"] || []).push([[42],{

/***/ "3b12":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"38d0f794-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/formulaire/FormMarkup.vue?vue&type=template&id=e49aef18&scoped=true&lang=html&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-row',{staticClass:"mb-3"},[_c('b-col',{attrs:{"sm":"12"}},[_c('b-form-group',{attrs:{"label":"Label","invalid-feedback":"Name is required"}},[_c('b-input-group',[_c('b-form-input',{attrs:{"required":""},on:{"input":_vm.input},model:{value:(_vm.field.label),callback:function ($$v) {_vm.$set(_vm.field, "label", $$v)},expression:"field.label"}}),_c('b-form-input',{attrs:{"required":"","readonly":_vm.readonly},on:{"dblclick":_vm.toogleReadOnly},model:{value:(_vm.field.name),callback:function ($$v) {_vm.$set(_vm.field, "name", $$v)},expression:"field.name"}})],1)],1)],1),(_vm.field.type == 'markupimage')?_c('b-col',{attrs:{"sm":"12"}},[_c('b-form-group',{attrs:{"label":"Url de l'image"}},[_c('b-form-input',{attrs:{"id":"image-url"},model:{value:(_vm.field.imgUrl),callback:function ($$v) {_vm.$set(_vm.field, "imgUrl", $$v)},expression:"field.imgUrl"}})],1),_c('manageImages',{on:{"ev_manage_images_img":function($event){return _vm.ev_manage_images_img($event)}}})],1):_vm._e()],1),_c('ValidationFields',{attrs:{"field":_vm.field}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/App/formulaire/FormMarkup.vue?vue&type=template&id=e49aef18&scoped=true&lang=html&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("a9e3");

// EXTERNAL MODULE: ./node_modules/snake-case/dist.es2015/index.js + 5 modules
var dist_es2015 = __webpack_require__("a4d6");

// EXTERNAL MODULE: ./src/App/EditsFields/ValidationFields.vue + 10 modules
var ValidationFields = __webpack_require__("0931");

// EXTERNAL MODULE: ./src/App/EditsFields/manage-images.vue + 4 modules
var manage_images = __webpack_require__("910d");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/formulaire/FormMarkup.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var FormMarkupvue_type_script_lang_js_ = ({
  name: "FormMarkup",
  props: {
    title: {
      type: Boolean,
      default: true
    },
    field: {
      type: Object,
      required: true,
      validator: function validator(val) {
        return val.label === undefined || val.value === undefined || val.name === undefined || val.require === undefined ? false : true;
      }
    }
  },
  components: {
    ValidationFields: ValidationFields["a" /* default */],
    manageImages: manage_images["a" /* default */]
  },
  data: function data() {
    return {
      readonly: true,
      value: ""
    };
  },
  mounted: function mounted() {//
  },
  watch: {//
  },
  computed: {},
  methods: {
    ev_manage_images_img: function ev_manage_images_img(data) {
      if (data.url) {
        this.field.imgUrl = data.url;
      }
    },
    inputValue: function inputValue() {
      if (this.value.length) {
        return this.field.value = Number(this.value);
      }
    },
    input: function input() {
      if (this.readonly && this.field.name.length <= 32) {
        this.field.name = Object(dist_es2015["a" /* snakeCase */])(this.field.label);
      }
    },
    toogleReadOnly: function toogleReadOnly() {
      if (this.readonly) this.readonly = false;else this.readonly = true;
    }
  }
});
// CONCATENATED MODULE: ./src/App/formulaire/FormMarkup.vue?vue&type=script&lang=js&
 /* harmony default export */ var formulaire_FormMarkupvue_type_script_lang_js_ = (FormMarkupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/App/formulaire/FormMarkup.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  formulaire_FormMarkupvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "e49aef18",
  null
  
)

/* harmony default export */ var FormMarkup = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=appForm.umd.42.js.map