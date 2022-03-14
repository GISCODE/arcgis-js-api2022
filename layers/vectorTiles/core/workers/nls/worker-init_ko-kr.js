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
// See http://js.arcgis.com/3.39/esri/copyright.txt for details.

define("esri/layers/vectorTiles/core/workers/nls/worker-init_ko-kr",{"dojo/cldr/nls/number":{scientificFormat:"#E0","currencySpacing-afterCurrency-currencyMatch":"[:^S:]",infinity:"∞",superscriptingExponent:"×",list:";",percentSign:"%",minusSign:"-","currencySpacing-beforeCurrency-surroundingMatch":"[:digit:]","decimalFormat-short":"000조","currencySpacing-afterCurrency-insertBetween":" ",nan:"NaN",plusSign:"+","currencySpacing-afterCurrency-surroundingMatch":"[:digit:]","currencySpacing-beforeCurrency-currencyMatch":"[:^S:]",currencyFormat:"¤#,##0.00;(¤#,##0.00)",perMille:"‰",group:",",percentFormat:"#,##0%","decimalFormat-long":"000조",decimalFormat:"#,##0.###",decimal:".","currencySpacing-beforeCurrency-insertBetween":" ",exponential:"E",_localized:{}},"dojo/cldr/nls/gregorian":{"dateFormatItem-Ehm":"(E) a h:mm","days-standAlone-short":["일","월","화","수","목","금","토"],"months-format-narrow":["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],"field-second-relative+0":"지금","quarters-standAlone-narrow":["1","2","3","4"],"field-weekday":"요일","dateFormatItem-yQQQ":"y년 QQQ","dateFormatItem-yMEd":"y. M. d. (E)","field-wed-relative+0":"이번 수요일","field-wed-relative+1":"다음 수요일","dateFormatItem-GyMMMEd":"G y년 MMM d일 (E)","dateFormatItem-MMMEd":"MMM d일 (E)",eraNarrow:["기원전","서기"],"field-tue-relative+-1":"지난 화요일","days-format-short":["일","월","화","수","목","금","토"],"dateTimeFormats-appendItem-Day-Of-Week":"{0} {1}","dateFormat-long":"y년 M월 d일","field-fri-relative+-1":"지난 금요일","field-wed-relative+-1":"지난 수요일","months-format-wide":["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],"dateTimeFormat-medium":"{1} {0}","dayPeriods-format-wide-pm":"오후","dateFormat-full":"y년 M월 d일 EEEE","field-thu-relative+-1":"지난 목요일","dateFormatItem-Md":"M. d.","dayPeriods-format-abbr-am":"AM","dateTimeFormats-appendItem-Second":"{0} ({2}: {1})","dayPeriods-format-wide-noon":"noon","dateFormatItem-yMd":"y. M. d.","field-era":"연호","dateFormatItem-yM":"y. M.","months-standAlone-wide":["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],"timeFormat-short":"a h:mm","quarters-format-wide":["제 1/4분기","제 2/4분기","제 3/4분기","제 4/4분기"],"dateFormatItem-yQQQQ":"y년 QQQQ","timeFormat-long":"a h시 m분 s초 z","field-year":"년","dateFormatItem-yMMM":"y년 MMM","dateTimeFormats-appendItem-Era":"{1} {0}","field-hour":"시","months-format-abbr":["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],"field-sat-relative+0":"이번 토요일","field-sat-relative+1":"다음 토요일","timeFormat-full":"a h시 m분 s초 zzzz","dateTimeFormats-appendItem-Week":"{0} ({2}: {1})","field-day-relative+0":"오늘","field-thu-relative+0":"이번 목요일","field-day-relative+1":"내일","field-thu-relative+1":"다음 목요일","dateFormatItem-GyMMMd":"G y년 MMM d일","dateFormatItem-H":"H시","months-standAlone-abbr":["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],"quarters-format-abbr":["1분기","2분기","3분기","4분기"],"quarters-standAlone-wide":["제 1/4분기","제 2/4분기","제 3/4분기","제 4/4분기"],"dateFormatItem-Gy":"G y년","dateFormatItem-M":"M월","days-standAlone-wide":["일요일","월요일","화요일","수요일","목요일","금요일","토요일"],"dayPeriods-format-abbr-noon":"noon","timeFormat-medium":"a h:mm:ss","field-sun-relative+0":"이번 일요일","dateFormatItem-Hm":"HH:mm","field-sun-relative+1":"다음 일요일","quarters-standAlone-abbr":["1분기","2분기","3분기","4분기"],eraAbbr:["기원전","서기"],"field-minute":"분","field-dayperiod":"오전/오후","days-standAlone-abbr":["일","월","화","수","목","금","토"],"dateFormatItem-d":"d일","dateFormatItem-ms":"mm:ss","quarters-format-narrow":["1","2","3","4"],"field-day-relative+-1":"어제","dateTimeFormat-long":"{1} {0}","dayPeriods-format-narrow-am":"a","dateFormatItem-h":"a h시","dateFormatItem-MMMd":"MMM d일","dateFormatItem-MEd":"M. d. (E)","dateTimeFormat-full":"{1} {0}","field-fri-relative+0":"이번 금요일","field-fri-relative+1":"다음 금요일","field-day":"일","days-format-wide":["일요일","월요일","화요일","수요일","목요일","금요일","토요일"],"field-zone":"시간대","months-standAlone-narrow":["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],"dateFormatItem-y":"y년","dateTimeFormats-appendItem-Day":"{0} ({2}: {1})","field-year-relative+-1":"작년","field-month-relative+-1":"지난달","dateTimeFormats-appendItem-Year":"{1} {0}","dateFormatItem-hm":"a h:mm","dateTimeFormats-appendItem-Hour":"{0} ({2}: {1})","dayPeriods-format-abbr-pm":"PM","days-format-abbr":["일","월","화","수","목","금","토"],eraNames:["기원전","서기"],"dateFormatItem-yMMMd":"y년 MMM d일","days-format-narrow":["일","월","화","수","목","금","토"],"field-month":"월","days-standAlone-narrow":["일","월","화","수","목","금","토"],"dateFormatItem-MMM":"LLL","field-tue-relative+0":"이번 화요일","dateTimeFormats-appendItem-Quarter":"{0} ({2}: {1})","field-tue-relative+1":"다음 화요일","dayPeriods-format-wide-am":"오전","dateTimeFormats-appendItem-Month":"{0} ({2}: {1})","dateTimeFormats-appendItem-Minute":"{0} ({2}: {1})","dateFormatItem-EHm":"(E) HH:mm","field-mon-relative+0":"이번 월요일","field-mon-relative+1":"다음 월요일","dateFormat-short":"yy. M. d.","dateFormatItem-EHms":"(E) HH:mm:ss","dateFormatItem-Ehms":"(E) a h:mm:ss","dayPeriods-format-narrow-noon":"n","field-second":"초","field-sat-relative+-1":"지난 토요일","dateFormatItem-yMMMEd":"y년 MMM d일 (E)","field-sun-relative+-1":"지난 일요일","field-month-relative+0":"이번 달","field-month-relative+1":"다음 달","dateTimeFormats-appendItem-Timezone":"{0} {1}","dateFormatItem-Ed":"d일 (E)","field-week":"주","dateFormat-medium":"y. M. d.","field-week-relative+-1":"지난주","field-year-relative+0":"올해","field-year-relative+1":"내년","dayPeriods-format-narrow-pm":"p","dateTimeFormat-short":"{1} {0}","dateFormatItem-Hms":"H시 m분 s초","dateFormatItem-hms":"a h:mm:ss","dateFormatItem-GyMMM":"G y년 MMM","field-mon-relative+-1":"지난 월요일","field-week-relative+0":"이번 주","field-week-relative+1":"다음 주","dateFormatItem-yMM":"y. M.","dateFormatItem-MEEEEd":"M. d. EEEE","dateFormatItem-yMEEEEd":"y. M. d. EEEE","field-day-relative+2":"모레","dateFormatItem-HHmmss":"HH:mm:ss","dateFormatItem-yMMMEEEEd":"y년 MMM d일 EEEE","field-day-relative+-2":"그저께","dateFormatItem-EEEEd":"d일 EEEE","dateFormatItem-GyMMMEEEEd":"G y년 MMM d일 EEEE","dateFormatItem-MMMEEEEd":"MMM d일 EEEE","dateFormatItem-mmss":"mm:ss",_localized:{}},"esri/layers/vectorTiles/nls/common":{_localized:{}}});