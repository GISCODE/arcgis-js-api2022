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

define({documentTypes:{data:{caption:"ISO 19115 (Daten)",description:""},service:{caption:"ISO 19119 (Service)",description:""},gmi:{caption:"ISO 19115-2 (Bild- und Rasterdaten)",description:""}},general:{reference:"Referenz"},sections:{metadata:"Metadaten",identification:"Identifizierung",distribution:"Vertrieb",quality:"Qualität",acquisition:"Übernahme"},metadataSection:{identifier:"Kennung",contact:"Kontakt",date:"Datum",standard:"Standard",reference:"Referenz"},identificationSection:{citation:"Bibliografische Angaben",description:"Beschreibung",contact:"Kontakt",thumbnail:"Miniaturansicht",keywords:"Schlagwörter",constraints:"Einschränkungen",resource:"Ressource",resourceTab:{representation:"Räumliche Darstellung",language:"Sprache",classification:"Klassifizierung",extent:"Ausdehnung"},serviceResourceTab:{serviceType:"Servicetyp",extent:"Ausdehnung",couplingType:"Verbindungstyp",operation:"Vorgang",operatesOn:"Angewendet auf"}},distributionSection:{},qualitySection:{scope:"Geltungsbereich",conformance:"Konformität",lineage:"Herkunft"},acquisitionSection:{requirement:"Anforderung",objective:"Objective",instrument:"Instrument",plan:"Plan",operation:"Vorgang",platform:"Plattform",environment:"Umgebung"},AbstractMD_Identification:{sAbstract:"Kurzbeschreibung",purpose:"Verwendung",credit:"Quellennachweis",pointOfContact:"Ansprechpartner",resourceMaintenance:"Pflege",graphicOverview:"Grafische Übersicht",descriptiveKeywords:"Schlagwortsammlung",resourceConstraints:"Einschränkungen"},CI_Address:{deliveryPoint:"Adresse",city:"Ort",administrativeArea:"Verwaltungseinheit",postalCode:"PLZ",country:"Land",electronicMailAddress:"E-Mail-Adresse"},CI_Citation:{title:"Titel",alternateTitle:"Alternativtitel",identifier:"Eindeutige Ressourcenkennung",resource:{title:"Titel der Ressource",date:"Datum der Ressource"},specification:{title:"Titel der Spezifikation",date:"Datum der Spezifikation"}},CI_Contact:{phone:"Telefon",address:"Adressangaben",onlineResource:"Online-Information",hoursOfService:"Servicezeiten",contactInstructions:"Ergänzende Hinweise"},CI_Date:{date:"Datum",dateType:"Datumstyp"},CI_DateTypeCode:{caption:"Datumstyp",creation:"Erstellungsdatum",publication:"Veröffentlichungsdatum",revision:"Revisionsdatum"},CI_OnLineFunctionCode:{caption:"Funktion",download:"Herunterladen",information:"Informationen",offlineAccess:"Offline-Zugang",order:"Bestellung",search:"Suche"},CI_OnlineResource:{caption:"Online-Information",linkage:"URL",protocol:"Protokoll",applicationProfile:"Anwendungsprofil",name:"Bezeichnung",description:"Beschreibung",sFunction:"Funktion"},CI_ResponsibleParty:{caption:"Ansprechpartner",individualName:"Person",organisationName:"Organisation",positionName:"Position",contactInfo:"Kontaktangaben",role:"Funktion"},CI_RoleCode:{caption:"Funktion",resourceProvider:"Anbieter",custodian:"Verwalter",owner:"Eigentümer",user:"Nutzer",distributor:"Vertrieb",originator:"Urheber",pointOfContact:"Ansprechpartner",principalInvestigator:"Projektleitung",processor:"Bearbeiter",publisher:"Herausgeber",author:"Autor"},CI_Telephone:{voice:"Telefon",facsimile:"Fax"},DCPList:{caption:"DCP",XML:"XML",CORBA:"CORBA",JAVA:"JAVA",COM:"COM",SQL:"SQL",WebServices:"WebServices"},DQ_ConformanceResult:{caption:"Konformitätsergebnis",explanation:"Erklärung",degree:{caption:"Grad",validationPerformed:"Validierung ausgeführt",conformant:"Konform",nonConformant:"Nicht konform"}},DQ_DataQuality:{report:"Bericht"},DQ_Scope:{level:"Geltungsbereich (für den die Informationen zur Qualität gelten)",levelDescription:"Ebenenbeschreibung"},EX_Extent:{caption:"Ausdehnung",description:"Beschreibung",geographicElement:"Räumliche Ausdehnung",temporalElement:"Zeitliche Ausdehnung",verticalElement:"Vertikale Ausdehnung"},EX_GeographicBoundingBox:{westBoundLongitude:"Westliche Länge",eastBoundLongitude:"Östliche Länge",southBoundLatitude:"Südliche Breite",northBoundLatitude:"Nördliche Breite"},EX_GeographicDescription:{caption:"Geografische Beschreibung"},EX_TemporalExtent:{TimePeriod:{beginPosition:"Anfangsdatum",endPosition:"Enddatum"}},EX_VerticalExtent:{minimumValue:"Tiefster Punkt",maximumValue:"Höchster Punkt",verticalCRS:"Vertikales Bezugssystem"},Length:{caption:"Länge",uom:"Maßeinheiten",km:"Kilometer",m:"Meter",mi:"Meilen",ft:"Fuß"},LI_Lineage:{statement:"Herkunftserläuterung"},MD_BrowseGraphic:{fileName:"URL der grafischen Darstellung",fileDescription:"Beschriftung der grafischen Darstellung",fileType:"Dateiformat der grafischen Darstellung"},MD_ClassificationCode:{unclassified:"Nicht klassifiziert",restricted:"Eingeschränkt",confidential:"Vertraulich",secret:"Geheim",topSecret:"Höchste Geheimhaltungsstufe"},MD_Constraints:{caption:"Einschränkungen des Verwendungszwecks",useLimitation:"Anwendungseinschränkung"},MD_DataIdentification:{spatialRepresentationType:"Räumliche Darstellungsart",spatialResolution:"Räumliche Auflösung",language:"Ressourcensprache",supplementalInformation:"Zusatz"},MD_DigitalTransferOptions:{onLine:"Online"},MD_Distribution:{distributionFormat:"Abgabeformat",transferOptions:"Transferoptionen"},MD_Format:{name:"Format-Name",version:"Formatversion"},MD_Identifier:{caption:"URI",identifierCaption:"Kennung",code:"Code"},MD_Keywords:{delimitedCaption:"Schlagwörter",thesaurusName:"Zugeordneter Thesaurus"},MD_KeywordTypeCode:{caption:"Schlagworttyp",discipline:"Disziplin",place:"Ort",stratum:"Schichtungsebene",temporal:"Zeit",theme:"Thema"},MD_LegalConstraints:{caption:"Rechtliche Einschränkungen",accessConstraints:"Zugriffsbeschränkungen",useConstraints:"Nutzungsbeschränkungen",otherConstraints:"Andere Einschränkungen"},MD_MaintenanceFrequencyCode:{caption:"Häufigkeit",continual:"Kontinuierlich",daily:"Täglich",weekly:"Wöchentlich",fortnightly:"Zweiwöchentlich",monthly:"Monatlich",quarterly:"Vierteljährlich",biannually:"Zweimal pro Jahr",annually:"Jährlich",asNeeded:"Nach Bedarf",irregular:"Unregelmäßig",notPlanned:"Nicht geplant",unknown:"Unbekannt"},MD_Metadata:{caption:"Metadaten",fileIdentifier:"Dateiidentifikator",language:"Metadatensprache",hierarchyLevel:"Hierarchieebene",hierarchyLevelName:"Bezeichnung der Hierarchieebene",contact:"Ansprechpartner für Metadaten",dateStamp:"Metadatendatum",metadataStandardName:"Name des Metadatenstandards",metadataStandardVersion:"Version des Metadatenstandards",referenceSystemInfo:"Bezugssystem",identificationInfo:"Identifizierung",distributionInfo:"Vertrieb",dataQualityInfo:"Qualität"},MD_ProgressCode:{caption:"Code des Bearbeitungsstatus",completed:"Abgeschlossen",historicalArchive:"Historisches Archiv",obsolete:"Veraltet",onGoing:"Kontinuierliche Aktualisierung",planned:"Geplant",required:"Erforderlich",underDevelopment:"In Erstellung"},MD_RepresentativeFraction:{denominator:"Nenner"},MD_Resolution:{equivalentScale:"Vergleichsmaßstab",distance:"Distanz"},MD_RestrictionCode:{copyright:"Urheberrecht",patent:"Patent",patentPending:"Patent angemeldet",trademark:"Warenzeichen",license:"Lizenz",intellectualPropertyRights:"Geistiges Eigentum",restricted:"Beschränkter Zugang",otherRestrictions:"Andere Beschränkungen"},MD_ScopeCode:{attribute:"Attributinstanz",attributeType:"Attributart",collectionHardware:"Erfassungsgeräte",collectionSession:"Erfassungsaktion",dataset:"Datenbestand",series:"Serie",nonGeographicDataset:"Nichtgeografischer Datenbestand",dimensionGroup:"Dimensionsgruppe",feature:"Objektinstanz",featureType:"Objektart",propertyType:"Eigenschaftsart",fieldSession:"Feldkampagne",software:"Software",service:"Service",model:"Modell",tile:"Kachel"},MD_ScopeDescription:{attributes:"Attribute",features:"Objekte",featureInstances:"Objektinstanzen",attributeInstances:"Attributwerte",dataset:"Datenbestand",other:"Andere"},MD_SecurityConstraints:{caption:"Sicherheitseinschränkungen",classification:"Sicherheitseinstufung",userNote:"Erläuterung",classificationSystem:"Einstufungssystem",handlingDescription:"Verwendungshinweis"},MD_SpatialRepresentationTypeCode:{caption:"Räumliche Darstellungsart",vector:"Vektor",grid:"Raster",textTable:"Texttabelle",tin:"TIN",stereoModel:"Stereomodell",video:"Video"},MD_TopicCategoryCode:{caption:"Themenkategorie",boundaries:"Administrative und politische Grenzen",farming:"Landwirtschaft",climatologyMeteorologyAtmosphere:"Atmosphäre und Klima",biota:"Biologie und Ökologie",economy:"Wirtschaft",planningCadastre:"Kataster",society:"Kultur, Gesellschaft und Demographie",elevation:"Höhe und abgeleitete Produkte",environment:"Umwelt und Naturschutz",structure:"Einrichtungen und Strukturen",geoscientificInformation:"Geologie und Geophysik",health:"Gesundheitswesen",imageryBaseMapsEarthCover:"Bilddaten und Grundkarten",inlandWaters:"Binnengewässerressourcen",location:"Orte und geodätische Netzwerke",intelligenceMilitary:"Militär",oceans:"Meere und Flussmündungen",transportation:"Verkehrsnetzwerke",utilitiesCommunication:"Versorgung und Kommunikation"},MI_ContextCode:{caption:"Kontext",acquisition:"Übernahme",pass:"Bestanden",wayPoint:"Wegpunkt"},MI_EnvironmentalRecord:{caption:"Umgebungsbedingungen",averageAirTemperature:"Durchschnittliche Lufttemperatur",maxRelativeHumidity:"Maximale relative Feuchtigkeit",maxAltitude:"Maximale Höhe",meterologicalConditions:"Meteorologische Bedingungen"},MI_Event:{identifier:"Identifikator des Ereignisses",time:"Zeit",expectedObjectiveReference:"Erwartetes Objective (Objective-Identifikator)",relatedSensorReference:"Zugehöriger Sensor (Instrument-Identifikator)",relatedPassReference:"Zugehöriger Pass (Plattform-Pass-Identifikator)"},MI_GeometryTypeCode:{point:"Punkt",linear:"Linear",areal:"Fläche",strip:"Streifen"},MI_Instrument:{citation:"Bibliografische Angaben zum Instrument",identifier:"Instrument-Identifikator",sType:"Instrument-Typ",description:"Instrumentenbeschreibung",mountedOn:"Bereitgestellt für",mountedOnPlatformReference:"Bereitgestellt für (Plattform-Identifikator)"},MI_Metadata:{acquisitionInformation:"Übernahme"},MI_Objective:{caption:"Objective",identifier:"Objective-Identifikator",priority:"Zielpriorität",sFunction:"Objective-Funktion",extent:"Ausdehnung",pass:"Plattform-Pass",sensingInstrumentReference:"Erkundungsinstrument (Instrument-Identifikator)",objectiveOccurrence:"Ereignisse",sections:{identification:"Identifizierung",extent:"Ausdehnung",pass:"Bestanden",sensingInstrument:"Erkundungsinstrument",objectiveOccurrence:"Ereignisse"}},MI_ObjectiveTypeCode:{caption:"Typ (Erfassungsmethode für Objective)",instantaneousCollection:"Unmittelbare Erfassung",persistentView:"Persistente Ansicht",survey:"Vermessung"},MI_Operation:{caption:"Vorgang",description:"Vorgangsbeschreibung",citation:"Bibliografische Angaben zum Vorgang",identifier:"Vorgangs-Identifikator",status:"Vorgangsstatus",objectiveReference:"Zugehöriges Objective (Objective-Identifikator)",planReference:"Zugehöriger Plan (Plan-Identifikator)",significantEventReference:"Zugehöriges Ereignis (Ereignis-Identifikator)",platformReference:"Zugehörige Plattform (Plattform-Identifikator)",sections:{identification:"Identifizierung",related:"Zugehörig"}},MI_OperationTypeCode:{caption:"Vorgangstyp",real:"Real",simulated:"Simuliert",synthesized:"Synthetisiert"},MI_Plan:{sType:"Beispielgeometrie für Datenerfassung",status:"Status des Plans",citation:"Bibliografische Angaben zur zuständigen Stelle, die die Erfassung anfordert",satisfiedRequirementReference:"Erfüllte Anforderung (Anforderungsidentifikator)",operationReference:"Zugehöriger Vorgang (Vorgangsidentifikator)"},MI_Platform:{citation:"Bibliografische Angaben zur Plattform",identifier:"Plattform-Identifikator",description:"Beschreibung der das Instrument unterstützenden Plattform",sponsor:"Sponsor-Organisation für Plattform",instrument:"Auf der Plattform installierte Instrumente",instrumentReference:"Instrument-Identifikator",sections:{identification:"Identifizierung",sponsor:"Sponsor",instruments:"Instrumente"}},MI_PlatformPass:{identifier:"Plattform-Pass-Identifikator",extent:"Plattform-Pass-Ausdehnung",relatedEventReference:"Zugehöriges Ereignis (Ereignis-Identifikator)"},MI_PriorityCode:{critical:"Kritisch",highImportance:"Hohe Gewichtung",mediumImportance:"Mittlere Gewichtung",lowImportance:"Niedrige Gewichtung"},MI_RequestedDate:{requestedDateOfCollection:"Angefordertes Erfassungsdatum",latestAcceptableDate:"Letztes zulässiges Datum"},MI_Requirement:{caption:"Anforderung",citation:"Bibliografische Angaben zum Richtlinienmaterial für Anforderungen",identifier:"Anforderungskennung",requestor:"Antragsteller der Anforderung",recipient:"Empfänger der Anforderungsergebnisse",priority:"Anforderungspriorität",requestedDate:"Datum der Anforderung",expiryDate:"Ablaufdatum",satisifiedPlanReference:"Erfüllter Plan (Plan-Identifikator)",sections:{identification:"Identifizierung",requestor:"Antragsteller",recipient:"Empfänger",priorityAndDates:"Priorität und Daten",satisifiedPlan:"Erfüllter Plan"}},MI_SequenceCode:{caption:"Reihenfolge",start:"Starten",end:"Beenden",instantaneous:"Unmittelbar"},MI_TriggerCode:{caption:"Trigger",automatic:"Automatisch",manual:"Manuell",preProgrammed:"Vorprogrammiert"},ObjectReference:{uuidref:"UUID-Referenz",xlinkref:"URL-Referenz"},RS_Identifier:{caption:"ID plus Namensraum",code:"Code",codeSpace:"Namensraum"},SV_CouplingType:{loose:"Lose",mixed:"Gemischt",tight:"Fest"},SV_OperationMetadata:{operationName:"Name des Vorgangs",DCP:"DCP",connectPoint:"Verbindungspunkt"},SV_ServiceIdentification:{serviceType:"Servicetyp",couplingType:"Verbindungstyp",containsOperations:"Vorgangsmetadaten",operatesOn:"Angewendet auf"},TM_Primitive:{indeterminatePosition:"Unbestimmte Position",indeterminates:{before:"Vor",after:"Nach",now:"Jetzt",unknown:"Unbekannt"}},gemet:{concept:{gemetConceptKeyword:"GEMET-Konzeptschlagwort",tool:"Suchen...",dialogTitle:"GEMET - Konzeptschlagwort",searchLabel:"Suchen:",searchTip:"GEMET durchsuchen"},theme:{tool:"Suchen...",dialogTitle:"GEMET - Inspire Datenthema"},ioerror:"Fehler beim Kommunizieren mit dem GEMET-Service: {url}",searching:"GEMET wird durchsucht...",noMatch:"Es wurden keine übereinstimmenden Ergebnisse gefunden.",languages:{bg:"Bulgarisch",cs:"Tschechisch",da:"Dänisch",nl:"Niederländisch",en:"Englisch",et:"Estnisch",fi:"Finnisch",fr:"Französisch",de:"Deutsch",el:"Griechisch",hu:"Ungarisch",ga:"Gälisch (Irisch)",it:"Italienisch",lv:"Lettisch",lt:"Litauisch",mt:"Maltesisch",pl:"Polnisch",pt:"Portugiesisch",ro:"Rumänisch",sk:"Slowakisch",sl:"Slowenisch",es:"Spanisch",sv:"Schwedisch"}}});