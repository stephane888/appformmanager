((typeof self !== 'undefined' ? self : this)["webpackJsonpappForm"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpappForm"] || []).push([[3],{

/***/ "0690":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"38d0f794-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/traitement/TraitementMyOwn.vue?vue&type=template&id=044326f8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-container',{attrs:{"fluid":"md"}},[_c('div',[_c('title-bar',{attrs:{"conf":{ col: true, text: 'Mes Devis : ' + _vm.titreDevis },"id":_vm.id,"showDevis":false}})],1),_c('div',{staticClass:"appfom-container"},[_c('b-row',{attrs:{"align-h":"center"}},[_c('b-col',{attrs:{"cols":"12"}},[_c('listBlocks',{attrs:{"liste_fields_check":_vm.ListeFieldsCheck,"liste_fields_display":_vm.ListeFieldsDisplay,"totalRows":_vm.totalRows,"isBusy":_vm.isBusy,"perPage":_vm.perPage},on:{"ev-change-pagination":_vm.ChangePagination}})],1)],1)],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/App/traitement/TraitementMyOwn.vue?vue&type=template&id=044326f8&

// EXTERNAL MODULE: ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js + 1 modules
var objectSpread2 = __webpack_require__("f3f3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.splice.js
var es_array_splice = __webpack_require__("a434");

// EXTERNAL MODULE: ./src/App/components/TitleBar.vue + 4 modules
var TitleBar = __webpack_require__("63c9");

// EXTERNAL MODULE: ./src/App/config/config.js
var config = __webpack_require__("f158");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"38d0f794-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/traitement/blocks/listBlocks.vue?vue&type=template&id=3d11377d&
var listBlocksvue_type_template_id_3d11377d_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('loader-icon',{attrs:{"busy":_vm.isBusy}}),(!_vm.isBusy)?_c('div',{staticClass:"titre-project-resume"},[_c('b-col',{staticClass:"notif",attrs:{"cols":"12","md":"5","lg":"3"}},[_c('span',{staticClass:"notif-alert notif-at"},[_vm._v(_vm._s(_vm.nombreStatus.rappel.length))]),_c('span',[_vm._v("projet en attente de rappel")])]),_c('b-col',{staticClass:"notif",attrs:{"cols":"12","md":"5","lg":"3"}},[_c('span',{staticClass:"notif-alert notif-sa"},[_vm._v(_vm._s(_vm.nombreStatus.save.length))]),_c('span',[_vm._v("projet sauvegardé,")])]),(_vm.$store.state.mode)?_c('b-col',{staticClass:"notif",attrs:{"cols":"12","md":"5","lg":"3"}},[_c('span',{staticClass:"notif-ab notif-alert"},[_vm._v(_vm._s(_vm.nombreStatus.loose.length))]),_c('span',[_vm._v("projet abandonné")])]):_vm._e()],1):_vm._e(),(!_vm.isBusy)?_c('b-row',{staticClass:"list-block",attrs:{"trigger_perfom":_vm.trigger_perfom}},_vm._l((_vm.traitementFormItemsDisplay),function(item,i){return _c('b-col',{key:i,attrs:{"md":"12"}},[_c('block',{attrs:{"item":item,"form":_vm.form,"traitementFormItems":_vm.traitementFormItems,"data-id":i},on:{"get-valide-stepe":_vm.getValideStepe,"form-traiter":_vm.formTraiter,"get-info-user":_vm.getInfoUser}})],1)}),1):_vm._e(),(_vm.totalRows > 20)?_c('b-pagination',{staticClass:"pt-5 pb-5 mt-5 mb-0",attrs:{"total-rows":_vm.totalRows,"per-page":_vm.perPage,"align":"fill","size":"sm"},on:{"change":_vm.changePagination},model:{value:(_vm.currentPage),callback:function ($$v) {_vm.currentPage=$$v},expression:"currentPage"}}):_vm._e(),_c('b-modal',{ref:"modal",staticClass:"super-hover",attrs:{"id":"modal--closing","size":"lg","title":'Résultat du formulaire ...',"scrollable":"","cancelTitle":"Quitter","okTitle":"Me rappeler"},scopedSlots:_vm._u([{key:"modal-footer",fn:function(){return [_c('div',{staticClass:"d-flex"},[_c('div',{staticClass:"w-100"},[_c('b-button',{staticClass:"mr-3",attrs:{"variant":"primary","size":"sm"},on:{"click":function($event){return _vm.$bvModal.hide('modal--closing')}}},[_vm._v(" Quitter ")]),(
              (_vm.currentDevis.status === '1' || _vm.currentDevis.status === 1) &&
              _vm.currentDevis.uid.includes(_vm.$store.getters.uid)
            )?_c('b-button',{attrs:{"variant":"primary","size":"sm"},on:{"click":function($event){return _vm.updateStatus()}}},[_vm._v(" Me rappeler ")]):_vm._e()],1)])]},proxy:true}]),model:{value:(_vm.showModal),callback:function ($$v) {_vm.showModal=$$v},expression:"showModal"}},[(_vm.traitementFormItems.length)?_c('b-row',{attrs:{"align-h":"center"}},_vm._l((_vm.validSteps2),function(steps,i){return _c('b-col',{key:i,staticClass:"mb-4",attrs:{"sm":"12"}},[(steps !== undefined)?_c('b-card',{staticClass:"mb-1",attrs:{"no-body":""}},[_c('b-card-header',{staticClass:"p-1",attrs:{"header-tag":"header","role":"tab"}},[_c('b-button',{attrs:{"block":"","variant":"dark","disabled":""}},[_vm._v(" "+_vm._s(steps.info.title)+" ")])],1),_c('b-collapse',{attrs:{"id":"accordion-option","accordion":"my-accordion","role":"tabpanel","visible":""}},[_c('b-card-body',{staticClass:"p-2"},[_c('b-row',{staticClass:"d-flex flex-wrap"},_vm._l((steps.fields),function(field,index){return _c('b-col',{key:index,attrs:{"cols":"12"}},[(field.status === undefined || field.status)?_c('type-displays',{staticClass:"mb-2",attrs:{"field":field,"currentDevis":_vm.currentDevis}}):_c('div',[_c('pre',{staticClass:"d-none"},[_vm._v("                      "+_vm._s(field.name)+"\n                    ")])])],1)}),1)],1)],1)],1):_vm._e()],1)}),1):_vm._e()],1)],1)}
