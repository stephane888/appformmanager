((typeof self !== 'undefined' ? self : this)["webpackJsonpappForm"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpappForm"] || []).push([[2],{

/***/ "63c9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"38d0f794-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/components/TitleBar.vue?vue&type=template&id=0bb93234&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-row',{attrs:{"align-h":"center"}},[_c('b-col',{attrs:{"lg":_vm.conf.col ? '12' : '10',"cols":"12"}},[_c('div',{staticClass:"block-title pr-2"},[_c('div',{staticClass:"backButton",attrs:{"to":"/"},on:{"click":_vm.returnHome}},[_c('img',{attrs:{"src":__webpack_require__("6416"),"alt":"","width":"55px","height":"30px"}})]),_c('h5',{staticClass:"m-0"},[_vm._v(" "+_vm._s(_vm.conf.text)+" "),(_vm.form.name)?_c('span',{staticClass:"form-title"},[_vm._v(" : "+_vm._s(_vm.form.name))]):_vm._e()]),_c('div',[_c('h5',{directives:[{name:"show",rawName:"v-show",value:(_vm.showDevis),expression:"showDevis"}],staticClass:"m-0",class:_vm.uid ? 'title-right' : '',on:{"click":_vm.seeDevis}},[(_vm.uid)?_c('span',[_vm._v(" Voir mes devis")]):_vm._e()])])])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/App/components/TitleBar.vue?vue&type=template&id=0bb93234&

// EXTERNAL MODULE: ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js + 1 modules
var objectSpread2 = __webpack_require__("f3f3");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/components/TitleBar.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var TitleBarvue_type_script_lang_js_ = ({
  props: {
    showDevis: {
      type: Boolean,
      default: true
    },
    conf: {
      type: Object,
      default: function _default() {
        return {
          col: false,
          text: "Estimation de devis"
        };
      }
    }
  },
  data: function data() {
    return {
      value: 1
    };
  },
  computed: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, Object(vuex_esm["c" /* mapState */])(["stepsIndex", "form"])), Object(vuex_esm["b" /* mapGetters */])(["uid"])),
  methods: {
    returnHome: function returnHome() {
      this.$router.push({
        path: "/"
      });
    },
    seeDevis: function seeDevis() {
      this.$router.push({
        path: "/traitement-my-own/".concat(this.id)
      });
    }
  }
});
// CONCATENATED MODULE: ./src/App/components/TitleBar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TitleBarvue_type_script_lang_js_ = (TitleBarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/App/components/TitleBar.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TitleBarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var TitleBar = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "6416":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/long-arrow-alt-left-solid.d9d4427b.svg";

/***/ }),

/***/ "75eb":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7817":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"38d0f794-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/userpage.vue?vue&type=template&id=6ce740ef&scoped=true&lang=html&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-container',{staticClass:"bv-example-row p-5",attrs:{"fluid":"lg"}},[_c('div',[_c('title-bar',{attrs:{"id":_vm.id}}),_c('loaderIcon',{attrs:{"busy":_vm.isComplete}}),_c('b-row',{attrs:{"align-h":"center"}},[_c('transition',{attrs:{"name":"fade"}},[(_vm.formDatas && _vm.formDatas.info)?_c('b-col',{attrs:{"cols":"12","lg":"12"}},[_c('pages',{attrs:{"level":_vm.stepsIndex}})],1):_vm._e()],1)],1)],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/App/userpage.vue?vue&type=template&id=6ce740ef&scoped=true&lang=html&

