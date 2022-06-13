"use strict";(self.webpackChunkghost_design_system=self.webpackChunkghost_design_system||[]).push([[75431],{"./src/Components/Atoms/Modal/Modal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Scroll:()=>Scroll,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js");var react__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/react/index.js"),_Modal__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./src/Components/Atoms/Modal/Modal.tsx"),_ModalBody__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./src/Components/Atoms/Modal/ModalBody.tsx"),_ModalFooter__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("./src/Components/Atoms/Modal/ModalFooter.tsx"),_Molecules_Button__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("./src/Components/Molecules/Button/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}const __WEBPACK_DEFAULT_EXPORT__={title:"Atom/Modal",component:_Modal__WEBPACK_IMPORTED_MODULE_14__.Z,parameters:{storySource:{source:"import React, { useState } from 'react';\nimport { ComponentStory, ComponentMeta } from '@storybook/react';\n\nimport Modal, { IModalProps } from './Modal';\nimport ModalBody from './ModalBody';\nimport ModalFooter from './ModalFooter';\nimport { Button, ColorButtonEnum } from '../../Molecules/Button';\n\nexport default {\n  title: 'Atom/Modal',\n  component: Modal,\n  parameters: { actions: { argTypesRegex: '^on.*' }, controls: { sort: 'requiredFirst' }, layout: 'centered' },\n} as ComponentMeta<typeof Modal>;\n\nconst Template: ComponentStory<typeof Modal> = (args: IModalProps) => {\n  const [show, setShow] = useState(false);\n\n  const closeModal = () => {\n    setShow(false);\n  };\n  const openModal = () => {\n    setShow(true);\n  };\n\n  return (\n    <>\n      <Button label='Click to open the modal' onClick={openModal} />\n      <Modal title='Lorem ipsum' {...args} show={show} onHide={closeModal}>\n        <ModalBody>\n          <p>Lorem ipsum dolor sit amet.</p>\n        </ModalBody>\n        <ModalFooter>\n          <Button color={ColorButtonEnum.PRIMARY} label='Ok' onClick={closeModal} />\n        </ModalFooter>\n      </Modal>\n    </>\n  );\n};\n\nconst TemplateScroll: ComponentStory<typeof Modal> = (args: IModalProps) => {\n  const [show, setShow] = useState(false);\n\n  const closeModal = () => {\n    setShow(false);\n  };\n  const openModal = () => {\n    setShow(true);\n  };\n\n  return (\n    <>\n      <div style={{ display: 'flex', height: '150vh', width: '150vw' }}>\n        <div style={{ margin: 'auto' }}>\n          <Button label='Click to open the modal' onClick={openModal} />\n        </div>\n        <Modal title='Lorem ipsum' {...args} show={show} onHide={closeModal}>\n          <ModalBody>\n            <p>\n              Lorem ipsum dolor sit amet. Ut voluptas reiciendis vel praesentium laborum hic voluptas asperiores nam\n              rerum nihil obcaecati labore. Id praesentium porro ea placeat rerum aut tempore totam aut illum cupiditate\n              sed laborum explicabo. Hic explicabo voluptatibus qui repellat fugiat ex voluptatum fuga qui architecto\n              atque quo illum quas aut facilis nesciunt? Ut suscipit rerum ut perferendis nihil ea autem unde est enim\n              veniam nam odio tempora.\n            </p>\n            <p>\n              Quo numquam iste est repellendus numquam et galisum omnis ad praesentium dolores aut neque saepe vel\n              consectetur enim aut cumque neque. Et voluptate sapiente quisquam quasi eum beatae voluptas rem iure\n              velit. Sed impedit eaque 33 natus nihil est quaerat porro est quia nisi qui doloribus aperiam. Sit culpa\n              illum ea consectetur perspiciatis ex veritatis dolorem id velit sequi qui maiores asperiores!\n            </p>\n          </ModalBody>\n          <ModalFooter>\n            <Button color={ColorButtonEnum.SECONDARY} label='cancel' onClick={closeModal} />\n            <Button color={ColorButtonEnum.PRIMARY} label='Submit' icon={['fal', 'paper-plane']} onClick={closeModal} />\n          </ModalFooter>\n        </Modal>\n      </div>\n    </>\n  );\n};\n\nexport const Default = Template.bind({});\nDefault.args = {\n  size: 'sm',\n};\n\nexport const Scroll = TemplateScroll.bind({});\nScroll.args = {\n  size: 'lg',\n};\n",locationsMap:{default:{startLoc:{col:47,line:15},endLoc:{col:1,line:38},startBody:{col:47,line:15},endBody:{col:1,line:38}},scroll:{startLoc:{col:53,line:40},endLoc:{col:1,line:80},startBody:{col:53,line:40},endBody:{col:1,line:80}}}},actions:{argTypesRegex:"^on.*"},controls:{sort:"requiredFirst"},layout:"centered"}};var Default=function Template(args){var _useState2=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(!1),2),show=_useState2[0],setShow=_useState2[1],closeModal=function closeModal(){setShow(!1)};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_Molecules_Button__WEBPACK_IMPORTED_MODULE_17__.z,{label:"Click to open the modal",onClick:function openModal(){setShow(!0)}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_Modal__WEBPACK_IMPORTED_MODULE_14__.Z,Object.assign({title:"Lorem ipsum"},args,{show,onHide:closeModal,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_ModalBody__WEBPACK_IMPORTED_MODULE_15__.Z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("p",{children:"Lorem ipsum dolor sit amet."})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_ModalFooter__WEBPACK_IMPORTED_MODULE_16__.Z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_Molecules_Button__WEBPACK_IMPORTED_MODULE_17__.z,{color:_Molecules_Button__WEBPACK_IMPORTED_MODULE_17__.Q.PRIMARY,label:"Ok",onClick:closeModal})})]}))]})}.bind({});Default.args={size:"sm"};var Scroll=function TemplateScroll(args){var _useState4=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(!1),2),show=_useState4[0],setShow=_useState4[1],closeModal=function closeModal(){setShow(!1)};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div",{style:{display:"flex",height:"150vh",width:"150vw"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("div",{style:{margin:"auto"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_Molecules_Button__WEBPACK_IMPORTED_MODULE_17__.z,{label:"Click to open the modal",onClick:function openModal(){setShow(!0)}})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_Modal__WEBPACK_IMPORTED_MODULE_14__.Z,Object.assign({title:"Lorem ipsum"},args,{show,onHide:closeModal,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_ModalBody__WEBPACK_IMPORTED_MODULE_15__.Z,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("p",{children:"Lorem ipsum dolor sit amet. Ut voluptas reiciendis vel praesentium laborum hic voluptas asperiores nam rerum nihil obcaecati labore. Id praesentium porro ea placeat rerum aut tempore totam aut illum cupiditate sed laborum explicabo. Hic explicabo voluptatibus qui repellat fugiat ex voluptatum fuga qui architecto atque quo illum quas aut facilis nesciunt? Ut suscipit rerum ut perferendis nihil ea autem unde est enim veniam nam odio tempora."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("p",{children:"Quo numquam iste est repellendus numquam et galisum omnis ad praesentium dolores aut neque saepe vel consectetur enim aut cumque neque. Et voluptate sapiente quisquam quasi eum beatae voluptas rem iure velit. Sed impedit eaque 33 natus nihil est quaerat porro est quia nisi qui doloribus aperiam. Sit culpa illum ea consectetur perspiciatis ex veritatis dolorem id velit sequi qui maiores asperiores!"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_ModalFooter__WEBPACK_IMPORTED_MODULE_16__.Z,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_Molecules_Button__WEBPACK_IMPORTED_MODULE_17__.z,{color:_Molecules_Button__WEBPACK_IMPORTED_MODULE_17__.Q.SECONDARY,label:"cancel",onClick:closeModal}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_Molecules_Button__WEBPACK_IMPORTED_MODULE_17__.z,{color:_Molecules_Button__WEBPACK_IMPORTED_MODULE_17__.Q.PRIMARY,label:"Submit",icon:["fal","paper-plane"],onClick:closeModal})]})]}))]})})}.bind({});Scroll.args={size:"lg"},Default.parameters=Object.assign({storySource:{source:"(args: IModalProps) => {\n  const [show, setShow] = useState(false);\n\n  const closeModal = () => {\n    setShow(false);\n  };\n  const openModal = () => {\n    setShow(true);\n  };\n\n  return (\n    <>\n      <Button label='Click to open the modal' onClick={openModal} />\n      <Modal title='Lorem ipsum' {...args} show={show} onHide={closeModal}>\n        <ModalBody>\n          <p>Lorem ipsum dolor sit amet.</p>\n        </ModalBody>\n        <ModalFooter>\n          <Button color={ColorButtonEnum.PRIMARY} label='Ok' onClick={closeModal} />\n        </ModalFooter>\n      </Modal>\n    </>\n  );\n}"}},Default.parameters),Scroll.parameters=Object.assign({storySource:{source:"(args: IModalProps) => {\n  const [show, setShow] = useState(false);\n\n  const closeModal = () => {\n    setShow(false);\n  };\n  const openModal = () => {\n    setShow(true);\n  };\n\n  return (\n    <>\n      <div style={{ display: 'flex', height: '150vh', width: '150vw' }}>\n        <div style={{ margin: 'auto' }}>\n          <Button label='Click to open the modal' onClick={openModal} />\n        </div>\n        <Modal title='Lorem ipsum' {...args} show={show} onHide={closeModal}>\n          <ModalBody>\n            <p>\n              Lorem ipsum dolor sit amet. Ut voluptas reiciendis vel praesentium laborum hic voluptas asperiores nam\n              rerum nihil obcaecati labore. Id praesentium porro ea placeat rerum aut tempore totam aut illum cupiditate\n              sed laborum explicabo. Hic explicabo voluptatibus qui repellat fugiat ex voluptatum fuga qui architecto\n              atque quo illum quas aut facilis nesciunt? Ut suscipit rerum ut perferendis nihil ea autem unde est enim\n              veniam nam odio tempora.\n            </p>\n            <p>\n              Quo numquam iste est repellendus numquam et galisum omnis ad praesentium dolores aut neque saepe vel\n              consectetur enim aut cumque neque. Et voluptate sapiente quisquam quasi eum beatae voluptas rem iure\n              velit. Sed impedit eaque 33 natus nihil est quaerat porro est quia nisi qui doloribus aperiam. Sit culpa\n              illum ea consectetur perspiciatis ex veritatis dolorem id velit sequi qui maiores asperiores!\n            </p>\n          </ModalBody>\n          <ModalFooter>\n            <Button color={ColorButtonEnum.SECONDARY} label='cancel' onClick={closeModal} />\n            <Button color={ColorButtonEnum.PRIMARY} label='Submit' icon={['fal', 'paper-plane']} onClick={closeModal} />\n          </ModalFooter>\n        </Modal>\n      </div>\n    </>\n  );\n}"}},Scroll.parameters);var __namedExportsOrder=["Default","Scroll"]},"./src/Components/Atoms/Pulsar/Pulsar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js");var _Pulsar__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/Components/Atoms/Pulsar/Pulsar.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Atom/Pulsar",component:_Pulsar__WEBPACK_IMPORTED_MODULE_3__.Z,parameters:{storySource:{source:"import React from 'react';\nimport { ComponentStory, ComponentMeta } from '@storybook/react';\n\nimport Pulsar from './Pulsar';\n\nexport default {\n  title: 'Atom/Pulsar',\n  component: Pulsar,\n  parameters: { actions: { argTypesRegex: '^on.*' }, controls: { sort: 'requiredFirst' }, layout: 'centered' },\n} as ComponentMeta<typeof Pulsar>;\n\nconst Template: ComponentStory<typeof Pulsar> = () => {\n  return <Pulsar />;\n};\n\nexport const Default = Template.bind({});\n",locationsMap:{default:{startLoc:{col:48,line:12},endLoc:{col:1,line:14},startBody:{col:48,line:12},endBody:{col:1,line:14}}}},actions:{argTypesRegex:"^on.*"},controls:{sort:"requiredFirst"},layout:"centered"}};var Template=function Template(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Pulsar__WEBPACK_IMPORTED_MODULE_3__.Z,{})};Template.displayName="Template";var Default=Template.bind({});Default.parameters=Object.assign({storySource:{source:"() => {\n  return <Pulsar />;\n}"}},Default.parameters);var __namedExportsOrder=["Default"]},"./src/Components/Atoms/Modal/Modal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/core-js/modules/web.timers.js"),__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js");var react__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_13___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_13__),_hooks__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./src/hooks/index.ts"),_Portal__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./src/Components/Atoms/Portal/index.ts"),_Icon__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("./src/Components/Atoms/Icon/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var Modal=function Modal(props){var children=props.children,closeIcon=props.closeIcon,closeOnPressEscape=props.closeOnPressEscape,closeOnClickOutside=props.closeOnClickOutside,dataTestId=props.dataTestId,disableTabOutside=props.disableTabOutside,onHide=props.onHide,show=props.show,size=props.size,title=props.title,_useState2=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(!1),2),isShaking=_useState2[0],setIsShaking=_useState2[1],_useState4=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(),2),initialBodyStyle=_useState4[0],setInitialBodyStyle=_useState4[1],contentRef=(0,react__WEBPACK_IMPORTED_MODULE_12__.useRef)(null),preventDefaults=function preventDefaults(event){var _contentRef$current;if("Tab"===event.code||"Tab"===event.key){var focusable=null===(_contentRef$current=contentRef.current)||void 0===_contentRef$current?void 0:_contentRef$current.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),firstFocusable=focusable&&focusable[0],lastFocusable=focusable&&focusable[focusable.length-1];focusable&&document.activeElement===firstFocusable&&event.shiftKey&&(event.preventDefault(),event.stopPropagation()),focusable&&document.activeElement===lastFocusable&&!event.shiftKey&&(event.preventDefault(),event.stopPropagation()),event.target&&contentRef.current&&contentRef.current.contains(event.target)||(event.preventDefault(),event.stopPropagation())}};(0,react__WEBPACK_IMPORTED_MODULE_12__.useEffect)((function(){return show?(setInitialBodyStyle({overflowX:document.body.style.overflowX,overflowY:document.body.style.overflowX}),document.body.style.overflowY="hidden",document.body.style.overflowX="hidden",disableTabOutside&&document.body.addEventListener("keydown",preventDefaults,!1)):(document.body.style.overflowX=(null==initialBodyStyle?void 0:initialBodyStyle.overflowX)||"",document.body.style.overflowY=(null==initialBodyStyle?void 0:initialBodyStyle.overflowY)||"",disableTabOutside&&document.body.removeEventListener("keydown",preventDefaults)),function(){document.body.style.overflowX=(null==initialBodyStyle?void 0:initialBodyStyle.overflowX)||"",document.body.style.overflowY=(null==initialBodyStyle?void 0:initialBodyStyle.overflowY)||"",disableTabOutside&&document.body.removeEventListener("keydown",preventDefaults)}}),[show]);var shake=function shake(){setIsShaking(!0),setTimeout((function(){setIsShaking(!1)}),500)};return(0,_hooks__WEBPACK_IMPORTED_MODULE_14__.t$)(contentRef,(function(){closeOnClickOutside&&onHide?onHide():shake()})),(0,_hooks__WEBPACK_IMPORTED_MODULE_14__._b)((function(){closeOnPressEscape&&onHide?onHide():shake()})),show?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_Portal__WEBPACK_IMPORTED_MODULE_15__.h,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div",{className:"gds-modal-overlay",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_13___default()("modal-content",{"size-sm":"sm"===size,"size-lg":"lg"===size,shake:isShaking}),ref:contentRef,children:[(closeIcon||title)&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div",{className:"modal-header",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div",{className:"modal-title",children:title}),closeIcon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div",{className:"modal-close-icon","data-testid":dataTestId,onClick:function onClick(event){event.stopPropagation(),onHide&&onHide()},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_16__.J,{icon:["fal","times"],size:"2x"})})]}),children]})})}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.Fragment,{})};Modal.defaultProps={closeIcon:!1,disableTabOutside:!0,enableClickOutide:!1,onHide:void 0,size:"sm",title:void 0};const __WEBPACK_DEFAULT_EXPORT__=Modal;try{Modal.displayName="Modal",Modal.__docgenInfo={description:"",displayName:"Modal",props:{closeIcon:{defaultValue:{value:"false"},description:"Show the close icon (optional, default: false)",name:"closeIcon",required:!1,type:{name:"boolean"}},closeOnPressEscape:{defaultValue:null,description:"Enable closing the dialog by pressing the escape key (optional, default: false)",name:"closeOnPressEscape",required:!1,type:{name:"boolean"}},closeOnClickOutside:{defaultValue:null,description:"Enable closing the dialog by clicking outside the dialog (optional, default: false)",name:"closeOnClickOutside",required:!1,type:{name:"boolean"}},dataTestId:{defaultValue:null,description:"For test purpose only",name:"dataTestId",required:!1,type:{name:"string"}},disableTabOutside:{defaultValue:{value:"true"},description:"Disable tabbing outside modal (optional, default: true)",name:"disableTabOutside",required:!1,type:{name:"boolean"}},onHide:{defaultValue:{value:"undefined"},description:"Callback when a closing button has been triggered (close icon or click outiside for example) (optional, default: undefined)",name:"onHide",required:!1,type:{name:"(() => void)"}},show:{defaultValue:null,description:"Control of the modal",name:"show",required:!0,type:{name:"boolean"}},size:{defaultValue:{value:"sm"},description:"Dialog window size: sm: 300px, lg: 800px (optionsl, default: 'sm')",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"sm"'}]}},title:{defaultValue:{value:"undefined"},description:"Title of the modal (optional, default undefined)",name:"title",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Components/Atoms/Modal/Modal.tsx#Modal"]={docgenInfo:Modal.__docgenInfo,name:"Modal",path:"src/Components/Atoms/Modal/Modal.tsx#Modal"})}catch(__react_docgen_typescript_loader_error){}},"./src/Components/Atoms/Modal/ModalBody.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),ModalBody=function ModalBody(props){var children=props.children;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"modal-body",children})};ModalBody.displayName="ModalBody";const __WEBPACK_DEFAULT_EXPORT__=ModalBody;try{ModalBody.displayName="ModalBody",ModalBody.__docgenInfo={description:"",displayName:"ModalBody",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Components/Atoms/Modal/ModalBody.tsx#ModalBody"]={docgenInfo:ModalBody.__docgenInfo,name:"ModalBody",path:"src/Components/Atoms/Modal/ModalBody.tsx#ModalBody"})}catch(__react_docgen_typescript_loader_error){}},"./src/Components/Atoms/Modal/ModalFooter.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),ModalFooter=function ModalFooter(props){var children=props.children;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"modal-footer",children})};ModalFooter.displayName="ModalFooter";const __WEBPACK_DEFAULT_EXPORT__=ModalFooter;try{ModalFooter.displayName="ModalFooter",ModalFooter.__docgenInfo={description:"",displayName:"ModalFooter",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Components/Atoms/Modal/ModalFooter.tsx#ModalFooter"]={docgenInfo:ModalFooter.__docgenInfo,name:"ModalFooter",path:"src/Components/Atoms/Modal/ModalFooter.tsx#ModalFooter"})}catch(__react_docgen_typescript_loader_error){}},"./src/Components/Atoms/Modal/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{fe:()=>_ModalBody__WEBPACK_IMPORTED_MODULE_1__.Z,mz:()=>_ModalFooter__WEBPACK_IMPORTED_MODULE_2__.Z,u_:()=>_Modal__WEBPACK_IMPORTED_MODULE_0__.Z});var _Modal__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/Components/Atoms/Modal/Modal.tsx"),_ModalBody__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Components/Atoms/Modal/ModalBody.tsx"),_ModalFooter__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/Components/Atoms/Modal/ModalFooter.tsx")},"./src/Components/Atoms/Portal/Portal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/index.js"),Portal=function Portal(props){var children=props.children,rootId=props.rootId,target=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),finalRootId=rootId||"root-portal-id";return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){var container=document.getElementById(finalRootId);return container||((container=document.createElement("div")).setAttribute("id",finalRootId),document.body.appendChild(container)),target.current&&container.appendChild(target.current),function(){target.current&&target.current.remove(),container&&0===container.childNodes.length&&container.remove()}}),[rootId]),target.current||(target.current=document.createElement("div")),(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(children,target.current)};const __WEBPACK_DEFAULT_EXPORT__=Portal;try{Portal.displayName="Portal",Portal.__docgenInfo={description:"",displayName:"Portal",props:{rootId:{defaultValue:null,description:"",name:"rootId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Components/Atoms/Portal/Portal.tsx#Portal"]={docgenInfo:Portal.__docgenInfo,name:"Portal",path:"src/Components/Atoms/Portal/Portal.tsx#Portal"})}catch(__react_docgen_typescript_loader_error){}},"./src/Components/Atoms/Portal/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>_Portal__WEBPACK_IMPORTED_MODULE_0__.Z});var _Portal__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/Components/Atoms/Portal/Portal.tsx")},"./src/Components/Atoms/Pulsar/Pulsar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),Pulsar=function Pulsar(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:"gds-pulsar"})};Pulsar.displayName="Pulsar";const __WEBPACK_DEFAULT_EXPORT__=Pulsar},"./src/Components/Atoms/Pulsar/index.ts":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{__webpack_require__("./src/Components/Atoms/Pulsar/Pulsar.tsx")}}]);