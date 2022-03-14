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

define({documentTypes:{arcgis:{caption:"ArcGIS metadatok",editorCaption:"Metaadatok",description:""}},emptyOption:"Üres",conditionals:{ISO19139A1_ROW4:"Ha a Metaadat-hierarchiaszint értéke Adatkészlet, akkor földrajzi határoló téglalap vagy földrajzi leírás szükséges.",ISO19139A1_ROW6:"Adatkészlet-azonosító vagy adatkészletnév szükséges.",ISO19139A1_ROW7:"Ha az Egyéb korlátozások lehetőséget választja, az egyéb korlátozások megadása kötelező.",ISO19139A1_ROW9:"Ha a Hatáskör értéke nem Adatkészlet vagy Sorozat, akkor szintleírás szükséges.",ISO19139A1_ROW10_11_12:"Ha a Hatáskör értéke Adatkészlet vagy Sorozat, akkor utasítás, folyamatlépés vagy adatforrás szükséges.",ISO19139A1_ROW15:"Ha a Pont elérhetőségének ellenőrzése ki van választva, akkor az ellenőrzési pont leírása szükséges.",ISO19139A1_ROW18:"Ha a disztribúció dokumentálva van, akkor a formátumot vagy a disztribútort/formátumot meg kell adni.",INSPIRE_AccessLimitation:" Legalább egy érvényes hozzáférés-korlátozó kódot vagy biztonsági besorolási kódot meg kell adni. (INSPIRE)",INSPIRE_UseLimitation:" Legalább egy felhasználási korlátozást meg kell adni. (INSPIRE)",INSPIRE_ConformanceResult:"A Tartomány-konzisztencia jelentés megfelelőségi eredményt igényel. (INSPIRE)",INSPIRE_DomainConsistency:"Tartomány-konzisztencia jelentés szükséges. (INSPIRE)",INSPIRE_LineageStatement:"Ha a Hatáskör értéke Adatkészlet vagy Sorozat, akkor leszármazási nyilatkozat szükséges. (INSPIRE).",FGDC_DescIfTemporal:"Egy időbeli kiterjedéshez leírás szükséges. (FGDC)",FGDC_Keywords:"Topik, címke vagy témakulcsszó szükséges. (FGDC)",FGDC_Reports:"A teljesség hiányára és a fogalmi konzisztenciára vonatkozó jelentések szükségesek. (FGDC)",FGDC_Temporal:"Legalább egy időbeli kiterjedés szükséges. (INSPIRE)",NAP_Contact:"Cím/szállítási pont, telefon/üzenetrögzítő szám vagy online erőforrás/URL szükséges. (NAP)",GEN_BoundingBox:"Legalább egy térbeli határoló téglalap szükséges.",GEN_ReportResult:"Megfelelőségi vagy mennyiségi eredmény szükséges.",minLessThanMax:"A minimum értéknek kisebbnek kell lennie a maximumnál."},hints:{integerGreaterThanZero:"(0-nél nagyobb integert adjon meg)",integerGreaterThanOne:"(1-nél nagyobb integert adjon meg)",integer0To100:"(0 és 100 közötti integert adjon meg)",maxScale:"(0-nál nagyobb integert adjon meg, pl. 50000)",minScale:"(0-nál nagyobb integert adjon meg, pl. 150000000)",number0To100:"(0 és 100 közötti számot adjon meg)",number0To360:"(0 és 360 közötti számot adjon meg)",number90To90:"(-90 és 90 közötti számot adjon meg)",listOfDoubles:"(írjon be egy számlistát, az egyes számokat szóközzel elválasztva)"},htmlEditor:{button:"Szerkesztés..."},sections:{overview:"Áttekintés",esri:"Esri",resource:"Erőforrás",reference:"Referencia",content:"Tartalom",distribution:"Eloszlás",quality:"Minőség",eainfo:"Mezők",representation:"Ábrázolás",metadata:"Metaadatok"},metadataStyle:{caption:"ArcGIS metadat-stílus",changeButton:"Módosítás...",dialogTitle:"Válasszon metaadat-stílust",updating:"Dokumentum frissítése...","Item Description":"Elemleírás","FGDC CSDGM Metadata":"FGDC CSDGM metaadatok","ISO 19139 Metadata Implementation Specification":"ISO 19139 metaadat-implementációs specifikáció","ISO 19139 Metadata Implementation Specification GML3.2":"ISO 19139 metaadat-implementációs specifikáció GML3.2","INSPIRE Metadata Directive":"INSPIRE metaadat-irányelv","North American Profile of ISO19115 2003":"Az ISO19115 2003 észak-amerikai profilja"},aggrInfo:{caption:"Összesített információk",datasetHint:"Adathalmaz-azonosító vagy adathalmaznév szükséges.",aggrDSIdent:"Adatkészlet-azonosító",aggrDSName:"Adatkészlet neve"},appSchInfo:{caption:"Alkalmazási séma",asName:"Séma neve",asSchLang:"Séma nyelve",asCstLang:"Korlátozó nyelv",asAscii:"ASCII",asGraFile:"Grafikai fájl",asGraFile_src:"Grafikai fájl forrása",asSwDevFile:"Szoftverfejlesztési fájl",asSwDevFile_src:"Szoftverfejlesztési fájl forrása",asSwDevFiFt:"Szoftverfejlesztési fájl formátuma"},citation:{caption:"Idézet",section:{titlesAndDates:"Címek és dátumok",links:"URL-címek",identifiers:"Azonosítók",presentation:"Űrlap",other:"Egyéb",edition:"Kiadás",series:"Sorozat"},conditionalDate:{caption:"Idézet dátuma",msg:"A létrehozási dátum, a közzétételi dátum vagy az átdolgozási dátum szükséges.",msg_nap:"Az idézet dátuma szükséges."},resTitle:"Cím",resAltTitle:"Alternatív cím",resTitleForInspire:{bg:"bolgár",cs:"cseh",da:"dán",de:"német",el:"görög",en:"angol",es:"spanyol",et:"észt",fi:"finn",fr:"francia",hr:"horvát",hu:"magyar",it:"olasz",lt:"litván",lv:"lett",mt:"máltai",nl:"holland",pl:"lengyel",pt:"portugál",ro:"román",sk:"szlovák",sl:"szlovén",sv:"svéd"},collTitle:"Kollektív cím",date:{createDate:"Létrehozási dátum",pubDate:"Közzétételi dátum",reviseDate:"Javítási dátum",notavailDate:"Nem elérhető dátum",inforceDate:"Hatályossági dátum",adoptDate:"Elfogadási dátum",deprecDate:"Elavulási dátum",supersDate:"Helyettesítési dátum"},isbn:"ISBN",issn:"ISSN",citId:{caption:"Azonosító",identCode:"Kód",identAuth:"Hatósági hivatkozás"},resEd:"Kiadás",resEdDate:"Kiadás dátuma",datasetSeries:{seriesName:"Név",issId:"Kiadás",artPage:"Oldal"},otherCitDet:"Egyéb részletek",contactCaption:"Hivatkozási kapcsolat"},cntAddress:{caption:"Cím",delPoint:"Szállítási pont",city:"Város",adminArea:"Közigazgatási terület",postCode:"Irányítószám",country:"Ország",eMailAdd:"E-mail",addressType:{caption:"Cím típusa",postal:"Postai",physical:"Fizikai",both:"Mindkettő"}},cntOnlineRes:{caption:"Online erőforrás",linkage:"URL",protocol:"Protokoll",appProfile:"Alkalmazásprofil",orName:"Név",orDesc:"Leírás"},cntPhone:{caption:"Telefon",voiceNum:"Hang",faxNum:"Fax",tddtty:"TDD/TTY?"},codeRef:{caption:"Azonosító",identCode:"Kód",idCodeSpace:"Kódterület",idVersion:"Verzió",identAuth:"Hatósági hivatkozás"},constraints:{caption:"Korlátozások",useLimit:"Használati korlátozás",general:{caption:"Általános"},legal:{caption:"Jogi",accessConsts:"Hozzáférési korlátozások",useConsts:"Használati korlátozások",othConsts:"Egyéb korlátozások"},security:{caption:"Biztonság",classSys:"Osztályozási rendszer",userNote:"Felhasználói megjegyzés",handDesc:"Kezelési leírás"}},contInfo:{caption:"Tartalmi információk",section:{CovDesc:"Lefedettség leírása",ImgDesc:"Képleírás",FetCatDesc:"Vektoros elem-katalógus"},attDesc:"Attribútumleírás",covDim:{caption:"Tartomány vagy sáv",seqID:"Sorozatazonosító",seqIDType:"Sorozatazonosító típusa",dimDescrp:"Leíró"},RangeDim:{caption:"Tartomány mérete"},Band:{caption:"Sáv",minVal:"Minimum érték",maxVal:"Maximum érték",valUnit:"Érték mértékegységei",pkResp:"Csúcsérték",bitsPerVal:"Bitek értékenként",toneGrad:"Árnyalatfokozatok",sclFac:"Skálázási tényező",offset:"Eltolás"},CovDesc:{caption:"Lefedettség leírása",section:{description:"Leírás",rangesAndBands:"Tartományok és sávok"}},ImgDesc:{caption:"Képleírás",section:{description:"Leírás",rangesAndBands:"Tartományok és sávok"},illElevAng:"Megvilágítás magasság szöge",illAziAng:"Megvilágítás azimut szöge",cloudCovPer:"Felhőtakaró százaléka",cmpGenQuan:"Tömörítési minőség",trianInd:"Háromszögelési jelző?",radCalDatAv:"Rendelkezésre állnak a radiometrikus kalibrációs adatok?",camCalInAv:"Kamerakalibrációs információk elérhetősége?",filmDistInAv:"Filmtorzítási információk elérhetősége?",lensDistInAv:"Lencsetorzítási információk elérhetősége?",imagQuCode:"Minőségi kód",prcTypCde:"Feldolgozási szint kódja"},FetCatDesc:{caption:"Vektoros elem-katalógus",section:{description:"Leírás",featureTypes:"Vektoros elemek típusai",citation:"Idézet"},compCode:"Megfelel az ISO 19110-nek?",incWithDS:"Included With Dataset?",catCitation:"Hivatkozás vektoros elem-katalógusra",catFetTyps:{caption:"Vektoros elem típusa",genericName:"Név",codeSpace:"Kódterület"}}},contact:{caption:"Kapcsolat",section:{name:"Kapcsolattartó neve",info:"Elérhetőség",hoursAndInstructions:"Órák & utasítások"},conditionalName:{caption:"Kapcsolattartó neve",msg:"A személy neve, a szervezet neve vagy a beosztás neve szükséges.",msg_fgdc:"A személy neve vagy a szervezet neve szükséges."},rpIndName:"Személy neve",rpOrgName:"Szervezet neve",rpPosName:"Beosztás neve",rpCntInfo:"Elérhetőség",cntHours:"Üzemórák",cntInstr:"Kapcsolatfelvételi útmutató"},distInfo:{caption:"Forgalmazási információk",section:{format:"Formátum",distributor:"Forgalmazó",transfer:"Átviteli lehetőségek"},distFormat:{caption:"Forgalmazási formátum",formatName:"Formátum neve",formatVer:"Formátum verziója",formatAmdNum:"Módosítási szám",formatSpec:"Specifikáció",fileDecmTech:"Kitömörítési technika",formatInfo:"Információtartalom"},distributor:{caption:"Forgalmazó"},distTranOps:{caption:"Digitális átviteli lehetőségek",section:{unitsAndSize:"Mértékegységek"},unitsODist:"Forgalmazási egységek",transSize:"Átviteli méret",offLineMed:{caption:"Offline médium",medDensity:"Sűrűség",medDenUnits:"Sűrűségi egységek",medVol:"Térfogatok",medNote:"Médiummal kapcsolatos megjegyzés"}},distorOrdPrc:{caption:"Rendelési folyamat",resFees:"Díjak",planAvDtTm:"Elérhetőségi dátum",planAvTmPd:{caption:"Elérhetőségi dátum időszaka",tmBegin:"Kezdés dátuma/időpontja",tmEnd:"Befejezés dátuma/időpontja"},ordInstr:"Rendelési utasítások",ordTurn:"Átfutási idő"}},dqInfo:{caption:"Adatminőség",section:{scope:"Hatáskör",report:"Jelentés",lineage:"Leszármazás"},dqScope:{section:{level:"Szint",extent:"Kiterjedés"},scpLvl:"Hatáskörszint",scpLvlDesc:"Szintleírás",scpExt:"Hatáskör kiterjedése"},report:{section:{measure:"Mérés",evaluation:"Értékelés",result:"Eredmény",conformance:"Megfelelőség"},measDesc:"Mérés leírása",measName:"Mérés neve",measDateTm:"Mérés dátuma",measId:"Mérés azonosítója",evalMethDesc:"Értékelési módszer",evalProc:"Eljárás feltüntetése",ConResult:{caption:"Megfelelőségi eredmény",conExpl:"Magyarázat",conSpec:"Specifikáció",conPass:{caption:"Fok",_1:"Megfelelő",_0:"Nem megfelelő"}},QuanResult:{caption:"Kvantitatív eredmény",quanVal:"Érték",quanValType:"Értéktípus",quanValUnit:"Érték mértékegységei",errStat:"Hibastatisztika"}},dataLineage:{section:{statement:"Nyilatkozat",dataSource:"Adatforrás",prcStep:"Folyamatlépés"},statement:"Leszármazási nyilatkozat",dataSource:{caption:"Adatforrás",section:{description:"Leírás",srcRefSys:"Hivatkozási rendszer",srcExt:"Kiterjedés",srcCitatn:"Idézet"},srcDesc:"Forrásleírás",srcScale:{rfDenom:"Méretarány-nevező"},srcRefSys:"Forráshivatkozási rendszer",srcExt:"Forrás kiterjedése",srcCitatn:"Forrás feltüntetése"},prcStep:{caption:"Folyamatlépés",section:{description:"Leírás",stepProc:"Feldolgozó",stepSrc:"Adatforrás"},stepDesc:"Folyamatleírás",stepRat:"Indoklás",stepDateTm:"Folyamatlépés dátuma",stepProc:"Feldolgozó",stepSrc:"Adatforrás"}}},eainfo:{caption:"Entitás- és attribútuminformációk",section:{detailed:"Részletek",overview:"Áttekintés"},detailed:{caption:"Entitás és attribútum részletei",section:{enttyp:"Entitás",attr:"Attribútumok"},enttyp:{caption:"Entitás típusa",enttypl:"Felirat",enttypt:"Objektum",enttypc:"Szám",enttypd:"Meghatározás",enttypds:"Meghatározás forrása"},attr:{caption:"Attribútum",section:{description:"Leírás",value:"Érték",domain:"Tartomány"},attrlabl:"Felirat",attalias:"Aliasnév",attrdef:"Meghatározás",attrdefs:"Meghatározás forrása",attrtype:"Típus",attwidth:"Szélesség",atprecis:"Pontosság",attscale:"Méretarány",atindex:"Indexelt",attrvai:{attrva:"Érték magyarázata",attrvae:"Érték pontossága"},attrmfrq:"Értékmérési gyakoriság",begdatea:"Az értékek kezdő dátuma",enddatea:"Az értékek záró dátuma",attrdomv:{caption:"Tartomány",edom:{caption:"Számmal felsorolt",edomv:"Érték",edomvd:"Meghatározás",edomvds:"Meghatározás forrása"},rdom:{caption:"Tartomány",rdommin:"Minimum érték",rdommax:"Maximum érték",rdommean:"Átlag",rdomstdv:"Szórás",attrunit:"Mértékegységek",attrmres:"Mérési felbontás"},codesetd:{caption:"Kódkészlet",codesetn:"Név",codesets:"Forrás"},udom:{caption:"Nem ábrázolható"}}}},overview:{caption:"Áttekintés",eaover:"Összefoglalás",eadetcit:"Idézet"}},extent:{caption:"Kiterjedés",section:{description:"Leírás",geographic:"Földrajzi",temporal:"Időbeli",vertical:"Függőleges"},exDesc:"Kiterjedés leírása",geoEle:{caption:"Földrajzi kiterjedés",GeoBndBox:{caption:"Határoló téglalap",esriExtentType:"A kiterjedés keresésre vonatkozik?",exTypeCode:"A kiterjedés tartalmazza az erőforrást?",westBL:"Nyugati határoló hosszúság",eastBL:"Keleti határoló hosszúság",southBL:"Déli határoló szélesség",northBL:"Északi határoló szélesség"},GeoDesc:{caption:"Földrajzi leírás",exTypeCode:"A leírás tartalmazza az erőforrást?",identCode:"Kód"}},tempEle:{caption:"Időbeli kiterjedés",TM_Period:"Időszak",TM_Instant:"Időpillanat",tmPosition:"Dátum",tmBegin:"Kezdés dátuma",tmEnd:"Befejezés dátuma"},vertEle:{caption:"Függőleges kiterjedés",vertMinVal:"Minimum érték",vertMaxVal:"Maximum érték"}},graphOver:{caption:"Grafika keresése",bgFileName:"Grafika URL-jének keresése",bgFileDesc:"Grafika leírásának keresése",bgFileType:"Grafikai fájltípus keresése"},keywords:{caption:"Kulcsszavak",section:{topicCategory:"Topik",searchKeys:"Címkék",themeKeys:"Téma",placeKeys:"Hely",tempKeys:"Időbeli",discKeys:"Tudományág",stratKeys:"Geológiai réteg",productKeys:"Termék",subTopicCatKeys:"Altopik",otherKeys:"Egyéb"},delimited:"Kulcsszavak",searchKeys:"Címkék",themeKeys:"Téma kulcsszavai",placeKeys:"Hely kulcsszavai",tempKeys:"Időbeli kulcsszavak",discKeys:"Tudományág kulcsszavai",stratKeys:"Geológiai réteg kulcsszavai",productKeys:"Termék kulcsszavai",subTopicCatKeys:"Altopik kulcsszavai",otherKeys:"Egyéb kulcsszavak",thesaName:"Lexikonidézet",thesaLang:"Lexikon nyelve",gemet:"Keresés"},locales:{caption:"Helyszínek",locale:"Helyszín",resTitle:"Cím",idAbs:"Összefoglalás"},maintenance:{caption:"Karbantartás",section:{frequency:"Gyakoriság",scope:"Hatáskör",note:"Megjegyzés"},usrDefFreq:"Egyéni gyakoriság",dateNext:"Következő frissítés",maintScp:"Frissítési hatáskör",upScpDesc:{caption:"Hatáskör leírása",attribSet:"Attribútumok",attribIntSet:"Attribútumpéldányok",featSet:"Vektoros elemek",featIntSet:"Vektoros elem-példányok",datasetSet:"Adatkészlet",other:"Egyéb példányok"},maintNote:"Karbantartási megjegyzés",maintCont:"Karbantartási kapcsolattartó"},metadata:{section:{profile:"Profil",details:"Hatáskör"},mdFileID:"Fájlazonosító",mdParentID:"Szülőazonosító",datasetURI:"Adatkészlet URI",dataSetFn:"Adatkészlet-funkció",mdDateSt:"Metaadatok dátuma",mdTimeSt:"Metaadat időpontja",mdLang:"Metaadatok nyelve",mdChar:"Karakterkészlet",mdHrLv:"Hierarchiaszint",mdHrLvName:"Hierarchiaszint neve",mdContact:"Metaadat-kapcsolattartó",mdMaint:"Metaadatok karbantartása",mdConst:"Metaadat-korlátozások"},porCatInfo:{caption:"Ábrázolás feltüntetése"},refSysInfo:{caption:"Koordináta-rendszer"},resource:{section:{citation:"Idézet",details:"Részletek",description:"Leírás",keywords:"Kulcsszavak",status:"Státusz",resolution:"Felbontás",representation:"Ábrázolás",browse:"Grafika keresése",format:"Formátum",usage:"Használat",aggregateInfo:"Összevonás",additional:"További"},idAbs:"Leírás (kivonat)",idPurp:"Összefoglalás (cél)",suppInfo:"Kiegészítő információ",idCredit:"Kreditek",envirDesc:"Feldolgozási környezet",dataLang:"Erőforrás nyelve",dataExt:"Erőforrás kiterjedése",idPoC:"Kapcsolattartási pont",resMaint:"Erőforrás-karbantartás",resConst:"Erőforrás-korlátozások",dsFormat:"Erőforrás-formátum",dataScale:{caption:"Adatok méretaránya",equScale:"Méretarány-felbontás",scaleDist:"Távolságfelbontás",scaleDist_value:"Távolság"},idSpecUse:{caption:"Erőforrás-felhasználás",specUsage:"Fajlagos felhasználás",usageDate:"Felhasználási dátum",usrDetLim:"Korlátozások",usrCntInfo:"Felhasználási kapcsolattartó"}},service:{caption:"Szolgáltatás",svType:"Szolgáltatástípus",svType_Name:"Név",svAccProps:"Hozzáférési tulajdonságok",svCouplRes:{caption:"Kapcsolt erőforrás",svOpName:"Művelet neve",svResCitId:"Erőforrás-azonosító"},svCoupleType:"Összekapcsolás típusa"},scaleRange:{caption:"Méretarány-tartomány",maxScale:"Maximum méretarány",minScale:"Minimum méretarány"},spatRepInfo:{caption:"Térbeli ábrázolás",section:{dimension:"Dimenzió",parameters:"Paraméterek"},numDims:"Dimenziók száma",tranParaAv:"Átalakítási paraméter elérhetősége?",axisDimension:{caption:"Dimenzió",dimSize:"Méret",dimResol:{caption:"Felbontás",_value:"Felbontási érték",uom:"Felbontási egységek"}},VectSpatRep:{caption:"Vektor",geometObjs:"Geometriai objektumok",geoObjCnt:"Objektumok száma"},GridSpatRep:{caption:"Rácsháló"},Georect:{caption:"Geokorrigált",section:{centerPoint:"Középpont",cornerPts:"Sarokpontok"},chkPtAv:"Pont elérhetőségének ellenőrzése?",chkPtDesc:"Pont leírásának ellenőrzése",ptInPixel:"Pont pixelben",transDimDesc:"Átalakítási dimenzió leírása",transDimMap:"Átalakítási dimenzió leképezése",cornerPts:{caption:"Sarokpont",pos:"Pozíció",gmlDesc:"Leírás",gmlDescRef:"Referencia",gmlIdent:"Azonosító",codeSpace:"Azonosító kódtartománya"}},Georef:{caption:"Georeferálható",ctrlPtAv:"Vezérlőpont elérhetősége?",orieParaAv:"Tájolási paraméter elérhetősége?",orieParaDs:"Tájolási paraméter leírása",georefPars:"Georeferált paraméterek",paraCit:"Paraméter feltüntetése"},Indref:{caption:"Közvetett"}},booleanOptions:{_false:"Nem",_true:"Igen"},codelist:{CountryCode:"Ország",LanguageCode:"Nyelv",MonetaryUnits:"Pénzegység",MonetaryUnits_empty:"Nincs egységes pénznem.",PresentationForm:"FGDC térinformatikai adatok bemutató űrlapja",CI_PresentationFormCode:"Bemutató űrlap",CI_RoleCode:"Szerep",CI_OnLineFunctionCode:"Függvény",IMS_ContentType:"Tartalomtípus",DQ_ElementDimension:"Méret",DQ_ElementType:"Jelentés típusa",DQ_EvaluationMethodTypeCode:"Értékelés típusa",DS_AssociationTypeCode:"Társítás típusa",DS_InitiativeTypeCode:"Kezdeményezés típusa",LI_SourceType:"Forrás típusa",MD_CellGeometryCode:"Cellageometria",MD_CharacterSetCode:"Karakterkészlet",MD_ClassificationCode:"Osztályozás",MD_CoverageContentTypeCode:"Tartalomtípus",MD_DimensionNameTypeCode:"Dimenzió típusa",MD_GeometricObjectTypeCode:"Geometriai objektumtípus",MD_ImagingConditionCode:"Képalkotási feltétel",MD_MaintenanceFrequenceCode:"Frissítési gyakoriság",MD_MediumFormatCode:"Formátumkód",MD_MediumNameCode:"Médium neve",MD_PixelOrientationCode:"Pixeltájolás",MD_ProgressCode:"Státusz",MD_RestrictionCode:"Korlátozási kód",MD_ScopeCode:"Hatáskör",MD_SpatialRepresentationTypeCode:"Térbeli ábrázolás típusa",MD_TopicCategoryCode:"Témakör-kategória",MD_TopologyLevelCode:"Topológiai szint",RS_Dimension:"Dimenzió",SV_CouplingType:"Összekapcsolás típusa",UCUM:"Mértékegységek",UCUM_Length:"Távolság mértékegységek",RS_UseLimitations:"Használati korlátozások",RS_AccessConstraints:"Hozzáférési korlátozások"}});