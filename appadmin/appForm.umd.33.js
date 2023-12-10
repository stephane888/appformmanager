((typeof self !== 'undefined' ? self : this)["webpackJsonpappForm"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpappForm"] || []).push([[33],{

/***/ "63c9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"09ade5b7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/components/TitleBar.vue?vue&type=template&id=0bb93234&
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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"09ade5b7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/GestionFields.vue?vue&type=template&id=04b68272&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('title-bar',{attrs:{"conf":{ col: true, text: 'Gestion des champs' }}}),_c('Filtre',{attrs:{"listForms":_vm.listForms}}),_c('tableauChamps',{attrs:{"listForms":_vm.listForms}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/App/GestionFields.vue?vue&type=template&id=04b68272&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("e6cf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__("e260");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__("3ca3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("ddb0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("159b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// EXTERNAL MODULE: ./src/App/components/TitleBar.vue + 4 modules
var TitleBar = __webpack_require__("63c9");

// EXTERNAL MODULE: ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js + 1 modules
var objectSpread2 = __webpack_require__("f3f3");

// EXTERNAL MODULE: ./src/App/config/config.js + 72 modules
var config = __webpack_require__("f158");

// CONCATENATED MODULE: ./src/App/gestions-chemps/store.js


// mini store, utilisable uniquement dans l'espace de gestion des champs.

/* harmony default export */ var store = ({
  state: function state() {
    return {
      /**
       * Contient la liste des champs utilisés par le gestionnaire de champs.
       */
      fields: [],

      /**
       * Permet de filtrer les champs reçu.
       */
      filtre: {
        formid: ""
      },

      /**
       * - permet d'afficher un loader, si necessaire.
       */
      loaders: {
        GestionField: false,
        GestionFieldFiltre: false
      }
    };
  },
  mutations: {
    SET_FIELDS: function SET_FIELDS(state, fields) {
      fields.forEach(function (item) {
        state.fields.push(Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, item.jsonfield), {}, {
          id: item.id,
          stepes: item.stepes
        }));
      });
    },
    SET_FILTRE: function SET_FILTRE(state, filtre) {
      state.filtre[filtre.key] = filtre.value;
    }
  },
  actions: {
    /**
     * Recupere les champs
     * @param {*} param0
     */
    GetFields: function GetFields(_ref) {
      var commit = _ref.commit,
          state = _ref.state,
          dispatch = _ref.dispatch;
      state.loaders.GestionField = true;
      state.loaders.GestionFieldFiltre = true;
      state.fields = []; // var datas =
      //   " select f.id, f.machine_name, f.formid, f.jsonfield, f.uid, aps.info  from `appformmanager_fields` as f ";
      // datas +=
      //   " left join `appformmanager_steps_fields` as apsf ON apsf.formid = f.formid and apsf.machine_name = f.machine_name ";
      // datas +=
      //   " left join `appformmanager_steps` as aps ON aps.stepid = apsf.stepid ";

      if (state.filtre.formid) {
        // datas +=
        //   " where f.formid='" + state.filtre.formid + "' order by f.id DESC ";
        var payload = {
          filters: {
            AND: []
          }
        };
        payload.filters.AND.push({
          column: "formid",
          value: state.filtre.formid,
          preffix: "f"
        });
        return config["a" /* default */].bPost("/appformmanager/load-fields", payload).then(function (r) {
          commit("SET_FIELDS", r.data);
          state.loaders.GestionField = false;
          dispatch("GetFieldsDefault");
        }).catch(function () {
          state.loaders.GestionField = false;
          state.loaders.GestionFieldFiltre = false;
        });
      }
    },
    GetFieldsDefault: function GetFieldsDefault(_ref2) {
      var state = _ref2.state;

      // var datas =
      //   " select f.defaultjson from `appformmanager_steps_fields` as f ";
      if (state.filtre.formid !== "") {
        // datas +=
        //   " where f.defaultjson is not null and f.formid=" +
        //   state.filtre.formid +
        //   "  order by f.stepid ASC  ";
        var payload = {
          filters: {
            AND: []
          }
        };
        payload.filters.AND.push({
          column: "formid",
          value: state.filtre.formid,
          preffix: "f"
        });
        return config["a" /* default */].bPost("/appformmanager/load-fields-default", payload).then(function (r) {
          r.data.forEach(function (item) {
            state.fields.push(Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, item.defaultjson), {}, {
              formid: state.filtre.formid,
              stepes: item.stepes
            }));
          });
          state.loaders.GestionFieldFiltre = false;
        }).catch(function () {
          state.loaders.GestionFieldFiltre = false;
        });
      }
    },
    SetFiltre: function SetFiltre(_ref3, filtre) {
      var commit = _ref3.commit;
      commit("SET_FILTRE", filtre);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/GestionFields.vue?vue&type=script&lang=js&







//
//
//
//
//
//
//
//
 //import Filtre from "./gestions-chemps/filtres.vue";
//import tableauChamps from "./gestions-chemps/tableauChamps.vue";


/* harmony default export */ var GestionFieldsvue_type_script_lang_js_ = ({
  name: "GestionFields",
  components: {
    TitleBar: TitleBar["a" /* default */],
    // on doit charge le sous module vuex avant l'execution de ce dernier.
    Filtre: function Filtre() {
      return new Promise(function (resolv) {
        resolv(Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(23)]).then(__webpack_require__.bind(null, "70f9")));
      });
    },
    // on doit charge le sous module vuex avant l'execution de ce dernier.
    tableauChamps: function tableauChamps() {
      return new Promise(function (resolv) {
        resolv(Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(10)]).then(__webpack_require__.bind(null, "f28f")));
      });
    }
  },
  data: function data() {
    return {
      listForms: []
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$store.registerModule("StoreGestionChamps", store);
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
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/App/GestionFields.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  App_GestionFieldsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var GestionFields = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=appForm.umd.33.js.map