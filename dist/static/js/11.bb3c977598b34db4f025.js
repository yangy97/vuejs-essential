webpackJsonp([11],{PfSO:function(a,t){},o8vE:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e("pFYg"),s=e.n(r),i={name:"EditAvatar",data:function(){return{avatar:""}},created:function(){var a=this.$store.state.user;a&&"object"===(void 0===a?"undefined":s()(a))&&(this.avatar=a.avatar)},methods:{updateAvatar:function(){var a=this,t=this.avatar;if(t){var e=new Image;e.onload=function(){a.$store.dispatch("updateUser",{avatar:t}),a.$message.show("上传成功")},e.onerror=function(){a.$message.show("上传失败","danger")},e.src=t}}}},n={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"col-md-9 left-col"},[e("div",{staticClass:"panel panel-default padding-md"},[e("div",{staticClass:"panel-body"},[a._m(0),a._v(" "),e("hr"),a._v(" "),e("div",{attrs:{"data-validator-form":""}},[e("div",{staticClass:"form-group"},[e("label",[a._v("头像预览：")]),a._v(" "),e("div",[e("img",{staticClass:"avatar-preview-img",attrs:{src:a.avatar}})])]),a._v(" "),e("div",{staticClass:"form-group row"},[e("div",{staticClass:"col-md-8"},[e("input",{directives:[{name:"model",rawName:"v-model.trim.lazy",value:a.avatar,expression:"avatar",modifiers:{trim:!0,lazy:!0}},{name:"validator",rawName:"v-validator.required",value:{title:"头像地址"},expression:"{ title: '头像地址' }",modifiers:{required:!0}}],staticClass:"form-control avatar-input",attrs:{type:"text"},domProps:{value:a.avatar},on:{change:function(t){a.avatar=t.target.value.trim()},blur:function(t){return a.$forceUpdate()}}})]),a._v(" "),e("div",{staticClass:"clearfix"})]),a._v(" "),e("div",{staticClass:"form-group"},[e("button",{staticClass:"btn btn-lg btn-primary",attrs:{type:"submit"},on:{click:a.updateAvatar}},[a._v("上传头像")])])])])])])},staticRenderFns:[function(){var a=this.$createElement,t=this._self._c||a;return t("h2",[t("i",{staticClass:"fa fa-picture-o"}),this._v(" 请输入头像地址")])}]};var o=e("VU/8")(i,n,!1,function(a){e("PfSO")},"data-v-407e20c4",null);t.default=o.exports}});
//# sourceMappingURL=11.bb3c977598b34db4f025.js.map