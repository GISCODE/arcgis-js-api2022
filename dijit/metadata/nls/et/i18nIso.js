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

define({documentTypes:{data:{caption:"ISO 19115 (andmed)",description:""},service:{caption:"ISO 19119 (teenus)",description:""},gmi:{caption:"ISO 19115-2 (pildi- ja ruudustikuandmed)",description:""}},general:{reference:"Viide"},sections:{metadata:"Metaandmed",identification:"Identifikaator",distribution:"Jaotus",quality:"Kvaliteet",acquisition:"Soetamine"},metadataSection:{identifier:"Identifikaator",contact:"Kontakt",date:"Kuupäev",standard:"Standardne",reference:"Viide"},identificationSection:{citation:"Tsitaat",description:"Kirjeldus",contact:"Kontakt",thumbnail:"Pisipilt",keywords:"Märksõnad",constraints:"Piirangud",resource:"Ressurss",resourceTab:{representation:"Esitus",language:"Keel",classification:"Rühmitamine",extent:"Kuvaulatus"},serviceResourceTab:{serviceType:"Teenuse tüüp",extent:"Kuvaulatus",couplingType:"Ühenduse tüüp",operation:"Toiming",operatesOn:"Tegevusulatus"}},distributionSection:{},qualitySection:{scope:"Skoop",conformance:"Vastavus",lineage:"Päritolu"},acquisitionSection:{requirement:"Eeldus",objective:"Eesmärk",instrument:"Mõõteriist",plan:"Maksumus",operation:"Toiming",platform:"Platvorm",environment:"Keskkond"},AbstractMD_Identification:{sAbstract:"Ülevaade",purpose:"Eesmärk",credit:"Krediidid",pointOfContact:"Kontakti loomise punkt",resourceMaintenance:"Hooldus",graphicOverview:"Graafika ülevaade",descriptiveKeywords:"Märksõnade kogum",resourceConstraints:"Piirangud"},CI_Address:{deliveryPoint:"Kohaletoimetamise koht",city:"Suurlinn",administrativeArea:"Haldusüksus",postalCode:"Postiindeks",country:"Riik",electronicMailAddress:"Meiliaadress"},CI_Citation:{title:"Pealkiri",alternateTitle:"Alternatiivne pealkiri",identifier:"Ainulaadne ressursi identifikaator",resource:{title:"Ressursi pealkiri",date:"Ressursi kuupäev"},specification:{title:"Spetsifikatsiooni pealkiri",date:"Spetsifikatsiooni kuupäev"}},CI_Contact:{phone:"Telefon",address:"Aadress",onlineResource:"Veebiressurss",hoursOfService:"Teenindusaeg",contactInstructions:"Kontakteerumise juhised"},CI_Date:{date:"Kuupäev",dateType:"Kuupäeva tüüp"},CI_DateTypeCode:{caption:"Kuupäeva tüüp",creation:"Loomise kuupäev",publication:"Avaldamise kuupäev",revision:"Läbivaatuse kuupäev"},CI_OnLineFunctionCode:{caption:"Funktsioon",download:"Laadi alla",information:"Info",offlineAccess:"Võrguühenduseta juurdepääs",order:"Järjekord",search:"Otsi"},CI_OnlineResource:{caption:"Veebiressurss",linkage:"URL",protocol:"Protokoll",applicationProfile:"Rakenduse profiil",name:"Nimi",description:"Kirjeldus",sFunction:"Funktsioon"},CI_ResponsibleParty:{caption:"Kontakti loomise punkt",individualName:"Isiku nimi",organisationName:"Organisatsiooni nimi",positionName:"Asukoha nimi",contactInfo:"Kontaktteave",role:"Roll"},CI_RoleCode:{caption:"Roll",resourceProvider:"Ressursipakkuja",custodian:"Järelvaataja",owner:"Omanik",user:"Kasutaja",distributor:"Edasimüüja",originator:"Lähetaja",pointOfContact:"Kontakti loomise punkt",principalInvestigator:"Juhtivuurija",processor:"Töötleja",publisher:"Publitseerija",author:"Autor"},CI_Telephone:{voice:"Häälkõne",facsimile:"Faks"},DCPList:{caption:"DCP",XML:"XML",CORBA:"CORBA",JAVA:"JAVA",COM:"COM",SQL:"SQL",WebServices:"Veebiteenused"},DQ_ConformanceResult:{caption:"Vastavuse tulemus",explanation:"Selgitus",degree:{caption:"Kraad",validationPerformed:"Valideerimine on teostatud",conformant:"Vastavuses",nonConformant:"Pole vastavuses"}},DQ_DataQuality:{report:"Aruanne"},DQ_Scope:{level:"Skoop (kvaliteediteave kehtib)",levelDescription:"Taseme kirjeldus"},EX_Extent:{caption:"Kuvaulatus",description:"Kirjeldus",geographicElement:"Ruumiline ulatus",temporalElement:"Ajaline ulatus",verticalElement:"Vertikaalne ulatus"},EX_GeographicBoundingBox:{westBoundLongitude:"Läänepikkus",eastBoundLongitude:"Idapikkus",southBoundLatitude:"Lõunalaius",northBoundLatitude:"Põhjalaius"},EX_GeographicDescription:{caption:"Geograafiline kirjeldus"},EX_TemporalExtent:{TimePeriod:{beginPosition:"Alguskuupäev",endPosition:"Lõppkuupäev"}},EX_VerticalExtent:{minimumValue:"Miinimumväärtus",maximumValue:"Maksimumväärtus",verticalCRS:"Vertikaalne CRS"},Length:{caption:"Pikkus",uom:"Mõõtühikud",km:"Kilomeetrid",m:"Meetrid",mi:"Miilid",ft:"Jalad"},LI_Lineage:{statement:"Päritolu avaldus"},MD_BrowseGraphic:{fileName:"Lehitsemisgraafika URL",fileDescription:"Lehitsemisgraafika alapealkiri",fileType:"Lehitsemisgraafika tüüp"},MD_ClassificationCode:{unclassified:"Rühmitamata",restricted:"Piiratud",confidential:"Konfidentsiaalne",secret:"Salajane",topSecret:"Salastatud"},MD_Constraints:{caption:"Kasutuspiirangud",useLimitation:"Kasutuspiirang"},MD_DataIdentification:{spatialRepresentationType:"Ruumilise esituse tüüp",spatialResolution:"Ruumiline resolutsioon",language:"Ressursi keel",supplementalInformation:"Lisa"},MD_DigitalTransferOptions:{onLine:"Võrguühendusega"},MD_Distribution:{distributionFormat:"Jaotuse vorming",transferOptions:"Ülekande valikud"},MD_Format:{name:"Vormingu nimi",version:"Vormingu versioon"},MD_Identifier:{caption:"URI",identifierCaption:"Identifikaator",code:"Kood"},MD_Keywords:{delimitedCaption:"Märksõnad",thesaurusName:"Seotud tesaurus"},MD_KeywordTypeCode:{caption:"Märksõna tüüp",discipline:"Valdkond",place:"Koht",stratum:"Kiht",temporal:"Ajaline",theme:"Teema"},MD_LegalConstraints:{caption:"Juriidilised piirangud",accessConstraints:"Juurdepääsupiirang",useConstraints:"Kasuta piiranguid",otherConstraints:"Muud piirangud"},MD_MaintenanceFrequencyCode:{caption:"Sagedus",continual:"Pidev",daily:"Iga päev",weekly:"Iga nädal",fortnightly:"Iga kahe nädala tagant",monthly:"Iga kuu",quarterly:"Kord kvartalis",biannually:"Kaks korda aastas",annually:"Iga-aastane",asNeeded:"Vajadusel",irregular:"Ebaregulaarne",notPlanned:"Plaanimata",unknown:"Tundmatu"},MD_Metadata:{caption:"Metaandmed",fileIdentifier:"Faili identifikaator",language:"Metaandmete keel",hierarchyLevel:"Hierarhiatase",hierarchyLevelName:"Hierarhiataseme nimi",contact:"Metaandmete kontakt",dateStamp:"Metaandmete kuupäev",metadataStandardName:"Metaandmete standardi nimi",metadataStandardVersion:"Metaandmete standardi versioon",referenceSystemInfo:"Viitesüsteem",identificationInfo:"Identifikaator",distributionInfo:"Jaotus",dataQualityInfo:"Kvaliteet"},MD_ProgressCode:{caption:"Edenemise kood",completed:"Lõpetatud",historicalArchive:"Ajalooarhiiv",obsolete:"Aegunud",onGoing:"Kasutusel",planned:"Plaanitud",required:"Nõutav",underDevelopment:"Arendamisel"},MD_RepresentativeFraction:{denominator:"Nimetaja"},MD_Resolution:{equivalentScale:"Võrdväärne mõõtkava",distance:"Vahemaa"},MD_RestrictionCode:{copyright:"Autoriõigus",patent:"Patent",patentPending:"Patent taotlemisel",trademark:"Kaubamärk",license:"Litsents",intellectualPropertyRights:"Intellektuaalse omandi õigused",restricted:"Piiratud",otherRestrictions:"Muud piirangud"},MD_ScopeCode:{attribute:"Muu info",attributeType:"Atribuudi tüüp",collectionHardware:"Kogumi riistvara",collectionSession:"Kogumi seanss",dataset:"Andmestik",series:"Sarjad",nonGeographicDataset:"Mittegeograafiline andmestik",dimensionGroup:"Mõõtmete rühm",feature:"Funktsioon",featureType:"Objekti tüüp",propertyType:"Omaduse tüüp",fieldSession:"Väliseanss",software:"Tarkvara",service:"Teenus",model:"Mudel",tile:"Pildiüksus"},MD_ScopeDescription:{attributes:"Atribuudid",features:"Objektid",featureInstances:"Objekti esinemisjuhud",attributeInstances:"Atribuudi esinemisjuhud",dataset:"Andmestik",other:"Muu"},MD_SecurityConstraints:{caption:"Turvapiirangud",classification:"Rühmitamine",userNote:"Kasutaja märkus",classificationSystem:"Rühmitamise süsteem",handlingDescription:"Käsitlemise kirjeldus"},MD_SpatialRepresentationTypeCode:{caption:"Ruumilise esituse tüüp",vector:"Vektor",grid:"Ruudustik",textTable:"Tekstitabel",tin:"TIN",stereoModel:"Stereomudel",video:"Video"},MD_TopicCategoryCode:{caption:"Teemakategooria",boundaries:"Administratiiv- ja poliitilised piirid",farming:"Põllumajandus ja loomakasvatus",climatologyMeteorologyAtmosphere:"Atmosfäär ja kliima",biota:"Bioloogia ja ökoloogia",economy:"Äri ja majandus",planningCadastre:"Katastrid",society:"Kultuur, ühiskond ja demograafia",elevation:"Kõrgus ja tuletatud tooted",environment:"Keskkond ja loodushoid",structure:"Omadused ja struktuurid",geoscientificInformation:"Geoloogiline ja geofüüsiline",health:"Tervishoid ja haigused",imageryBaseMapsEarthCover:"Satelliit- ja aluskaardid",inlandWaters:"Siseveeressursid",location:"Asukohad ja geodeetilised võrgud",intelligenceMilitary:"Sõjaline",oceans:"Ookeanid ja suudmed",transportation:"Transpordivõrgustikud",utilitiesCommunication:"Tehnoettevõtted"},MI_ContextCode:{caption:"Kontekst",acquisition:"Soetamine",pass:"Luba",wayPoint:"Teepunkt"},MI_EnvironmentalRecord:{caption:"Keskkonnaolud",averageAirTemperature:"Keskmine õhutemperatuur",maxRelativeHumidity:"Maksimaalne suhteline niiskus",maxAltitude:"Maksimaalne kõrgus",meterologicalConditions:"Ilmastikutingimused"},MI_Event:{identifier:"Sündmuse identifikaator",time:"Aeg",expectedObjectiveReference:"Oodatav objekt (objekti identifikaator)",relatedSensorReference:"Seotud andur (mõõteriista identifikaator)",relatedPassReference:"Seotud luba (platvormiloa identifikaator)"},MI_GeometryTypeCode:{point:"Neemik",linear:"Lineaarne",areal:"Horisontaalne",strip:"Riba"},MI_Instrument:{citation:"Mõõteriista tsitaat",identifier:"Mõõteriista identifikaator",sType:"Mõõteriista tüüp",description:"Mõõteriista kirjeldus",mountedOn:"Paigalduskoht",mountedOnPlatformReference:"Paigalduskoht (platvormi identifikaator)"},MI_Metadata:{acquisitionInformation:"Soetamine"},MI_Objective:{caption:"Eesmärk",identifier:"Eesmärgi identifikaator",priority:"Sihtmärgi tähtsus",sFunction:"Eesmärgi funktsioon",extent:"Kuvaulatus",pass:"Platvormi luba",sensingInstrumentReference:"Kaugseire mõõteriist (mõõteriista identifikaator)",objectiveOccurrence:"Sündmused",sections:{identification:"Identifikaator",extent:"Kuvaulatus",pass:"Luba",sensingInstrument:"Kaugseire mõõteriist",objectiveOccurrence:"Sündmused"}},MI_ObjectiveTypeCode:{caption:"Tüüp (eesmärgi kogumisviis)",instantaneousCollection:"Hetkeline kogumine",persistentView:"Pidev vaade",survey:"Geodeesia"},MI_Operation:{caption:"Toiming",description:"Toimingu kirjeldus",citation:"Toimingu tsitaat",identifier:"Toimingu identifikaator",status:"Toimingu olek",objectiveReference:"Seotud eesmärk (eesmärgi identifikaator)",planReference:"Seotud plaan (plaani identifikaator)",significantEventReference:"Seotud sündmus (sündmuse identifikaator)",platformReference:"Seotud platvorm (platvormi identifikaator)",sections:{identification:"Identifikaator",related:"Seotud"}},MI_OperationTypeCode:{caption:"Toimingu tüüp",real:"Tõeline",simulated:"Simuleeritud",synthesized:"Sünteesitud"},MI_Plan:{sType:"Geomeetria valim andmete kogumiseks",status:"Plaani olek",citation:"Kogumist taotleva asutuse tsitaat",satisfiedRequirementReference:"Rahuldatud eeldus (eelduse identifikaator)",operationReference:"Seotud toiming (toimingu identifikaator)"},MI_Platform:{citation:"Platvormi tsitaat",identifier:"Platvormi identifikaator",description:"Mõõteriista toetava platvormi kirjeldus",sponsor:"Platvormi rahastav organisatsioon",instrument:"Platvormile paigaldatud mõõteriist(ad)",instrumentReference:"Mõõteriista identifikaator",sections:{identification:"Identifikaator",sponsor:"Sponsor",instruments:"Mõõteriistad"}},MI_PlatformPass:{identifier:"Platvormiloa identifikaator",extent:"Platvormiloa ulatus",relatedEventReference:"Seotud sündmus (sündmuse identifikaator)"},MI_PriorityCode:{critical:"Kriitiline",highImportance:"Kõrge tähtsusega",mediumImportance:"Keskmise tähtsusega",lowImportance:"Madala tähtsusega"},MI_RequestedDate:{requestedDateOfCollection:"Soovitud kogumise kuupäev",latestAcceptableDate:"Viimane aktsepteeritav kuupäev"},MI_Requirement:{caption:"Eeldus",citation:"Eelduste juhendmaterjali tsitaat",identifier:"Eelduse identifikaator",requestor:"Eelduse taotleja",recipient:"Eelduste tulemuste vastuvõtja",priority:"Eelduse tähtsus",requestedDate:"Vajalik kuupäev",expiryDate:"Aegumiskuupäev",satisifiedPlanReference:"Rahuldatud plaan (plaani identifikaator)",sections:{identification:"Identifikaator",requestor:"Taotleja",recipient:"Vastuvõtja",priorityAndDates:"Tähtsus ja kuupäevad",satisifiedPlan:"Rahuldatud plaan"}},MI_SequenceCode:{caption:"Järjekord",start:"Alusta",end:"Lõpp",instantaneous:"Hetkeline"},MI_TriggerCode:{caption:"Päästik",automatic:"Automaatne",manual:"Manuaalne",preProgrammed:"Eelprogrammeeritud"},ObjectReference:{uuidref:"UUID-raamistik",xlinkref:"URL-raamistik"},RS_Identifier:{caption:"ID Plusi koodiruum",code:"Kood",codeSpace:"Koodiruum"},SV_CouplingType:{loose:"Hõre",mixed:"Ühendatud",tight:"Tihe"},SV_OperationMetadata:{operationName:"Toimingu nimi",DCP:"DCP",connectPoint:"Ühenduspunkt"},SV_ServiceIdentification:{serviceType:"Teenuse tüüp",couplingType:"Ühenduse tüüp",containsOperations:"Toimingu metaandmed",operatesOn:"Tegevusulatus"},TM_Primitive:{indeterminatePosition:"Määramata asukoht",indeterminates:{before:"Enne",after:"Pärast",now:"Praegu",unknown:"Tundmatu"}},gemet:{concept:{gemetConceptKeyword:"GEMET-i mõisteline märksõna",tool:"Otsi...",dialogTitle:"GEMET - mõisteline märksõna",searchLabel:"Otsing:",searchTip:"Otsi GEMET-ist"},theme:{tool:"Otsi...",dialogTitle:"GEMET - Inspire'i andmeteema"},ioerror:"GEMET-i teenusega suhtlemisel ilmnes tõrge: {url}",searching:"Otsimine GEMET-ist...",noMatch:"Otsingule vastavaid tulemusi ei leitud.",languages:{bg:"Bulgaaria",cs:"tšehhi",da:"taani",nl:"hollandi",en:"inglise",et:"eesti",fi:"soome",fr:"prantsuse",de:"saksa",el:"kreeka",hu:"ungari",ga:"Gaeli (Iirimaa)",it:"itaalia",lv:"läti",lt:"leedu",mt:"Malta",pl:"poola",pt:"portugali",ro:"rumeenia",sk:"Slovaki",sl:"Sloveeni",es:"hispaania",sv:"rootsi"}}});