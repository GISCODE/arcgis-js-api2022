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

define({documentTypes:{data:{caption:"ISO 19115 (Data)",description:""},service:{caption:"ISO 19119 (Service)",description:""},gmi:{caption:"ISO 19115-2 (satellietbeelden en gerasterde data)",description:""}},general:{reference:"Naslag"},sections:{metadata:"Metadata",identification:"Identificatie",distribution:"Distributie",quality:"Kwaliteit",acquisition:"Overname"},metadataSection:{identifier:"Identifier",contact:"Contactpersoon",date:"Datum",standard:"Standard",reference:"Naslag"},identificationSection:{citation:"Citaat",description:"Beschrijving",contact:"Contactpersoon",thumbnail:"Thumbnail",keywords:"Keywords",constraints:"Beperkingen",resource:"Bron",resourceTab:{representation:"Representatie",language:"Taal",classification:"Indeling",extent:"Extent"},serviceResourceTab:{serviceType:"Servicetype",extent:"Extent",couplingType:"Koppelingstype",operation:"Bewerking",operatesOn:"Werkt op"}},distributionSection:{},qualitySection:{scope:"Toepassingsgebied",conformance:"Conformiteit",lineage:"Lineage"},acquisitionSection:{requirement:"Vereiste",objective:"Doelstelling",instrument:"Instrument",plan:"Plan",operation:"Bewerking",platform:"Platform",environment:"Omgeving"},AbstractMD_Identification:{sAbstract:"Abstract",purpose:"Doel",credit:"Credits",pointOfContact:"Contactplaats",resourceMaintenance:"Onderhoud",graphicOverview:"Grafische weergave",descriptiveKeywords:"Trefwoordcollectie",resourceConstraints:"Beperkingen"},CI_Address:{deliveryPoint:"Afleverpunt",city:"Stad",administrativeArea:"Administratief gebied",postalCode:"Postcode",country:"Land",electronicMailAddress:"E-mailadres"},CI_Citation:{title:"Titel",alternateTitle:"Alternatieve titel",identifier:"Uniek bron-ID",resource:{title:"Brontitel",date:"Brondatum"},specification:{title:"Specificatietitel",date:"Specificatiedatum"}},CI_Contact:{phone:"Telefoon",address:"Adres",onlineResource:"Onlinebron",hoursOfService:"Bedrijfsuren",contactInstructions:"Contactinstructies"},CI_Date:{date:"Datum",dateType:"Datumtype"},CI_DateTypeCode:{caption:"Datumtype",creation:"Datum van aanmaken",publication:"Publicatiedatum",revision:"Revisiedatum"},CI_OnLineFunctionCode:{caption:"Functie",download:"Downloaden",information:"Informatie",offlineAccess:"Offlinetoegang",order:"Volgorde",search:"Zoeken"},CI_OnlineResource:{caption:"Onlinebron",linkage:".URL",protocol:"Protocol",applicationProfile:"Toepassingsprofiel",name:"Naam",description:"Beschrijving",sFunction:"Functie"},CI_ResponsibleParty:{caption:"Contactplaats",individualName:"Naam individu",organisationName:"Organisatienaam",positionName:"Positienaam",contactInfo:"Contactgegevens",role:"Rol"},CI_RoleCode:{caption:"Rol",resourceProvider:"Resource Provider",custodian:"Bewaarder",owner:"Eigenaar",user:"Gebruiker",distributor:"Distributeur",originator:"Opdrachtgever",pointOfContact:"Contactplaats",principalInvestigator:"Onderzoeksleider",processor:"Processor",publisher:"Publisher",author:"Auteur"},CI_Telephone:{voice:"Spraak",facsimile:"Fax"},DCPList:{caption:"DCP",XML:"XML",CORBA:"CORBA",JAVA:"JAVA",COM:"COM",SQL:"SQL",WebServices:"Webservices"},DQ_ConformanceResult:{caption:"Resultaat conformiteit",explanation:"Verklaring",degree:{caption:"Graad",validationPerformed:"Validatie uitgevoerd",conformant:"Conform",nonConformant:"Niet-conform"}},DQ_DataQuality:{report:"Rapport"},DQ_Scope:{level:"Toepassingsgebied (kwaliteitsinformatie geldt voor)",levelDescription:"Niveaubeschrijving"},EX_Extent:{caption:"Extent",description:"Beschrijving",geographicElement:"Ruimtelijke omvang",temporalElement:"Tijdelijke extent",verticalElement:"Verticale extent"},EX_GeographicBoundingBox:{westBoundLongitude:"Westelijke omgrenzende lengtegraad",eastBoundLongitude:"Oostelijke omgrenzende lengtegraad",southBoundLatitude:"Zuidelijke omgrenzende breedtegraad",northBoundLatitude:"Noordelijke omgrenzende breedtegraad"},EX_GeographicDescription:{caption:"Geografische beschrijving"},EX_TemporalExtent:{TimePeriod:{beginPosition:"Begindatum",endPosition:"Einddatum"}},EX_VerticalExtent:{minimumValue:"Minimumwaarde",maximumValue:"Maximumwaarde",verticalCRS:"Verticale CRS"},Length:{caption:"Lengte",uom:"Maateenheden",km:"Kilometer",m:"Meter",mi:"Mijl",ft:"Voet"},LI_Lineage:{statement:"Lineageverklaring"},MD_BrowseGraphic:{fileName:"Bekijk afbeelding URL",fileDescription:"Bekijk grafisch bijschrijft",fileType:"Bekijk grafisch type"},MD_ClassificationCode:{unclassified:"Ongeclassificeerd",restricted:"Beperkt",confidential:"Vertrouwelijk",secret:"Geheim",topSecret:"Topgeheim"},MD_Constraints:{caption:"Gebruiksbeperkingen",useLimitation:"Gebruiksbeperking"},MD_DataIdentification:{spatialRepresentationType:"Ruimtelijk representatietype",spatialResolution:"Ruimtelijke resolutie",language:"Brontaal",supplementalInformation:"Toevoeging"},MD_DigitalTransferOptions:{onLine:"Online"},MD_Distribution:{distributionFormat:"Distributieformaat",transferOptions:"Overdrachtsopties"},MD_Format:{name:"Formatnaam",version:"Formatversie"},MD_Identifier:{caption:"URI",identifierCaption:"Identifier",code:"Code"},MD_Keywords:{delimitedCaption:"Keywords",thesaurusName:"Bijbehorende thesaurus"},MD_KeywordTypeCode:{caption:"Trefwoordtype",discipline:"Discipline",place:"Place",stratum:"Stratum",temporal:"Tijdelijk",theme:"Thema"},MD_LegalConstraints:{caption:"Juridische beperkingen",accessConstraints:"Toegangsbeperkingen",useConstraints:"Gebruiksbeperkingen",otherConstraints:"Overige beperkingen"},MD_MaintenanceFrequencyCode:{caption:"Frequentie",continual:"Continu",daily:"Dagelijks",weekly:"Wekelijks",fortnightly:"Tweewekelijks",monthly:"Maandelijks",quarterly:"Per kwartaal",biannually:"Tweemaal per jaar",annually:"Jaarlijks",asNeeded:"Indien nodig",irregular:"Onregelmatig",notPlanned:"Niet gepland",unknown:"Onbekend"},MD_Metadata:{caption:"Metadata",fileIdentifier:"Bestandidentifier",language:"Metadata taal",hierarchyLevel:"Hiërarchisch niveau",hierarchyLevelName:"Naam hiërarchisch niveau",contact:"Metadata-contact",dateStamp:"Metadata-datum",metadataStandardName:"Metadata-standaardnaam",metadataStandardVersion:"Metadata-standaardversie",referenceSystemInfo:"Referentiesysteem",identificationInfo:"Identificatie",distributionInfo:"Distributie",dataQualityInfo:"Kwaliteit"},MD_ProgressCode:{caption:"Voortgangscode",completed:"Voltooid",historicalArchive:"Historisch archief",obsolete:"Verouderd",onGoing:"Doorlopend",planned:"Gepland",required:"Vereist",underDevelopment:"In ontwikkeling"},MD_RepresentativeFraction:{denominator:"Gemene deler"},MD_Resolution:{equivalentScale:"Gelijke schaal",distance:"Afstand"},MD_RestrictionCode:{copyright:"Copyright",patent:"Patent",patentPending:"Patent aangevraagd",trademark:"Handelsmerk",license:"Licentie",intellectualPropertyRights:"Rechten intellectueel eigendom",restricted:"Beperkt",otherRestrictions:"Overige beperkingen"},MD_ScopeCode:{attribute:"Attribuut",attributeType:"Attribuuttype",collectionHardware:"Verzameling Hardware",collectionSession:"Verzameling Sessie",dataset:"Dataset",series:"Serie",nonGeographicDataset:"Niet--geografische dataset",dimensionGroup:"Dimensiegroep",feature:"Object",featureType:"Objecttype",propertyType:"Type eigenschap",fieldSession:"Veldsessie",software:"Software",service:"Service",model:"Model",tile:"Tile"},MD_ScopeDescription:{attributes:"Attributen",features:"Objecten",featureInstances:"Object instances",attributeInstances:"Attribuut instances",dataset:"Dataset",other:"Anders"},MD_SecurityConstraints:{caption:"Veiligheidsbeperkingen",classification:"Indeling",userNote:"Opmerking voor gebruiker",classificationSystem:"Classificatiesysteem",handlingDescription:"Handlingbeschrijving"},MD_SpatialRepresentationTypeCode:{caption:"Ruimtelijk representatietype",vector:"Vector",grid:"Raster",textTable:"Teksttabel",tin:"TIN",stereoModel:"Stereomodel",video:"Video"},MD_TopicCategoryCode:{caption:"Onderwerpcategorie",boundaries:"Bestuurlijke en politieke grenzen",farming:"Landbouw en veeteelt",climatologyMeteorologyAtmosphere:"Atmosfeer en klimaat",biota:"Biologie en ecologie",economy:"Zakelijk en economie",planningCadastre:"Kadastraal",society:"Cultureel, sociaal en demografie",elevation:"Hoogte en afgeleide producten",environment:"Milieu en behoud",structure:"Voorzieningen en structuren",geoscientificInformation:"Geologisch en geofysisch",health:"Volksgezondheid en ziekte",imageryBaseMapsEarthCover:"Satellietbeelden en basiskaarten",inlandWaters:"Binnenlandse waterbronnen",location:"Locaties en geodetische netwerken",intelligenceMilitary:"Leger",oceans:"Zeeën en estuaria",transportation:"Transportnetwerken",utilitiesCommunication:"Nutsbedrijven en communicatie"},MI_ContextCode:{caption:"Context",acquisition:"Overname",pass:"Pas",wayPoint:"Waypoint"},MI_EnvironmentalRecord:{caption:"Omgevingsomstandigheden",averageAirTemperature:"Gemiddelde luchttemperatuur",maxRelativeHumidity:"Maximale relatieve vochtigheid",maxAltitude:"Maximale hoogte",meterologicalConditions:"Weersomstandigheden"},MI_Event:{identifier:"Event identifier",time:"Tijd",expectedObjectiveReference:"Verwachte doelstelling (Doelstelling-identifer)",relatedSensorReference:"Gerelateerde sensor (Instrument-indentifier)",relatedPassReference:"Gerelateerde pas (Platformpas-indentifier)"},MI_GeometryTypeCode:{point:"Punt",linear:"Lineair",areal:"Areal",strip:"Strook"},MI_Instrument:{citation:"Instrumentaanhaling",identifier:"Instrumentidentifier",sType:"Instrumenttype",description:"Instrumentbeschrijving",mountedOn:"Gemonteerd op",mountedOnPlatformReference:"Gemonteerd op (platform-identifier)"},MI_Metadata:{acquisitionInformation:"Overname"},MI_Objective:{caption:"Doelstelling",identifier:"Doelstelling-identifier",priority:"Prioriteit van doel",sFunction:"Functie van doelstelling",extent:"Extent",pass:"Platformpas",sensingInstrumentReference:"Sensorinstrument (instrument-identifier)",objectiveOccurrence:"Gebeurtenissen",sections:{identification:"Identificatie",extent:"Extent",pass:"Pas",sensingInstrument:"Sensorinstrument",objectiveOccurrence:"Gebeurtenissen"}},MI_ObjectiveTypeCode:{caption:"Type (Verzamelingstechniek voor doelstelling)",instantaneousCollection:"Directe verzameling",persistentView:"Vaste weergave",survey:"Onderzoek"},MI_Operation:{caption:"Werk",description:"Werkbeschrijving",citation:"Werkcitaat",identifier:"Werk-identifier",status:"Werkstatus",objectiveReference:"Gerelateerde doelstelling (doelstelling-identifier)",planReference:"Gerelateerd plan (plan-identifier)",significantEventReference:"Gerelateerde gebeurtenis (gebeurtenis-identifier)",platformReference:"Gerelateerd platform (platform-identifier)",sections:{identification:"Identificatie",related:"Gerelateerd"}},MI_OperationTypeCode:{caption:"Werkingstype",real:"Echt",simulated:"Gesimuleerd",synthesized:"Gesynthetiseerd"},MI_Plan:{sType:"Bemonstering geometrie voor dataverzameling",status:"Status van plan",citation:"Citaat verzoekende autoriteit verzameling",satisfiedRequirementReference:"Tevreden eis (eis-identifier)",operationReference:"Gerelateerd werk (werk-identifier)"},MI_Platform:{citation:"Platformcitaat",identifier:"Platformidentifier",description:"Beschrijving van platform dat het Instrument ondersteunt",sponsor:"Sponsororganisatie voor platform",instrument:"Instrument(en) gemonteerd op het platform",instrumentReference:"Instrumentidentifier",sections:{identification:"Identificatie",sponsor:"Sponsor",instruments:"Instrumenten"}},MI_PlatformPass:{identifier:"Platformpasidentifier",extent:"Platformpasextent",relatedEventReference:"Gerelateerde gebeurtenis (gebeurtenis-identifier)"},MI_PriorityCode:{critical:"Kritisch",highImportance:"Groot belang",mediumImportance:"Gemiddeld belang",lowImportance:"Laag belang"},MI_RequestedDate:{requestedDateOfCollection:"Gevraagde datum van verzameling",latestAcceptableDate:"Uiterste geaccepteerde datum"},MI_Requirement:{caption:"Vereiste",citation:"Citaat voor vereiste begeleidingsmateriaal",identifier:"Vereiste-identifier",requestor:"Aanvrager van vereiste",recipient:"Ontvanger van resultaten vereiste",priority:"Vereiste prioriteit",requestedDate:"Aangevraagde datum",expiryDate:"Vervaldatum",satisifiedPlanReference:"Tevreden plan (plan-identifier)",sections:{identification:"Identificatie",requestor:"Aanvrager",recipient:"Ontvanger",priorityAndDates:"Prioriteit en data",satisifiedPlan:"Tevreden plan"}},MI_SequenceCode:{caption:"Reeks",start:"Start",end:"End",instantaneous:"Direct"},MI_TriggerCode:{caption:"Trigger",automatic:"Automatisch",manual:"Handmatig",preProgrammed:"Voorgeprogrammeerd"},ObjectReference:{uuidref:"UUID-referentie",xlinkref:"URL-referentie"},RS_Identifier:{caption:"ID plus coderuimte",code:"Code",codeSpace:"Coderuimte"},SV_CouplingType:{loose:"Los",mixed:"Gemengd",tight:"Vast"},SV_OperationMetadata:{operationName:"Naam activiteit",DCP:"DCP",connectPoint:"Aansluitpunt"},SV_ServiceIdentification:{serviceType:"Servicetype",couplingType:"Koppelingstype",containsOperations:"Werking metadata",operatesOn:"Werkt op"},TM_Primitive:{indeterminatePosition:"Onbepaalde positie",indeterminates:{before:"Voor",after:"Na",now:"Nu",unknown:"Onbekend"}},gemet:{concept:{gemetConceptKeyword:"GEMET concept trefwoord",tool:"Opzoeken...",dialogTitle:"GEMET - Concept trefwoord",searchLabel:"Zoeken:",searchTip:"Zoeken GEMET"},theme:{tool:"Opzoeken...",dialogTitle:"GEMET - Inspire Data Theme"},ioerror:"Er is een fout opgetreden tijdens de communicatie met de GEMET-service: {url}",searching:"Zoeken GEMET...",noMatch:"Geen overeenkomstige resultaten gevonden.",languages:{bg:"Bulgaars",cs:"Tsjechisch",da:"Deens",nl:"Nederlands",en:"Engels",et:"Ests",fi:"Fins",fr:"Frans",de:"Duits",el:"Grieks",hu:"Hongaars",ga:"Gaelic (Iers)",it:"Italiaans",lv:"Lets",lt:"Litouws",mt:"Maltees",pl:"Pools",pt:"Portugees",ro:"Roemeens",sk:"Slowaaks",sl:"Sloveens",es:"Spaans",sv:"Zweeds"}}});