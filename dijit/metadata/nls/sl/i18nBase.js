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

define({general:{cancel:"Prekliči",close:"Zapri",none:"Brez",ok:"V redu",other:"Drugo",stamp:"Žig",now:"Zdaj",choose:"Izberite eno:"},editor:{noMetadata:"Za ta element ni metapodatkov.",xmlViewOnly:"Urejevalnik ne podpira tipa metapodatkov, povezanega s tem elementom. Metapodatki morajo biti v obliki za ArcGIS.",editorDialog:{caption:"Metapodatki",captionPattern:"Metapodatki za {title}"},primaryToolbar:{view:"Pogled",viewXml:"Pogled XML-ja",edit:"Uredi",initializing:"Nalaganje...",startingEditor:"Zagon urejevalnika...",loadingDocument:"Nalaganje dokumenta...",updatingDocument:"Posodabljanje dokumenta...",generatingView:"Ustvarjanje pogleda...",errors:{errorGeneratingView:"Med ustvarjanjem pogleda je prišlo do napake.",errorLoadingDocument:"Med nalaganjem dokumenta je prišlo do napake."}},changesNotSaved:{prompt:"Spremembe dokumenta niso bile shranjene.",dialogTitle:"Zapri urejevalnik metapodatkov",closeButton:"Zapri"},download:{caption:"Prenesi",dialogTitle:"Prenesi",prompt:"Kliknite tukaj za prenos svoje datoteke."},load:{caption:"Odpri",dialogTitle:"Odpri",typeTab:"Nov dokument",fileTab:"Odpri datoteko",templateTab:"Predloga",itemTab:"Vaš element",filePrompt:"Izberite lokalno datoteko metapodatkov XML za ArcGIS. Metapodatki morajo biti v obliki za ArcGIS.",templatePrompt:"Ustvari metapodatke",pullItem:"Dopolnite metapodatke s podrobnostmi o elementu.",importWarning:"Izbrana datoteka ni v obliki za ArcGIS. Naloženi metapodatki morajo biti v obliki za ArcGIS.",loading:"Nalaganje...",noMetadata:"Za ta element je mogoče ustvariti metapodatke z izbiro ene izmed naslednjih možnosti.",unrecognizedMetadata:"Urejevalnik ne podpira tipa metapodatkov, povezanega s tem elementom. Podprte metapodatke je mogoče ustvariti z izbiro ene izmed naslednjih možnosti.",errorLoading:"Med nalaganjem je prišlo do napake.",warnings:{badFile:"Izbrane datoteke ni bilo mogoče naložiti.",notAnXml:"Izbrana datoteka ni datoteka XML.",notSupported:"Ta tip datoteke ni podprt."},portalCaption:"Prepiši"},save:{caption:"Shrani",dialogTitle:"Shrani metapodatke",working:"Shranjevanje metapodatkov...",errorSaving:"Prišlo je do napake, vaši metapodatki niso shranjeni.",saveDialog:{pushCaption:"Uporabi spremembe na elementu"}},saveAndClose:{caption:"Shrani in zapri"},saveDraft:{caption:"Prenos",dialogTitle:"Prenos"},validate:{caption:"Preveri veljavnost",dialogTitle:"Preverjanje veljavnosti",docIsValid:"Vaš dokument je veljaven."},viewHtml:{caption:"Ogledi",dialogTitle:"Ogled metapodatkov",savePrompt:"V vašem dokumentu so neshranjene spremembe. Vse spremembe morate shraniti, da jih boste videli pri ogledu metapodatkov.",saveButton:"Shrani in poglej",portalNone:"Metapodatki, ki temeljijo na standardih, niso bili odobreni. Najprej shranite, šele nato si lahko ogledate metapodatke."},del:{caption:"Izbriši",dialogTitle:"Izbriši metapodatke",prompt:"Ste prepričani, da želite izbrisati te metapodatke?",working:"Brisanje metapodatkov...",errorDeleting:"Prišlo je do napake, vaši metapodatki niso izbrisani.",portalNone:"Za brisanje ni na voljo nobenega dokumenta z metapodatki. Metapodatki, ki temeljijo na standardih, niso bili odobreni.",portalPrompt:"S tem boste izbrisali dokument z metapodatki in ponastavili metapodatke elementa na informacije elementa, kot so ime, opis itd.",portalPrompt2:"S tem dejanjem bodo izbrisani vsi metapodatki, ki temeljijo na standardih. Ste prepričani, da želite izbrisati te metapodatke?",portalButton:"Izbriši in zapri"},transform:{caption:"Transformiraj",dialogTitle:"Transformiraj v",prompt:"",working:"Transformiranje...",errorTransforming:"Med transformiranjem vašega dokumenta je prišlo do napake."},errorDialog:{dialogTitle:"Prišlo je do napake"}},arcgis:{portal:{metadataButton:{caption:"Metapodatki"}}},calendar:{button:"Koledar...",title:"Koledar"},geoExtent:{button:"Nastavi geografski obseg...",title:"Geografski obseg",navigate:"Pomakni",draw:"Nariši pravokotnik",drawHint:"Pritisnite navzdol za začetek in spustite za dokončanje."},hints:{date:"(llll ali llll-mm ali llll-mm-dd)",dateTime:"(llll-mm-ddTuu:mm:ss.sss[+–]uu:mm)",dateOrDateTime:"(llll ali llll-mm ali llll-mm-dd ali llll-mm-ddTuu:mm:ss.sss[+–]uu:mm)",delimitedTextArea:"(za ločevanje uporabite vejico ali novo vrstico)",fgdcDate:"(llll ali llll-mm ali llll-mm-dd)",fgdcTime:"(uu:mm:ss.sss[+–]uu:mm)",integer:"(vnesite celo število)",latitude:"(decimalne stopinje)",longitude:"(decimalne stopinje)",number:"(vnesite število)",numberGreaterThanZero:"(vnesite število > 0)"},isoTopicCategoryCode:{caption:"Kategorija teme",boundaries:"Upravne in politične meje",farming:"Kmetijstvo",climatologyMeteorologyAtmosphere:"Ozračje in podnebje",biota:"Biologija in ekologija",economy:"Podjetništvo in ekonomija",planningCadastre:"Kataster",society:"Kultura, družba in demografija",elevation:"Višina in pridobljeni izdelki",environment:"Okolje in ohranjanje",structure:"Obrati in strukture",geoscientificInformation:"Geologija in geofizika",health:"Zdravje ljudi in bolezni",imageryBaseMapsEarthCover:"Slikovje in temeljne karte",inlandWaters:"Viri celinskih voda",location:"Lokacije in geodetska omrežja",intelligenceMilitary:"Vojska",oceans:"Oceani in estuariji",transportation:"Transportna omrežja",utilitiesCommunication:"Komunalne storitve in komunikacije"},multiplicity:{moveElementDown:"Premakni odsek navzdol",moveElementUp:"Premakni odsek navzgor",removeElement:"Odstrani odsek",repeatElement:"Ponovi odsek"},optionalNode:{switchTip:"Vključi ali izključi ta odsek."},serviceTypes:{featureService:"Geoobjektna storitev",mapService:"Kartna storitev",imageService:"Slikovna storitev",wms:"WMS",wfs:"WFS",wcs:"WCS"},validation:{pattern:"{label} – {message}",patternWithHint:"{label} – {message} {hint}",ok:"V redu",empty:"Zahtevana je vrednost.",date:"Vrednost mora biti datum.",integer:"Vrednost mora biti celo število.",number:"Vrednost mora biti število.",other:"Neveljavna vrednost."},validationPane:{clearMessages:"Počisti sporočila",prompt:"(kliknite na posamezno sporočilo spodaj in navedite zahtevane informacije v za to namenjeno polje)"}});