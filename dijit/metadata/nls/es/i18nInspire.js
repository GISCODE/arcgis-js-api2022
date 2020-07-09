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

define({documentTypes:{data:{caption:"INSPIRE (datos)",description:""},service:{caption:"INSPIRE (Servicio)",description:""}},dataThemeKeywords:{caption:"Tema de datos de INSPIRE"},inspireServiceType:{discovery:"Servicio de descubrimiento",view:"Servicio de visualización",download:"Servicio de descarga",transformation:"Servicio de transformación",invoke:"Servicio de invocación",other:"Otro servicio"},keywordSections:{dataTheme:"Tema de datos de INSPIRE",serviceCategory:"Categoría de servicio ISO 19119",gemetConcept:"Concepto GEMET",otherKeywords:"Otras palabras clave"},LanguageCode:{bul:"Búlgaro",cze:"Checo",dan:"Danés",dut:"Holandés",eng:"Inglés",est:"Estonio",fin:"Finlandés",fre:"Francés",ger:"Alemán",gre:"Griego",hun:"Húngaro",gle:"Gaélico (Irlandés)",ita:"Italiano",lav:"Letón",lit:"Lituano",mlt:"Maltés",pol:"Polaco",por:"Portugués",rum:"Rumano",slo:"Eslovaco",slv:"Esloveno",spa:"Español",swe:"Sueco",chi:"Chino",kor:"Coreano",nor:"Noruego",rus:"Ruso",tur:"Turco"},otherConstraints:{noLimitations:"Sin limitaciones",confidentialityOfProceedings:"La confidencialidad de los procedimientos de las autoridades públicas...",internationalRelations:"Relaciones internacionales, seguridad pública o defensa nacional",courseOfJustice:"El curso de la justicia, la capacidad de cualquier persona de recibir un juicio justo...",confidentialityOfCommercial:"La confidencialidad de la información comercial o industrial...",intellectualProperty:"Derechos de propiedad intelectual",confidentialityOfPersonalData:"La confidencialidad de los datos o archivos personales...",interestsOrProtection:"Los intereses de protección de cualquier persona que proporciona la información...",protectionOfEnvironment:"La protección del entorno con el que se relaciona la información...",freeText:"Texto libre"},serviceType:{humanInteractionService:"100 Servicios de interacción geográfica humana",humanCatalogueViewer:"101 Visor de catálogo",humanGeographicViewer:"102 Visor geográfico",humanGeographicSpreadsheetViewer:"103 Visor geográfico de hoja de cálculo",humanServiceEditor:"104 Editor de servicios",humanChainDefinitionEditor:"105 Editor de definiciones de cadenas",humanWorkflowEnactmentManager:"Administrador de disposiciones de flujo de trabajo 106",humanGeographicFeatureEditor:"107 Editor de entidades geográficas",humanGeographicSymbolEditor:"108 Editor de símbolos geográficos ",humanFeatureGeneralizationEditor:"109 Editor de generalización de entidades",humanGeographicDataStructureViewer:"110 Visor de estructura de datos geográficos",infoManagementService:"200 Servicio de administración de modelos/información geográficos",infoFeatureAccessService:"201 Servicio de acceso a las entidades",infoMapAccessService:"202 Servicio de acceso a los mapas",infoCoverageAccessService:"203 Servicio de acceso a la cobertura",infoSensorDescriptionService:"204 Servicio de descripción de sensores",infoProductAccessService:"205 Servicio de acceso a productos",infoFeatureTypeService:"206 Servicio de tipos de entidad",infoCatalogueService:"207 Servicio de catálogo",infoRegistryService:"208 Servicio de registro",infoGazetteerService:"209 Servicio de diccionario geográfico",infoOrderHandlingService:"210 Servicio de manejo de órdenes",infoStandingOrderService:"211 Servicio de órdenes fijas",taskManagementService:"300 Servicios de administración de flujo de trabajo/tareas geográficos",chainDefinitionService:"301 Servicio de definición de cadenas",workflowEnactmentService:"302 Servicio de decretos de flujo de trabajo",subscriptionService:"303 Servicio de suscripción",spatialProcessingService:"400 Servicios de procesamiento geográfico - espacial",spatialCoordinateConversionService:"401 Servicio de conversión de coordenadas",spatialCoordinateTransformationService:"402 Servicio de transformación de coordenadas",spatialCoverageVectorConversionService:"403 Servicio de conversión de cobertura/vector",spatialImageCoordinateConversionService:"404 Servicio de conversión de coordenadas de imagen",spatialRectificationService:"405 Servicio de rectificación",spatialOrthorectificationService:"406 Servicio de ortorrectificación",spatialSensorGeometryModelAdjustmentService:"407 Servicio de ajuste del modelo de geometría del sensor",spatialImageGeometryModelConversionService:"408 Servicio de conversión del modelo de geometría de imagen",spatialSubsettingService:"Servicio de subconjuntos 409",spatialSamplingService:"Servicio de muestreo 410",spatialTilingChangeService:"411 Servicio de cambio de teselas",spatialDimensionMeasurementService:"412 Servicio de medición de dimensiones",spatialFeatureManipulationService:"413 Servicio de manipulación de entidades",spatialFeatureMatchingService:"414 Servicio de geocodificación de entidades",spatialFeatureGeneralizationService:"Servicio de generalización de entidades 415",spatialRouteDeterminationService:"416 Servicio de determinación de rutas",spatialPositioningService:"417 Servicio de posicionamiento",spatialProximityAnalysisService:"418 Servicio de análisis de proximidad",thematicProcessingService:"500 Servicios de procesamiento geográfico - temático",thematicGoparameterCalculationService:"501 Servicio de cálculo de parámetros geográficos",thematicClassificationService:"502 Servicio de clasificación temática",thematicFeatureGeneralizationService:"503 Servicio de generalización de entidades",thematicSubsettingService:"Servicio de subconjuntos 504",thematicSpatialCountingService:"505 Servicio de conteo espacial",thematicChangeDetectionService:"506 Servicio de detección de cambio",thematicGeographicInformationExtractionService:"507 Servicios de extracción de información geográfica",thematicImageProcessingService:"508 Servicio de procesamiento de imágenes",thematicReducedResolutionGenerationService:"509 Servicio de generación de resolución reducida",thematicImageManipulationService:"510 Servicios de manipulación de imágenes",thematicImageUnderstandingService:"511 Servicios de comprensión de imágenes",thematicImageSynthesisService:"512 Servicios de síntesis de imágenes",thematicMultibandImageManipulationService:"513 Manipulación de imágenes multibanda",thematicObjectDetectionService:"514 Servicio de detección de objetos",thematicGeoparsingService:"515 Servicio de análisis geográfico",thematicGeocodingService:"516 Servicio de geocodificación",temporalProcessingService:"600 Servicios de procesamiento geográfico - temporal",temporalReferenceSystemTransformationService:"601 Servicio de transformación de sistemas de referencia temporal",temporalSubsettingService:"602 Servicio de subconjuntos",temporalSamplingService:"603 Servicio de muestreo",temporalProximityAnalysisService:"604 Servicio de análisis de proximidad temporal",metadataProcessingService:"700 Servicios de procesamiento geográfico - metadatos",metadataStatisticalCalculationService:"701 Servicio de cálculo estadístico",metadataGeographicAnnotationService:"702 Servicios de anotación geográfica",comService:"800 Servicios de comunicación geográfica",comEncodingService:"801 Servicio de codificación",comTransferService:"802 Servicio de transferencia",comGeographicCompressionService:"803 Servicio de compresión geográfica",comGeographicFormatConversionService:"804 Servicio de conversión de formato geográfico",comMessagingService:"805 Servicio de mensajería",comRemoteFileAndExecutableManagement:"806 Administración de archivos remotos y ejecutables"},useLimitation:{noCondition:"No hay condiciones que apliquen",unknownCondition:"Condiciones desconocidas",freeText:"Texto libre"}});