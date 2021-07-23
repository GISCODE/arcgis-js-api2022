// COPYRIGHT © 2021 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/3.37/esri/copyright.txt for details.

define("esri/layers/vectorTiles/core/workers/nls/worker-init_ar",{"dojo/cldr/nls/number":{scientificFormat:"#E0","currencySpacing-afterCurrency-currencyMatch":"[:^S:]",infinity:"∞",superscriptingExponent:"×",list:";",percentSign:"%",minusSign:"‎-","currencySpacing-beforeCurrency-surroundingMatch":"[:digit:]","decimalFormat-short":"000 ترليو","currencySpacing-afterCurrency-insertBetween":" ",nan:"NaN",plusSign:"‎+","currencySpacing-afterCurrency-surroundingMatch":"[:digit:]","currencySpacing-beforeCurrency-currencyMatch":"[:^S:]",currencyFormat:"¤#,##0.00;(¤#,##0.00)",perMille:"‰",group:",",percentFormat:"#,##0%","decimalFormat-long":"000 تريليون",decimalFormat:"#,##0.###",decimal:".","currencySpacing-beforeCurrency-insertBetween":" ",exponential:"E",_localized:{}},"dojo/cldr/nls/gregorian":{"dateFormatItem-Ehm":"E h:mm a","days-standAlone-short":["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],"months-format-narrow":["ي","ف","م","أ","و","ن","ل","غ","س","ك","ب","د"],"field-second-relative+0":"الآن","quarters-standAlone-narrow":["١","٢","٣","٤"],"field-weekday":"اليوم","dateFormatItem-yQQQ":"QQQ y","dateFormatItem-yMEd":"E، d/‏M/‏y","field-wed-relative+0":"الأربعاء الحالي","field-wed-relative+1":"الأربعاء التالي","dateFormatItem-GyMMMEd":"E، d MMM، y G","dateFormatItem-MMMEd":"E، d MMM",eraNarrow:["ق.م","م"],"field-tue-relative+-1":"الثلاثاء الماضي","days-format-short":["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],"dateTimeFormats-appendItem-Day-Of-Week":"{0} {1}","dateFormat-long":"d MMMM، y","field-fri-relative+-1":"الجمعة الماضية","field-wed-relative+-1":"الأربعاء الماضي","months-format-wide":["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],"dateTimeFormat-medium":"{1} {0}","dayPeriods-format-wide-pm":"م","dateFormat-full":"EEEE، d MMMM، y","field-thu-relative+-1":"الخميس الماضي","dateFormatItem-Md":"d/‏M","dayPeriods-format-abbr-am":"AM","dateTimeFormats-appendItem-Second":"{0} ({2}: {1})","dayPeriods-format-wide-noon":"noon","dateFormatItem-yMd":"d‏/M‏/y","field-era":"العصر","dateFormatItem-yM":"M‏/y","months-standAlone-wide":["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],"timeFormat-short":"h:mm a","quarters-format-wide":["الربع الأول","الربع الثاني","الربع الثالث","الربع الرابع"],"dateFormatItem-yQQQQ":"QQQQ y","timeFormat-long":"h:mm:ss a z","field-year":"السنة","dateFormatItem-yMMM":"MMM y","dateTimeFormats-appendItem-Era":"{1} {0}","field-hour":"الساعات","months-format-abbr":["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],"field-sat-relative+0":"السبت الحالي","field-sat-relative+1":"السبت التالي","timeFormat-full":"h:mm:ss a zzzz","dateTimeFormats-appendItem-Week":"{0} ({2}: {1})","field-day-relative+0":"اليوم","field-thu-relative+0":"الخميس الحالي","field-day-relative+1":"غدًا","field-thu-relative+1":"الخميس التالي","dateFormatItem-GyMMMd":"d MMM، y G","dateFormatItem-H":"HH","months-standAlone-abbr":["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],"quarters-format-abbr":["الربع الأول","الربع الثاني","الربع الثالث","الربع الرابع"],"quarters-standAlone-wide":["الربع الأول","الربع الثاني","الربع الثالث","الربع الرابع"],"dateFormatItem-Gy":"y G","dateFormatItem-M":"L","days-standAlone-wide":["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],"dayPeriods-format-abbr-noon":"noon","timeFormat-medium":"h:mm:ss a","field-sun-relative+0":"الأحد الحالي","dateFormatItem-Hm":"HH:mm","field-sun-relative+1":"الأحد التالي","quarters-standAlone-abbr":["الربع الأول","الربع الثاني","الربع الثالث","الربع الرابع"],eraAbbr:["ق.م","م"],"field-minute":"الدقائق","field-dayperiod":"ص/م","days-standAlone-abbr":["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],"dateFormatItem-d":"d","dateFormatItem-ms":"mm:ss","quarters-format-narrow":["١","٢","٣","٤"],"field-day-relative+-1":"أمس","dateTimeFormat-long":"{1} {0}","dayPeriods-format-narrow-am":"a","dateFormatItem-h":"h a","dateFormatItem-MMMd":"d MMM","dateFormatItem-MEd":"E، d/M","dateTimeFormat-full":"{1} {0}","field-fri-relative+0":"الجمعة الحالية","field-fri-relative+1":"الجمعة التالية","field-day":"يوم","days-format-wide":["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],"field-zone":"التوقيت","months-standAlone-narrow":["ي","ف","م","أ","و","ن","ل","غ","س","ك","ب","د"],"dateFormatItem-y":"y","dateTimeFormats-appendItem-Day":"{0} ({2}: {1})","field-year-relative+-1":"السنة الماضية","field-month-relative+-1":"الشهر الماضي","dateTimeFormats-appendItem-Year":"{1} {0}","dateFormatItem-hm":"h:mm a","dateTimeFormats-appendItem-Hour":"{0} ({2}: {1})","dayPeriods-format-abbr-pm":"PM","days-format-abbr":["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],eraNames:["قبل الميلاد","ميلادي"],"dateFormatItem-yMMMd":"d MMM، y","days-format-narrow":["ح","ن","ث","ر","خ","ج","س"],"field-month":"الشهر","days-standAlone-narrow":["ح","ن","ث","ر","خ","ج","س"],"dateFormatItem-MMM":"LLL","field-tue-relative+0":"الثلاثاء الحالي","dateTimeFormats-appendItem-Quarter":"{0} ({2}: {1})","field-tue-relative+1":"الثلاثاء التالي","dayPeriods-format-wide-am":"ص","dateTimeFormats-appendItem-Month":"{0} ({2}: {1})","dateTimeFormats-appendItem-Minute":"{0} ({2}: {1})","dateFormatItem-EHm":"E HH:mm","field-mon-relative+0":"الاثنين الحالي","field-mon-relative+1":"الاثنين التالي","dateFormat-short":"d‏/M‏/y","dateFormatItem-EHms":"E HH:mm:ss","dateFormatItem-Ehms":"E h:mm:ss a","dayPeriods-format-narrow-noon":"n","field-second":"الثواني","field-sat-relative+-1":"السبت الماضي","dateFormatItem-yMMMEd":"E، d MMM، y","field-sun-relative+-1":"الأحد الماضي","field-month-relative+0":"هذا الشهر","field-month-relative+1":"الشهر التالي","dateTimeFormats-appendItem-Timezone":"{0} {1}","dateFormatItem-Ed":"E، d","field-week":"الأسبوع","dateFormat-medium":"dd‏/MM‏/y","field-week-relative+-1":"الأسبوع الماضي","field-year-relative+0":"السنة الحالية","field-year-relative+1":"السنة التالية","dayPeriods-format-narrow-pm":"p","dateTimeFormat-short":"{1} {0}","dateFormatItem-Hms":"HH:mm:ss","dateFormatItem-hms":"h:mm:ss a","dateFormatItem-GyMMM":"MMM y G","field-mon-relative+-1":"الاثنين الماضي","field-week-relative+0":"هذا الأسبوع","field-week-relative+1":"الأسبوع التالي","dateFormatItem-yMM":"MM‏/y","dateFormatItem-MMdd":"dd‏/MM","field-day-relative+2":"بعد الغد","dateFormatItem-MMMMd":"d MMMM","field-day-relative+-2":"أول أمس","dateFormatItem-yMMMM":"MMMM y","dateFormatItem-MMMMEd":"E، d MMMM",_localized:{}},"esri/layers/vectorTiles/nls/common":{_localized:{}}});