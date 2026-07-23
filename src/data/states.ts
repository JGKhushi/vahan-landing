// State + RTO data drives the two dependent dropdowns and the stats section.
// `services` is a demo count shown on the map/stats. RTO codes are illustrative.
export interface StateInfo {
  code: string;
  name: string;
  services: number;
  rtos: string[];
}

export const STATES: StateInfo[] = [
  { code: "AP", name: "Andhra Pradesh", services: 21, rtos: ["Vijayawada (AP16)", "Guntur (AP07)", "Visakhapatnam (AP31)"] },
  { code: "AS", name: "Assam", services: 12, rtos: ["Guwahati (AS01)", "Dibrugarh (AS06)", "Silchar (AS10)"] },
  { code: "BR", name: "Bihar", services: 18, rtos: ["Patna (BR01)", "Gaya (BR02)", "Muzaffarpur (BR06)"] },
  { code: "CG", name: "Chhattisgarh", services: 14, rtos: ["Raipur (CG04)", "Bilaspur (CG10)", "Durg (CG07)"] },
  { code: "DL", name: "Delhi", services: 27, rtos: ["Sarai Kale Khan (DL01)", "Mall Road (DL04)", "Janakpuri (DL08)"] },
  { code: "GJ", name: "Gujarat", services: 24, rtos: ["Ahmedabad (GJ01)", "Surat (GJ05)", "Vadodara (GJ06)"] },
  { code: "HR", name: "Haryana", services: 19, rtos: ["Gurugram (HR26)", "Faridabad (HR51)", "Ambala (HR01)"] },
  { code: "HP", name: "Himachal Pradesh", services: 11, rtos: ["Shimla (HP03)", "Mandi (HP33)", "Kangra (HP40)"] },
  { code: "JH", name: "Jharkhand", services: 13, rtos: ["Ranchi (JH01)", "Jamshedpur (JH05)", "Dhanbad (JH10)"] },
  { code: "KA", name: "Karnataka", services: 26, rtos: ["Bengaluru Central (KA01)", "Mysuru (KA09)", "Mangaluru (KA19)"] },
  { code: "KL", name: "Kerala", services: 22, rtos: ["Thiruvananthapuram (KL01)", "Kochi (KL07)", "Kozhikode (KL11)"] },
  { code: "MP", name: "Madhya Pradesh", services: 20, rtos: ["Bhopal (MP04)", "Indore (MP09)", "Jabalpur (MP20)"] },
  { code: "MH", name: "Maharashtra", services: 25, rtos: ["Mumbai Central (MH01)", "Pune (MH12)", "Nagpur (MH31)"] },
  { code: "OD", name: "Odisha", services: 15, rtos: ["Bhubaneswar (OD02)", "Cuttack (OD05)", "Rourkela (OD14)"] },
  { code: "PB", name: "Punjab", services: 17, rtos: ["Ludhiana (PB10)", "Amritsar (PB02)", "Jalandhar (PB08)"] },
  { code: "RJ", name: "Rajasthan", services: 23, rtos: ["Jaipur (RJ14)", "Jodhpur (RJ19)", "Udaipur (RJ27)"] },
  { code: "TN", name: "Tamil Nadu", services: 26, rtos: ["Chennai Central (TN01)", "Coimbatore (TN37)", "Madurai (TN58)"] },
  { code: "TS", name: "Telangana", services: 21, rtos: ["Hyderabad (TS09)", "Warangal (TS03)", "Karimnagar (TS02)"] },
  { code: "UP", name: "Uttar Pradesh", services: 24, rtos: ["Lucknow (UP32)", "Kanpur (UP78)", "Ghaziabad (UP14)"] },
  { code: "UK", name: "Uttarakhand", services: 10, rtos: ["Dehradun (UK07)", "Haridwar (UK08)", "Nainital (UK04)"] },
  { code: "WB", name: "West Bengal", services: 22, rtos: ["Kolkata (WB02)", "Howrah (WB11)", "Siliguri (WB73)"] },
];

export const TOTAL_SERVICES = STATES.reduce((sum, s) => sum + s.services, 0);
