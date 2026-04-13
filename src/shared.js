// ═══════════════════════════════════════════════════════════
// THEME & SHARED CONSTANTS
// ═══════════════════════════════════════════════════════════

export const T = {
  bg: "#F3F1EA", card: "#FFFCF6", primary: "#5B7F62", primaryLight: "#E8EFE4", primaryDark: "#355240",
  blue: "#4F7D82", blueLight: "#E7F0EF", accent: "#C8A765", accentLight: "#F8F1E1",
  text: "#26352D", textMuted: "#6F7F74", textLight: "#98A89D", border: "#DCE4D9", borderLight: "#EAF0E6",
  danger: "#C56058", dangerLight: "#FBEFED", sidebar: "#1E2F24",
  shadow: "0 2px 10px rgba(30,47,36,0.06)", shadowMd: "0 8px 20px rgba(30,47,36,0.09)", shadowLg: "0 16px 44px rgba(30,47,36,0.14)",
  radius: 12, radiusSm: 8, radiusLg: 16,
};

export const SERVICED_AREAS = [
  "Twin Waters", "Maroochydore", "Kuluin", "Forest Glen", "Mons",
  "Buderim", "Alexandra Headland", "Mooloolaba", "Mountain Creek", "Minyama"
];

// ─── Demo Clients — 70 real Sunshine Coast clients ───
export function generateDemoClients(count = 70) {
  // dur = beds*25 + baths*30 + living*20 + kitchen*25 + 30
  const RAW = [
    // ── BUDERIM (Monday) ──────────────────────────────────────────
    { name:"Karen Hutchins",    email:"karen.hutchins@gmail.com",       phone:"0412 384 901", address:"24 Burnett St, Buderim QLD 4556",         suburb:"Buderim",            bedrooms:4, bathrooms:2, living:1, kitchen:1, frequency:"fortnightly", preferred_day:"monday",    preferred_time:"morning",   notes:"Two labradors — Biscuit and Gravy. Please keep the back gate latched.", access_notes:"Key in lockbox on front fence — code 1847" },
    { name:"David O'Brien",     email:"david.obrien@outlook.com",       phone:"0421 556 283", address:"17 Gloucester Rd, Buderim QLD 4556",       suburb:"Buderim",            bedrooms:3, bathrooms:2, living:1, kitchen:1, frequency:"fortnightly", preferred_day:"monday",    preferred_time:"morning",   notes:"Home office on the left — just vacuum, don't move anything on the desk.", access_notes:"Garage side door left unlocked. Enter through laundry." },
    { name:"Tanya Moss",        email:"tanya.moss@icloud.com",          phone:"0438 712 045", address:"8 King St, Buderim QLD 4556",              suburb:"Buderim",            bedrooms:3, bathrooms:1, living:1, kitchen:1, frequency:"weekly",      preferred_day:"monday",    preferred_time:"morning",   notes:"Please fold towels into thirds and hang on the rail.", access_notes:"Spare key under the Buddha statue by the front steps." },
    { name:"Phil & Sandra Burton",email:"phil.burton@hotmail.com",      phone:"0407 293 418", address:"35 Seaview Tce, Buderim QLD 4556",         suburb:"Buderim",            bedrooms:4, bathrooms:2, living:2, kitchen:1, frequency:"monthly",     preferred_day:"monday",    preferred_time:"anytime",   notes:"Sandra works from home Mondays — she'll let you in and stay out of your way.", access_notes:"" },
    { name:"Michelle Fraser",   email:"michelle.fraser@gmail.com",      phone:"0451 874 320", address:"52 Crosby Hill Rd, Buderim QLD 4556",      suburb:"Buderim",            bedrooms:4, bathrooms:2, living:1, kitchen:1, frequency:"fortnightly", preferred_day:"monday",    preferred_time:"afternoon", notes:"Eco-friendly products only — everything is under the kitchen sink.", access_notes:"Key in lockbox by the letterbox — code 3312" },
    { name:"Cameron Reid",      email:"cameron.reid@yahoo.com.au",      phone:"0416 038 592", address:"11 Lindsay Rd, Buderim QLD 4556",          suburb:"Buderim",            bedrooms:3, bathrooms:2, living:1, kitchen:1, frequency:"fortnightly", preferred_day:"monday",    preferred_time:"morning",   notes:"Cat Mochi is indoor only — please don't let her out.", access_notes:"Back sliding door unlocked. Enter from deck." },
    { name:"Vanessa Price",     email:"vanessa.price@gmail.com",        phone:"0443 201 867", address:"6 Dixon St, Buderim QLD 4556",             suburb:"Buderim",            bedrooms:2, bathrooms:1, living:1, kitchen:1, frequency:"weekly",      preferred_day:"monday",    preferred_time:"morning",   notes:"Focus extra on the bathroom — hard water stains on the shower screen.", access_notes:"Key under the terracotta pot to the left of the front door." },
    // ── KULUIN (Monday) ───────────────────────────────────────────
    { name:"Alex Chen",         email:"alex.chen@gmail.com",            phone:"0428 903 741", address:"14 Kuluin St, Kuluin QLD 4558",            suburb:"Kuluin",             bedrooms:3, bathrooms:1, living:1, kitchen:1, frequency:"fortnightly", preferred_day:"monday",    preferred_time:"afternoon", notes:"", access_notes:"Keypad on front door — code 7724" },
    { name:"Bridget Doyle",     email:"bridget.doyle@icloud.com",       phone:"0409 562 318", address:"7 Rosebed St, Kuluin QLD 4558",            suburb:"Kuluin",             bedrooms:3, bathrooms:2, living:1, kitchen:1, frequency:"weekly",      preferred_day:"monday",    preferred_time:"morning",   notes:"New baby — please keep noise to a minimum between 11am–1pm.", access_notes:"Will be home. Ring doorbell." },
    { name:"Jason Drummond",    email:"jason.drummond@outlook.com",     phone:"0437 184 625", address:"21 Lumeah Dr, Kuluin QLD 4558",            suburb:"Kuluin",             bedrooms:4, bathrooms:2, living:1, kitchen:1, frequency:"fortnightly", preferred_day:"monday",    preferred_time:"morning",   notes:"Teenagers' bedrooms need extra attention — especially Jake's.", access_notes:"Garage remote in key lockbox out front — code 5591" },
    { name:"Cheryl Watson",     email:"cheryl.watson@hotmail.com",      phone:"0452 730 089", address:"3 Anne St, Kuluin QLD 4558",               suburb:"Kuluin",             bedrooms:3, bathrooms:1, living:1, kitchen:1, frequency:"monthly",     preferred_day:"monday",    preferred_time:"anytime",   notes:"", access_notes:"Key with neighbour at No. 5 — just knock." },
    { name:"Tony Valente",      email:"tony.valente@gmail.com",         phone:"0415 267 943", address:"18 Valroy Dr, Kuluin QLD 4558",            suburb:"Kuluin",             bedrooms:4, bathrooms:2, living:2, kitchen:1, frequency:"fortnightly", preferred_day:"monday",    preferred_time:"morning",   notes:"Pool area — please sweep if leaves are bad.", access_notes:"Side gate code: 2288. Enter through back door." },
    { name:"Nikki Bergmann",    email:"nikki.bergmann@gmail.com",       phone:"0461 093 254", address:"9 Cedar Rd, Kuluin QLD 4558",              suburb:"Kuluin",             bedrooms:3, bathrooms:1, living:1, kitchen:1, frequency:"fortnightly", preferred_day:"monday",    preferred_time:"afternoon", notes:"Recently renovated kitchen — stone benchtops, please use appropriate products.", access_notes:"Key under the frog statue beside the front steps." },
    { name:"Brad Sullivan",     email:"brad.sullivan@outlook.com",      phone:"0448 315 702", address:"26 Sunshine Ct, Kuluin QLD 4558",          suburb:"Kuluin",             bedrooms:3, bathrooms:2, living:1, kitchen:1, frequency:"fortnightly", preferred_day:"monday",    preferred_time:"morning",   notes:"", access_notes:"Entry through carport, side door is unlocked on clean days." },
    // ── MAROOCHYDORE (Tuesday) ────────────────────────────────────
    { name:"Rachel Turnbull",   email:"rachel.turnbull@gmail.com",      phone:"0422 841 507", address:"14 Aerodrome Rd, Maroochydore QLD 4558",   suburb:"Maroochydore",       bedrooms:2, bathrooms:1, living:1, kitchen:1, frequency:"fortnightly", preferred_day:"tuesday",   preferred_time:"morning",   notes:"Please empty the dishwasher if the cycle is done — big help!", access_notes:"Lockbox by the letterbox — code 4413" },
    { name:"Luke Harrison",     email:"luke.harrison@icloud.com",       phone:"0431 607 289", address:"22 Duporth Ave, Maroochydore QLD 4558",    suburb:"Maroochydore",       bedrooms:3, bathrooms:2, living:1, kitchen:1, frequency:"weekly",      preferred_day:"tuesday",   preferred_time:"morning",   notes:"Two indoor cats — Pumpkin and Olive. Close laundry door.", access_notes:"Sliding door left open. Enter from balcony." },
    { name:"Penny Walsh",       email:"penny.walsh@hotmail.com",        phone:"0445 912 063", address:"5 Dalton Dr, Maroochydore QLD 4558",       suburb:"Maroochydore",       bedrooms:3, bathrooms:1, living:1, kitchen:1, frequency:"fortnightly", preferred_day:"tuesday",   preferred_time:"afternoon", notes:"Mum lives in the granny flat out back — pop in and say hi!", access_notes:"Key under the mat. Alarm code: 8821." },
    { name:"Grant & Leanne Tran",email:"grant.tran@gmail.com",          phone:"0408 374 951", address:"38 Bradman Ave, Maroochydore QLD 4558",    suburb:"Maroochydore",       bedrooms:4, bathrooms:2, living:1, kitchen:1, frequency:"fortnightly", preferred_day:"tuesday",   preferred_time:"morning",   notes:"", access_notes:"Garage code: 6630#. Enter through the internal door to laundry." },
    { name:"Sonja Klemm",       email:"sonja.klemm@gmail.com",          phone:"0419 283 740", address:"11 Millwell Rd, Maroochydore QLD 4558",    suburb:"Maroochydore",       bedrooms:3, bathrooms:1, living:1, kitchen:1, frequency:"monthly",     preferred_day:"tuesday",   preferred_time:"anytime",   notes:"Owner is allergic to bleach — green products only, thank you.", access_notes:"Will be home. Give a call on arrival: 0419 283 740" },
    { name:"Troy McKenzie",     email:"troy.mckenzie@yahoo.com.au",     phone:"0453 028 614", address:"29 Sixth Ave, Maroochydore QLD 4558",      suburb:"Maroochydore",       bedrooms:3, bathrooms:2, living:1, kitchen:1, frequency:"fortnightly", preferred_day:"tuesday",   preferred_time:"morning",   notes:"No vacuuming the master bedroom before 9am — night shift worker.", access_notes:"Key in lockbox on side fence — combo 7751" },
    { name:"Andrea Hollis",     email:"andrea.hollis@icloud.com",       phone:"0427 509 183", address:"7 Cornmeal Pde, Maroochydore QLD 4558",    suburb:"Maroochydore",       bedrooms:2, bathrooms:1, living:1, kitchen:1, frequency:"weekly",      preferred_day:"tuesday",   preferred_time:"morning",   notes:"Please strip and remake the bed — fresh linen in the hall cupboard.", access_notes:"Spare key under the pot plant to the right of the front door." },
    // ── ALEXANDRA HEADLAND (Tuesday) ─────────────────────────────
    { name:"James & Fiona McAllister",email:"fiona.mcallister@gmail.com",phone:"0411 748 362",address:"16 Alexandra Pde, Alexandra Headland QLD 4572",suburb:"Alexandra Headland",bedrooms:4,bathrooms:2,living:2,kitchen:1,frequency:"fortnightly",preferred_day:"tuesday",   preferred_time:"morning",   notes:"Wipe outdoor furniture if time allows — saltair gets to everything.", access_notes:"Key in lockbox left of front door — code 9284" },
    { name:"Linda Park",        email:"linda.park@outlook.com",         phone:"0436 821 094", address:"8 Okinja Rd, Alexandra Headland QLD 4572", suburb:"Alexandra Headland", bedrooms:3, bathrooms:1, living:1, kitchen:1, frequency:"fortnightly", preferred_day:"tuesday",   preferred_time:"afternoon", notes:"Indoor plants on the kitchen bench — please water them.", access_notes:"Back door left unlocked on clean days." },
    { name:"Ben Carmichael",    email:"ben.carmichael@gmail.com",       phone:"0449 365 807", address:"33 Mary St, Alexandra Headland QLD 4572",  suburb:"Alexandra Headland", bedrooms:3, bathrooms:2, living:1, kitchen:1, frequency:"monthly",     preferred_day:"tuesday",   preferred_time:"anytime",   notes:"", access_notes:"Key with neighbour at No. 31. Her name is Dot." },
    { name:"Steph Addison",     email:"steph.addison@icloud.com",       phone:"0424 193 650", address:"5 Albatross Ave, Alexandra Headland QLD 4572",suburb:"Alexandra Headland",bedrooms:2,bathrooms:1,living:1,kitchen:1,frequency:"weekly",      preferred_day:"tuesday",   preferred_time:"morning",   notes:"New rescue dog — Remy. Still settling in, may bark.", access_notes:"Keypad: 3366. Front door." },
    { name:"Colin Brennan",     email:"colin.brennan@hotmail.com",      phone:"0416 572 938", address:"44 Pacific Tce, Alexandra Headland QLD 4572",suburb:"Alexandra Headland",bedrooms:4,bathrooms:2,living:1,kitchen:1,frequency:"fortnightly",preferred_day:"tuesday",   preferred_time:"morning",   notes:"Kids' toy room upstairs — they'll tidy it themselves, just vacuum the floor.", access_notes:"Garage code: 4480#" },
    { name:"Kylie Wallace",     email:"kylie.wallace@gmail.com",        phone:"0457 284 019", address:"19 Hill St, Alexandra Headland QLD 4572",  suburb:"Alexandra Headland", bedrooms:3, bathrooms:2, living:1, kitchen:1, frequency:"fortnightly", preferred_day:"tuesday",   preferred_time:"morning",   notes:"", access_notes:"Lockbox on the railing — code 6612" },
    { name:"Anita Sharma",      email:"anita.sharma@gmail.com",         phone:"0432 708 541", address:"12 Peel St, Alexandra Headland QLD 4572",  suburb:"Alexandra Headland", bedrooms:3, bathrooms:1, living:1, kitchen:1, frequency:"fortnightly", preferred_day:"tuesday",   preferred_time:"afternoon", notes:"Uses eco products only — basket under the bathroom sink.", access_notes:"Key under the welcome mat." },
    // ── MOOLOOLABA (Wednesday) ────────────────────────────────────
    { name:"Matt & Sarah Greenwood",email:"matt.greenwood@gmail.com",   phone:"0403 917 246", address:"6 Walan St, Mooloolaba QLD 4557",          suburb:"Mooloolaba",         bedrooms:3, bathrooms:2, living:1, kitchen:1, frequency:"weekly",      preferred_day:"wednesday", preferred_time:"morning",   notes:"Focus on bathrooms — they cop a lot of use with the kids.", access_notes:"Key in lockbox, code 2255. Front gate." },
    { name:"Donna Rafferty",    email:"donna.rafferty@icloud.com",      phone:"0441 063 857", address:"14 Smith St, Mooloolaba QLD 4557",          suburb:"Mooloolaba",         bedrooms:3, bathrooms:1, living:1, kitchen:1, frequency:"fortnightly", preferred_day:"wednesday", preferred_time:"morning",   notes:"Two indoor cats. Please keep the laundry door closed.", access_notes:"Spare key with Donna's mum next door at No. 12." },
    { name:"Steve Papadopoulos",email:"steve.papa@outlook.com",         phone:"0426 395 710", address:"31 Meta St, Mooloolaba QLD 4557",           suburb:"Mooloolaba",         bedrooms:4, bathrooms:2, living:1, kitchen:1, frequency:"fortnightly", preferred_day:"wednesday", preferred_time:"afternoon", notes:"", access_notes:"Entry through garage — code 7713#" },
    { name:"Claire Dawson",     email:"claire.dawson@gmail.com",        phone:"0455 182 903", address:"9 Foote St, Mooloolaba QLD 4557",           suburb:"Mooloolaba",         bedrooms:2, bathrooms:1, living:1, kitchen:1, frequency:"weekly",      preferred_day:"wednesday", preferred_time:"morning",   notes:"Towels in the bathroom cupboard — please fold and hang on the rail.", access_notes:"Will be home working from lounge. Just let yourself in." },
    { name:"Rob Jennings",      email:"rob.jennings@yahoo.com.au",      phone:"0418 749 321", address:"25 Venning St, Mooloolaba QLD 4557",        suburb:"Mooloolaba",         bedrooms:4, bathrooms:2, living:2, kitchen:1, frequency:"fortnightly", preferred_day:"wednesday", preferred_time:"morning",   notes:"Golden retriever Hamish is outside — he's very friendly.", access_notes:"Side gate is unlocked, back door key under BBQ cover." },
    { name:"Anna Lee",          email:"anna.lee@gmail.com",             phone:"0433 620 478", address:"17 Parkyn Pde, Mooloolaba QLD 4557",        suburb:"Mooloolaba",         bedrooms:3, bathrooms:2, living:1, kitchen:1, frequency:"fortnightly", preferred_day:"wednesday", preferred_time:"afternoon", notes:"", access_notes:"Lockbox on front fence — code 8843" },
    { name:"Dan Whitfield",     email:"dan.whitfield@hotmail.com",      phone:"0447 034 861", address:"38 Hancock St, Mooloolaba QLD 4557",        suburb:"Mooloolaba",         bedrooms:3, bathrooms:1, living:1, kitchen:1, frequency:"monthly",     preferred_day:"wednesday", preferred_time:"anytime",   notes:"Recently moved in — bathroom grout needs attention.", access_notes:"Key in letterbox in a small envelope." },
    // ── MINYAMA (Wednesday) ───────────────────────────────────────
    { name:"Gary & Sue Barker", email:"sue.barker@gmail.com",           phone:"0404 281 763", address:"11 Jessica Blvd, Minyama QLD 4575",        suburb:"Minyama",            bedrooms:4, bathrooms:2, living:2, kitchen:1, frequency:"fortnightly", preferred_day:"wednesday", preferred_time:"morning",   notes:"Pool deck needs a sweep — lots of gum leaves from the back neighbours.", access_notes:"Key in lockbox on the jetty post — code 3390" },
    { name:"Jess Kowalski",     email:"jess.kowalski@icloud.com",       phone:"0439 514 027", address:"24 Brittany Dr, Minyama QLD 4575",          suburb:"Minyama",            bedrooms:3, bathrooms:1, living:1, kitchen:1, frequency:"fortnightly", preferred_day:"wednesday", preferred_time:"afternoon", notes:"", access_notes:"Spare key under the shell pot beside the front door." },
    { name:"Pete Sorensen",     email:"pete.sorensen@gmail.com",        phone:"0421 867 540", address:"7 The Anchorage, Minyama QLD 4575",         suburb:"Minyama",            bedrooms:4, bathrooms:3, living:2, kitchen:1, frequency:"fortnightly", preferred_day:"wednesday", preferred_time:"morning",   notes:"Home gym in garage — don't need to clean in there.", access_notes:"Gate remote in lockbox — code 5502. Garage entry." },
    { name:"Natasha Hicks",     email:"natasha.hicks@outlook.com",      phone:"0460 293 185", address:"19 Glenyce Ct, Minyama QLD 4575",          suburb:"Minyama",            bedrooms:3, bathrooms:2, living:1, kitchen:1, frequency:"monthly",     preferred_day:"wednesday", preferred_time:"anytime",   notes:"Three kids under 5 — lounge room gets trashed. Extra time may be needed.", access_notes:"Will be home. Knock on arrival." },
    { name:"Martin Foley",      email:"martin.foley@gmail.com",         phone:"0413 758 290", address:"36 Regatta Blvd, Minyama QLD 4575",        suburb:"Minyama",            bedrooms:4, bathrooms:2, living:1, kitchen:1, frequency:"fortnightly", preferred_day:"wednesday", preferred_time:"morning",   notes:"", access_notes:"Keypad front door — code 4481" },
    { name:"Cynthia Ballard",   email:"cynthia.ballard@hotmail.com",    phone:"0444 607 832", address:"8 Minyama St, Minyama QLD 4575",            suburb:"Minyama",            bedrooms:3, bathrooms:1, living:1, kitchen:1, frequency:"weekly",      preferred_day:"wednesday", preferred_time:"morning",   notes:"Please leave clean towels folded on the bed.", access_notes:"Key under the ceramic frog at the back door." },
    { name:"Ross McKinnon",     email:"ross.mckinnon@gmail.com",        phone:"0428 039 614", address:"45 Harbour View Tce, Minyama QLD 4575",     suburb:"Minyama",            bedrooms:4, bathrooms:2, living:2, kitchen:1, frequency:"fortnightly", preferred_day:"wednesday", preferred_time:"afternoon", notes:"Views from the deck — please wipe the glass balustrades.", access_notes:"Lockbox at side gate — code 7760" },
    // ── TWIN WATERS (Thursday) ────────────────────────────────────
    { name:"Jim & Carol Hendricks",email:"carol.hendricks@gmail.com",   phone:"0406 821 453", address:"14 Oceanside Dr, Twin Waters QLD 4564",    suburb:"Twin Waters",        bedrooms:4, bathrooms:2, living:2, kitchen:1, frequency:"fortnightly", preferred_day:"thursday",  preferred_time:"morning",   notes:"Wipe down the outdoor furniture on the deck — salt air gets to it.", access_notes:"Key in lockbox on the gate — code 6614" },
    { name:"Natalie Kowalczyk", email:"natalie.k@outlook.com",          phone:"0437 294 018", address:"27 Pelican Way, Twin Waters QLD 4564",      suburb:"Twin Waters",        bedrooms:3, bathrooms:2, living:1, kitchen:1, frequency:"fortnightly", preferred_day:"thursday",  preferred_time:"morning",   notes:"", access_notes:"Side gate unlocked. Back door is open on clean days." },
    { name:"Chris Thornton",    email:"chris.thornton@gmail.com",       phone:"0452 183 796", address:"6 Marina Blvd, Twin Waters QLD 4564",       suburb:"Twin Waters",        bedrooms:3, bathrooms:1, living:1, kitchen:1, frequency:"weekly",      preferred_day:"thursday",  preferred_time:"morning",   notes:"Shift worker — don't knock, just let yourself in quietly.", access_notes:"Key under mat beside the BBQ. Alarm code: 1193." },
    { name:"Bec Lawson",        email:"bec.lawson@icloud.com",          phone:"0443 507 281", address:"43 Seaspray Cres, Twin Waters QLD 4564",    suburb:"Twin Waters",        bedrooms:4, bathrooms:2, living:1, kitchen:1, frequency:"monthly",     preferred_day:"thursday",  preferred_time:"anytime",   notes:"Two dogs — Boof and Bella. Very excitable but harmless.", access_notes:"Garage code: 9920#. Enter through laundry." },
    { name:"Tom Nguyen",        email:"tom.nguyen@gmail.com",           phone:"0417 930 624", address:"19 Harbour Dr, Twin Waters QLD 4564",       suburb:"Twin Waters",        bedrooms:3, bathrooms:2, living:1, kitchen:1, frequency:"fortnightly", preferred_day:"thursday",  preferred_time:"afternoon", notes:"", access_notes:"Key in lockbox by letterbox — code 3381" },
    { name:"Gail Partridge",    email:"gail.partridge@hotmail.com",     phone:"0459 712 083", address:"8 Coorella Cct, Twin Waters QLD 4564",      suburb:"Twin Waters",        bedrooms:3, bathrooms:1, living:1, kitchen:1, frequency:"fortnightly", preferred_day:"thursday",  preferred_time:"morning",   notes:"Elderly — happy for us to come in, just knock first.", access_notes:"Will be home. Knock on arrival." },
    { name:"Sam & Lisa Ferreira",email:"sam.ferreira@gmail.com",        phone:"0428 645 310", address:"31 Coral Key Dr, Twin Waters QLD 4564",     suburb:"Twin Waters",        bedrooms:4, bathrooms:2, living:1, kitchen:1, frequency:"fortnightly", preferred_day:"thursday",  preferred_time:"morning",   notes:"Stone benchtops in kitchen — please use pH-neutral products.", access_notes:"Lockbox on front fence — code 5527" },
    // ── MOUNTAIN CREEK (Thursday) ─────────────────────────────────
    { name:"Kate & Ben Robson", email:"kate.robson@gmail.com",          phone:"0411 284 937", address:"18 Karawatha Dr, Mountain Creek QLD 4557",  suburb:"Mountain Creek",     bedrooms:4, bathrooms:2, living:1, kitchen:1, frequency:"fortnightly", preferred_day:"thursday",  preferred_time:"morning",   notes:"Twins aged 4 — playroom is always a disaster. Do your best!", access_notes:"Key in lockbox — code 2294. Gate on left of house." },
    { name:"Dan Murray",        email:"dan.murray@outlook.com",         phone:"0436 519 072", address:"7 Mountain Creek Rd, Mountain Creek QLD 4557",suburb:"Mountain Creek",    bedrooms:3, bathrooms:2, living:1, kitchen:1, frequency:"weekly",      preferred_day:"thursday",  preferred_time:"morning",   notes:"", access_notes:"Spare key with next door neighbour Marcus at No. 5." },
    { name:"Yvette Cassidy",    email:"yvette.cassidy@icloud.com",      phone:"0450 836 291", address:"34 Glenfields Blvd, Mountain Creek QLD 4557",suburb:"Mountain Creek",    bedrooms:3, bathrooms:1, living:1, kitchen:1, frequency:"fortnightly", preferred_day:"thursday",  preferred_time:"afternoon", notes:"Cat Felix sleeps on the bed — just move him gently.", access_notes:"Keypad: 8810. Front door." },
    { name:"Nick Baxter",       email:"nick.baxter@gmail.com",          phone:"0424 071 583", address:"22 Brookfield Dr, Mountain Creek QLD 4557", suburb:"Mountain Creek",     bedrooms:4, bathrooms:2, living:2, kitchen:1, frequency:"fortnightly", preferred_day:"thursday",  preferred_time:"morning",   notes:"Robot vacuum runs M–F. Just mop hard floors on clean day.", access_notes:"Garage remote in lockbox out front — code 6680" },
    { name:"Joanne Lim",        email:"joanne.lim@gmail.com",           phone:"0463 294 807", address:"9 Parklands Blvd, Mountain Creek QLD 4557", suburb:"Mountain Creek",     bedrooms:3, bathrooms:1, living:1, kitchen:1, frequency:"monthly",     preferred_day:"thursday",  preferred_time:"anytime",   notes:"", access_notes:"Back gate left open. Key under mat at back door." },
    { name:"Andy & Tracy Hopkins",email:"tracy.hopkins@hotmail.com",    phone:"0415 837 402", address:"46 Rainforest Dr, Mountain Creek QLD 4557", suburb:"Mountain Creek",     bedrooms:4, bathrooms:2, living:2, kitchen:1, frequency:"fortnightly", preferred_day:"thursday",  preferred_time:"morning",   notes:"Please take the bins out if they're at the kerb — Thursday is bin night.", access_notes:"Key in lockbox on fence — code 4473" },
    { name:"Liz Carmody",       email:"liz.carmody@gmail.com",          phone:"0442 609 175", address:"13 Lakewood Dr, Mountain Creek QLD 4557",   suburb:"Mountain Creek",     bedrooms:3, bathrooms:2, living:1, kitchen:1, frequency:"fortnightly", preferred_day:"thursday",  preferred_time:"morning",   notes:"", access_notes:"Sliding door open on the right side of the house." },
    // ── FOREST GLEN (Friday) ─────────────────────────────────────
    { name:"Paul & Jen Whitmore",email:"jen.whitmore@gmail.com",        phone:"0407 184 562", address:"12 Forest Glen Rd, Forest Glen QLD 4556",   suburb:"Forest Glen",        bedrooms:4, bathrooms:2, living:1, kitchen:1, frequency:"fortnightly", preferred_day:"friday",    preferred_time:"morning",   notes:"Three chickens in the yard — ignore them, they're harmless.", access_notes:"Key in lockbox by veggie garden — code 1182" },
    { name:"Tracey Blackwood",  email:"tracey.blackwood@icloud.com",    phone:"0438 920 317", address:"24 Doolan St, Forest Glen QLD 4556",         suburb:"Forest Glen",        bedrooms:3, bathrooms:1, living:1, kitchen:1, frequency:"weekly",      preferred_day:"friday",    preferred_time:"morning",   notes:"Please water the herb pots on the kitchen bench.", access_notes:"Spare key under the big flower pot left of front door." },
    { name:"Bruce Nolan",       email:"bruce.nolan@hotmail.com",        phone:"0451 703 284", address:"9 Anning Rd, Forest Glen QLD 4556",          suburb:"Forest Glen",        bedrooms:4, bathrooms:2, living:2, kitchen:1, frequency:"fortnightly", preferred_day:"friday",    preferred_time:"morning",   notes:"", access_notes:"Keypad on garage — code 5531. Internal door to house." },
    { name:"Helen Stratton",    email:"helen.stratton@gmail.com",       phone:"0426 048 751", address:"36 Balmoral Rd, Forest Glen QLD 4556",       suburb:"Forest Glen",        bedrooms:3, bathrooms:2, living:1, kitchen:1, frequency:"monthly",     preferred_day:"friday",    preferred_time:"anytime",   notes:"Incense burner in the meditation room — just vacuum the floor, leave the shelves.", access_notes:"Will be home. Give a text on arrival." },
    { name:"Scott Pemberton",   email:"scott.pemberton@gmail.com",      phone:"0419 375 860", address:"15 Ironbark Pl, Forest Glen QLD 4556",       suburb:"Forest Glen",        bedrooms:4, bathrooms:2, living:1, kitchen:1, frequency:"fortnightly", preferred_day:"friday",    preferred_time:"morning",   notes:"Solar panel crew may be on roof some Fridays — just work around them.", access_notes:"Key in lockbox on fence post — code 7743" },
    { name:"Deb & Ian Walsh",   email:"deb.walsh@outlook.com",          phone:"0446 821 093", address:"28 Silky Oak Ct, Forest Glen QLD 4556",      suburb:"Forest Glen",        bedrooms:4, bathrooms:2, living:2, kitchen:1, frequency:"fortnightly", preferred_day:"friday",    preferred_time:"morning",   notes:"Wooden floors throughout — mop with a barely-damp mop only.", access_notes:"Lockbox at side gate — code 9982" },
    { name:"Faye Connelly",     email:"faye.connelly@gmail.com",        phone:"0434 260 817", address:"7 Tallowwood Ave, Forest Glen QLD 4556",     suburb:"Forest Glen",        bedrooms:3, bathrooms:1, living:1, kitchen:1, frequency:"fortnightly", preferred_day:"friday",    preferred_time:"afternoon", notes:"", access_notes:"Key under the large pot plant on the back veranda." },
    // ── MONS (Friday) ─────────────────────────────────────────────
    { name:"Geoff & Maria Santos",email:"maria.santos@gmail.com",       phone:"0409 531 748", address:"23 Mons Rd, Mons QLD 4556",                  suburb:"Mons",               bedrooms:4, bathrooms:2, living:2, kitchen:1, frequency:"fortnightly", preferred_day:"friday",    preferred_time:"morning",   notes:"Views from every room — please wipe the window sills.", access_notes:"Key in lockbox by front gate — code 3318" },
    { name:"Leah Robinson",     email:"leah.robinson@icloud.com",       phone:"0443 817 052", address:"8 Sunrise Rd, Mons QLD 4556",                suburb:"Mons",               bedrooms:3, bathrooms:1, living:1, kitchen:1, frequency:"weekly",      preferred_day:"friday",    preferred_time:"morning",   notes:"Owner allergic to strongly scented products — fragrance-free only.", access_notes:"Spare key under the stepping stone left of the front door." },
    { name:"Adrian Clarke",     email:"adrian.clarke@gmail.com",        phone:"0417 294 630", address:"41 Panorama Dr, Mons QLD 4556",              suburb:"Mons",               bedrooms:4, bathrooms:2, living:1, kitchen:1, frequency:"fortnightly", preferred_day:"friday",    preferred_time:"morning",   notes:"", access_notes:"Keypad: 6604. Front door." },
    { name:"Mel & Dave King",   email:"mel.king@hotmail.com",           phone:"0452 038 419", address:"16 Mountain View Dr, Mons QLD 4556",         suburb:"Mons",               bedrooms:3, bathrooms:2, living:1, kitchen:1, frequency:"fortnightly", preferred_day:"friday",    preferred_time:"afternoon", notes:"Two large dogs — Eddie and Vera — will be in the yard. Very friendly.", access_notes:"Side gate code: 5521. Dogs are outside." },
    { name:"Ros Chambers",      email:"ros.chambers@gmail.com",         phone:"0428 604 917", address:"5 Valley Cres, Mons QLD 4556",               suburb:"Mons",               bedrooms:3, bathrooms:1, living:1, kitchen:1, frequency:"monthly",     preferred_day:"friday",    preferred_time:"anytime",   notes:"Elderly client — very particular about the bathroom. Take your time.", access_notes:"Will be home. Knock and she'll come to the door." },
    { name:"Craig Thornton",    email:"craig.thornton@outlook.com",     phone:"0416 752 381", address:"32 Wattle Dr, Mons QLD 4556",                suburb:"Mons",               bedrooms:4, bathrooms:2, living:1, kitchen:1, frequency:"fortnightly", preferred_day:"friday",    preferred_time:"morning",   notes:"", access_notes:"Key in lockbox on the fence — code 8874" },
    { name:"Bec Hastings",      email:"bec.hastings@gmail.com",         phone:"0461 183 720", address:"11 Bushland Pl, Mons QLD 4556",              suburb:"Mons",               bedrooms:3, bathrooms:2, living:1, kitchen:1, frequency:"fortnightly", preferred_day:"friday",    preferred_time:"morning",   notes:"Rescue guinea pigs in the sunroom — keep door closed.", access_notes:"Lockbox by back door — code 2291" },
  ];

  const dur = (c) => c.bedrooms * 25 + c.bathrooms * 30 + (c.living || 1) * 20 + (c.kitchen || 1) * 25 + 30;

  return RAW.slice(0, count).map(c => ({
    ...c,
    estimated_duration: dur(c),
    status: "active",
    is_demo: true,
  }));
}

