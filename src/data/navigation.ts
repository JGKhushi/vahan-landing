import type { DictKey } from "@/i18n/dictionaries";

// One clickable row inside a nav dropdown. `labelKey` is a translation key,
// so the label automatically follows the selected language.
export interface NavItem {
  labelKey: DictKey;
}

// A top-level nav menu = a button that opens a dropdown of NavItems.
export interface NavMenu {
  labelKey: DictKey;
  items: NavItem[];
}

// The three dropdown menus in the header, mirroring the real VAHAN portal.
export const NAV_MENUS: NavMenu[] = [
  {
    labelKey: "navPayment",
    items: [
      { labelKey: "navVahanPgi" },
      { labelKey: "navEtransPgi" },
      { labelKey: "navVerifyReceipt" },
    ],
  },
  {
    labelKey: "navApply",
    items: [{ labelKey: "navNoc" }, { labelKey: "navTemp" }],
  },
  {
    labelKey: "navAdmin",
    items: [
      { labelKey: "navAppointment" },
      { labelKey: "navHelpdesk" },
      { labelKey: "navRtoLogin" },
    ],
  },
];

// Simple single links (no dropdown) shown as quick actions.
export const QUICK_LINKS: DictKey[] = ["faq", "userManual", "contactUs", "navFeedback"];
