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
// See http://js.arcgis.com/3.40/esri/copyright.txt for details.

define({countryCodes:{WORLD:"Welt",AD:"Andorra",AE:"Vereinigte Arabische Emirate",AF:"Afghanistan",AG:"Antigua und Barbuda",AI:"Anguilla",AL:"Albanien",AM:"Armenien",AO:"Angola",AQ:"Antarktis",AR:"Argentinien",AS:"Amerikanisch-Samoa",AT:"Österreich",AU:"Australien",AW:"Aruba",AZ:"Aserbaidschan",BA:"Bosnien und Herzegowina",BB:"Barbados",BD:"Bangladesch",BE:"Belgien",BF:"Burkina Faso",BG:"Bulgarien",BH:"Bahrain",BI:"Burundi",BJ:"Benin",BL:"Saint-Barthélemy",BM:"Bermuda",BN:"Brunei Darussalam",BO:"Bolivien, Plurinationaler Staat",BQ:"Bonaire, Sint Eustatius und Saba",BR:"Brasilien",BS:"Bahamas",BT:"Bhutan",BV:"Bouvetinsel",BW:"Botsuana",BY:"Weißrussland",BZ:"Belize",CA:"Kanada",CD:"Kongo, Demokratische Republik",CF:"Zentralafrikanische Republik",CG:"Kongo",CH:"Schweiz",CI:"Elfenbeinküste",CK:"Cookinseln",CL:"Chile",CM:"Kamerun",CN:"China",CO:"Kolumbien",CR:"Costa Rica",CU:"Kuba",CV:"Kap Verde",CW:"Curacao",CY:"Zypern",CZ:"Tschechische Republik",DE:"Deutschland",DJ:"Dschibuti",DK:"Dänemark",DM:"Dominica",DO:"Dominikanische Republik",DZ:"Algerien",EC:"Ecuador",EE:"Estland",EG:"Ägypten",EH:"Westsahara",ER:"Eritrea",ES:"Spanien",ET:"Äthiopien",FI:"Finnland",FJ:"Fidschi",FK:"Falklandinseln (Malwinen)",FM:"Mikronesien, Föderierte Staaten von",FO:"Färöerinseln",FR:"Frankreich",GA:"Gabun",GB:"Großbritannien",GD:"Grenada",GE:"Georgien",GF:"Französisch-Guayana",GG:"Guernsey",GH:"Ghana",GI:"Gibraltar",GL:"Grönland",GM:"Gambia",GN:"Guinea",GP:"Guadeloupe",GQ:"Äquatorialguinea",GR:"Griechenland",GS:"Südgeorgien und die Südlichen Sandwichinseln",GT:"Guatemala",GW:"Guinea-Bissau",GY:"Guyana",HK:"Hongkong",HM:"Heard und McDonaldinseln",HN:"Honduras",HR:"Kroatien",HT:"Haiti",HU:"Ungarn",ID:"Indonesien",IE:"Irland",IL:"Israel",IM:"Insel Man",IN:"Indien",IO:"Britisches Territorium im Indischen Ozean",IQ:"Irak",IR:"Iran, Islamische Republik",IS:"Island",IT:"Italien",JE:"Jersey",JM:"Jamaika",JO:"Jordanien",JP:"Japan",KE:"Kenia",KG:"Kirgisistan",KH:"Kambodscha",KI:"Kiribati",KM:"Komoren",KN:"St. Kitts und Nevis",KP:"Korea, Demokratische Volksrepublik",KR:"Korea, Republik",KW:"Kuwait",KY:"Kaimaninseln",KZ:"Kasachstan",LA:"Laos, Demokratische Volksrepublik",LB:"Libanon",LC:"St. Lucia",LI:"Liechtenstein",LK:"Sri Lanka",LR:"Liberia",LS:"Lesotho",LT:"Litauen",LU:"Luxemburg",LV:"Lettland",LY:"Libyen",MA:"Marokko",MC:"Monaco",MD:"Moldau, Republik",ME:"Montenegro",MF:"St. Martin (Französischer Teil)",MG:"Madagaskar",MH:"Marshall-Inseln",MK:"Mazedonien, Ehemalige Jugoslawische Republik",ML:"Mali",MM:"Myanmar",MN:"Mongolei",MO:"Macao",MP:"Nördliche Marianen",MQ:"Martinique",MR:"Mauretanien",MS:"Montserrat",MT:"Malta",MU:"Mauritius",MV:"Malediven",MW:"Malawi",MX:"Mexiko",MY:"Malaysia",MZ:"Mosambik",NA:"Namibia",NC:"Neukaledonien",NE:"Niger",NG:"Nigeria",NI:"Nicaragua",NL:"Niederlande",NO:"Norwegen",NP:"Nepal",NR:"Nauru",NU:"Niue",NZ:"Neuseeland",OM:"Oman",PA:"Panama",PE:"Peru",PF:"Französisch-Polynesien",PG:"Papua-Neuguinea",PH:"Philippinen",PK:"Pakistan",PL:"Polen",PM:"St. Pierre und Miquelon",PN:"Pitcairn",PS:"Staat Palästina",PT:"Portugal",PW:"Palau",PY:"Paraguay",QA:"Katar",RE:"Réunion",RO:"Rumänien",RS:"Serbien",RU:"Russische Föderation",RW:"Ruanda",SA:"Saudi-Arabien",SB:"Salomoninseln",SC:"Seychellen",SD:"Sudan",SE:"Schweden",SG:"Singapur",SH:"St. Helena, Ascension und Tristan da Cunha",SI:"Slowenien",SJ:"Svalbard und Jan Mayen",SK:"Slowakei",SL:"Sierra Leone",SM:"San Marino",SN:"Senegal",SO:"Somalia",SR:"Surinam",SS:"Südsudan",ST:"São Tomé und Principe",SV:"El Salvador",SX:"Sint Maarten (Niederländischer Teil)",SY:"Arabische Republik Syrien",SZ:"Swasiland",TC:"Turks- und Caicosinseln",TD:"Tschad",TF:"Französische Süd- und Antarktisgebiete",TG:"Togo",TH:"Thailand",TJ:"Tadschikistan",TK:"Tokelau",TL:"Timor-Leste",TM:"Turkmenistan",TN:"Tunesien",TO:"Tonga",TR:"Türkei",TT:"Trinidad und Tobago",TV:"Tuvalu",TW:"Taiwan, chinesische Provinz",TZ:"Tansania, Vereinigte Republik",UA:"Ukraine",UG:"Uganda",UM:"Kleinere Amerikanische Überseeinseln",US:"Vereinigte Staaten",UY:"Uruguay",UZ:"Usbekistan",VA:"Heiliger Stuhl (Vatikanstadt)",VC:"St. Vincent und die Grenadinen",VE:"Venezuela, Bolivarische Republik",VG:"Britische Jungferninseln",VN:"Vietnam",VU:"Vanuatu",WF:"Wallis und Futuna",WS:"Samoa",XK:"Republik Kosovo",YE:"Jemen",YT:"Mayotte",ZA:"Südafrika",ZM:"Sambia",ZW:"Simbabwe"}});