// ─── Payment tracking ───
export function loadPayments() {
  try {
    const stored = localStorage.getItem("db_payments");
    if (stored) return JSON.parse(stored);
  } catch {}
  return [];
}

export function savePayments(payments) {
  try {
    localStorage.setItem("db_payments", JSON.stringify(payments));
  } catch {}
}

export function addPayment(payment) {
  const payments = loadPayments();
  payments.unshift({
    ...payment,
    id: `payment_${Date.now()}`,
    recordedAt: new Date().toISOString(),
  });
  savePayments(payments);
  return payments;
}

export function getPaymentsForJob(jobId) {
  return loadPayments().filter(p => p.jobId === jobId);
}

export function getPaymentsForClient(clientId) {
  return loadPayments().filter(p => p.clientId === clientId);
}

export function getTotalOwed(jobs, payments) {
  // Calculate total owed from completed jobs minus payments
  const completedJobsTotal = jobs
    .filter(j => j.status === "completed")
    .reduce((sum, j) => sum + (j.price || 0), 0);
  
  const paymentsTotal = payments.reduce((sum, p) => sum + (p.amount || 0), 0);
  
  return completedJobsTotal - paymentsTotal;
}

// ─── Invoice tracking ───
export function loadInvoices() {
  try {
    const stored = localStorage.getItem("db_invoices");
    if (stored) return JSON.parse(stored);
  } catch {}
  return [];
}

