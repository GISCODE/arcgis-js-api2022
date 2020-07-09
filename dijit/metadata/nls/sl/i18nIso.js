// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define({documentTypes:{data:{caption:"ISO 19115 (podatki)",description:""},service:{caption:"ISO 19119 (storitev)",description:""},gmi:{caption:"ISO 19115-2 (slikovje in mrežni podatki)",description:""}},general:{reference:"Referenca"},sections:{metadata:"Metapodatki",identification:"Identifikacija",distribution:"Distribucija",quality:"Kakovost",acquisition:"Nabava"},metadataSection:{identifier:"Identifikator",contact:"Stik",date:"Datum",standard:"Standardno",reference:"Referenca"},identificationSection:{citation:"Navedek",description:"Opis",contact:"Stik",thumbnail:"Sličica",keywords:"Ključne besede",constraints:"Omejitve",resource:"Vir",resourceTab:{representation:"Predstavitev",language:"Jezik",classification:"Klasifikacija",extent:"Obseg"},serviceResourceTab:{serviceType:"Tip storitve",extent:"Obseg",couplingType:"Tip spajanja",operation:"Operacija",operatesOn:"Deluje na"}},distributionSection:{},qualitySection:{scope:"Obseg",conformance:"Skladnost",lineage:"Poreklo"},acquisitionSection:{requirement:"Zahteva",objective:"Cilj",instrument:"Instrument",plan:"Načrt",operation:"Operacija",platform:"Platforma",environment:"Okolje"},AbstractMD_Identification:{sAbstract:"Izvleček",purpose:"Namen",credit:"Krediti",pointOfContact:"Kontaktna oseba",resourceMaintenance:"Vzdrževanje",graphicOverview:"Grafični pregled",descriptiveKeywords:"Zbirka ključnih besed",resourceConstraints:"Omejitve"},CI_Address:{deliveryPoint:"Dostavna točka",city:"Mesto",administrativeArea:"Administrativno območje",postalCode:"Poštna številka",country:"Država",electronicMailAddress:"E-pošta"},CI_Citation:{title:"Naslov",alternateTitle:"Drugi naslov",identifier:"Enolični identifikator vira",resource:{title:"Naslov vira",date:"Datum vira"},specification:{title:"Naslov specifikacije",date:"Datum specifikacije"}},CI_Contact:{phone:"Telefon",address:"Naslov",onlineResource:"Spletni vir",hoursOfService:"Ure storitve",contactInstructions:"Navodila za stopanje v stik"},CI_Date:{date:"Datum",dateType:"Tip podatkov"},CI_DateTypeCode:{caption:"Tip podatkov",creation:"Datum ustvarjanja",publication:"Datum objave",revision:"Datum revizije"},CI_OnLineFunctionCode:{caption:"Funkcija",download:"Prenesi",information:"Informacija",offlineAccess:"Dostop brez povezave",order:"Vrstni red",search:"Iskanje"},CI_OnlineResource:{caption:"Spletni vir",linkage:"URL",protocol:"Protokol",applicationProfile:"Profil aplikacije",name:"Ime",description:"Opis",sFunction:"Funkcija"},CI_ResponsibleParty:{caption:"Kontaktna oseba",individualName:"Ime posameznika",organisationName:"Ime organizacije",positionName:"Ime položaja",contactInfo:"Kontaktne informacije",role:"Vloga"},CI_RoleCode:{caption:"Vloga",resourceProvider:"Ponudnik virov",custodian:"Skrbnik",owner:"Lastnik",user:"Uporabnik",distributor:"Distributer",originator:"Informator",pointOfContact:"Kontaktna oseba",principalInvestigator:"Glavni raziskovalec",processor:"Procesor",publisher:"Izdajatelj",author:"Avtor"},CI_Telephone:{voice:"Glas",facsimile:"Faks"},DCPList:{caption:"DCP",XML:"XML",CORBA:"CORBA",JAVA:"JAVA",COM:"COM",SQL:"SQL",WebServices:"Spletne storitve"},DQ_ConformanceResult:{caption:"Rezultat usklajenosti",explanation:"Pojasnilo",degree:{caption:"Stopinja",validationPerformed:"Izvedeno preverjanje veljavnosti",conformant:"Skladno",nonConformant:"Ni skladno"}},DQ_DataQuality:{report:"Prijava"},DQ_Scope:{level:"Domet (kakovostne informacije, ki veljajo za)",levelDescription:"Opis ravni"},EX_Extent:{caption:"Obseg",description:"Opis",geographicElement:"Prostorski obseg",temporalElement:"Časovni obseg",verticalElement:"Višinski obseg"},EX_GeographicBoundingBox:{westBoundLongitude:"Zahodna omejitvena G.Š.",eastBoundLongitude:"Vzhodna omejitvena G.Š.",southBoundLatitude:"Južna omejitvena G.Š.",northBoundLatitude:"Severna omejitvena G.Š."},EX_GeographicDescription:{caption:"Geografski opis"},EX_TemporalExtent:{TimePeriod:{beginPosition:"Datum začetka",endPosition:"Datum zaključka"}},EX_VerticalExtent:{minimumValue:"Najmanjša vrednost",maximumValue:"Največja vrednost",verticalCRS:"Vertikalni K.S."},Length:{caption:"Dolžina",uom:"Merske enote",km:"Kilometri",m:"Metri",mi:"Milje",ft:"Čevlji"},LI_Lineage:{statement:"Splošen opis porekla vira"},MD_BrowseGraphic:{fileName:"Dodaj URL grafike",fileDescription:"Dodaj napis grafike",fileType:"Dodaj tip grafike"},MD_ClassificationCode:{unclassified:"Neklasificirano",restricted:"Omejeno",confidential:"Tajno",secret:"Zaupno",topSecret:"Strogo zaupno"},MD_Constraints:{caption:"Omejitve uporabe",useLimitation:"Omejitev uporabe"},MD_DataIdentification:{spatialRepresentationType:"Tip prostorske predstavitve",spatialResolution:"Prostorska ločljivost",language:"Jezik vira",supplementalInformation:"Dodatno"},MD_DigitalTransferOptions:{onLine:"S povezavo"},MD_Distribution:{distributionFormat:"Oblika distribucije",transferOptions:"Možnosti prenosa"},MD_Format:{name:"Ime formata",version:"Različica formata"},MD_Identifier:{caption:"URI",identifierCaption:"Identifikator",code:"Koda"},MD_Keywords:{delimitedCaption:"Ključne besede",thesaurusName:"Povezan slovar sopomenk"},MD_KeywordTypeCode:{caption:"Tip ključne besede",discipline:"Disciplina",place:"Kraj",stratum:"Razred",temporal:"Časovno",theme:"Tema"},MD_LegalConstraints:{caption:"Pravne omejitve",accessConstraints:"Omejitve dostopa",useConstraints:"Omejitve uporabe",otherConstraints:"Druge omejitve"},MD_MaintenanceFrequencyCode:{caption:"Pogostost",continual:"Neprekinjeno",daily:"Dnevno",weekly:"Tedensko",fortnightly:"Vsakih 14 dni",monthly:"Mesečno",quarterly:"Trimesečno",biannually:"Dvakrat letno",annually:"Letno",asNeeded:"Po potrebi",irregular:"Neredno",notPlanned:"Nenačrtovano",unknown:"Neznano"},MD_Metadata:{caption:"Metapodatki",fileIdentifier:"Identifikator datoteke",language:"Jezik metapodatkov",hierarchyLevel:"Raven hierarhije",hierarchyLevelName:"Ime ravni hierarhije",contact:"Stik za metapodatke",dateStamp:"Datum metapodatkov",metadataStandardName:"Standardno ime metapodatkov",metadataStandardVersion:"Standardna različica metapodatkov",referenceSystemInfo:"Referenčni sistem",identificationInfo:"Identifikacija",distributionInfo:"Distribucija",dataQualityInfo:"Kakovost"},MD_ProgressCode:{caption:"Koda napredka",completed:"Dokončano",historicalArchive:"Zgodovinski arhiv",obsolete:"Zastarelo",onGoing:"V teku",planned:"Načrtovano",required:"Zahtevano",underDevelopment:"V razvoju"},MD_RepresentativeFraction:{denominator:"Imenovalec"},MD_Resolution:{equivalentScale:"Ekvivalentna lestvica",distance:"Razdalja"},MD_RestrictionCode:{copyright:"Avtorske pravice",patent:"Patent",patentPending:"Patent čaka na odobritev",trademark:"Blagovna znamka",license:"Licenca",intellectualPropertyRights:"Pravice intelektualne lastnine",restricted:"Omejeno",otherRestrictions:"Druge restrikcije"},MD_ScopeCode:{attribute:"Atribut",attributeType:"Tip atributa",collectionHardware:"Strojna oprema zbirke",collectionSession:"Seja zbirke",dataset:"Podatkovni sklop",series:"Serije",nonGeographicDataset:"Negeografski podatkovni sklop",dimensionGroup:"Skupina dimenzij",feature:"Geoobjekt",featureType:"Tip geoobjekta",propertyType:"Tip lastnine",fieldSession:"Seja polja",software:"Programska oprema",service:"Storitev",model:"Model",tile:"Ploščica"},MD_ScopeDescription:{attributes:"Atributi",features:"Geoobjekti",featureInstances:"Primerki geoobjekta",attributeInstances:"Primerki atributa",dataset:"Podatkovni sklop",other:"Drugo"},MD_SecurityConstraints:{caption:"Varnostne omejitve",classification:"Klasifikacija",userNote:"Opomba uporabnika",classificationSystem:"Klasifikacijski sistem",handlingDescription:"Opis obravnavanja"},MD_SpatialRepresentationTypeCode:{caption:"Tip prostorskega prikaza",vector:"Vektor",grid:"Ribiška mreža",textTable:"Tabela z besedilom",tin:"TIN",stereoModel:"Stereo model",video:"Videoposnetek"},MD_TopicCategoryCode:{caption:"Kategorija teme",boundaries:"Upravne in politične meje",farming:"Kmetijstvo",climatologyMeteorologyAtmosphere:"Ozračje in podnebje",biota:"Biologija in ekologija",economy:"Podjetništvo in ekonomija",planningCadastre:"Kataster",society:"Kultura, družba in demografija",elevation:"Višina in pridobljeni izdelki",environment:"Okolje in ohranjanje",structure:"Obrati in strukture",geoscientificInformation:"Geologija in geofizika",health:"Zdravje ljudi in bolezni",imageryBaseMapsEarthCover:"Slikovje in temeljne karte",inlandWaters:"Viri celinskih voda",location:"Lokacije in geodetska omrežja",intelligenceMilitary:"Vojska",oceans:"Oceani in estuariji",transportation:"Transportna omrežja",utilitiesCommunication:"Komunalne storitve in komunikacije"},MI_ContextCode:{caption:"Kontekst",acquisition:"Nabava",pass:"Dostop",wayPoint:"Točka na poti"},MI_EnvironmentalRecord:{caption:"Okoljski pogoji",averageAirTemperature:"Povprečna temperatura zraka",maxRelativeHumidity:"Največja relativna vlažnost",maxAltitude:"Najvišja nadmorska višina",meterologicalConditions:"Vremenske razmere"},MI_Event:{identifier:"Identifikator dogodkov",time:"Čas",expectedObjectiveReference:"Pričakovani cilj (identifikator cilja)",relatedSensorReference:"Relacijski senzor (identifikator instrumenta)",relatedPassReference:"Relacijski dostop (identifikator dostopa do platforme)"},MI_GeometryTypeCode:{point:"Točka",linear:"Linearno",areal:"Zračno",strip:"Trak"},MI_Instrument:{citation:"Navedek instrumenta",identifier:"Identifikator instrumenta",sType:"Tip instrumenta",description:"Opis instrumenta",mountedOn:"Nameščeno na",mountedOnPlatformReference:"Nameščeno na (identifikator platforme)"},MI_Metadata:{acquisitionInformation:"Nabava"},MI_Objective:{caption:"Cilj",identifier:"Identifikator cilja",priority:"Prioriteta cilja",sFunction:"Funkcija cilja",extent:"Obseg",pass:"Dostop do platforme",sensingInstrumentReference:"Merilni instrument (identifikator instrumenta)",objectiveOccurrence:"Dogodki",sections:{identification:"Identifikacija",extent:"Obseg",pass:"Dostop",sensingInstrument:"Merilni instrument",objectiveOccurrence:"Dogodki"}},MI_ObjectiveTypeCode:{caption:"Tip (tehnika zbiranja za cilj)",instantaneousCollection:"Trenutna zbirka",persistentView:"Trajni pogled",survey:"Izmera"},MI_Operation:{caption:"Operacija",description:"Opis operacije",citation:"Navedek operacije",identifier:"Identifikator operacije",status:"Status operacije",objectiveReference:"Relacijski cilj (identifikator cilja)",planReference:"Relacijski načrt (identifikator načrta)",significantEventReference:"Relacijski dogodek (identifikator dogodka)",platformReference:"Relacijska platforma (identifikator platforme)",sections:{identification:"Identifikacija",related:"Relacijsko"}},MI_OperationTypeCode:{caption:"Tip operacije",real:"Realno",simulated:"Simulirano",synthesized:"Sintetizirano"},MI_Plan:{sType:"Geometrija vzorčenja za zbiranje podatkov",status:"Status načrta",citation:"Navedek zbiranja, ki ga naloži pooblaščeni organ",satisfiedRequirementReference:"Izpolnjena zahteva (identifikator zahteve)",operationReference:"Relacijska operacija (identifikator operacije)"},MI_Platform:{citation:"Navedek platforme",identifier:"Identifikator platforme",description:"Opis platforme, ki podpira instrument",sponsor:"Organizacijski sponzor za platformo",instrument:"Instrument/-i, nameščen/-i na platformo",instrumentReference:"Identifikator instrumenta",sections:{identification:"Identifikacija",sponsor:"Sponzor",instruments:"Instrumenti"}},MI_PlatformPass:{identifier:"Identifikator dostopa do platforme",extent:"Obseg dostopa do platforme",relatedEventReference:"Relacijski dogodek (identifikator dogodka)"},MI_PriorityCode:{critical:"Kritično",highImportance:"Zelo pomembno",mediumImportance:"Srednje pomembno",lowImportance:"Manj pomembno"},MI_RequestedDate:{requestedDateOfCollection:"Zahtevani datum zbirke",latestAcceptableDate:"Najnovejši sprejemljiv datum"},MI_Requirement:{caption:"Zahteva",citation:"Navedek za material s smernicami za zahteve",identifier:"Identifikator zahteve",requestor:"Vlagatelj zahteve",recipient:"Prejemnik rezultatov zahteve",priority:"Prioriteta zahteve",requestedDate:"Zahtevani datum",expiryDate:"Datum poteka",satisifiedPlanReference:"Izpolnjen načrt (identifikator načrta)",sections:{identification:"Identifikacija",requestor:"Vlagatelj",recipient:"Prejemnik",priorityAndDates:"Prioriteta in datumi",satisifiedPlan:"Izpolnjen načrt"}},MI_SequenceCode:{caption:"Zaporedje",start:"Začetek",end:"Konec",instantaneous:"Trenutno"},MI_TriggerCode:{caption:"Sprožilec",automatic:"Samodejno",manual:"Ročno",preProgrammed:"Predprogramirano"},ObjectReference:{uuidref:"Referenca UUID",xlinkref:"Referenca URL"},RS_Identifier:{caption:"ID in prostor kode",code:"Koda",codeSpace:"Prostor kode"},SV_CouplingType:{loose:"Ohlapno",mixed:"Mešano",tight:"Strnjeno"},SV_OperationMetadata:{operationName:"Ime operacije",DCP:"DCP",connectPoint:"Priključna točka"},SV_ServiceIdentification:{serviceType:"Tip storitve",couplingType:"Tip spajanja",containsOperations:"Metapodatki operacije",operatesOn:"Deluje na"},TM_Primitive:{indeterminatePosition:"Nedoločen položaj",indeterminates:{before:"Prej",after:"Potem",now:"Zdaj",unknown:"Neznano"}},gemet:{concept:{gemetConceptKeyword:"Ključna beseda zasnove GEMET",tool:"Poišči...",dialogTitle:"GEMET – ključna beseda zasnove",searchLabel:"Poišči:",searchTip:"Išči po GEMET-u"},theme:{tool:"Poišči...",dialogTitle:"GEMET – tema podatkov Inspire"},ioerror:"Prišlo je do napake pri komunikaciji s storitvijo GEMET: {url}",searching:"Iskanje po GEMET-u...",noMatch:"Ustreznih zadetkov ni bilo mogoče najti.",languages:{bg:"Bolgarščina",cs:"Češčina",da:"Danščina",nl:"Nizozemščina",en:"Angleščina",et:"Estonščina",fi:"Finščina",fr:"Francoščina",de:"Nemščina",el:"Grščina",hu:"Madžarščina",ga:"Gelščina (Irska)",it:"Italijanščina",lv:"Latvijščina",lt:"Litovščina",mt:"Malteščina",pl:"Poljščina",pt:"Portugalščina",ro:"Romunščina",sk:"Slovaščina",sl:"Slovenščina",es:"Španščina",sv:"Švedščina"}}});