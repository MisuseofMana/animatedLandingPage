exports.ids = [1];
exports.modules = {

<<<<<<< HEAD
/***/ 119:
=======
/***/ 123:
>>>>>>> 87f71c3bfca1568a2c7cf8939f7c05dfcfffc171
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
<<<<<<< HEAD
var content = __webpack_require__(127);
=======
var content = __webpack_require__(131);
>>>>>>> 87f71c3bfca1568a2c7cf8939f7c05dfcfffc171
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(2).default
module.exports.__inject__ = function (context) {
<<<<<<< HEAD
  add("59f8b546", content, true, context)
=======
  add("29ab4387", content, true, context)
>>>>>>> 87f71c3bfca1568a2c7cf8939f7c05dfcfffc171
};

/***/ }),

<<<<<<< HEAD
/***/ 126:
=======
/***/ 130:
>>>>>>> 87f71c3bfca1568a2c7cf8939f7c05dfcfffc171
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_id_f471a820_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(119);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_id_f471a820_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_id_f471a820_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_id_f471a820_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_id_f471a820_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
=======
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_id_28da1480_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(123);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_id_28da1480_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_id_28da1480_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_id_28da1480_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_id_28da1480_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
>>>>>>> 87f71c3bfca1568a2c7cf8939f7c05dfcfffc171


/***/ }),

<<<<<<< HEAD
/***/ 127:
=======
/***/ 131:
>>>>>>> 87f71c3bfca1568a2c7cf8939f7c05dfcfffc171
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(1);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
<<<<<<< HEAD
exports.push([module.i, "img.imageFit[data-v-f471a820]{width:50%;border-radius:999px;margin:0 10px 10px;float:right}.handle[data-v-f471a820]{text-align:center}@media (min-width:768px){img.imageFit[data-v-f471a820]{width:40%}.handle[data-v-f471a820]{text-align:right;margin-right:20px}}@media (min-width:1024px){img.imageFit[data-v-f471a820]{width:30%;padding:20px}h1[data-v-f471a820]{text-align:left}.handle[data-v-f471a820]{text-align:center;margin:20px}}", ""]);
=======
exports.push([module.i, "img.imageFit[data-v-28da1480]{width:50%;border-radius:999px;margin:0 10px 10px;float:right}.handle[data-v-28da1480]{text-align:center}@media (min-width:768px){img.imageFit[data-v-28da1480]{width:40%}.handle[data-v-28da1480]{text-align:right;margin-right:20px}}@media (min-width:1024px){img.imageFit[data-v-28da1480]{width:30%;padding:20px}h1[data-v-28da1480]{text-align:left}.handle[data-v-28da1480]{text-align:center;margin:20px}}", ""]);
>>>>>>> 87f71c3bfca1568a2c7cf8939f7c05dfcfffc171
// Exports
module.exports = exports;


/***/ }),

<<<<<<< HEAD
/***/ 144:
=======
/***/ 148:
>>>>>>> 87f71c3bfca1568a2c7cf8939f7c05dfcfffc171
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

<<<<<<< HEAD
// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./pages/about.vue?vue&type=template&id=f471a820&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hero"},[_vm._ssrNode("<section class=\"heroPadding\" data-v-f471a820>","</section>",[_vm._ssrNode("<section data-v-f471a820><img"+(_vm._ssrAttr("src",__webpack_require__(24)))+" alt class=\"imageFit\" data-v-f471a820> <h1 data-v-f471a820>What's up!</h1> <p data-v-f471a820>I'm Sean Yager, a.k.a Shinbone, a.k.a Misuse of Mana, By day I code, create, and maintain a smattering of websites for my clients. By night I summon creatures, camaraderie, and conflicts to enrich my growing storytelling universe, the realm of Amara.</p> <p data-v-f471a820>I grew up in the cornfields of Indiana swinging tree branch swords and imagining backyard adventures. I went to college at IUPUI and Herron School of Art for several years before deciding that student debt was going to be a big burden. I took a hard pivot to learn Web Development via Austin Coding Academy and now I work as a freelancer in art and web design to offset my bills. I'm looking for more permenant work though so if you need a consultant, or an artist, or a website remodel please reach out!</p> <p data-v-f471a820>If you're interested in finding out more about my projects, I'm all over the place on social media just look me up!</p></section> <h1 class=\"handle\" data-v-f471a820>@MisuseofMana</h1> "),_vm._ssrNode("<section class=\"flexRowAround\" data-v-f471a820>","</section>",[_c('SocialMedia')],1)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/about.vue?vue&type=template&id=f471a820&scoped=true&
=======
// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./pages/about.vue?vue&type=template&id=28da1480&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hero"},[_vm._ssrNode("<section class=\"heroPadding\" data-v-28da1480>","</section>",[_vm._ssrNode("<section data-v-28da1480><img"+(_vm._ssrAttr("src",__webpack_require__(29)))+" alt class=\"imageFit\" data-v-28da1480> <h1 data-v-28da1480>What's up!</h1> <p data-v-28da1480>I'm Sean Yager, a.k.a Shinbone, a.k.a Misuse of Mana, By day I code, create, and maintain a smattering of websites for my clients. By night I summon creatures, camaraderie, and conflicts to enrich my growing storytelling universe, the realm of Amara.</p> <p data-v-28da1480>I grew up in the cornfields of Indiana swinging tree branch swords and imagining backyard adventures. I went to college at IUPUI and Herron School of Art for several years before deciding that student debt was going to be a big burden. I took a hard pivot to learn Web Development via Austin Coding Academy and now I work as a freelancer in art and web design to offset my bills. I'm looking for more permenant work though so if you need a consultant, or an artist, or a website remodel please reach out!</p> <p data-v-28da1480>If you're interested in finding out more about my projects, I'm all over the place on social media just look me up!</p></section> <h1 class=\"handle\" data-v-28da1480>@MisuseofMana</h1> "),_vm._ssrNode("<section class=\"flexRowAround\" data-v-28da1480>","</section>",[_c('SocialMedia')],1)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/about.vue?vue&type=template&id=28da1480&scoped=true&
>>>>>>> 87f71c3bfca1568a2c7cf8939f7c05dfcfffc171

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./pages/about.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var aboutvue_type_script_lang_js_ = ({
  head() {
    return {
      title: `About`,
      meta: [{
        property: "og:url",
<<<<<<< HEAD
        content: `@/assets/imgs/og/about.jpg`
=======
        content: `@/assets/imgs/og/about.png`
>>>>>>> 87f71c3bfca1568a2c7cf8939f7c05dfcfffc171
      }, {
        property: "og:description",
        content: `All about Sean Yager. Sean is a freelance illustrator, web dev, writer, and well rounded dude.`
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/about.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_aboutvue_type_script_lang_js_ = (aboutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/about.vue



function injectStyles (context) {
  
<<<<<<< HEAD
  var style0 = __webpack_require__(126)
=======
  var style0 = __webpack_require__(130)
>>>>>>> 87f71c3bfca1568a2c7cf8939f7c05dfcfffc171
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_aboutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
<<<<<<< HEAD
  "f471a820",
  "30df83ea"
=======
  "28da1480",
  "22bf4749"
>>>>>>> 87f71c3bfca1568a2c7cf8939f7c05dfcfffc171
  
)

/* harmony default export */ var about = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SocialMedia: __webpack_require__(7).default})


/***/ })

};;
//# sourceMappingURL=about.js.map