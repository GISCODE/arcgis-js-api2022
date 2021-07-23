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
// See http://js.arcgis.com/3.37/esri/copyright.txt for details.

define({documentTypes:{fgdc:{caption:"FGDC",description:""}},alternates:{none:"Κανένα",notComplete:"Μη ολοκληρωμένο",other:"Άλλο",present:"Παρουσίαση",unknown:"Άγνωστο",unpublishedMaterial:"Αδημοσίευτο υλικό"},hints:{integerGreaterThanOne:"(εισαγάγετε έναν ακέραιο > 1)",integer0To100:"(εισαγάγετε έναν ακέραιο 0..100)"},citeinfo:{caption:"Πληροφορίες παραπομπής",origin:"Δημιουργός",pubdate:"Ημ/νία δημοσίευσης",pubtime:"Ώρα δημοσίευσης",title:"Τίτλος",edition:"Έκδοση",geoform:{caption:"Φόρμα παρουσίασης γεωχωρικών δεδομένων",atlas:"Άτλας",audio:"Ήχος",diagram:"Διάγραμμα",sDocument:"Έγγραφο",globe:"Υδρόγειος",map:"Χάρτης",model:"Μοντέλο",multiMediaPresentation:"Παρουσίαση πολυμέσων",profile:"Προφίλ",rasterDigitalData:"Πλεγματικά ψηφιακά δεδομένα",remoteSensingImage:"Εικόνα τηλεπισκόπησης",section:"Ενότητα",spreadsheet:"Υπολογιστικό φύλλο",tabularDigitalData:"Πινακοειδή ψηφιακά δεδομένα",vectorDigitalData:"Διανυσματικά ψηφιακά δεδομένα",video:"Βίντεο",view:"Προβολή"},serinfo:{caption:"Πληροφορίες σειράς δεδομένων",sername:"Όνομα σειράς δεδομένων",issue:"Αναγνωριστικό τεύχους"},pubinfo:{caption:"Πληροφορίες δημοσίευσης",pubplace:"Τόπος δημοσίευσης",publish:"Εκδότης"},othercit:"Άλλες λεπτομέρειες παραπομπής",onlink:"Online σύνδεσμος (URL)"},cntinfo:{caption:"Στοιχεία επικοινωνίας",section:{primary:"Κύρια",phoneAndEmail:"Τηλέφωνο και e-mail",hoursAndInstructions:"Ώρες και οδηγίες"},cntorgp:{caption:"Ανά οργανισμό",cntorg:"Οργανισμός",cntper:"Άτομο"},cntperp:{caption:"Ανά άτομο",cntper:"Άτομο",cntorg:"Οργανισμός"},cntpos:"Θέση",cntaddr:{caption:"Διεύθυνση",addrtype:{caption:"Τύπος διεύθυνσης",mailing:"Αλληλογραφία",physical:"Φυσική παρουσία",mailingAndPhysical:"Αλληλογραφία και φυσική παρουσία"},address:"Διεύθυνση",city:"Πόλη",state:"Πολιτεία",postal:"Ταχυδρομικός κώδικας",country:"Χώρα"},cntvoice:"Φωνή",cnttdd:"TDD/TTY Τηλεφωνία (για άτομα με προβλήματα ακοής)",cntfax:"Φαξ",cntemail:"E-mail διεύθυνση",hours:"Ώρες",cntinst:"Οδηγίες"},dataqual:{caption:"Πληροφορίες για την ποιότητα των δεδομένων",section:{attributeAccuracy:"Ακρίβεια γνωρίσματος",logicalConsistency:"Λογική συνέπεια",completeness:"Πληρότητα",positionalAccuracy:"Ακρίβεια θέσης",lineage:"Προέλευση",cloudCover:"Κάλυψη στο cloud"},attracc:{caption:"Ακρίβεια γνωρίσματος",attraccr:"Αναφορά ακρίβειας του γνωρίσματος",qattracc:{caption:"Ποσοτική αξιολόγηση ακρίβειας του γνωρίσματος",attraccv:"Τιμή ακρίβειας του γνωρίσματος",attracce:"Εξήγηση ακρίβειας του γνωρίσματος"}},logic:"Αναφορά λογικής συνέπειας",complete:"Αναφορά πληρότητας",posacc:"Ακρίβεια θέσης",horizpa:{caption:"Οριζόντια ακρίβεια θέσης",horizpar:"Αναφορά οριζόντιας ακρίβειας της θέσης",qhorizpa:{caption:"Ποσοτική αξιολόγηση οριζόντιας ακρίβειας της θέσης",horizpav:"Τιμή οριζόντιας ακρίβειας της θέσης",horizpae:"Εξήγηση οριζόντιας ακρίβειας της θέσης"}},vertacc:{caption:"Κατακόρυφη ακρίβεια θέσης",vertaccr:"Αναφορά κατακόρυφης ακρίβειας της θέσης",qvertpa:{caption:"Ποσοτική αξιολόγηση κατακόρυφης ακρίβειας της θέσης",vertaccv:"Τιμή κατακόρυφης ακρίβειας της θέσης",vertacce:"Εξήγηση κατακόρυφης ακρίβειας της θέσης"}},lineage:{caption:"Προέλευση"},srcinfo:{caption:"Πληροφορίες πηγής",srccite:"Παραπομπή πηγής",srcscale:"Παρονομαστής κλίμακας πηγής",typesrc:{caption:"Τύπος πολυμέσων πηγής",paper:"Χαρτί",stableBaseMaterial:"Υλικό σταθερής βάσης",microfiche:"Μικροδιαφάνεια",microfilm:"Μικροφίλμ",audiocassette:"Κασέτα ήχου",chart:"Γράφημα",filmstrip:"Ταινία φιλμ",transparency:"Διαφάνεια",videocassette:"Βιντεοκασέτα",videodisc:"Βιντεοδίσκος",videotape:"Βιντεοταινία",physicalModel:"Φυσικό μοντέλο",computerProgram:"Πρόγραμμα υπολογιστή",disc:"Δίσκος",cartridgeTape:"Κασέτα",magneticTape:"Μαγνητική ταινία",online:"Online",cdrom:"CD-ROM",electronicBulletinBoard:"Ηλεκτρονικός πίνακας ανακοινώσεων",electronicMailSystem:"Σύστημα ηλεκτρονικού ταχυδρομείου"},srctime:"Χρονική περίοδος περιεχομένου πηγής",srccurr:"Αναφορά επικαιρότητας πηγής",srccitea:"Συντομογραφία παραπομπής πηγής",srccontr:"Συμβολή πηγής"},procstep:{caption:"Βήμα επεξεργασίας",procdesc:"Περιγραφή επεξεργασίας",srcused:"Συντομογραφία της χρησιμοποιηθείσας παραπομπής της πηγής",procdate:"Ημ/νία επεξεργασίας",proctime:"Ώρα επεξεργασίας",srcprod:"Συντομογραφία της παραγόμενης παραπομπής της πηγής",proccont:"Αρμόδιος επικοινωνίας της επεξεργασίας"},cloud:"Κάλυψη στο cloud"},distinfo:{caption:"Πληροφορίες διανομής",section:{distributor:"Διανομέας",description:"Περιγραφή",orderProcess:"Επεξεργασία εντολής",prerequisites:"Προαπαιτούμενα",availability:"Διαθεσιμότητα"},distrib:"Διανομέας",resdesc:{caption:"Περιγραφή πόρου",liveData:"Δεδομένα και χάρτες πραγματικού χρόνου",downloadableData:"Δεδομένα λήψης",offlineData:"Δεδομένα εκτός σύνδεσης",staticMapImages:"Στατικές εικόνες χάρτη",sDocument:"Άλλα έγγραφα",application:"Εφαρμογές",geographicService:"Γεωγραφικές υπηρεσίες",clearingHouse:"Μηχανισμοί διεκπεραίωσης",mapFiles:"Αρχεία χαρτών",geographicActivies:"Γεωγραφικές δραστηριότητες"},distliab:"Δήλωση ευθύνης διανομής",custom:"Διαδικασία προσαρμοσμένης παραγγελίας",techpreq:"Τεχνικά προαπαιτούμενα",availabl:"Διαθεσιμότητα"},eainfo:{caption:"Πληροφορίες οντοτήτων και γνωρισμάτων",overview:"Περιγραφή επισκόπησης",eaover:"Επισκόπηση οντοτήτων και γνωρισμάτων",eadetcit:"Αναλυτική παραπομπή οντότητας και γνωρίσματος"},idinfo:{caption:"Πληροφορίες αναγνώρισης",section:{timeAndStatus:"Ώρα και κατάσταση",constraints:"Περιορισμοί",contact:"Επικοινωνία",additional:"Πρόσθετα"},citeinfo:"Παραπομπή",descript:{caption:"Περιγραφή",sAbstract:"Περίληψη",purpose:"Σκοπός",supplinf:"Συμπληρωματικές πληροφορίες"},timeperd:{caption:"Χρονική περίοδος περιεχομένου",current:{caption:"Αναφορά επικαιρότητας",groundCondition:"Βασική συνθήκη",publicationDate:"Ημ/νία δημοσίευσης"}},status:{caption:"Κατάσταση",progress:{caption:"Πρόοδος",complete:"Ολοκληρώθηκε",inWork:"Σε εξέλιξη",planned:"Προγραμματίστηκε"},update:{caption:"Συχνότητα συντήρησης και ενημέρωσης",continual:"Συνεχώς",daily:"Καθημερινά",weekly:"Εβδομαδιαία",monthly:"Μηνιαία",annually:"Ετησίως",unknown:"Άγνωστο",asNeeded:"Όταν χρειάζεται",irregular:"Μη τακτικά",nonePlanned:"Μη προγραμματισμένα"}},spdom:{caption:"Έκταση",bounding:{caption:"Γεωγραφικές συντεταγμένες περιγράμματος",westbc:"Γεωγρ. Μήκος δυτικού ορίου",eastbc:"Γεωγρ. μήκος ανατολικού ορίου",northbc:"Γεωγρ. πλάτος βορείου ορίου",southbc:"Γεωγρ. πλάτος νοτίου ορίου"}},keywords:{caption:"Λέξεις-κλειδιά",theme:"Θέμα",place:"Τόπος",stratum:"Επίπεδο",temporal:"Χρόνος",thesaursus:"Συσχετιζόμενος θησαυρός",delimited:"Λέξεις-κλειδιά",themektIsoTopicCategory:"Θέμα ISO...",themektIsoTopicDialog:"Θέμα ISO",placektGnis:"Σύστημα πληροφοριών γεωγραφικών ονομάτων"},accconst:"Περιορισμοί πρόσβασης",useconst:"Περιορισμοί χρήσης",ptcontac:"Αρμόδιος επικοινωνίας για τον πόρο",browse:{caption:"Αναζήτηση γραφικού",browsen:"Αναζήτηση URL γραφικού",browsed:"Αναζήτηση περιγραφής του αρχείου γραφικού",browset:"Αναζήτηση τύπου αρχείου του γραφικού"},datacred:"Συντελεστής συνόλου δεδομένων",secinfo:{caption:"Πληροφορίες ασφάλειας",secsys:"Σύστημα διαβαθμισμένης ασφάλειας",secclass:{caption:"Διαβάθμιση ασφάλειας",topSecret:"Άκρως απόρρητο",secret:"Απόρρητο",confidential:"Εμπιστευτικό",restricted:"Περιορισμένο",unclassified:"Μη εξουσιοδοτημένο",sensitive:"Ευαίσθητο"},sechandl:"Περιγραφή χειρισμού ασφάλειας"},sNative:"Εγγενές περιβάλλον συνόλου δεδομένων",crossref:"Παραπομπή"},metadata:{idinfo:"Αναγνώριση",dataqual:"Ποιότητα",spdoinfo:"Οργανισμός χωρικών δεδομένων",spref:"Χωρική αναφορά",eainfo:"Οντότητα και γνώρισμα",distinfo:"Διανομή",metainfo:"Μεταδεδομένα"},metainfo:{caption:"Πληροφορίες μεταδεδομένων",section:{dates:"Ημ/νίες μεταδεδομένων",contact:"Αρμόδιος επικοινωνίας μεταδεδομένων",standard:"Τυπικά μεταδεδομένα",additional:"Πρόσθετα"},metd:"Ημ/νία μεταδεδομένων",metrd:"Ημ/νία αναθεώρησης μεταδεδομένων",metfrd:"Ημ/νία μελλοντικής αναθεώρησης μεταδεδομένων",metstdn:"Τυπικό όνομα μεταδεδομένων",metstdv:"Τυπική έκδοση μεταδεδομένων",metac:"Περιορισμοί πρόσβασης σε μεταδεδομένα",metuc:"Περιορισμοί χρήσης μεταδεδομένων",metsi:{caption:"Πληροφορίες ασφάλειας μεταδεδομένων",metscs:"Σύστημα διαβαθμισμένης ασφάλειας μεταδεδομένων",metsc:"Διαβάθμιση ασφάλειας μεταδεδομένων",metshd:"Περιγραφή χειρισμού ασφάλειας μεταδεδομένων"}},spref:{caption:"Πληροφορίες χωρικής αναφοράς",horizsys:{caption:"Οριζόντιο σύστημα συντεταγμένων",geograph:{caption:"Γεωγραφικό",latres:"Ανάλυση γεωγραφικού πλάτους",longres:"Ανάλυση γεωγραφικού μήκους",geogunit:{caption:"Μονάδες γεωγραφικών συντεταγμένων",decimalDegrees:"Δεκαδικές μοίρες",decimalMinutes:"Δεκαδικά λεπτά",decimalSeconds:"Δεκαδικά δευτερόλεπτα",degreesAndDecimalMinutes:"Μοίρες και δεκαδικά λεπτά",degreesMinutesAndDecimalSeconds:"Μοίρες, λεπτά και δεκαδικά δευτερόλεπτα",radians:"Ακτίνια",grads:"Βαθμοί"}},planar:{caption:"Μετρικό"},local:{caption:"Τοπικό επίπεδο",localdes:"Τοπική περιγραφή",localgeo:"Πληροφορίες τοπικής γεωαναφοράς"},geodetic:{caption:"Γεωδαιτικό μοντέλο",horizdn:{caption:"Όνομα οριζόντιου datum",nad83:"North American Datum of 1983",nad27:"North American Datum of 1927"},ellips:{caption:"Όνομα ελλειψοειδούς",grs80:"Geodetic Reference System 80",clarke1866:"Clarke 1866"},semiaxis:"Μεγάλος ημιάξονας",denflat:"Παρονομαστής αναλογίας επιπεδοποίησης"}},vertdef:{caption:"Κατακόρυφο σύστημα συντεταγμένων",altsys:{caption:"Υψομετρικό σύστημα",altdatum:{caption:"Όνομα υψομετρικού datum",navd88:"North American Vertical Datum of 1988",ngvd29:"National Geodetic Vertical Datum of 1929"},altres:"Ανάλυση υψομέτρου",altunits:{caption:"Μονάδες υψομετρικής απόστασης",meters:"Μέτρα",feet:"Πόδια"},altenc:{caption:"Μέθοδος κωδικοποίησης υψομέτρου",explicit:"Δηλωμένη συντεταγμένη υψομέτρου που περιλαμβάνεται στις οριζόντιες συντεταγμένες",implicit:"Αδήλωτη συντεταγμένη",attribute:"Τιμές γνωρισμάτων"}},depthsys:{caption:"Βυθομετρικό σύστημα",depthdn:{caption:"Όνομα βυθομετρικού datum",option1:"Τοπική επιφάνεια",option2:"Datum διαγράμματος, datum για τη μείωση των βολισμάτων",option3:"Κατώτατη αστρονομική παλίρροια",option4:"Ανώτατη αστρονομική παλίρροια",option5:"Μέση ρηχία",option6:"Μέση πλήμμη",option7:"Μέση στάθμη της θάλασσας",option8:"Τοπογραφικό datum",option9:"Μέση ρηχία συζυγιών",option10:"Μέση πλήμμη συζυγιών",option11:"Μέση ρηχία τετραγωνισμών",option12:"Μέση πλήμμη τετραγωνισμών",option13:"Μέση κατώτερη ρηχία",option14:"Μέση κατώτερη ρηχία συζυγιών",option15:"Μέση ανώτερη πλήμμη",option16:"Μέση ανώτερη ρηχία",option17:"Μέση κατώτερη πλήμμη",option18:"Παλίρροια συζυγιών",option19:"Τροπική κατώτερη ρηχία",option20:"Παλίρροια τετραγωνισμών",option21:"Πλήμμη",option22:"Ανώτερη πλήμμη",option23:"Ρηχία",option24:"Datum ρηχίας",option25:"Κατώτατη ρηχία",option26:"Κατώτερη ρηχία",option27:"Κατώτατη συνήθης ρηχία",option28:"Μέση στάθμη παλίρροιας",option29:"Ρηχία συζυγιών Ειρηνικού (Indian)",option30:"Πλήρης στάθμη και φορτίο πλήμμης",option31:"Πλήρης στάθμη και φορτίο ρηχίας",option32:"Datum στον ποταμό Κολούμπια",option33:"Datum ρηχίας στις ακτές του Κόλπου των ΗΠΑ (Gulf Coast)",option34:"Ρηχία συζυγιών στο επίπεδο του Ισημερινού (Equatorial)",option35:"Κατά προσέγγιση κατώτατη αστρονομική παλίρροια",option36:"Χωρίς διόρθωση"},depthres:"Ανάλυση βάθους",depthdu:{caption:"Μονάδες βυθομετρικής απόστασης",meters:"Μέτρα",feet:"Πόδια"},depthem:{caption:"Μέθοδος κωδικοποίησης βάθους",explicit:"Δηλωμένη συντεταγμένη βάθους που περιλαμβάνεται στις οριζόντιες συντεταγμένες",implicit:"Αδήλωτη συντεταγμένη",attribute:"Τιμές γνωρισμάτων"}}}},timeinfo:{caption:"Πληροφορίες χρονικής περιόδου",sngdate:"Απλή ημερομηνία",mdattim:"Πολλαπλές ημερομηνίες",rngdates:"Εύρος ημερομηνιών",caldate:"Ημερομηνία",time:"Ώρα",begdate:"Ημ/νία έναρξης",begtime:"Ώρα έναρξης",enddate:"Ημ/νία λήξης",endtime:"Ώρα λήξης"}});