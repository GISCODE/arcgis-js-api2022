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

define({documentTypes:{data:{caption:"ISO 19115 (נתונים)",description:""},service:{caption:"ISO 19119 (שירות)",description:""},gmi:{caption:"ISO 19115-2 (תמונות ונתונים מרושתים)",description:""}},general:{reference:"יחוס"},sections:{metadata:"מטה-דאטה",identification:"זיהוי",distribution:"הפצה",quality:"איכות",acquisition:"רכישה"},metadataSection:{identifier:"מזהה",contact:"צור קשר",date:"תאריך",standard:"סטנדרטי",reference:"יחוס"},identificationSection:{citation:"הפניה",description:"תיאור",contact:"צור קשר",thumbnail:"תמונה ממוזערת",keywords:"מילות מפתח",constraints:"הגבלות",resource:"משאב",resourceTab:{representation:"הצגה קרטוגרפית",language:"שפה",classification:"סיווג",extent:"תיחום"},serviceResourceTab:{serviceType:"סוג שירות",extent:"תיחום",couplingType:"סוג צימוד",operation:"תפעולי",operatesOn:"פועל ב"}},distributionSection:{},qualitySection:{scope:"היקף",conformance:"התאמה",lineage:"יחוס"},acquisitionSection:{requirement:"דרישה",objective:"מטרה",instrument:"מכשיר",plan:"תכנית",operation:"תפעולי",platform:"פלטפורמה",environment:"סביבה"},AbstractMD_Identification:{sAbstract:"מופשט",purpose:"תכלית",credit:"קרדיטים",pointOfContact:"נקודת מגע",resourceMaintenance:"תחזוקה",graphicOverview:"סקירה כללית גרפית",descriptiveKeywords:"איסוף מילות מפתח",resourceConstraints:"הגבלות"},CI_Address:{deliveryPoint:"נקודת משלוח",city:"עיר",administrativeArea:"אזור אדמיניסטרטיבי",postalCode:"מיקוד",country:"ארץ",electronicMailAddress:"כתובת דואר אלקטרוני"},CI_Citation:{title:"כותרת",alternateTitle:"כותרת אלטרנטיבית",identifier:"מזהה משאב ייחודי",resource:{title:"כותרת משאב",date:"תאריך משאב"},specification:{title:"כותרת מפרט",date:"תאריך מפרט"}},CI_Contact:{phone:"טלפון",address:"כתובת",onlineResource:"משאב מקוון",hoursOfService:"שעות שירות",contactInstructions:"הוראות ליצירת קשר"},CI_Date:{date:"תאריך",dateType:"סוג תאריך"},CI_DateTypeCode:{caption:"סוג תאריך",creation:"תאריך יצירה",publication:"תאריך פירסום",revision:"תאריך בדיקה"},CI_OnLineFunctionCode:{caption:"פונקציה",download:"הורד",information:"מידע",offlineAccess:"גישה לא מקוונת",order:"סדר",search:"חפש"},CI_OnlineResource:{caption:"משאב מקוון",linkage:"URL",protocol:"פרוטוקול",applicationProfile:"פרופיל אפליקציה",name:"שם",description:"תיאור",sFunction:"פונקציה"},CI_ResponsibleParty:{caption:"נקודת מגע",individualName:"שם של אדם",organisationName:"שם ארגון",positionName:"שם תפקיד",contactInfo:"פרטי קשר",role:"תפקיד"},CI_RoleCode:{caption:"תפקיד",resourceProvider:"ספק מקור",custodian:"אפוטרופוס",owner:"יוצר",user:"משתמש",distributor:"מפיץ",originator:"יוצר",pointOfContact:"נקודת מגע",principalInvestigator:"חוקר ראשי",processor:"מעבד",publisher:"מפרסם",author:"מחבר"},CI_Telephone:{voice:"קול",facsimile:"פקס"},DCPList:{caption:"DCP",XML:"XML",CORBA:"CORBA",JAVA:"JAVA",COM:"COM",SQL:"SQL",WebServices:"WebServices"},DQ_ConformanceResult:{caption:"תוצאת התאמה",explanation:"הסבר",degree:{caption:"מעלה",validationPerformed:"אימות בוצע",conformant:"מתאים",nonConformant:"לא מתאים"}},DQ_DataQuality:{report:"דוח"},DQ_Scope:{level:"היקף (מידע האיכות חל על)",levelDescription:"תיאור רמה"},EX_Extent:{caption:"תיחום",description:"תיאור",geographicElement:"תיחום מרחבי",temporalElement:"תיחום לפי זמן",verticalElement:"היקף אופקי"},EX_GeographicBoundingBox:{westBoundLongitude:"קו אורך מערבי",eastBoundLongitude:"קו אורך מזרחי",southBoundLatitude:"קו רוחב דרומי",northBoundLatitude:"קו רוחב צפוני"},EX_GeographicDescription:{caption:"תיאור גיאוגרפי"},EX_TemporalExtent:{TimePeriod:{beginPosition:"תאריך התחלה",endPosition:"תאריך סיום"}},EX_VerticalExtent:{minimumValue:"ערך מינימלי",maximumValue:"ערך מקסימלי",verticalCRS:"CRS אנכי"},Length:{caption:"אורך",uom:"יחידות מדידה",km:"קילומטרים",m:"מטרים",mi:"מיילים",ft:"רגל"},LI_Lineage:{statement:"הצהרת ייחוס"},MD_BrowseGraphic:{fileName:"URL לגרפיקת ניווט",fileDescription:"כותרת ניווט גרפי",fileType:"סוג ניווט גרפי"},MD_ClassificationCode:{unclassified:"ללא קבוצה",restricted:"הגבלה",confidential:"חסוי",secret:"סוד",topSecret:"סודי ביותר"},MD_Constraints:{caption:"הגבלות שימוש",useLimitation:"השתמש במגבלה"},MD_DataIdentification:{spatialRepresentationType:"סוג ייצוג מרחבי",spatialResolution:"רזולוציה מרחבית",language:"שפת משאב",supplementalInformation:"נוסף"},MD_DigitalTransferOptions:{onLine:"באינטרנט"},MD_Distribution:{distributionFormat:"פורמט הפצה",transferOptions:"אפשרויות העברה"},MD_Format:{name:"שם הפורמט",version:"גרסת פורמט"},MD_Identifier:{caption:"URI",identifierCaption:"מזהה",code:"קוד"},MD_Keywords:{delimitedCaption:"מילות מפתח",thesaurusName:"אוצר מילים משויך"},MD_KeywordTypeCode:{caption:"סוג מילת מפתח",discipline:"דיסציפלינה",place:"מקום",stratum:"Stratum",temporal:"זמני",theme:"נושא"},MD_LegalConstraints:{caption:"מגבלות חוקיות",accessConstraints:"מגבלות גישה",useConstraints:"השתמש באילוצים",otherConstraints:"מגבלות אחרות"},MD_MaintenanceFrequencyCode:{caption:"תדירות",continual:"המשכי",daily:"יומי",weekly:"שבועי",fortnightly:"דו שבועי",monthly:"חודשי",quarterly:"רבעוני",biannually:"פעמים בשנה",annually:"שנתי",asNeeded:"לפי הצורך",irregular:"לא סדיר",notPlanned:"לא מתוכנן",unknown:"לא מוכר"},MD_Metadata:{caption:"מטה-דאטה",fileIdentifier:"מזהה קובץ",language:"שפת מטה-דאטה",hierarchyLevel:"רמת היררכיה",hierarchyLevelName:"שם רמת היררכיה",contact:"איש קשר של המטה-דאטה",dateStamp:"תאריך מטה-דאטה",metadataStandardName:"שם מטה-דאטה סטנדרטי",metadataStandardVersion:"גרסה סטנדרטית של מטה-דאטה",referenceSystemInfo:"מערכת ייחוס",identificationInfo:"זיהוי",distributionInfo:"הפצה",dataQualityInfo:"איכות"},MD_ProgressCode:{caption:"קוד התקדמות",completed:"הושלם",historicalArchive:"ארכיון היסטורי",obsolete:"מיושן",onGoing:"מתמשך",planned:"מתוכנן",required:"דרוש",underDevelopment:"נמצא בפיתוח"},MD_RepresentativeFraction:{denominator:"מכנה"},MD_Resolution:{equivalentScale:"קנה מידה שווי ערך",distance:"מרחק"},MD_RestrictionCode:{copyright:"זכויות יוצרים",patent:"פטנט",patentPending:"פטנט בתהליכי אישור",trademark:"סימן מסחרי",license:"רישיון",intellectualPropertyRights:"זכויות של קניין רוחני",restricted:"הגבלה",otherRestrictions:"מגבלות אחרות"},MD_ScopeCode:{attribute:"מאפיין",attributeType:"סוג מאפיין",collectionHardware:"חומרת איסוף",collectionSession:"מהלך איסוף",dataset:"סט נתונים",series:"סידרה",nonGeographicDataset:"סט נתונים לא גיאוגרפי",dimensionGroup:"קבוצת מימדים",feature:"ישות",featureType:"סוג ישות",propertyType:"סוג רכוש",fieldSession:"מהלך שדה",software:"תוכנה",service:"שירות",model:"מודל",tile:"אריח"},MD_ScopeDescription:{attributes:"מאפיינים",features:"ישויות",featureInstances:"מקריי יישויות",attributeInstances:"מקרי מאפיין",dataset:"סט נתונים",other:"אחר"},MD_SecurityConstraints:{caption:"מגבלות אבטחה",classification:"סיווג",userNote:"הערת משתמש",classificationSystem:"מערכת קלסיפיקציה",handlingDescription:"תיאור Handling"},MD_SpatialRepresentationTypeCode:{caption:"סוג ייצוג מרחבי",vector:"וקטור",grid:"גריד",textTable:"טבלת טקסט",tin:"TIN",stereoModel:"מודל סטריאו",video:"וידאו"},MD_TopicCategoryCode:{caption:"קטגוריה נושא",boundaries:"גבולות מנהליים ופוליטיים",farming:"חקלאות וחוואות",climatologyMeteorologyAtmosphere:"אטמוספירה ומזג אוויר",biota:"ביולוגיה ואקולוגיה",economy:"עסקים וכלכלה",planningCadastre:"רישום קרקעות",society:"תרבות, חברה ודמוגרפיה",elevation:"גבהים ותוצרים הנגזרים מהם",environment:"סביבה ושימור",structure:"מתקנים ומבנים",geoscientificInformation:"גיאולוגי וגאופיסי",health:"בריאות ומחלות",imageryBaseMapsEarthCover:"תמונות ומפות בסיס",inlandWaters:"מקורות מים יבשתיים",location:"איתורים ורשת גאודטית",intelligenceMilitary:"צבא",oceans:"אוקינוסים ושפכי נהרות",transportation:"רשתות תחבורה",utilitiesCommunication:"שירותים ותקשורת"},MI_ContextCode:{caption:"הקשר",acquisition:"רכישה",pass:"מעבר",wayPoint:"נקודת ציון"},MI_EnvironmentalRecord:{caption:"תנאים סביבתיים",averageAirTemperature:"טמפרטורת אוויר ממוצעת",maxRelativeHumidity:"לחות יחסית מקסימלית",maxAltitude:"גובה מקסימלי",meterologicalConditions:"תנאים מטאורולוגיים"},MI_Event:{identifier:"מזהה ארוע",time:"זמן",expectedObjectiveReference:"מטרה צפויה (מזהה מטרה)",relatedSensorReference:"חיישן מקושר (מזהה מכשיר)",relatedPassReference:"מעבר מקושר (מזהה מעבר פלטפורמה)"},MI_GeometryTypeCode:{point:"נקודה",linear:"לינארי",areal:"אזורי",strip:"רצועה"},MI_Instrument:{citation:"הפניה למכשיר",identifier:"מזהה מכשיר",sType:"סוג מכשיר",description:"תיאור מכשיר",mountedOn:"מותקן ב",mountedOnPlatformReference:"מותקן ב (מזהה פלטפורמה)"},MI_Metadata:{acquisitionInformation:"רכישה"},MI_Objective:{caption:"מטרה",identifier:"מזהה מטרה",priority:"עדיפות יעד",sFunction:"פונקציית המטרה",extent:"תיחום",pass:"מעבר פלטפורמה",sensingInstrumentReference:"מכשיר חישה (מזהה מכשיר)",objectiveOccurrence:"אירועים",sections:{identification:"זיהוי",extent:"תיחום",pass:"מעבר",sensingInstrument:"מכשיר חישה",objectiveOccurrence:"אירועים"}},MI_ObjectiveTypeCode:{caption:"סוג (שיטת איסוף למטרה)",instantaneousCollection:"איסוף מיידי",persistentView:"תצוגה קבועה",survey:"סקר"},MI_Operation:{caption:"תפעולי",description:"תיאור פעולה",citation:"הפניה לפעולה",identifier:"מזהה פעולה",status:"סטטוס פעולה",objectiveReference:"מטרה קשורה (מזהה מטרה)",planReference:"תכנית קשורה (מזהה תכנית)",significantEventReference:"ארוע קשור (מזהה ארוע)",platformReference:"פלטפורמה קשורה (מזהה פלטפורמה)",sections:{identification:"זיהוי",related:"מקושר"}},MI_OperationTypeCode:{caption:"סוג פעולה",real:"אמיתי",simulated:"מדומה",synthesized:"סינתטי"},MI_Plan:{sType:"דגימת גיאומטריה לאיסוף נתונים",status:"סטטוס התכנית",citation:"הפניה לרשות המבקשת איסוף",satisfiedRequirementReference:"הדרישה התקיימה (מזהה דרישה)",operationReference:"פעולה קשורה (מזהה פעולה)"},MI_Platform:{citation:"הפניה לפלטפורמה",identifier:"מזהה פלטפורמה",description:"תיאור הפלטפורמה התומכת במכשיר",sponsor:"ארגון החסות לפלטפורמה",instrument:"מכשירים המותקנים בפלטפורמה",instrumentReference:"מזהה מכשיר",sections:{identification:"זיהוי",sponsor:"נותן חסות",instruments:"מכשירים"}},MI_PlatformPass:{identifier:"מזהה מעבר פלטפורמה",extent:"תיחום מעבר פלטפורמה",relatedEventReference:"ארוע קשור (מזהה ארוע)"},MI_PriorityCode:{critical:"קריטית",highImportance:"חשיבות גבוהה",mediumImportance:"חשיבות בינונית",lowImportance:"חשיבות נמוכה"},MI_RequestedDate:{requestedDateOfCollection:"תאריך איסוף מבוקש",latestAcceptableDate:"תאריך מקובל אחרון"},MI_Requirement:{caption:"דרישה",citation:"הפניה לחומר הנחייה לגבי דרישות",identifier:"מזהה דרישה",requestor:"גורם מבקש של הדרישה",recipient:"גורם מקבל של תוצאות הדרישה",priority:"עדיפות הדרישה",requestedDate:"תאריך בקשה",expiryDate:"תאריך תפוגה",satisifiedPlanReference:"תכנית מספקת (מזהה תכנית)",sections:{identification:"זיהוי",requestor:"גורם מבקש",recipient:"גורם מקבל",priorityAndDates:"עדיפות ותאריכים",satisifiedPlan:"התכנית מספקה"}},MI_SequenceCode:{caption:"רצף",start:"התחל",end:"סיום",instantaneous:"מיידי"},MI_TriggerCode:{caption:"טריגר",automatic:"אוטומטי",manual:"ידני",preProgrammed:"מתוכנת מראש"},ObjectReference:{uuidref:"הפניית UUID",xlinkref:"הפניית URL"},RS_Identifier:{caption:"ID Plus Code Space",code:"קוד",codeSpace:"מקום לקוד"},SV_CouplingType:{loose:"משוחרר",mixed:"מעורב",tight:"הדוק"},SV_OperationMetadata:{operationName:"שם פעולה",DCP:"DCP",connectPoint:"Connect Point"},SV_ServiceIdentification:{serviceType:"סוג שירות",couplingType:"סוג צימוד",containsOperations:"מטה-דאטה של הפעולה",operatesOn:"פועל ב"},TM_Primitive:{indeterminatePosition:"מיקום לא קבוע",indeterminates:{before:"לפני",after:"אחרי",now:"כעת",unknown:"לא מוכר"}},gemet:{concept:{gemetConceptKeyword:"מילת מפתח של קונספט GEMET",tool:"חפש...",dialogTitle:"GEMET - מילת מפתח של קונספט",searchLabel:"חפש:",searchTip:"חפש GEMET"},theme:{tool:"חפש...",dialogTitle:"GEMET - נושא נתונים של Inspire"},ioerror:"אירעה שגיאה בעת התקשורת עם שירות GEMET: {url}",searching:"חיפוש GEMET...",noMatch:"לא נמצאו תוצאות תואמות.",languages:{bg:"בולגרית",cs:"צ'כי",da:"דנית",nl:"הולנדית",en:"אנגלית",et:"אסטונית",fi:"פיני",fr:"צרפתית",de:"גרמנית",el:"יוונית",hu:"הונגרית",ga:"גאלית(אירית)‎",it:"איטלקית",lv:"לטבית",lt:"ליטאית",mt:"מלטזית",pl:"פולנית",pt:"פורטוגזית",ro:"רומנית",sk:"סלובקית",sl:"סלובנית",es:"ספרדית",sv:"שוודית"}}});