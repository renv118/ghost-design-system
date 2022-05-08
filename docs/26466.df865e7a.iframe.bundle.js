"use strict";(self.webpackChunkghost_design_system=self.webpackChunkghost_design_system||[]).push([[26466,20289,16245,43421,78926,55965,59606,81632,52970,29633],{"./node_modules/date-fns/locale/_lib/buildFormatLongFn/index.js":(module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function buildFormatLongFn(args){return function(){var options=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},width=options.width?String(options.width):args.defaultWidth,format=args.formats[width]||args.formats[args.defaultWidth];return format}},module.exports=exports.default},"./node_modules/date-fns/locale/_lib/buildLocalizeFn/index.js":(module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function buildLocalizeFn(args){return function(dirtyIndex,dirtyOptions){var valuesArray,options=dirtyOptions||{};if("formatting"===(options.context?String(options.context):"standalone")&&args.formattingValues){var defaultWidth=args.defaultFormattingWidth||args.defaultWidth,width=options.width?String(options.width):defaultWidth;valuesArray=args.formattingValues[width]||args.formattingValues[defaultWidth]}else{var _defaultWidth=args.defaultWidth,_width=options.width?String(options.width):args.defaultWidth;valuesArray=args.values[_width]||args.values[_defaultWidth]}return valuesArray[args.argumentCallback?args.argumentCallback(dirtyIndex):dirtyIndex]}},module.exports=exports.default},"./node_modules/date-fns/locale/_lib/buildMatchFn/index.js":(module,exports)=>{function findKey(object,predicate){for(var key in object)if(object.hasOwnProperty(key)&&predicate(object[key]))return key}function findIndex(array,predicate){for(var key=0;key<array.length;key++)if(predicate(array[key]))return key}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function buildMatchFn(args){return function(string){var options=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},width=options.width,matchPattern=width&&args.matchPatterns[width]||args.matchPatterns[args.defaultMatchWidth],matchResult=string.match(matchPattern);if(!matchResult)return null;var value,matchedString=matchResult[0],parsePatterns=width&&args.parsePatterns[width]||args.parsePatterns[args.defaultParseWidth],key=Array.isArray(parsePatterns)?findIndex(parsePatterns,(function(pattern){return pattern.test(matchedString)})):findKey(parsePatterns,(function(pattern){return pattern.test(matchedString)}));value=args.valueCallback?args.valueCallback(key):key,value=options.valueCallback?options.valueCallback(value):value;var rest=string.slice(matchedString.length);return{value,rest}}},module.exports=exports.default},"./node_modules/date-fns/locale/_lib/buildMatchPatternFn/index.js":(module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function buildMatchPatternFn(args){return function(string){var options=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},matchResult=string.match(args.matchPattern);if(!matchResult)return null;var matchedString=matchResult[0],parseResult=string.match(args.parsePattern);if(!parseResult)return null;var value=args.valueCallback?args.valueCallback(parseResult[0]):parseResult[0];value=options.valueCallback?options.valueCallback(value):value;var rest=string.slice(matchedString.length);return{value,rest}}},module.exports=exports.default},"./node_modules/date-fns/locale/uz/_lib/formatDistance/index.js":(module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function formatDistance(token,count,options){var result;options=options||{},result="string"==typeof formatDistanceLocale[token]?formatDistanceLocale[token]:1===count?formatDistanceLocale[token].one:formatDistanceLocale[token].other.replace("{{count}}",count);if(options.addSuffix)return options.comparison>0?result+" dan keyin":result+" oldin";return result};var formatDistanceLocale={lessThanXSeconds:{one:"sekunddan kam",other:"{{count}} sekunddan kam"},xSeconds:{one:"1 sekund",other:"{{count}} sekund"},halfAMinute:"yarim minut",lessThanXMinutes:{one:"bir minutdan kam",other:"{{count}} minutdan kam"},xMinutes:{one:"1 minut",other:"{{count}} minut"},aboutXHours:{one:"tahminan 1 soat",other:"tahminan {{count}} soat"},xHours:{one:"1 soat",other:"{{count}} soat"},xDays:{one:"1 kun",other:"{{count}} kun"},aboutXWeeks:{one:"tahminan 1 hafta",other:"tahminan {{count}} hafta"},xWeeks:{one:"1 hafta",other:"{{count}} hafta"},aboutXMonths:{one:"tahminan 1 oy",other:"tahminan {{count}} oy"},xMonths:{one:"1 oy",other:"{{count}} oy"},aboutXYears:{one:"tahminan 1 yil",other:"tahminan {{count}} yil"},xYears:{one:"1 yil",other:"{{count}} yil"},overXYears:{one:"1 yildan ko'p",other:"{{count}} yildan ko'p"},almostXYears:{one:"deyarli 1 yil",other:"deyarli {{count}} yil"}};module.exports=exports.default},"./node_modules/date-fns/locale/uz/_lib/formatLong/index.js":(module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _index=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__("./node_modules/date-fns/locale/_lib/buildFormatLongFn/index.js"));var _default={date:(0,_index.default)({formats:{full:"EEEE, do MMMM, y",long:"do MMMM, y",medium:"d MMM, y",short:"dd/MM/yyyy"},defaultWidth:"full"}),time:(0,_index.default)({formats:{full:"h:mm:ss zzzz",long:"h:mm:ss z",medium:"h:mm:ss",short:"h:mm"},defaultWidth:"full"}),dateTime:(0,_index.default)({formats:{any:"{{date}}, {{time}}"},defaultWidth:"any"})};exports.default=_default,module.exports=exports.default},"./node_modules/date-fns/locale/uz/_lib/formatRelative/index.js":(module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function formatRelative(token,_date,_baseDate,_options){return formatRelativeLocale[token]};var formatRelativeLocale={lastWeek:"'oldingi' eeee p 'da'",yesterday:"'kecha' p 'da'",today:"'bugun' p 'da'",tomorrow:"'ertaga' p 'da'",nextWeek:"eeee p 'da'",other:"P"};module.exports=exports.default},"./node_modules/date-fns/locale/uz/_lib/localize/index.js":(module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _index=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__("./node_modules/date-fns/locale/_lib/buildLocalizeFn/index.js"));var _default={ordinalNumber:function ordinalNumber(dirtyNumber,_dirtyOptions){return Number(dirtyNumber)},era:(0,_index.default)({values:{narrow:["M.A","M."],abbreviated:["M.A","M."],wide:["Miloddan Avvalgi","Milodiy"]},defaultWidth:"wide"}),quarter:(0,_index.default)({values:{narrow:["1","2","3","4"],abbreviated:["CH.1","CH.2","CH.3","CH.4"],wide:["1-chi chorak","2-chi chorak","3-chi chorak","4-chi chorak"]},defaultWidth:"wide",argumentCallback:function(quarter){return Number(quarter)-1}}),month:(0,_index.default)({values:{narrow:["Y","F","M","A","M","I","I","A","S","O","N","D"],abbreviated:["Yan","Fev","Mar","Apr","May","Iyun","Iyul","Avg","Sen","Okt","Noy","Dek"],wide:["Yanvar","Fevral","Mart","Aprel","May","Iyun","Iyul","Avgust","Sentabr","Oktabr","Noyabr","Dekabr"]},defaultWidth:"wide"}),day:(0,_index.default)({values:{narrow:["Y","D","S","CH","P","J","SH"],short:["Ya","Du","Se","Cho","Pa","Ju","Sha"],abbreviated:["Yak","Dush","Sesh","Chor","Pay","Jum","Shan"],wide:["Yakshanba","Dushanba","Seshanba","Chorshanba","Payshanba","Juma","Shanba"]},defaultWidth:"wide"}),dayPeriod:(0,_index.default)({values:{narrow:{am:"a",pm:"p",midnight:"y.t",noon:"p.",morning:"ertalab",afternoon:"tushdan keyin",evening:"kechqurun",night:"tun"},abbreviated:{am:"AM",pm:"PM",midnight:"yarim tun",noon:"peshin",morning:"ertalab",afternoon:"tushdan keyin",evening:"kechqurun",night:"tun"},wide:{am:"a.m.",pm:"p.m.",midnight:"yarim tun",noon:"peshin",morning:"ertalab",afternoon:"tushdan keyin",evening:"kechqurun",night:"tun"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"y.t",noon:"p.",morning:"ertalab",afternoon:"tushdan keyin",evening:"kechqurun",night:"tun"},abbreviated:{am:"AM",pm:"PM",midnight:"yarim tun",noon:"peshin",morning:"ertalab",afternoon:"tushdan keyin",evening:"kechqurun",night:"tun"},wide:{am:"a.m.",pm:"p.m.",midnight:"yarim tun",noon:"peshin",morning:"ertalab",afternoon:"tushdan keyin",evening:"kechqurun",night:"tun"}},defaultFormattingWidth:"wide"})};exports.default=_default,module.exports=exports.default},"./node_modules/date-fns/locale/uz/_lib/match/index.js":(module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _index=_interopRequireDefault(__webpack_require__("./node_modules/date-fns/locale/_lib/buildMatchPatternFn/index.js")),_index2=_interopRequireDefault(__webpack_require__("./node_modules/date-fns/locale/_lib/buildMatchFn/index.js"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var _default={ordinalNumber:(0,_index.default)({matchPattern:/^(\d+)(chi)?/i,parsePattern:/\d+/i,valueCallback:function(value){return parseInt(value,10)}}),era:(0,_index2.default)({matchPatterns:{narrow:/^(m\.a|m\.)/i,abbreviated:/^(m\.a\.?\s?m\.?)/i,wide:/^(miloddan avval|miloddan keyin)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:(0,_index2.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](chi)? chorak/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(index){return index+1}}),month:(0,_index2.default)({matchPatterns:{narrow:/^[yfmasond]/i,abbreviated:/^(yan|fev|mar|apr|may|iyun|iyul|avg|sen|okt|noy|dek)/i,wide:/^(yanvar|fevral|mart|aprel|may|iyun|iyul|avgust|sentabr|oktabr|noyabr|dekabr)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^y/i,/^f/i,/^m/i,/^a/i,/^m/i,/^i/i,/^i/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ya/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^iyun/i,/^iyul/i,/^av/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:(0,_index2.default)({matchPatterns:{narrow:/^[ydschj]/i,short:/^(ya|du|se|cho|pa|ju|sha)/i,abbreviated:/^(yak|dush|sesh|chor|pay|jum|shan)/i,wide:/^(yakshanba|dushanba|seshanba|chorshanba|payshanba|juma|shanba)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^y/i,/^d/i,/^s/i,/^ch/i,/^p/i,/^j/i,/^sh/i],any:[/^ya/i,/^d/i,/^se/i,/^ch/i,/^p/i,/^j/i,/^sh/i]},defaultParseWidth:"any"}),dayPeriod:(0,_index2.default)({matchPatterns:{narrow:/^(a|p|y\.t|p| (ertalab|tushdan keyin|kechqurun|tun))/i,any:/^([ap]\.?\s?m\.?|yarim tun|peshin| (ertalab|tushdan keyin|kechqurun|tun))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^y\.t/i,noon:/^pe/i,morning:/ertalab/i,afternoon:/tushdan keyin/i,evening:/kechqurun/i,night:/tun/i}},defaultParseWidth:"any"})};exports.default=_default,module.exports=exports.default},"./node_modules/date-fns/locale/uz/index.js":(module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _index=_interopRequireDefault(__webpack_require__("./node_modules/date-fns/locale/uz/_lib/formatDistance/index.js")),_index2=_interopRequireDefault(__webpack_require__("./node_modules/date-fns/locale/uz/_lib/formatLong/index.js")),_index3=_interopRequireDefault(__webpack_require__("./node_modules/date-fns/locale/uz/_lib/formatRelative/index.js")),_index4=_interopRequireDefault(__webpack_require__("./node_modules/date-fns/locale/uz/_lib/localize/index.js")),_index5=_interopRequireDefault(__webpack_require__("./node_modules/date-fns/locale/uz/_lib/match/index.js"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var _default={code:"uz",formatDistance:_index.default,formatLong:_index2.default,formatRelative:_index3.default,localize:_index4.default,match:_index5.default,options:{weekStartsOn:1,firstWeekContainsDate:1}};exports.default=_default,module.exports=exports.default}}]);