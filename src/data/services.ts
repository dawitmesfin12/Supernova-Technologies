export interface ServiceOption {
  value: string;
  label: string;
}

export const serviceOptions: ServiceOption[] = [
  { value: "custom-web-platforms", label: "Custom web platforms" },
  { value: "staff-augmentation", label: "Staff augmentation" },
  { value: "ongoing-support", label: "Ongoing support" },
  { value: "banking-financial", label: "Banking & financial services" },
  { value: "hotels-hospitality", label: "Hotels & hospitality" },
  { value: "import-export-logistics", label: "Import, export & logistics" },
  { value: "hospitals-clinics", label: "Hospitals & clinics" },
  { value: "pharma-wholesale", label: "Pharmaceutical wholesalers" },
  { value: "other", label: "Other / not sure yet" },
];