var listBlocksvue_type_template_id_3d11377d_staticRenderFns = []


// CONCATENATED MODULE: ./src/App/traitement/blocks/listBlocks.vue?vue&type=template&id=3d11377d&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("a9e3");

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

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__("caad");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__("2532");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("159b");

// EXTERNAL MODULE: ../drupal-vuejs/index.js + 16 modules
var drupal_vuejs = __webpack_require__("e674");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"38d0f794-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/traitement/affichage/bloc.vue?vue&type=template&id=3297aa39&
var blocvue_type_template_id_3297aa39_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"block"},[_c('b-button',{staticClass:"mb-2",attrs:{"variant":_vm.statusColor}},[_vm._v(" "+_vm._s(_vm.displayStatus)+" ")]),_c('div',{staticClass:"date"},[_vm._v(_vm._s(_vm.getDateDisplay))]),(_vm.infosUser)?_c('div',{staticClass:"infos-user"},[_c(_vm.infosUser,{tag:"component",staticClass:"infos-user"})],1):_vm._e(),_c('div',{staticClass:"d-flex align-items-center"},[_c('h3',{staticClass:"titre"},[_vm._v(_vm._s(_vm.formName))]),_c('div',{staticClass:"d-flex"},[_c('span',{staticClass:"action mb-2",on:{"click":_vm.getValideStepe}},[_vm._v(" Voir ")]),(_vm.$store.state.mode)?_c('span',{staticClass:"action",on:{"click":_vm.formTraiter}},[_vm._v(" Traiter ")]):_vm._e()])]),_c('b-row',{staticClass:"d-flex liste-fields",attrs:{"align-h":"center"}},_vm._l((_vm.itemFields),function(field,i){return _c('b-col',{key:i,attrs:{"cols":"4"}},[_c(_vm.getTemplatesFiles(field.type),{tag:"component",staticClass:"content-field",attrs:{"field":field,"diplayLabel":true}})],1)}),1)],1)}
var blocvue_type_template_id_3297aa39_staticRenderFns = []