// EXTERNAL MODULE: ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js + 1 modules
var objectSpread2 = __webpack_require__("f3f3");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"38d0f794-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/FormStep.vue?vue&type=template&id=17d91e95&
var FormStepvue_type_template_id_17d91e95_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"element-center full-block"},[_c('div',{staticClass:"choice-section text-right"},[_c('b-row',{attrs:{"align-h":"end"}},[_c('b-col',[_c('p',{staticClass:"button-travaux"},[_c('a',{attrs:{"href":"/node/52"}},[_vm._v("Tous les travaux")])])])],1),(_vm.mode)?_c('b-button-group',{staticClass:"boutton-absolute"},[_c('b-button',{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.v-info",modifiers:{"hover":true,"v-info":true}}],attrs:{"variant":"outline-info","size":"md","title":"Ajouter un champs"},on:{"click":_vm.addFormField}},[_c('b-icon',{staticStyle:{"font-size":"1.5rem"},attrs:{"icon":"plus"}})],1),_c('b-button',{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.v-success",modifiers:{"hover":true,"v-success":true}}],attrs:{"variant":"outline-success","size":"md","title":"Editer le formulaire"},on:{"click":_vm.configSteps}},[_c('b-icon',{attrs:{"icon":"pencil"}})],1),_c('b-button',{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.v-danger",modifiers:{"hover":true,"v-danger":true}}],attrs:{"variant":"outline-danger","size":"md","title":"Suprimer le formulaire"},on:{"click":_vm.deleteSteps}},[_c('b-icon',{attrs:{"icon":"trash"}})],1),_c('b-button',{directives:[{name:"b-modal",rawName:"v-b-modal.clone-current-stepe",modifiers:{"clone-current-stepe":true}},{name:"b-tooltip",rawName:"v-b-tooltip.hover.v-secondary",modifiers:{"hover":true,"v-secondary":true}}],attrs:{"variant":"outline-secondary","size":"md","title":"cloner l'etape"}},[_c('b-icon',{attrs:{"icon":"clipboard-plus"}})],1)],1):_vm._e()],1),_c('forms'),(_vm.mode)?_c('div',[_c('add-form-field',{attrs:{"isOpen":_vm.modalFormFieldIsOpen,"nouveau":true,"id-modal":'form-step',"field":_vm.field},on:{"update_current_field":_vm.update_current_field}}),_c('StepConfiguration',{ref:"StepConfiguration"}),_c('cloneCurrentStepe')],1):_vm._e()],1)}
var FormStepvue_type_template_id_17d91e95_staticRenderFns = []


// CONCATENATED MODULE: ./src/App/FormStep.vue?vue&type=template&id=17d91e95&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__("e260");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("e6cf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__("3ca3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("ddb0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.splice.js
var es_array_splice = __webpack_require__("a434");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("159b");

// EXTERNAL MODULE: ./src/App/Utilities.js
var Utilities = __webpack_require__("2c10");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"38d0f794-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/input/forms.vue?vue&type=template&id=03ae92d2&lang=html&
var formsvue_type_template_id_03ae92d2_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ValidationObserver',{staticClass:"center-container",scopedSlots:_vm._u([{key:"default",fn:function(v){return [_c('b-row',{staticClass:"block-container",attrs:{"align-h":"center"}},[(_vm.stepsIndex > 0)?_c('b-col',{staticClass:"text-left",attrs:{"cols":"12"}},[_c('div',{staticClass:"backButton",on:{"click":_vm.back}},[_c('img',{attrs:{"src":__webpack_require__("6416"),"alt":""}})])]):_vm._e(),(_vm.formDatas.info.headerTitle && _vm.formDatas.info.description)?_c('div',{staticClass:"help-container"},[_c('div',{staticClass:"help-block"},[_c('p',{staticClass:"help-block__title"},[_vm._v(_vm._s(_vm.formDatas.info.headerTitle))]),_c('p',{staticClass:"help-block__content"},[_vm._v(" "+_vm._s(_vm.formDatas.info.description)+" ")])])]):_vm._e(),_vm._l((_vm.formDatas.fields),function(field,i){return _c('div',{key:i,staticClass:"col-12"},[_c('display-fields',{attrs:{"type":field.type,"id":i}})],1)}),(_vm.StatusStepsIndexs)?_c('b-col',{staticClass:"form-nav-bouton",attrs:{"cols":"12"}},[_c('button',{staticClass:"next-bouton",class:_vm.stepsState && !v.invalid
            ? 'next-bouton--active'
            : 'next-bouton--disable',attrs:{"disabled":_vm.stepsState && !v.invalid ? false : true},on:{"click":_vm.suivant}},[_vm._v(" Suivant ")])]):_vm._e(),(!_vm.StatusStepsIndexs)?_c('b-col',{staticClass:"form-nav-bouton",attrs:{"cols":"12"}},[_c('b-row',[(_vm.uid)?_c('b-col',[_c('button',{staticClass:"next-bouton",on:{"click":function($event){return _vm.SaveByUser(1)}}},[_c('b-icon',{attrs:{"icon":"server"}}),_vm._v(" Enregistrer ")],1)]):_vm._e(),_c('b-col',[_c('button',{staticClass:"next-bouton",on:{"click":function($event){return _vm.SaveByUser(0)}}},[_c('b-icon',{attrs:{"icon":"server"}}),_vm._v(" Me rappeller ")],1)])],1)],1):_vm._e()],2),_c('getStatusValidation',{attrs:{"validation-observer":v}}),_c('add-form-field',{staticClass:"bg-info",attrs:{"fields":{},"nouveau":false,"id-modal":'edit'}})]}}])})}