export function saveInvoices(invoices) {
  try {
    localStorage.setItem("db_invoices", JSON.stringify(invoices));
  } catch {}
}

export function addInvoice(invoice) {
  const invoices = loadInvoices();
  const invoiceNumber = `INV-${String(invoices.length + 1).padStart(4, '0')}`;
  invoices.unshift({
    ...invoice,
    id: `invoice_${Date.now()}`,
    invoiceNumber,
    createdAt: new Date().toISOString(),
    status: "unpaid",
  });
  saveInvoices(invoices);
  return invoices[0];
}

// ─── Photo storage using IndexedDB ───
const DB_NAME = "DustBunniesPhotos";
const DB_VERSION = 1;
const STORE_NAME = "photos";

function openPhotoDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
    
    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        const store = db.createObjectStore(STORE_NAME, { keyPath: "id" });
        store.createIndex("jobId", "jobId", { unique: false });
        store.createIndex("date", "date", { unique: false });
        store.createIndex("teamId", "teamId", { unique: false });
      }
    };
  });
}

export async function savePhoto(photoData) {
  const db = await openPhotoDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([STORE_NAME], "readwrite");
    const store = transaction.objectStore(STORE_NAME);
    
    const photo = {
      id: `photo_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      ...photoData,
      uploadedAt: new Date().toISOString(),
    };
    
    const request = store.add(photo);
    request.onsuccess = () => resolve(photo);
    request.onerror = () => reject(request.error);
  });
}

export async function getPhotosForJob(jobId) {
  const db = await openPhotoDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([STORE_NAME], "readonly");
    const store = transaction.objectStore(STORE_NAME);
    const index = store.index("jobId");
    const request = index.getAll(jobId);
    
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function getPhotosForDate(date) {
  const db = await openPhotoDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([STORE_NAME], "readonly");
    const store = transaction.objectStore(STORE_NAME);
    const index = store.index("date");
    const request = index.getAll(date);
    
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function getAllPhotos() {
  const db = await openPhotoDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([STORE_NAME], "readonly");
    const store = transaction.objectStore(STORE_NAME);
    const request = store.getAll();
    
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function deletePhoto(photoId) {
  const db = await openPhotoDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([STORE_NAME], "readwrite");
    const store = transaction.objectStore(STORE_NAME);
    const request = store.delete(photoId);
    
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}

// ─── Suburb coordinates (fallback when no address) ───
export const SUBURB_COORDS = {
  "Twin Waters": { lat: -26.6275, lng: 153.0853 },
  "Maroochydore": { lat: -26.6590, lng: 153.0997 },
  "Kuluin": { lat: -26.6567, lng: 153.0486 },
  "Forest Glen": { lat: -26.6833, lng: 153.0167 },
  "Mons": { lat: -26.7167, lng: 153.0333 },
  "Buderim": { lat: -26.6844, lng: 153.0500 },
  "Alexandra Headland": { lat: -26.6678, lng: 153.1031 },
  "Mooloolaba": { lat: -26.6817, lng: 153.1192 },
  "Mountain Creek": { lat: -26.6933, lng: 153.0972 },
  "Minyama": { lat: -26.6833, lng: 153.1167 },
  "Noosa Heads": { lat: -26.3958, lng: 153.0900 },
  "Caloundra": { lat: -26.8037, lng: 153.1228 },
  "Kawana Waters": { lat: -26.7328, lng: 153.1279 },
  "Birtinya": { lat: -26.7446, lng: 153.1199 },
  "Sippy Downs": { lat: -26.7163, lng: 153.0547 },
  "Warana": { lat: -26.7308, lng: 153.1232 },
  "Parrearra": { lat: -26.7221, lng: 153.1269 },
  "Bokarina": { lat: -26.7371, lng: 153.1261 },
  "Noosaville": { lat: -26.3998, lng: 153.0669 },
  "Tewantin": { lat: -26.3913, lng: 153.0345 },
};

// ─── Get coordinates for a client ───
export function getClientCoords(client) {
  // If client has geocoded coordinates, use those
  if (client.lat && client.lng) {
    return { lat: client.lat, lng: client.lng };
  }
  // Otherwise fall back to suburb center
  return SUBURB_COORDS[client.suburb] || { lat: -26.6590, lng: 153.0997 }; // Default to Maroochydore
}

// ═══════════════════════════════════════════════════════════
// EMAIL TRACKING & HISTORY
// ═══════════════════════════════════════════════════════════

export function loadEmailHistory() {
  try {
    const stored = localStorage.getItem("db_email_history");
    if (stored) return JSON.parse(stored);
  } catch {}
  return [];
}

export function saveEmailHistory(history) {
  try {
    localStorage.setItem("db_email_history", JSON.stringify(history));
  } catch {}
}

export function addEmailToHistory(entry) {
  const history = loadEmailHistory();
  history.unshift({
    ...entry,
    id: `email_${Date.now()}`,
    sentAt: new Date().toISOString(),
  });
  // Keep last 500 entries
  saveEmailHistory(history.slice(0, 500));
}

export function getClientEmailHistory(clientId) {
  return loadEmailHistory().filter(e => e.clientId === clientId);
}

export function getLastEmailForClient(clientId) {
  const history = loadEmailHistory();
  return history.find(e => e.clientId === clientId) || null;
}

// ─── Calculate days since a date ───
export function daysSince(dateStr) {
  if (!dateStr) return null;
  const then = new Date(dateStr);
  const now = new Date();
  const diff = Math.floor((now - then) / (1000 * 60 * 60 * 24));
  return diff;
}

// ─── Get follow-up status for display ───
export function getFollowUpStatus(quoteSentAt) {
  const days = daysSince(quoteSentAt);
  if (days === null) return null;
  if (days >= 7) return { level: "urgent", days, label: `${days}d - Urgent!`, color: "#D4645C" };
  if (days >= 3) return { level: "warning", days, label: `${days}d - Follow up`, color: "#E8C86A" };
  return { level: "ok", days, label: `${days}d ago`, color: "#7A8F85" };
}

// ─── Email template types ───
export const EMAIL_TEMPLATES = {
  quote: {
    id: "quote",
    name: "Quote",
    icon: "💰",
    description: "Send pricing quote to client",
    subject: "Your Cleaning Quote is Ready! 🌿 — Dust Bunnies Cleaning",
  },
  follow_up: {
    id: "follow_up",
    name: "Follow-up",
    icon: "📩",
    description: "Chase quotes sent 3+ days ago",
    subject: "Just checking in! 🌿 — Dust Bunnies Cleaning",
  },
  review_request: {
    id: "review_request",
    name: "Review Request",
    icon: "⭐",
    description: "Ask happy clients for a Google review",
    subject: "Loved your clean? We'd love a review! ⭐",
  },
  booking_confirmation: {
    id: "booking_confirmation",
    name: "Booking Confirmation",
    icon: "✅",
    description: "Confirm when a quote is accepted",
    subject: "You're booked in! 🎉 — Dust Bunnies Cleaning",
  },
  reminder: {
    id: "reminder",
    name: "Reminder",
    icon: "🔔",
    description: "Day-before clean reminder",
    subject: "See you tomorrow! 🌿 — Dust Bunnies Cleaning",
  },
  custom: {
    id: "custom",
    name: "Custom Email",
    icon: "✏️",
    description: "Create your own message",
    subject: "",
  },
};

// ─── Custom email styles ───
export const CUSTOM_EMAIL_STYLES = {
  announcement: {
    id: "announcement",
    name: "Announcement",
    icon: "📢",
    description: "News, updates, new services",
    headerColor: "#4A9E7E",
    accentColor: "#E8F5EE",
  },
  promotion: {
    id: "promotion",
    name: "Promotion",
    icon: "🎉",
    description: "Discounts, offers, deals",
    headerColor: "#E8C86A",
    accentColor: "#FFF8E7",
  },
  thank_you: {
    id: "thank_you",
    name: "Thank You",
    icon: "💚",
    description: "Appreciation, milestones",
    headerColor: "#5B9EC4",
    accentColor: "#E6F0F7",
  },
  simple: {
    id: "simple",
    name: "Simple Note",
    icon: "📝",
    description: "Quick personal message",
    headerColor: "#1B3A2D",
    accentColor: "#F4F8F6",
  },
};

// ─── Default Pricing (used if nothing in localStorage) ───
export const DEFAULT_PRICING = {
  bedroom: { price: 25, unit: "per room", icon: "🛏️", label: "Bedroom", category: "room" },
  bathroom: { price: 35, unit: "per room", icon: "🚿", label: "Bathroom", category: "room" },
  living: { price: 25, unit: "per room", icon: "🛋️", label: "Living Room", category: "room" },
  kitchen: { price: 50, unit: "per room", icon: "🍳", label: "Kitchen", category: "room" },
  oven: { price: 65, unit: "per clean", icon: "♨️", label: "Oven Deep Clean", category: "addon" },
  sheets: { price: 10, unit: "per set", icon: "🛏️", label: "Sheet Changes", category: "addon" },
  windows: { price: 5, unit: "per window", icon: "🪟", label: "Window Cleaning", category: "addon", hasQuantity: true },
  organising: { price: 60, unit: "per session", icon: "📦", label: "Organising", category: "addon" },
};

// ─── Load/Save Pricing from localStorage ───
export function loadPricing() {
  try {
    const stored = localStorage.getItem("db_pricing");
    if (stored) return JSON.parse(stored);
  } catch {}
  return { ...DEFAULT_PRICING };
}

export function savePricing(pricing) {
  try {
    localStorage.setItem("db_pricing", JSON.stringify(pricing));
  } catch {}
}

// ─── Default Message Templates ───
export const DEFAULT_TEMPLATES = [
  {
    id: "welcome",
    name: "Welcome Reply",
    content: "Hey! 👋 Thanks so much for reaching out to Dust Bunnies! We'd love to help get your home sparkling. Could you fill in our quick form so we can put together a personalised quote for you? [FORM LINK] 🌿",
    isDefault: true,
  },
  {
    id: "quote_ready",
    name: "Quote Ready",
    content: "Hey {NAME}! 🌿 Great news — your personalised quote is ready! We've put together pricing for your {FREQUENCY} clean based on the details you shared. Take a look and let us know if you'd like to go ahead! 💚",
    isDefault: true,
  },
  {
    id: "follow_up",
    name: "Follow Up",
    content: "Hey {NAME}! 👋 Just checking in — did you get a chance to look at the quote we sent through? Happy to answer any questions or make adjustments. No pressure at all! 🌿",
    isDefault: true,
  },
  {
    id: "out_of_area",
    name: "Out of Area",
    content: "Hey! Thanks so much for getting in touch 💚 Unfortunately we don't currently service your area, but we're expanding soon! We'll keep your details on file and reach out when we do. Wishing you all the best! 🌿",
    isDefault: true,
  },
  {
    id: "booking_confirmed",
    name: "Booking Confirmed",
    content: "Yay! 🎉 You're all booked in! We're so excited to welcome you to the Dust Bunnies family. Your first clean is scheduled for [DATE]. See you then! 💚🌿",
    isDefault: true,
  },
];

export function loadTemplates() {
  try {
    const stored = localStorage.getItem("db_templates");
    if (stored) return JSON.parse(stored);
  } catch {}
  return [...DEFAULT_TEMPLATES];
}

export function saveTemplates(templates) {
  try {
    localStorage.setItem("db_templates", JSON.stringify(templates));
  } catch {}
}

// ─── Clients/Contacts Storage ───
export function loadClients() {
  try {
    const stored = localStorage.getItem("db_clients");
    if (stored) return JSON.parse(stored);
  } catch {}
  return [];
}

export function saveClients(clients) {
  try {
    localStorage.setItem("db_clients", JSON.stringify(clients));
  } catch {}
}

export const WEEKLY_DISCOUNT = 0.10;

export function calcQuote(details, pricing) {
  let subtotal = 0;
  const items = [];
  
  // Get room services
  const roomServices = Object.entries(pricing).filter(([_, v]) => v.category === "room");
  
  roomServices.forEach(([key, service]) => {
    const qty = details[key] || 0;
    if (qty > 0) {
      const total = qty * service.price;
      items.push({ description: `${service.label} cleaning`, qty, unitPrice: service.price, total });
      subtotal += total;
    }
  });

  // Get addon services
  const addonServices = Object.entries(pricing).filter(([_, v]) => v.category === "addon");
  
  addonServices.forEach(([key, service]) => {
    const active = details[key];
    const qty = service.hasQuantity ? (details[`${key}Count`] || 0) : 1;
    if (active && qty > 0) {
      const total = qty * service.price;
      items.push({ description: service.label, qty, unitPrice: service.price, total });
      subtotal += total;
    }
  });

  const isWeekly = details.frequency === "weekly";
  const discount = isWeekly ? Math.round(subtotal * WEEKLY_DISCOUNT * 100) / 100 : 0;
  const total = subtotal - discount;

  return { items, subtotal, discount, discountLabel: isWeekly ? "Weekly Clean Discount (10%)" : null, total };
}

// ─── Mock Data Generator ───
const MOCK_NAMES = [
  "Sarah Mitchell", "James Cooper", "Priya Sharma", "Lena Nguyen",
  "Tom Brady", "Emily Watson", "Mike Chen", "Jessica Lee",
  "David Kim", "Rachel Green", "Sophie Turner", "Alex Morrison",
  "Hannah Brooks", "Ben Gallagher", "Olivia Hart", "Nathan Price"
];

const MOCK_MESSAGES = [
  "Hi! I'd love a quote for a regular clean of my home please 🏡",
  "Hey, was recommended by a friend. Looking for fortnightly cleaning?",
  "Hello! Just moved to the area and need a cleaner. Can you help?",
  "Hi there, interested in your cleaning services. What do you need from me?",
  "Hey! Do you service my area? Looking for weekly cleaning.",
  "Hi, I need a deep clean + regular ongoing service. What are your rates?",
  "Hello! Saw your page on Facebook. Would love a quote please!",
  "Hey there! Looking for a reliable cleaner, my friend Sarah recommended you 💚",
];

const CHANNELS = ["messenger", "instagram", "email"];

let _idCounter = 100;
export function generateMockEnquiry(forceArea = null) {
  const id = ++_idCounter;
  const name = MOCK_NAMES[Math.floor(Math.random() * MOCK_NAMES.length)];
  const channel = CHANNELS[Math.floor(Math.random() * CHANNELS.length)];
  const message = MOCK_MESSAGES[Math.floor(Math.random() * MOCK_MESSAGES.length)];
  const suburb = forceArea || (Math.random() > 0.15
    ? SERVICED_AREAS[Math.floor(Math.random() * SERVICED_AREAS.length)]
    : "Caloundra");

  return {
    id, name, channel, suburb, message,
    status: "new",
    timestamp: new Date().toISOString(),
    avatar: name.split(" ").map(n => n[0]).join(""),
    details: null,
    quoteId: null,
    archived: false,
  };
}

export function generateMockFormSubmission() {
  const name = MOCK_NAMES[Math.floor(Math.random() * MOCK_NAMES.length)];
  const suburb = SERVICED_AREAS[Math.floor(Math.random() * SERVICED_AREAS.length)];
  return {
    name, suburb,
    email: name.toLowerCase().replace(" ", ".") + "@email.com",
    phone: "04" + Math.floor(10000000 + Math.random() * 90000000),
    bedrooms: 2 + Math.floor(Math.random() * 3),
    bathrooms: 1 + Math.floor(Math.random() * 2),
    living: 1 + Math.floor(Math.random() * 2),
    kitchen: 1,
    frequency: ["weekly", "fortnightly", "monthly"][Math.floor(Math.random() * 3)],
    oven: Math.random() > 0.6,
    sheets: Math.random() > 0.7,
    windows: Math.random() > 0.5,
    windowsCount: 2 + Math.floor(Math.random() * 8),
    organising: Math.random() > 0.8,
    notes: Math.random() > 0.5 ? "We have a dog, please keep the gate closed!" : "",
  };
}

// ─── Initial sample data ───
export function getInitialEnquiries() {
  const now = new Date();
  return [
    {
      id: 1, name: "Sarah Mitchell", channel: "messenger", suburb: "Buderim",
      message: "Hi! I'd love a quote for a regular clean of my 3-bed home please 🏡",
      status: "quote_ready", timestamp: new Date(now - 3600000 * 2).toISOString(),
      avatar: "SM", archived: false,
      details: { bedrooms: 3, bathrooms: 2, living: 1, kitchen: 1, frequency: "fortnightly", oven: true, sheets: false, windows: false, windowsCount: 0, organising: false, notes: "", email: "sarah.mitchell@email.com", phone: "0412345678" },
      quoteId: "Q001",
    },
    {
      id: 2, name: "James Cooper", channel: "email", suburb: "Maroochydore",
      message: "Hey, was recommended by a friend. Looking for weekly cleaning of our place?",
      status: "info_requested", timestamp: new Date(now - 3600000 * 5).toISOString(),
      avatar: "JC", details: null, quoteId: null, archived: false,
    },
    {
      id: 3, name: "Tom Brady", channel: "instagram", suburb: "Caloundra",
      message: "Hi do you clean in Caloundra? Need a fortnightly cleaner",
      status: "out_of_area", timestamp: new Date(now - 3600000 * 8).toISOString(),
      avatar: "TB", details: null, quoteId: null, archived: false,
    },
    {
      id: 4, name: "Lena Nguyen", channel: "messenger", suburb: "Mooloolaba",
      message: "Hello! Just moved here and need a regular cleaner. Have a 4 bed 2 bath.",
      status: "accepted", timestamp: new Date(now - 86400000).toISOString(),
      avatar: "LN", archived: false,
      details: { bedrooms: 4, bathrooms: 2, living: 2, kitchen: 1, frequency: "weekly", oven: false, sheets: true, windows: true, windowsCount: 8, organising: false, notes: "2 dogs, please close front gate", email: "lena.nguyen@email.com", phone: "0423456789" },
      quoteId: "Q002",
    },
    {
      id: 5, name: "Emily Watson", channel: "email", suburb: "Twin Waters",
      message: "Hi there, interested in your cleaning services for our holiday rental",
      status: "new", timestamp: new Date(now - 1800000).toISOString(),
      avatar: "EW", details: null, quoteId: null, archived: false,
    },
  ];
}

export function getInitialQuotes() {
  return [
    {
      id: "Q001", enquiryId: 1, name: "Sarah Mitchell", channel: "messenger", suburb: "Buderim",
      frequency: "Fortnightly", status: "pending_approval", createdAt: new Date(Date.now() - 3600000).toISOString(),
      details: { bedrooms: 3, bathrooms: 2, living: 1, kitchen: 1, frequency: "fortnightly", oven: true, sheets: false, windows: false, windowsCount: 0, organising: false },
    },
    {
      id: "Q002", enquiryId: 4, name: "Lena Nguyen", channel: "messenger", suburb: "Mooloolaba",
      frequency: "Weekly", status: "accepted", createdAt: new Date(Date.now() - 86400000).toISOString(),
      details: { bedrooms: 4, bathrooms: 2, living: 2, kitchen: 1, frequency: "weekly", oven: false, sheets: true, windows: true, windowsCount: 8, organising: false },
    },
  ];
}

// ─── Icon options for new services ───
export const ICON_OPTIONS = ["🧹", "🧽", "🪣", "🧴", "✨", "🏠", "🚿", "🛁", "🪟", "🚪", "🛋️", "🛏️", "🍳", "♨️", "📦", "🌿", "💨", "🧺", "🪑", "🖼️"];

// ═══════════════════════════════════════════════════════════
// SCHEDULING SYSTEM
// ═══════════════════════════════════════════════════════════

export const DEFAULT_SCHEDULE_SETTINGS = {
  workingHours: {
    start: "08:00",
    end: "16:00",
    breakDuration: 30, // minutes
    travelBuffer: 20, // minutes between jobs
  },
  durationEstimates: {
    bedroom: 25,
    bathroom: 30,
    living: 20,
    kitchen: 25,
    baseSetup: 30,
  },
  areaSchedule: {
    monday: ["Buderim", "Kuluin"],
    tuesday: ["Maroochydore", "Alexandra Headland"],
    wednesday: ["Mooloolaba", "Minyama"],
    thursday: ["Twin Waters", "Mountain Creek"],
    friday: ["Forest Glen", "Mons"],
  },
  jobsPerDay: 6,
  formOptions: {
    showAddonPrices: false,
    showWeeklyDiscountBadge: true,
    showStepSummary: true,
  },
};

export function normalizeScheduleSettings(raw) {
  const source = raw && typeof raw === "object" ? raw : {};
  return {
    ...DEFAULT_SCHEDULE_SETTINGS,
    ...source,
    workingHours: {
      ...DEFAULT_SCHEDULE_SETTINGS.workingHours,
      ...(source.workingHours || {}),
    },
    durationEstimates: {
      ...DEFAULT_SCHEDULE_SETTINGS.durationEstimates,
      ...(source.durationEstimates || {}),
    },
    areaSchedule: {
      ...DEFAULT_SCHEDULE_SETTINGS.areaSchedule,
      ...(source.areaSchedule || {}),
    },
    formOptions: {
      ...DEFAULT_SCHEDULE_SETTINGS.formOptions,
      ...(source.formOptions || {}),
    },
  };
}

export function loadScheduleSettings() {
  try {
    const stored = localStorage.getItem("db_schedule_settings");
    if (stored) return normalizeScheduleSettings(JSON.parse(stored));
  } catch {}
  return normalizeScheduleSettings(DEFAULT_SCHEDULE_SETTINGS);
}

export function saveScheduleSettings(settings) {
  try {
    localStorage.setItem("db_schedule_settings", JSON.stringify(settings));
  } catch {}
}

export function loadScheduledJobs() {
  try {
    const stored = localStorage.getItem("db_scheduled_jobs");
    if (stored) return JSON.parse(stored);
  } catch {}
  return [];
}

export function saveScheduledJobs(jobs) {
  try {
    localStorage.setItem("db_scheduled_jobs", JSON.stringify(jobs));
  } catch {}
}

export function loadScheduleClients() {
  try {
    const stored = localStorage.getItem("db_schedule_clients");
    if (stored) return JSON.parse(stored);
  } catch {}
  return [];
}

export function saveScheduleClients(clients) {
  try {
    localStorage.setItem("db_schedule_clients", JSON.stringify(clients));
  } catch {}
}

// ─── Calculate job duration from room counts ───
export function calculateDuration(client, settings) {
  const est = settings.durationEstimates;
  let duration = est.baseSetup;
  duration += (client.bedrooms || 0) * est.bedroom;
  duration += (client.bathrooms || 0) * est.bathroom;
  duration += (client.living || 0) * est.living;
  duration += (client.kitchen || 0) * est.kitchen;
  return duration;
}

// ─── Get day of week from date ───
export function getDayOfWeek(dateStr) {
  const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  return days[new Date(dateStr).getDay()];
}

// ─── Demo Data Generator ───
const DEMO_NAMES = [
  "Sarah Mitchell", "James Cooper", "Priya Sharma", "Lena Nguyen", "Tom Wilson",
  "Emily Watson", "Mike Chen", "Jessica Lee", "David Kim", "Rachel Green",
  "Sophie Turner", "Alex Morrison", "Hannah Brooks", "Ben Gallagher", "Olivia Hart",
  "Nathan Price", "Emma Collins", "Ryan Murphy", "Chloe Adams", "Jack Thompson",
  "Mia Roberts", "Luke Anderson", "Zoe Campbell", "Ethan Wright", "Lily Scott",
  "Noah Martin", "Grace Taylor", "Mason Brown", "Ava Davis", "Logan White",
  "Isla Moore", "Carter Hall", "Amelia Clark", "Owen Lewis", "Harper Young",
  "Sebastian King", "Ella Baker", "Henry Hill", "Scarlett Reed", "William Cook",
  "Victoria Morgan", "Daniel Evans", "Penelope Shaw", "Matthew Ross", "Aria Hughes"
];

const DEMO_ADDRESSES = {
  "Buderim": [
    "5 Lindsay Road, Buderim QLD 4556",
    "23 Ballinger Crescent, Buderim QLD 4556",
    "18 Gloucester Road, Buderim QLD 4556",
    "42 King Street, Buderim QLD 4556",
    "7 Burnett Street, Buderim QLD 4556",
    "31 Church Street, Buderim QLD 4556"
  ],
  "Maroochydore": [
    "15 Duporth Avenue, Maroochydore QLD 4558",
    "28 Sixth Avenue, Maroochydore QLD 4558",
    "3 Beach Road, Maroochydore QLD 4558",
    "45 Aerodrome Road, Maroochydore QLD 4558",
    "12 Plaza Parade, Maroochydore QLD 4558"
  ],
  "Kuluin": [
    "8 Nambour Connection Road, Kuluin QLD 4558",
    "22 Dixon Road, Kuluin QLD 4558",
    "35 Kiel Mountain Road, Kuluin QLD 4558",
    "14 Jones Road, Kuluin QLD 4558"
  ],
  "Mooloolaba": [
    "5 Parkyn Parade, Mooloolaba QLD 4557",
    "19 Brisbane Road, Mooloolaba QLD 4557",
    "32 Smith Street, Mooloolaba QLD 4557",
    "48 Walan Street, Mooloolaba QLD 4557"
  ],
  "Alexandra Headland": [
    "11 Pacific Terrace, Alexandra Headland QLD 4572",
    "26 Okinja Road, Alexandra Headland QLD 4572",
    "8 Alexandra Parade, Alexandra Headland QLD 4572"
  ],
  "Twin Waters": [
    "7 Dodonaea Close, Twin Waters QLD 4564",
    "21 Cove Boulevard, Twin Waters QLD 4564",
    "38 Oceanside Drive, Twin Waters QLD 4564"
  ],
  "Mountain Creek": [
    "14 Karawatha Drive, Mountain Creek QLD 4557",
    "29 Glenfields Boulevard, Mountain Creek QLD 4557",
    "46 Mountain Ash Drive, Mountain Creek QLD 4557"
  ],
  "Minyama": [
    "9 Jessica Boulevard, Minyama QLD 4575",
    "22 Doyles Road, Minyama QLD 4575",
    "35 Wises Road, Minyama QLD 4575"
  ],
  "Forest Glen": [
    "6 Doolan Street, Forest Glen QLD 4556",
    "18 Mons School Road, Forest Glen QLD 4556",
    "31 Panorama Drive, Forest Glen QLD 4556"
  ],
  "Mons": [
    "4 Doolan Street, Mons QLD 4556",
    "16 Mooloolah Connection Road, Mons QLD 4556"
  ],
};

const DEMO_NOTES = [
  "2 dogs, keep gate closed",
  "Cat is friendly, don't let outside",
  "Baby sleeps 1-3pm, please be quiet",
  "Prefers eco products only - allergies",
  "Water plants on windowsill please",
  "Has own vacuum, use theirs",
  "",
  "",
  "",
  "",
  "",
];

const DEMO_ACCESS_NOTES = [
  "Key under front doormat",
  "Lockbox on side gate - code 5678",
  "Ring doorbell, client works from home",
  "Key in garden gnome by front door",
  "Garage code 9999, enter through laundry",
  "Alarm code: 1234#, disarm immediately",
  "Key with neighbour at #15",
  "Sliding door unlocked, enter via deck",
  "Code for keypad: 0000",
  "Client leaves door unlocked",
  "",
  "",
];

// ─── Generate schedule for clients over date range ───
export function generateScheduleForClients(clients, startDate, endDate, settings) {
  const jobs = [];
  const start = new Date(startDate);
  const end = new Date(endDate);
  
  const getDateStr = (d) => d.toISOString().split("T")[0];
  const dayNames = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  
  // Build a map of suburb -> preferred day based on area schedule
  const suburbToDay = {};
  Object.entries(settings.areaSchedule).forEach(([day, suburbs]) => {
    suburbs.forEach(suburb => {
      suburbToDay[suburb.toLowerCase()] = day;
    });
  });
  
  // Track team schedules: { "2025-02-17_team_a": [{ start: 480, end: 600 }, ...] }
  const teamSchedules = {};
  
  const timeToMins = (t) => {
    const [h, m] = t.split(":").map(Number);
    return h * 60 + m;
  };
  
  const minsToTime = (mins) => {
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
  };
  
  const workStart = timeToMins(settings.workingHours.start);
  const workEnd = timeToMins(settings.workingHours.end);
  const breakDuration = settings.workingHours.breakDuration;
  const travelBuffer = settings.workingHours.travelBuffer;
  const middayMins = 12 * 60; // 12:00 = 720 mins
  
  // Get next available slot for a team on a date
  const getNextSlot = (dateStr, teamId, duration) => {
    const key = `${dateStr}_${teamId}`;
    if (!teamSchedules[key]) {
      teamSchedules[key] = [];
    }
    
    const schedule = teamSchedules[key];
    const jobCount = schedule.filter(s => s.type === "job").length;
    
    // Check if team is at capacity
    if (jobCount >= (settings.jobsPerDay || settings.jobsPerTeamPerDay || 6)) {
      return null;
    }
    
    // Find first available slot
    let slotStart = workStart;
    
    if (schedule.length > 0) {
      // Sort by start time
      schedule.sort((a, b) => a.start - b.start);
      const lastSlot = schedule[schedule.length - 1];
      slotStart = lastSlot.end + travelBuffer;
    }
    
    // Check if we need to insert a break (after 2nd job, closest to midday)
    if (jobCount === 2 && !schedule.some(s => s.type === "break")) {
      // Insert break now if we're past 11am or this job would push us past 1pm
      if (slotStart >= 11 * 60 || slotStart + duration > 13 * 60) {
        const breakSlot = { type: "break", start: slotStart, end: slotStart + breakDuration };
        schedule.push(breakSlot);
        slotStart = breakSlot.end + travelBuffer;
      }
    }
    
    const slotEnd = slotStart + duration;
    
    // Check if job fits within working hours
    if (slotEnd > workEnd) {
      return null;
    }
    
    return { start: slotStart, end: slotEnd };
  };
  
  // Add a job to the schedule
  const addToSchedule = (dateStr, teamId, slot) => {
    const key = `${dateStr}_${teamId}`;
    if (!teamSchedules[key]) {
      teamSchedules[key] = [];
    }
    teamSchedules[key].push({ type: "job", ...slot });
  };
  
  // Generate dates to check
  const allDates = [];
  let currentDate = new Date(start);
  while (currentDate <= end) {
    const dayName = dayNames[currentDate.getDay()];
    if (dayName !== "saturday" && dayName !== "sunday") {
      allDates.push({
        dateStr: getDateStr(currentDate),
        dayName
      });
    }
    currentDate.setDate(currentDate.getDate() + 1);
  }
  
  // Process each client
  clients.forEach(client => {
    if (client.status !== "active") return;
    
    const duration = client.customDuration || calculateDuration(client, settings);
    
    // Determine which day this client should be scheduled based on their suburb
    const clientSuburbDay = suburbToDay[client.suburb.toLowerCase()] || client.preferredDay;
    
    // Find matching dates for this client's frequency
    let scheduledCount = 0;
    const maxSchedules = client.frequency === "weekly" ? 2 : 1; // 2 weeks of data
    
    for (const { dateStr, dayName } of allDates) {
      if (scheduledCount >= maxSchedules) break;
      
      // Check if this day matches client's suburb-assigned day
      if (dayName !== clientSuburbDay) continue;
      
      // For fortnightly, skip every other occurrence
      if (client.frequency === "fortnightly" && scheduledCount === 1) continue;
      
      // Try to get a slot for this date
      const slot = getNextSlot(dateStr, "default", duration);
      
      if (slot) {
        addToSchedule(dateStr, "default", slot);
        
        jobs.push({
          id: `job_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
          date: dateStr,
          clientId: client.id,
          clientName: client.name,
          address: client.address || "",
          email: client.email || "",
          phone: client.phone || "",
          suburb: client.suburb,
          bedrooms: client.bedrooms ?? null,
          bathrooms: client.bathrooms ?? null,
          living: client.living ?? null,
          kitchen: client.kitchen ?? null,
          frequency: client.frequency || null,
          preferred_day: client.preferred_day || client.preferredDay || null,
          preferred_time: client.preferred_time || client.preferredTime || null,
          access_notes: client.access_notes || client.accessNotes || null,
          notes: client.notes || null,
          startTime: minsToTime(slot.start),
          endTime: minsToTime(slot.end),
          duration,
          status: "scheduled",
          isDemo: client.isDemo,
        });
        
        scheduledCount++;
        
        // Skip ahead based on frequency
        if (client.frequency === "weekly") {
          // Find the next occurrence of this day (7 days later)
          const nextIndex = allDates.findIndex(d => d.dateStr === dateStr) + 5; // roughly 7 days accounting for weekends
        }
      }
    }
  });
  
  // Add break entries to jobs for display
  Object.entries(teamSchedules).forEach(([key, schedule]) => {
    const [dateStr, teamId] = key.split("_");
    const breakSlot = schedule.find(s => s.type === "break");
    if (breakSlot) {
      jobs.push({
        id: `break_${dateStr}_${teamId}`,
        date: dateStr,
        clientId: null,
        clientName: "🍴 Break",
        suburb: "",
        startTime: minsToTime(breakSlot.start),
        endTime: minsToTime(breakSlot.end),
        duration: breakDuration,
        status: "break",
        isDemo: true,
        isBreak: true,
      });
    }
  });
  
  return jobs;
}

// ─── Wipe all demo data ───
export function wipeDemoData() {
  const clients = loadScheduleClients().filter(c => !c.isDemo);
  const jobs = loadScheduledJobs().filter(j => !j.isDemo);
  saveScheduleClients(clients);
  saveScheduledJobs(jobs);
  return { clients, jobs };
}
