// src/data/placesData.js
import i1 from "../assets/87.png";
import i2 from "../assets/50.png";
import i3 from "../assets/shade-ysUOK8yPnt0-unsplash.png";
import i4 from "../assets/rui-hao-lim-VajtrJauWDQ-unsplash.png";
import i5 from "../assets/Group_427_1.png";
import i6 from "../assets/Group_427_2.png";
import i7 from "../assets/Group_427_3.png";
import i8 from "../assets/Group_427_4.png";
import i9 from "../assets/orange-line.png";

import nagano1 from "../assets/nagano-1.png";
import nagano2 from "../assets/nagano-2.png";
import nagano3 from "../assets/nagano-3.png";
import nagano4 from "../assets/nagano-4.png";

import tokyo1 from "../assets/tokyo-1.png";
import tokyo2 from "../assets/tokyo-2.png";
import tokyo3 from "../assets/tokyo-3.png";
import tokyo4 from "../assets/tokyo-4.png";

import nikko1 from "../assets/nikko-1.png";
import nikko2 from "../assets/nikko-2.png";
import nikko3 from "../assets/nikko-3.png";
import nikko4 from "../assets/nikko-4.png";
import { FaCar } from "react-icons/fa";
const placesData = [
  {
    "id": 1,
    "bookingData": {
      "title": "Tokyo City Tour",
      "subtitle": "Tokyo is Japan’s buzzing capital—where ancient temples meet futuristic skyscrapers.",
      "location": "Tokyo City Tour",
      "reviews": "(Reviews)",
      "images": [
        {
          "src": "tokyo1",
          "classes": "col-span-1 md:col-span-2 row-span-1 md:row-span-2 w-full h-full"
        },
        {
          "src": "tokyo2",
          "classes": "col-span-1 md:col-span-2 row-span-1 w-full h-full"
        },
        {
          "src": "tokyo3",
          "classes": "col-span-1 w-full h-full"
        },
        {
          "src": "tokyo4",
          "classes": "col-span-1 w-full h-full"
        }
      ],
      "details": [
        { "icon": "i5", "label": "Duration", "value": "10 Hours" },
        { "icon": "i6", "label": "People", "value": "1-6" },
        { "icon": "i7", "label": "Language", "value": "English" },
        { "icon": "i8", "label": "Type", "value": "Adventure" }
      ],
      "price": {
        "fromLabel": "From",
        "primary": "380",
        "secondary": "$500",
        "secondaryIcon": "i9"
      }
    },
    "tripData": {
      "description": {
        "title": "Description",
        "text": "Discover the magic of Tokyo with GotYourRide, your ultimate tour partner! Experience the bustling Shibuya Crossing, serene Meiji Shrine, and the historic Senso-ji Temple. Dive into the vibrant streets of Akihabara and savor fresh delicacies at Tsukiji Outer Market. Enjoy breathtaking views from Tokyo Tower and the futuristic attractions of Odaiba. Our customized tours and comfortable rides ensure an unforgettable journey through Japan’s dynamic capital. Book now and explore Tokyo like never before with GotYourRide!"
      },
      "tripHighlights": {
        "title": "Trip Highlights",
        "subTitle": "Must See Spots"
      },
      "includeExclude": {
        "title": "Include/Exclude",
        "includedItems": [
          "Meet and Greet",
          "English-Speaking Driver",
          "Air-Conditioned Vehicle",
          "With WiFi When Available"
        ],
        "excludedItems": [
          "Market Purchase Expense",
          "Food and Drinks",
          "Tour Guide",
          "Any Sort of Entry Ticket"
        ]
      },
      "booking": {
        "title": "Book Your Trip",
        "dropdownPlaceholder": "Select a date",
        "people": {
          "label": "People:",
          "category": "Adult",
          "subtext": "(18+ Years)",
          "selectPlaceholder": "When (Date)",
          "options": [
            { "value": "option1", "label": "0" },
            { "value": "option2", "label": "1" },
            { "value": "option3", "label": "2" }
          ]
        },
        "tripInfo": [
          { "label": "Location", "value": "Tokyo City Tour" },
          { "label": "Service", "value": "transport + driver" },
          { "label": "Duration", "value": "10 Hours" },
          { "label": "People", "value": "1-6" }
        ],
        "buttonText": "Book Now"
      }
    },
    "itineraryData": [
      {
        "type": "in-transit",
        "icon": "caricon",
        "title": "Starting Location:",
        "subtitle": "You Will Get Picked Up"
      },
      {
        "type": "in-transit",
        "icon": "caricon",
        "title": "Car",
        "subtitle": ""
      },
      {
        "type": "in-activity",
        "icon": "caricon",
        "title": "Tsukiji Outer Market",
        "subtitle": "Visit, Sightseeing, Walk, Scenic Views On The Way"
      },
      {
        "type": "in-activity",
        "icon": "caricon",
        "title": "Sensoji Temple",
        "subtitle": "Visit, Sightseeing"
      },
      {
        "type": "in-activity",
        "icon": "caricon",
        "title": "Imperial Palace",
        "subtitle": "Visit, Sightseeing, Walk, Scenic Views On The Way"
      },
      {
        "type": "in-activity",
        "icon": "caricon",
        "title": "Tokyo Skytree",
        "subtitle": "Visit, Sightseeing, Scenic Views"
      },
      {
        "type": "in-activity",
        "icon": "caricon",
        "title": "Ginza",
        "subtitle": "Shopping, Sightseeing, Free Time"
      },
      {
        "type": "in-activity",
        "icon": "caricon",
        "title": "Hakuhinkan Toy Park",
        "subtitle": "Visit, Entertainment, Shopping"
      },
      {
        "type": "in-transit",
        "icon": "caricon",
        "title": "You Will Return To The Starting Point",
        "subtitle": "End of the tour"
      }
    ],
    "options": [
      { "id": "a", "label": "Tsukiji Outer Market" },
      { "id": "b", "label": "Sensoji Temple" },
      { "id": "c", "label": "Tokyo Skytree" },
      { "id": "d", "label": "Tokyo Tower" },
      { "id": "e", "label": "Ginza" }
    ]
  }
  ,
  {
    "id": 2,
    "bookingData": {
      "title": "Mount Fuji",
      "subtitle": "Tokyo to Mount Fuji with cultural sights and stunning views.",
      "location": "Mount Fuji",
      "reviews": "(Reviews)",
      "images": [
        {
          "src": "i1",
          "classes": "col-span-1 md:col-span-2 row-span-1 md:row-span-2 w-full h-full"
        },
        {
          "src": "i2",
          "classes": "col-span-1 md:col-span-2 row-span-1 w-full h-full"
        },
        {
          "src": "i3",
          "classes": "col-span-1 w-full h-full"
        },
        {
          "src": "i4",
          "classes": "col-span-1 w-full h-full"
        }
      ],
      "details": [
        { "icon": "i5", "label": "Duration", "value": "10 Hours" },
        { "icon": "i6", "label": "People", "value": "1-6" },
        { "icon": "i7", "label": "Language", "value": "English" },
        { "icon": "i8", "label": "Type", "value": "Adventure" }
      ],
      "price": {
        "fromLabel": "From",
        "primary": "408",
        "secondary": "$533",
        "secondaryIcon": "i9"
      }
    },
    "tripData": {
      "description": {
        "title": "Description",
        "text": "Embark on a private day trip with Mount Fuji Discoveries, where you’ll explore the breathtaking beauty and cultural richness surrounding Japan’s iconic peak. Begin with panoramic views at Chureito Pagoda, followed by a visit to the serene village of Oshino Hakkai, home to crystal-clear ponds and traditional thatched-roof houses. Continue to the sacred Kitaguchi Hongu Fuji Sengen Shrine nestled in a tranquil cedar forest, and enjoy the stunning reflections of Mount Fuji at Lake Kawaguchi. For those seeking more adventure, optional activities include the Hakone Ropeway for aerial views of volcanic landscapes or a Lake Ashi cruise to glide across its calm waters. This customizable journey offers a perfect blend of nature, culture, and excitement, tailored to your preferences."
      },
      "tripHighlights": {
        "title": "Trip Highlights",
        "subTitle": "Places covered"
      },
      "includeExclude": {
        "title": "Include/Exclude",
        "includedItems": [
          "Hotel pickup and drop-off",
          "Air-conditioned transportation",
          "Driver",
          "Guide"
        ],
        "excludedItems": [
          "Mount Fuji entry ticket",
          "Food and drinks",
          "Ropeway or motorboat ticket"
        ]
      },
      "booking": {
        "title": "Book Your Trip",
        "dropdownPlaceholder": "Select a date",
        "people": {
          "label": "People:",
          "category": "Adult",
          "subtext": "(14+ Years)",
          "selectPlaceholder": "When (Date)",
          "options": [
            { "value": "option1", "label": "0" },
            { "value": "option2", "label": "1" },
            { "value": "option3", "label": "2" }
          ]
        },
        "tripInfo": [
          { "label": "Location", "value": "Mount Fuji" },
          { "label": "Service", "value": "transport + driver" },
          { "label": "Duration", "value": "10 Hours" },
          { "label": "People", "value": "1-6" }
        ],
        "buttonText": "Book Now"
      }
    },
    "itineraryData": [
      {
        "type": "in-transit",
        "icon": "caricon",
        "title": "13 Pickup Location Options:",
        "subtitle": "Bunkyo City, Fujikawaguchi, Itabashi"
      },
      {
        "type": "in-activity",
        "icon": "caricon",
        "title": "Chureito Pagoda",
        "subtitle": "Visit, Sightseeing, Walk, Scenic Views On The Way",
        "meta": "Optional, Extra fee"
      },
      {
        "type": "in-activity",
        "icon": "caricon",
        "title": "Oshino Hakkai",
        "subtitle": "Visit, Sightseeing, Safety Briefing"
      },
      {
        "type": "in-activity",
        "icon": "caricon",
        "title": "Kitaguchi-Hongu Fuji Sengen Shrine",
        "subtitle": "Break Time, Photo Stop, Cable Car Ride, Scenic Views On The Way"
      },
      {
        "type": "in-activity",
        "icon": "caricon",
        "title": "Lake Kawaguchi",
        "subtitle": "Visit, Sightseeing, Safety Briefing"
      },
      {
        "type": "in-activity",
        "icon": "caricon",
        "title": "Mt. Kachi Kachi Ropeway",
        "subtitle": "Visit, Sightseeing, Walk, Scenic Drive, Scenic Views On The Way"
      },
      {
        "type": "in-activity",
        "icon": "caricon",
        "title": "Oishi Park",
        "subtitle": "Break Time, Photo Stop, Free Time"
      },
      {
        "type": "no-line",
        "icon": "caricon",
        "title": "13 Drop-Off Locations:",
        "subtitle": "Tokyo 23 wards, Ichikawa, Shinbashi, Sumida City"
      }
    ],
    "options": [
      { "id": "a", "label": "Chureito Pagoda" },
      { "id": "b", "label": "Mount Fuji" },
      { "id": "c", "label": "Oshino Hakkai" },
      { "id": "d", "label": "Kitaguchi-hongu Fuji Sengen Shrine" },
      { "id": "e", "label": "Lake Kawaguchi" },
      { "id": "f", "label": "Mt. Kachi Kachi Ropeway" },
      { "id": "g", "label": "Oishi Park" },
      { "id": "h", "label": "Saiko Iyashi-no-Sato Nenba" },
      { "id": "i", "label": "Lake Ashi (Optional)" },
      { "id": "j", "label": "Hakone Ropeway (Optional)" },
      { "id": "k", "label": "Aokigahara Forest (Optional)" },
      { "id": "l", "label": "Lake Yamanaka (Optional)" },
      { "id": "m", "label": "The Hakone Open-Air Museum (Optional)" },
      { "id": "n", "label": "Fugaku Wind Cave (Optional)" }
    ]
  }
  ,
  {
    "id": 3,
    "bookingData": {
      "title": "Nagano Tour",
      "subtitle": "From Tokyo to Nagano: A journey from vibrant cityscapes to serene mountain escapes.",
      "location": "Nagano Tour",
      "reviews": "(Reviews)",
      "images": [
        {
          "src": "nagano1",
          "classes": "col-span-1 md:col-span-2 row-span-1 md:row-span-2 w-full h-full"
        },
        {
          "src": "nagano2",
          "classes": "col-span-1 md:col-span-2 row-span-1 w-full h-full"
        },
        {
          "src": "nagano3",
          "classes": "col-span-1 w-full h-full"
        },
        {
          "src": "nagano4",
          "classes": "col-span-1 w-full h-full"
        }
      ],
      "details": [
        { "icon": "i5", "label": "Duration", "value": "10 Hours" },
        { "icon": "i6", "label": "People", "value": "1-6" },
        { "icon": "i7", "label": "Language", "value": "English" },
        { "icon": "i8", "label": "Type", "value": "Adventure" }
      ],
      "price": {
        "fromLabel": "From",
        "primary": "477",
        "secondary": "$562",
        "secondaryIcon": "i9"
      }
    },
    "tripData": {
      "description": {
        "title": "Description",
        "text": "On this full-day journey, see the great sights close to Nagano - a historic temple, a sake tasting, and snow monkeys. See the Snow Monkey Park to learn more about snow monkeys in their natural environment. Discover Zenko-ji, one of the oldest Buddhist temples in Japan. Taste a restaurant close to Nagano and have a typical Japanese meal."
      },
      "tripHighlights": {
        "title": "Trip Highlights",
        "subTitle": "Places covered"
      },
      "includeExclude": {
        "title": "Include/Exclude",
        "includedItems": [
          "Air-Conditioned Vehicle",
          "English & Hindi Speaking Guide",
          "Private Transportation",
          "All Tolls & Taxes",
          "Bottled Water"
        ],
        "excludedItems": [
          "Lunch",
          "Entry Tickets Less Than $10",
          "Enter/Admission - Jigokudani Snow Monkey Park Less Than $10"
        ]
      },
      "booking": {
        "title": "Book Your Trip",
        "dropdownPlaceholder": "Select a date",
        "people": {
          "label": "People:",
          "category": "Adult",
          "subtext": "(18+ Years)",
          "selectPlaceholder": "When (Date)",
          "options": [
            { "value": "option1", "label": "0" },
            { "value": "option2", "label": "1" },
            { "value": "option3", "label": "2" }
          ]
        },
        "tripInfo": [
          { "label": "Location", "value": "Nagano Tour" },
          { "label": "Service", "value": "transport + driver" },
          { "label": "Duration", "value": "10 Hours" },
          { "label": "People", "value": "1-6" }
        ],
        "buttonText": "Book Now"
      }
    },
    "itineraryData": [
      {
        "type": "in-transit",
        "icon": "caricon",
        "title": "13 Pickup Location Options:",
        "subtitle": "You Will Get Picked Up"
      },
      {
        "type": "in-transit",
        "icon": "caricon",
        "title": "Car",
        "subtitle": "Visit, Sightseeing"
      },
      {
        "type": "in-activity",
        "icon": "caricon",
        "title": "Zenko Ji Temple",
        "subtitle": "Visit, Sightseeing"
      },
      {
        "type": "in-activity",
        "icon": "caricon",
        "title": "Nishimon Yoshinoya",
        "subtitle": "Visit, Sightseeing"
      },
      {
        "type": "in-activity",
        "icon": "caricon",
        "title": "Jigokudani Snow Monkey Park",
        "subtitle": "Visit, Sightseeing"
      },
      {
        "type": "in-activity",
        "icon": "caricon",
        "title": "Dazaifu Monzen Machi",
        "subtitle": "Visit, Sightseeing"
      },
      {
        "type": "in-activity",
        "icon": "caricon",
        "title": "Obuse Onsen Kannon-No-Yu",
        "subtitle": "Visit, Sightseeing"
      },
      {
        "type": "in-transit",
        "icon": "caricon",
        "title": "You Will Return To The Starting Point",
        "subtitle": "End of the tour"
      }
    ],
    "options": [
      { "id": "f", "label": "Zenko-ji Temple (Nagano)" },
      { "id": "g", "label": "Nishimon Yoshinoya (Nagano)" },
      { "id": "h", "label": "Jigokudani Snow Monkey Park (Yamanouchi)" },
      { "id": "i", "label": "Dazaifu Monzen Machi (Fukuoka)" },
      { "id": "j", "label": "Obuse Onsen Kannon-no-yu (Nagano)" },
      { "id": "k", "label": "Oshino Hakkai (Yamanashi)" },
      { "id": "l", "label": "Kitaguchi-hongu Fuji Sengen Shrine (Yamanashi)" }
    ]
  }
  ,
  {
    "id": 4,
    "bookingData": {
      "title": "Nikko Tour",
      "subtitle": "Nikko blends spiritual heritage with breathtaking nature, just a few hours from Tokyo.",
      "location": "Nikko Tour",
      "reviews": "(Reviews)",
      "images": [
        {
          "src": "nikko1",
          "classes": "col-span-1 md:col-span-2 row-span-1 md:row-span-2 w-full h-full"
        },
        {
          "src": "nikko2",
          "classes": "col-span-1 md:col-span-2 row-span-1 w-full h-full"
        },
        {
          "src": "nikko3",
          "classes": "col-span-1 w-full h-full"
        },
        {
          "src": "nikko4",
          "classes": "col-span-1 w-full h-full"
        }
      ],
      "details": [
        { "icon": "i5", "label": "Duration", "value": "10 Hours" },
        { "icon": "i6", "label": "People", "value": "1-6" },
        { "icon": "i7", "label": "Language", "value": "English" },
        { "icon": "i8", "label": "Type", "value": "Adventure" }
      ],
      "price": {
        "fromLabel": "From",
        "primary": "423",
        "secondary": "$550",
        "secondaryIcon": "i9"
      }
    },
    "tripData": {
      "description": {
        "title": "Description",
        "text": "Chat with your driver as you travel, and customize an itinerary focused on the Nikko sights you want to see. Tailor stops to suit your unique interests with this private experience. Start with pickup from your accommodation in the 23 Wards of Tokyo. Relax in a comfortable car as you journey through the picturesque Japanese countryside, with your private driver handling traffic and navigation. Stay connected with onboard Wi-Fi. Travel into the mountains north of Tokyo to the charming city of Nikko in Tochigi Prefecture. Enjoy free time to visit the Toshogu Shrine, exploring its 42 structures, including a stunning five-story pagoda. Experience why this area is considered a national treasure. Stop at a local restaurant where you can purchase a traditional lunch. Get recommendations on where to enjoy authentic yuba gozen (tofu skin set meal). Admire the beauty of Kegon Falls, where water cascades off a cliff into a lush landscape."
      },
      "tripHighlights": {
        "title": "Trip Highlights",
        "subTitle": "Places covered"
      },
      "includeExclude": {
        "title": "Include/Exclude",
        "includedItems": [
          "English-speaking driver",
          "Airconditioned transportation",
          "Wi-fi in the vehicle"
        ],
        "excludedItems": [
          "Food and drinks",
          "Guide",
          "Toshogu shrine entry ticket"
        ]
      },
      "booking": {
        "title": "Book Your Trip",
        "dropdownPlaceholder": "Select a date",
        "people": {
          "label": "People:",
          "category": "Adult",
          "subtext": "(18+ Years)",
          "selectPlaceholder": "When (Date)",
          "options": [
            { "value": "option1", "label": "0" },
            { "value": "option2", "label": "1" },
            { "value": "option3", "label": "2" }
          ]
        },
        "tripInfo": [
          { "label": "Location", "value": "Nikko Tour" },
          { "label": "Service", "value": "transport + driver" },
          { "label": "Duration", "value": "10 Hours" },
          { "label": "People", "value": "1-6" }
        ],
        "buttonText": "Book Now"
      }
    },
    "itineraryData": [
      {
        "type": "in-transit",
        "icon": "caricon",
        "title": "2 pickup location options:",
        "subtitle": "Tokyo, Kanagawa"
      },
      {
        "type": "in-transit",
        "icon": "caricon",
        "title": "Car",
        "subtitle": ""
      },
      {
        "type": "in-activity",
        "icon": "caricon",
        "title": "Nikko Toshogu",
        "subtitle": "Visit, Sightseeing"
      },
      {
        "type": "in-activity",
        "icon": "caricon",
        "title": "Shinkyo Bridge",
        "subtitle": "Visit, Sightseeing"
      },
      {
        "type": "in-activity",
        "icon": "caricon",
        "title": "Kegon Falls",
        "subtitle": "Visit, Sightseeing"
      },
      {
        "type": "in-activity",
        "icon": "caricon",
        "title": "Nikko Futarasan jinja",
        "subtitle": "Visit, Sightseeing, Walk"
      },
      {
        "type": "in-activity",
        "icon": "caricon",
        "title": "Tobu World",
        "subtitle": "Visit, Sightseeing, Relaxation"
      },
      {
        "type": "in-activity",
        "icon": "caricon",
        "title": "2 drop-off locations:",
        "subtitle": "Tokyo, Kanagawa"
      }
    ],
    "options": [
      { "id": "m", "label": "Nikko Toshogu" },
      { "id": "n", "label": "Shinkyo Bridge" },
      { "id": "o", "label": "Kegon Falls" },
      { "id": "p", "label": "Nikko Futarasan Jinja" },
      { "id": "q", "label": "Tobu World Square" }
    ]
  }
  ,
];

