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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

define({documentTypes:{data:{caption:"INSPIRE (podaci)",description:""},service:{caption:"INSPIRE (servis)",description:""}},dataThemeKeywords:{caption:"Tema Inspire podataka"},inspireServiceType:{discovery:"Servis za otkrivanje",view:"Prikaži servis",download:"Preuzmi servis",transformation:"Servis za transformaciju",invoke:"Pozovi servis",other:"Drugi servis"},keywordSections:{dataTheme:"Tema Inspire podataka",serviceCategory:"ISO 19119 kategorija servisa",gemetConcept:"GEMET koncept",otherKeywords:"Druge ključne reči"},LanguageCode:{bul:"bugarski",cze:"češki",dan:"danski",dut:"holandski",eng:"engleski",est:"estonski",fin:"finski",fre:"francuski",ger:"nemački",gre:"grčki",hun:"mađarski",gle:"gelski (irski)",ita:"italijanski",lav:"letonski",lit:"litvanski",mlt:"malteški",pol:"poljski",por:"portugalski",rum:"rumunski",slo:"slovački",slv:"slovenački",spa:"španski",swe:"švedski",chi:"kineski",kor:"korejski",nor:"norveški",rus:"ruski",tur:"turski"},otherConstraints:{noLimitations:"Bez ograničenja",confidentialityOfProceedings:"Poverljivost postupaka javnih institucija...",internationalRelations:"Međunarodni odnosi, javna bezbednost ili državna odbrana",courseOfJustice:"Tok postupka, mogućnost bilo koje osobe na pravedno suđenje...",confidentialityOfCommercial:"Poverljivost komercijalnih ili industrijskih informacija...",intellectualProperty:"Prava na intelektualnu svojinu",confidentialityOfPersonalData:"Poverljivost ličnih podataka i/ili datoteka...",interestsOrProtection:"Interesi ili zaštita bilo koje osobe koja je dostavila informacije...",protectionOfEnvironment:"Zaštita okruženja na koje se takve informacije odnose...",freeText:"Slobodni tekst"},serviceType:{humanInteractionService:"100 Geographic human interaction services",humanCatalogueViewer:"101 Catalogue viewer",humanGeographicViewer:"102 Geographic viewer",humanGeographicSpreadsheetViewer:"103 Geographic spreadsheet viewer",humanServiceEditor:"104 Service editor",humanChainDefinitionEditor:"105 Chain definition editor",humanWorkflowEnactmentManager:"106 Workflow enactment manager",humanGeographicFeatureEditor:"107 Geographic feature editor",humanGeographicSymbolEditor:"108 Geographic symbol editor ",humanFeatureGeneralizationEditor:"109 Feature generalisation editor",humanGeographicDataStructureViewer:"110 Geographic data-structure viewer",infoManagementService:"200 Geographic model/information management service",infoFeatureAccessService:"201 Feature access service",infoMapAccessService:"202 Map access service",infoCoverageAccessService:"203 Coverage access service",infoSensorDescriptionService:"204 Sensor description service",infoProductAccessService:"205 Product access service",infoFeatureTypeService:"206 Feature type service",infoCatalogueService:"207 Catalogue service",infoRegistryService:"208 Registry Service",infoGazetteerService:"209 Gazetteer service",infoOrderHandlingService:"210 Order handling service",infoStandingOrderService:"211 Standing order service",taskManagementService:"300 Geographic workflow/task management services",chainDefinitionService:"301 Chain definition service",workflowEnactmentService:"302 Workflow enactment service",subscriptionService:"303 Subscription service",spatialProcessingService:"400 Geographic processing services - spatial",spatialCoordinateConversionService:"401 Coordinate conversion service",spatialCoordinateTransformationService:"402 Coordinate transformation service",spatialCoverageVectorConversionService:"403 Coverage/vector conversion service",spatialImageCoordinateConversionService:"404 Image coordinate conversion service",spatialRectificationService:"405 Rectification service",spatialOrthorectificationService:"406 Orthorectification service",spatialSensorGeometryModelAdjustmentService:"407 Sensor geometry model adjustment service",spatialImageGeometryModelConversionService:"408 Image geometry model conversion service",spatialSubsettingService:"409 Subsetting service",spatialSamplingService:"410 Sampling service",spatialTilingChangeService:"411 Tiling change service",spatialDimensionMeasurementService:"412 Dimension measurement service",spatialFeatureManipulationService:"413 Feature manipulation services",spatialFeatureMatchingService:"414 Feature matching service",spatialFeatureGeneralizationService:"415 Feature generalisation service",spatialRouteDeterminationService:"416 Route determination service",spatialPositioningService:"417 Positioning service",spatialProximityAnalysisService:"418 Proximity analysis service",thematicProcessingService:"500 Geographic processing services - thematic",thematicGoparameterCalculationService:"501 Geoparameter calculation service",thematicClassificationService:"502 Thematic classification service",thematicFeatureGeneralizationService:"503 Feature generalisation service",thematicSubsettingService:"504 Subsetting service",thematicSpatialCountingService:"505 Spatial counting service",thematicChangeDetectionService:"506 Change detection service",thematicGeographicInformationExtractionService:"507 Geographic information extraction services",thematicImageProcessingService:"508 Image processing service",thematicReducedResolutionGenerationService:"509 Reduced resolution generation service",thematicImageManipulationService:"510 Image Manipulation Services",thematicImageUnderstandingService:"511 Image understanding services",thematicImageSynthesisService:"512 Image synthesis services",thematicMultibandImageManipulationService:"513 Multiband image manipulation",thematicObjectDetectionService:"514 Object detection service",thematicGeoparsingService:"515 Geoparsing service",thematicGeocodingService:"516 Geocoding service",temporalProcessingService:"600 Geographic processing services - temporal",temporalReferenceSystemTransformationService:"601 Temporal reference system transformation service",temporalSubsettingService:"602 Subsetting service",temporalSamplingService:"603 Sampling service",temporalProximityAnalysisService:"604 Temporal proximity analysis service",metadataProcessingService:"700 Geographic processing services - metadata",metadataStatisticalCalculationService:"701 Statistical calculation service",metadataGeographicAnnotationService:"702 Geographic annotation services",comService:"800 Geographic communication services",comEncodingService:"801 Encoding service",comTransferService:"802 Transfer service",comGeographicCompressionService:"803 Geographic compression service",comGeographicFormatConversionService:"804 Geographic format conversion service",comMessagingService:"805 Messaging service",comRemoteFileAndExecutableManagement:"806 Remote file and executable management"},useLimitation:{noCondition:"Nijedan uslov se ne primenjuje",unknownCondition:"Uslovi su nepoznati",freeText:"Slobodni tekst"}});