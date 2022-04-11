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

define({general:{cancel:"İptal",close:"Kapat",none:"Hiçbiri",ok:"Tamam",other:"Diğer",stamp:"Damga",now:"Şimdi",choose:"Birini Seçin:"},editor:{noMetadata:"Bu öğe için meta veri yok.",xmlViewOnly:"Bu öğeyle ilişkilendirilen meta veri türü düzenleyici tarafından desteklenmiyor. Meta veri ArcGIS biçiminde olmalıdır.",editorDialog:{caption:"Meta veriler",captionPattern:"{title} için meta veri"},primaryToolbar:{view:"Görüntüle",viewXml:"XML Görüntüle",edit:"Düzenle",initializing:"Yükleniyor...",startingEditor:"Düzenleyici başlatılıyor...",loadingDocument:"Belge yükleniyor...",updatingDocument:"Belge güncelleniyor...",generatingView:"Görünüm oluşturuluyor...",errors:{errorGeneratingView:"Görünüm oluşturulurken bir hata oluştu.",errorLoadingDocument:"Belge yüklenirken bir hata oluştu."}},changesNotSaved:{prompt:"Belgenizde henüz kaydedilmemiş değişiklikler var.",dialogTitle:"Meta Veri Düzenleyiciyi Kapat",closeButton:"Kapat"},download:{caption:"Yükle",dialogTitle:"Yükle",prompt:"Dosyanızı indirmek için buraya tıklayın."},load:{caption:"Aç",dialogTitle:"Aç",typeTab:"Yeni Belge",fileTab:"Dosya Aç",templateTab:"Şablon",itemTab:"Öğeniz",filePrompt:"Yerel bir ArcGIS Meta Veri XML dosyası seçin: Meta veri ArcGIS biçiminde olmalıdır.",templatePrompt:"Meta Veri Oluştur",pullItem:"Meta verileri öğe ayrıntılarıyla doldurun.",importWarning:"Seçili dosya ArcGIS biçiminde görünmüyor. Karşıya yüklenen meta veri ArcGIS biçiminde olmalıdır.",loading:"Yükleniyor...",noMetadata:"Aşağıdaki seçeneklerden biri belirlenerek bu öğe için meta veri oluşturulabilir.",unrecognizedMetadata:"Bu öğeyle ilişkilendirilen meta veri türü düzenleyici tarafından desteklenmiyor. Aşağıdaki seçeneklerden biri belirlenerek desteklenen meta veriler oluşturulabilir.",errorLoading:"Yükleme sırasında hata oluştu.",warnings:{badFile:"Seçilen dosya yüklenemedi.",notAnXml:"Seçilen dosya bir XML dosyası değil.",notSupported:"Bu dosya türü desteklenmiyor."},portalCaption:"Üstüne Yaz"},save:{caption:"Kaydet",dialogTitle:"Meta Verileri Kaydet",working:"Meta veriler kaydediliyor...",errorSaving:"Hata oluştu, meta verileriniz kaydedilmedi.",saveDialog:{pushCaption:"Değişiklikleri öğenize uygulayın"}},saveAndClose:{caption:"Kaydet ve Kapat"},saveDraft:{caption:"İndir",dialogTitle:"İndir"},validate:{caption:"Doğrula",dialogTitle:"Doğrulama",docIsValid:"Belgeniz geçerli."},viewHtml:{caption:"Görünüm",dialogTitle:"Meta Veriyi Görüntüle",savePrompt:"Belgenizde kaydedilmemiş değişiklikler var. Meta verileri görüntülerken bunları da görmek için değişiklikleri kaydetmelisiniz.",saveButton:"Kaydet ve Görüntüle",portalNone:"Standartlara dayalı meta veriler yazılmadı. Meta verileri görüntüleyebilmek için önce kaydetmeniz gerekir."},del:{caption:"Sil",dialogTitle:"Meta Verileri Sil",prompt:"Bu meta verileri silmek istediğinizden emin misiniz?",working:"Meta veriler siliniyor...",errorDeleting:"Hata oluştu, meta verileriniz silinmedi.",portalNone:"Silinecek meta veri belgesi yok. Standartlara dayalı meta veriler yazılmadı.",portalPrompt:"Bu, meta veri belgesini siler ve bu öğenin meta verilerini Başlık, Açıklama vb. gibi öğe bilgilerine göre sıfırlar.",portalPrompt2:"Bu standartlara dayalı meta verileri siler. Bu meta verileri silmek istediğinizden emin misiniz?",portalButton:"Sil ve Kapat"},transform:{caption:"Dönüşüm",dialogTitle:"Dönüştür",prompt:"",working:"Dönüştürülüyor...",errorTransforming:"Belgeniz dönüştürülürken bir hata oluştu."},errorDialog:{dialogTitle:"Hata oluştu"}},arcgis:{portal:{metadataButton:{caption:"Meta veriler"}}},calendar:{button:"Takvim...",title:"Takvim"},geoExtent:{button:"Coğrafi Yayılımı Ayarla...",title:"Coğrafi Yayılım",navigate:"Gezinti",draw:"Dikdörtgen Çiz",drawHint:"Başlatmak için basın ve bitirmek için bırakın."},hints:{date:"(yyyy veya yyyy-mm veya yyyy-mm-dd)",dateTime:"(yyyy-mm-ddThh:mm:ss.sss[+-]hh:mm)",dateOrDateTime:"(yyyy veya yyyy-mm veya yyyy-mm-dd veya yyyy-mm-ddThh:mm:ss.sss[+-]hh:mm)",delimitedTextArea:"(ayırmak için virgül ya da yeni satır kullan)",fgdcDate:"(yyyy veya yyyy-mm veya yyyy-mm-dd)",fgdcTime:"(hh:mm:ss.sss[+-]hh:mm)",integer:"(tamsayı gir)",latitude:"(ondalık derece)",longitude:"(ondalık derece)",number:"(sayı gir)",numberGreaterThanZero:"(0'dan büyük sayı gir)"},isoTopicCategoryCode:{caption:"Başlık Kategorisi",boundaries:"Yönetsel ve Siyasi Sınırlar",farming:"Tarım ve Çiftçilik",climatologyMeteorologyAtmosphere:"Atmosfer ve İklimbilim",biota:"Biyoloji ve Ekoloji",economy:"İş ve Ekonomi",planningCadastre:"Kadastro",society:"Kültür, Toplum ve Demografi",elevation:"Yükselti Ürünleri ve Türetilmiş Ürünler",environment:"Çevre ve Koruma",structure:"Tesisler ve Yapılar",geoscientificInformation:"Jeolojik ve Jeofiziksel",health:"İnsan Sağlığı ve Hastalık",imageryBaseMapsEarthCover:"Görüntülü ve Altlık Haritalar",inlandWaters:"İç Arazi Su Kaynakları",location:"Konumlar ve Jeodezik Ağlar",intelligenceMilitary:"Askeri",oceans:"Okyanuslar ve Haliçler",transportation:"Taşımacılık Ağı",utilitiesCommunication:"Altyapı ve İletişim"},multiplicity:{moveElementDown:"Bölümü Aşağı Taşı",moveElementUp:"Bölümü Yukarı Taşı",removeElement:"Bölümü Kaldır",repeatElement:"Bölümü Tekrarla"},optionalNode:{switchTip:"Bu bölümü ekleyin veya çıkarın."},serviceTypes:{featureService:"Detay Servisi",mapService:"Harita Servisi",imageService:"Görüntü Servisi",wms:"WMS",wfs:"WFS",wcs:"WCS"},validation:{pattern:"{label} - {message}",patternWithHint:"{label} - {message} {hint}",ok:"Tamam",empty:"Değer gereklidir.",date:"Değer bir tarih olmalıdır.",integer:"Değer bir tamsayı olmalıdır.",number:"Değer bir sayı olmalıdır.",other:"Geçersiz değer."},validationPane:{clearMessages:"İletileri Temizle",prompt:"(aşağıdaki her mesaja tıklayın ve belirtilen alana gerekli bilgileri girin)"}});