const json = [
  {
    "name": "home1",
    "chars": [
      {
        "id":1,
        "icon": "i1",
        "text": "MOST POPULAR DESTINATIONS"
      },
      {
        "id":2,
        "icon": "i2",
        "text": "BUDGET FRIENDLY PACKAGES"
      },
      {
        "id":3,
        "icon": "i3",
        "text": "SATISFACTION GUARANTEED"
      },
      {
        "id":4,
        "icon": "i4",
        "text": "EXPERIENCED TRAVEL EXPERTS"
      }
    ],
    "title": "MOST POPULAR DESTINATIONS",
    "des": "Explore the worldwide destinations which are the most preferred by people, including amazing natural beauties as well as lively urban scenery. Japan’s cities, like Tokyo, Nagano and Nikko, offer a unique contrast. Tokyo, a global hub of innovation and energy, dazzles with its neon-lit skyline, bustling streets, and world-class shopping."
  },
  {
    "cards": [
      {
        "id": 1,
        "image": "image2",
        "title": "Tokyo City Tour",
        "subtitle": "Feel the pulse of Japan’s electric capital",
        "price": "$380",
        "originalPrice": "$500",
        "duration": "10 Hours",
        "guests": "1‑6 Guests"
      },
      {
        "id": 2,
        "image": "image3",
        "title": "Mt. Fuji",
        "subtitle": "Touch the clouds and awaken your spirit",
        "price": "$408",
        "originalPrice": "$533",
        "duration": "10 Hours",
        "guests": "1‑6 Guests"
      },
      {
        "id": 3,
        "image": "image4",
        "title": "Nagano Tour",
        "subtitle": "Find serenity where mountains meet mystic temples",
        "price": "$447",
        "originalPrice": "$562",
        "duration": "10 Hours",
        "guests": "1‑6 Guests"
      },
      {
        "id": 4,
        "image": "image5",
        "title": "Nikko Tour",
        "subtitle": "Journey into nature’s grandeur and timeless shrines",
        "price": "$423",
        "originalPrice": "$550",
        "duration": "10 Hours",
        "guests": "1‑6 Guests"
      }
    ]
  },
  {
    "des": "Experience the freedom of a flexible schedule and the choice of what you want to do and for how long you wish to do it. Relax in a comfortable ride in modern minivans that can seat as many as 13 passengers. Take in the views of Mount Fuji at your leisure by using the private charter service for the whole duration of your trip to the region.",
    "experience": "20+",
    "expText": "YEARS OF EXPERIENCE",
    "cards": [
      { "icon": "i6", "text": "Nationally well‑known <br> service provider" },
      { "icon": "i10", "text": "Most popular booking <br> solution provider" }
    ],
    "bulletPoints": [
      "Free cancellation: Cancel up to 24 hours in advance for a full refund",
      "Hand‑picked premium accommodations that guarantee comfort and relaxation.",
      "Dedicated 24/7 support team ready to assist you at any moment."
    ]
  },
  {
    "cards": [
      {
        "id": 1,
        "img": "image18",
        "title": "Experienced Travel Experts",
        "text": "Rely on our knowledgeable travel agents to create the perfect journey tailored just for you."
      },
      {
        "id": 2,
        "img": "image20",
        "title": "Effortless Booking Made Simple",
        "text": "Our easy‑to‑use booking platform makes planning your ideal trip a breeze, so you can focus on enjoying the journey from the start."
      },
      {
        "id": 3,
        "img": "image19",
        "title": "Local Guide Services",
        "text": "Professional local guides for city tours, nature excursions, or cultural experiences. Multi‑lingual guides."
      },
      {
        "id": 4,
        "img": "image24",
        "title": "Complete Travel Security",
        "text": "Your safety and peace of mind are our top priorities, ensuring that your journey is fully protected at all times."
      },
      {
        "id": 5,
        "img": "image25",
        "title": "Travel Insurance",
        "text": "Offering travel insurance packages that cover health, lost luggage, trip cancellations."
      },
      {
        "id": 6,
        "img": "image26",
        "title": "Recommendations – Restaurants",
        "text": "Reservations at local restaurants during your travel to make your journey happy."
      }
    ]
  },
  [
  {
    "id": 1,
    "photo": "image21",
    "name": "James Carter",
    "country": "UK",
    "review": "Got Your Ride handled everything flawlessly – flights, JR passes, even pocket‑Wi‑Fi. I just showed up and enjoyed Japan.",
    "bg": "bg-[#D8F4DA]"
  },
  {
    "id": 2,
    "photo": "image22",
    "name": "Michael Johnson",
    "country": "USA",
    "review": "Smooth booking and great local tips. Their Osaka food tour was a highlight. Highly recommended!",
    "bg": "bg-[#FFE2CE]"
  },
  {
    "id": 3,
    "photo": "image23",
    "name": "Daniel Wright",
    "country": "UK",
    "review": "From airport pickup to Mt Fuji day‑trip, Got Your Ride nailed the timing. I’ll book with them again next spring.",
    "bg": "bg-[#F1D4D4]"
  },
  {
    "id": 4,
    "photo": "image27",
    "name": "Jonathan Harris",
    "country": "Australia",
    "review": "Booking was effortless and their support team answered every question within minutes. Five‑star service.",
    "bg": "bg-[#D9D9D9]"
  },
  {
    "id": 5,
    "photo": "image28",
    "name": "Oliver Brooks",
    "country": "Japan",
    "review": "Loved the Kyoto cultural package. Guides were punctual, friendly, and spoke perfect English.",
    "bg": "bg-[#D8F4DA]"
  },
  {
    "id": 6,
    "photo": "image29",
    "name": "William Scott",
    "country": "Germany",
    "review": "Got Your Ride took the stress out of planning. Hotels were spot‑on and within budget. 6 stars if I could.",
    "bg": "bg-[#FFE2CE]"
  }
]

];
export default placesData;

