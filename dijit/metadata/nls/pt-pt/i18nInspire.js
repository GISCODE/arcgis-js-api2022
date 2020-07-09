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

define({documentTypes:{data:{caption:"INSPIRE (Dados)",description:""},service:{caption:"INSPIRE (Serviço)",description:""}},dataThemeKeywords:{caption:"Tema de Dados Inspire"},inspireServiceType:{discovery:"Serviço de Pesquisa",view:"Serviço de Visualização",download:"Serviço de Descarregamento",transformation:"Serviço de Transformação",invoke:"Serviço de Invocação de Serviços de Dados Geográficos",other:"Outro Serviço"},keywordSections:{dataTheme:"Tema de Dados Inspire",serviceCategory:"Categoria de Serviço ISSO 19119",gemetConcept:"Conceito GEMET",otherKeywords:"Outras Palavras Chave"},LanguageCode:{bul:"Búlgaro",cze:"Checo",dan:"Dinamarquês",dut:"Holandês",eng:"Inglês",est:"Estónio",fin:"Finlandês",fre:"Francês",ger:"Alemão",gre:"Grego",hun:"Húngaro",gle:"Gaélico (irlandês)",ita:"Italiano",lav:"Letão",lit:"Lituano",mlt:"Maltês",pol:"Polaco",por:"Português",rum:"Romeno",slo:"Eslovaco",slv:"Esloveno",spa:"Espanhol",swe:"Sueco",chi:"Chinês",kor:"Coreano",nor:"Norueguês",rus:"Russo",tur:"Turco"},otherConstraints:{noLimitations:"Sem Limites",confidentialityOfProceedings:"A confidencialidade dos procedimentos das autoridades públicas...",internationalRelations:"Relações internacionais, a segurança pública ou a defesa nacional",courseOfJustice:"O curso da justiça, a capacidade de qualquer pessoa ter direito a um julgamento justo ...",confidentialityOfCommercial:"A confidencialidade das informações comerciais ou industriais...",intellectualProperty:"Direitos de propriedade intelectual",confidentialityOfPersonalData:"A confidencialidade dos dados e / ou ficheiros pessoais...",interestsOrProtection:"Os interesses ou protecção de qualquer pessoa que forneceu as informações...",protectionOfEnvironment:"A protecção do ambiente a que se refere a informação...",freeText:"Texto Livre"},serviceType:{humanInteractionService:"100 Serviços geográficos com interacção humana",humanCatalogueViewer:"101 Visualizador de catálogo",humanGeographicViewer:"102 Visualizador geográfico",humanGeographicSpreadsheetViewer:"103 Visualizador de folha de cálculo geográfico",humanServiceEditor:"104 Editor de serviço",humanChainDefinitionEditor:"105 Editor de definição de cadeia",humanWorkflowEnactmentManager:"106 Fluxo de trabalho de gestão de promulgação",humanGeographicFeatureEditor:"107 Editor de elementos geográficos",humanGeographicSymbolEditor:"108 Editor de símbolo geográfico ",humanFeatureGeneralizationEditor:"109 Editor de generalização de elemento",humanGeographicDataStructureViewer:"110 Visualizador de estrutura de dados geográficos",infoManagementService:"200 Modelo geográfico/serviço de gestão de informação",infoFeatureAccessService:"201 Serviço de acesso de elemento",infoMapAccessService:"202 Mapa de serviço de acesso",infoCoverageAccessService:"203 Serviço de acesso a coberturas",infoSensorDescriptionService:"204 Serviço de descrição de sensor",infoProductAccessService:"205 Serviço de acesso a serviço",infoFeatureTypeService:"206 Tipo de serviço de elemento",infoCatalogueService:"207 Serviço de catálogo",infoRegistryService:"208 Serviço de Registo",infoGazetteerService:"209 Serviço Gazetteer",infoOrderHandlingService:"210 Encomendar serviço de manipulação",infoStandingOrderService:"211 Serviço de ordem permanente",taskManagementService:"300 Fluxo de trabalho geográfico/serviço de gestão de tarefas",chainDefinitionService:"301 Serviço de definição de cadeia",workflowEnactmentService:"302 Serviço fluxo de trabalho promulgado",subscriptionService:"303 Serviço de subscrição",spatialProcessingService:"400 Serviços de processamento geográfico - espacial",spatialCoordinateConversionService:"401 Coordenar serviço de conversão",spatialCoordinateTransformationService:"402 Coordenar serviço de transformação",spatialCoverageVectorConversionService:"403 Serviço de conversão cobertura/vector",spatialImageCoordinateConversionService:"404 Serviço de conversão de coordenadas de imagem",spatialRectificationService:"405 Serviço retificação",spatialOrthorectificationService:"406 Serviço ortorretificação",spatialSensorGeometryModelAdjustmentService:"407 Sensor serviço de ajustamento de modelo geométrico",spatialImageGeometryModelConversionService:"408 Serviço de conversão de imagem de geometria de modelo",spatialSubsettingService:"409 Serviço de sub-definição",spatialSamplingService:"410 Serviço de amostragem",spatialTilingChangeService:"411 Serviço de mudança Tiling",spatialDimensionMeasurementService:"412 Serviço de medição de dimensão",spatialFeatureManipulationService:"413 Serviços de manipulação de elementos",spatialFeatureMatchingService:"414 Serviço de correspondência de elemento",spatialFeatureGeneralizationService:"415. Serviço de generalização de elemento",spatialRouteDeterminationService:"416 Serviço de determinação de rota",spatialPositioningService:"417 Serviço de localização",spatialProximityAnalysisService:"418 Serviço de análise de proximidade",thematicProcessingService:"500 Serviços de processamento geográfico - temático",thematicGoparameterCalculationService:"501 Serviço de cálculo geoparâmetros",thematicClassificationService:"502 Serviço de classificação temática",thematicFeatureGeneralizationService:"503. Serviço de generalização de elemento",thematicSubsettingService:"504 Serviço de sub-definição",thematicSpatialCountingService:"505 Serviço de contagem espacial",thematicChangeDetectionService:"506 Alterar serviço de detecção",thematicGeographicInformationExtractionService:"507 Serviços de extracção de informação geográfica",thematicImageProcessingService:"508 Serviço de processamento de imagem",thematicReducedResolutionGenerationService:"509 Serviço de geração de resolução reduzida",thematicImageManipulationService:"510 Serviços de Manipulação de Imagem",thematicImageUnderstandingService:"511 Serviços de compreensão de imagens",thematicImageSynthesisService:"512 Serviços de síntese de imagem",thematicMultibandImageManipulationService:"513 manipulação de imagens multibanda",thematicObjectDetectionService:"514 Serviço de detecção de Objecto",thematicGeoparsingService:"515 Serviço geoparsing",thematicGeocodingService:"516 Serviço geocodificação",temporalProcessingService:"600 Serviços de processamento geográfico - temporais",temporalReferenceSystemTransformationService:"601 Serviço de transformação do sistema de referência temporal",temporalSubsettingService:"602 Serviço de sub-definição",temporalSamplingService:"603 Serviço de amostragem",temporalProximityAnalysisService:"604 Serviço de análise de proximidade temporal",metadataProcessingService:"700 Serviços de processamento geográfico - metadados",metadataStatisticalCalculationService:"701 Serviço de cálculo estatístico",metadataGeographicAnnotationService:"702 Serviços de anotação geográfica",comService:"800 Serviços de comunicação geográfica",comEncodingService:"801 Serviço de Encoding",comTransferService:"802 Serviço de transferência",comGeographicCompressionService:"803 Serviço de compressão geográfica",comGeographicFormatConversionService:"804 Serviço de conversão de formato geográfico",comMessagingService:"805 Serviço de mensagens",comRemoteFileAndExecutableManagement:"806 Gestão executável remota de ficheiros"},useLimitation:{noCondition:"Sem condições de aplicação",unknownCondition:"Condições desconhecidas",freeText:"Texto Livre"}});