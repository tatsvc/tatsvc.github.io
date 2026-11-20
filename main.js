/* ==========================================================================
   tatiana.be — main.js
   The EN / NL language toggle. No dependencies, no build step.

   Every element with data-i18n="key" gets COPY[lang][key] as its text.
   data-i18n-label sets aria-label, data-i18n-alt sets an image's alt text.
   data-i18n-html sets HTML instead of text, for paragraphs with links in
   them (about page). Only use it with copy written here, never user input.
   ========================================================================== */

(function () {
  'use strict';

  document.documentElement.classList.replace('no-js', 'js');

  // Comparison only: ?type=inter shows the previous all-Inter version.
  // Delete this line (and section 7 in styles.css) once you've picked.
  if (new URLSearchParams(location.search).get('type') === 'inter') document.documentElement.classList.add('type-inter');

  const COPY = {
    en: {
      skip: 'Skip to content',
      langLabel: 'Language',
      navLabel: 'Site',
      navExperience: 'Experience',
      navAbout: 'About',
      homeTitle: 'Tatiana Van Campenhout · Head of Web Presence, Stripe',
      headerRole: 'Head of Web Presence, Stripe',
      location: 'Seattle, WA. Originally from Belgium.',
      heroAlt: 'Prusik Peak reflected in an alpine lake, framed by golden larches',
      heroCaption: 'Prusik Peak, The Enchantments, October 2026',

      work: 'Work',
      present: 'now',
      // Time at Stripe and Mapbox, see sinceText() below: [singular, plural]
      year: ['year', 'years'],
      month: ['month', 'months'],
      day: ['day', 'days'],
      hour: ['hour', 'hours'],
      minute: ['minute', 'minutes'],
      second: ['second', 'seconds'],
      roleHead: 'Head of Web Presence',
      roleDesignManager: 'Design Manager',
      roleStaff: 'Staff Designer',
      roleSenior: 'Senior Designer',
      roleDesigner: 'Designer',
      roleMapbox: 'Design Lead, Web & Brand',
      roleIntern: 'Design Intern',
      education: 'Education',
      eduMaster: 'Master’s in Graphic Design',
      eduBachelor: 'Bachelor’s in Development & Design',
      belgium: 'Belgium',

      make: 'Things I make',
      bearDesc: 'A backcountry trip planning app',
      photoDesc: 'Photo blog about hiking and climbing in the Pacific Northwest',
      crafts: 'Crafts',
      craftsDesc: '<a href="https://x.com/tatsvc/status/1463738675540332551" data-card="ornamentsTweet">Custom ornaments</a> and <a href="https://x.com/tatsvc/status/1357166036835946499" data-card="sweaterTweet">embroidered sweaters</a>',
      snowfieldAlt: 'Snowfield Peak’s snowy summit against a pink and purple dusk sky',
      glacierAlt: 'Golden light over snowy ridges near Glacier Peak',
      olympusAlt: 'Blue Glacier on Mt. Olympus, the peaks lit pink by first light',
      rainierAlt: 'Mt. Adams rising above a sea of clouds at sunrise, seen from high on Mt. Rainier',

      contact: 'Contact',

      // about/index.html
      aboutTitle: 'About · Tatiana Van Campenhout',
      aboutHeading: 'Hi, I’m Tatiana',
      aboutLede: 'A Belgian designer living in Seattle with <span class="card-hint" data-card="cats">Marmot and Jade</span>, my two beloved cats.',
      portraitAlt: 'Tatiana in a white beanie and round sunglasses, holding pink skis on a snowy summit',
      workP1: 'I’ve been at Stripe for nine years and lead web presence, which means the team behind <a href="https://stripe.com" data-card="stripe">stripe.com</a>. I joined as a designer who built and shipped the site myself. Now I manage designers and the managers who lead them.',
      workP2: 'Before Stripe, I was the lead web and brand designer at <a href="https://www.mapbox.com" data-card="mapbox">Mapbox</a>. I studied graphic design in Belgium, then went back to school to learn to code so I could build what I designed.',
      workP3: 'I lead with empathy and trust. I hold a high bar for craft, and I measure it by what’s best for the people who use what we build. That means <a href="https://x.com/tatsvc/status/2017740440649535771" data-card="detailsTweet">obsessing over the details</a>, down to the smallest animation. I push my team to aim higher than they would on their own, and I take just as much responsibility for helping them get there.',
      outside: 'Life',
      outsideP1: 'Outside of work I’m in the mountains as much as I can: hiking, trail running, scrambling, skiing, backcountry skiing, and mountaineering, almost always with a camera. Much of my design work is <a href="https://x.com/tatsvc/status/2016926223365263403" data-card="natureTweet">inspired by the beauty of nature</a>.',
      outsideP2: 'A lot of the people closest to me, I met through the mountains. I’m part of a <a href="../assets/glacier-gals.pdf" data-card="glacierGals">community of women climbers</a> where we plan trips together, share gear and skills, and learn from each other.',
      outsideP3: 'I also volunteer with <a href="https://www.mountaineers.org" data-card="mountaineers">The Mountaineers</a>, where I help instruct the crevasse rescue course.',
      crevasseAlt: 'Tatiana in a white helmet and orange jacket, handling ropes at the edge of a crevasse on Mount Baker',
      crevasseCaption: 'Crevasse rescue on Mount Baker',    },

    /* DRAFT: Dutch translations, to be reviewed by Tatiana.
       Written as Flemish / Belgian Dutch where it differs from Netherlands
       Dutch, for example:
       - "Oorspronkelijk van België": "van" for where you're from is the
         Flemish usage (NL would say "uit").
       - "Studies" instead of "Opleiding" as a CV heading.
       - "geraken", "vanop", "mee lesgeven", "aanleren", "pull" (not "trui"),
         "voorspelling" (not "verwachting") for forecasts.
       - Dates use Belgian formatting (nl-BE).
       Job titles are kept in English on purpose, as is usual in Belgian tech.
       Translate them here if you prefer. */
    nl: {
      skip: 'Naar de inhoud',
      langLabel: 'Taal',
      navLabel: 'Site',
      navExperience: 'Ervaring',
      navAbout: 'Over mij',
      homeTitle: 'Tatiana Van Campenhout · Head of Web Presence bij Stripe',
      headerRole: 'Head of Web Presence bij Stripe',
      location: 'Seattle, WA. Oorspronkelijk van België.',
      heroAlt: 'Prusik Peak weerspiegeld in een bergmeer, omringd door gouden lariksen',
      heroCaption: 'Prusik Peak, The Enchantments, oktober 2026',

      work: 'Werk',
      present: 'nu',
      year: ['jaar', 'jaar'], // "9 jaar", not "9 jaren"
      month: ['maand', 'maanden'],
      day: ['dag', 'dagen'],
      hour: ['uur', 'uur'], // "10 uur", like "9 jaar"
      minute: ['minuut', 'minuten'],
      second: ['seconde', 'seconden'],
      roleHead: 'Head of Web Presence',
      roleDesignManager: 'Design Manager',
      roleStaff: 'Staff Designer',
      roleSenior: 'Senior Designer',
      roleDesigner: 'Designer',
      roleMapbox: 'Design Lead, Web & Brand',
      roleIntern: 'Design Intern',
      education: 'Studies',
      eduMaster: 'Master in het grafisch ontwerp',
      eduBachelor: 'Bachelor in Development & Design',
      belgium: 'België',

      make: 'Wat ik maak',
      bearDesc: 'Een app om trektochten in de wildernis voor te bereiden',
      photoDesc: 'Fotoblog over wandelen en klimmen in de Pacific Northwest',
      crafts: 'Knutselwerk',
      craftsDesc: '<a href="https://x.com/tatsvc/status/1463738675540332551" data-card="ornamentsTweet">Zelfgemaakte kerstballen</a> en <a href="https://x.com/tatsvc/status/1357166036835946499" data-card="sweaterTweet">geborduurde pulls</a>',
      snowfieldAlt: 'De besneeuwde top van Snowfield Peak tegen een roze-paarse avondhemel',
      glacierAlt: 'Gouden licht boven besneeuwde bergkammen bij Glacier Peak',
      olympusAlt: 'De Blue Glacier op Mt. Olympus, de toppen roze gekleurd door het eerste licht',
      // "vanop" (from on top of) is typically Flemish
      rainierAlt: 'Mt. Adams boven een wolkenzee bij zonsopgang, gezien vanop Mt. Rainier',

      contact: 'Contact',

      // about/index.html
      aboutTitle: 'Over mij · Tatiana Van Campenhout',
      aboutHeading: 'Hallo, ik ben Tatiana',
      // "Geraken" (workP3) is Flemish; NL would say "komen".
      aboutLede: 'Een Belgische designer in Seattle, met <span class="card-hint" data-card="cats">Marmot en Jade</span>, mijn twee geliefde katten.',
      portraitAlt: 'Tatiana met een witte muts en ronde zonnebril, met roze ski’s op een besneeuwde top',
      workP1: 'Ik werk al negen jaar bij Stripe en leid er Web Presence: het team achter <a href="https://stripe.com" data-card="stripe">stripe.com</a>. Ik begon als designer die de site zelf bouwde en lanceerde. Nu geef ik leiding aan designers en aan de managers die hen begeleiden.',
      workP2: 'Voor Stripe was ik lead web- en merkdesigner bij <a href="https://www.mapbox.com" data-card="mapbox">Mapbox</a>. Ik studeerde grafisch ontwerp in België en ging daarna terug naar school om te leren programmeren, zodat ik kon bouwen wat ik ontwierp.',
      workP3: 'Ik leid met empathie en vertrouwen. Ik leg de lat hoog voor vakmanschap, en ik meet dat af aan wat het beste is voor de mensen die gebruiken wat we bouwen. Dat betekent <a href="https://x.com/tatsvc/status/2017740440649535771" data-card="detailsTweet">obsessief op de details letten</a>, tot de kleinste animatie toe. Ik daag mijn team uit om hoger te mikken dan ze zelf zouden doen, en ik neem evenveel verantwoordelijkheid om hen daar te helpen geraken.',
      outside: 'Leven',
      outsideP1: 'Buiten het werk zit ik zo vaak mogelijk in de bergen: wandelen, trailrunnen, scrambling, skiën, toerskiën en alpinisme, bijna altijd met een camera. Mijn designwerk is vaak <a href="https://x.com/tatsvc/status/2016926223365263403" data-card="natureTweet">geïnspireerd door de schoonheid van de natuur</a>.',
      outsideP2: 'Veel van de mensen die me het dichtst bij staan, heb ik via de bergen leren kennen. Ik maak deel uit van een <a href="../assets/glacier-gals.pdf" data-card="glacierGals">community van vrouwelijke klimmers</a> waarin we samen tochten plannen, materiaal en kennis delen en van elkaar leren.',
      outsideP3: 'Ik ben ook vrijwilliger bij <a href="https://www.mountaineers.org" data-card="mountaineers">The Mountaineers</a>, waar ik mee lesgeef in de cursus gletsjerspleetredding.',
      crevasseAlt: 'Tatiana met een witte helm en oranje jas, met touwen aan de rand van een gletsjerspleet op Mount Baker',
      crevasseCaption: 'Gletsjerspleetredding op Mount Baker',
    },
  };

  const LANG_KEY = 'lang';

  function readStoredLang() {
    try {
      return localStorage.getItem(LANG_KEY);
    } catch (e) {
      return null; // storage blocked (private mode, strict cookie settings…)
    }
  }

  function storeLang(lang) {
    try {
      localStorage.setItem(LANG_KEY, lang);
    } catch (e) {
      /* not critical: the choice just won't be remembered */
    }
  }

  // Years, months and days between two dates ("YYYY-MM-DD"), e.g.
  // "9 years, 9 months, 28 days". Without an end date it counts until
  // today. Parts that are 0 are left out. With `precise`, hours, minutes and
  // seconds are added too (counting from midnight on the start date), always
  // shown so the text doesn't jump when one of them hits 0.
  function sinceText(startISO, endISO, lang, precise) {
    const [y, m, d] = startISO.split('-').map(Number);
    const end = endISO ? new Date(endISO + 'T00:00') : new Date();
    let years = end.getFullYear() - y;
    let months = end.getMonth() - (m - 1);
    let days = end.getDate() - d;

    if (days < 0) {
      months -= 1;
      days += new Date(end.getFullYear(), end.getMonth(), 0).getDate(); // length of the month before
    }
    if (months < 0) {
      years -= 1;
      months += 12;
    }

    const copy = COPY[lang];
    const parts = [[years, copy.year], [months, copy.month], [days, copy.day]]
      .filter(([n]) => n > 0);
    if (precise) {
      parts.push([end.getHours(), copy.hour], [end.getMinutes(), copy.minute], [end.getSeconds(), copy.second]);
    }
    return parts.map(([n, words]) => n + ' ' + words[n === 1 ? 0 : 1]).join(', ');
  }

  function setAll(attribute, lang, apply) {
    document.querySelectorAll('[data-' + attribute + ']').forEach((el) => {
      const key = el.getAttribute('data-' + attribute);
      const text = COPY[lang][key];
      if (text !== undefined) apply(el, text);
    });
  }

  function applyLang(lang) {
    document.documentElement.lang = lang;

    setAll('i18n', lang, (el, text) => { el.textContent = text; });
    setAll('i18n-html', lang, (el, html) => { el.innerHTML = html; });
    setAll('i18n-label', lang, (el, text) => el.setAttribute('aria-label', text));
    setAll('i18n-alt', lang, (el, text) => el.setAttribute('alt', text));

    document.querySelectorAll('[data-since]').forEach((el) => {
      el.textContent = sinceText(el.dataset.since, el.dataset.until, lang);
    });

    document.querySelectorAll('.lang-toggle').forEach((toggle) => {
      toggle.dataset.active = lang; // moves the sliding pill (see CSS)
    });
    placeNavPills(); // the link text changes width between languages
    document.querySelectorAll('.lang-toggle [data-lang]').forEach((btn) => {
      btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang));
    });

    currentLang = lang;
  }

  let currentLang = 'en';


  /* ------------------------------------------------------------------------
     Hover cards: a small preview that appears when you hover (or tab to) a
     link with data-card="key". The link itself still works as normal; the
     card is a visual extra, so it's hidden from screen readers. Only on
     devices that can hover: on phones, tapping just follows the link.

     To add one: give the link data-card="someKey" and add someKey to CARDS.
     Asset paths are relative to this file, so they work from /about/ too.
     ------------------------------------------------------------------------ */

  const SCRIPT_URL = document.currentScript.src;
  const asset = (path) => new URL(path, SCRIPT_URL).href;

  const AUTHOR = { name: 'Tatiana Van Campenhout', handle: '@tatsvc', avatar: 'assets/cards/tatsvc-avatar.jpg' };

  const CARDS = {
    // Posts on X. The quoted text stays in English, as posted.
    homepageTweet: {
      type: 'post',
      date: '2026-01-29',
      video: 'assets/cards/homepage.mp4',
      poster: 'assets/cards/homepage.jpg',
      ratio: '1024 / 720',
      text: 'We just launched a refreshed stripe.com homepage ✨ Can’t believe I had to stay at Stripe for 9 years to see another homepage refresh—but it’s by far our best yet. So proud of this incredibly talented team and the care they bring. Grateful to be part of it ❤️',
    },
    detailsTweet: {
      type: 'post',
      date: '2026-01-31',
      video: 'assets/cards/details.mp4',
      poster: 'assets/cards/details.jpg',
      ratio: '1 / 1',
      text: 'When we asked the team to obsess over the details, they really delivered. Here are a few of my favorites—starting with the icons animating in the daytime picker. That last transition into night mode is just chef’s kiss 👌💯',
    },
    careersTweet: {
      type: 'post',
      author: { name: 'Katie Dill', handle: '@lil_dill', avatar: 'assets/cards/lil_dill-avatar.jpg' },
      date: '2026-07-29',
      image: 'assets/cards/careers.jpg',
      ratio: '2 / 1',
      text: 'One of the things I love about @Stripe is sweating the small stuff. Just yesterday I was having a lengthy conversation about typographic apostrophes. The products we build at Stripe process trillions of dollars for companies at every stage. Obsessing over the details isn’t optional. We’re meticulous about getting things right, and we don’t leave well enough alone. Working at Stripe means creating the conditions for prosperity and economic growth—from building financial infrastructure to publishing ideas that advance progress via @StripePress and @WorksInProgMag. We wanted to make sure our careers page reflects what it’s like to work at Stripe today, so we just updated it! If solving hard problems at scale sounds interesting, we’re hiring!',
    },
    ornamentsTweet: {
      type: 'post',
      date: '2021-11-25',
      video: 'assets/cards/ornaments.mp4', // first 20 seconds
      poster: 'assets/cards/ornaments.jpg',
      ratio: '9 / 16',
      text: 'Remember when I said I would make custom ornaments for my friends. I did. And I’m pretty pleased with myself right now 😌🎄',
    },
    sweaterTweet: {
      type: 'post',
      date: '2021-02-04',
      video: 'assets/cards/sweater.mp4',
      poster: 'assets/cards/sweater.jpg',
      ratio: '9 / 16',
      text: 'I found this embroidered Mount Rainier sweater online a little while ago but it was completely sold out and wasn’t going back into production ever again. So, as any normal human being would do, I decided to re-make it myself instead!',
    },
    natureTweet: {
      type: 'post',
      date: '2026-01-29',
      video: 'assets/cards/nature.mp4',
      poster: 'assets/cards/nature.jpg',
      ratio: '986 / 720',
      text: 'One of my favorite parts is the data viz section. We use beauty with purpose—to make important moments feel more memorable. The time-of-day color theming is inspired by my PNW photography 🌲🏔️ Fun easter egg: change the time of day to change the colors.',
    },

    // Projects on Dribbble (role rows on the home page)
    connect: {
      site: 'dribbble.com',
      title: 'Stripe Connect microsite',
      video: 'assets/cards/connect.mp4',
      poster: 'assets/cards/connect.jpg',
      ratio: '4 / 3',
      en: 'Part of the 2020 stripe.com redesign. I designed the Connect microsite: six pages for Stripe’s product for platforms and marketplaces.',
      nl: 'Onderdeel van het herontwerp van stripe.com in 2020. Ik ontwierp de Connect-microsite: zes pagina’s voor Stripes product voor platformen en marktplaatsen.',
    },
    checkout: {
      site: 'dribbble.com',
      title: 'Stripe Checkout landing page',
      video: 'assets/cards/checkout.mp4',
      poster: 'assets/cards/checkout.jpg',
      ratio: '4 / 3',
      en: 'The landing page for Checkout, Stripe’s prebuilt payment page: “We built Checkout so you don’t have to.”',
      nl: 'De landingspagina voor Checkout, de kant-en-klare betaalpagina van Stripe: “We built Checkout so you don’t have to.”',
    },
    jobs: {
      site: 'dribbble.com',
      title: 'Stripe jobs page',
      video: 'assets/cards/jobs.mp4',
      poster: 'assets/cards/jobs.jpg',
      ratio: '4 / 3',
      en: 'The jobs page for stripe.com: “Help increase the GDP of the internet.”',
      nl: 'De vacaturepagina van stripe.com: “Help increase the GDP of the internet.”',
    },

    mapboxProducts: {
      site: 'dribbble.com',
      title: 'Mapbox products',
      image: 'assets/cards/mapbox-products.gif',
      poster: 'assets/cards/mapbox-products.jpg', // shown while the GIF loads
      ratio: '4 / 3',
      en: 'Product pages I designed and built for mapbox.com, with bright colors, bold type, and a lot of animation.',
      nl: 'Productpagina’s die ik ontwierp en bouwde voor mapbox.com, met felle kleuren, krachtige typografie en veel animatie.',
    },

    // Regular links
    stripe: {
      site: 'stripe.com',
      title: 'Stripe',
      image: 'assets/cards/homepage.jpg',
      ratio: '1024 / 720',
      en: 'Financial infrastructure for the internet. I’ve been on the team behind stripe.com since 2017.',
      nl: 'Financiële infrastructuur voor het internet. Sinds 2017 zit ik in het team achter stripe.com.',
    },
    mapbox: {
      site: 'mapbox.com',
      title: 'Mapbox',
      en: 'Maps and location data for developers. I led web and brand design here from 2014 to 2017.',
      nl: 'Kaarten en locatiedata voor ontwikkelaars. Van 2014 tot 2017 was ik er lead web- en merkdesigner.',
    },
    bear: {
      site: 'bear-necessities.app',
      title: 'Bear Necessities',
      video: 'assets/cards/bear.mp4', // first 20 seconds of the full demo
      poster: 'assets/cards/bear.jpg',
      ratio: '3304 / 2160',
      en: 'Trip planning for the backcountry: weather, smoke, and avalanche forecasts, travel times from a GPX route, and a trip plan to leave with someone at home.',
      nl: 'Tochten plannen in de wildernis: weer-, rook- en lawinevoorspellingen, wandeltijden op basis van een GPX-route en een tochtplan om bij iemand thuis achter te laten.',
    },
    pnw: {
      site: 'tats.exposure.co',
      title: 'Tatiana in the PNW',
      image: 'assets/photos/prusik-800.jpg',
      ratio: '3 / 2',
      en: 'Trip reports and photos from hiking, climbing, and skiing in the Pacific Northwest.',
      nl: 'Verslagen en foto’s van wandel-, klim- en skitochten in de Pacific Northwest.',
    },
    // Photo only, on plain text rather than a link
    cats: {
      type: 'photo',
      image: 'assets/cards/cats.jpg',
      ratio: '3 / 4',
    },
    instagram: {
      site: 'instagram.com',
      title: '@zatiana',
      image: 'assets/photos/snowfield-600.jpg',
      ratio: '3 / 2',
      en: 'Mountains, trail days, and the occasional cat.',
      nl: 'Bergen, trektochten en af en toe een kat.',
    },
    // Magazine cover: narrow card, portrait image shown uncropped
    glacierGals: {
      type: 'cover',
      site: 'Mountaineer magazine · PDF',
      title: 'The Glacier Gals',
      image: 'assets/cards/glacier-gals.jpg',
      ratio: '494 / 640',
      en: 'My article about our community of women climbers.',
      nl: 'Mijn artikel over onze community van vrouwelijke klimmers.',
    },
    mountaineers: {
      site: 'mountaineers.org',
      title: 'The Mountaineers',
      en: 'A Seattle nonprofit that has taught outdoor skills since 1906. I help instruct their crevasse rescue course.',
      nl: 'Een non-profit uit Seattle die al sinds 1906 outdoorvaardigheden aanleert. Ik geef mee les in hun cursus gletsjerspleetredding.',
    },
  };

  const CARD_UI = {
    en: { viewOnX: 'View on X', open: 'Open link', close: 'Close' },
    nl: { viewOnX: 'Bekijk op X', open: 'Link openen', close: 'Sluiten' },
  };

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  function buildMedia(card) {
    let media;
    if (card.video) {
      media = el('video', 'hovercard__media');
      media.muted = true;
      media.loop = true;
      media.playsInline = true;
      media.preload = 'none'; // only downloads once the card is opened
      media.poster = asset(card.poster);
      media.src = asset(card.video);
    } else if (card.image) {
      media = el('img', 'hovercard__media');
      media.src = asset(card.image);
      media.alt = '';
      media.decoding = 'async';
      if (card.poster) media.style.background = 'center / cover url("' + asset(card.poster) + '")';
    } else {
      return null;
    }
    media.style.aspectRatio = card.ratio;
    if (card.position) media.style.objectPosition = card.position;
    return media;
  }

  function buildCard(key, lang) {
    const card = CARDS[key];
    const ui = CARD_UI[lang];
    const root = el('div', card.type ? 'hovercard hovercard--' + card.type : 'hovercard');
    root.setAttribute('aria-hidden', 'true');

    const media = buildMedia(card);
    if (media) root.append(media);
    if (card.type === 'photo') return root;

    const body = el('div', 'hovercard__body');

    if (card.type === 'post') {
      const by = card.author || AUTHOR;
      const author = el('div', 'hovercard__author');
      const avatar = el('img', 'hovercard__avatar');
      avatar.src = asset(by.avatar);
      avatar.alt = '';
      const who = el('span');
      who.append(el('strong', '', by.name), ' ', el('span', 'hovercard__handle', by.handle));
      author.append(avatar, who);

      const date = new Intl.DateTimeFormat(lang === 'nl' ? 'nl-BE' : 'en-US', { dateStyle: 'medium' })
        .format(new Date(card.date + 'T12:00'));
      const footer = el('div', 'hovercard__footer');
      footer.append(el('span', '', date), el('span', 'hovercard__cta', ui.viewOnX + ' ↗'));

      body.append(author, el('p', 'hovercard__text', card.text), footer);
    } else {
      body.append(
        el('div', 'hovercard__site', card.site),
        el('div', 'hovercard__title', card.title),
        el('p', 'hovercard__text', card[lang]),
      );
    }

    root.append(body);
    return root;
  }

  const canHover = window.matchMedia('(hover: hover) and (pointer: fine)');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  let openCard = null;   // the card element on screen
  let openTrigger = null;
  let showTimer = 0;
  let hideTimer = 0;

  function placeCard(card, trigger) {
    const gap = 10;
    const margin = 12;
    // A link can wrap over two lines: line up with the last line when the card
    // goes below, and with the first line when it goes above
    const lines = trigger.getClientRects();
    const first = lines[0];
    const last = lines[lines.length - 1];
    const w = card.offsetWidth;
    const h = card.offsetHeight;

    // Below the link, unless it doesn't fit there and there's more room above
    const roomBelow = window.innerHeight - last.bottom;
    const side = h + gap + margin > roomBelow && first.top > roomBelow ? 'top' : 'bottom';
    const r = side === 'top' ? first : last;
    // Kept inside the window, even if that means covering part of the link
    const top = Math.min(
      Math.max(side === 'top' ? r.top - gap - h : r.bottom + gap, margin),
      window.innerHeight - h - margin,
    );
    const left = Math.min(Math.max(r.left, margin), window.innerWidth - w - margin);

    card.style.left = left + window.scrollX + 'px';
    card.style.top = top + window.scrollY + 'px';
    card.dataset.side = side;
  }

  function showCard(trigger) {
    clearTimeout(hideTimer);
    if (openTrigger === trigger) return;
    hideCard(true);

    const card = buildCard(trigger.dataset.card, currentLang);
    card.addEventListener('mouseenter', () => clearTimeout(hideTimer));
    card.addEventListener('mouseleave', () => scheduleHide());
    // Clicking the card does the same as clicking the link
    if (trigger.href) {
      card.addEventListener('click', (event) => {
        if (event.metaKey || event.ctrlKey) window.open(trigger.href, '_blank', 'noopener');
        else trigger.click();
      });
    }

    document.body.append(card);
    placeCard(card, trigger);
    requestAnimationFrame(() => card.classList.add('is-open'));

    const video = card.querySelector('video');
    if (video && !reduceMotion.matches) video.play().catch(() => {});

    openCard = card;
    openTrigger = trigger;
  }

  function hideCard(immediately) {
    clearTimeout(showTimer);
    const card = openCard;
    if (!card) return;
    openCard = null;
    openTrigger = null;

    const video = card.querySelector('video');
    if (video) video.pause();

    if (immediately || reduceMotion.matches) {
      card.remove();
    } else {
      card.classList.remove('is-open');
      setTimeout(() => card.remove(), 200);
    }
  }

  function scheduleHide() {
    clearTimeout(showTimer);
    clearTimeout(hideTimer);
    hideTimer = setTimeout(() => hideCard(), 150);
  }

  function triggerFrom(event) {
    const target = event.target.closest && event.target.closest('[data-card]');
    return target && CARDS[target.dataset.card] ? target : null;
  }

  // Event delegation, so links that main.js re-renders (data-i18n-html) work too
  document.addEventListener('mouseover', (event) => {
    if (!canHover.matches) return;
    const trigger = triggerFrom(event);
    if (!trigger || trigger.contains(event.relatedTarget)) return;
    clearTimeout(hideTimer);
    clearTimeout(showTimer);
    // Quick to open the first time, instant when moving between links
    showTimer = setTimeout(() => showCard(trigger), openCard ? 0 : 170);
  });

  document.addEventListener('mouseout', (event) => {
    const trigger = triggerFrom(event);
    if (!trigger || trigger.contains(event.relatedTarget)) return;
    scheduleHide();
  });

  // Keyboard: show while the link has focus
  document.addEventListener('focusin', (event) => {
    const trigger = triggerFrom(event);
    if (trigger && trigger.matches(':focus-visible')) showCard(trigger);
  });
  document.addEventListener('focusout', (event) => {
    if (triggerFrom(event)) scheduleHide();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') hideCard();
  });
  window.addEventListener('resize', () => hideCard(true));


  /* ------------------------------------------------------------------------
     Bottom sheet: on phones and tablets (no hover), tapping a link with a
     card opens the same card in a sheet from the bottom of the screen, with
     a button to follow the link. A <dialog>, so focus, Escape and screen
     readers are handled by the browser.
     ------------------------------------------------------------------------ */

  let sheet = null;

  function openSheet(trigger) {
    const key = trigger.dataset.card;
    const ui = CARD_UI[currentLang];

    if (!sheet) {
      sheet = el('dialog', 'sheet');
      // Tapping the dimmed backdrop closes it (the click lands on the
      // <dialog> itself, not on its contents)
      sheet.addEventListener('click', (event) => {
        if (event.target === sheet) sheet.close();
      });
      sheet.addEventListener('close', () => {
        const video = sheet.querySelector('video');
        if (video) video.pause();
      });
      document.body.append(sheet);
    }

    const inner = el('div', 'sheet__inner');
    const close = el('button', 'sheet__close');
    close.type = 'button';
    close.setAttribute('aria-label', ui.close);
    close.innerHTML = '<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M3.5 3.5l9 9m0-9-9 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>';
    close.addEventListener('click', () => sheet.close());

    const card = buildCard(key, currentLang);
    card.removeAttribute('aria-hidden'); // in the sheet, the card is the content
    card.classList.add('hovercard--sheet');
    inner.append(el('div', 'sheet__handle'), close, card);

    if (trigger.href) {
      const cta = el('a', 'sheet__cta', (CARDS[key].type === 'post' ? ui.viewOnX : ui.open) + ' ↗');
      cta.href = trigger.href;
      inner.append(cta);
    }

    sheet.replaceChildren(inner);
    sheet.setAttribute('aria-label', trigger.textContent.trim());
    sheet.showModal();
    close.focus();

    const video = sheet.querySelector('video');
    if (video && !reduceMotion.matches) video.play().catch(() => {});
  }

  document.addEventListener('click', (event) => {
    if (canHover.matches || event.metaKey || event.ctrlKey) return;
    const trigger = triggerFrom(event);
    if (!trigger) return;
    event.preventDefault();
    openSheet(trigger);
  });


  /* ------------------------------------------------------------------------
     Small moments of delight. All decorative: hidden from screen readers,
     and no movement for people who prefer reduced motion.
     ------------------------------------------------------------------------ */

  // Nav: a soft pill rests on the current page and slides to whichever link
  // is hovered or focused. Position and width go into CSS variables.
  function placeNavPills(target) {
    document.querySelectorAll('.site-nav').forEach((nav) => {
      const link = (target && nav.contains(target) && target) || nav.querySelector('[aria-current="page"]');
      if (!link) return;
      nav.style.setProperty('--pill-x', link.offsetLeft + 'px');
      nav.style.setProperty('--pill-w', link.offsetWidth + 'px');
    });
  }

  document.querySelectorAll('.site-nav').forEach((nav) => {
    const moveTo = (event) => {
      const link = event.target.closest('a');
      if (link) placeNavPills(link);
    };
    nav.addEventListener('mouseover', moveTo);
    nav.addEventListener('focusin', moveTo);
    nav.addEventListener('mouseleave', () => placeNavPills());
    nav.addEventListener('focusout', () => placeNavPills());
  });
  // Place it once the web font has loaded (widths change), then turn on the
  // slide, so it doesn't animate in from the left on page load
  document.fonts.ready.then(() => {
    placeNavPills();
    requestAnimationFrame(() => {
      document.querySelectorAll('.site-nav').forEach((nav) => nav.classList.add('is-ready'));
    });
  });

  // Camera settings: a pill with the photo's data-exif follows the cursor
  // while it's over the photo
  let exifPill = null;
  document.addEventListener('mousemove', (event) => {
    const link = canHover.matches && event.target.tagName === 'IMG' && event.target.closest('a[data-exif]');
    if (!link) {
      if (exifPill) exifPill.classList.remove('is-open');
      return;
    }
    if (!exifPill) {
      exifPill = el('div', 'exif-pill');
      exifPill.setAttribute('aria-hidden', 'true');
      document.body.append(exifPill);
    }
    exifPill.textContent = link.dataset.exif;
    exifPill.style.setProperty('--x', event.clientX + 'px');
    exifPill.style.setProperty('--y', event.clientY + 'px');
    exifPill.classList.add('is-open');
  });
  document.addEventListener('mouseleave', () => exifPill && exifPill.classList.remove('is-open'));
  window.addEventListener('scroll', () => exifPill && exifPill.classList.remove('is-open'), { passive: true });

  // Stripe tenure: hovering it types out the hours, minutes and seconds, then
  // keeps counting. Moving away deletes them again.
  document.querySelectorAll('.tenure [data-since]:not([data-until])').forEach((time) => {
    const line = time.closest('.tenure');
    let typed = 0; // how many characters of the extra part are showing
    let typer = 0;
    let clock = 0;

    // Draws the normal text plus the first `typed` characters of the extra
    // part, and returns how long the extra part is
    const render = () => {
      const base = sinceText(time.dataset.since, null, currentLang);
      const extra = sinceText(time.dataset.since, null, currentLang, true).slice(base.length);
      time.textContent = base + extra.slice(0, typed);
      return extra.length;
    };

    line.addEventListener('mouseenter', () => {
      clearInterval(typer);
      clearInterval(clock);
      clock = setInterval(render, 1000);
      if (reduceMotion.matches) {
        typed = 99;
        render();
        return;
      }
      typer = setInterval(() => {
        typed += 1;
        if (typed >= render()) clearInterval(typer);
      }, 22);
    });

    line.addEventListener('mouseleave', () => {
      clearInterval(typer);
      clearInterval(clock);
      typed = Math.min(typed, render());
      typer = setInterval(() => {
        typed = Math.max(0, typed - 3);
        render();
        if (!typed) clearInterval(typer);
      }, 12);
    });
  });

  // Clicking "Marmot and Jade" sends a trail of paw prints across the page,
  // taking turns: Marmot (black) and Jade (grey)
  const PAW = '<svg viewBox="0 0 24 24" aria-hidden="true"><ellipse cx="12" cy="16" rx="5" ry="4.2"/>' +
    '<ellipse cx="5.5" cy="10" rx="2.1" ry="2.7"/><ellipse cx="9.5" cy="5.8" rx="2.1" ry="2.8"/>' +
    '<ellipse cx="14.5" cy="5.8" rx="2.1" ry="2.8"/><ellipse cx="18.5" cy="10" rx="2.1" ry="2.7"/></svg>';
  let pawTurn = 0;

  document.addEventListener('click', (event) => {
    if (!event.target.closest('[data-card="cats"]')) return;
    const cat = pawTurn++ % 2 === 0 ? 'marmot' : 'jade';
    // Mostly sideways, a little up or down, towards whichever side has more room
    const goRight = event.clientX < window.innerWidth / 2;
    const angle = (goRight ? 0 : Math.PI) + (Math.random() - 0.5) * 0.9;
    const step = 30;
    for (let i = 0; i < 9; i++) {
      const side = i % 2 === 0 ? -1 : 1; // left paw, right paw
      const x = event.pageX + Math.cos(angle) * step * (i + 1) - Math.sin(angle) * side * 8;
      const y = event.pageY + Math.sin(angle) * step * (i + 1) + Math.cos(angle) * side * 8;
      const paw = el('div', 'paw paw--' + cat);
      paw.innerHTML = PAW;
      paw.style.left = x + 'px';
      paw.style.top = y + 'px';
      paw.style.setProperty('--turn', angle + Math.PI / 2 + 'rad'); // toes forward
      paw.style.animationDelay = i * 110 + 'ms';
      paw.addEventListener('animationend', () => paw.remove());
      document.body.append(paw);
    }
  });

  // Konami code (↑ ↑ ↓ ↓ ← → ← → B A) makes it snow for a bit
  const KONAMI = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  let konamiAt = 0;
  let snowing = false;

  document.addEventListener('keydown', (event) => {
    const key = event.key.length === 1 ? event.key.toLowerCase() : event.key;
    if (key === KONAMI[konamiAt]) konamiAt += 1;
    else konamiAt = key === KONAMI[0] ? 1 : 0;
    if (konamiAt === KONAMI.length) {
      konamiAt = 0;
      letItSnow();
    }
  });

  function letItSnow() {
    if (snowing || reduceMotion.matches) return;
    snowing = true;

    const canvas = el('canvas', 'snow');
    canvas.setAttribute('aria-hidden', 'true');
    document.body.append(canvas);
    const ctx = canvas.getContext('2d');
    let w = 0;
    let h = 0;
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    // Flakes start above the screen; after 12 seconds no new ones come in
    const flake = (y) => ({
      x: Math.random() * w,
      y,
      r: 1 + Math.random() * 2.5,
      speed: 0.5 + Math.random(),
      sway: Math.random() * Math.PI * 2,
      alpha: 0.35 + Math.random() * 0.4,
    });
    const flakes = Array.from({ length: 150 }, () => flake(-Math.random() * h));
    const stopAt = performance.now() + 12000;

    function frame(now) {
      ctx.clearRect(0, 0, w, h);
      let falling = 0;
      for (const f of flakes) {
        if (f.y > h + 10) {
          if (now > stopAt) continue;
          Object.assign(f, flake(-10));
        }
        f.y += f.speed * (1 + f.r / 3); // bigger flakes are closer, so faster
        f.sway += 0.012;
        f.x += Math.sin(f.sway) * 0.4;
        falling += 1;
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgb(100 116 141 / ' + f.alpha + ')';
        ctx.fill();
      }
      if (falling) {
        requestAnimationFrame(frame);
      } else {
        canvas.remove();
        window.removeEventListener('resize', resize);
        snowing = false;
      }
    }
    requestAnimationFrame(frame);
  }

  // Switching to Dutch: a quick "Goeiedag!" under the toggle
  function goeiedag(toggle) {
    const old = document.querySelector('.toast');
    if (old) old.remove();
    const toast = el('div', 'toast', 'Goeiedag!');
    toast.setAttribute('aria-hidden', 'true');
    toast.style.top = toggle.offsetTop + toggle.offsetHeight + 8 + 'px';
    document.body.append(toast);
    requestAnimationFrame(() => toast.classList.add('is-open'));
    setTimeout(() => {
      toast.classList.remove('is-open');
      setTimeout(() => toast.remove(), 300);
    }, 1600);
  }

  // For anyone who opens the browser console
  console.log(
    '%c' +
    '            /\\\n' +
    '           /  \\        /\\\n' +
    '          / /\\ \\  /\\  /  \\\n' +
    '         /      \\/  \\/    \\\n' +
    '        /   /\\   \\   \\     \\\n' +
    '   ____/___/  \\___\\___\\_____\\____\n' +
    '\n%cHi, fellow detail person 👋\n\n' +
    'This site is hand-written HTML, CSS, and a little JavaScript.\n' +
    'No framework, no build step.\n\n' +
    'Psst: try ↑ ↑ ↓ ↓ ← → ← → B A\n\n' +
    'Say hi: tatiana.van.campenhout@gmail.com',
    'color: #64748d; font-family: ui-monospace, Menlo, monospace;',
    'color: #061b31; font: 13px/1.5 system-ui, sans-serif;',
  );

  // First visit: Dutch if the browser language starts with "nl" (nl, nl-BE,
  // nl-NL), otherwise English. After that, whatever was picked last.
  const stored = readStoredLang();
  const browserLang = (navigator.language || '').toLowerCase();
  const initialLang = COPY[stored] ? stored : browserLang.startsWith('nl') ? 'nl' : 'en';

  applyLang(initialLang);

  document.querySelectorAll('.lang-toggle [data-lang]').forEach((btn) => {
      btn.addEventListener('click', () => {
      hideCard(true);
      if (btn.dataset.lang === 'nl' && currentLang !== 'nl') goeiedag(btn.closest('.lang-toggle'));
      applyLang(btn.dataset.lang);
      storeLang(btn.dataset.lang);
    });
  });
})();
