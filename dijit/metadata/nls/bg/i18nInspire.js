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
// See http://js.arcgis.com/3.40/esri/copyright.txt for details.

define({documentTypes:{data:{caption:"INSPIRE (Данни)",description:""},service:{caption:"INSPIRE (Услуга)",description:""}},dataThemeKeywords:{caption:"Тема за данни на Inspire"},inspireServiceType:{discovery:"Услуга за откриване",view:"Преглед на услугата",download:"Изтегляне на услуга",transformation:"Услуга за трансформация",invoke:"Извикайте услугата",other:"Друга услуга"},keywordSections:{dataTheme:"Тема за данни на Inspire",serviceCategory:"ISO 19119 Категория на услугата",gemetConcept:"Концепция на GEMET",otherKeywords:"Други ключови думи"},LanguageCode:{bul:"Български",cze:"Чешки",dan:"Датски",dut:"Нидерландски",eng:"Английски",est:"Естонски",fin:"Финландски",fre:"Френски",ger:"Немски",gre:"Гръцки",hun:"Унгарски",gle:"Галски (ирландски)",ita:"Италиански",lav:"Латвийски",lit:"Литовски",mlt:"Малтийски",pol:"Полски",por:"Португалски",rum:"Румънски",slo:"Словашки",slv:"Словенски",spa:"Испански",swe:"Шведски",chi:"Китайски",kor:"Корейски",nor:"Норвежки",rus:"Руски",tur:"Турски"},otherConstraints:{noLimitations:"Няма ограничения",confidentialityOfProceedings:"Поверителността на процедурите на публичните органи ...",internationalRelations:"Международни отношения, обществена сигурност или национална отбрана",courseOfJustice:"Правосъдие, способността на всяко лице да получи справедлив процес ...",confidentialityOfCommercial:"Поверителността на търговската или промишлената информация ...",intellectualProperty:"Права на интелектуална собственост",confidentialityOfPersonalData:"Поверителността на личните данни и/или файлове ...",interestsOrProtection:"Интересите или защитата на всяко лице, предоставило информацията ...",protectionOfEnvironment:"Опазването на околната среда, за която се отнася тази информация ...",freeText:"Свободен текст"},serviceType:{humanInteractionService:"100 Географски услуги за човешко взаимодействие",humanCatalogueViewer:"101 Модул за преглеждане на каталог",humanGeographicViewer:"102 Географски модул за преглеждане",humanGeographicSpreadsheetViewer:"103 Модул за преглеждане на географски електронни таблици",humanServiceEditor:"104 Услуга на редактор",humanChainDefinitionEditor:"105 Редактор за дефиниция на верига",humanWorkflowEnactmentManager:"106 Мениджър за приемане на работен поток",humanGeographicFeatureEditor:"107 Редактор на географски обекти",humanGeographicSymbolEditor:"108 Редактор на географски символи ",humanFeatureGeneralizationEditor:"109 Редактор за обобщение на обекти",humanGeographicDataStructureViewer:"110 Преглед на структура на географски данни",infoManagementService:"200 Услуга за управление на географски модел/информация",infoFeatureAccessService:"201 Услуга за достъп до обекти",infoMapAccessService:"202 Услуга за достъп до карта",infoCoverageAccessService:"203 Услуга за достъп до покритие",infoSensorDescriptionService:"204 Услуга за описание на сензор",infoProductAccessService:"205 Услуга за достъп до продукт",infoFeatureTypeService:"206 Услуга за тип обект",infoCatalogueService:"207 Услуга за каталог",infoRegistryService:"208 Услуга за регистър",infoGazetteerService:"209 Услуга за географски справочник",infoOrderHandlingService:"210 Услуга за обработка на поръчки",infoStandingOrderService:"211 Услуга за постоянна поръчка",taskManagementService:"300 Услуга за управление на географски работен поток/задание",chainDefinitionService:"301 Услуга за дефиниция на верига",workflowEnactmentService:"302 Услуга за въвеждане на работен поток",subscriptionService:"303 Услуга за абонамент",spatialProcessingService:"400 Услуги за географска обработка - пространствени",spatialCoordinateConversionService:"401 Услуга за конверсия на координати",spatialCoordinateTransformationService:"402 Услуга за координатна трансформация",spatialCoverageVectorConversionService:"403 Услуга за конверсия на покритие/вектор",spatialImageCoordinateConversionService:"404 Услуга за конверсия на координати на изображение",spatialRectificationService:"405 Услуга за коригиране",spatialOrthorectificationService:"406 Услуга за орторектификация",spatialSensorGeometryModelAdjustmentService:"407 Услуга за регулиране на модела на геометрията на сензора",spatialImageGeometryModelConversionService:"408 Услуга за конверсия на модела на геометрията на изображението",spatialSubsettingService:"409 Услуга за подмножество",spatialSamplingService:"410 Услуга за вземане на проби",spatialTilingChangeService:"411 Услуга за смяна на плочки",spatialDimensionMeasurementService:"412 Услуга за измерване на размери",spatialFeatureManipulationService:"413 Услуги за манипулиране на обекти",spatialFeatureMatchingService:"414 Услуга за съвпадение на обекти",spatialFeatureGeneralizationService:"415 Услуга за обобщение на обекти",spatialRouteDeterminationService:"416 Услуга за определяне на маршрут",spatialPositioningService:"417 Услуга за позициониране",spatialProximityAnalysisService:"418 Услуга за анализ на близост",thematicProcessingService:"500 Услуги за географска обработка - тематични",thematicGoparameterCalculationService:"501 Услуга за изчисляване на геопараметри",thematicClassificationService:"502 Услуга за тематична класификация",thematicFeatureGeneralizationService:"503 Услуга за обобщение на обекти",thematicSubsettingService:"504 Услуга за подмножество",thematicSpatialCountingService:"505 Услуга за пространствено броене",thematicChangeDetectionService:"506 Услуга за откриване на промени",thematicGeographicInformationExtractionService:"507 Услуги за извличане на географска информация",thematicImageProcessingService:"508 Услуга за обработка на изображение",thematicReducedResolutionGenerationService:"509 Услуга за генериране на намалена резолюция",thematicImageManipulationService:"510 Услуги за манипулиране на изображения",thematicImageUnderstandingService:"511 Услуги за разбиране на изображения",thematicImageSynthesisService:"512 Услуги за синтез на изображения",thematicMultibandImageManipulationService:"513 Манипулиране на многолентово изображение",thematicObjectDetectionService:"514 Услуга за откриване на обект",thematicGeoparsingService:"515 Геопарсинг услуга",thematicGeocodingService:"516 Услуга за геокодиране",temporalProcessingService:"600 Услуги за географска обработка - времеви",temporalReferenceSystemTransformationService:"601 Услуга за трансформация на временна справочна система",temporalSubsettingService:"602 Услуга за подмножество",temporalSamplingService:"603 Услуга за вземане на проби",temporalProximityAnalysisService:"604 Услуга за анализ на времевата близост",metadataProcessingService:"700 Услуги за географска обработка - метаданни",metadataStatisticalCalculationService:"701 Услуга за статистически изчисления",metadataGeographicAnnotationService:"702 Услуги за географски анотации",comService:"800 Географски комуникационни услуги",comEncodingService:"801 Услуга за кодиране",comTransferService:"802 Услуга за трансфер",comGeographicCompressionService:"803 Услуга за географско компресиране",comGeographicFormatConversionService:"804 Услуга за преобразуване на географски формат",comMessagingService:"805 Услуга за съобщения",comRemoteFileAndExecutableManagement:"806 Дистанционно управление на файлове и изпълним мениджмънт"},useLimitation:{noCondition:"Не се прилагат никакви условия",unknownCondition:"Условия неизвестни",freeText:"Свободен текст"}});