var formsvue_type_template_id_03ae92d2_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/App/input/forms.vue?vue&type=template&id=03ae92d2&lang=html&

// EXTERNAL MODULE: ./node_modules/vee-validate/dist/vee-validate.esm.js
var vee_validate_esm = __webpack_require__("7bb1");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"38d0f794-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/displayFields.vue?vue&type=template&id=ccedd3ee&
var displayFieldsvue_type_template_id_ccedd3ee_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',[(_vm.type == 'codepostal')?_c('b-row',{attrs:{"align-h":"center"}},[_c('b-col',[_c('autocomplete',{attrs:{"field":_vm.formDatas.fields[_vm.id]}})],1)],1):_vm._e(),(_vm.type == 'checkboximg')?_c('ImageCheck',{attrs:{"field":_vm.formDatas.fields[_vm.id]}}):_vm._e(),(_vm.type == 'text' || _vm.type == 'number')?_c('label-row',{attrs:{"field":_vm.formDatas.fields[_vm.id]}}):_vm._e(),(_vm.type == 'numberup')?_c('label-up',{attrs:{"field":_vm.formDatas.fields[_vm.id]}}):_vm._e(),(_vm.type == 'increment')?_c('b-row',{attrs:{"align-h":"center"}},[_c('increment-number',{attrs:{"field":_vm.formDatas.fields[_vm.id]}})],1):_vm._e(),(_vm.type == 'markuptitle')?_c('markup-title',{attrs:{"field":_vm.formDatas.fields[_vm.id]}}):_vm._e(),(_vm.type == 'markupimage')?_c('markup-image',{attrs:{"field":_vm.formDatas.fields[_vm.id]}}):_vm._e(),(_vm.type == 'radio')?_c('div',[_c('radio',{attrs:{"field":_vm.formDatas.fields[_vm.id]}})],1):_vm._e(),(_vm.type == 'select')?_c('select-display',{attrs:{"field":_vm.formDatas.fields[_vm.id]}}):_vm._e(),(_vm.type == 'checkbox')?_c('checkbox',{attrs:{"field":_vm.confirmStructureField(_vm.formDatas.fields[_vm.id])}}):_vm._e(),(_vm.type == 'radiodesc')?_c('radio-desc',{attrs:{"field":_vm.formDatas.fields[_vm.id]}}):_vm._e(),(_vm.type == 'file')?_c('files',{attrs:{"field":_vm.formDatas.fields[_vm.id]}}):_vm._e(),(_vm.type == 'recapitulatif')?_c('recapitulatif',{attrs:{"field":_vm.formDatas.fields[_vm.id]}}):_vm._e(),(_vm.type == 'userlogin')?_c('userlogin',{attrs:{"field":_vm.formDatas.fields[_vm.id]}}):_vm._e(),(_vm.type == 'input-aide-financiere')?_c('AideFinanciere',{attrs:{"field":_vm.formDatas.fields[_vm.id]}}):_vm._e(),(this.$store.state.mode)?_c('div',{staticClass:"boutton-absolute d-flex"},[_c('b-button',{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.v-success",modifiers:{"hover":true,"v-success":true}}],staticClass:"border-0",attrs:{"size":"sm","variant":"outline-success","title":"Editer ce champs"},on:{"click":_vm.editFormField}},[_c('b-icon',{attrs:{"icon":"pencil","font-scale":"1"}})],1),_c('b-button',{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.v-danger",modifiers:{"hover":true,"v-danger":true}}],staticClass:"border-0",attrs:{"size":"sm","variant":"outline-danger","title":"Supprimer ce champs"},on:{"click":_vm.deleteField}},[_c('b-icon',{attrs:{"icon":"trash","font-scale":"1"}})],1),_c('b-button',{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.v-secondary",modifiers:{"hover":true,"v-secondary":true}}],staticClass:"border-0",attrs:{"size":"sm","variant":"outline-secondary","title":"Deplacer vers le haut"},on:{"click":_vm.modeToUp}},[_c('b-icon',{attrs:{"icon":"arrow-bar-up","font-scale":"1"}})],1),_c('b-button',{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.v-secondary",modifiers:{"hover":true,"v-secondary":true}}],staticClass:"border-0",attrs:{"size":"sm","variant":"outline-secondary","title":"Deplacer vers le bas"},on:{"click":_vm.moveToDown}},[_c('b-icon',{attrs:{"icon":"arrow-bar-down","font-scale":"1"}})],1),_c('b-button',{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.v-secondary",modifiers:{"hover":true,"v-secondary":true}}],staticClass:"border-0",attrs:{"size":"sm","variant":"outline-secondary","title":"Cloner ce champs"},on:{"click":_vm.cloneField}},[_c('b-icon',{attrs:{"icon":"clipboard-plus","font-scale":"1"}})],1)],1):_vm._e()],1),_c('add-form-field',{ref:'editFormField' + _vm.id,attrs:{"field":_vm.field,"nouveau":false,"id-modal":'edit' + _vm.id}})],1)}
var displayFieldsvue_type_template_id_ccedd3ee_staticRenderFns = []


