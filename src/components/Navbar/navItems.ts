export interface NavItemConfig {
  to: string;
  labelKey: string;
}

export const NAV_ITEMS: NavItemConfig[] = [
  { to: "/despre-noi", labelKey: "menu_item_1" },
  { to: "/planse", labelKey: "menu_item_2" },
  { to: "/consultanta", labelKey: "menu_item_4" },
  { to: "/contact", labelKey: "menu_item_3" }
];
