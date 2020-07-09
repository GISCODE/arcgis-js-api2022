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

define({documentTypes:{data:{caption:"ข้อมูลที่ดี",description:""},service:{caption:"การบริการที่ดี",description:""}},dataThemeKeywords:{caption:"หัวข้อข้อมูลที่ดี"},inspireServiceType:{discovery:"การบริการการค้นคว้า",view:"มุมมองการบริการ",download:"การบริการดาวโหลด",transformation:"การบริการการเปลี่ยนแปลง",invoke:"เรียกใช้บริการ",other:"บริการอื่นๆ"},keywordSections:{dataTheme:"หัวข้อข้อมูลที่ดี",serviceCategory:"มาตรฐาน IS0 19119 หมวดหมู่บริการ",gemetConcept:"แนวคิด GEMET",otherKeywords:"คำสำคัญอื่นๆ"},LanguageCode:{bul:"บัลแกเรีย",cze:"เช็ก",dan:"เดนมาร์ก",dut:"ดัทช์",eng:"อังกฤษ",est:"เอสโตเนีย",fin:"ฟินนิช",fre:"ฝรั่งเศส",ger:"เยอรมัน",gre:"กรีก",hun:"ฮังกาเรียน",gle:"แกลิค (ไอริช)",ita:"อิตาเลียน",lav:"ลัตเวีย",lit:"ลิทัวเนีย",mlt:"มอลตา",pol:"โปแลนด์",por:"ภาษาโปรตุเกส",rum:"โรมาเนีย",slo:"สโลวัค",slv:"ภาษาสโลเวเนีย",spa:"สเปน",swe:"สวีเดน",chi:"จีน",kor:"เกาหลี",nor:"นอร์เวย์",rus:"รัสเซีย",tur:"ตุรกี"},otherConstraints:{noLimitations:"ไม่มีข้อจำกัด",confidentialityOfProceedings:"การรักษาความลับของการดำเนินการในหน่วยงานรัฐ",internationalRelations:"ความสัมพันธ์ระหว่างประเทศ การรักษาความปลอดภัยสาธารณะหรือการป้องกันประเทศ",courseOfJustice:"วิถีแห่งความยุติธรรม ความสามารถของบุคคลใดๆ ที่จะได้รับการพิจารณาคดีที่เป็นธรรม",confidentialityOfCommercial:"ความลับของข้อมูลในเชิงพาณิชย์ หรืออุตสาหกรรม",intellectualProperty:"สิทธิในทรัพย์สินทางปัญญา",confidentialityOfPersonalData:"ความลับของข้อมูลส่วนบุคคล และ / หรือไฟล์",interestsOrProtection:"การคุ้มครองบุคคลที่ให้ข้อมูล",protectionOfEnvironment:"การคุ้มครองสิ่งที่เกี่ยวข้องกับข้อมูลดังกล่าว",freeText:"ข้อความฟรี"},serviceType:{humanInteractionService:"100 ภูมิศาสตร์บริการปฏิสัมพันธ์ของมนุษย์",humanCatalogueViewer:"101 ผู้ชมแคตตาล็อก",humanGeographicViewer:"102 ผู้ชมภูมิศาสตร์",humanGeographicSpreadsheetViewer:"103 ผู้ชมสเปรดชีตภูมิศาสตร์",humanServiceEditor:"104 บรรณาธิการบริการ",humanChainDefinitionEditor:"105 บรรณาธิการสาขา",humanWorkflowEnactmentManager:"106 ผู้จัดการกระบวนการการตรากฎหมาย",humanGeographicFeatureEditor:"การแก้ไขคุณลักษณะข้อมูลทางภูมิศาสตร์",humanGeographicSymbolEditor:"การแก้ไขสัญลักษณ์ทางภูมิศาสตร์ ",humanFeatureGeneralizationEditor:"109 การแก้ไขคุณสมบัติทั่วไป",humanGeographicDataStructureViewer:"110 การเรียกดูโครงสร้างข้อมูลทางภูมิศาสตร์",infoManagementService:"200 รูปแบบภูมิศาสตร์ / บริการจัดการข้อมูล",infoFeatureAccessService:"201 บริการเข้าถึงข้อมูล",infoMapAccessService:"202 บริการเข้าถึงแผนที่",infoCoverageAccessService:"203 บริการเข้าถึงข้อมูล Coverage",infoSensorDescriptionService:"204 บริการทางด้านเซนเซอร์",infoProductAccessService:"205 บริการด้านผลิตภัณฑ์",infoFeatureTypeService:"206 บริการประเภทข้อมูลต่างๆ",infoCatalogueService:"207 บริการด้านแคตตาล๊อก",infoRegistryService:"208 บริการด้านการลงทะเบียน",infoGazetteerService:"209 บริการหนังสือพิมพ์",infoOrderHandlingService:"210 บริการการจัดการการสั่งซื้อ",infoStandingOrderService:"211 บริการยืนยันการสั่งซื้อ",taskManagementService:"300 กระบวนการทางภูมิศาสตร์ / บริการจัดการงาน",chainDefinitionService:"301 บริการด้านสาขาต่างๆ",workflowEnactmentService:"302 บริการกระบวนการตรากฎหมาย",subscriptionService:"303 บริการสมัครสมาชิก",spatialProcessingService:"400 บริการกระบวนการทางภูมิศาสตร์ – เชิงพื้นที่",spatialCoordinateConversionService:"401 บริการแปลงค่าพิกัด",spatialCoordinateTransformationService:"402 บริการเปลี่ยนรูปแบบค่าพิกัด",spatialCoverageVectorConversionService:"403 บริการแปลงข้อมูล Coverage / เวกเตอร์",spatialImageCoordinateConversionService:"404 บริการแปลงพิกัดข้อมูลภาพถ่าย",spatialRectificationService:"405 บริการจัดทำข้อมูลให้ถูกต้อง",spatialOrthorectificationService:"406 บริการจัดทำข้อมูลภาพถ่ายทางอากาศ",spatialSensorGeometryModelAdjustmentService:"407 บริการปรับรูปแบบข้อมูลทางเรขาคณิต",spatialImageGeometryModelConversionService:"408 บริการปรับรูปแบบข้อมูลรูปภาพ",spatialSubsettingService:"409 บริการการตั้งค่าย่อย",spatialSamplingService:"410 บริการการสุ่มตัวอย่าง",spatialTilingChangeService:"411 บริการข้อมูล tile ที่มีการเปลี่ยนแปลง",spatialDimensionMeasurementService:"412 บริการการวัดขนาดแบบ Dimension",spatialFeatureManipulationService:"413 การให้บริการการจัดการข้อมูล",spatialFeatureMatchingService:"414 การบริการจัดชุดข้อมูลให้เข้ากัน",spatialFeatureGeneralizationService:"415 การบริการการแก้ไขข้อมูล",spatialRouteDeterminationService:"416 การบริการด้านการกำหนดเส้นทาง",spatialPositioningService:"417 การบริการด้านตำแหน่ง",spatialProximityAnalysisService:"418 การบริการวิเคราะห์ความใกล้-ไกล",thematicProcessingService:"500 บริการกระบวนการทางภูมิศาสตร์ – thematic",thematicGoparameterCalculationService:"501 บริการคำนวนตัวแปรทางภูมิศาสตร์",thematicClassificationService:"502 บริการจะแนกข้อมูล thematic",thematicFeatureGeneralizationService:"503 บริการด้านการแก้ไขข้อมูล",thematicSubsettingService:"504 บริการการตั้งค่าย่อย",thematicSpatialCountingService:"505 บริการการนับข้อมูลเชิงพื้นที่",thematicChangeDetectionService:"506 บริการตรวจพบการเปลี่ยนแปลง",thematicGeographicInformationExtractionService:"507 บริการสารสนเทศทางภูมิศาสตร์",thematicImageProcessingService:"508 ขั้นตอนบริการทางข้อมูลรูปภาพ",thematicReducedResolutionGenerationService:"509 บริการลดค่าความละเอียดของข้อมูล",thematicImageManipulationService:"510 บริการการจัดการข้อมูลภาพถ่าย",thematicImageUnderstandingService:"511 บริการความเข้าใจข้อมูลภาพถ่าย",thematicImageSynthesisService:"512 บริการสังเคราะห์ข้อมูลภาพถ่าย",thematicMultibandImageManipulationService:"513 การจัดการภาพถ่ายจากหลายคลื่นวิทยุ",thematicObjectDetectionService:"514 บริการตรวจหาวัตถุ",thematicGeoparsingService:"515 บริการวจีวิภาคทางภูมิศาสตร์",thematicGeocodingService:"516 บริการหาตำแหน่งจากข้อมูลที่อยู่",temporalProcessingService:"600 กระบวนการวิเคราะห์ทางภูมิศาสตร์ – ข้อมูลช่วงเวลา",temporalReferenceSystemTransformationService:"601 บริการระบบอ้างอิงข้อมูลช่วงเวลาที่มีการเปลี่ยนแปลง",temporalSubsettingService:"602 บริการตั้งค่าย่อย",temporalSamplingService:"603 บริการสุ่มตัวอย่าง",temporalProximityAnalysisService:"604 บริการวิเคราะห์ความใกล้ ไกล จากข้อมูลช่วงเวลา",metadataProcessingService:"700 กระบวนการวิเคราะห์ทางภูมิศาตร์ – metadata",metadataStatisticalCalculationService:"701 บริการคำนวนค่าทางสถิติ",metadataGeographicAnnotationService:"701 บริการด้านคำอธิบายประกอบข้อมูลภูมิศาสตร์",comService:"800 บริการด้านภูมิศาสตร์การสื่อสาร",comEncodingService:"801 บริการเข้ารหัส",comTransferService:"802 บริการการโอนย้ายข้อมูล",comGeographicCompressionService:"803 บริการด้านแรงอัดข้อมูลทางภูมิศาสตร์",comGeographicFormatConversionService:"804 บริการการแปลงรูปแบบข้อมูลทางภูมิศาสตร์",comMessagingService:"805 บริการการส่งข้อความ",comRemoteFileAndExecutableManagement:"806 การเข้าถึงไฟล์และการจัดการปฏิบัติการ"},useLimitation:{noCondition:"ไม่มีเงื่อนไข",unknownCondition:"ไม่ทราบเงื่อนไข",freeText:"ข้อความฟรี"}});