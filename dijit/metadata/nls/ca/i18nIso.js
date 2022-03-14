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

define({documentTypes:{data:{caption:"ISO 19115 (dades)",description:""},service:{caption:"ISO 19119 (servei)",description:""},gmi:{caption:"ISO 19115-2 (imatges i dades de quadrícula)",description:""}},general:{reference:"Referència"},sections:{metadata:"Metadades",identification:"Identificació",distribution:"Distribució",quality:"Qualitat",acquisition:"Adquisició"},metadataSection:{identifier:"Identificador",contact:"Contacte",date:"Data",standard:"Estàndard",reference:"Referència"},identificationSection:{citation:"Citació",description:"Descripció",contact:"Contacte",thumbnail:"Miniatura",keywords:"Paraules clau",constraints:"Restriccions",resource:"Recurs",resourceTab:{representation:"Representació",language:"Llengua",classification:"Classificació",extent:"Extensió"},serviceResourceTab:{serviceType:"Tipus de servei",extent:"Extensió",couplingType:"Tipus d’acoblament",operation:"Operació",operatesOn:"Opera a"}},distributionSection:{},qualitySection:{scope:"Àmbit",conformance:"Conformitat",lineage:"Llinatge"},acquisitionSection:{requirement:"Requisit",objective:"Objectiu",instrument:"Instrument",plan:"Pla",operation:"Operació",platform:"Plataforma",environment:"Entorn"},AbstractMD_Identification:{sAbstract:"Resum",purpose:"Propòsit",credit:"Crèdits",pointOfContact:"Punt de contacte",resourceMaintenance:"Manteniment",graphicOverview:"Vista general gràfica",descriptiveKeywords:"Recopilació de paraules clau",resourceConstraints:"Restriccions"},CI_Address:{deliveryPoint:"Punt de lliurament",city:"Ciutat",administrativeArea:"Àrea administrativa",postalCode:"Codi postal",country:"País",electronicMailAddress:"Adreça electrònica"},CI_Citation:{title:"Títol",alternateTitle:"Títol alternatiu",identifier:"Identificador de recurs únic",resource:{title:"Títol del recurs",date:"Data del recurs"},specification:{title:"Títol de l’especificació",date:"Data de l’especificació"}},CI_Contact:{phone:"Telèfon",address:"Adreça",onlineResource:"Recurs en línia",hoursOfService:"Hores de servei",contactInstructions:"Instruccions de contacte"},CI_Date:{date:"Data",dateType:"Tipus de data"},CI_DateTypeCode:{caption:"Tipus de data",creation:"Data de creació",publication:"Data de publicació",revision:"Data de revisió"},CI_OnLineFunctionCode:{caption:"Funció",download:"Baixa",information:"Informació",offlineAccess:"Accés fora de línia",order:"Ordre",search:"Cerca"},CI_OnlineResource:{caption:"Recurs en línia",linkage:"URL",protocol:"Protocol",applicationProfile:"Perfil d’aplicació",name:"Nom",description:"Descripció",sFunction:"Funció"},CI_ResponsibleParty:{caption:"Punt de contacte",individualName:"Nom de la persona",organisationName:"Nom de l’organització",positionName:"Nom del càrrec",contactInfo:"Informació de contacte",role:"Rol"},CI_RoleCode:{caption:"Rol",resourceProvider:"Proveïdor del recurs",custodian:"Custodi",owner:"Propietari",user:"Usuari",distributor:"Distribuïdor",originator:"Creador",pointOfContact:"Punt de contacte",principalInvestigator:"Investigador principal",processor:"Processador",publisher:"Editor",author:"Autor"},CI_Telephone:{voice:"Veu",facsimile:"Fax"},DCPList:{caption:"DCP",XML:"XML",CORBA:"CORBA",JAVA:"JAVA",COM:"COM",SQL:"SQL",WebServices:"WebServices"},DQ_ConformanceResult:{caption:"Resultat de conformitat",explanation:"Explicació",degree:{caption:"Grau",validationPerformed:"Validació feta",conformant:"Conforme",nonConformant:"No conforme"}},DQ_DataQuality:{report:"Informe"},DQ_Scope:{level:"Àmbit (al qual s’aplica la informació de qualitat)",levelDescription:"Descripció del nivell"},EX_Extent:{caption:"Extensió",description:"Descripció",geographicElement:"Extensió espacial",temporalElement:"Extensió temporal",verticalElement:"Extensió vertical"},EX_GeographicBoundingBox:{westBoundLongitude:"Longitud de delimitació cap a l’oest",eastBoundLongitude:"Longitud de delimitació cap a l’est",southBoundLatitude:"Latitud de delimitació cap al sud",northBoundLatitude:"Latitud de delimitació cap al nord"},EX_GeographicDescription:{caption:"Descripció geogràfica"},EX_TemporalExtent:{TimePeriod:{beginPosition:"Data d’inici",endPosition:"Data de finalització"}},EX_VerticalExtent:{minimumValue:"Valor mínim",maximumValue:"Valor màxim",verticalCRS:"CRS vertical"},Length:{caption:"Longitud",uom:"Unitats de mesura",km:"Quilòmetres",m:"Metres",mi:"Milles",ft:"Peus"},LI_Lineage:{statement:"Declaració de llinatge"},MD_BrowseGraphic:{fileName:"Examina la URL del gràfic",fileDescription:"Examina la llegenda del gràfic",fileType:"Examina el tipus de gràfic"},MD_ClassificationCode:{unclassified:"Sense classificar",restricted:"Restringit",confidential:"Confidencial",secret:"Secret",topSecret:"Alt secret"},MD_Constraints:{caption:"Restriccions d’ús",useLimitation:"Límit d’ús"},MD_DataIdentification:{spatialRepresentationType:"Tipus de representació espacial",spatialResolution:"Resolució espacial",language:"Idioma del recurs",supplementalInformation:"Complementari"},MD_DigitalTransferOptions:{onLine:"En línia"},MD_Distribution:{distributionFormat:"Format de distribució",transferOptions:"Opcions de transferència"},MD_Format:{name:"Nom del format",version:"Versió del format"},MD_Identifier:{caption:"URI",identifierCaption:"Identificador",code:"Codi"},MD_Keywords:{delimitedCaption:"Paraules clau",thesaurusName:"Diccionari associat"},MD_KeywordTypeCode:{caption:"Tipus de paraula clau",discipline:"Disciplina",place:"Lloc",stratum:"Estrat",temporal:"Temporal",theme:"Tema"},MD_LegalConstraints:{caption:"Restriccions legals",accessConstraints:"Restriccions d’accés",useConstraints:"Restriccions d’ús",otherConstraints:"Altres restriccions"},MD_MaintenanceFrequencyCode:{caption:"Freqüència",continual:"Contínua",daily:"Diària",weekly:"Setmanal",fortnightly:"Quinzenal",monthly:"Mensual",quarterly:"Trimestral",biannually:"Semestral",annually:"Anual",asNeeded:"Segons sigui necessari",irregular:"Irregular",notPlanned:"Sense planificar",unknown:"Desconeguda"},MD_Metadata:{caption:"Metadades",fileIdentifier:"Identificador de fitxer",language:"Llenguatge de les metadades",hierarchyLevel:"Nivell jeràrquic",hierarchyLevelName:"Nom del nivell jeràrquic",contact:"Contacte de les metadades",dateStamp:"Data de les metadades",metadataStandardName:"Nom estàndard de les metadades",metadataStandardVersion:"Versió estàndard de les metadades",referenceSystemInfo:"Sistema de referència",identificationInfo:"Identificació",distributionInfo:"Distribució",dataQualityInfo:"Qualitat"},MD_ProgressCode:{caption:"Codi de progrés",completed:"Completat",historicalArchive:"Arxiu històric",obsolete:"Obsolet",onGoing:"En curs",planned:"Planificat",required:"Necessari",underDevelopment:"En desenvolupament"},MD_RepresentativeFraction:{denominator:"Denominador"},MD_Resolution:{equivalentScale:"Escala equivalent",distance:"Distància"},MD_RestrictionCode:{copyright:"Drets d’autor",patent:"Patent",patentPending:"Patent pendent",trademark:"Marca registrada",license:"Llicència",intellectualPropertyRights:"Drets de propietat intel·lectual",restricted:"Restringit",otherRestrictions:"Altres restriccions"},MD_ScopeCode:{attribute:"Atribut",attributeType:"Tipus d’atribut",collectionHardware:"Maquinari de recopilació",collectionSession:"Sessió de recopilació",dataset:"Conjunt de dades",series:"Sèrie",nonGeographicDataset:"Conjunt de dades no geogràfic",dimensionGroup:"Grup de dimensió",feature:"Entitat",featureType:"Tipus d’entitat",propertyType:"Tipus de propietat",fieldSession:"Sessió de camp",software:"Programari",service:"Servei",model:"Model",tile:"Tessel·la"},MD_ScopeDescription:{attributes:"Atributs",features:"Entitats",featureInstances:"Instàncies d’entitats",attributeInstances:"Instàncies d’atributs",dataset:"Conjunt de dades",other:"Altres"},MD_SecurityConstraints:{caption:"Restriccions de seguretat",classification:"Classificació",userNote:"Nota de l’usuari",classificationSystem:"Sistema de classificació",handlingDescription:"Descripció del tractament"},MD_SpatialRepresentationTypeCode:{caption:"Tipus de representació espacial",vector:"Vector",grid:"Quadrícula",textTable:"Taula de text",tin:"TIN",stereoModel:"Model estèreo",video:"Vídeo"},MD_TopicCategoryCode:{caption:"Categoria del tema",boundaries:"Límits administratius i polítics",farming:"Agricultura i ramaderia",climatologyMeteorologyAtmosphere:"Atmosfera i clima",biota:"Biologia i ecologia",economy:"Negocis i economia",planningCadastre:"Cadastre",society:"Cultura, societat i demografia",elevation:"Elevació i productes derivats",environment:"Medi ambient i conservació",structure:"Infraestructures i estructures",geoscientificInformation:"Geologia i geofísica",health:"Salut humana i malalties",imageryBaseMapsEarthCover:"Imatges i mapes base",inlandWaters:"Recursos d’aigües continentals",location:"Ubicacions i xarxes geodèsiques",intelligenceMilitary:"Afers militars",oceans:"Oceans i estuaris",transportation:"Xarxes de transport",utilitiesCommunication:"Subministraments i comunicació"},MI_ContextCode:{caption:"Context",acquisition:"Adquisició",pass:"Aprovat",wayPoint:"Punt de referència"},MI_EnvironmentalRecord:{caption:"Condicions ambientals",averageAirTemperature:"Temperatura mitjana de l’aire",maxRelativeHumidity:"Humitat relativa màxima",maxAltitude:"Altitud màxima",meterologicalConditions:"Condicions meteorològiques"},MI_Event:{identifier:"Identificador de l’esdeveniment",time:"Hora",expectedObjectiveReference:"Objectiu que s’esperava (identificador de l’objectiu)",relatedSensorReference:"Sensor relacionat (identificador de l’instrument)",relatedPassReference:"Pas relacionat (identificador del pas de plataforma)"},MI_GeometryTypeCode:{point:"Punt",linear:"Lineal",areal:"Àrea",strip:"Banda"},MI_Instrument:{citation:"Citació de l’instrument",identifier:"Identificador de l’instrument",sType:"Tipus d’instrument",description:"Descripció de l’instrument",mountedOn:"Muntat a",mountedOnPlatformReference:"Muntat a (identificador de la plataforma)"},MI_Metadata:{acquisitionInformation:"Adquisició"},MI_Objective:{caption:"Objectiu",identifier:"Identificador de l’objectiu",priority:"Prioritat de l’objectiu",sFunction:"Funció de l’objectiu",extent:"Extensió",pass:"Pas de plataforma",sensingInstrumentReference:"Instrument de sensor (identificador de l’instrument)",objectiveOccurrence:"Esdeveniments",sections:{identification:"Identificació",extent:"Extensió",pass:"Aprovat",sensingInstrument:"Instrument de sensor",objectiveOccurrence:"Esdeveniments"}},MI_ObjectiveTypeCode:{caption:"Tipus (tècnica de recopilació de l’objectiu)",instantaneousCollection:"Recopilació instantània",persistentView:"Visualització persistent",survey:"Enquesta"},MI_Operation:{caption:"Operació",description:"Descripció de l’operació",citation:"Citació de l’operació",identifier:"Identificador de l’operació",status:"Estat de l’operació",objectiveReference:"Objectiu relacionat (identificador de l’objectiu)",planReference:"Pla relacionat (identificador del pla)",significantEventReference:"Esdeveniment relacionat (identificador de l’esdeveniment)",platformReference:"Plataforma relacionada (identificador de la plataforma)",sections:{identification:"Identificació",related:"Relacionat"}},MI_OperationTypeCode:{caption:"Tipus d’operació",real:"Real",simulated:"Simulat",synthesized:"Sintetitzat"},MI_Plan:{sType:"Geometria de mostreig per a la recopilació de dades",status:"Estat del pla",citation:"Citació de l’autoritat que sol·licita la recopilació",satisfiedRequirementReference:"Requisit complert (identificador del requisit)",operationReference:"Operació relacionada (identificador de l’operació)"},MI_Platform:{citation:"Citació de la plataforma",identifier:"Identificador de la plataforma",description:"Descripció de la plataforma compatible amb l’instrument",sponsor:"Organització patrocinadora de la plataforma",instrument:"Instruments muntats a la plataforma",instrumentReference:"Identificador de l’instrument",sections:{identification:"Identificació",sponsor:"Patrocinador",instruments:"Instruments"}},MI_PlatformPass:{identifier:"Identificador del pas de plataforma",extent:"Extensió del pas de plataforma",relatedEventReference:"Esdeveniment relacionat (identificador de l’esdeveniment)"},MI_PriorityCode:{critical:"Crític",highImportance:"Importància alta",mediumImportance:"Importància mitjana",lowImportance:"Importància baixa"},MI_RequestedDate:{requestedDateOfCollection:"Data de sol·licitud de recopilació",latestAcceptableDate:"Darrera data acceptable"},MI_Requirement:{caption:"Requisit",citation:"Citació per al material d’orientació de requisits",identifier:"Identificador del requisit",requestor:"Sol·licitant del requisit",recipient:"Destinatari dels resultats del requisit",priority:"Prioritat del requisit",requestedDate:"Data sol·licitada",expiryDate:"Data de caducitat",satisifiedPlanReference:"Pla complert (identificador del pla)",sections:{identification:"Identificació",requestor:"Sol·licitant",recipient:"Destinatari",priorityAndDates:"Prioritat i dates",satisifiedPlan:"Pla complert"}},MI_SequenceCode:{caption:"Seqüència",start:"Inici",end:"Finalització",instantaneous:"Instantani"},MI_TriggerCode:{caption:"Desencadenador",automatic:"Automàtic",manual:"Manual",preProgrammed:"Preprogramat"},ObjectReference:{uuidref:"Referència UUID",xlinkref:"Referència URL"},RS_Identifier:{caption:"Espai del codi plus de l’ID",code:"Codi",codeSpace:"Espai del codi"},SV_CouplingType:{loose:"Flexible",mixed:"Mixt",tight:"Ajustat"},SV_OperationMetadata:{operationName:"Nom de l’operació",DCP:"DCP",connectPoint:"Punt de connexió"},SV_ServiceIdentification:{serviceType:"Tipus de servei",couplingType:"Tipus d’acoblament",containsOperations:"Metadades de l’operació",operatesOn:"Opera a"},TM_Primitive:{indeterminatePosition:"Posició indeterminada",indeterminates:{before:"Abans",after:"Després",now:"Ara",unknown:"Desconeguda"}},gemet:{concept:{gemetConceptKeyword:"Paraula clau del concepte GEMET",tool:"Cerca...",dialogTitle:"GEMET: paraula clau del concepte",searchLabel:"Cerca:",searchTip:"Cerca al GEMET"},theme:{tool:"Cerca...",dialogTitle:"GEMET: tema de dades de l’Inspire"},ioerror:"S’ha produït un error de comunicació amb el servei del GEMET: {url}",searching:"S’està cercant al GEMET...",noMatch:"No s’han trobat resultats que coincideixin.",languages:{bg:"Búlgar",cs:"Txec",da:"Danès",nl:"Neerlandès",en:"Anglès",et:"Estonià",fi:"Finès",fr:"Francès",de:"Alemany",el:"Grec",hu:"Hongarès",ga:"Gaèlic (irlandès)",it:"Italià",lv:"Letó",lt:"Lituà",mt:"Maltès",pl:"Polonès",pt:"Portuguès",ro:"Romanès",sk:"Eslovac",sl:"Eslovè",es:"Espanyol",sv:"Suec"}}});