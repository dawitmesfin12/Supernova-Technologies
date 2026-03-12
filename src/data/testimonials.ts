import awashBankLogo from "../assets/awash-bank-logo.svg";
import ethiopianAirlinesLogo from "../assets/ethiopian-airlines-logo.svg";
import skylightHotelLogo from "../assets/skylight-hotel-logo.svg";

export interface Testimonial {
  id: number;
  logo: string;
  company: string;
  name: string;
  role: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    logo: awashBankLogo,
    company: "Awash Bank (Ethiopia)",
    name: "M. Bekele",
    role: "Digital Channels Director",
    quote:
      "Supernova Technologies delivered our new corporate banking portal on time and with zero downtime at launch. Their team understood both the technical and regulatory side of Ethiopian banking.",
  },
  {
    id: 2,
    logo: skylightHotelLogo,
    company: "Skylight Hotel Addis",
    name: "S. Tesfaye",
    role: "General Manager",
    quote:
      "Our new booking and property management tools have reduced manual work for the front desk and reservations teams. Guests are checking in faster and we have better visibility across the hotel.",
  },
  {
    id: 3,
    logo: ethiopianAirlinesLogo,
    company: "Ethiopian Hospitality Group",
    name: "H. Alemu",
    role: "Group IT Lead",
    quote:
      "Working with Supernova feels like working with an internal product team. Communication is clear, releases are predictable, and they are quick to support new ideas from our business units.",
  },
];
