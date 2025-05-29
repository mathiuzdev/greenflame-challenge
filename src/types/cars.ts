export interface RootObject {
  cars: Cars;
  days_calculation: Dayscalculation;
}

export interface Dayscalculation {
  days: number;
  calculation: Calculation;
}

export interface Calculation {
  hours: number;
  minutes: number;
}

export interface Cars {
  Avis: Avi[];
  Budget: Budget[];
  Payless: Payless[];
}

export interface Payless {
  brand: number;
  name: string;
  name_details: string;
  code: string;
  vehicle_group: string;
  highlighted: boolean;
  air_conditioner: boolean;
  transmission_type: string;
  vehicle_type: string;
  vehicle_class: string;
  fuel_type: null;
  drive_type: null;
  door_count: null;
  picture_url: Pictureurl;
  stars: number;
  features: Features3;
  tags: any[];
  rates: Rates3;
}

export interface Rates3 {
  "01": H8;
}

export interface Features3 {
  doors: string;
  seats: string;
  air_conditioner: boolean;
  transmition: string;
  fuel_type: string;
  large_suitcase: number;
  small_suitcase: number;
  thumb: string;
  fleet_group_id: number;
  fleet_category_id: number;
  fleet_original_category_id: number;
  category: string;
}

export interface Budget {
  brand: number;
  name: string;
  name_details: string;
  code: string;
  vehicle_group: string;
  highlighted: boolean;
  air_conditioner: boolean;
  transmission_type: string;
  vehicle_type: string;
  vehicle_class: string;
  fuel_type: null | string;
  drive_type: null;
  door_count: null | string;
  picture_url: Pictureurl2;
  stars: number;
  features: Features2;
  tags: Tags2[] | Tag[] | any[] | null;
  rates: Rates2;
}

export interface Rates2 {
  LQ: H8;
  BZ?: F2;
}

export interface Features2 {
  doors: number | string;
  seats: number | string;
  air_conditioner: boolean;
  transmition: string;
  fuel_type: string;
  large_suitcase: null | number;
  small_suitcase: null | number;
  thumb: string;
  fleet_group_id: null | number;
  fleet_category_id: null | number;
  fleet_original_category_id: null | number;
  category: string;
}

export interface Pictureurl2 {
  normal: null | string;
  featured: null | string;
}

export interface Avi {
  brand: number;
  name: string;
  name_details: string;
  code: string;
  vehicle_group: string;
  highlighted: boolean;
  air_conditioner: boolean;
  transmission_type: string;
  vehicle_type: string;
  vehicle_class: string;
  fuel_type: null | string;
  drive_type: null;
  door_count: null | string;
  picture_url: Pictureurl;
  stars: number;
  features: Features;
  tags: (Tag | Tags2)[];
  rates: Rates;
}

export interface Rates {
  H8: H8;
  F2?: F2;
  CL?: CL;
}

export interface CL {
  rate_data: Ratedata;
  inclusions_meta: Inclusionsmeta3;
  discount_numbers: null;
  pricing: Pricing;
  tags: Tags2[];
  id: number;
}

export interface Inclusionsmeta3 {
  um: Um;
  ldwc: Um;
  lstax: Um;
  fad: Um;
  safetysecure: Um;
  "basic-rsn": Um;
  mod: Um;
}

export interface F2 {
  rate_data: Ratedata;
  inclusions_meta: Inclusionsmeta2;
  discount_numbers: null;
  pricing: Pricing;
  tags: Tags2[];
  id: number;
}

export interface Inclusionsmeta2 {
  um: Um;
  ldwc: Um;
  tplc: Um;
  as: Um;
  lstax: Um;
  tog: Um;
  fad: Um;
  safetysecure: Um;
  "basic-rsn": Um;
  mod: Um;
}

export interface H8 {
  rate_data: Ratedata;
  inclusions_meta: Inclusionsmeta;
  discount_numbers: null;
  pricing: Pricing;
  tags: Tags2[];
  id: number;
}

export interface Pricing {
  USD: USD;
  COP: USD;
}

export interface USD {
  total_charge: Totalcharge;
}

export interface Totalcharge {
  base: Base;
  discounts: null;
  total: Base;
}

export interface Base {
  total_amount: string;
  estimated_total_amount: string;
  estimated_total_amount_without_equipment_amount: string;
  pp: Pp;
  pd: Pp;
}

export interface Pp {
  prepaid_amount: string;
  paid_on_destination_amount: string;
}

export interface Inclusionsmeta {
  um: Um;
  ldwc: Um;
  tplc: Um;
  as: Um;
  lstax: Um;
  fad: Um;
  safetysecure: Um;
  "basic-rsn": Um;
  mod: Um;
}

export interface Um {
  name: string;
  description: string;
  visible_voucher: boolean;
}

export interface Ratedata {
  name: string;
  net_rate: boolean;
  rate_type: string;
  inclusions: Inclusions;
  step_one: boolean;
}

export interface Inclusions {
  name: any[];
  description: any[];
}

export interface Tags2 {
  id: number;
  name_filter: string;
  visible: boolean;
  name: string;
  icon: string;
  color: string;
  remote_url: null;
  placeholder: string;
  priority: number;
}

export interface Tag {
  id: number;
  name_filter: string;
  visible: boolean;
  name: string;
  icon: null;
  color: string;
  remote_url: null;
  placeholder: string;
  priority: number;
}

export interface Features {
  doors: string;
  seats: string;
  air_conditioner: boolean;
  transmition: string;
  fuel_type: string;
  large_suitcase: number;
  small_suitcase: number;
  thumb: string;
  fleet_group_id: null | number;
  fleet_category_id: number;
  fleet_original_category_id: number;
  category: string;
}

export interface Pictureurl {
  normal: null | string;
  featured: string;
}

// Add a union type for Car
export type Car = Avi | Budget | Payless;
