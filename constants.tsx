import { Instructor, LocationSchedule } from './types';

// Images - These now point to local files in public/images/
// You must add files with these exact names to that folder.
export const IMAGES = {
  LOGO: "images/logo.png",                         // Logo File
  HERO_BG: "images/hero-outdoor-party.jpg",
  MICHAEL_HEADSHOT: "images/michael-headshot.jpg", // Needs a file
  GROUP_CLASS: "images/group-class.jpg",           // Needs a file
  SOCIAL_EVENT: "images/social-event.jpg",         // Needs a file
  
  // New Instructor Images
  ANJALI_PIC: "images/anjali.jpg",               // Lady in Red Dress
  RON_PIC: "images/ron-and-partner.jpg",         // Formal Couple (Black/White)
  SINAI_PIC: "images/sinai.jpg",                 // Feather Headdress
  CAT_CHUCK_PIC: "images/cat-and-chuck.jpg",     // Couple in Blue Shirt/Floral Dress

  // Gallery Images
  GALLERY_WEDDING: "images/gallery-wedding.jpg",       // Couple in fog
  GALLERY_RED_FRINGE: "images/gallery-red-fringe.jpg", // Stage performance
  GALLERY_TRIO: "images/gallery-trio.jpg",             // Man in hat + 2 ladies
  GALLERY_STUDIO: "images/gallery-studio.jpg",         // Large group class
  
  // Legacy/Other
  FEATHER_COSTUME: "images/feather-costume.jpg",
  COUPLE_FUN: "images/couple-fun.jpg",
  SOLO_DANCER: "images/solo-dancer.jpg",
};

export const CONTACT_INFO = {
  PHONE: "619-251-8863",
  EMAIL: "positivesalsa2@yahoo.com",
};

export const SOCIAL_LINKS = {
  INSTAGRAM: "https://www.instagram.com/positiveenergydanceco/",
};

export const SCHEDULE_DATA: LocationSchedule[] = [
  {
    name: "Dance Headquarters",
    address: "5035 Shawline St",
    cityStateZip: "San Diego, CA 92111",
    sessions: [
      {
        day: "Every Thursday",
        times: [
          "Salsa at 6:30 PM",
          "Bachata at 7:30 PM",
          "Cha-Cha at 8:30 PM"
        ]
      }
    ]
  },
  {
    name: "Queen Bee’s North Park",
    address: "3925 Ohio St",
    cityStateZip: "San Diego, CA 92104",
    sessions: [
      {
        day: "Every Sunday",
        times: [
          "Bachata from 5:30 PM to 6:30 PM",
          "Salsa from 6:30 PM to 7:30 PM",
          "Rueda from 7:30 PM to 8:30 PM"
        ]
      }
    ]
  }
];

export const TEAM_DATA: Instructor[] = [
  {
    name: "Michael J. Saltus",
    role: "Founder, Director & Lead Instructor",
    description: "20+ years of experience leading teaching and choreography. The driving force behind Positive Energy.",
    image: IMAGES.MICHAEL_HEADSHOT
  },
  {
    name: "Anjali",
    role: "Dancer, Teacher & CMO",
    description: "Brings vibrant energy to the dance floor and leads our marketing initiatives.",
    image: IMAGES.ANJALI_PIC
  },
  {
    name: "Ron",
    role: "Technique Specialist",
    description: "Specializing in partner connection, Salsa, Bachata, and Tango technique.",
    image: IMAGES.RON_PIC
  },
  {
    name: "Sinai",
    role: "Dancer, Teacher, Singer & Designer",
    description: "A multi-talented artist bringing creativity to our costumes and performances.",
    image: IMAGES.SINAI_PIC
  },
  {
    name: "Cat & Chuck",
    role: "Casino Rueda Specialists",
    description: "Leading experts in San Diego for Casino Rueda, bringing community and fun.",
    image: IMAGES.CAT_CHUCK_PIC
  }
];
