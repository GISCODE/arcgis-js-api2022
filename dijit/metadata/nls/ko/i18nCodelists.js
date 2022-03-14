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

define({CI_OnLineFunctionCode:{"001":"다운로드","002":"정보","003":"오프라인 접근","004":"순서","005":"검색","006":"업로드","007":"웹 서비스","008":"이메일 서비스","009":"찾아보기","010":"파일 접근","011":"웹 맵 서비스"},CI_PresentationFormCode:{"001":"디지털 문서","002":"하드카피 문서","003":"디지털 이미지","004":"하드카피 이미지","005":"디지털 맵","006":"하드카피 맵","007":"디지털 모델","008":"하드카피 모델","009":"디지털 프로필","010":"하드카피 프로필","011":"디지털 테이블","012":"하드카피 테이블","013":"디지털 비디오","014":"하드카피 비디오","015":"디지털 오디오","016":"하드카피 오디오","017":"디지털 멀티미디어","018":"하드카피 멀티미디어","019":"디지털 다이어그램","020":"하드카피 다이어그램"},CI_RoleCode:{"001":"리소스 공급자","002":"관리인","003":"소유자","004":"사용자","005":"디스트리뷰터","006":"출처","007":"연락 담당자","008":"연구 책임자","009":"처리자","010":"발행자","011":"작성자","012":"공동 작업자","013":"편집자","014":"중재자","015":"권리 보유자"},DQ_EvaluationMethodTypeCode:{"001":"직접 내부","002":"직접 외부","003":"간접"},DS_AssociationTypeCode:{"001":"상호 참조","002":"큰 작업 인용","003":"원활한 데이터베이스의 부분","004":"소스","005":"스테레오메이트","006":"구성 요소"},DS_InitiativeTypeCode:{"001":"캠페인","002":"컬렉션","003":"연습","004":"실험","005":"조사","006":"임무","007":"센서","008":"작업","009":"플랫폼","010":"프로세스","011":"프로그램","012":"프로젝트","013":"연구","014":"작업","015":"평가판"},MD_CellGeometryCode:{"001":"포인트","002":"면적","003":"복셀"},MD_CharacterSetCode:{"001":"ucs2","002":"ucs4","003":"utf7","004":"utf8","005":"utf16","006":"8859part1","007":"8859part2","008":"8859part3","009":"8859part4","010":"8859part5","011":"8859part6","012":"8859part7","013":"8859part8","014":"8859part9","015":"8859part10","016":"8859part11","018":"8859part13","019":"8859part14","020":"8859part15","021":"8859part16","022":"jis","023":"shiftJIS","024":"eucJP","025":"usAscii","026":"ebcdic","027":"eucKR","028":"big5","029":"GB2312"},MD_ClassificationCode:{"001":"분류되지 않음","002":"제한됨","003":"기밀","004":"비공개","005":"일급 기밀","006":"중요","007":"공식 사용 전용"},MD_CoverageContentTypeCode:{"001":"이미지","002":"주제 분류","003":"실제 측정"},MD_DimensionNameTypeCode:{"001":"행(y축)","002":"열(x축)","003":"수직(z축)","004":"트랙","005":"크로스 트랙","006":"라인","007":"샘플","008":"시간"},MD_GeometricObjectTypeCode:{"001":"복합","002":"복합","003":"곡선","004":"포인트","005":"실선","006":"표면"},MD_ImagingConditionCode:{"001":"흐린 이미지","002":"구름","003":"낮아지는 경사도","004":"안개","005":"짙은 연기 또는 먼지","006":"밤","007":"비","008":"어둑어둑함","009":"그림자","010":"눈","011":"터레인 마스크"},MD_MaintenanceFrequenceCode:{998:"알 수 없음","001":"지속적","002":"매일","003":"매주","004":"2주에 한 번","005":"매월","006":"분기별","007":"연 2회","008":"매년","009":"필요할 때","010":"규칙적이지 않음","011":"계획되지 않음","012":"알 수 없음","013":"격주"},MD_MediumFormatCode:{"001":"CPIO","002":"TAR","003":"High Sierra","004":"ISO 9660","005":"ISO 9660 Rock Ridge","006":"ISO 9660 Apple HFS","007":"UDF"},MD_MediumNameCode:{"001":"CD-ROM","002":"DVD","003":"DVD-ROM","004":"3.5인치 플로피","005":"5.25인치 플로피","006":"7트랙 테이프","007":"9트랙 테이프","008":"3480 카트리지","009":"3490 카트리지","010":"3580 카트리지","011":"4mm 카트리지 테이프","012":"8mm 카트리지 테이프","013":"1.25인치 카트리지 테이프","014":"디지털 선형 테이프","015":"온라인","016":"위성 연결","017":"전화 연결","018":"하드카피","019":"디아조 폴리에스테르 08","020":"카드 마이크로필름","021":"마이크로필름 240","022":"마이크로필름 35","023":"마이크로필름 70","024":"마이크로필름 일반","025":"마이크로필름 마이크로피시","026":"음영 사진","027":"종이","028":"디아조","029":"사진","030":"트레이싱 용지","031":"하드 디스크","032":"USB 플래시 드라이브"},MD_PixelOrientationCode:{"001":"중심","002":"좌측 하단","003":"우측 하단","004":"우측 상단","005":"좌측 상단"},MD_ProgressCode:{"001":"완료됨","002":"이력 관리","003":"사용되지 않음","004":"계속 진행 중","005":"계획됨","006":"필요함","007":"개발 중","008":"제안됨"},MD_RestrictionCode:{"001":"저작권","002":"특허권","003":"특허 출원 중","004":"상표","005":"라이선스","006":"지적 재산권","007":"제한됨","008":"기타 제한 사항","009":"제한없는 라이선스","010":"최종 사용자 라이선스","011":"배급자 라이선스","012":"개인정보보호정책","013":"법적","014":"기밀","015":"민감도"},MD_Metadata_MD_ScopeCode:{"001":"속성","002":"속성 유형","003":"컬렉션 하드웨어","004":"컬렉션 세션","005":"데이터셋","006":"계열","007":"비공간 데이터셋","008":"디멘전 그룹","009":"피처","010":"피처 유형","011":"등록정보 유형","012":"필드 세션","013":"소프트웨어","014":"서비스","015":"모델","016":"타일","017":"이니셔티브","018":"스테레오메이트","019":"센서","020":"플랫폼 계열","021":"센서 계열","022":"생산 계열","023":"전송 계열","024":"기타 계열"},MD_ScopeCode:{"001":"속성","002":"속성 유형","003":"컬렉션 하드웨어","004":"컬렉션 세션","005":"데이터셋","006":"계열","007":"비공간 데이터셋","008":"디멘전 그룹","009":"피처","010":"피처 유형","011":"등록정보 유형","012":"필드 세션","013":"소프트웨어","014":"서비스","015":"모델","016":"타일","017":"이니셔티브","018":"스테레오메이트","019":"센서","020":"플랫폼 계열","021":"센서 계열","022":"생산 계열","023":"전송 계열","024":"기타 계열"},MD_SpatialRepresentationTypeCode:{"001":"벡터","002":"그리드","003":"텍스트 테이블","004":"Tin","005":"스테레오 모델","006":"비디오"},MD_TopicCategoryCode:{"001":"농업","002":"생물상","003":"경계","004":"대기 과학","005":"경제","006":"고도","007":"환경","008":"지리과학","009":"생명력","010":"영상 및 베이스맵","011":"군사 및 정보","012":"내수","013":"위치","014":"해양","015":"계획 및 지적","016":"사회","017":"구조","018":"교통","019":"공공 설비 및 통신"},MD_TopologyLevelCode:{"001":"지오메트리만","002":"1D 토폴로지","003":"평면 그래프","004":"전체 평면 그래프","005":"표면 그래프","006":"전체 표면 그래프","007":"3D 토폴로지","008":"전체 3D 토폴로지","009":"요약"},SV_CouplingType:{"001":"느슨함","002":"혼합","003":"조밀함"},AddressType:{postal:"우편",physical:"실제",both:"양쪽 모두"},PresentationForm:{atlas:"아틀라스",audio:"오디오",diagram:"다이어그램",document:"문서",globe:"글로브",map:"맵",model:"모델","multimedia presentation":"멀티미디어 프레젠테이션",profile:"프로필","raster digital data":"래스터 디지털 데이터","remote-sensing image":"원격탐사 이미지",section:"섹션",spreadsheet:"스프레드시트","tabular digital data":"테이블 디지털 데이터","vector digital data":"벡터 디지털 데이터",video:"비디오",view:"보기"},DQ_ElementDimension:{horizontal:"수평",vertical:"수직"},DQ_ElementType:{DQCompComm:"완전성 조작",DQCompOm:"완전성 누락",DQConcConsis:"개념적 일관성",DQDomConsis:"도메인 일관성",DQFormConsis:"형식 일관성",DQTopConsis:"토폴로지 일관성",DQAbsExtPosAcc:"절대적 외부 위치 정확도",DQGridDataPosAcc:"그리드 데이터 위치 정확도",DQRelIntPosAcc:"상대적 외부 위치 정확도",DQThemClassCor:"주제 분류의 정확성",DQNonQuanAttAcc:"비정량적 속성 정확도",DQQuanAttAcc:"정량적 속성 정확도",DQAccTimeMeas:"시간 측정의 정확도",DQTempConsis:"시간 일관성",DQTempValid:"시간 유효성"},IMS_ContentType:{"001":"실시간 데이터 및 맵","002":"다운로드 가능한 데이터","003":"오프라인 데이터","004":"정적 맵 이미지","005":"기타 문서","006":"응용프로그램","007":"지리 서비스","008":"정보 센터","009":"맵 파일","010":"지리적 활동"},LI_SourceType:{used:"사용됨",produced:"제작됨"},RS_Dimension:{horizontal:"수평",vertical:"수직",temporal:"시간"},CountryCode:{AF:"아프가니스탄",AX:"올란드 제도",AL:"알바니아",DZ:"알제리",AS:"미국령 사모아",AD:"안도라",AO:"앙골라",AI:"앵귈라",AQ:"남극",AG:"앤티가 바부다",AR:"아르헨티나",AM:"아르메니아",AW:"아루바",AU:"호주",AT:"오스트리아",AZ:"아제르바이잔",BS:"바하마",BH:"바레인",BD:"방글라데시",BB:"바베이도스",BY:"벨로루시",BE:"벨기에",BZ:"벨리즈",BJ:"베넹",BM:"버뮤다",BT:"부탄",BO:"볼리비아",BQ:"보네르",BA:"보스니아 헤르체코비나",BW:"보츠와나",BV:"부베 섬",BR:"브라질",IO:"영국령 인도양 지역",BN:"브루나이",BG:"불가리아",BF:"부르키나 파소",BI:"부룬디",KH:"캄보디아",CM:"카메룬",CA:"캐나다",CV:"카보베르데",KY:"케이맨 제도",CF:"중앙아프리카 공화국",TD:"차드",CL:"칠레",CN:"중국",CX:"크리스마스 섬",CC:"코코스(킬링) 제도",CO:"콜롬비아",KM:"코모로",CG:"콩고",CD:"콩고민주공화국",CK:"쿡 제도",CR:"코스타리카",CI:"코트디부아르",HR:"크로아티아",CU:"쿠바",CW:"퀴라소",CY:"키프로스",CZ:"체코 공화국",DK:"덴마크",DJ:"지부티",DM:"도미니카",DO:"도미니카 공화국",EC:"에콰도르",EG:"이집트",SV:"엘살바도르",GQ:"적도 기니",ER:"에리트레아",EE:"에스토니아",ET:"에티오피아",FK:"포클랜드 제도(말비나스)",FO:"페로 제도",FJ:"피지",FI:"핀란드",FR:"프랑스",GF:"프랑스령 기아나",PF:"프랑스령 폴리네시아",TF:"프랑스 남부 지역",GA:"가봉",GM:"감비아",GE:"조지아",DE:"독일",GH:"가나",GI:"지브롤터",GR:"그리스",GL:"그린란드",GD:"그레나다",GP:"과들루프",GU:"괌",GT:"과테말라",GG:"건지",GN:"기니",GW:"기니비사우 공화국",GY:"가이아나",HT:"아이티",HM:"허드 맥도날드 제도",VA:"교황청(바티칸 시국)",HN:"온두라스",HK:"홍콩",HU:"헝가리",IS:"아이슬란드",IN:"인도",ID:"인도네시아",IR:"이란 이슬람 공화국",IQ:"이라크",IE:"아일랜드",IM:"맨 섬",IL:"이스라엘",IT:"이탈리아",JM:"자메이카",JP:"일본",JE:"저지",JO:"요르단",KZ:"카자흐스탄",KE:"케냐",KI:"키리바시",KP:"북한",KR:"대한민국",KW:"쿠웨이트",KG:"키르기스스탄",LA:"라오 인민민주주의공화국",LV:"라트비아",LB:"레바논",LS:"레소토",LR:"라이베리아",LY:"리비아",LI:"리히텐슈타인",LT:"리투아니아",LU:"룩셈부르크",MO:"마카오",MK:"마케도니아",MG:"마다가스카르",MW:"말라위",MY:"말레이시아",MV:"몰디브",ML:"말리",MT:"몰타",MH:"마샬 군도",MQ:"마르티니크",MR:"모리타니아",MU:"모리셔스",YT:"마요트",MX:"멕시코",FM:"미크로네시아연방 공화국",MD:"몰도바",MC:"모나코",MN:"몽골",ME:"몬테네그로",MS:"몬트세라트섬",MA:"모로코",MZ:"모잠비크",MM:"미얀마",NA:"나미비아",NR:"나우루",NP:"네팔",NL:"네덜란드",NC:"뉴칼레도니아",NZ:"뉴질랜드",NI:"니카라과",NE:"니제르",NG:"나이지리아",NU:"니우에섬",NF:"노퍽 섬",MP:"북마리아나 제도",NO:"노르웨이",OM:"오만",PK:"파키스탄",PW:"팔라우",PS:"팔레스타인 점령 지역",PA:"파나마",PG:"파푸아뉴기니",PY:"파라과이",PE:"페루",PH:"필리핀",PN:"핏케언",PL:"폴란드",PT:"포르투갈",PR:"푸에르토리코",QA:"카타르",RE:"리유니언",RO:"루마니아",RU:"러시아 연방",RW:"르완다",BL:"세인트 바르텔레미",SH:"세인트헬레나",KN:"세인트키츠네비스",LC:"세인트루시아",MF:"세인트 마틴(프랑스령)",PM:"생피에르 미클롱",VC:"세인트빈센트그레나딘",WS:"사모아",SM:"산마리노",ST:"상투메 프린시페",SA:"사우디아라비아",SN:"세네갈",RS:"세르비아",SC:"세이셸",SL:"시에라리온",SG:"싱가포르",SX:"신트마르텐(네덜란드령)",SK:"슬로바키아",SI:"슬로베니아",SB:"솔로몬 제도",SO:"소말리아",ZA:"남아프리카",GS:"사우스 조지아 및 사우스 샌드위치 제도",SS:"남수단",ES:"스페인",LK:"스리랑카",SD:"수단",SR:"수리남",SJ:"스발바르 및 얀마웬",SZ:"스와질란드",SE:"스웨덴",CH:"스위스",SY:"시리아",TW:"대만",TJ:"타지키스탄",TZ:"탄자니아",TH:"태국",TL:"동티모르",TG:"토고",TK:"토켈라우",TO:"통가",TT:"트리니나드토바고",TN:"튀니지",TR:"터키",TM:"투르크메니스탄",TC:"터크스카이코스 제도",TV:"투발루",UG:"우간다",UA:"우크라이나",AE:"아랍에미리트",GB:"영국",US:"미국",UM:"미국 소수 외부 제도",UY:"우루과이",UZ:"우즈베키스탄",VU:"바누아투",VE:"베네수엘라 볼리바르 공화국",VN:"베트남",VG:"영국령 버진 아일랜드",VI:"미국령 버진 아일랜드",WF:"월리스푸투나",EH:"서부 사하라",YE:"예멘",ZM:"잠비아",ZW:"짐바브웨"},LanguageCode:{aar:"아파르어",abk:"아브하즈어",ace:"아체어",ach:"아촐리어",ada:"아당메어",ady:"야디게이어",afa:"아프로아시아어",afh:"아프리힐리어",afr:"아프리칸스어",ain:"아이누어",aka:"아칸어",akk:"아카드어",alb:"알바니아어",ale:"알류트어",alg:"알공킨어파",alt:"남부 알타이어",amh:"암하라어",ang:"고대 영어(ca.450-1100)",anp:"앙기카",apa:"아파치 제어",ara:"아랍어",arc:"공식 아람어(700-300 BCE), 황실 아람어(700-300 BCE)",arg:"아라곤어",arm:"아르메니아어",arn:"마푸둥군, 마푸체어",arp:"아라파호어",art:"인공 언어",arw:"아라와크어",asm:"아삼어",ast:"아스투리아스어, 레오네세어, 아스투라이스 레오네세어",ath:"아타바스카 언어",aus:"오스트레일리안 언어",ava:"아바르어",ave:"아베스타어",awa:"아와디",aym:"아이마라어",aze:"아제르바이잔어",bad:"반다어",bai:"바밀레케 언어",bak:"바슈키르어",bal:"발루치어",bam:"밤바라어",ban:"발리어",baq:"바스크어",bas:"바사어",bat:"발트 언어",bej:"베자어",bel:"벨라루스어",bem:"벰바어",ben:"뱅골어",ber:"베르베르 언어",bho:"보즈푸리어",bih:"비하르어",bik:"비콜어",bin:"비니어, 에도",bis:"비슬라마어",bla:"식시카어",bnt:"반투(기타)",bos:"보스니아어",bra:"브라지어",bre:"브르타뉴어",btk:"바타크어",bua:"부리아트어",bug:"부기어",bul:"불가리아어",bur:"버마어",byn:"블린어",cad:"카도어",cai:"중앙아메리카 원주민 언어",car:"갈리브 카리브어",cat:"카탈로니아어, 발렌시아어",cau:"캅카스어",ceb:"세부아노어",cel:"켈트어",cha:"차모르어",chb:"치브차어",che:"체첸어",chg:"차가타이어",chi:"중국어",chk:"추크어",chm:"마리어",chn:"치누크 통상어",cho:"촉토어",chp:"치페위안어",chr:"체로키어",chu:"교회 슬라브어, 고대 슬라브어, 고대 불가리아어, 고대 교회 슬라브어",chv:"츄바시어",chy:"샤이엔어",cmc:"오스트로네시아 언어",cop:"콥트어",cor:"콘월어",cos:"코르시카어",cpe:"크리올어 및 피진어(영어 기반)",cpf:"크리올어 및 피진어(프랑스어 기반)",cpp:"크리올어 및 피진어(포르투갈어 기반)",cre:"크리어",crh:"크림 타타르어, 크림 튀르크어",crp:"크리올어 및 피진어",csb:"카슈비아어",cus:"쿠시 어군",cze:"체코어",dak:"다코타어",dan:"덴마크어",dar:"다르과어",day:"랜드다야크 언어",del:"델라웨어어",den:"슬라브(아타바스카어)",dgr:"도그리브어",din:"딩카어",div:"디베히어, 몰디브어",doi:"도그라어",dra:"드라비다 언어",dsb:"저지대 소르비아어",dua:"두알라어",dum:"중세 네덜란드어(ca.1050-1350)",dut:"네덜란드어, 플라밍어",dyu:"듈라어",dzo:"종카어",efi:"에피크어",egy:"이집트어(고대)",eka:"에카주크어",elx:"엘람어",eng:"영어",enm:"중세 영어(1100-1500)",epo:"에스페란토",est:"에스토니아어",ewe:"에웨어",ewo:"에원도어",fan:"팡어",fao:"페로어",fat:"판티어",fij:"피지어",fil:"필리핀어, 필리핀 표준어",fin:"핀란드어",fiu:"피노 우그리안 언어",fon:"폰어",fre:"프랑스어",frm:"중세 프랑스어(ca.1400-1600)",fro:"고대 프랑스어(842-ca.1400)",frr:"북부 프리지아어",frs:"동부 프리지아어",fry:"서부 프리지아어",ful:"풀라어",fur:"프리울리언어",gaa:"가어",gay:"가요어",gba:"그바야어",gem:"게르만어",geo:"그루지야어",ger:"독일어",gez:"게이즈어",gil:"길버트어",gla:"게일어, 스코틀랜드 게일어",gle:"아일랜드어",glg:"갈라시아어",glv:"맨어",gmh:"독일어, 중세 고지대(ca.1050-1500)",goh:"독일어, 고대 고지대(ca.750-1050)",gon:"곤드어",gor:"고론탈로",got:"고트어",grb:"그레보어",grc:"고대 그리스어(1453년 이전)",gre:"현대 그리스어(1453년 이후)",grn:"과라니어",gsw:"스위스 독일어, 알라만어, 알자스어",guj:"구자라트어",gwi:"그위친어",hai:"하이다어",hat:"아이티어, 아이티 프랑스어",hau:"하우사어",haw:"하와이어",heb:"히브리어",her:"헤레로어",hil:"힐리가이노어",him:"히마찰어, 서부 파하리어",hin:"힌디어",hit:"히타이트어",hmn:"몽어",hmo:"모투어",hrv:"크로아티아어",hsb:"북소르브어",hun:"헝가리어",hup:"후파어",iba:"이반어",ibo:"이그보우어",ice:"아이슬란드어",ido:"이도",iii:"쓰촨 이어",ijo:"이조어",iku:"이뉴잇어",ile:"인테르링구에, 옥시덴탈",ilo:"일로코어",ina:"인터링구아(국제어 협회)",inc:"인도아리아어군",ind:"인도네시아어",ine:"인도유럽어족",inh:"인구시어",ipk:"이누피아크어",ira:"이란어군",iro:"이로쿼이어족",ita:"이탈리아어",jav:"자바어",jbo:"로지반",jpn:"일본어",jpr:"유대 페르시아어",jrb:"유대 아랍어",kaa:"카라칼파크어",kab:"커바일어",kac:"카친, 징포어",kal:"칼랄리수트, 그린란드어",kam:"캄바어",kan:"칸나다어",kar:"카렌어",kas:"카슈미르어",kau:"카누리어",kaw:"카위어",kaz:"카자흐어",kbd:"카바르디아어",kha:"카시어",khi:"코이산어족",khm:"중부 크메르어",kho:"코탄어, 사칸",kik:"키쿠유어",kin:"키냐르완다어",kir:"키르기스어",kmb:"킴분두어",kok:"콩카니어",kom:"코미어",kon:"콩고어",kor:"한국어",kos:"코스라에인어",kpe:"크펠레어",krc:"카라차이 발카르어",krl:"카렐리아어",kro:"크루어",kru:"쿠루크어",kua:"크와냐마어",kum:"쿠미크어",kur:"쿠르드어",kut:"쿠테나이어",lad:"라디노어",lah:"란다어",lam:"람바어",lao:"라오어",lat:"라틴어",lav:"라트비아어",lez:"레즈긴어",lim:"림부르크어",lin:"링갈라어",lit:"리투아니아어",lol:"몽고어",loz:"로지어",ltz:"룩셈부르크어",lua:"루바룰루아어",lub:"루바카탕가어",lug:"간다어",lui:"루이세뇨어",lun:"룬다어",luo:"루오어(케냐와 탄자니아)",lus:"루샤이어",mac:"마케도니아어",mad:"마두라어",mag:"마가히어",mah:"마셜어",mai:"마이틸리어",mak:"마카사르어",mal:"말라얄람어",man:"만딩고어",mao:"마오리어",map:"오스트로네시아어족",mar:"마라타어",mas:"마사이어",may:"말레이시아어",mdf:"모크샤어",mdr:"만다르어",men:"멘데어",mga:"중세 아일랜드어(900-1200)",mic:"미크맥어",min:"미낭카바우어",mis:"비코드화 언어",mkh:"몬크메르어파",mlg:"말라가시어",mlt:"몰타어",mnc:"만주어",mni:"마니푸리어",mno:"마노보어군",moh:"모호크어",mon:"몽골어",mos:"모시어",mul:"다중 언어",mun:"문다어",mus:"크리크어",mwl:"미란데어",mwr:"마르와르어",myn:"마야어족",myv:"에르지아어",nah:"나와틀 언어",nai:"북아메리카 원주민 언어",nap:"나폴리어",nau:"나우루",nav:"나바호어",nbl:"은데벨레, 남부, 남부 은데벨레",nde:"은데벨레, 북부, 북부 은데벨레",ndo:"은동가어",nds:"저지 독일어, 저지 색슨, 독일어, 저지, 색슨, 저지대",nep:"네팔어",new:"네팔바사, 네와르어",nia:"니아스",nic:"니제르 코르도판 언어",niu:"니우에어",nno:"노르웨이어(뉘노르스크)",nob:"부크몰, 노르웨이어, 노르웨이 부크몰",nog:"노가이어",non:"노르드어(고대)",nor:"노르웨이어",nqo:"N'Ko",nso:"페디, 세페디, 북부 소토어",nub:"누비아어군",nwc:"고대 네와르어",nya:"치체와, 체와어, 니안자어",nym:"니암웨지어",nyn:"반투어",nyo:"니오로어",nzi:"은제마어",oci:"프로방스어(1500년 이후), 프로방스어",oji:"오지브와어",ori:"오리야어",orm:"오로모어",osa:"오세이지어",oss:"오세트어",ota:"오스만 투르크어(1500-1928)",oto:"오토미어군",paa:"파푸아 제어",pag:"팡가시난어",pal:"팔레비어",pam:"팜팡가어, 카팜팡가어",pan:"펀자브어",pap:"파피아멘토어",pau:"팔라우어",peo:"고대 페르시아어(ca.600-400 B.C.)",per:"페르시아어",phi:"필리핀 제어",phn:"페니키아어",pli:"팔리어",pol:"폴란드어",pon:"폰페이어",por:"포르투갈어",pra:"프라크리트 제어",pro:"프로방스어, 고대(1500년까지)",pus:"파슈토어","qaa-qtz":"로컬용으로 예약",que:"케추아어",raj:"라자스탄어",rap:"라파누이어",rar:"라로통가어, 쿡 제도 마오리",roa:"로맨스어",roh:"로망슈어",rom:"로마니어",rum:"루마니아어, 몰다비아어, 몰도바어",run:"룬디어",rup:"아루마니아어",rus:"러시아어",sad:"산다웨어",sag:"상고어",sah:"야쿠트어",sai:"남아메리카 인디언 제어(기타)",sal:"살리시어족",sam:"사마리아 아람어",san:"산스크리트어",sas:"사사크어",sat:"산탈어",scn:"시칠리아어",sco:"스코트어",sel:"셀쿠프어",sem:"셈어파",sga:"고대 아일랜드어(900년 이전)",sgn:"수화",shn:"샨어",sid:"시다모어",sin:"싱할라어",sio:"수어족",sit:"시노티베트어족",sla:"슬라브어파",slo:"슬로바키아어",slv:"슬로베니아어",sma:"남부 사미어",sme:"북부 사미어",smi:"사미어",smj:"룰레 사미어",smn:"이나리 사미어",smo:"사모아어",sms:"스콜트 사미어",sna:"쇼나어",snd:"신드어",snk:"소닌케어",sog:"소그드어",som:"소말리어",son:"송가이어",sot:"소토어(남부)",spa:"스페인어, 카스티야어",srd:"사르데냐어",srn:"스라난 통고",srp:"세르비아어",srr:"세레르어",ssa:"나일사하라어족",ssw:"스와티어",suk:"수쿠마어",sun:"순다어",sus:"수수어",sux:"수메르어",swa:"스와힐리어",swe:"스웨덴어",syc:"고대 시리아어",syr:"시리아어",tah:"타히티어",tai:"타이어군",tam:"타밀어",tat:"타타르어",tel:"텔루구어",tem:"템네어",ter:"테레노어",tet:"테툼어",tgk:"타지크어",tgl:"타갈로그어",tha:"타이어",tib:"티베트어",tig:"티그레어",tir:"티그리냐어",tiv:"티브어",tkl:"토켈라우",tlh:"클링온어",tli:"틀링깃어",tmh:"타마셰크어",tog:"통가어(니아사)",ton:"통가어(통가 제도)",tpi:"톡피신어",tsi:"침시아어",tsn:"츠와나어",tso:"총가어",tuk:"투르크멘어",tum:"툼부카어",tup:"투피어족",tur:"터키어",tut:"알타이어족",tvl:"투발루",twi:"트위어",tyv:"투바어",udm:"우드무르트어",uga:"우가리트어",uig:"위구르어",ukr:"우크라이나어",umb:"움분두어",und:"미확인 언어",urd:"우르두어",uzb:"우즈베크어",vai:"바이어",ven:"벤다어",vie:"베트남어",vol:"볼라퓌크어",vot:"보트어",wak:"와카시어족",wal:"왈라모어",war:"와라이어",was:"와쇼어",wel:"웨일스어",wen:"소르비아어계",wln:"왈론어",wol:"월로프어",xal:"칼미크어",xho:"코사어",yao:"야오어",yap:"야프어",yid:"이디시어",yor:"요루바어",ypk:"유피크어군",zap:"사포텍어",zbl:"블리스 심볼",zen:"제나가어",zha:"좡어",znd:"잔데어",zul:"줄루어",zun:"주니어",zxx:"언어 콘텐츠 없음, 해당 없음",zza:"디밀리어, 자자키어"},MonetaryUnits:{XUA:"ADB Unit of Account",AFN:"아프가니",DZD:"알제리 디나르",ARS:"아르헨티나 페소",AMD:"아르메니아 드람",AWG:"아루바 길더",AUD:"오스트레일리아 달러",AZN:"아제르바이잔 마나트",BSD:"바하마 달러",BHD:"바레인 디나르",THB:"바트",PAB:"발보아",BBD:"바베이도스 달러",BYR:"벨로루시 루블",BZD:"벨리즈 달러",BMD:"버뮤다 달러",VEF:"볼리브라 푸에르테",BOB:"볼리비아노",XBA:"채권 시장 단위 EURCO(European Composite) 단위",XBB:"채권 시장 단위 유럽 통화 단위(EMU 6)",XBD:"채권 시장 단위 EUA 17(European Unit of Account 17)",XBC:"채권 시장 단위 EUA 9(European Unit of Account 9)",BRL:"브라질 헤알",BND:"브루나이 달러",BGN:"불가리아 레프",BIF:"부룬디 프랑",CAD:"캐나다 달러",CVE:"카보베르데 에스쿠도",KYD:"케이맨 제도 달러",GHS:"세디",XOF:"CFA 프랑 BCEAO",XAF:"CFA 프랑 BEAC",XPF:"CFP 프랑",CLP:"칠레 페소",XTS:"특별히 테스트용으로 예약된 코드",COP:"콜롬비아 페소",KMF:"코모로 프랑",CDF:"콩고 프랑",BAM:"변환 가능한 표식",NIO:"코르도바 오로",CRC:"코스타리카 콜론",HRK:"크로아티아 쿠나",CUP:"쿠바 페소",CZK:"체코 코루나",GMD:"달라시",DKK:"덴마크 크로네",MKD:"디나르",DJF:"지부티 프랑",STD:"도브라",DOP:"도미니카 페소",VND:"둥",XCD:"동카리브 달러",EGP:"이집트 파운드",SVC:"엘살바도르 콜론",ETB:"에티오피아 비르",EUR:"유로",FKP:"포클랜드 제도 파운드",FJD:"피지 달러",HUF:"포린트",GIP:"지브롤터 파운드",XAU:"금",HTG:"구르드",PYG:"과라니",GNF:"기니 프랑",GYD:"가이아나 달러",HKD:"홍콩 달러",UAH:"흐리브냐",ISK:"아이슬란드 크로나",INR:"인도 루피",IRR:"이란 리알",IQD:"이라크 디나르",JMD:"자메이카 달러",JOD:"요르단 디나르",KES:"케냐 실링",PGK:"키나",LAK:"킵",KWD:"쿠웨이트 디나르",MWK:"크와차",AOA:"콴자",MMK:"차트",GEL:"라리",LVL:"라트비아 라츠",LBP:"레바논 파운드",ALL:"레크",HNL:"렘피라",SLL:"리온",RON:"레우",LRD:"라이베리아 달러",LYD:"리비아 디나르",SZL:"리랑게니",LTL:"리투아니아 리타스",LSL:"로티",MGA:"마다가스카르 아리아리",MYR:"말레이시아 링깃",MUR:"모리셔스 루피",MZN:"메티칼",MXN:"멕시코 페소",MXV:"멕시코 UDI",MDL:"몰도바 레우",MAD:"모로코 디르함",BOV:"Mvdol",NGN:"나이라",ERN:"나크파",NAD:"나미비아 달러",NPR:"네팔 루피",ANG:"네덜란드령 안틸레스 휠던",ILS:"이스라엘 세켈",TMT:"신 마나트",TWD:"대만 달러",NZD:"뉴질랜드 달러",BTN:"눌트럼",KPW:"북한 원",NOK:"노르웨이 크로네",PEN:"누에보 솔",MRO:"우기니",TOP:"팡가",PKR:"파키스탄 루피",XPD:"팔라듐",MOP:"파타카",CUC:"태환페소",UYU:"우루과이 페소",PHP:"필리핀 페소",XPT:"백금",GBP:"파운드스털링",BWP:"풀라",QAR:"카타르 리알",GTQ:"케찰",OMR:"리알 오마니",KHR:"리엘",MVR:"루피야",IDR:"루피아",RUB:"러시아 루블",RWF:"르완다 프랑",SHP:"세인트헬레나 파운드",SAR:"사우디아라비아 리얄",XDR:"SDR(특별인출권)",RSD:"세르비아 디나르",SCR:"세이셸 루피",XAG:"은",SGD:"싱가포르 달러",SBD:"솔로몬 제도 달러",KGS:"솜",SOS:"소말리아 실링",TJS:"소모니",ZAR:"남아프리카 공화국 랜드",LKR:"스리랑카 루피",XSU:"수크레",SDG:"수단 파운드",SRD:"수리남 달러",SEK:"스웨덴 크로나",CHF:"스위스 프랑",SYP:"시리아 파운드",BDT:"타카",WST:"탈라",TZS:"탄자니아 실링",KZT:"텡게",XXX:"통화 표시가 없는 거래에 대해 할당된 코드",TTD:"트리니나드토바고 달러",MNT:"투그리크",TND:"튀니지 디나르",TRY:"터키 리라",AED:"UAE 디르함",UGX:"우간다 실링",XFU:"UIC 프랑",COU:"UVR(Unidad de Valor Real)",CLF:"U.F.(Unidades de fomento)",UYI:"URUIURUI(Uruguay Peso en Unidades Indexadas)",USD:"미국 달러",USN:"미국 달러(다음 날)",USS:"미국 달러(같은 날)",UZS:"우즈베키스탄 숨",VUV:"바투",CHE:"WIR 유로",CHW:"WIR 프랑",KRW:"원",YER:"예멘 리알",JPY:"엔",CNY:"위안 인민폐",ZMK:"잠비아 콰차",ZWL:"짐바브웨 달러",PLN:"즐로티"},UCUM_Length:{"[fth_i]":"수심: fathom [fth_i]","[hd_i]":"말 높이: hand [hd_i]",Ao:"길이: Ångström Ao",AU:"길이: astronomic unit AU","[cicero]":"길이: cicero(Didot's pica) [cicero]","[didot]":"길이: didot(Didot's point) [didot]","[fth_us]":"길이: fathom [fth_us]","[fth_br]":"길이: fathom [fth_br]","[ft_i]":"길이: foot [ft_i]","[ft_us]":"길이: foot [ft_us]","[ft_br]":"길이: foot [ft_br]","[fur_us]":"길이: furlong [fur_us]","[ch_br]":"길이: Gunter's chain [ch_br]","[ch_us]":"길이: Gunter's chain(Surveyor's chain) [ch_us]","[in_i]":"길이: inch [in_i]","[in_us]":"길이: inch [in_us]","[in_br]":"길이: inch [in_br]","[ly]":"길이: light-year [ly]","[ligne]":"길이: ligne(French line) [ligne]","[lne]":"길이: line [lne]","[lk_us]":"길이: link for Gunter's chain [lk_us]","[lk_br]":"길이: link for Gunter's chain [lk_br]","[rlk_us]":"길이: link for Ramden's chain [rlk_us]",um:"길이: 마이크로미터(µm) um",mm:"길이: millimeter mm",cm:"길이: centimeter cm",m:"길이: meter m",km:"길이: kilometer km","[mil_i]":"길이: mil [mil_i]","[mil_us]":"길이: mil [mil_us]","[mi_us]":"길이: mile [mi_us]","[mi_br]":"길이: mile [mi_br]","[nmi_i]":"길이: nautical mile [nmi_i]","[nmi_br]":"길이: nautical mile [nmi_br]","[pc_br]":"길이: pace [pc_br]",pc:"길이: parsec pc","[pca]":"길이: pica [pca]","[pied]":"길이: pied(French foot) [pied]","[pnt]":"길이: point [pnt]","[pouce]":"길이: pouce(French inch) [pouce]","[pca_pr]":"길이: Printer's pica [pca_pr]","[pnt_pr]":"길이: Printer's point [pnt_pr]","[rch_us]":"길이: Ramden's chain(Engineer's chain) [rch_us]","[rd_us]":"길이: rod [rd_us]","[rd_br]":"길이: rod [rd_br]","[smoot]":"길이: Smoot [smoot]","[mi_i]":"길이: statute mile [mi_i]","[yd_i]":"길이: yard [yd_i]","[yd_us]":"길이: yard [yd_us]","[yd_br]":"길이: yard [yd_br]"},UCUM:{"[k]":"(분류되지 않음): Boltzmann constant [k]","[G]":"(분류되지 않음): Newtonian constant of gravitation [G]",Gal:"가속도: Gal Gal","[g]":"가속도: standard acceleration of free fall [g]","[pH]":"산성도: pH [pH]","[h]":"작업: Planck constant [h]",b:"행동 반경: barn b","[CFU]":"급증하는 생물체의 양: colony forming units [CFU]","[FFU]":"전염성 병원체의 양: immunofocus forming units [FFU]","[PFU]":"전염성 병원체의 양: plaque forming units [PFU]",bit_s:"정보의 양: bit bit_s",bit:"정보의 양: bit bit",By:"정보의 양: byte By",eq:"물질의 양: equivalents eq",mol:"물질의 양: mole mol",osm:"물질(용해 입자)의 양: osmole osm","[arb'U]":"임의: arbitary unit [arb'U]","[iU]":"임의: international unit [iU]","[USP'U]":"임의: United States Pharmacopeia unit [USP'U]","[knk'U]":"임의적 생물 활동: Kunkel unit [knk'U]","[mclg'U]":"임의적 생물 활동: Mac Lagan unit [mclg'U]","[acr_us]":"면적: acre [acr_us]","[acr_br]":"면적: acre [acr_br]",ar:"면적: are ar",har:"면적: hectare har","[cml_i]":"면적: circular mil [cml_i]","[sct]":"면적: section [sct]","[sft_i]":"면적: square foot [sft_i]","[sin_i]":"면적: square inch [sin_i]","[smi_us]":"면적: square mile [smi_us]","[srd_us]":"면적: square rod [srd_us]","[syd_i]":"면적: square yard [syd_i]","[twp]":"면적: township [twp]","[CCID_50]":"전염성 병원체의 생물 활동(전염성) 준비: 50% cell culture infectious dose [CCID_50]","[TCID_50]":"전염성 병원체의 생물 활동(전염성) 준비: 50% tissue culture infectious dose [TCID_50]","[todd'U]":"스트렙토리신항체(antistreptolysin) O의 생물 활동: Todd unit [todd'U]","[dye'U]":"아밀라아제의 생물 활동: Dye unit [dye'U]","[smgy'U]":"아밀라아제의 생물 활동: Somogyi unit [smgy'U]","[APL'U]":"안티카이디올리핀 IgA의 생물 활동: APL unit [APL'U]","[GPL'U]":"안티카이디올리핀 IgG의 생물 활동: GPL unit [GPL'U]","[MPL'U]":"안티카이디올리핀 IgM의 생물 활동: MPL unit [MPL'U]","[beth'U]":"생물학적 활성도 지수 VIII 인히비터: Bethesda unit [beth'U]","[bdsk'U]":"포스파타아제(phosphatase)의 생물 활동: Bodansky unit [bdsk'U]","[ka'U]":"포스파타아제(phosphatase)의 생물 활동: King-Armstrong unit [ka'U]","[tb'U]":"투베르쿨린(tuberculin)의 생물 활동: tuberculin unit [tb'U]",Lmb:"밝기: Lambert Lmb",kat:"촉매 활동: katal kat",U:"촉매 활동: Unit U","[fth_i]":"수심: fathom [fth_i]",REM:"선량 당량: radiation equivalent man REM",Sv:"선량 당량: Sievert Sv","[bu_us]":"건량: bushel [bu_us]","[dpt_us]":"건량: dry pint [dpt_us]","[dqt_us]":"건량: dry quart [dqt_us]","[gal_wi]":"건량: historical winchester gallon [gal_wi]","[pk_us]":"건량: peck [pk_us]",P:"동점성: Poise P",F:"전기 커패시턴스: Farad F",C:"전하: Coulomb C","[e]":"전하: elementary charge [e]",mho:"전기 전도도: mho mho",S:"전기 전도도: Siemens S",A:"전류: Ampre A",Bi:"전류: Biot Bi","[eps_0]":"전기 유전율: permittivity of vacuum [eps_0]",V:"전위: Volt V","B[uV]":"전위 레벨: bel microvolt B[uV]","B[mV]":"전위 레벨: bel millivolt B[mV]","B[V]":"전위 레벨: bel volt B[V]",Ohm:"전기 저항: Ohm Ohm","[Btu]":"에너지: British thermal unit [Btu]","[Btu_39]":"에너지: 39°F 영국 열량 단위 [Btu_39]","[Btu_59]":"에너지: 59°F 영국 열량 단위 [Btu_59]","[Btu_60]":"에너지: 60°F 영국 열량 단위 [Btu_60]",cal:"에너지: calorie cal","cal_[15]":"에너지: 15°C 칼로리 cal_[15]","cal_[20]":"에너지: 20°C 칼로리 cal_[20]",eV:"에너지: electronvolt eV",erg:"에너지: erg erg","[Btu_IT]":"에너지: international table British thermal unit [Btu_IT]",cal_IT:"에너지: international table calorie cal_IT",J:"에너지: Joule J","[Btu_m]":"에너지: mean British thermal unit [Btu_m]",cal_m:"에너지: mean calorie cal_m","[Cal]":"에너지: nutrition label Calories [Cal]","[Btu_th]":"에너지: thermochemical British thermal unit [Btu_th]",cal_th:"에너지: thermochemical calorie cal_th",Gy:"에너지 투여량: Gray Gy",RAD:"에너지 투여량: radiation absorbed dose RAD","[PRU]":"유체 저항: peripheral vascular resistance unit [PRU]","[bbl_us]":"유체 용량: barrel [bbl_us]","[crd_us]":"유체 용량: cord [crd_us]","[fdr_us]":"유체 용량: fluid dram [fdr_us]","[foz_us]":"유체 용량: fluid ounce [foz_us]","[gil_us]":"유체 용량: gill [gil_us]","[min_us]":"유체 용량: minim [min_us]","[pt_us]":"유체 용량: pint [pt_us]","[qt_us]":"유체 용량: quart [qt_us]","[gal_us]":"유체 용량: Queen Anne's wine gallon [gal_us]",Mx:"자기 유도 선속: Maxwell Mx",dyn:"힘: dyne dyn",gf:"힘: gram-force gf",N:"힘: Newton N","[lbf_av]":"힘: pound force [lbf_av]","[ppb]":"분수: parts per billion [ppb]","[ppm]":"분수: parts per million [ppm]","[ppth]":"분수: parts per thousand [ppth]","[pptr]":"분수: parts per trillion [pptr]","%":"분수: percent %",Hz:"주파수: Hertz Hz","[Ch]":"카테테르(catheters) 측정: Charrire (french) [Ch]","[hd_i]":"말 높이: hand [hd_i]","[hp_C]":"질량 농도(homeopathic potency): homeopathic potency of centesimal series [hp_C]","[hp_X]":"질량 농도(homeopathic potency): homeopathic potency of decimal series [hp_X]",lx:"조도: lux lx",ph:"조도: phot ph",H:"인덕턴스: Henry H",R:"이온 선량: Roentgen R",St:"동적 점성도: Stokes St",Ao:"길이: Ångström Ao",AU:"길이: astronomic unit AU","[cicero]":"길이: cicero(Didot's pica) [cicero]","[didot]":"길이: didot(Didot's point) [didot]","[fth_us]":"길이: fathom [fth_us]","[fth_br]":"길이: fathom [fth_br]","[ft_i]":"길이: foot [ft_i]","[ft_us]":"길이: foot [ft_us]","[ft_br]":"길이: foot [ft_br]","[fur_us]":"길이: furlong [fur_us]","[ch_br]":"길이: Gunter's chain [ch_br]","[ch_us]":"길이: Gunter's chain(Surveyor's chain) [ch_us]","[in_i]":"길이: inch [in_i]","[in_us]":"길이: inch [in_us]","[in_br]":"길이: inch [in_br]","[ly]":"길이: light-year [ly]","[ligne]":"길이: ligne(French line) [ligne]","[lne]":"길이: line [lne]","[lk_us]":"길이: link for Gunter's chain [lk_us]","[lk_br]":"길이: link for Gunter's chain [lk_br]","[rlk_us]":"길이: link for Ramden's chain [rlk_us]",um:"길이: 마이크로미터(µm) um",mm:"길이: millimeter mm",cm:"길이: centimeter cm",m:"길이: meter m",km:"길이: kilometer km","[mil_i]":"길이: mil [mil_i]","[mil_us]":"길이: mil [mil_us]","[mi_us]":"길이: mile [mi_us]","[mi_br]":"길이: mile [mi_br]","[nmi_i]":"길이: nautical mile [nmi_i]","[nmi_br]":"길이: nautical mile [nmi_br]","[pc_br]":"길이: pace [pc_br]",pc:"길이: parsec pc","[pca]":"길이: pica [pca]","[pied]":"길이: pied(French foot) [pied]","[pnt]":"길이: point [pnt]","[pouce]":"길이: pouce(French inch) [pouce]","[pca_pr]":"길이: Printer's pica [pca_pr]","[pnt_pr]":"길이: Printer's point [pnt_pr]","[rch_us]":"길이: Ramden's chain(Engineer's chain) [rch_us]","[rd_us]":"길이: rod [rd_us]","[rd_br]":"길이: rod [rd_br]","[smoot]":"길이: Smoot [smoot]","[mi_i]":"길이: statute mile [mi_i]","[yd_i]":"길이: yard [yd_i]","[yd_us]":"길이: yard [yd_us]","[yd_br]":"길이: yard [yd_br]",B:"레벨: bel B",Np:"레벨: neper Np",Ky:"lineic 숫자: Kayser Ky","[mesh_i]":"lineic 숫자: mesh [mesh_i]",sb:"lum. 강도 밀도: stilb sb",lm:"광속: lumen lm",cd:"광도: candela cd",Wb:"자속: Weber Wb",Oe:"자기장 강도: Oersted Oe",G:"자속 밀도: Gauss G",T:"자속 밀도: Tesla T","[mu_0]":"투자율: permeability of vacuum [mu_0]",Gb:"자기장력: Gilbert Gb","[dr_av]":"질량: dram [dr_av]","[dr_ap]":"질량: dram(drachm) [dr_ap]","[m_e]":"질량: electron mass [m_e]","[gr]":"질량: grain [gr]",ug:"질량: 마이크로그램(µg) ug",mg:"질량: milligram mg",g:"질량: gram g",kg:"질량: kilogram kg","[lcwt_av]":"질량: long hunderdweight(British hundredweight) [lcwt_av]","[ltom_av]":"질량: long ton(British ton) [lton_av]","[car_m]":"질량: metric carat [car_m]","[oz_av]":"질량: ounce [oz_av]","[oz_tr]":"질량: ounce [oz_tr]","[oz_ap]":"질량: ounce [oz_ap]","[pwt_tr]":"질량: pennyweight [pwt_tr]","[lb_av]":"질량: pound [lb_av]","[lb_tr]":"질량: pound [lb_tr]","[lb_ap]":"질량: pound [lb_ap]","[m_p]":"질량: proton mass [m_p]","[sc_ap]":"질량: scruple [sc_ap]","[scwt_av]":"질량: short hundredweight(U.S. hundredweight) [scwt_av]","[ston_av]":"질량: short ton (U.S. ton) [ston_av]","[stone_av]":"질량: stone (British stone) [stone_av]",t:"질량: tonne t",u:"질량: unified atomic mass unit u","g%":"질량 농도: gram percent g%","[car_Au]":"질량 일부: carat of gold alloys [car_Au]","[MET]":"신체 활동의 대사당량: metabolic equivalent [MET]","[pi]":"숫자: the number pi [pi]","10*":"숫자: the number ten for arbitrary powers 10*","10^":"숫자: the number ten for arbitrary powers 10^",circ:"평면 각: circle circ",deg:"평면 각: degree deg",gon:"평면 각: gon (grade) gon","'":"평면 각: minute '",rad:"평면 각: radian rad",'"':'평면 각: second "',"[HP]":"전력: horsepower [HP]",W:"전력: Watt W","B[kW]":"전력 레벨: bel kilowatt B[kW]","B[W]":"전력 레벨: bel watt B[W]",bar:"압력: bar bar","[in_i'Hg]":"압력: inch of mercury column [in_i'Hg]","[in_i'H2O]":"압력: inch of water column [in_i'H2O]","m[Hg]":"압력: meter of mercury column m[Hg]","m[H2O]":"압력: meter of water column m[H2O]",Pa:"압력: Pascal Pa","[psi]":"압력: pound per sqare inch [psi]",atm:"압력: standard atmosphere atm",att:"압력: technical atmosphere att","B[SPL]":"압력 레벨: bel sound pressure B[SPL]",Bq:"방사능 활성도: Becquerel Bq",Ci:"방사능 활성도: Curie Ci","[diop]":"렌즈의 굴절: diopter [diop]","[p'diop]":"프리즘 굴절: prism diopter [p'diop]","[S]":"침강 계수: Svedberg unit [S]",Bd:"신호 전송 속도: baud Bd","%[slope]":"경사: percent of slope %[slope]",sph:"입체각: spere sph",sr:"입체각: steradian sr",Cel:"온도: degree Celsius Cel","[degF]":"온도: degree Fahrenheit [degF]",K:"온도: Kelvin K",d:"시간: day d",h:"시간: hour h",mo_g:"시간: mean Gregorian month mo_g",a_g:"시간: mean Gregorian year a_g",mo_j:"시간: mean Julian month mo_j",a_j:"시간: mean Julian year a_j",min:"시간: minute min",mo:"시간: month mo",s:"시간: second s",mo_s:"시간: synodal month mo_s",a_t:"시간: tropical year a_t",wk:"시간: week wk",a:"시간: year a","[kn_i]":"속도: knot [kn_i]","[kn_br]":"속도: knot [kn_br]","[c]":"속도: velocity of light [c]","[HPF]":"현미경의 뷰 영역: high power field [HPF]","[LPF]":"현미경의 뷰 영역: low power field [LPF]","[bf_i]":"용량: board foot [bf_i]","[bu_br]":"용량: bushel [bu_br]","[cr_i]":"용량: cord [cr_i]","[cft_i]":"용량: cubic foot [cft_i]","[cin_i]":"용량: cubic inch [cin_i]","[cyd_i]":"용량: cubic yard [cyd_i]","[cup_us]":"용량: cup [cup_us]","[drp]":"용량: drop [drp]","[fdr_br]":"용량: fluid dram [fdr_br]","[foz_br]":"용량: fluid ounce [foz_br]","[gal_br]":"용량: gallon [gal_br]","[gil_br]":"용량: gill [gil_br]",l:"용량: liter l",L:"용량: liter l","[min_br]":"용량: minim [min_br]","[pk_br]":"용량: peck [pk_br]","[pt_br]":"용량: pint [pt_br]","[qt_br]":"용량: quart [qt_br]",st:"용량: stere st","[tbs_us]":"용량: tablespoon [tbs_us]","[tsp_us]":"용량: teaspoon [tsp_us]","[hnsf'U]":"x-ray 감쇠: Hounsfield unit [hnsf'U]"},DCPList:{"001":"XML","002":"CORBA","003":"JAVA","004":"COM","005":"SQL","006":"웹 서비스"},SV_ParameterDirection:{"001":"in","002":"out","003":"in/out"},MD_DatatypeCode:{"001":"클래스","002":"코드 목록","003":"열거","004":"코드 목록 요소","005":"추상 클래스","006":"집계 클래스","007":"지정된 클래스","008":"데이터 유형 클래스","009":"인터페이스 클래스","010":"유니온 클래스","011":"메타 클래스","012":"유형 클래스","013":"문자열","014":"정수","015":"연결"},MD_ObligationCode:{"001":"필수","002":"옵션","003":"조건>"},GeometryTypeCode:{0:"Null",1:"포인트",2:"멀티포인트",3:"폴리라인",4:"폴리곤",5:"엔빌롭",6:"경로",7:"일부",9:"멀티패치",11:"링",13:"라인",14:"원형 호",15:"베지어 3 곡선",16:"타원형 호",17:"자루",18:"삼각형 스트립",19:"삼각형 팬",20:"광선",21:"구",22:"삼각형"},RS_UseLimitations:{"001":"접근 및 사용 조건 없음","002":"접근 및 사용 조건을 알 수 없음"},RS_AccessConstraints:{"001":"공개 접근에 제한 없음","002":"INSPIRE Directive의 13(1)(a)조에 따라 공용 접근이 제한됨","003":"INSPIRE Directive의 13(1)(b)조에 따라 공용 접근이 제한됨","004":"INSPIRE Directive의 13(1)(c)조에 따라 공용 접근이 제한됨","005":"INSPIRE Directive의 13(1)(d)조에 따라 공용 접근이 제한됨","006":"INSPIRE Directive의 13(1)(e)조에 따라 공용 접근이 제한됨","007":"INSPIRE Directive의 13(1)(f)조에 따라 공용 접근이 제한됨","008":"INSPIRE Directive의 13(1)(g)조에 따라 공용 접근이 제한됨","009":"INSPIRE Directive의 13(1)(h)조에 따라 공용 접근이 제한됨"}});