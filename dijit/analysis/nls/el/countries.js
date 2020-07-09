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

define({countryCodes:{WORLD:"Κόσμος",AD:"Ανδόρα",AE:"Ηνωμένα Αραβικά Εμιράτα",AF:"Αφγανιστάν",AG:"Αντίγκουα και Μπαρμπούντα",AI:"Ανγκουίλα",AL:"Αλβανία",AM:"Αρμενία",AO:"Ανγκόλα",AQ:"Ανταρκτική",AR:"Αργεντινή",AS:"Αμερικανική Σαμόα",AT:"Αυστρία",AU:"Αυστραλία",AW:"Αρούμπα",AZ:"Αζερμπαϊτζάν",BA:"Βοσνία και Ερζεγοβίνη",BB:"Μπαρμπάντος",BD:"Μπαγκλαντές",BE:"Βέλγιο",BF:"Μπουρκίνα Φάσο",BG:"Βουλγαρία",BH:"Μπαχρέιν",BI:"Μπουρουντί",BJ:"Μπενίν",BL:"Άγιος Βαρθολομαίος",BM:"Βερμούδες",BN:"Μπρουνέι Νταρουσαλάμ",BO:"Πολυεθνικό κράτος της Βολιβίας",BQ:"Μποναίρ, Άγιος Ευστάθιος και Σάμπα",BR:"Βραζιλία",BS:"Μπαχάμες",BT:"Μπουτάν",BV:"Νήσος Μπουβέ",BW:"Μποτσουάνα",BY:"Λευκορωσία",BZ:"Μπελίζ",CA:"Καναδάς",CD:"Λαϊκή Δημοκρατία του Κονγκό",CF:"Κεντροαφρικανική Δημοκρατία",CG:"Κονγκό",CH:"Ελβετία",CI:"Ακτή Ελεφαντοστού",CK:"Νήσοι Κουκ",CL:"Χιλή",CM:"Καμερούν",CN:"Κίνα",CO:"Κολομβία",CR:"Κόστα Ρίκα",CU:"Κούβα",CV:"Πράσινο Ακρωτήρι",CW:"Κουρασάο",CY:"Κύπρος",CZ:"Δημοκρατία της Τσεχίας",DE:"Γερμανία",DJ:"Τζιμπουτί",DK:"Δανία",DM:"Ντομίνικα",DO:"Δομινικανή Δημοκρατία",DZ:"Αλγερία",EC:"Εκουαδόρ",EE:"Εσθονία",EG:"Αίγυπτος",EH:"Δυτική Σαχάρα",ER:"Ερυθραία",ES:"Ισπανία",ET:"Αιθιοπία",FI:"Φινλανδία",FJ:"Φίτζι",FK:"Νήσοι Φώκλαντ (Μαλβίνας)",FM:"Ομόσπονδες Πολιτείες της Μικρονησίας",FO:"Νήσοι Φερόες",FR:"Γαλλία",GA:"Γκαμπόν",GB:"Ηνωμένο Βασίλειο",GD:"Γρενάδα",GE:"Γεωργία",GF:"Γαλλική Γουιάνα",GG:"Γκέρνσεϊ",GH:"Γκάνα",GI:"Γιβραλτάρ",GL:"Γροιλανδία",GM:"Γκάμπια",GN:"Γουινέα",GP:"Γουαδελούπη",GQ:"Ισημερινή Γουινέα",GR:"Ελλάδα",GS:"Νότια Γεωργία και Νότιοι νήσοι Σάντουιτς",GT:"Γουατεμάλα",GW:"Γουινέα-Μπισάου",GY:"Γουιάνα",HK:"Χονγκ Κονγκ",HM:"Νήσος Χερντ και Νήσοι Μακντόναλντ",HN:"Ονδούρα",HR:"Κροατία",HT:"Αϊτή",HU:"Ουγγαρία",ID:"Ινδονησία",IE:"Ιρλανδία",IL:"Ισραήλ",IM:"Νησί Μαν",IN:"Ινδία",IO:"Βρετανικό έδαφος Ινδικού Ωκεανού",IQ:"Ιράκ",IR:"Ισλαμική Δημοκρατία του Ιράν",IS:"Ισλανδία",IT:"Ιταλία",JE:"Τζέρσεϊ",JM:"Τζαμάικα",JO:"Ιορδανία",JP:"Ιαπωνία",KE:"Κένυα",KG:"Κιργιστάν",KH:"Καμπότζη",KI:"Κιριμπάτι",KM:"Κομόρες",KN:"Σαιντ Κιτς και Νέβις",KP:"Λαϊκή Δημοκρατία της Κορέας",KR:"Δημοκρατία της Κορέας",KW:"Κουβέιτ",KY:"Νήσοι Κέιμαν",KZ:"Καζακστάν",LA:"Λαϊκή Δημοκρατία του Λάος",LB:"Λίβανος",LC:"Αγία Λουκία",LI:"Λιχτενστάιν",LK:"Σρι Λάνκα",LR:"Λιβερία",LS:"Λεσότο",LT:"Λιθουανία",LU:"Λουξεμβούργο",LV:"Λετονία",LY:"Λιβύη",MA:"Μαρόκο",MC:"Μονακό",MD:"Δημοκρατία της Μολδαβίας",ME:"Μαυροβούνιο",MF:"Άγιος Μαρτίνος (Γαλλικό τμήμα)",MG:"Μαδαγασκάρη",MH:"Νησιά Μάρσαλ",MK:"Πρώην Γιουγκοσλαβική Δημοκρατία της Μακεδονίας (F.Y.R.O.M.)",ML:"Μάλι",MM:"Μιανμάρ",MN:"Μογγολία",MO:"Μακάο",MP:"Νησιά Βόρειες Μαριάννες",MQ:"Μαρτινίκα",MR:"Μαυριτανία",MS:"Μονσεράτ",MT:"Μάλτα",MU:"Μαυρίκιος",MV:"Μαλδίβες",MW:"Μαλάουι",MX:"Μεξικό",MY:"Μαλαισία",MZ:"Μοζαμβίκη",NA:"Ναμίμπια",NC:"Νέα Καληδονία",NE:"Νίγηρας",NG:"Νιγηρία",NI:"Νικαράγουα",NL:"Ολλανδία",NO:"Νορβηγία",NP:"Νεπάλ",NR:"Ναούρου",NU:"Νιούε",NZ:"Νέα Ζηλανδία",OM:"Ομάν",PA:"Παναμάς",PE:"Περού",PF:"Γαλλική Πολυνησία",PG:"Παπούα Νέα Γουινέα",PH:"Φιλιππίνες",PK:"Πακιστάν",PL:"Πολωνία",PM:"Σεν Πιέρ και Μικελόν (Νήσοι Αγίου Πέτρου και Μιχαήλ)",PN:"Νήσοι Πίτκερν",PS:"Κράτος της Παλαιστίνης",PT:"Πορτογαλία",PW:"Παλάου",PY:"Παραγουάη",QA:"Κατάρ",RE:"Ρεϊνιόν",RO:"Ρουμανία",RS:"Σερβία",RU:"Ρωσική Ομοσπονδία",RW:"Ρουάντα",SA:"Σαουδική Αραβία",SB:"Νησιά Σολομώντα",SC:"Σεϋχέλλες",SD:"Σουδάν",SE:"Σουηδία",SG:"Σιγκαπούρη",SH:"Νήσοι Αγία Ελένη, Ασενσιόν και Τριστάν ντα Κούνια",SI:"Σλοβενία",SJ:"Αρχιπέλαγος Σβάλµπαρντ και Νήσος Γιαν Μαγιέν",SK:"Σλοβακία",SL:"Σιέρα Λεόνε",SM:"Άγιος Μαρίνος",SN:"Σενεγάλη",SO:"Σομαλία",SR:"Σουρινάμ",SS:"Νότιο Σουδάν",ST:"Σάο Τομέ και Πρίνσιπε",SV:"Ελ Σαλβαδόρ",SX:"Άγιος Μαρτίνος (Ολλανδικό τμήμα)",SY:"Αραβική Δημοκρατία της Συρίας",SZ:"Σουαζιλάνδη",TC:"Νησιά Ταρκ και Κάικος",TD:"Τσαντ",TF:"Γαλλικά Νότια Εδάφη",TG:"Τόγκο",TH:"Ταϊλάνδη",TJ:"Τατζικιστάν",TK:"Τοκελάου",TL:"Λαϊκή Δημοκρατία του Ανατολικού Τιμόρ",TM:"Τουρκμενιστάν",TN:"Τυνησία",TO:"Τόνγκα",TR:"Τουρκία",TT:"Τρινιντάντ και Τομπάγκο",TV:"Τουβαλού",TW:"Ταϊβάν, Επαρχία Κίνας",TZ:"Ηνωμένη Δημοκρατία της Τανζανίας",UA:"Ουκρανία",UG:"Ουγκάντα",UM:"Απομακρυσμένες Νησίδες των Ηνωμένων Πολιτειών",US:"Ηνωμένες Πολιτείες",UY:"Ουρουγουάη",UZ:"Ουζμπεκιστάν",VA:"Βατικανό (Πόλη του Βατικανού)",VC:"Άγιος Βικέντιος και Γρεναδίνες",VE:"Δημοκρατία της Βενεζουέλας",VG:"Βρετανικές Παρθένοι Νήσοι",VN:"Βιετνάμ",VU:"Βανουάτου",WF:"Ουόλις και Φουτούνα",WS:"Σαμόα",XK:"Δημοκρατία του Κοσσυφοπεδίου",YE:"Υεμένη",YT:"Μαγιότ",ZA:"Νότια Αφρική",ZM:"Ζάμπια",ZW:"Ζιμπάμπουε"}});