// CONCATENATED MODULE: ./src/App/displayFields.vue?vue&type=template&id=ccedd3ee&

// EXTERNAL MODULE: ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__("0122");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("a9e3");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/displayFields.vue?vue&type=script&lang=js&









//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var displayFieldsvue_type_script_lang_js_ = ({
  components: {
    ImageCheck: function ImageCheck() {
      return __webpack_require__.e(/* import() */ 5).then(__webpack_require__.bind(null, "820b"));
    },
    IncrementNumber: function IncrementNumber() {
      return __webpack_require__.e(/* import() */ 6).then(__webpack_require__.bind(null, "1ad8"));
    },
    //InputText: () => import("./input/InputText.vue"),
    autocomplete: function autocomplete() {
      return Promise.all(/* import() */[__webpack_require__.e(15), __webpack_require__.e(22)]).then(__webpack_require__.bind(null, "fd80"));
    },
    Radio: function Radio() {
      return __webpack_require__.e(/* import() */ 3).then(__webpack_require__.bind(null, "8bfb"));
    },
    RadioDesc: function RadioDesc() {
      return __webpack_require__.e(/* import() */ 20).then(__webpack_require__.bind(null, "795e"));
    },
    Checkbox: function Checkbox() {
      return __webpack_require__.e(/* import() */ 19).then(__webpack_require__.bind(null, "7f81"));
    },
    LabelRow: function LabelRow() {
      return __webpack_require__.e(/* import() */ 7).then(__webpack_require__.bind(null, "ab64"));
    },
    SelectDisplay: function SelectDisplay() {
      return __webpack_require__.e(/* import() */ 21).then(__webpack_require__.bind(null, "1d25"));
    },
    MarkupTitle: function MarkupTitle() {
      return __webpack_require__.e(/* import() */ 10).then(__webpack_require__.bind(null, "725b"));
    },
    MarkupImage: function MarkupImage() {
      return __webpack_require__.e(/* import() */ 9).then(__webpack_require__.bind(null, "1c8e"));
    },
    files: function files() {
      return Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(17)]).then(__webpack_require__.bind(null, "65db"));
    },
    LabelUp: function LabelUp() {
      return __webpack_require__.e(/* import() */ 8).then(__webpack_require__.bind(null, "cc4c"));
    },
    recapitulatif: function recapitulatif() {
      return __webpack_require__.e(/* import() */ 11).then(__webpack_require__.bind(null, "1247"));
    },
    userlogin: function userlogin() {
      return __webpack_require__.e(/* import() */ 12).then(__webpack_require__.bind(null, "be10"));
    },
    AideFinanciere: function AideFinanciere() {
      return __webpack_require__.e(/* import() */ 18).then(__webpack_require__.bind(null, "e8d9"));
    }
  },
  props: {
    type: {
      type: String,
      default: ""
    },
    id: {
      type: Number,
      default: null
    }
  },
  data: function data() {
    return {
      typeFieldSelected: null,
      option: {},
      field: {},
      labelState: null
    };
  },
  watch: {},
  computed: Object(objectSpread2["a" /* default */])({}, Object(vuex_esm["b" /* mapGetters */])(["formDatas"])),
  methods: {
    confirmStructureField: function confirmStructureField(field) {
      if (field.type === "checkbox") {
        var selected = [];

        var type_data = Object(esm_typeof["a" /* default */])(field.value);

        if (type_data !== "object") {
          if (field.value && field.value !== "") {
            selected.push(field.value);
            field.value = selected;
          } else {
            field.value = [];
          }
        }
      }

      return field;
    },
    getImage: function getImage(il) {
      var le = this.formDatas.fields[this.id].options;

      for (var i = 0; i < le.length; i++) {
        if (i == il) {
          le[i].isActive = !le[i].isActive;
          this.formDatas.fields[this.id].value = le[i].value;
        } else {
          le[i].isActive = false;
        }
      }
    },
    editFormField: function editFormField() {
      var idModel = "modal-addForm--edit" + this.id;
      this.field = this.formDatas.fields[this.id];
      this.$bvModal.show(idModel);
    },
    deleteField: function deleteField() {
      var all = this.formDatas.fields;

      for (var i = all.length - 1; i >= 0; i--) {
        if (i === this.id) {
          all.splice(i, 1);
        }
      }
    },
    moveToDown: function moveToDown() {
      var idN = this.id + 1;
      Utilities["a" /* default */].array_move(this.formDatas.fields, this.id, idN);
    },
    modeToUp: function modeToUp() {
      var idP = this.id - 1;
      Utilities["a" /* default */].array_move(this.formDatas.fields, this.id, idP);
    },
    cloneField: function cloneField() {
      var field = JSON.stringify(this.formDatas.fields[this.id]);
      this.formDatas.fields.push(JSON.parse(field));
    }
  }
});
// CONCATENATED MODULE: ./src/App/displayFields.vue?vue&type=script&lang=js&
 /* harmony default export */ var App_displayFieldsvue_type_script_lang_js_ = (displayFieldsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/App/displayFields.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  App_displayFieldsvue_type_script_lang_js_,
  displayFieldsvue_type_template_id_ccedd3ee_render,
  displayFieldsvue_type_template_id_ccedd3ee_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var displayFields = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"38d0f794-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/EditsFields/getStatusValidation.vue?vue&type=template&id=d99bc1b4&scoped=true&lang=html&
var getStatusValidationvue_type_template_id_d99bc1b4_scoped_true_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"object":_vm.validationObserverField}},[_c('pre',{staticClass:"text-left d-none"},[_vm._v(_vm._s(_vm.formDatasValidate))])])}
var getStatusValidationvue_type_template_id_d99bc1b4_scoped_true_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/App/EditsFields/getStatusValidation.vue?vue&type=template&id=d99bc1b4&scoped=true&lang=html&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/EditsFields/getStatusValidation.vue?vue&type=script&lang=js&