// CONCATENATED MODULE: ./src/App/traitement/affichage/bloc.vue?vue&type=template&id=3297aa39&

// EXTERNAL MODULE: ./src/App/traitement/affichage/traitement-display.js + 30 modules
var traitement_display = __webpack_require__("5784");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/traitement/affichage/bloc.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var blocvue_type_script_lang_js_ = ({
  name: "block",
  props: {
    item: {
      type: Object,
      required: true
    },
    form: {
      type: Object,
      required: true
    },
    traitementFormItems: {
      type: Array,
      required: true
    },
    dataId: {
      type: [String, Number]
    }
  },
  computed: {
    statusColor: function statusColor() {
      var text = "";

      switch (this.item.status) {
        case "1":
          text = "primary";
          break;

        case "0":
          text = "danger";
          break;

        case "2":
          text = "secondary";
          break;
      }

      return text;
    },
    displayStatus: function displayStatus() {
      var text = "";

      switch (this.item.status) {
        case "1":
          text = config["a" /* default */].messages.statusDevis1;
          break;

        case "0":
          text = config["a" /* default */].messages.statusDevis0;
          break;

        case "2":
          text = config["a" /* default */].messages.statusDevis2;
          break;
      }

      return text;
    },
    getDateDisplay: function getDateDisplay() {
      return config["a" /* default */].getMysqlDateToFrench(this.item.created);
    },
    formName: function formName() {
      return this.form.name;
    },
    itemFields: function itemFields() {
      var fields = [];

      for (var i in this.item) {
        if (this.item[i] && this.item[i].type) fields.push(this.item[i]);
      }

      return fields;
    },
    infosUser: function infosUser() {
      if (this.item.user && this.item.user.uid) {
        var uid = this.item.user.uid[0].value;
        var name = this.item.user.name[0].value;
        return {
          props: {
            uid: uid
          },
          render: function render(createElement) {
            return createElement("a", {
              props: {
                uid: uid
              },
              attrs: {
                href: "/user/" + uid,
                target: "blank"
              }
            }, [name]);
          }
        };
      }
      /**/


      return null;
    }
  },
  methods: {
    getTemplatesFiles: function getTemplatesFiles(type) {
      return traitement_display["a" /* default */].getTemplatesFiles(type);
    },
    getValideStepe: function getValideStepe() {
      this.$emit("get-valide-stepe", this.dataId);
      this.$emit("get-info-user", this.item);
    },
    formTraiter: function formTraiter() {
      this.$emit("form-traiter", this.item);
    }
  }
});
// CONCATENATED MODULE: ./src/App/traitement/affichage/bloc.vue?vue&type=script&lang=js&
 /* harmony default export */ var affichage_blocvue_type_script_lang_js_ = (blocvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/App/traitement/affichage/bloc.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  affichage_blocvue_type_script_lang_js_,
  blocvue_type_template_id_3297aa39_render,
  blocvue_type_template_id_3297aa39_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var bloc = (component.exports);
// EXTERNAL MODULE: ./src/App/components/loaderIcon.vue + 4 modules
var loaderIcon = __webpack_require__("021a");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/traitement/blocks/listBlocks.vue?vue&type=script&lang=js&











//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 //import Utilities from "../../../store/utilities";





/* harmony default export */ var listBlocksvue_type_script_lang_js_ = ({
  name: "listBlocks",
  props: {
    liste_fields_check: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    liste_fields_display: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    totalRows: {
      type: Number,
      required: true
    },
    isBusy: {
      type: Boolean,
      required: true
    },
    perPage: {
      type: Number,
      required: true
    }
  },
  components: {
    block: bloc,
    typeDisplays: function typeDisplays() {
      return __webpack_require__.e(/* import() */ 32).then(__webpack_require__.bind(null, "5b90"));
    },
    LoaderIcon: loaderIcon["a" /* default */]
  },
  data: function data() {
    return {
      showModal: false,
      validSteps2: [],
      traitementFormItemsDisplay: [],

      /**
       * L'id du devis selectionné.
       */
      currentDataId: null,

      /**
       * Les informations du devis selectionné.
       */
      currentDevis: {},
      currentPage: 1 //totalRows: 20,
      //perPage: 20,

    };
  },
  computed: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, Object(vuex_esm["c" /* mapState */])(["items", "CachesUser", "form"])), Object(vuex_esm["b" /* mapGetters */])(["traitementFormItems"])), {}, {
    trigger_perfom: function trigger_perfom() {
      if (this.traitementFormItems.length) {
        this.getTraitementFormItems();
        return this.traitementFormItems.length;
      }

      return "";
    },
    nombreStatus: function nombreStatus() {
      var nbst = {
        save: [],
        rappel: [],
        loose: []
      };

      if (this.traitementFormItemsDisplay.length) {
        for (var i in this.traitementFormItemsDisplay) {
          var devis = this.traitementFormItemsDisplay[i];
          if (devis.status === "1") nbst.save.push(devis);else if (devis.status === "0") nbst.rappel.push(devis);else if (devis.status === "2") nbst.loose.push(devis);
        }
      }

      return nbst;
    }
  }),
  methods: {
    getTraitementFormItems: function getTraitementFormItems() {
      this.traitementFormItemsDisplay = [];

      for (var i in this.traitementFormItems) {
        var rowData = this.traitementFormItems[i];
        var row = {
          id: rowData.id,
          status: rowData.status,
          created: rowData.created,
          price: rowData.price,
          uid: rowData.uid,
          user: {},
          //pour gerer les informations provenant de la connexions.
          idloop: i // permet de retrouver aisement, le devis dans le current table (traitementFormItems);

        };
        this.getUser(rowData.uid, row);

        for (var s in rowData.datas) {
          var stape = rowData.datas[s];

          for (var f in stape.fields) {
            var field = stape.fields[f]; //console.log("field.name : ", field.name);

            if (this.liste_fields_check.includes(field.name)) {
              row[field.name] = field;
            }
          }
        }

        this.traitementFormItemsDisplay.push(row);
      }
    },

    /**
     * -
     */
    formTraiter: function formTraiter(item) {
      var status = "";

      if (item.status == "0") {
        status = "1";
      } else status = "0";

      this.$bvModal.msgBoxConfirm(" Confirmez-vous l'action ? ", {
        title: " Alerte ",
        size: "sm",
        buttonSize: "sm",
        okVariant: "success",
        okTitle: "Traiter",
        cancelTitle: "Annuler",
        footerClass: "p-2",
        hideHeaderClose: false,
        centered: true
      }).then(function (value) {
        if (value) {
          config["a" /* default */].deleteFormTraitement(item.id, status).then(function () {
            item.status = status;
          });
        }
      });
    },

    /**
     * -
     */
    getUser: function getUser(uid) {
      var _this = this;

      var item = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (this.CachesUser["uid" + uid]) {
        item.user = this.CachesUser["uid" + uid];
      } else {
        drupal_vuejs["e" /* users */].getUser(uid).then(function (rep) {
          item.user = rep;

          _this.$store.dispatch("setCachesUser", {
            uid: uid,
            user: rep
          });
        });
      }
    },

    /**
     * -
     */
    getInfoUser: function getInfoUser(item) {
      var user = item.user;
      var idloop = item.idloop;
      var userDisplay = [];
      var keys = [{
        key: "mail",
        label: "Mail"
      }, {
        key: "name",
        label: "Nom"
      }, {
        key: "field_prenom",
        label: "Prénom"
      }, {
        key: "field_telephone",
        label: "Téléphone"
      }];
      keys.forEach(function (key) {
        if (user[key.key] && user[key.key][0]) {
          userDisplay.push({
            text: key.label + " : " + user[key.key][0].value
          });
        }
      });
      if (this.traitementFormItems[idloop]) this.$set(this.traitementFormItems[idloop], "user", userDisplay);
      return userDisplay;
    },
    updateStatus: function updateStatus() {
      if (this.currentDataId) {
        var dataUpdate = {
          table: "appformmanager_datas",
          fields: {
            status: 0
          },
          action: "update",
          where: [{
            column: "id",
            value: this.currentDataId
          }]
        };
        config["a" /* default */].saveForm([dataUpdate], this.$store.state.mode).then(function () {
          config["a" /* default */].CustomModalSuccess("Vous serrez rappellé par un specialiste dans les plus bref delais.", {
            title: "Status du devis mise à jour",
            footerClass: "d-none"
          });
          setTimeout(function () {
            window.location.reload();
          }, 3000);
        });
      }
    },
    changePagination: function changePagination(val) {
      this.$emit("ev-change-pagination", val);
    },
    getValideStepe: function getValideStepe(id) {
      var _this2 = this;

      //var self = this;
      this.showModal = !this.showModal;
      this.validSteps2 = [];
      this.currentDataId = this.traitementFormItems[id].id;
      this.currentDevis = this.traitementFormItems[id];
      this.validSteps2 = this.traitementFormItems[id].datas;
      console.log("id : ", this.currentDataId);

      if (!this.traitementFormItems[id]["all-steps-loaded"]) {
        this.$store.dispatch("loadAllStepOfDevis", {
          DevisId: this.currentDataId
        }).then(function (steps) {
          steps.forEach(function (row) {
            _this2.traitementFormItems[id].datas.push(row.step);
          });
        });
        this.traitementFormItems[id]["all-steps-loaded"] = true;
      } // this.validSteps2.push(forms[0]);
      // function execution(i) {
      //   const loop = function (i) {
      //     return new Promise((resolv) => {
      //       Utilities.selectNextState(forms, i).then((rep) => {
      //         resolv(rep);
      //       });
      //     });
      //   };
      //   loop(i).then((kk) => {
      //     if (kk && kk < 250) {
      //       self.validSteps2.push(forms[kk]);
      //       // Console.log("kk : ", kk);
      //       execution(kk);
      //     }
      //   });
      // }
      // execution(0);

    }
  }
});
// CONCATENATED MODULE: ./src/App/traitement/blocks/listBlocks.vue?vue&type=script&lang=js&
 /* harmony default export */ var blocks_listBlocksvue_type_script_lang_js_ = (listBlocksvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/App/traitement/blocks/listBlocks.vue





/* normalize component */

var listBlocks_component = Object(componentNormalizer["a" /* default */])(
  blocks_listBlocksvue_type_script_lang_js_,
  listBlocksvue_type_template_id_3d11377d_render,
  listBlocksvue_type_template_id_3d11377d_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var listBlocks = (listBlocks_component.exports);
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
    listBlocks: listBlocks,
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
        var form = this.form.forms[i]; // console.log("etate : ", form.info.name, "\n\n");

        for (var f in form.fields) {
          var field = form.fields[f]; // console.log(field);

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
      }).catch(function (error) {
        console.log("error", error);
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

// CONCATENATED MODULE: ./src/App/traitement/TraitementMyOwn.vue






/* normalize component */

var TraitementMyOwn_component = Object(componentNormalizer["a" /* default */])(
  traitement_TraitementMyOwnvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var TraitementMyOwn = __webpack_exports__["default"] = (TraitementMyOwn_component.exports);

/***/ }),

/***/ "5784":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"38d0f794-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/traitement/affichage/codePostal.vue?vue&type=template&id=11b3d658&scoped=true&lang=html&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"d-flex flex-column justify-content-center text-center"},[(_vm.diplayLabel)?_c('div',[_c('div',{staticClass:"icon"},[_c('b-icon',{attrs:{"icon":"shield","font-scale":"1.7"}})],1)]):_vm._e(),(_vm.diplayLabel)?_c('div',{staticClass:"label-field"},[_vm._v("Ville")]):_vm._e(),_c('div',{staticClass:"field-content"},[_vm._v(_vm._s(_vm.value))])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/App/traitement/affichage/codePostal.vue?vue&type=template&id=11b3d658&scoped=true&lang=html&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/traitement/affichage/codePostal.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//import magentoSynchroListSites from "./ListSites.vue";
/* harmony default export */ var codePostalvue_type_script_lang_js_ = ({
  name: "codePostal",
  props: {
    field: {
      type: Object,
      required: true
    },
    diplayLabel: {
      type: Boolean
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
  computed: {
    value: function value() {
      if (this.field.value && this.field.value.text) {
        return this.field.value.text;
      }

      return "";
    }
  },
  methods: {//
  }
});
// CONCATENATED MODULE: ./src/App/traitement/affichage/codePostal.vue?vue&type=script&lang=js&
 /* harmony default export */ var affichage_codePostalvue_type_script_lang_js_ = (codePostalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/App/traitement/affichage/codePostal.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  affichage_codePostalvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "11b3d658",
  null
  
)

/* harmony default export */ var codePostal = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"38d0f794-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/traitement/affichage/defaultRender.vue?vue&type=template&id=27a98904&scoped=true&lang=html&
var defaultRendervue_type_template_id_27a98904_scoped_true_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"d-flex flex-column justify-content-center text-center",attrs:{"data-render":"default-render"}},[(_vm.diplayLabel)?_c('div',[_c('div',{staticClass:"icon"},[_c('b-icon',{attrs:{"icon":"cloud-download","font-scale":"1.7"}})],1)]):_vm._e(),(_vm.diplayLabel)?_c('div',{staticClass:"label-field"},[_vm._v(" "+_vm._s(_vm.field.label)+" ")]):_vm._e(),_c('div',{staticClass:"field-content"},[_vm._v(_vm._s(_vm.field.value))])])}
var defaultRendervue_type_template_id_27a98904_scoped_true_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/App/traitement/affichage/defaultRender.vue?vue&type=template&id=27a98904&scoped=true&lang=html&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/traitement/affichage/defaultRender.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//import magentoSynchroListSites from "./ListSites.vue";
/* harmony default export */ var defaultRendervue_type_script_lang_js_ = ({
  name: "defaultRender.vue",
  props: {
    field: {
      type: Object,
      required: true
    },
    diplayLabel: {
      type: Boolean,
      default: false
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
  computed: {//
  },
  methods: {//
  }
});
// CONCATENATED MODULE: ./src/App/traitement/affichage/defaultRender.vue?vue&type=script&lang=js&
 /* harmony default export */ var affichage_defaultRendervue_type_script_lang_js_ = (defaultRendervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/App/traitement/affichage/defaultRender.vue





/* normalize component */

var defaultRender_component = Object(componentNormalizer["a" /* default */])(
  affichage_defaultRendervue_type_script_lang_js_,
  defaultRendervue_type_template_id_27a98904_scoped_true_lang_html_render,
  defaultRendervue_type_template_id_27a98904_scoped_true_lang_html_staticRenderFns,
  false,
  null,
  "27a98904",
  null
  
)

/* harmony default export */ var defaultRender = (defaultRender_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"38d0f794-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/traitement/affichage/select.vue?vue&type=template&id=84eaaeb8&scoped=true&lang=html&
var selectvue_type_template_id_84eaaeb8_scoped_true_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"d-flex flex-column justify-content-center text-center",attrs:{"data-render":"select"}},[(_vm.diplayLabel)?_c('div',[_c('div',{staticClass:"icon"},[_c('b-icon',{attrs:{"icon":"box","font-scale":"1.7"}})],1)]):_vm._e(),(_vm.diplayLabel)?_c('div',{staticClass:"label-field"},[_vm._v(" "+_vm._s(_vm.field.label)+" ")]):_vm._e(),_c('ul',{staticClass:"m-0 p-0 pl-4 field-content"},_vm._l((_vm.getValue),function(item,i){return _c('li',{key:i},[_vm._v(" "+_vm._s(item)+" ")])}),0),_c('pre',{staticClass:"d-none"},[_vm._v("    "+_vm._s(_vm.field)+"\n  ")])])}
var selectvue_type_template_id_84eaaeb8_scoped_true_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/App/traitement/affichage/select.vue?vue&type=template&id=84eaaeb8&scoped=true&lang=html&

// EXTERNAL MODULE: ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__("0122");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/traitement/affichage/select.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//import magentoSynchroListSites from "./ListSites.vue";
/* harmony default export */ var selectvue_type_script_lang_js_ = ({
  name: "select",
  props: {
    field: {
      type: Object,
      required: true
    },
    diplayLabel: {
      type: Boolean,
      default: false
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
  computed: {
    getValue: function getValue() {
      var values = [];

      if (this.field.value) {
        var type = Object(esm_typeof["a" /* default */])(this.field.value);

        if (type === "object") {
          for (var j in this.field.value) {
            values.push(this.getTextInOptions(this.field.value[j]));
          }
        } else {
          values.push(this.getTextInOptions(this.field.value));
        }
      }

      return values;
    }
  },
  methods: {
    getTextInOptions: function getTextInOptions(value) {
      for (var i in this.field.options) {
        if (this.field.options[i].value === value) {
          return this.field.options[i].text;
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./src/App/traitement/affichage/select.vue?vue&type=script&lang=js&
 /* harmony default export */ var affichage_selectvue_type_script_lang_js_ = (selectvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/App/traitement/affichage/select.vue





/* normalize component */

var select_component = Object(componentNormalizer["a" /* default */])(
  affichage_selectvue_type_script_lang_js_,
  selectvue_type_template_id_84eaaeb8_scoped_true_lang_html_render,
  selectvue_type_template_id_84eaaeb8_scoped_true_lang_html_staticRenderFns,
  false,
  null,
  "84eaaeb8",
  null
  
)

/* harmony default export */ var affichage_select = (select_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"38d0f794-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/traitement/affichage/recapitulatif.vue?vue&type=template&id=04822240&scoped=true&lang=html&
var recapitulatifvue_type_template_id_04822240_scoped_true_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"d-flex flex-column justify-content-center text-center",attrs:{"data-render":"recapitulatif"}},[_c('div',[_c('div',{staticClass:"icon"},[_c('b-icon',{attrs:{"icon":"credit-card","font-scale":"1.7"}})],1)]),(_vm.diplayLabel)?_c('div',{staticClass:"label-field"},[_vm._v(_vm._s(_vm.field.label))]):_vm._e(),_c('strong',{staticClass:"field-content"},[_vm._v(" "+_vm._s(_vm.priceEstimation)+" €")])])}
var recapitulatifvue_type_template_id_04822240_scoped_true_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/App/traitement/affichage/recapitulatif.vue?vue&type=template&id=04822240&scoped=true&lang=html&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/traitement/affichage/recapitulatif.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//import magentoSynchroListSites from "./ListSites.vue";
/* harmony default export */ var recapitulatifvue_type_script_lang_js_ = ({
  name: "recapitulatif",
  props: {
    field: {
      type: Object,
      required: true
    },
    diplayLabel: {
      type: Boolean,
      default: false
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
  computed: {
    priceEstimation: function priceEstimation() {
      var price = this.field.prix.cout;

      if (price > 0) {
        if (this.field.percent) {
          var percent = parseInt(this.field.percent);

          if (percent > 0) {
            percent = price * percent / 100 + price;
            return price + " - " + percent;
          }
        }
      }

      return price;
    }
  },
  methods: {//
  }
});
// CONCATENATED MODULE: ./src/App/traitement/affichage/recapitulatif.vue?vue&type=script&lang=js&
 /* harmony default export */ var affichage_recapitulatifvue_type_script_lang_js_ = (recapitulatifvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/App/traitement/affichage/recapitulatif.vue





/* normalize component */

var recapitulatif_component = Object(componentNormalizer["a" /* default */])(
  affichage_recapitulatifvue_type_script_lang_js_,
  recapitulatifvue_type_template_id_04822240_scoped_true_lang_html_render,
  recapitulatifvue_type_template_id_04822240_scoped_true_lang_html_staticRenderFns,
  false,
  null,
  "04822240",
  null
  
)

/* harmony default export */ var recapitulatif = (recapitulatif_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"38d0f794-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/traitement/affichage/userlogin.vue?vue&type=template&id=3910144a&scoped=true&lang=html&
var userloginvue_type_template_id_3910144a_scoped_true_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('ul',{staticClass:"m-0 p-0 pl-4"},_vm._l((_vm.currentDevisDisplay),function(value,i){return _c('li',{key:i,staticClass:"d-flex"},[_c('strong',{staticClass:"value"},[_vm._v(" "+_vm._s(value.text)+" ")])])}),0)])}
var userloginvue_type_template_id_3910144a_scoped_true_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/App/traitement/affichage/userlogin.vue?vue&type=template&id=3910144a&scoped=true&lang=html&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/traitement/affichage/userlogin.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//import magentoSynchroListSites from "./ListSites.vue";
/* harmony default export */ var userloginvue_type_script_lang_js_ = ({
  name: "userlogin",
  props: {
    field: {
      type: Object,
      required: true
    },
    currentDevis: {
      type: Object
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
  computed: {
    currentDevisDisplay: function currentDevisDisplay() {
      if (this.currentDevis && this.currentDevis.user) {
        return this.currentDevis.user;
      } else {
        return [];
      }
    }
  },
  methods: {//
  }
});
// CONCATENATED MODULE: ./src/App/traitement/affichage/userlogin.vue?vue&type=script&lang=js&
 /* harmony default export */ var affichage_userloginvue_type_script_lang_js_ = (userloginvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/App/traitement/affichage/userlogin.vue





/* normalize component */

var userlogin_component = Object(componentNormalizer["a" /* default */])(
  affichage_userloginvue_type_script_lang_js_,
  userloginvue_type_template_id_3910144a_scoped_true_lang_html_render,
  userloginvue_type_template_id_3910144a_scoped_true_lang_html_staticRenderFns,
  false,
  null,
  "3910144a",
  null
  
)

/* harmony default export */ var userlogin = (userlogin_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"38d0f794-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/traitement/affichage/file.vue?vue&type=template&id=a02ae002&scoped=true&lang=html&
var filevue_type_template_id_a02ae002_scoped_true_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('ul',{staticClass:"m-0 p-0 pl-4"},_vm._l((_vm.value),function(item,i){return _c('li',{key:i},[_c('a',{attrs:{"href":item.url,"download":item.filename}},[_vm._v(_vm._s(item.filename))])])}),0)])}
var filevue_type_template_id_a02ae002_scoped_true_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/App/traitement/affichage/file.vue?vue&type=template&id=a02ae002&scoped=true&lang=html&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/traitement/affichage/file.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//import magentoSynchroListSites from "./ListSites.vue";
/* harmony default export */ var filevue_type_script_lang_js_ = ({
  name: "file",
  props: {
    field: {
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
  computed: {
    value: function value() {
      if (this.field.value.length) {
        return this.field.value;
      }

      return [];
    }
  },
  methods: {//
  }
});
// CONCATENATED MODULE: ./src/App/traitement/affichage/file.vue?vue&type=script&lang=js&
 /* harmony default export */ var affichage_filevue_type_script_lang_js_ = (filevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/App/traitement/affichage/file.vue





/* normalize component */

var file_component = Object(componentNormalizer["a" /* default */])(
  affichage_filevue_type_script_lang_js_,
  filevue_type_template_id_a02ae002_scoped_true_lang_html_render,
  filevue_type_template_id_a02ae002_scoped_true_lang_html_staticRenderFns,
  false,
  null,
  "a02ae002",
  null
  
)

/* harmony default export */ var file = (file_component.exports);
// CONCATENATED MODULE: ./src/App/traitement/affichage/traitement-display.js






/* harmony default export */ var traitement_display = __webpack_exports__["a"] = ({
  getTemplatesFiles: function getTemplatesFiles(type) {
    var template = defaultRender;

    switch (type) {
      case "codepostal":
        template = codePostal;
        break;

      case "select":
        template = affichage_select;
        break;

      case "checkbox":
        template = affichage_select;
        break;

      case "radio":
        template = affichage_select;
        break;

      case "recapitulatif":
        template = recapitulatif;
        break;

      case "userlogin":
        template = userlogin;
        break;

      case "file":
        template = file;
        break;
    }

    return template;
  }
});

/***/ }),

/***/ "5e76":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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

/***/ "b49c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TraitementMyOwn_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5e76");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TraitementMyOwn_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TraitementMyOwn_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ })

}]);
//# sourceMappingURL=appForm.umd.3.js.map