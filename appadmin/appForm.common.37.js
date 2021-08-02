((typeof self !== 'undefined' ? self : this)["webpackJsonpappForm"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpappForm"] || []).push([[37],{

/***/ "c0e4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"16091a90-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/ConfigsForms/SettingForm.vue?vue&type=template&id=405e0a51&scoped=true&lang=html&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-modal',{ref:"modal",attrs:{"id":"setting-form","title":"Configuration de la page","hide-footer":""},on:{"ok":_vm.handleOk}},[_c('form',{ref:"form",staticClass:"p-3",on:{"submit":_vm.handleSubmit}},[_c('b-row',{staticClass:"shadow-sm"},[_c('b-col',{attrs:{"cols":"8"}},[_c('b-form-group',{attrs:{"label":"Titre de la page","label-for":"name-input"}},[_c('b-form-input',{attrs:{"required":""},model:{value:(_vm.pageInfo.title),callback:function ($$v) {_vm.$set(_vm.pageInfo, "title", $$v)},expression:"pageInfo.title"}})],1)],1),_c('b-col',{attrs:{"cols":"10"}},[_c('b-form-group',{attrs:{"label":"Description","label-for":"description-input"}},[_c('ckeditor',{attrs:{"editor":_vm.editor,"config":_vm.editorConfig},model:{value:(_vm.pageInfo.description),callback:function ($$v) {_vm.$set(_vm.pageInfo, "description", $$v)},expression:"pageInfo.description"}})],1)],1),_c('b-col',{attrs:{"cols":"12"}},[_c('b-form-group',{attrs:{"label":"vidéo ","label-for":"description-input"}},[_c('b-form-input',{attrs:{"required":""},model:{value:(_vm.pageInfo.video),callback:function ($$v) {_vm.$set(_vm.pageInfo, "video", $$v)},expression:"pageInfo.video"}})],1)],1)],1),_c('b-row',{attrs:{"align-h":"end"}},[_c('div',{staticClass:"mr-3"},[_c('b-button',{staticClass:"mr-2",attrs:{"type":"submit","variant":"primary"}},[_vm._v(" Ajouter ")])],1)])],1)])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/App/ConfigsForms/SettingForm.vue?vue&type=template&id=405e0a51&scoped=true&lang=html&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js + 1 modules
var objectSpread2 = __webpack_require__("5530");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// EXTERNAL MODULE: ./node_modules/@ckeditor/ckeditor5-vue2/dist/ckeditor.js
var ckeditor = __webpack_require__("6930");
var ckeditor_default = /*#__PURE__*/__webpack_require__.n(ckeditor);

// EXTERNAL MODULE: ./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js
var build_ckeditor = __webpack_require__("fb3d");
var build_ckeditor_default = /*#__PURE__*/__webpack_require__.n(build_ckeditor);

// EXTERNAL MODULE: ./src/App/config/config.js
var config = __webpack_require__("f158");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/ConfigsForms/SettingForm.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 //




/* harmony default export */ var SettingFormvue_type_script_lang_js_ = ({
  name: "AddEditForm",
  props: {//
  },
  components: {
    ckeditor: ckeditor_default.a.component
  },
  data: function data() {
    return {
      editor: build_ckeditor_default.a,
      editorData: "",
      editorConfig: {// The configuration of the editor.
      },
      form: {
        forms: [],
        description: "",
        name: "",
        img: ""
      }
    };
  },
  mounted: function mounted() {//
  },
  watch: {//
  },
  computed: Object(objectSpread2["a" /* default */])({}, Object(vuex_esm["c" /* mapState */])(["pageInfo"])),
  methods: {
    loadPageInfo: function loadPageInfo() {
      this.$store.dispatch("loadPageInfo");
    },
    ev_manage_images_img: function ev_manage_images_img(data, form) {
      console.log("file", data);

      if (data.url) {
        form.img = data.url;
      }
    },
    handleOk: function handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault(); // Trigger submit handler

      this.handleSubmit();
    },
    handleSubmit: function handleSubmit(event) {
      var _this = this;

      var datas = {
        name: "pageInfo",
        value: this.pageInfo
      };
      event.preventDefault();
      config["a" /* default */].prepareSettingForm(datas).then(function (val) {
        config["a" /* default */].saveForm(val).then(function () {
          _this.$nextTick(function () {
            _this.$bvModal.hide("setting-form");

            _this.loadPageInfo();
          });
        });
      });
    }
  }
});
// CONCATENATED MODULE: ./src/App/ConfigsForms/SettingForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var ConfigsForms_SettingFormvue_type_script_lang_js_ = (SettingFormvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/App/ConfigsForms/SettingForm.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ConfigsForms_SettingFormvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "405e0a51",
  null
  
)

/* harmony default export */ var SettingForm = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=appForm.common.37.js.map