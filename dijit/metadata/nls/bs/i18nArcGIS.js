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

define({documentTypes:{arcgis:{caption:"ArcGIS metapodaci",editorCaption:"Metapodaci",description:""}},emptyOption:"Prazno",conditionals:{ISO19139A1_ROW4:"Ako je razina hijerarhije metapodataka skup podataka, potreban je geografski granični okvir ili geografski naziv.",ISO19139A1_ROW6:"Potreban je identifikator skupa podataka ili naziv skupa podataka.",ISO19139A1_ROW7:"Ako se izaberu ostale restrikcije, potrebna su ostala ograničenja.",ISO19139A1_ROW9:"Ako opseg nije skup podataka ili niz, potreban je opis razine.",ISO19139A1_ROW10_11_12:"Ako je opseg skup podataka ili niz, potrebna je izjava, korak postupka ili izvor podataka.",ISO19139A1_ROW15:"Ako se odabere dostupnost kontrolne točke, potreban je opis kontrolne točke.",ISO19139A1_ROW18:"Ako se zabilježi distribucija, potreban je format ili distributer/format.",INSPIRE_AccessLimitation:" Potreban je barem jedan kod za ograničenje pravnog pristupa ili kod sigurnosne klasifikacije. (INSPIRE)",INSPIRE_UseLimitation:" Potrebno je barem jedno ograničenje upotrebe. (INSPIRE)",INSPIRE_ConformanceResult:"Izvješće o konzistentnosti domene zahtijeva rezultat usklađenosti. (INSPIRE)",INSPIRE_DomainConsistency:"Potrebno je izvješće o konzistentnosti domene. (INSPIRE)",INSPIRE_LineageStatement:"Ako je opseg skup podataka ili niz, potrebna je izjava o podrijetlu. (INSPIRE)",FGDC_DescIfTemporal:"Potreban je opis za vremenski obuhvat. (FGDC)",FGDC_Keywords:"Potrebna je tema, oznaka ili ključna riječ teme. (FGDC)",FGDC_Reports:"Potrebna su izvješća o izostanku cjelovitosti i konceptualnoj dosljednosti. (FGDC)",FGDC_Temporal:"Potreban je barem jedan vremenski obuhvat. (FGDC)",NAP_Contact:"Potrebna je adresa / točka isporuke, telefonski/glasovni broj ili resurs na mreži / URL. (NAP)",GEN_BoundingBox:"Potreban je barem jedan geografski granični okvir.",GEN_ReportResult:"Potrebna je usklađenost ili kvantitativni rezultat.",minLessThanMax:"Minimalna vrijednost mora biti manja od maksimalne vrijednosti."},hints:{integerGreaterThanZero:"(unesite cijeli broj > 0)",integerGreaterThanOne:"(unesite cijeli broj > 1)",integer0To100:"(unesite cijeli broj 0..100)",maxScale:"(unesite cijeli broj > 0, npr. 50000)",minScale:"(unesite cijeli broj > 0, npr. 150000000)",number0To100:"(unesite broj 0..100)",number0To360:"(unesite broj 0..360)",number90To90:"(unesite broj -90..90)",listOfDoubles:"(unesite niz brojeva, razdvojite razmakom)"},htmlEditor:{button:"Uredi..."},sections:{overview:"Pregled",esri:"Esri",resource:"Resurs",reference:"Referenca",content:"Sadržaj",distribution:"Distribucija",quality:"Kvaliteta",eainfo:"Polja",representation:"Predstavljanje",metadata:"Metapodaci"},metadataStyle:{caption:"ArcGIS stil metapodataka",changeButton:"Promijeni...",dialogTitle:"Izaberi stil metapodataka",updating:"Ažuriranje dokumenta...","Item Description":"Opis stavke","FGDC CSDGM Metadata":"FGDC CSDGM metapodaci","ISO 19139 Metadata Implementation Specification":"ISO 19139 Specifikacije za provedbu metapodataka","ISO 19139 Metadata Implementation Specification GML3.2":"ISO 19139 Specifikacije za provedbu metapodataka GML3.2","INSPIRE Metadata Directive":"Direktiva o metapodacima INSPIRE","North American Profile of ISO19115 2003":"Profil za Sjevernu Ameriku ISO19115 2003"},aggrInfo:{caption:"Agregiraj podatke",datasetHint:"Potreban je identifikator skupa podataka ili naziv skupa podataka.",aggrDSIdent:"Identifikator skupa podataka",aggrDSName:"Naziv skupa podataka"},appSchInfo:{caption:"Shema aplikacije",asName:"Naziv sheme",asSchLang:"Jezik sheme",asCstLang:"Jezik ograničenja",asAscii:"ASCII",asGraFile:"Grafička datoteka",asGraFile_src:"Izvor grafičke datoteke",asSwDevFile:"Razvojna datoteka softvera",asSwDevFile_src:"Izvor razvojne datoteke softvera",asSwDevFiFt:"Format razvojne datoteke softvera"},citation:{caption:"Navod",section:{titlesAndDates:"Naslovi i datumi",links:"URL-ovi",identifiers:"Identifikatori",presentation:"Obrazac",other:"Ostalo",edition:"Izdanje",series:"Niz"},conditionalDate:{caption:"Datum navoda",msg:"Potreban je datum stvaranja, datum objave ili datum revizije.",msg_nap:"Potreban je datum navoda."},resTitle:"Naslov",resAltTitle:"Alternativni naslov",resTitleForInspire:{bg:"Bugarski",cs:"Češki",da:"Danski",de:"Njemački",el:"Grčki",en:"Engleski",es:"Španjolski",et:"Estonski",fi:"Finski",fr:"Francuski",hr:"Hrvatski",hu:"Mađarski",it:"Talijanski",lt:"Litavski",lv:"Latvijski",mt:"Malteški",nl:"Nizozemski",pl:"Poljski",pt:"Portugalski",ro:"Rumunjski",sk:"Slovački",sl:"Slovenski",sv:"Švedski"},collTitle:"Kolektivni naslov",date:{createDate:"Datum stvaranja",pubDate:"Datum objave",reviseDate:"Datum revizije",notavailDate:"Datum nije dostupan",inforceDate:"Datum na snazi",adoptDate:"Usvojeni datum",deprecDate:"Zastarjeli datum",supersDate:"Zamijenjeni datum"},isbn:"ISBN",issn:"ISSN",citId:{caption:"Identifikator",identCode:"Kod",identAuth:"Navod ovlasti"},resEd:"Izdanje",resEdDate:"Datum izdanja",datasetSeries:{seriesName:"Naziv",issId:"Izdanje",artPage:"Stranica"},otherCitDet:"Ostale pojedinosti",contactCaption:"Kontakt za navode"},cntAddress:{caption:"Adresa",delPoint:"Točka isporuke",city:"Grad",adminArea:"Administrativno područje",postCode:"Poštanski broj",country:"Zemlja",eMailAdd:"E-pošta",addressType:{caption:"Vrsta adrese",postal:"Poštanski broj",physical:"Fizička adresa",both:"Oboje"}},cntOnlineRes:{caption:"Resurs na mreži",linkage:"URL",protocol:"Protokol",appProfile:"Profil aplikacije",orName:"Naziv",orDesc:"Opis"},cntPhone:{caption:"Telefon",voiceNum:"Glas",faxNum:"Faks",tddtty:"TDD/TTY?"},codeRef:{caption:"Identifikator",identCode:"Kod",idCodeSpace:"Prostor koda",idVersion:"Verzija",identAuth:"Navod ovlasti"},constraints:{caption:"Ograničenja",useLimit:"Ograničenje upotrebe",general:{caption:"Općenito"},legal:{caption:"Pravno",accessConsts:"Ograničenja pristupa",useConsts:"Ograničenja upotrebe",othConsts:"Ostala ograničenja"},security:{caption:"Sigurnost",classSys:"Sustav klasifikacije",userNote:"Bilješka korisnika",handDesc:"Opis rukovanja"}},contInfo:{caption:"Podaci o sadržaju",section:{CovDesc:"Opis pokrivenosti",ImgDesc:"Opis slike",FetCatDesc:"Katalog značajki"},attDesc:"Opis atributa",covDim:{caption:"Raspon i band",seqID:"Identifikator slijeda",seqIDType:"Vrsta identifikatora slijeda",dimDescrp:"Opisnik"},RangeDim:{caption:"Dimenzija raspona"},Band:{caption:"Band",minVal:"Minimalna vrijednost",maxVal:"Maksimalna vrijednost",valUnit:"Jedinice vrijednosti",pkResp:"Najbolji odgovor",bitsPerVal:"Bitovi po vrijednosti",toneGrad:"Gradacija nijanse",sclFac:"Faktor mjerila",offset:"Pomak"},CovDesc:{caption:"Opis pokrivenosti",section:{description:"Opis",rangesAndBands:"Rasponi i bandovi"}},ImgDesc:{caption:"Opis slike",section:{description:"Opis",rangesAndBands:"Rasponi i bandovi"},illElevAng:"Kut visine osvjetljenja",illAziAng:"Kut azimuta osvjetljenja",cloudCovPer:"Postotak naoblake",cmpGenQuan:"Kvaliteta kompresije",trianInd:"Pokazatelj triangulacije?",radCalDatAv:"Dostupnost podataka o radiometrijskoj kalibraciji?",camCalInAv:"Dostupnost podataka o kalibraciji kamere?",filmDistInAv:"Dostupnost podataka o deformaciji filma?",lensDistInAv:"Dostupnost podataka o deformaciji leće?",imagQuCode:"Kod kvalitete",prcTypCde:"Kod razine obrade"},FetCatDesc:{caption:"Katalog značajki",section:{description:"Opis",featureTypes:"Vrste geoobjekata",citation:"Navod"},compCode:"Je li sukladno s ISO 19110?",incWithDS:"Included With Dataset?",catCitation:"Navod kataloga značajki",catFetTyps:{caption:"Vrsta geoobjekta",genericName:"Naziv",codeSpace:"Prostor koda"}}},contact:{caption:"Kontakt",section:{name:"Naziv kontakta",info:"Kontaktni podaci",hoursAndInstructions:"Sati i upute"},conditionalName:{caption:"Naziv kontakta",msg:"Potrebno je ime pojedinca, naziv organizacije ili naziv položaja.",msg_fgdc:"Potrebno je ime pojedinca ili naziv organizacije."},rpIndName:"Naziv pojedinca",rpOrgName:"Naziv organizacije",rpPosName:"Naziv položaja",rpCntInfo:"Kontaktni podaci",cntHours:"Sati usluge",cntInstr:"Upute za kontaktiranje"},distInfo:{caption:"Informacije o distribuciji",section:{format:"Format",distributor:"Distributer",transfer:"Opcije prijenosa"},distFormat:{caption:"Format distribucije",formatName:"Naziv formata",formatVer:"Verzija formata",formatAmdNum:"Broj izmjene",formatSpec:"Specifikacija",fileDecmTech:"Tehnika dekompresije",formatInfo:"Podaci o sadržaju"},distributor:{caption:"Distributer"},distTranOps:{caption:"Opcije digitalnog prijenosa",section:{unitsAndSize:"Jedinice"},unitsODist:"Jedinice distribucije",transSize:"Veličina prijenosa",offLineMed:{caption:"Izvanmrežni medij",medDensity:"Gustoća",medDenUnits:"Jedinice gustoće",medVol:"Količine",medNote:"Bilješka o mediju"}},distorOrdPrc:{caption:"Postupak stvaranja redoslijeda",resFees:"Naknade",planAvDtTm:"Dostupan datum",planAvTmPd:{caption:"Dostupan datum",tmBegin:"Datum/vrijeme početka",tmEnd:"Datum/vrijeme završetka"},ordInstr:"Upute za stvaranje narudžbe",ordTurn:"Zaokret"}},dqInfo:{caption:"Kvaliteta podataka",section:{scope:"Opseg",report:"Izvješće",lineage:"Podrijetlo"},dqScope:{section:{level:"Razina",extent:"Obuhvat"},scpLvl:"Razina opsega",scpLvlDesc:"Opis razine",scpExt:"Obuhvat opsega"},report:{section:{measure:"Mjera",evaluation:"Procjena",result:"Rezultat",conformance:"Usklađenost"},measDesc:"Opis mjere",measName:"Naziv mjere",measDateTm:"Datum mjere",measId:"Identifikator mjere",evalMethDesc:"Metoda procjene",evalProc:"Navod postupka",ConResult:{caption:"Rezultat usklađenosti",conExpl:"Objašnjenje",conSpec:"Specifikacija",conPass:{caption:"Stupanj",_1:"Usklađeno",_0:"Nije usklađeno"}},QuanResult:{caption:"Kvantitativni rezultat",quanVal:"Vrijednost",quanValType:"Vrsta vrijednosti",quanValUnit:"Jedinice vrijednosti",errStat:"Statistika pogrešaka"}},dataLineage:{section:{statement:"Izjava",dataSource:"Izvor podataka",prcStep:"Korak postupka"},statement:"Izjava o podrijetlu",dataSource:{caption:"Izvor podataka",section:{description:"Opis",srcRefSys:"Referentni sustav",srcExt:"Obuhvat",srcCitatn:"Navod"},srcDesc:"Opis izvora",srcScale:{rfDenom:"Nazivnik mjerila"},srcRefSys:"Referentni sustav izvora",srcExt:"Obuhvat izvora",srcCitatn:"Navod izvora"},prcStep:{caption:"Korak postupka",section:{description:"Opis",stepProc:"Procesor",stepSrc:"Izvor podataka"},stepDesc:"Opis postupka",stepRat:"Obrazloženje",stepDateTm:"Datum koraka postupka",stepProc:"Procesor",stepSrc:"Izvor podataka"}}},eainfo:{caption:"Podaci o entitetu i atributu",section:{detailed:"Pojedinosti",overview:"Pregled"},detailed:{caption:"Pojedinosti o entitetu i atributu",section:{enttyp:"Entitet",attr:"Atributi"},enttyp:{caption:"Vrsta entiteta",enttypl:"Oznaka",enttypt:"Predmet",enttypc:"Broj",enttypd:"Definicija",enttypds:"Izvor definicije"},attr:{caption:"Atribut",section:{description:"Opis",value:"Vrijednost",domain:"Domena"},attrlabl:"Oznaka",attalias:"Alias",attrdef:"Definicija",attrdefs:"Izvor definicije",attrtype:"Vrsta",attwidth:"Širina",atprecis:"Preciznost",attscale:"Mjerilo",atindex:"Indeksirano",attrvai:{attrva:"Objašnjenje vrijednosti",attrvae:"Točnost vrijednosti"},attrmfrq:"Učestalost mjerenja vrijednosti",begdatea:"Datum početka vrijednosti",enddatea:"Datum završetka vrijednosti",attrdomv:{caption:"Domena",edom:{caption:"Numerirano",edomv:"Vrijednost",edomvd:"Definicija",edomvds:"Izvor definicije"},rdom:{caption:"Raspon",rdommin:"Minimalna vrijednost",rdommax:"Maksimalna vrijednost",rdommean:"Prosjek",rdomstdv:"Standardno odstupanje",attrunit:"Jedinice",attrmres:"Razlučivost mjerenja"},codesetd:{caption:"Kodni skup",codesetn:"Naziv",codesets:"Izvor"},udom:{caption:"Nije reprezentativno"}}}},overview:{caption:"Pregled",eaover:"Sažetak",eadetcit:"Navod"}},extent:{caption:"Obuhvat",section:{description:"Opis",geographic:"Geografsko",temporal:"Vremensko",vertical:"Visinski"},exDesc:"Opis obuhvata",geoEle:{caption:"Geografski obuhvat",GeoBndBox:{caption:"Granični okvir",esriExtentType:"Obuhvat služi za pretraživanje?",exTypeCode:"Obuhvat sadrži resurs?",westBL:"Zapadna geografska dužina",eastBL:"Istočna geografska dužina",southBL:"Južna geografska širina",northBL:"Sjeverna geografska širina"},GeoDesc:{caption:"Geografski opis",exTypeCode:"Opis sadrži resurs?",identCode:"Kod"}},tempEle:{caption:"Vremenski obuhvat",TM_Period:"Vremensko razdoblje",TM_Instant:"Vremenski trenutak",tmPosition:"Datum",tmBegin:"Datum početka",tmEnd:"Datum kraja"},vertEle:{caption:"Visinski obuhvat",vertMinVal:"Minimalna vrijednost",vertMaxVal:"Maksimalna vrijednost"}},graphOver:{caption:"Pregledaj grafiku",bgFileName:"Pregledaj URL grafike",bgFileDesc:"Pregledaj opis grafike",bgFileType:"Pregledaj vrstu grafičke datoteke"},keywords:{caption:"Ključne riječi",section:{topicCategory:"Tema",searchKeys:"Oznake",themeKeys:"Tema",placeKeys:"Mjesto",tempKeys:"Vremensko",discKeys:"Disciplina",stratKeys:"Stratum",productKeys:"Proizvod",subTopicCatKeys:"Podtema",otherKeys:"Ostalo"},delimited:"Ključne riječi",searchKeys:"Oznake",themeKeys:"Ključne riječi teme",placeKeys:"Ključne riječi mjesta",tempKeys:"Vremenske ključne riječi",discKeys:"Ključne riječi discipline",stratKeys:"Ključne riječi stratuma",productKeys:"Ključne riječi proizvoda",subTopicCatKeys:"Ključne riječi podteme",otherKeys:"Ostale ključne riječi",thesaName:"Navod rječnika sinonima",thesaLang:"Jezik rječnika sinonima",gemet:"Traženje"},locales:{caption:"Regionalne postavke",locale:"Regionalna postavka",resTitle:"Naslov",idAbs:"Sažetak"},maintenance:{caption:"Održavanje",section:{frequency:"Učestalost",scope:"Opseg",note:"Bilješka"},usrDefFreq:"Prilagodi učestalost",dateNext:"Sljedeće ažuriranje",maintScp:"Opseg ažuriranja",upScpDesc:{caption:"Opis opsega",attribSet:"Atributi",attribIntSet:"Instance atributa",featSet:"Geoobjekti",featIntSet:"Instance geoobjekta",datasetSet:"Skup podataka",other:"Ostale instance"},maintNote:"Bilješka o održavanju",maintCont:"Kontakt za održavanje"},metadata:{section:{profile:"Profil",details:"Opseg"},mdFileID:"Identifikator datoteke",mdParentID:"Nadređeni identifikator",datasetURI:"URI skupa podataka",dataSetFn:"Funkcija skupa podataka",mdDateSt:"Datum metapodataka",mdTimeSt:"Vrijeme metapodataka",mdLang:"Jezik metapodataka",mdChar:"Niz znakova",mdHrLv:"Razina hijerarhije",mdHrLvName:"Naziv razine hijerarhije",mdContact:"Kontakt za metapodatke",mdMaint:"Održavanje metapodataka",mdConst:"Ograničenja metapodataka"},porCatInfo:{caption:"Navod prikazivanja"},refSysInfo:{caption:"Prostorna referenca"},resource:{section:{citation:"Navod",details:"Pojedinosti",description:"Opis",keywords:"Ključne riječi",status:"Status",resolution:"Razlučivost",representation:"Predstavljanje",browse:"Pregledaj grafiku",format:"Format",usage:"Upotreba",aggregateInfo:"Agregacija",additional:"Dodatno"},idAbs:"Opis (sažetak)",idPurp:"Sažetak (svrha)",suppInfo:"Dopunske informacije",idCredit:"Krediti",envirDesc:"Okruženje za obradu",dataLang:"Jezik resursa",dataExt:"Obuhvat resursa",idPoC:"Točka za kontakt",resMaint:"Održavanje resursa",resConst:"Ograničenja resursa",dsFormat:"Format resursa",dataScale:{caption:"Mjerilo podataka",equScale:"Razlučivost mjerila",scaleDist:"Razlučivost udaljenosti",scaleDist_value:"Udaljenost"},idSpecUse:{caption:"Upotreba resursa",specUsage:"Specifična upotreba",usageDate:"Datum upotrebe",usrDetLim:"Ograničenja",usrCntInfo:"Kontakt za upotrebu"}},service:{caption:"Usluga",svType:"Vrsta usluge",svType_Name:"Naziv",svAccProps:"Svojstva pristupa",svCouplRes:{caption:"Spareni resurs",svOpName:"Naziv radnje",svResCitId:"Identifikator resursa"},svCoupleType:"Vrsta spajanja"},scaleRange:{caption:"Raspon mjerila",maxScale:"Maksimalno mjerilo",minScale:"Minimalno mjerilo"},spatRepInfo:{caption:"Prostorno predstavljanje",section:{dimension:"Dimenzija",parameters:"Parametri"},numDims:"Broj dimenzija",tranParaAv:"Dostupnost parametra pretvorbe?",axisDimension:{caption:"Dimenzija",dimSize:"Veličina",dimResol:{caption:"Razlučivost",_value:"Vrijednost razlučivosti",uom:"Jedinice razlučivosti"}},VectSpatRep:{caption:"Vektor",geometObjs:"Geometrijski predmeti",geoObjCnt:"Broj predmeta"},GridSpatRep:{caption:"Mreža"},Georect:{caption:"Geoispravljeno",section:{centerPoint:"Središnja točka",cornerPts:"Kutne točke"},chkPtAv:"Dostupnost kontrolne točke?",chkPtDesc:"Opis kontrolne točke",ptInPixel:"Točka u pikselu",transDimDesc:"Opis dimenzije pretvorbe",transDimMap:"Kartiranje dimenzije pretvorbe",cornerPts:{caption:"Kutna točka",pos:"Položaj",gmlDesc:"Opis",gmlDescRef:"Referenca",gmlIdent:"Identifikator",codeSpace:"Prostor koda identifikatora"}},Georef:{caption:"Georeferentno",ctrlPtAv:"Dostupnost kontrolne točke?",orieParaAv:"Dostupnost parametra orijentacije?",orieParaDs:"Opis parametra orijentacije",georefPars:"Georeferencirani parametri",paraCit:"Navod parametra"},Indref:{caption:"Neizravno"}},booleanOptions:{_false:"Ne",_true:"Da"},codelist:{CountryCode:"Zemlja",LanguageCode:"Jezik",MonetaryUnits:"Novčane jedinice",MonetaryUnits_empty:"Nema univerzalne valute",PresentationForm:"Oblik prezentacije geoprostornih podataka FGDC-a",CI_PresentationFormCode:"Oblik prezentacije",CI_RoleCode:"Uloga",CI_OnLineFunctionCode:"Funkcija",IMS_ContentType:"Vrsta sadržaja",DQ_ElementDimension:"Dimenzija",DQ_ElementType:"Vrsta izvješća",DQ_EvaluationMethodTypeCode:"Vrsta procjene",DS_AssociationTypeCode:"Vrsta udruženja",DS_InitiativeTypeCode:"Vrsta inicijative",LI_SourceType:"Vrsta izvora",MD_CellGeometryCode:"Geometrija ćelije",MD_CharacterSetCode:"Niz znakova",MD_ClassificationCode:"Klasifikacija",MD_CoverageContentTypeCode:"Vrsta sadržaja",MD_DimensionNameTypeCode:"Vrsta dimenzije",MD_GeometricObjectTypeCode:"Vrsta geometrijskog predmeta",MD_ImagingConditionCode:"Stanje snimke",MD_MaintenanceFrequenceCode:"Učestalost ažuriranja",MD_MediumFormatCode:"Kod formata",MD_MediumNameCode:"Naziv medija",MD_PixelOrientationCode:"Orijentacija piksela",MD_ProgressCode:"Status",MD_RestrictionCode:"Kod ograničenja",MD_ScopeCode:"Opseg",MD_SpatialRepresentationTypeCode:"Vrsta prostornog predstavljanja",MD_TopicCategoryCode:"Kategorija teme",MD_TopologyLevelCode:"Razina topologije",RS_Dimension:"Dimenzija",SV_CouplingType:"Vrsta spajanja",UCUM:"Jedinice",UCUM_Length:"Jedinice udaljenosti",RS_UseLimitations:"Ograničenja upotrebe",RS_AccessConstraints:"Ograničenja pristupa"}});