"use strict";(self.webpackChunkghost_design_system=self.webpackChunkghost_design_system||[]).push([[36945],{"./node_modules/date-fns/locale/fy/_lib/formatDistance/index.js":(module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function formatDistance(token,count,options){var result;options=options||{},result="string"==typeof formatDistanceLocale[token]?formatDistanceLocale[token]:1===count?formatDistanceLocale[token].one:formatDistanceLocale[token].other.replace("{{count}}",count);if(options.addSuffix)return options.comparison>0?"oer "+result:result+" lyn";return result};var formatDistanceLocale={lessThanXSeconds:{one:"minder as 1 sekonde",other:"minder as {{count}} sekonden"},xSeconds:{one:"1 sekonde",other:"{{count}} sekonden"},halfAMinute:"oardel minút",lessThanXMinutes:{one:"minder as 1 minút",other:"minder as {{count}} minuten"},xMinutes:{one:"1 minút",other:"{{count}} minuten"},aboutXHours:{one:"sawat 1 oere",other:"sawat {{count}} oere"},xHours:{one:"1 oere",other:"{{count}} oere"},xDays:{one:"1 dei",other:"{{count}} dagen"},aboutXWeeks:{one:"sawat 1 wike",other:"sawat {{count}} wiken"},xWeeks:{one:"1 wike",other:"{{count}} wiken"},aboutXMonths:{one:"sawat 1 moanne",other:"sawat {{count}} moannen"},xMonths:{one:"1 moanne",other:"{{count}} moannen"},aboutXYears:{one:"sawat 1 jier",other:"sawat {{count}} jier"},xYears:{one:"1 jier",other:"{{count}} jier"},overXYears:{one:"mear as 1 jier",other:"mear as {{count}}s jier"},almostXYears:{one:"hast 1 jier",other:"hast {{count}} jier"}};module.exports=exports.default}}]);