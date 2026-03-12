import henokPhoto from "../assets/DevPhotos/Henok Tesfaye.png";
import mezigebuPhoto from "../assets/DevPhotos/Mezigebu Zeworq.jpg";
import dawitPhoto from "../assets/DevPhotos/Dawit Mesfin.jpg";
import ermiyasPhoto from "../assets/DevPhotos/Ermiyas Mesfin.jpg";
import dianaPhoto from "../assets/DevPhotos/Diana M.jpg";
import anaPhoto from "../assets/DevPhotos/Ana Woldu.jpg";

export interface Developer {
  name: string;
  role: string;
  photo: string | undefined;
}

export const developers: Developer[] = [
  { name: "Mezigebu Zeworq", role: "CEO & Owner", photo: mezigebuPhoto },
  { name: "Dawit Mesfin", role: "CTO & Core Developer", photo: dawitPhoto },
  { name: "Henok Tesfaye", role: "Full‑Stack Developer", photo: henokPhoto },
  { name: "Ermiyas Mesfin", role: "Mobile Developer", photo: ermiyasPhoto },
  { name: "Yibela D", role: "QA & Automation Engineer", photo: undefined },
  { name: "Diana M", role: "Product Designer", photo: dianaPhoto },
  { name: "Ana Woldu", role: "Project Manager", photo: anaPhoto },
  { name: "Yilkal G", role: "DevOps Engineer", photo: undefined },
];
