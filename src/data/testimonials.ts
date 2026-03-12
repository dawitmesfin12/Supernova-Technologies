export interface Testimonial {
  id: number;
  initials: string;
  company: string;
  name: string;
  role: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    initials: "GU",
    company: "Gondar University Hospital",
    name: "Dr. Abebe T.",
    role: "Medical Director",
    quote:
      "Supernova built a patient records and appointment system that our staff actually uses every day. Wait times are down, data is easier to find, and the system fits our workflow instead of forcing us to change it.",
  },
  {
    id: 2,
    initials: "JH",
    company: "Jakaranda Hotel, Bahir Dar",
    name: "Yohannes K.",
    role: "Operations Manager",
    quote:
      "Our new booking platform and front-desk dashboard replaced three separate spreadsheets. Guests get faster check-ins, and we finally have real-time occupancy data across all our rooms.",
  },
  {
    id: 3,
    initials: "DS",
    company: "Dr. Seyoum Pharmaceutical Wholesale",
    name: "Seyoum A.",
    role: "Owner & Managing Director",
    quote:
      "Tracking inventory and expiry dates used to take hours. Supernova delivered an ordering and stock management system that keeps us compliant and saves my team an entire day of manual work each week.",
  },
  {
    id: 4,
    initials: "TA",
    company: "Tana Axion",
    name: "Mulugeta D.",
    role: "General Manager",
    quote:
      "We needed a reliable platform to manage our operations and client communications. Supernova understood our business from day one and delivered a clean, fast system that our whole team trusts.",
  },
];
