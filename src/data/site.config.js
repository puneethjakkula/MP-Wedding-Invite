/**
 * Edit this file to launch or customize the site.
 * No other source files need content changes.
 */

export const site = {
  siteUrl: "https://username.github.io/DeW/",
  defaultTheme: "lotus",
  themes: [
    { id: "marigold", label: "Marigold" },
    { id: "ruby", label: "Ruby" },
    { id: "emerald", label: "Emerald" },
    { id: "sapphire", label: "Sapphire" },
    { id: "lotus", label: "Lotus" },
  ],
  meta: {
    title: "Abhishek & Neha — We're getting married",
    description:
      "Join Abhishek and Neha in Ravatbhata on 24 January 2027. Ceremony, celebrations, and all the details.",
  },
  couple: {
    partnerA: "Abhishek",
    partnerB: "Neha",
  },
  hashtag: "#AbhishekWedsNeha",
  weddingDateIso: "2027-01-24T16:30:00+05:30",
  displayDate: "24 January 2027",
  city: "Ravatbhata, Rajasthan",
  music: {
    src: "music/celebration.wav",
    labelPlay: "Play music",
    labelPause: "Pause music",
  },
  skipLink: "Skip to content",
  hero: {
    kicker: "Together with their families",
    ctaLabel: "Open the invitation",
    ctaHref: "#invitation",
  },
  invitation: {
    eyebrow: "A note from us",
    heading: "Please celebrate with us",
    paragraphs: [
      "We fell in love between shared playlists, late-night walks, and a thousand small kindnesses. On a bright winter afternoon in Ravatbhata, we will promise each other a lifetime of the same.",
      "Your presence is the gift we want most. Come for the colour, stay for the dancing, and help us begin this next chapter surrounded by the people we love.",
    ],
    signOff: "With all our love",
  },
  countdown: {
    heading: "Until we say I do",
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
    mapsLabel: "Open in Google Maps",
  },
  events: [
    {
      id: "haldi",
      title: "Haldi",
      date: "23 January 2027",
      time: "11:30 AM",
      venue: "The family courtyard, C-Scheme",
      note: "Turmeric, laughter, and clothes you do not mind staining.",
      accent: "marigold",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=C-Scheme+Jaipur",
    },
    {
      id: "engagement",
      title: "Engagement",
      date: "23 January 2027",
      time: "6:30 PM",
      venue: "Rambagh Palace lawns",
      note: "Rings, blessings, and a toast under the fairy lights.",
      accent: "ruby",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Rambagh+Palace+Jaipur",
    },
    {
      id: "sangeet",
      title: "Sangeet",
      date: "23 January 2027",
      time: "7:00 PM",
      venue: "City Palace courtyard",
      note: "Family performances, dhol, and dancing until the stars blur.",
      accent: "emerald",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=City+Palace+Jaipur",
    },
    {
      id: "mangalastaka",
      title: "Mangal Astaka",
      date: "24 January 2027",
      time: "11:30 AM",
      venue: "Mandap at Rambagh Palace",
      note: "Sacred chants, heartfelt vows, and the beautiful beginning of forever.",
      accent: "sapphire",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Rambagh+Palace+Jaipur",
    },
    {
      id: "wedding",
      title: "Wedding",
      date: "24 January 2027",
      time: "8:30 PM",
      venue: "Mandap at Rambagh Palace",
      note: "The pheras. Please be seated a little before the muhurat.",
      accent: "sapphire",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Rambagh+Palace+Jaipur",
    },
    {
      id: "reception",
      title: "Reception",
      date: "28 January 2027",
      time: "8:00 PM",
      venue: "The grand ballroom, Rambagh Palace",
      note: "Dinner, stories, and one last whirl on the floor.",
      accent: "lotus",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Rambagh+Palace+Jaipur",
    },
  ],
  venue: {
    eyebrow: "Find us",
    heading: "The wedding venue",
    name: "Rambagh Palace",
    addressLines: [
      "Bhawani Singh Road",
      "Jaipur, Rajasthan 302005",
      "India",
    ],
    directions:
      "The palace sits just south of the old city. From Jaipur International Airport it is about a 25-minute drive. Valet will be waiting at the main gate; rideshare drop-off is the same entrance.",
    mapsCta: "Open in Google Maps",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Rambagh+Palace+Jaipur",
    loadMapLabel: "Load the map",
    mapTitle: "Map of Rambagh Palace, Jaipur",
    embedUrl:
      "https://maps.google.com/maps?q=Rambagh%20Palace%20Jaipur&t=&z=15&ie=UTF8&iwloc=&output=embed",
    facadeCaption: "Tap to load Google Maps. The map is not loaded until you ask, so the page stays light.",
  },
  gallery: {
    eyebrow: "A few frames",
    heading: "From our story so far",
    lightboxLabel: "Photo viewer",
    closeLabel: "Close",
    prevLabel: "Previous photo",
    nextLabel: "Next photo",
    photos: [
      {
        src: "photos/1.jpeg",
        alt: "Meera and Arjun walking through a marigold-lined courtyard at dusk",
        width: 800,
        height: 600,
      },
      {
        src: "photos/2.jpeg",
        alt: "Close-up of henna patterns on Meera's hands with gold bangles",
        width: 800,
        height: 600,
      },
      {
        src: "photos/3.jpeg",
        alt: "Arjun laughing with family during a rooftop tea in Jaipur",
        width: 800,
        height: 600,
      },
      {
        src: "photos/4.jpeg",
        alt: "A table of sweets, roses, and brass diyas before a celebration",
        width: 800,
        height: 600,
      },
      {
        src: "photos/5.jpeg",
        alt: "The couple under a string of fairy lights in a palace garden",
        width: 800,
        height: 600,
      },
      {
        src: "photos/6.jpeg",
        alt: "Folk musicians playing dhol and flute at a sangeet rehearsal",
        width: 800,
        height: 600,
      },
      {
        src: "photos/7.jpeg",
        alt: "Meera in a rose-coloured saree standing beside carved sandstone",
        width: 800,
        height: 600,
      },
      {
        src: "photos/8.jpeg",
        alt: "Arjun and Meera holding hands, rings catching the evening sun",
        width: 800,
        height: 600,
      },
    ],
  },
  footer: {
    closing: "We cannot wait to celebrate with you.",
    crafted: "With love, from our little corner of the internet.",
  },
};

export const navItems = [
  { id: "hero", label: "Home" },
  { id: "invitation", label: "Invite" },
  { id: "countdown", label: "When" },
  { id: "lineup", label: "Events" },
  { id: "venue", label: "Venue" },
  { id: "gallery", label: "Photos" },
];

export default site;
