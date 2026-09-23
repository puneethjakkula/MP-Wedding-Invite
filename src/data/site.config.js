/**
 * Edit this file to launch or customize the site.
 * No other source files need content changes.
 */

export const site = {
  siteUrl: "https://puneethjakkula.github.io/MP-Wedding-Invite/",
  defaultTheme: "lotus",
  themes: [
    { id: "marigold", label: "Marigold" },
    { id: "ruby", label: "Ruby" },
    { id: "emerald", label: "Emerald" },
    { id: "sapphire", label: "Sapphire" },
    { id: "lotus", label: "Lotus" },
  ],
  meta: {
    title: "Mrudula & Puneeth — We're getting married",
    description: "Join us in Hyderabad on 26 November 2026",
    image: "photos/WeddingLogo_MP.png",
  },
  couple: {
    partnerA: "Mrudula",
    partnerB: "Puneeth",
  },
  hashtag: "#Mruneeth",
  weddingDateIso: "2026-11-26T10:30:00+05:30",
  displayDate: "26 November 2026, 10:30AM",
  city: "Hyderabad, India",
  music: {
    src: "music/song.mp3",
    labelPlay: "Play music",
    labelPause: "Pause music",
  },
  skipLink: "Skip to content",
  hero: {
    kicker: "We're getting married",
    ctaLabel: "Open the invitation",
    ctaHref: "#invitation",
  },
  invitation: {
    eyebrow: "A note from us",
    heading: "Please celebrate with us",
    paragraphs: [
      "Somewhere between two continents, a little curiosity found its way to a little love. What followed was a collection of long conversations, shared laughter, familiar experiences, and countless small moments that made the miles between us feel wonderfully small.", "And now, our two worlds are becoming one. So we’re bringing together all the people we love, under one roof, for a day filled with color, music, happy tears, and a little bit of magic.", "Come celebrate, dance, laugh, and make a memory with us as we begin our forever.",
    ],
    signOff: "With all our love",
  },
  countdown: {
    heading: "Until the celebration begins",
    labels: {
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds",
    },
    arrivedHeading: "The day is here",
    arrivedMessage: "The celebrations have begun. We cannot wait to see you.",
  },
  lineup: {
    eyebrow: "The celebrations",
    heading: "Event line-up",
    // mapsLabel: "Open in Google Maps",
  },
  events: [
    {
      id: "bride-haldi",
      title: "Bride Haldi and Pellikuturu",
      date: "25 November 2026",
      time: "11:00 AM",
      // venue: "Bride's Home",
      note: "A joyful turmeric ceremony filled with blessings, laughter, and family traditions as the bride prepares for her wedding.",
      accent: "marigold",
      // mapsUrl: "https://www.google.com/maps/search/?api=1&query=C-Scheme+Jaipur",
    },
    {
      id: "groom-haldi",
      title: "Groom Haldi and Pellikoduku",
      date: "25 November 2026",
      time: "11:00 AM",
      // venue: "Groom's Home",
      note: "A cheerful celebration where family and friends bless the groom with turmeric, love, laughter, and festive customs.",
      accent: "emerald",
      // mapsUrl: "https://www.google.com/maps/search/?api=1&query=Rambagh+Palace+Jaipur",
    },
    {
      id: "mehendi",
      title: "Bride Mehandi",
      date: "25 November 2026",
      time: "06:00 PM",
      // venue: "Bride's Home",
      note: "A beautiful evening of intricate henna, music, and fun moments as the bride’s hands are adorned with love.",
      accent: "lotus",
      // mapsUrl: "https://www.google.com/maps/search/?api=1&query=C-Scheme+Jaipur",
    },
    {
      featured: true,
      id: "wedding",
      title: "Wedding",
      date: "26 November 2026",
      time: "10:30 AM",
      // venue: "Mandap at Rambagh Palace",
      note: "Muhurtam: 11:52 AM. A sacred ceremony filled with jeelakarra bellam, thali, talambralu, and the blessings of our families.",
      accent: "ruby",
      // mapsUrl: "https://www.google.com/maps/search/?api=1&query=Rambagh+Palace+Jaipur",
    },
  ],
  venue: {
    eyebrow: "Find us on the big day",
    heading: "The wedding venue",
    name: "Sri Raja Rajeshwari Convention",
    addressLines: [
      "Bowenpally, Secunderabad,",
      "Hyderabad, Telangana 500009",
      "India",
    ],
    directions:
      "The convention sits just north of Secunderabad. It is a convenient 5-minute drive from the JBS Parade Ground Metro Station and located just 150 metres from the popular Diamond Point Circle. Don't worry about driving down, as ample on-site parking is available right at the venue.",
    mapsCta: "Open in Google Maps",
    mapsUrl: "https://maps.app.goo.gl/Tprstqf7mFV5hk6f7",
    //loadMapLabel: "Load the map",
    //mapTitle: "Sri Raja Rajeshwari Convention, Hyderabad",
    //embedUrl:
      //"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15224.576622243592!2d78.47269222664588!3d17.452813105061647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9a6f1b09435f%3A0x72e9d68899eae2a!2sSri%20Raja%20Rajeshwari%20Convention!5e0!3m2!1sen!2sde!4v1790064628294!5m2!1sen!2sde",
    //facadeCaption: "Tap to load Google Maps. The map is not loaded until you ask, so the page stays light.",
  },
  gallery: {
    eyebrow: "A glimpse",
    heading: "Our story so far",
    lightboxLabel: "Photo viewer",
    closeLabel: "Close",
    prevLabel: "Previous photo",
    nextLabel: "Next photo",
    photos: [
      {
        src: "photos/1.jpg",
        alt: "#Mruneeth",
        width: 800,
        height: 600,
        position: "50% 35%",
      },
      {
        src: "photos/2.jpg",
        alt: "#Mruneeth",
        width: 800,
        height: 600,
        position: "50% 35%",
      },
      {
        src: "photos/3.jpg",
        alt: "#Mruneeth",
        width: 800,
        height: 600,
        position: "50% 35%",
      },
      {
        src: "photos/4.jpg",
        alt: "#Mruneeth",
        width: 800,
        height: 600,
        position: "50% 35%",
      },
      {
        src: "photos/5.jpg",
        alt: "#Mruneeth",
        width: 800,
        height: 600,
        position: "50% 45%",
      },
      {
        src: "photos/8.jpg",
        alt: "#Mruneeth",
        width: 800,
        height: 600,
        position: "50% 15%",
      },
      {
        src: "photos/7.jpg",
        alt: "#Mruneeth",
        width: 800,
        height: 600,
        position: "50% 35%",
      },
      {
        src: "photos/11.jpg",
        alt: "#Mruneeth",
        width: 800,
        height: 600,
        position: "50% 35%",
      },
      {
        src: "photos/9.jpg",
        alt: "#Mruneeth",
        width: 800,
        height: 600,
        position: "50% 35%",
      },
      {
        src: "photos/10.jpg",
        alt: "#Mruneeth",
        width: 800,
        height: 600,
        position: "50% 15%",
      },
    ],
  },
  storyboard: {
  // eyebrow: "Our story",
  // heading: "The journey to forever",
  moments: [
    {
      id: "first-message",
      date: "26 November 2024",
      text: "One message. One \"Hey hey hey!\", and the beginning of us.",
      image: "photos/hello.png",
      imageAlt: "The beginning of our story",
      imageClass: "aspect-[4/3] w-28 sm:w-32 md:w-40",
      imagePosition: "50% 35%",
    },
    {
      id: "first-videocall",
      date: "16 January 2025",
      text: "Two screens, two smiles and a \"Hello\" slowly started feeling like home.",
    },
    {
      id: "yes-moment",
      date: "30 March 2025",
      text: "We said the easiest \"Yes\".",
    },
    {
      id: "first-meeting",
      date: "19 November 2025",
      text: "The miles between is diminished as we met for the first time across the oceans.",
    },
    {
      id: "first-trip",
      date: "07 December 2025",
      text: "Our first trip together—filled with laughter, fun, and beautiful craziness to remember.",
    },
    {
      id: "wedding",
      date: "26 November 2026",
      text: "From one little hello to forever.",
      image: "photos/marriage.png",
      imageAlt: "The couple beginning their forever together",
      imageClass: "aspect-[4/3] w-28 sm:w-32 md:w-40",
      imagePosition: "50% 10%",
    },
  ],
},

  footer: {
    closing: "We cannot wait to celebrate with you.",
    crafted: "Crafted with 💜.",
  },
};

export const navItems = [
  { id: "hero", label: "Home" },
  { id: "invitation", label: "Invite" },
  { id: "lineup", label: "Events" },
  { id: "venue", label: "Venue" },
  { id: "gallery", label: "Photos" },
  { id: "storyboard", label: "Storyboard" },
];

export default site;
