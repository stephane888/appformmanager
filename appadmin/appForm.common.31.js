((typeof self !== 'undefined' ? self : this)["webpackJsonpappForm"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpappForm"] || []).push([[31],{

/***/ "0690":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"09ade5b7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/traitement/TraitementMyOwn.vue?vue&type=template&id=74a40e92&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-container',{attrs:{"fluid":"md"}},[_c('div',[_c('title-bar',{attrs:{"conf":{ col: true, text: 'Mes Devis : ' + _vm.titreDevis },"id":_vm.id,"showDevis":false}})],1),_c('div',{staticClass:"appfom-container"},[_c('b-row',{attrs:{"align-h":"center"}},[_c('b-col',{attrs:{"cols":"12"}},[_c('listBlocks',{attrs:{"liste_fields_check":_vm.ListeFieldsCheck,"liste_fields_display":_vm.ListeFieldsDisplay,"totalRows":_vm.totalRows,"isBusy":_vm.isBusy,"perPage":_vm.perPage},on:{"ev-change-pagination":_vm.ChangePagination}})],1)],1)],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/App/traitement/TraitementMyOwn.vue?vue&type=template&id=74a40e92&

// EXTERNAL MODULE: ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js + 1 modules
var objectSpread2 = __webpack_require__("f3f3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.splice.js
var es_array_splice = __webpack_require__("a434");

// EXTERNAL MODULE: ./src/App/components/TitleBar.vue + 4 modules
var TitleBar = __webpack_require__("63c9");

// EXTERNAL MODULE: ./src/App/config/config.js + 72 modules
var config = __webpack_require__("f158");

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
      perPage: 8
    };
  },
  watch: {
    stepsId: function stepsId() {
      this.datasBdOrLocalStorage();
    }
  },
  mounted: function mounted() {
    this.loadDatas();
    this.getTotalRows();
  },
  computed: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, Object(vuex_esm["c" /* mapState */])(["traitementId", "form", "traitementItems"])), Object(vuex_esm["b" /* mapGetters */])(["traitementFormItems"])), {}, {
    ListeFieldsDisplay: function ListeFieldsDisplay() {
      var fieldsDisplay = [{
        label: "Date",
        key: "created",
        formatter: function formatter(val) {
          return config["a" /* default */].getMysqlDateToFrench(val);
        }
      }, {
        label: "Que souhaitez vous faire",
        key: "action",
        stickyColumn: true,
        thStyle: {
          minWidth: "170px"
        },
        tdClass: ["bg-light"]
      }, {
        label: "Status",
        key: "status",
        thStyle: {
          minWidth: "140px"
        }
      }, {
        label: "Prix",
        key: "price",
        thStyle: {
          minWidth: "120px"
        },
        formatter: function formatter(value) {
          return value + " €";
        }
      }, {
        label: "Utilisateur",
        key: "uid",
        thStyle: {
          minWidth: "220px"
        }
      }];

      for (var i in this.form.forms) {
        var form = this.form.forms[i];

        for (var f in form.fields) {
          var field = form.fields[f];

          if (field.display_field) {
            fieldsDisplay.push({
              label: field.label,
              key: field.name,
              thStyle: {
                minWidth: "220px"
              }
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
    titreDevis: function titreDevis() {
      if (this.traitementItems.length) {
        return this.traitementItems[0].name;
      } else return "";
    }
  }),
  methods: {
    deleteSteps: function deleteSteps() {
      var all = this.$store.state.allStepsDatas;
      var r = all.indexOf(this.formDatas);
      this.$emit("index-to-delete", r);

      for (var i = all.length - 1; i >= 0; i--) {
        if (i === r) {
          all.splice(i, 1);
        }
      }
    },
    saveToLocal: function saveToLocal() {
      config["a" /* default */].prepareDatasToSave(this.form).then(function (val) {
        config["a" /* default */].saveForm(val).then(function () {//
        });
      });
    },
    resetValue: function resetValue() {
      this.$store.getters.formDatas.selected = "";
      this.$store.getters.formDatas.value = [];
    },
    handleOk: function handleOk(bvModalEvt) {
      bvModalEvt.preventDefault();
      this.handleSubmit();
    },
    handleSubmit: function handleSubmit(event) {
      var _this = this;

      event.preventDefault();
      this.$nextTick(function () {
        _this.$bvModal.hide("modal-prevent-closing");
      });
    },
    getTotalRows: function getTotalRows() {
      var _this2 = this;

      var payload = {
        beginSql: " select count(*) as nombres from `appformmanager_datas` ",
        filters: {
          AND: [],
          OR: []
        }
      };
      payload.filters.AND.push({
        column: "appformmanager_forms",
        value: this.id
      });
      config["a" /* default */].bPost("/appformmanager/count-devis-own", payload, {}, false).then(function (resp) {
        if (resp.data[0] && resp.data[0].nombres) {
          _this2.totalRows = parseInt(resp.data[0].nombres);
        }
      });
    },
    loadDatas: function loadDatas() {
      var _this3 = this;

      var pagination = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      this.isBusy = true;
      var payload = {
        filters: {
          AND: [],
          OR: []
        }
      };
      payload.filters.AND.push({
        column: "appformmanager_forms",
        value: this.id,
        preffix: "dv"
      });
      payload.filters.AND.push({
        column: "order",
        value: 0,
        preffix: "st"
      });
      config["a" /* default */].bPost("/appformmanager/getdevis-own/" + pagination + "/" + this.perPage, payload, {}, false).then(function (resp) {
        _this3.$store.state.traitementItems = resp.data;

        _this3.$store.dispatch("setTraitId", _this3.id);

        _this3.$store.dispatch("setFormId", _this3.id);

        _this3.isBusy = false;
      }).catch(function () {
        _this3.isBusy = false;
      });
    },
    ChangePagination: function ChangePagination(val) {
      this.loadDatas(val - 1);
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
//# sourceMappingURL=appForm.common.31.js.map