export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  imageUrl: string;
  quote: string;
  story: string;
}

export interface AdState {
  isVisible: boolean;
  canSkip: boolean;
}

export interface NavItem {
  label: string;
  href: string;
}