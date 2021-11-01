((typeof self !== 'undefined' ? self : this)["webpackJsonpappForm"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpappForm"] || []).push([[20],{

/***/ "3684":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Addfield_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ce14");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Addfield_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Addfield_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

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

/***/ "abee":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"38d0f794-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/GestionFields.vue?vue&type=template&id=236c924a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('title-bar',{attrs:{"conf":{ col: true, text: 'Gestion des champs' }}}),_c('Filtre',{attrs:{"listForms":_vm.listForms}}),_c('tableauChamps',{attrs:{"listForms":_vm.listForms}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/App/GestionFields.vue?vue&type=template&id=236c924a&

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("159b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// EXTERNAL MODULE: ./src/App/components/TitleBar.vue + 4 modules
var TitleBar = __webpack_require__("63c9");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"38d0f794-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/gestions-chemps/filtres.vue?vue&type=template&id=0db71dec&
var filtresvue_type_template_id_0db71dec_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-form',{staticClass:"mb-5"},[_c('b-row',[_c('b-col',{attrs:{"md":"4"}},[_c('b-form-group',{attrs:{"label":"Grouper par formulaire.","label-for":"type-input","invalid-feedback":"type is required"}},[_c('b-form-select',{attrs:{"options":_vm.listForms},on:{"change":_vm.SelectionForm},model:{value:(_vm.$store.state.filtre.formid),callback:function ($$v) {_vm.$set(_vm.$store.state.filtre, "formid", $$v)},expression:"$store.state.filtre.formid"}})],1)],1),_c('b-col',{staticClass:"d-flex align-items-end pb-md-3 justify-content-end",attrs:{"md":"8"}},[_c('b-button',{staticClass:"mt-3 mr-3",attrs:{"variant":"outline-info"},on:{"click":_vm.OpenModalAddField}},[_vm._v(" + Ajouter un champs ")]),_c('b-button',{staticClass:"mt-3 mr-3",attrs:{"variant":"outline-info"}},[_vm._v(" + Exporter ")]),_c('b-button',{staticClass:"mt-3",attrs:{"variant":"outline-info"}},[_vm._v(" + Importer ")])],1)],1)],1),_c('AddForm',{attrs:{"listForms":_vm.listForms,"defaultFormid":_vm.$store.state.filtre.formid,"field":_vm.field,"idModal":"filter"},on:{"set_default_field":_vm.set_default_field}})],1)}
var filtresvue_type_template_id_0db71dec_staticRenderFns = []


// CONCATENATED MODULE: ./src/App/gestions-chemps/filtres.vue?vue&type=template&id=0db71dec&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"38d0f794-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/gestions-chemps/Addfield.vue?vue&type=template&id=5f26ca92&
var Addfieldvue_type_template_id_5f26ca92_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-modal',{attrs:{"size":"lg","id":'modal-addForm--' + _vm.idModal,"title":"Ajouter un champs dans le gestionnaire de champs","hide-footer":"","content-class":['mange-add-field']},on:{"ok":_vm.handleOk}},[_c('loaderIcon',{attrs:{"busy":_vm.busy}}),_c('form',{ref:"forme",on:{"submit":_vm.handleSubmit,"reset":_vm.resetModal,"hidden":_vm.resetModal}},[_c('b-row',[_c('b-col',{attrs:{"cols":"6"}},[_c('b-form-group',{attrs:{"label":"Sélectionner un model de base","label-for":"type-input","invalid-feedback":"type is required"}},[_c('b-form-select',{attrs:{"options":_vm.typeOptions,"id":"type-input","required":""},model:{value:(_vm.field.type),callback:function ($$v) {_vm.$set(_vm.field, "type", $$v)},expression:"field.type"}})],1)],1),_c('b-col',{attrs:{"cols":"6"}},[_c('b-form-group',{attrs:{"label":"Accosier à un formulaire","label-for":"type-input","invalid-feedback":"type is required","description":"Cela permet de grouper ce champs avec le formulaire selectionné"}},[_c('b-form-select',{attrs:{"options":_vm.listForms,"id":"type-input-2","required":""},model:{value:(_vm.field.formid),callback:function ($$v) {_vm.$set(_vm.field, "formid", $$v)},expression:"field.formid"}})],1)],1)],1),_c('input-option-form',{staticClass:"content-config-field",attrs:{"type":_vm.field.type,"field":_vm.field}}),_c('b-row',{attrs:{"align-h":"end"}},[_c('div',{staticClass:"mt-3 mx-3"},[_c('b-button',{staticClass:"mr-2",attrs:{"type":"submit","variant":"primary","disabled":_vm.field.name.length > 2 ? false : true}},[_vm._v(" "+_vm._s(_vm.nameButtonOk)+" ")])],1)])],1)],1)}
var Addfieldvue_type_template_id_5f26ca92_staticRenderFns = []


// CONCATENATED MODULE: ./src/App/gestions-chemps/Addfield.vue?vue&type=template&id=5f26ca92&

// EXTERNAL MODULE: ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js + 1 modules
var objectSpread2 = __webpack_require__("f3f3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("a9e3");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// EXTERNAL MODULE: ./src/App/inputOptionForm.vue + 29 modules
var inputOptionForm = __webpack_require__("4fa8");

// EXTERNAL MODULE: ./src/App/components/loaderIcon.vue + 4 modules
var loaderIcon = __webpack_require__("021a");

// EXTERNAL MODULE: ./src/App/Utilities.js
var Utilities = __webpack_require__("2c10");

// EXTERNAL MODULE: ./src/App/config/config.js
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
          console.log("resp : ", resp); //on recupere cette ligne dans la table.

          if (resp.data) {
            resp.data.forEach(function (item) {
              _this2.$store.dispatch("GetFields", {
                id: item.result
              }).then(function () {
                _this2.busy = false;

                _this2.$emit("set_default_field");

                _this2.$nextTick(function () {
                  _this2.$bvModal.hide("modal-addForm--" + _this2.idModal);
                });
              });
            });
          }
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
  Addfieldvue_type_template_id_5f26ca92_render,
  Addfieldvue_type_template_id_5f26ca92_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Addfield = (component.exports);
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
//import config from "../config/config.js";


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
    AddForm: Addfield
  },
  data: function data() {
    return {
      field: Utilities["a" /* default */].field()
    };
  },
  methods: {
    OpenModalAddField: function OpenModalAddField() {
      this.$bvModal.show("modal-addForm--filter");
    },

    /**
     * Remet la valeur par defaut apres selection.
     */
    set_default_field: function set_default_field() {
      this.field = Utilities["a" /* default */].field();
    },

    /**
     * --
     */
    SelectionForm: function SelectionForm(val) {
      this.$store.state.filtre.formid = val;
      this.$store.dispatch("GetFields");
    }
  }
});
// CONCATENATED MODULE: ./src/App/gestions-chemps/filtres.vue?vue&type=script&lang=js&
 /* harmony default export */ var gestions_chemps_filtresvue_type_script_lang_js_ = (filtresvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/App/gestions-chemps/filtres.vue





/* normalize component */

var filtres_component = Object(componentNormalizer["a" /* default */])(
  gestions_chemps_filtresvue_type_script_lang_js_,
  filtresvue_type_template_id_0db71dec_render,
  filtresvue_type_template_id_0db71dec_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var filtres = (filtres_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"38d0f794-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/gestions-chemps/tableauChamps.vue?vue&type=template&id=3a7ac706&
var tableauChampsvue_type_template_id_3a7ac706_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-table',{attrs:{"hover":"","small":"","caption-top":"","responsive":"","bordered":"","busy":_vm.loaders.GestionField,"items":_vm.fieldsRender,"fields":_vm.fieldsName},scopedSlots:_vm._u([{key:"table-busy",fn:function(){return [_c('loaderIcon',{attrs:{"busy":_vm.loaders.GestionField}})]},proxy:true},{key:"cell(actions)",fn:function(row){return [_c('buttonAction',{attrs:{"row":row,"listForms":_vm.listForms}})]}},{key:"cell(formid)",fn:function(row){return [_vm._v(" "+_vm._s(_vm.getStringValue(row.value))+" ")]}},{key:"cell(value)",fn:function(row){return [_c(_vm.templateRender(row.item.type),{tag:"component",attrs:{"field":row.item}})]}}])})],1)}
var tableauChampsvue_type_template_id_3a7ac706_staticRenderFns = []


// CONCATENATED MODULE: ./src/App/gestions-chemps/tableauChamps.vue?vue&type=template&id=3a7ac706&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"38d0f794-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/gestions-chemps/tableauChampsAction.vue?vue&type=template&id=633afe98&
var tableauChampsActionvue_type_template_id_633afe98_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"boutton-absolute d-flex"},[_c('b-button',{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.v-info",modifiers:{"hover":true,"v-info":true}}],staticClass:"border-0",attrs:{"size":"md","variant":"outline-info","title":"Editer le champs"},on:{"click":_vm.editerField}},[_c('b-icon',{attrs:{"icon":"pencil-square","aria-hidden":"true"}})],1),_c('b-button',{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.v-info",modifiers:{"hover":true,"v-info":true}}],staticClass:"border-0",attrs:{"size":"md","variant":"outline-secondary","title":"cloner le champs"},on:{"click":function($event){return _vm.$emit('cloner-field', _vm.row)}}},[_c('b-icon',{attrs:{"icon":"clipboard-plus","aria-hidden":"true"}})],1),_c('b-button',{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.v-danger",modifiers:{"hover":true,"v-danger":true}}],staticClass:"border-0",attrs:{"size":"md","variant":"outline-danger","title":"Supprimer le champs"},on:{"click":_vm.deleteField}},[_c('b-icon',{attrs:{"icon":"trash-fill","aria-hidden":"true"}})],1),_c('AddForm',{attrs:{"listForms":_vm.listForms,"defaultFormid":_vm.field.formid,"field":_vm.field,"idModal":'edit' + _vm.row.index}})],1)}
var tableauChampsActionvue_type_template_id_633afe98_staticRenderFns = []


// CONCATENATED MODULE: ./src/App/gestions-chemps/tableauChampsAction.vue?vue&type=template&id=633afe98&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.splice.js
var es_array_splice = __webpack_require__("a434");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/gestions-chemps/tableauChampsAction.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var tableauChampsActionvue_type_script_lang_js_ = ({
  name: "tableauChampsAction",
  props: {
    row: {
      type: Object
    },
    listForms: {
      type: Array
    }
  },
  components: {
    AddForm: Addfield
  },
  computed: {
    field: function field() {
      if (this.row) {
        return this.row.item;
      } else {
        return {};
      }
    }
  },
  methods: {
    editerField: function editerField() {
      this.$bvModal.show("modal-addForm--edit" + this.row.index);
    },

    /**
     * --
     */
    deleteField: function deleteField() {
      var _this = this;

      config["a" /* default */].modalConfirmDelete().then(function () {
        _this.$store.state.loaders.GestionField = true;
        config["a" /* default */].deleteField(_this.row.item).then(function () {
          _this.$store.state.fields.splice(_this.row.index, 1);

          _this.$store.state.loaders.GestionField = false;
        });
      });
    }
  }
});
// CONCATENATED MODULE: ./src/App/gestions-chemps/tableauChampsAction.vue?vue&type=script&lang=js&
 /* harmony default export */ var gestions_chemps_tableauChampsActionvue_type_script_lang_js_ = (tableauChampsActionvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/App/gestions-chemps/tableauChampsAction.vue





/* normalize component */

var tableauChampsAction_component = Object(componentNormalizer["a" /* default */])(
  gestions_chemps_tableauChampsActionvue_type_script_lang_js_,
  tableauChampsActionvue_type_template_id_633afe98_render,
  tableauChampsActionvue_type_template_id_633afe98_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var tableauChampsAction = (tableauChampsAction_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"38d0f794-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/gestions-chemps/renders/lists.vue?vue&type=template&id=3df55c47&
var listsvue_type_template_id_3df55c47_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-list-group',{staticClass:"list-small"},_vm._l((_vm.field.options),function(option,i){return _c('b-list-group-item',{key:i,staticClass:"item-vertical"},[_c('div',{staticClass:"d-flex"},[_c('span',{staticClass:"item"},[_vm._v(_vm._s(option.text))]),_c('span',{staticClass:"item"},[_vm._v(_vm._s(option.cout)+" €")])])])}),1)],1)}
var listsvue_type_template_id_3df55c47_staticRenderFns = []


// CONCATENATED MODULE: ./src/App/gestions-chemps/renders/lists.vue?vue&type=template&id=3df55c47&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/gestions-chemps/renders/lists.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var listsvue_type_script_lang_js_ = ({
  name: "radio",
  props: {
    field: {
      type: Object,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./src/App/gestions-chemps/renders/lists.vue?vue&type=script&lang=js&
 /* harmony default export */ var renders_listsvue_type_script_lang_js_ = (listsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/App/gestions-chemps/renders/lists.vue





/* normalize component */

var lists_component = Object(componentNormalizer["a" /* default */])(
  renders_listsvue_type_script_lang_js_,
  listsvue_type_template_id_3df55c47_render,
  listsvue_type_template_id_3df55c47_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var lists = (lists_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/gestions-chemps/tableauChamps.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var tableauChampsvue_type_script_lang_js_ = ({
  name: "tableauChamps",
  props: {
    listForms: {
      type: Array,
      required: true
    }
  },
  components: {
    buttonAction: tableauChampsAction,
    radio: lists
  },
  data: function data() {
    return {
      fieldsName: [{
        key: "formid",
        label: "Group de champs"
      }, {
        key: "label",
        sortable: false,
        label: "Etiquetes" // formatter(value, key, item) {
        //   console.log("formatter : ", value, "\n", key, "\n", item);
        //   return item.field.label;
        // },

      }, {
        key: "value",
        label: "Prix",
        sortable: true
      }, {
        key: "type",
        label: "Type"
      }, {
        key: "actions",
        label: "#Actions",
        class: ["position-relative"]
      }]
    };
  },
  mounted: function mounted() {
    this.$store.dispatch("GetFields");
  },
  computed: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, Object(vuex_esm["c" /* mapState */])(["fields", "filtre", "loaders"])), {}, {
    fieldsRender: function fieldsRender() {
      var results = [];
      this.fields.forEach(function (item) {
        results.push(Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, JSON.parse(item.jsonfield)), {}, {
          id: item.id
        }));
      });
      return results;
    }
  }),
  methods: {
    /**
     * --
     */
    getStringValue: function getStringValue(val) {
      for (var i in this.listForms) {
        var option = this.listForms[i];

        if (option.value === val) {
          return option.text;
        }
      }
    },

    /**
     * --
     */
    templateRender: function templateRender(type) {
      var template = "";

      switch (type) {
        case "radio":
          template = lists;
          break;

        case "checkbox":
          template = lists;
          break;

        default:
          break;
      }

      return template;
    }
  }
});
// CONCATENATED MODULE: ./src/App/gestions-chemps/tableauChamps.vue?vue&type=script&lang=js&
 /* harmony default export */ var gestions_chemps_tableauChampsvue_type_script_lang_js_ = (tableauChampsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/App/gestions-chemps/tableauChamps.vue





/* normalize component */

var tableauChamps_component = Object(componentNormalizer["a" /* default */])(
  gestions_chemps_tableauChampsvue_type_script_lang_js_,
  tableauChampsvue_type_template_id_3a7ac706_render,
  tableauChampsvue_type_template_id_3a7ac706_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var tableauChamps = (tableauChamps_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/GestionFields.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//



/* harmony default export */ var GestionFieldsvue_type_script_lang_js_ = ({
  name: "GestionFields",
  components: {
    TitleBar: TitleBar["a" /* default */],
    Filtre: filtres,
    tableauChamps: tableauChamps
  },
  data: function data() {
    return {
      listForms: []
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$store.dispatch("loadFormsDatas").then(function () {
      _this.$store.state.items.forEach(function (item) {
        _this.listForms.push({
          value: item.id,
          text: item.name
        });
      });
    });
  }
});
// CONCATENATED MODULE: ./src/App/GestionFields.vue?vue&type=script&lang=js&
 /* harmony default export */ var App_GestionFieldsvue_type_script_lang_js_ = (GestionFieldsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/App/GestionFields.vue





/* normalize component */

var GestionFields_component = Object(componentNormalizer["a" /* default */])(
  App_GestionFieldsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var GestionFields = __webpack_exports__["default"] = (GestionFields_component.exports);

/***/ }),

/***/ "ce14":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=appForm.common.20.js.map