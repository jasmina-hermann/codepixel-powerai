// Alle Inhalte der Leistungs-Unterseiten (/leistungen/...).
// ACHTUNG: Preise bei "software", "prozesse" und "coaching" sind VORSCHLÄGE.
// Bitte vor dem Livegang prüfen und anpassen.

export interface ServicePair {
  problem: string;
  problemText: string;
  solution: string;
  solutionText: string;
}

export interface ServiceStep {
  title: string;
  text: string;
}

export interface ServicePackage {
  name: string;
  price: string;
  priceNote?: string;
  description: string;
  features: string[];
  featured?: boolean;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceLink {
  title: string;
  url: string;
  text: string;
}

export interface Service {
  slug: string;
  name: string;
  badge: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  menuDescription: string;
  menuIcon: string;
  intro: string;
  pairs: ServicePair[];
  stepsTitle: string;
  steps: ServiceStep[];
  packagesTitle: string;
  packagesIntro: string;
  packages: ServicePackage[];
  packagesNote: string;
  related: ServiceLink[];
  faq: ServiceFaq[];
  ctaTitle: string;
  ctaText: string;
}

export const PRICE_NOTE =
  "Alle Preise sind unverbindliche Richtwerte. Das genaue Angebot erhalten Sie nach einem kostenlosen Erstgespräch.";

export const services: Service[] = [
  {
    slug: "webseiten",
    name: "Webseiten",
    badge: "Webseiten",
    metaTitle: "Webseiten für KMU in der Schweiz | Codepixel",
    metaDescription:
      "Individuelle Webseiten, die Vertrauen schaffen und Anfragen bringen. Onepager ab CHF 1'000, KMU Basic ab CHF 2'300, Business ab CHF 5'000.",
    heroTitle: "Webseiten, die Anfragen <span class='heading-script-accent'>bringen</span>",
    heroSubtitle:
      "Individuelles Design, schnelle Technik und eine klare Nutzerführung. Damit aus Besuchern Kunden werden.",
    menuDescription: "Design, das Anfragen bringt",
    menuIcon: "HiOutlineNewspaper",
    intro:
      "Eine Webseite ist oft der erste Eindruck Ihres Unternehmens. Wir sorgen dafür, dass dieser Eindruck überzeugt und Besucher den Weg zu Ihnen finden.",
    pairs: [
      {
        problem: "Die Webseite wirkt veraltet",
        problemText: "Das Design passt nicht mehr zum Unternehmen und schreckt Interessenten eher ab.",
        solution: "Individuelles Design nach Mass",
        solutionText:
          "Wir gestalten einen Auftritt, der zu Ihrer Marke passt. Keine Vorlage von der Stange und keine austauschbare Baukastenoptik.",
      },
      {
        problem: "Besucher kommen, aber niemand meldet sich",
        problemText: "Angebote sind schwer zu verstehen und der Weg zur Kontaktaufnahme ist unklar.",
        solution: "Klare Nutzerführung",
        solutionText:
          "Verständliche Inhalte, deutliche Handlungsaufforderungen und kurze Wege zur Anfrage führen Besucher gezielt zum Kontakt.",
      },
      {
        problem: "Auf dem Handy ist alles unübersichtlich",
        problemText: "Texte sind zu klein, Seiten laden langsam und Buttons sind kaum zu treffen.",
        solution: "Mobile First und schnell",
        solutionText:
          "Ihre Seite wird zuerst für das Smartphone entwickelt und bleibt auf Tablet und Computer schnell, hochwertig und leicht bedienbar.",
      },
      {
        problem: "Bei Google nicht auffindbar",
        problemText: "Potenzielle Kunden suchen nach Ihren Leistungen, landen aber bei der Konkurrenz.",
        solution: "SEO und Google-Profil von Anfang an",
        solutionText:
          "Saubere Technik, Inhalte mit Keyword-Recherche und ein eingerichtetes Google Unternehmensprofil machen Sie besser sichtbar.",
      },
    ],
    stepsTitle: "So entsteht Ihre Webseite",
    steps: [
      { title: "Unverbindlich kennenlernen", text: "Sie erzählen von Ihrem Unternehmen und Ihren Zielen. Gemeinsam definieren wir, was die Webseite erreichen soll." },
      { title: "Konzept sichtbar machen", text: "Aus Ihren Anforderungen entsteht ein individuelles Designkonzept, das zu Ihrer Marke passt." },
      { title: "Umsetzen und verfeinern", text: "Nach Ihrer Freigabe wird die Seite responsiv entwickelt. Ihr Feedback fliesst direkt in den Feinschliff ein." },
      { title: "Sicher online gehen", text: "Nach sorgfältigen Tests geht die Seite live. Sie erhalten alle Zugänge und eine persönliche Einführung." },
    ],
    packagesTitle: "Pakete und Preise",
    packagesIntro: "Wählen Sie die passende Grundlage. Unsicher? Wir beraten Sie gerne persönlich.",
    packages: [
      {
        name: "Onepager",
        price: "Ab CHF 1'000.–",
        description: "Der professionelle Einstieg für Einzelunternehmen und kleine Teams.",
        features: [
          "Eine individuelle Inhaltsseite",
          "Responsives Webdesign für alle Geräte",
          "Suchmaschinenfreundliche Inhalte",
          "Kontaktformular inklusive Datenschutz",
          "Impressum und Datenschutzerklärung",
          "Technische Qualitätssicherung und Liveschaltung",
        ],
      },
      {
        name: "KMU Basic",
        price: "Ab CHF 2'300.–",
        description: "Unser meistgewähltes Paket für Unternehmen mit mehreren Leistungen oder Zielgruppen.",
        featured: true,
        features: [
          "Bis zu 6 individuelle Inhaltsseiten",
          "Responsives Premium Design",
          "Suchmaschinenfreundliche Seitenstruktur",
          "Inhalte inklusive Keyword-Recherche",
          "Einrichtung Google Unternehmensprofil",
          "Korrekturen bis zu 4 Stunden",
        ],
      },
      {
        name: "Business",
        price: "Ab CHF 5'000.–",
        description: "Für Unternehmen mit umfangreichen Inhalten und hohen Ansprüchen an Design und Sichtbarkeit.",
        features: [
          "Bis zu 12 Inhaltsseiten inklusive Landingpages",
          "Individuelles Konzept für Nutzerführung und Design",
          "Erweiterte Suchmaschinenoptimierung und interne Verlinkung",
          "Strukturierte Daten für Google und KI-Suchen",
          "Zweisprachige Webseite (z. B. Deutsch und Englisch)",
          "Blog-System und persönliche Projektbegleitung",
        ],
      },
    ],
    packagesNote:
      "Service- und Wartungspakete für die Zeit nach dem Livegang (Updates, Sicherheit, Anpassungen) erhalten Sie auf Anfrage.",
    related: [
      {
        title: "Webseiten nach Mass für starke Unternehmen",
        url: "/case-studies/case-study-4",
        text: "So entsteht ein Webauftritt, der Vertrauen schafft und Anfragen unterstützt.",
      },
    ],
    faq: [
      {
        question: "Wie lange dauert es, bis meine Webseite online ist?",
        answer:
          "Das hängt vom Umfang ab und davon, wie schnell Inhalte und Freigaben bei uns eintreffen. Einen Onepager setzen wir oft in wenigen Wochen um, grössere Webseiten brauchen entsprechend länger. Im Erstgespräch nennen wir Ihnen einen konkreten Zeitplan.",
      },
      {
        question: "Kann ich Inhalte später selbst ändern?",
        answer:
          "Wo es sinnvoll ist, zum Beispiel beim Blog, ja. Alles andere passen wir schnell für Sie an. Sie erreichen uns direkt, ohne Umwege.",
      },
      {
        question: "Was passiert nach dem Livegang?",
        answer:
          "Sie erhalten alle Zugänge und eine persönliche Einführung. Auf Wunsch betreuen wir Ihre Webseite danach mit einem Service- oder Wartungspaket weiter.",
      },
    ],
    ctaTitle: "Bereit für eine Webseite, die <span class='heading-script-accent'>wirkt</span>?",
    ctaText: "Erzählen Sie uns von Ihrem Vorhaben. Sie erhalten eine erste, unverbindliche Einschätzung.",
  },

  {
    slug: "software",
    name: "Software & Apps",
    badge: "Software & Apps",
    metaTitle: "Individuelle Software und Apps für KMU | Codepixel",
    metaDescription:
      "Massgeschneiderte Software, Web-Apps und mobile Apps, die genau zu Ihren Abläufen passen. Vom Konzept-Workshop bis zur fertigen Lösung.",
    heroTitle: "Software, die zu Ihren Abläufen <span class='heading-script-accent'>passt</span>",
    heroSubtitle:
      "Individuelle Programme und Apps, die Arbeit vereinfachen, statt neue Probleme zu schaffen.",
    menuDescription: "Programme und Apps nach Mass",
    menuIcon: "HiOutlineCog",
    intro:
      "Standardsoftware zwingt Ihr Team oft in fremde Abläufe. Wir entwickeln Lösungen, die sich Ihrem Alltag anpassen.",
    pairs: [
      {
        problem: "Standardsoftware passt nicht zu Ihren Abläufen",
        problemText: "Ihr Team arbeitet mit Umwegen, weil das Programm nicht so funktioniert wie das Unternehmen.",
        solution: "Software, die Ihre Abläufe abbildet",
        solutionText:
          "Wir entwickeln Programme, die genau zu Ihrem Alltag passen, damit Ihr Team schneller und mit weniger Fehlern arbeitet.",
      },
      {
        problem: "Informationen liegen verstreut",
        problemText: "Excel-Listen, E-Mails und Notizen führen zu Suchaufwand und widersprüchlichen Angaben.",
        solution: "Eine zentrale Anwendung",
        solutionText:
          "Alle wichtigen Angaben sind an einem Ort verfügbar und können direkt aktualisiert werden. Alle arbeiten mit denselben Informationen.",
      },
      {
        problem: "Der Aussendienst hat keine aktuellen Daten",
        problemText: "Aufträge, Rapporte und Fotos werden erst im Büro nachgetragen.",
        solution: "Mobile Apps für unterwegs",
        solutionText:
          "Aufträge werden direkt vor Ort bearbeitet, dokumentiert und abgeschlossen. Mit Fotos, Unterschrift und automatischer Übergabe ans Büro.",
      },
      {
        problem: "Systeme sprechen nicht miteinander",
        problemText: "Daten müssen zwischen Programmen von Hand übertragen werden.",
        solution: "Schnittstellen zu Ihren Systemen",
        solutionText:
          "Wir verbinden Ihre neue Lösung mit Buchhaltung, Kundenverwaltung und weiteren Systemen, damit nichts doppelt erfasst wird.",
      },
    ],
    stepsTitle: "So entsteht Ihre Software",
    steps: [
      { title: "Anforderungen klären", text: "Wir verstehen Ihre Abläufe und legen gemeinsam fest, was die Lösung können muss." },
      { title: "Konzept und Prototyp", text: "Sie sehen früh, wie die Anwendung aussieht und funktioniert, und können Rückmeldungen geben." },
      { title: "Entwicklung in Etappen", text: "Wir setzen Schritt für Schritt um. So können Sie früh testen und Änderungen bleiben überschaubar." },
      { title: "Einführung und Betreuung", text: "Wir begleiten den Start, schulen Ihr Team und stehen danach für Anpassungen zur Verfügung." },
    ],
    packagesTitle: "Wege zur eigenen Software",
    packagesIntro: "Sie müssen nicht gleich das ganze Projekt beauftragen. Starten Sie mit einem klaren ersten Schritt.",
    packages: [
      {
        name: "Konzept-Workshop",
        price: "Ab CHF 690.–",
        description: "Der sichere Einstieg: Sie wissen danach genau, was gebaut wird und was es kostet.",
        features: [
          "Workshop zu Abläufen und Zielen",
          "Skizze der Anwendung",
          "Schriftliches Konzept",
          "Aufwandsschätzung",
        ],
      },
      {
        name: "Start-Paket",
        price: "Ab CHF 4'900.–",
        description: "Erste lauffähige Version einer einfachen Web-App oder eines internen Tools.",
        featured: true,
        features: [
          "Klickbarer Prototyp",
          "Lauffähige erste Version",
          "Eine Benutzerrolle und eine Schnittstelle",
          "Einführung für Ihr Team",
        ],
      },
      {
        name: "Individuelle Software",
        price: "Festpreis nach Konzept",
        priceNote: "Nach dem Konzept-Workshop",
        description: "Massgeschneiderte Lösung für Ihre Abläufe, mit allen nötigen Funktionen und Schnittstellen.",
        features: [
          "Umsetzung in Etappen",
          "Mehrere Benutzerrollen",
          "Schnittstellen zu Ihren Systemen",
          "Schulung und Betreuung",
        ],
      },
    ],
    packagesNote:
      "Der Konzept-Workshop wird bei einer anschliessenden Beauftragung auf Wunsch angerechnet. Betreuung und Weiterentwicklung nach dem Start auf Anfrage.",
    related: [
      { title: "Kita Connect", url: "/case-studies/case-study-1", text: "App für Eltern und Betreuungsteams." },
      { title: "Garage Flow", url: "/case-studies/case-study-2", text: "Werkstatt-App für Termine, Fahrzeuge und Aufträge." },
      { title: "Service Pilot", url: "/case-studies/case-study-3", text: "Mobile Lösung für Klima- und Heizungsbetriebe." },
    ],
    faq: [
      {
        question: "Was kostet eine individuelle Software?",
        answer:
          "Das hängt vom Umfang ab. Deshalb starten wir mit einem Konzept-Workshop. Danach kennen Sie Funktionen, Aufwand und Preis und können in Ruhe entscheiden.",
      },
      {
        question: "Gehört mir die Software am Ende?",
        answer:
          "Nutzungsrechte und Verantwortlichkeiten klären wir vor dem Start schriftlich, damit es später keine Überraschungen gibt.",
      },
      {
        question: "Kann die Software mit meinen bestehenden Programmen verbunden werden?",
        answer:
          "In vielen Fällen ja, zum Beispiel mit Buchhaltung oder Kundenverwaltung. Welche Schnittstellen möglich sind, klären wir im Erstgespräch.",
      },
    ],
    ctaTitle: "Welche Arbeit soll Ihre Software <span class='heading-script-accent'>abnehmen</span>?",
    ctaText: "Beschreiben Sie uns Ihren Alltag. Wir zeigen Ihnen, was sich digital lösen lässt.",
  },

  {
    slug: "prozesse",
    name: "Prozesse & Automatisierung",
    badge: "Prozessoptimierung",
    metaTitle: "Prozessoptimierung und Automatisierung für KMU | Codepixel",
    metaDescription:
      "Weniger Handarbeit, klare Abläufe: Prozess-Check ab CHF 490, Schnittstellen und Automatisierung für Ihr Unternehmen in der Schweiz.",
    heroTitle: "Klare Prozesse. Weniger <span class='heading-script-accent'>Handarbeit</span>",
    heroSubtitle:
      "Wir analysieren Ihre Abläufe, verbinden Ihre Systeme und automatisieren, was Ihr Team Zeit kostet.",
    menuDescription: "Abläufe verbinden und entlasten",
    menuIcon: "HiOutlineChartBar",
    intro:
      "Viele Unternehmen verlieren jede Woche Stunden mit Aufgaben, die ein gut eingerichteter Ablauf von selbst erledigt.",
    pairs: [
      {
        problem: "Dieselben Daten werden mehrfach eingegeben",
        problemText: "Das kostet Zeit und führt zu Tippfehlern und widersprüchlichen Angaben.",
        solution: "Systeme verbinden",
        solutionText:
          "Über Schnittstellen fliessen Daten automatisch zwischen Webseite, Kundenverwaltung, Kalender und Buchhaltung. Einmal erfassen genügt.",
      },
      {
        problem: "Anfragen laufen über viele Kanäle",
        problemText: "WhatsApp, E-Mail, Telefon und Zettel: Es geht etwas unter, und niemand hat den Überblick.",
        solution: "Ein klarer Ablauf mit zentraler Übersicht",
        solutionText:
          "Anfragen landen an einem Ort, werden automatisch erfasst und Ihr Team sieht jederzeit den aktuellen Status.",
      },
      {
        problem: "Wiederkehrende Arbeit frisst Zeit",
        problemText: "Bestätigungen, Erinnerungen, Berichte und Offerten werden jede Woche von Hand erstellt.",
        solution: "Automatisieren, was sich wiederholt",
        solutionText:
          "Standardaufgaben laufen automatisch im Hintergrund. Ihr Team gewinnt Zeit für Kundinnen, Kunden und die eigentliche Arbeit.",
      },
      {
        problem: "Niemand weiss, wo es hakt",
        problemText: "Es fühlt sich chaotisch an, aber die Ursachen sind nicht klar.",
        solution: "Prozess-Check mit klaren Empfehlungen",
        solutionText:
          "Wir erfassen Ihre Abläufe, zeigen die grössten Zeitfresser und priorisieren, was sich am meisten lohnt.",
      },
    ],
    stepsTitle: "So optimieren wir Ihre Abläufe",
    steps: [
      { title: "Ist-Zustand erfassen", text: "Wir schauen uns an, wie Ihre Arbeit heute wirklich abläuft, im Büro und im Alltag Ihres Teams." },
      { title: "Engpässe und Prioritäten", text: "Wir zeigen die grössten Zeitfresser und empfehlen, womit Sie zuerst beginnen." },
      { title: "Umsetzen und automatisieren", text: "Wir richten Schnittstellen und automatische Abläufe ein und testen sie gemeinsam mit Ihnen." },
      { title: "Team einführen und prüfen", text: "Wir begleiten die Einführung und prüfen, ob die neuen Abläufe im Alltag wirklich entlasten." },
    ],
    packagesTitle: "Pakete und Preise",
    packagesIntro: "Starten Sie mit dem Prozess-Check und entscheiden Sie danach, was sich für Sie lohnt.",
    packages: [
      {
        name: "Prozess-Check",
        price: "CHF 490.–",
        priceNote: "Fixpreis",
        description: "Der ideale Einstieg: ein halber Tag Analyse mit klaren Ergebnissen.",
        features: [
          "Analyse Ihrer Abläufe (halber Tag)",
          "Die 3 bis 5 grössten Zeitfresser",
          "Schriftlicher Kurzbericht",
          "Konkrete Lösungsvorschläge",
        ],
      },
      {
        name: "Automatisierung",
        price: "Ab CHF 1'900.–",
        description: "Ein bis zwei Abläufe werden eingerichtet und automatisiert.",
        featured: true,
        features: [
          "Umsetzung von 1 bis 2 Abläufen",
          "Schnittstellen zu Ihren Systemen",
          "Test und Einführung im Team",
          "Kurze Dokumentation",
        ],
      },
      {
        name: "Rundum-Optimierung",
        price: "Ab CHF 4'500.–",
        description: "Für Unternehmen, die mehrere Abläufe gleichzeitig neu aufstellen möchten.",
        features: [
          "Mehrere Abläufe und Schnittstellen",
          "Zentrale Übersicht für Ihr Team",
          "Schulung und Begleitung",
          "Nachbetreuung nach dem Start",
        ],
      },
    ],
    packagesNote:
      "Der Prozess-Check wird bei einer anschliessenden Umsetzung auf Wunsch angerechnet.",
    related: [
      { title: "Garage Flow", url: "/case-studies/case-study-2", text: "Termine, Aufträge und Buchhaltung an einem Ort." },
      { title: "Service Pilot", url: "/case-studies/case-study-3", text: "Vom Einsatz bis zur Übergabe an die Administration." },
    ],
    faq: [
      {
        question: "Für welche Unternehmen lohnt sich ein Prozess-Check?",
        answer:
          "Für alle, die das Gefühl haben, zu viel Zeit mit Administration, Suchen und doppelter Arbeit zu verbringen. Besonders bei kleinen und mittleren Unternehmen zeigt sich schnell, wo sich Aufwand sparen lässt.",
      },
      {
        question: "Muss ich dafür meine bestehende Software wechseln?",
        answer:
          "Nicht unbedingt. Oft verbinden wir die Systeme, die Sie bereits nutzen, und automatisieren die Wege dazwischen.",
      },
      {
        question: "Wie sehe ich, ob sich die Optimierung gelohnt hat?",
        answer:
          "Wir legen vorab fest, woran wir den Erfolg messen, zum Beispiel eingesparte Stunden pro Woche oder weniger Rückfragen. Nach der Einführung prüfen wir das gemeinsam.",
      },
    ],
    ctaTitle: "Wo verlieren Sie heute am meisten <span class='heading-script-accent'>Zeit</span>?",
    ctaText: "Buchen Sie einen Prozess-Check und erfahren Sie, was sich in Ihrem Alltag am meisten lohnt.",
  },

  {
    slug: "coaching",
    name: "Coaching & Begleitung",
    badge: "Coaching",
    metaTitle: "Coaching und Begleitung für Unternehmen | Codepixel",
    metaDescription:
      "Ehrliche Beratung und praxisnahes Coaching für Führung, Prozesse und die Einführung neuer Werkzeuge im Team.",
    heroTitle: "Klar führen. Neues im Team <span class='heading-script-accent'>verankern</span>",
    heroSubtitle:
      "Ehrliche Begleitung für Führung, Strukturen und die Einführung neuer digitaler Werkzeuge.",
    menuDescription: "Klare Strukturen, starkes Team",
    menuIcon: "HiOutlineUserGroup",
    intro:
      "Die beste Lösung nützt wenig, wenn sie im Alltag nicht ankommt. Coaching verbindet Technik, Menschen und Abläufe.",
    pairs: [
      {
        problem: "Verantwortlichkeiten sind unklar",
        problemText: "Aufgaben bleiben liegen oder werden doppelt gemacht, und im Team entsteht Reibung.",
        solution: "Rollen und Zuständigkeiten klären",
        solutionText:
          "Gemeinsam legen wir fest, wer wofür verantwortlich ist, und machen das für alle verständlich und umsetzbar.",
      },
      {
        problem: "Neue Software wird im Team nicht genutzt",
        problemText: "Das neue System steht bereit, doch im Alltag wird weiter mit Excel und Zetteln gearbeitet.",
        solution: "Begleitung bei der Einführung",
        solutionText:
          "Wir erklären verständlich, schulen praxisnah und begleiten Ihr Team, bis die neuen Abläufe selbstverständlich werden.",
      },
      {
        problem: "Führungskräften fehlt Struktur im Alltag",
        problemText: "Das Tagesgeschäft verdrängt Planung, Gespräche und wichtige Entscheidungen.",
        solution: "Praxisnahes Führungscoaching",
        solutionText:
          "Wir arbeiten an konkreten Situationen aus Ihrem Alltag und entwickeln Routinen, die Sie sofort anwenden können.",
      },
      {
        problem: "Wachstum bringt Durcheinander",
        problemText: "Was mit wenigen Personen funktionierte, trägt nicht mehr, wenn das Unternehmen wächst.",
        solution: "Entscheidungen strukturiert vorbereiten",
        solutionText:
          "Mit einer ehrlichen Aussensicht ordnen wir die Situation und erarbeiten klare nächste Schritte.",
      },
    ],
    stepsTitle: "So läuft das Coaching ab",
    steps: [
      { title: "Standortbestimmung", text: "Wir betrachten Ihre aktuelle Situation und das, was Sie beschäftigt." },
      { title: "Ziele festlegen", text: "Gemeinsam definieren wir konkrete Ziele und woran Sie Fortschritte erkennen." },
      { title: "Begleitung im Alltag", text: "In den Sitzungen erarbeiten wir Lösungen für echte Situationen und übertragen sie in die Praxis." },
      { title: "Verankern und prüfen", text: "Wir schauen, was funktioniert, und sichern die Ergebnisse, damit sie bleiben." },
    ],
    packagesTitle: "Pakete und Preise",
    packagesIntro: "Vom einzelnen Impuls bis zur längeren Begleitung. Sie wählen, was zu Ihnen passt.",
    packages: [
      {
        name: "Impuls-Sitzung",
        price: "CHF 190.–",
        priceNote: "Einzelsitzung",
        description: "Ein konkretes Thema, eine ehrliche Aussensicht und klare nächste Schritte.",
        features: [
          "Eine Sitzung nach Vereinbarung",
          "Klärung eines konkreten Themas",
          "Handlungsempfehlungen für den Alltag",
        ],
      },
      {
        name: "Coaching-Paket",
        price: "CHF 520.–",
        priceNote: "3 Sitzungen",
        description: "Genug Zeit, um Themen anzugehen und erste Veränderungen im Alltag zu erproben.",
        featured: true,
        features: [
          "Drei Sitzungen",
          "Ziele und Vorgehen gemeinsam festlegen",
          "Aufgaben zwischen den Terminen",
          "Auswertung der Ergebnisse",
        ],
      },
      {
        name: "Begleitung",
        price: "Ab CHF 1'290.–",
        priceNote: "6 Sitzungen und Team-Workshop",
        description: "Für Veränderungen, bei denen das ganze Team mitgenommen werden soll.",
        features: [
          "Sechs Sitzungen",
          "Workshop mit Ihrem Team",
          "Begleitung bei der Einführung neuer Abläufe",
          "Nachbesprechung nach einigen Wochen",
        ],
      },
    ],
    packagesNote:
      "Coaching lässt sich mit Software oder Prozessoptimierung kombinieren, damit neue Lösungen im Team wirklich ankommen.",
    related: [
      { title: "Klar führen: Coaching für Unternehmen", url: "/case-studies/case-study-5", text: "Mehr Klarheit in Rollen, Kommunikation und Entscheidungen." },
    ],
    faq: [
      {
        question: "Für wen eignet sich das Coaching?",
        answer:
          "Für Inhaberinnen, Inhaber und Führungskräfte kleiner und mittlerer Unternehmen, die Strukturen verbessern oder Veränderungen im Team einführen möchten.",
      },
      {
        question: "Wo und wie finden die Sitzungen statt?",
        answer:
          "Nach Absprache bei Ihnen vor Ort, bei uns im Thurgau oder online. Das legen wir im Erstgespräch fest.",
      },
      {
        question: "Kann ich das Coaching mit einem Digitalisierungsprojekt verbinden?",
        answer:
          "Ja, das ist sogar sinnvoll. So wird die neue Lösung nicht nur gebaut, sondern auch verstanden und genutzt.",
      },
    ],
    ctaTitle: "Welche Frage beschäftigt Sie <span class='heading-script-accent'>gerade</span>?",
    ctaText: "Im kostenlosen Erstgespräch klären wir, ob und wie wir Sie unterstützen können.",
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