//
//
//
//
//
//

/* harmony default export */ var getStatusValidationvue_type_script_lang_js_ = ({
  name: "getStatusValidation",
  props: {
    validationObserver: {
      type: Object,
      required: true
    }
  },
  components: {//
  },
  data: function data() {
    return {//
    };
  },
  mounted: function mounted() {//
  },
  watch: {//
  },
  computed: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, Object(vuex_esm["c" /* mapState */])(["formDatasValidate"])), {}, {
    validationObserverField: function validationObserverField() {
      if (this.validationObserver.fields) {
        this.setFormDatasValidate();
        return this.validationObserver.fields;
      } else {
        return {};
      }
    }
  }),
  methods: {
    setFormDatasValidate: function setFormDatasValidate() {
      this.$store.dispatch("setFormDatasValidate", this.validationObserver.fields);
    }
  }
});
// CONCATENATED MODULE: ./src/App/EditsFields/getStatusValidation.vue?vue&type=script&lang=js&
 /* harmony default export */ var EditsFields_getStatusValidationvue_type_script_lang_js_ = (getStatusValidationvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/App/EditsFields/getStatusValidation.vue





/* normalize component */

var getStatusValidation_component = Object(componentNormalizer["a" /* default */])(
  EditsFields_getStatusValidationvue_type_script_lang_js_,
  getStatusValidationvue_type_template_id_d99bc1b4_scoped_true_lang_html_render,
  getStatusValidationvue_type_template_id_d99bc1b4_scoped_true_lang_html_staticRenderFns,
  false,
  null,
  "d99bc1b4",
  null
  
)

/* harmony default export */ var getStatusValidation = (getStatusValidation_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/input/forms.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var formsvue_type_script_lang_js_ = ({
  name: "forms",
  components: {
    ValidationObserver: vee_validate_esm["a" /* ValidationObserver */],
    DisplayFields: displayFields,
    getStatusValidation: getStatusValidation
  },
  computed: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, Object(vuex_esm["c" /* mapState */])(["form", "mode", "stepsIndex", "StatusStepsIndexs", "price"])), Object(vuex_esm["b" /* mapGetters */])(["formDatas", "uid"])), {}, {
    stepsState: function stepsState() {
      if (this.form.forms && this.form.forms.length - 1 > this.$store.state.stepsIndex) {
        return true;
      }

      return false;
    }
  }),
  methods: {
    suivant: function suivant() {
      if (this.stepsState) {
        this.$store.dispatch("stepsIndex", this.stepsIndex);
        var f = true;

        if (!this.mode || f) {
          this.$store.dispatch("saveDatas");
        }
      }
    },
    back: function back() {
      this.$store.dispatch("stepsBack");
    },
    SaveByUser: function SaveByUser(status) {
      this.$store.dispatch("saveDatasUser", status);
    }
  }
});
// CONCATENATED MODULE: ./src/App/input/forms.vue?vue&type=script&lang=js&
 /* harmony default export */ var input_formsvue_type_script_lang_js_ = (formsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/App/input/forms.vue?vue&type=style&index=0&lang=scss&
var formsvue_type_style_index_0_lang_scss_ = __webpack_require__("ee83");

// CONCATENATED MODULE: ./src/App/input/forms.vue






/* normalize component */

var forms_component = Object(componentNormalizer["a" /* default */])(
  input_formsvue_type_script_lang_js_,
  formsvue_type_template_id_03ae92d2_lang_html_render,
  formsvue_type_template_id_03ae92d2_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var input_forms = (forms_component.exports);
// EXTERNAL MODULE: ./src/App/config/config.js
var config = __webpack_require__("f158");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/FormStep.vue?vue&type=script&lang=js&









//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var FormStepvue_type_script_lang_js_ = ({
  components: {
    StepConfiguration: function StepConfiguration() {
      return __webpack_require__.e(/* import() */ 13).then(__webpack_require__.bind(null, "e248"));
    },
    cloneCurrentStepe: function cloneCurrentStepe() {
      return __webpack_require__.e(/* import() */ 14).then(__webpack_require__.bind(null, "33f3"));
    },
    forms: input_forms
  },
  data: function data() {
    return {
      modalFormFieldIsOpen: false,
      //nombres de champs à afficher
      inputDatas: [],
      selected: "",
      options: [{
        text: "chamblie",
        value: "a"
      }, {
        text: "callakala",
        value: "b"
      }],
      imageCheck: [{
        isActive: false,
        description: "1 côté"
      }, {
        isActive: false,
        description: "2 côté"
      }, {
        isActive: false,
        description: "3 côté"
      }, {
        isActive: false,
        description: "4 côté"
      }],
      field: Utilities["a" /* default */].field()
    };
  },
  computed: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, Object(vuex_esm["c" /* mapState */])(["mode", "stepsIndex", "stepsIndexs", "form"])), Object(vuex_esm["b" /* mapGetters */])(["formDatas"])), {}, {
    taille: function taille() {
      if (this.fields.options.length) {
        return true;
      } else return false;
    }
  }),
  methods: {
    deleteSteps: function deleteSteps() {
      var _this = this;

      var stapes = this.$store.state.form.forms;

      var delStep = function delStep() {
        for (var i = stapes.length - 1; i >= 0; i--) {
          if (i === r) {
            stapes.splice(i, 1); // si cest le dernier element, on remet à zero.

            if (stapes.length < _this.$store.state.stepsIndex) {
              _this.$store.state.stepsIndex = 0;
            }
          }
        }
      };

      var r = stapes.indexOf(this.formDatas);
      var key_step = this.formDatas.info.name;
      this.StepHasChildren(key_step).then(function (r) {
        if (r) {
          config["a" /* default */].modalConfirmDelete("Cette etape contient des etapes enfant, souhaitez vous vraiment la supprimer ?").then(function () {
            delStep();
          });
        } else {
          delStep();
        }
      });
    },

    /**
     * Determine si l'etape contient une etape enfant
     */
    StepHasChildren: function StepHasChildren(key_step) {
      var _this2 = this;

      return new Promise(function (resolv) {
        var stepes = _this2.$store.state.form.forms;

        for (var i in stepes) {
          var step = stepes[i];
          if (step.states && step.states.length) step.states.forEach(function (item) {
            if (key_step == item.state_name) {
              resolv(true);
            }
          });
          var ii = parseInt(i) + 1;

          if (stepes.length == ii) {
            resolv(false);
          }
        }
      });
    },
    addFormField: function addFormField() {
      var idModel = "modal-addForm--form-step";
      this.$bvModal.show(idModel);
    },
    configSteps: function configSteps() {
      this.$refs.StepConfiguration.openPopUp();
    },
    getImage: function getImage(il) {
      for (var i = 0; i < this.imageCheck.length; i++) {
        if (i == il) {
          this.imageCheck[i].isActive = !this.imageCheck[i].isActive;
        } else {
          this.imageCheck[i].isActive = false;
        }
      }
    },
    update_current_field: function update_current_field(field) {
      this.field = JSON.parse(field);
    }
  }
});
// CONCATENATED MODULE: ./src/App/FormStep.vue?vue&type=script&lang=js&
 /* harmony default export */ var App_FormStepvue_type_script_lang_js_ = (FormStepvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/App/FormStep.vue





/* normalize component */

var FormStep_component = Object(componentNormalizer["a" /* default */])(
  App_FormStepvue_type_script_lang_js_,
  FormStepvue_type_template_id_17d91e95_render,
  FormStepvue_type_template_id_17d91e95_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FormStep = (FormStep_component.exports);
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
    pages: FormStep,
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
// EXTERNAL MODULE: ./src/App/userpage.vue?vue&type=style&index=0&id=6ce740ef&lang=scss&scoped=true&
var userpagevue_type_style_index_0_id_6ce740ef_lang_scss_scoped_true_ = __webpack_require__("c454");

// CONCATENATED MODULE: ./src/App/userpage.vue






/* normalize component */

var userpage_component = Object(componentNormalizer["a" /* default */])(
  App_userpagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "6ce740ef",
  null
  
)

/* harmony default export */ var userpage = __webpack_exports__["default"] = (userpage_component.exports);

/***/ }),

/***/ "c454":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_userpage_vue_vue_type_style_index_0_id_6ce740ef_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cbff");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_userpage_vue_vue_type_style_index_0_id_6ce740ef_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_userpage_vue_vue_type_style_index_0_id_6ce740ef_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "cbff":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ee83":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_forms_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("75eb");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_forms_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_forms_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ })

}]);
//# sourceMappingURL=appForm.umd.2.js.map