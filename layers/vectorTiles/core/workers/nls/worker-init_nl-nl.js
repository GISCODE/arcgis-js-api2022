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

define("esri/layers/vectorTiles/core/workers/nls/worker-init_nl-nl",{"dojo/cldr/nls/number":{scientificFormat:"#E0","currencySpacing-afterCurrency-currencyMatch":"[:^S:]",infinity:"∞",superscriptingExponent:"×",list:";",percentSign:"%",minusSign:"-","currencySpacing-beforeCurrency-surroundingMatch":"[:digit:]","decimalFormat-short":"000 bln'.'","currencySpacing-afterCurrency-insertBetween":" ",nan:"NaN",plusSign:"+","currencySpacing-afterCurrency-surroundingMatch":"[:digit:]","currencySpacing-beforeCurrency-currencyMatch":"[:^S:]",currencyFormat:"¤ #,##0.00;(¤ #,##0.00)",perMille:"‰",group:".",percentFormat:"#,##0%","decimalFormat-long":"000 biljoen",decimalFormat:"#,##0.###",decimal:",","currencySpacing-beforeCurrency-insertBetween":" ",exponential:"E",_localized:{}},"dojo/cldr/nls/gregorian":{"dateFormatItem-Ehm":"E h:mm a","days-standAlone-short":["Zo","Ma","Di","Wo","Do","Vr","Za"],"months-format-narrow":["J","F","M","A","M","J","J","A","S","O","N","D"],"field-second-relative+0":"nu","quarters-standAlone-narrow":["1","2","3","4"],"field-weekday":"Dag van de week","dateFormatItem-yQQQ":"QQQ y","dateFormatItem-yMEd":"E d-M-y","field-wed-relative+0":"deze woensdag","field-wed-relative+1":"volgende week woensdag","dateFormatItem-GyMMMEd":"E d MMM y G","dateFormatItem-MMMEd":"E d MMM",eraNarrow:["v.C.","vgj","n.C.","gj"],"field-tue-relative+-1":"afgelopen dinsdag","days-format-short":["zo","ma","di","wo","do","vr","za"],"dateTimeFormats-appendItem-Day-Of-Week":"{0} {1}","dateFormat-long":"d MMMM y","field-fri-relative+-1":"afgelopen vrijdag","field-wed-relative+-1":"afgelopen woensdag","months-format-wide":["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"],"dateTimeFormat-medium":"{1} {0}","dayPeriods-format-wide-pm":"p.m.","dateFormat-full":"EEEE d MMMM y","field-thu-relative+-1":"afgelopen donderdag","dateFormatItem-Md":"d-M","dayPeriods-format-abbr-am":"AM","dateTimeFormats-appendItem-Second":"{0} ({2}: {1})","dayPeriods-format-wide-noon":"12 uur ‘s middags","dateFormatItem-yMd":"d-M-y","field-era":"Tijdperk","dateFormatItem-yM":"M-y","months-standAlone-wide":["Januari","Februari","Maart","April","Mei","Juni","Juli","Augustus","September","Oktober","November","December"],"timeFormat-short":"HH:mm","quarters-format-wide":["1e kwartaal","2e kwartaal","3e kwartaal","4e kwartaal"],"dateFormatItem-yQQQQ":"QQQQ y","timeFormat-long":"HH:mm:ss z","field-year":"Jaar","dateFormatItem-yMMM":"MMM y","dateTimeFormats-appendItem-Era":"{1} {0}","field-hour":"Uur","months-format-abbr":["jan.","feb.","mrt.","apr.","mei","jun.","jul.","aug.","sep.","okt.","nov.","dec."],"field-sat-relative+0":"deze zaterdag","field-sat-relative+1":"volgende week zaterdag","timeFormat-full":"HH:mm:ss zzzz","dateTimeFormats-appendItem-Week":"{0} ({2}: {1})","field-day-relative+0":"vandaag","field-thu-relative+0":"deze donderdag","field-day-relative+1":"morgen","field-thu-relative+1":"volgende week donderdag","dateFormatItem-GyMMMd":"d MMM y G","dateFormatItem-H":"HH","months-standAlone-abbr":["Jan.","Feb.","Mrt.","Apr.","Mei","Jun.","Jul.","Aug.","Sep.","Okt.","Nov.","Dec."],"quarters-format-abbr":["K1","K2","K3","K4"],"quarters-standAlone-wide":["1e kwartaal","2e kwartaal","3e kwartaal","4e kwartaal"],"dateFormatItem-Gy":"y G","dateFormatItem-M":"L","days-standAlone-wide":["Zondag","Maandag","Dinsdag","Woensdag","Donderdag","Vrijdag","Zaterdag"],"dayPeriods-format-abbr-noon":"12 uur ‘s middags","timeFormat-medium":"HH:mm:ss","field-sun-relative+0":"deze zondag","dateFormatItem-Hm":"HH:mm","field-sun-relative+1":"volgende week zondag","quarters-standAlone-abbr":["K1","K2","K3","K4"],eraAbbr:["v.Chr.","n.Chr."],"field-minute":"Minuut","field-dayperiod":"a.m./p.m.","days-standAlone-abbr":["Zo","Ma","Di","Wo","Do","Vr","Za"],"dateFormatItem-d":"d","dateFormatItem-ms":"mm:ss","quarters-format-narrow":["1","2","3","4"],"field-day-relative+-1":"gisteren","dateTimeFormat-long":"{1} {0}","dayPeriods-format-narrow-am":"a.m.","dateFormatItem-h":"h a","dateFormatItem-MMMd":"d MMM","dateFormatItem-MEd":"E d-M","dateTimeFormat-full":"{1} {0}","field-fri-relative+0":"deze vrijdag","field-fri-relative+1":"volgende week vrijdag","field-day":"Dag","days-format-wide":["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"],"field-zone":"Zone","months-standAlone-narrow":["J","F","M","A","M","J","J","A","S","O","N","D"],"dateFormatItem-y":"y","dateTimeFormats-appendItem-Day":"{0} ({2}: {1})","field-year-relative+-1":"vorig jaar","field-month-relative+-1":"vorige maand","dateTimeFormats-appendItem-Year":"{1} {0}","dateFormatItem-hm":"h:mm a","dateTimeFormats-appendItem-Hour":"{0} ({2}: {1})","dayPeriods-format-abbr-pm":"PM","days-format-abbr":["zo","ma","di","wo","do","vr","za"],eraNames:["voor Christus","vóór gewone jaartelling","na Christus","gewone jaartelling"],"dateFormatItem-yMMMd":"d MMM y","days-format-narrow":["Z","M","D","W","D","V","Z"],"field-month":"Maand","days-standAlone-narrow":["Z","M","D","W","D","V","Z"],"dateFormatItem-MMM":"LLL","field-tue-relative+0":"deze dinsdag","dateTimeFormats-appendItem-Quarter":"{0} ({2}: {1})","field-tue-relative+1":"volgende week dinsdag","dayPeriods-format-wide-am":"a.m.","dateTimeFormats-appendItem-Month":"{0} ({2}: {1})","dateTimeFormats-appendItem-Minute":"{0} ({2}: {1})","dateFormatItem-EHm":"E HH:mm","field-mon-relative+0":"deze maandag","field-mon-relative+1":"volgende week maandag","dateFormat-short":"dd-MM-yy","dateFormatItem-EHms":"E HH:mm:ss","dateFormatItem-Ehms":"E h:mm:ss a","dayPeriods-format-narrow-noon":"n","field-second":"Seconde","field-sat-relative+-1":"afgelopen zaterdag","dateFormatItem-yMMMEd":"E d MMM y","field-sun-relative+-1":"afgelopen zondag","field-month-relative+0":"deze maand","field-month-relative+1":"volgende maand","dateTimeFormats-appendItem-Timezone":"{0} {1}","dateFormatItem-Ed":"E d","field-week":"Week","dateFormat-medium":"d MMM y","field-week-relative+-1":"vorige week","field-year-relative+0":"dit jaar","field-year-relative+1":"volgend jaar","dayPeriods-format-narrow-pm":"p.m.","dateTimeFormat-short":"{1} {0}","dateFormatItem-Hms":"HH:mm:ss","dateFormatItem-hms":"h:mm:ss a","dateFormatItem-GyMMM":"MMM y G","field-mon-relative+-1":"afgelopen maandag","field-week-relative+0":"deze week","field-week-relative+1":"volgende week","field-day-relative+2":"overmorgen","dateFormatItem-MMMMd":"d MMMM","field-day-relative+-2":"eergisteren","dateFormatItem-yMMMM":"MMMM y",_localized:{}},"esri/layers/vectorTiles/nls/common":{_localized:{}}});