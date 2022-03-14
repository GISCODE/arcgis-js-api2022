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

define({documentTypes:{data:{caption:"ISO 19115 (Dữ liệu)",description:""},service:{caption:"ISO 19119 (Dịch vụ)",description:""},gmi:{caption:"ISO 19115-2 (Hình ảnh và Dữ liệu dạng Lưới)",description:""}},general:{reference:"Tham chiếu"},sections:{metadata:"Siêu dữ liệu",identification:"Nhận dạng",distribution:"Phân phối",quality:"Chất lượng",acquisition:"Mua lại"},metadataSection:{identifier:"Mã nhận dạng",contact:"Liên hệ",date:"Ngày",standard:"Tiêu chuẩn",reference:"Tham chiếu"},identificationSection:{citation:"Trích dẫn",description:"Mô tả",contact:"Liên hệ",thumbnail:"Hình thu nhỏ",keywords:"Từ khóa",constraints:"Ràng buộc",resource:"Tài nguyên",resourceTab:{representation:"Biểu diễn",language:"Ngôn ngữ",classification:"Phân loại",extent:"Phạm vi"},serviceResourceTab:{serviceType:"Loại Dịch vụ",extent:"Phạm vi",couplingType:"Loại Ghép nối",operation:"Hoạt động",operatesOn:"Ngày Hoạt động"}},distributionSection:{},qualitySection:{scope:"Phạm vi",conformance:"Tuân thủ",lineage:"Dòng in"},acquisitionSection:{requirement:"Yêu cầu",objective:"Mục tiêu",instrument:"Thiết bị",plan:"Kế hoạch",operation:"Hoạt động",platform:"Nền tảng",environment:"Môi trường"},AbstractMD_Identification:{sAbstract:"Tóm tắt",purpose:"Mục đích",credit:"Service Credits",pointOfContact:"Đầu mối Liên hệ",resourceMaintenance:"Bảo trì",graphicOverview:"Tổng quan Đồ họa",descriptiveKeywords:"Thu thập Từ khóa",resourceConstraints:"Ràng buộc"},CI_Address:{deliveryPoint:"Điểm Giao hàng",city:"Thành phố",administrativeArea:"Khu vực Hành chính",postalCode:"Mã Bưu điện",country:"Quốc gia",electronicMailAddress:"Địa chỉ Email"},CI_Citation:{title:"Tiêu đề",alternateTitle:"Tiêu đề Thay thế",identifier:"Mã nhận dạng Tài nguyên Duy nhất",resource:{title:"Tiêu đề Tài nguyên",date:"Ngày Tài nguyên"},specification:{title:"Tiêu đề Quy chuẩn kỹ thuật",date:"Ngày Quy chuẩn kỹ thuật"}},CI_Contact:{phone:"Điện thoại",address:"Địa chỉ",onlineResource:"Tài nguyên Trực tuyến",hoursOfService:"Số giờ Dịch vụ",contactInstructions:"Hướng dẫn Liên hệ"},CI_Date:{date:"Ngày",dateType:"Loại Ngày"},CI_DateTypeCode:{caption:"Loại Ngày",creation:"Ngày tạo",publication:"Ngày Xuất bản",revision:"Ngày Sửa"},CI_OnLineFunctionCode:{caption:"Chức năng",download:"Tải xuống",information:"Thông tin",offlineAccess:"Truy cập Ngoại tuyến",order:"Thứ tự",search:"Tìm kiếm"},CI_OnlineResource:{caption:"Tài nguyên Trực tuyến",linkage:"URL",protocol:"Giao thức",applicationProfile:"Thông tin Ứng dụng",name:"Tên",description:"Mô tả",sFunction:"Chức năng"},CI_ResponsibleParty:{caption:"Đầu mối Liên hệ",individualName:"Tên Cá nhân",organisationName:"Tên Tổ chức",positionName:"Tên Vị trí",contactInfo:"Thông tin Liên hệ",role:"Vai trò"},CI_RoleCode:{caption:"Vai trò",resourceProvider:"Người cung cấp Tài nguyên",custodian:"Người quản lý",owner:"Chủ sở hữu",user:"Người dùng",distributor:"Nhà phân phối",originator:"Người tạo",pointOfContact:"Đầu mối Liên hệ",principalInvestigator:"Người Điều tra Chính",processor:"Người xử lý",publisher:"Người xuất bản",author:"Tác giả"},CI_Telephone:{voice:"Hòm thư thoại",facsimile:"Fax"},DCPList:{caption:"DCP",XML:"XML",CORBA:"CORBA",JAVA:"JAVA",COM:"COM",SQL:"SQL",WebServices:"WebServices"},DQ_ConformanceResult:{caption:"Kết quả Hợp chuẩn",explanation:"Giải thích",degree:{caption:"Độ",validationPerformed:"Đã tiến hành Xác thực",conformant:"Hợp chuẩn",nonConformant:"Không hợp chuẩn"}},DQ_DataQuality:{report:"Báo cáo"},DQ_Scope:{level:"Phạm vi (thông tin chất lượng áp dụng đối với)",levelDescription:"Mô tả Mức"},EX_Extent:{caption:"Phạm vi",description:"Mô tả",geographicElement:"Phạm vi Không gian",temporalElement:"Giới hạn Thời gian",verticalElement:"Phạm vi Dọc"},EX_GeographicBoundingBox:{westBoundLongitude:"Kinh độ Bao phía Tây",eastBoundLongitude:"Kinh độ Bao phía Đông",southBoundLatitude:"Vĩ độ Bao phía Nam",northBoundLatitude:"Vĩ độ Bao phía Bắc"},EX_GeographicDescription:{caption:"Mô tả Địa lý"},EX_TemporalExtent:{TimePeriod:{beginPosition:"Ngày Bắt đầu",endPosition:"Ngày Kết thúc"}},EX_VerticalExtent:{minimumValue:"Giá trị Tối thiểu",maximumValue:"Giá trị Tối đa",verticalCRS:"CRS Dọc"},Length:{caption:"Độ dài",uom:"Đơn vị Đo lường",km:"Kilômét",m:"Mét",mi:"Dặm",ft:"Bộ"},LI_Lineage:{statement:"Trình bày Dòng in"},MD_BrowseGraphic:{fileName:"URL Duyệt Đồ họa",fileDescription:"Chú thích Duyệt Đồ họa",fileType:"Loại Duyệt Đồ họa"},MD_ClassificationCode:{unclassified:"Chưa phân loại",restricted:"Hạn chế",confidential:"Bí mật",secret:"Bí mật",topSecret:"Tối mật"},MD_Constraints:{caption:"Ràng buộc Sử dụng",useLimitation:"Giới hạn Sử dụng"},MD_DataIdentification:{spatialRepresentationType:"Loại Biểu diễn Không gian",spatialResolution:"Độ phân giải Không gian",language:"Ngôn ngữ Tài nguyên",supplementalInformation:"Bổ sung"},MD_DigitalTransferOptions:{onLine:"Trực tuyến"},MD_Distribution:{distributionFormat:"Định dạng Phân phối",transferOptions:"Các Tùy chọn Chuyển"},MD_Format:{name:"Tên Định dạng",version:"Phiên bản Định dạng"},MD_Identifier:{caption:"URI",identifierCaption:"Mã nhận dạng",code:"Mã"},MD_Keywords:{delimitedCaption:"Từ khóa",thesaurusName:"Từ điển chuyên đề Liên quan"},MD_KeywordTypeCode:{caption:"Loại Từ khóa",discipline:"Quy tắc",place:"Địa điểm",stratum:"Địa tầng",temporal:"Thời gian",theme:"Chủ đề"},MD_LegalConstraints:{caption:"Ràng buộc Pháp lý",accessConstraints:"Ràng buộc Truy cập",useConstraints:"Ràng buộc về sử dụng",otherConstraints:"Ràng buộc Khác"},MD_MaintenanceFrequencyCode:{caption:"Tần suất",continual:"Liên tục",daily:"Hàng ngày",weekly:"Hàng tuần",fortnightly:"Hai tuần một lần",monthly:"Hàng tháng",quarterly:"Ba tháng một lần",biannually:"Một năm hai lần",annually:"Hàng năm",asNeeded:"Khi cần",irregular:"Không đều",notPlanned:"Chưa lập kế hoạch",unknown:"Không xác định"},MD_Metadata:{caption:"Siêu dữ liệu",fileIdentifier:"Mã nhận dạng Tệp",language:"Ngôn ngữ Siêu dữ liệu",hierarchyLevel:"Mức Phân cấp",hierarchyLevelName:"Tên Mức Phân cấp",contact:"Liên hệ Siêu dữ liệu",dateStamp:"Ngày Siêu dữ liệu",metadataStandardName:"Tên Tiêu chuẩn Siêu dữ liệu",metadataStandardVersion:"Phiên bản Tiêu chuẩn Siêu dữ liệu",referenceSystemInfo:"Hệ Tham chiếu",identificationInfo:"Nhận dạng",distributionInfo:"Phân phối",dataQualityInfo:"Chất lượng"},MD_ProgressCode:{caption:"Mã Tiến trình",completed:"Đã hoàn tất",historicalArchive:"Lưu trữ Lịch sử",obsolete:"Lỗi thời",onGoing:"Đang hoạt động",planned:"Đã lập kế hoạch",required:"Yêu cầu",underDevelopment:"Đang được Phát triển"},MD_RepresentativeFraction:{denominator:"Mẫu số"},MD_Resolution:{equivalentScale:"Tỷ lệ Tương đương",distance:"Khoảng cách"},MD_RestrictionCode:{copyright:"Bản quyền",patent:"Bằng sáng chế",patentPending:"Đang chờ cấp Bằng sáng chế",trademark:"Nhãn hiệu thương mại",license:"Giấy phép",intellectualPropertyRights:"Quyền Sở hữu Trí tuệ",restricted:"Hạn chế",otherRestrictions:"Hạn chế Khác"},MD_ScopeCode:{attribute:"Thuộc tính",attributeType:"Loại thuộc tính",collectionHardware:"Phần cứng thu thập",collectionSession:"Phiên thu thập",dataset:"Bộ dữ liệu",series:"Chuỗi",nonGeographicDataset:"Tập dữ liệu không mang tính địa lý",dimensionGroup:"Nhóm kích thước",feature:"Đối tượng",featureType:"Loại đối tượng",propertyType:"Loại thuộc tính",fieldSession:"Phiên trường",software:"Phần mềm",service:"Dịch vụ",model:"Mô hình",tile:"Tile"},MD_ScopeDescription:{attributes:"Thuộc tính",features:"Tính năng",featureInstances:"Trường hợp Đối tượng",attributeInstances:"Trường hợp Thuộc tính",dataset:"Bộ dữ liệu",other:"Khác"},MD_SecurityConstraints:{caption:"Ràng buộc Bảo mật",classification:"Phân loại",userNote:"Ghi chú Người dùng",classificationSystem:"Hệ thống Phân loại",handlingDescription:"Mô tả việc Xử lý"},MD_SpatialRepresentationTypeCode:{caption:"Loại Biểu diễn Không gian",vector:"Véc tơ",grid:"Lưới",textTable:"Bảng Văn bản",tin:"TIN",stereoModel:"Mô hình Ba chiều",video:"Video"},MD_TopicCategoryCode:{caption:"Danh mục Chủ đề",boundaries:"Ranh giới Hành chính và Chính trị",farming:"Nông nghiệp và Nuôi trồng",climatologyMeteorologyAtmosphere:"Khí quyển và Khí hậu",biota:"Sinh học và Hệ sinh thái",economy:"Kinh doanh và Kinh tế",planningCadastre:"Địa chính",society:"Văn hóa, Xã hội và Nhân khẩu học",elevation:"Độ cao và Sản phẩm Phái sinh",environment:"Môi trường và Bảo tồn",structure:"Cơ sở vật chất & Công trình kiến trúc",geoscientificInformation:"Địa chất và Địa vật lý",health:"Sức khỏe Con người và Bệnh tật",imageryBaseMapsEarthCover:"Bản đồ Hình ảnh và Bản đồ Nền",inlandWaters:"Tài nguyên Nước trong Lục địa",location:"Địa điểm và Mạng lưới Trắc địa",intelligenceMilitary:"Quân sự",oceans:"Biển và Cửa sông",transportation:"Mạng lưới Vận tải",utilitiesCommunication:"Tiện ích và Truyền thông"},MI_ContextCode:{caption:"Ngữ cảnh",acquisition:"Mua lại",pass:"Giấy phép",wayPoint:"Tọa độ điểm"},MI_EnvironmentalRecord:{caption:"Điều kiện Môi trường",averageAirTemperature:"Nhiệt độ Không khí Trung bình",maxRelativeHumidity:"Độ ẩm Tương đối Tối đa",maxAltitude:"Độ cao Tối đa",meterologicalConditions:"Điều kiện Khí tượng"},MI_Event:{identifier:"Mã nhận dạng Sự kiện",time:"Thời gian",expectedObjectiveReference:"Mục tiêu Dự tính (Mã nhận dạng Mục tiêu)",relatedSensorReference:"Cảm biến Liên quan (Mã nhận dạng Thiết bị)",relatedPassReference:"Giấy phép Liên quan (Mã nhận dạng Giấy phép Nền tảng)"},MI_GeometryTypeCode:{point:"Điểm",linear:"Tuyến tính",areal:"Thuộc vùng",strip:"Dải"},MI_Instrument:{citation:"Trích dẫn Thiết bị",identifier:"Mã nhận dạng Thiết bị",sType:"Loại Thiết bị",description:"Mô tả Thiết bị",mountedOn:"Ngày gắn",mountedOnPlatformReference:"Ngày gắn (Mã nhận dạng Nền tảng)"},MI_Metadata:{acquisitionInformation:"Mua lại"},MI_Objective:{caption:"Mục tiêu",identifier:"Mã nhận dạng Mục tiêu",priority:"Mục tiêu Ưu tiên",sFunction:"Hàm Mục tiêu",extent:"Phạm vi",pass:"Giấy phép Nền tảng",sensingInstrumentReference:"Thiết bị Cảm biến (Mã nhận dạng Thiết bị)",objectiveOccurrence:"Sự kiện",sections:{identification:"Nhận dạng",extent:"Phạm vi",pass:"Giấy phép",sensingInstrument:"Thiết bị Cảm biến",objectiveOccurrence:"Sự kiện"}},MI_ObjectiveTypeCode:{caption:"Loại (Kỹ thuật Thu thập cho Mục tiêu)",instantaneousCollection:"Thu thập Tức thời",persistentView:"Chế độ xem Liên tục",survey:"Khảo sát"},MI_Operation:{caption:"Hoạt động",description:"Mô tả Hoạt động",citation:"Trích dẫn Hoạt động",identifier:"Mã nhận dạng Hoạt động",status:"Trạng thái Hoạt động",objectiveReference:"Mục tiêu Liên quan (Mã nhận dạng Mục tiêu)",planReference:"Kế hoạch Liên quan (Mã nhận dạng Kế hoạch)",significantEventReference:"Sự kiện Liên quan (Mã nhận dạng Sự kiện)",platformReference:"Nền tảng liên quan (Mã nhận dạng Nền tảng)",sections:{identification:"Nhận dạng",related:"Có liên quan"}},MI_OperationTypeCode:{caption:"Loại Hoạt động",real:"Thực",simulated:"Mô phỏng",synthesized:"Tổng hợp"},MI_Plan:{sType:"Hình học Lấy mẫu cho Thu thập Dữ liệu",status:"Trạng thái Kế hoạch",citation:"Trích dẫn Thu thập Yêu cầu Ủy quyền",satisfiedRequirementReference:"Yêu cầu được Đáp ứng (Mã nhận dạng Yêu cầu)",operationReference:"Hoạt động Liên quan (Mã nhận dạng Hoạt động)"},MI_Platform:{citation:"Trích dẫn Nền tảng",identifier:"Mã nhận dạng Nền tảng",description:"Mô tả Nền tảng Hỗ trợ Thiết bị",sponsor:"Tổ chức Tài trợ cho Nền tảng",instrument:"Thiết bị được gắn trên nền tảng",instrumentReference:"Mã nhận dạng Thiết bị",sections:{identification:"Nhận dạng",sponsor:"Nhà tài trợ",instruments:"Thiết bị"}},MI_PlatformPass:{identifier:"Mã nhận dạng Giấy phép Nền tảng",extent:"Giới hạn Giấy phép Nền tảng",relatedEventReference:"Sự kiện Liên quan (Mã nhận dạng Sự kiện)"},MI_PriorityCode:{critical:"Quan trọng",highImportance:"Mức độ quan trọng Cao",mediumImportance:"Mức độ quan trọng Trung bình",lowImportance:"Mức độ quan trọng Thấp"},MI_RequestedDate:{requestedDateOfCollection:"Ngày Thu thập được Yêu cầu",latestAcceptableDate:"Ngày Chấp nhận Cuối cùng"},MI_Requirement:{caption:"Yêu cầu",citation:"Trích dẫn cho Tài liệu Hướng dẫn Yêu cầu",identifier:"Mã nhận dạng Yêu cầu",requestor:"Người yêu cầu",recipient:"Người nhận Kết quả Yêu cầu",priority:"Mức độ ưu tiên của Yêu cầu",requestedDate:"Ngày Yêu cầu",expiryDate:"Ngày Hết hạn",satisifiedPlanReference:"Kế hoạch được Đáp ứng (Mã nhận dạng Kế hoạch)",sections:{identification:"Nhận dạng",requestor:"Người yêu cầu",recipient:"Người nhận",priorityAndDates:"Mức độ ưu tiên và Ngày",satisifiedPlan:"Kế hoạch được Đáp ứng"}},MI_SequenceCode:{caption:"Trình tự",start:"Bắt đầu",end:"Kết thúc",instantaneous:"Tức thời"},MI_TriggerCode:{caption:"Kích hoạt",automatic:"Tự động",manual:"Bằng tay",preProgrammed:"Được lập trình trước"},ObjectReference:{uuidref:"Tham chiếu UUID",xlinkref:"Tham chiếu URL"},RS_Identifier:{caption:"Không gian Mã ID Plus",code:"Mã",codeSpace:"Không gian Mã"},SV_CouplingType:{loose:"Lỏng",mixed:"Hỗn hợp",tight:"Chặt"},SV_OperationMetadata:{operationName:"Tên Vận hành",DCP:"DCP",connectPoint:"Điểm Kết nối"},SV_ServiceIdentification:{serviceType:"Loại Dịch vụ",couplingType:"Loại Ghép nối",containsOperations:"Siêu dữ liệu Hoạt động",operatesOn:"Ngày Hoạt động"},TM_Primitive:{indeterminatePosition:"Vị trí Không xác định",indeterminates:{before:"Trước",after:"Sau",now:"Bây giờ",unknown:"Không xác định"}},gemet:{concept:{gemetConceptKeyword:"Từ khóa Khái niệm GEMET",tool:"Tìm kiếm...",dialogTitle:"GEMET - Từ khóa Khái niệm",searchLabel:"Tìm kiếm:",searchTip:"Tìm kiếm GEMET"},theme:{tool:"Tìm kiếm...",dialogTitle:"GEMET - Chủ đề Dữ liệu Inspire"},ioerror:"Đã xảy ra lỗi khi liên hệ với dịch vụ GEMET: {url}",searching:"Đang tìm kiếm GEMET...",noMatch:"Không tìm thấy kết quả trùng khớp.",languages:{bg:"Tiếng Bulgari",cs:"Tiếng Séc",da:"Tiếng Đan Mạch",nl:"Tiếng Hà Lan",en:"Tiếng Anh",et:"Tiếng Estonia",fi:"Tiếng Phần Lan",fr:"Tiếng Pháp",de:"Tiếng Đức",el:"Tiếng Hy Lạp",hu:"Tiếng Hungari",ga:"Tiếng Gaelic (của Ireland)",it:"Tiếng Ý",lv:"Tiếng Latvia",lt:"Tiếng Lithuania",mt:"Tiếng Malta",pl:"Tiếng Ba Lan",pt:"Tiếng Bồ Đào Nha",ro:"Tiếng Rumani",sk:"Tiếng Slovak",sl:"Tiếng Slovene",es:"Tiếng Tây Ban Nha",sv:"Tiếng Thụy Điển"}}});