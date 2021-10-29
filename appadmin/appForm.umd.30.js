((typeof self !== 'undefined' ? self : this)["webpackJsonpappForm"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpappForm"] || []).push([[30],{

/***/ "0690":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"38d0f794-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/traitement/TraitementMyOwn.vue?vue&type=template&id=bd36de3a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-container',{attrs:{"fluid":"lg"}},[_c('div',{attrs:{"checkUid":_vm.checkUid}},[_c('title-bar',{attrs:{"conf":{ col: true, text: 'Mes Devis' },"id":_vm.id,"showDevis":false}})],1),_c('div',{staticClass:"appfom-container"},[_c('b-row',{attrs:{"align-h":"center"}},[_c('b-col',{attrs:{"cols":"12"}},[_c('listBlocks',{attrs:{"liste_fields_check":_vm.ListeFieldsCheck,"liste_fields_display":_vm.ListeFieldsDisplay,"totalRows":_vm.totalRows,"isBusy":_vm.isBusy,"perPage":_vm.perPage},on:{"ev-change-pagination":_vm.ChangePagination}})],1)],1)],1)])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/App/traitement/TraitementMyOwn.vue?vue&type=template&id=bd36de3a&

// EXTERNAL MODULE: ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js + 1 modules
var objectSpread2 = __webpack_require__("f3f3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.splice.js
var es_array_splice = __webpack_require__("a434");

// EXTERNAL MODULE: ./src/App/config/config.js
var config = __webpack_require__("f158");

// EXTERNAL MODULE: ./src/App/components/TitleBar.vue + 4 modules
var TitleBar = __webpack_require__("63c9");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// EXTERNAL MODULE: ./src/App/traitement/blocks/listBlocks.vue + 9 modules
var listBlocks = __webpack_require__("8bba");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/traitement/TraitementMyOwn.vue?vue&type=script&lang=js&



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//import axios from "axios";
 //import utilities from "./Utilities";




/* harmony default export */ var TraitementMyOwnvue_type_script_lang_js_ = ({
  components: {
    listBlocks: listBlocks["a" /* default */],
    TitleBar: TitleBar["a" /* default */]
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data: function data() {
    return {
      totalRows: 0,
      isBusy: false,
      perPage: 20
    };
  },
  watch: {
    stepsId: function stepsId() {
      this.datasBdOrLocalStorage();
    }
  },
  mounted: function mounted() {//
  },
  computed: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, Object(vuex_esm["c" /* mapState */])(["traitementId"])), Object(vuex_esm["b" /* mapGetters */])(["traitementFormItems", "form", "uid"])), {}, {
    ListeFieldsDisplay: function ListeFieldsDisplay() {
      var fieldsDisplay = [{
        label: "Date",
        key: "created",
        formatter: function formatter(val) {
          return config["a" /* default */].getMysqlDateToFrench(val);
        }
      }, {
        label: "Status",
        key: "status",
        thStyle: {
          minWidth: "140px"
        }
      }, {
        label: "Prix",
        key: "price"
      }, {
        label: "Que souhaitez vous faire",
        key: "action",
        stickyColumn: true
      }];

      for (var i in this.form.forms) {
        var form = this.form.forms[i]; // console.log("etate : ", form.info.name, "\n\n");

        for (var f in form.fields) {
          var field = form.fields[f]; // console.log(field);

          if (field.display_field) {
            fieldsDisplay.push({
              label: field.label,
              key: field.name
            });
          }
        }
      }

      return fieldsDisplay;
    },
    ListeFieldsCheck: function ListeFieldsCheck() {
      var lists = [];

      for (var i in this.ListeFieldsDisplay) {
        lists.push(this.ListeFieldsDisplay[i].key);
      }

      return lists;
    },
    checkUid: function checkUid() {
      if (this.uid) {
        this.loadDatas();
        this.getTotalRows();
        return true;
      }

      return false;
    }
  }),
  methods: {
    deleteSteps: function deleteSteps(datas) {
      var all = this.$store.state.allStepsDatas;
      var r = all.indexOf(this.formDatas);
      this.$emit("index-to-delete", r);
      console.log("de", datas);

      for (var i = all.length - 1; i >= 0; i--) {
        if (i === r) {
          all.splice(i, 1);
          console.log("iiippp");
        }
      }
    },
    saveToLocal: function saveToLocal() {
      //var self = this;
      //var datas = this.form;
      config["a" /* default */].prepareDatasToSave(this.form).then(function (val) {
        config["a" /* default */].saveForm(val).then(function () {//
        });
      });
    },
    resetValue: function resetValue() {
      this.$store.getters.formDatas.selected = "";
      this.$store.getters.formDatas.value = [];
      console.log("prev");
    },
    resetModal: function resetModal() {//   this.formDatas.info.title = "";
      //   this.titleState = null;
      //   this.headerTitle = "";
      //   this.headerState = null;
    },
    handleOk: function handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault(); // Trigger submit handler

      this.handleSubmit();
    },
    handleSubmit: function handleSubmit(event) {
      var _this = this;

      event.preventDefault(); // Exit when the form isn't valid

      this.demo = true;
      this.$nextTick(function () {
        _this.$bvModal.hide("modal-prevent-closing");
      });
    },
    loadDatas: function loadDatas() {
      var _this2 = this;

      var pagination = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      this.isBusy = true;
      var pag = null;
      if (pagination) pag = (pagination - 1) * this.perPage;
      this.$store.dispatch("loadTraitementDatas", {
        id: this.id,
        pagination: pag,
        uid: this.uid
      }).then(function () {
        _this2.$store.dispatch("setTraitId", _this2.id);

        _this2.$store.dispatch("setFormId", _this2.id);

        _this2.isBusy = false;
      });
    },
    ChangePagination: function ChangePagination(val) {
      this.loadDatas(val);
    },
    getTotalRows: function getTotalRows() {
      var _this3 = this;

      var datas = "select count(*) as nombres from `appformmanager_datas` where `appformmanager_forms` = " + this.id + " and `uid` = " + this.uid;
      config["a" /* default */].getData(datas).then(function (resp) {
        if (resp.data[0] && resp.data[0].nombres) {
          _this3.totalRows = parseInt(resp.data[0].nombres);
        }

        console.log("resp[0].nombres : ", resp.data[0]);
      });
    }
  }
});
// CONCATENATED MODULE: ./src/App/traitement/TraitementMyOwn.vue?vue&type=script&lang=js&
 /* harmony default export */ var traitement_TraitementMyOwnvue_type_script_lang_js_ = (TraitementMyOwnvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/App/traitement/TraitementMyOwn.vue?vue&type=style&index=0&lang=scss&
var TraitementMyOwnvue_type_style_index_0_lang_scss_ = __webpack_require__("b49c");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/App/traitement/TraitementMyOwn.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  traitement_TraitementMyOwnvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var TraitementMyOwn = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "5e76":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "b49c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TraitementMyOwn_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5e76");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TraitementMyOwn_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TraitementMyOwn_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ })

}]);
//# sourceMappingURL=appForm.umd.30.js.map