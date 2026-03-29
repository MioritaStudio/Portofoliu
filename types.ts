export enum Section {
  HERO = 'hero',
  SERVICES = 'services',
  PORTFOLIO = 'portfolio',
  CONFIGURATOR = 'configurator',
  CONTACT = 'contact'
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  price: number;
  category: 'web' | 'design' | 'marketing' | 'maintenance';
  popular?: boolean;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

export interface ConfigState {
  selectedItems: string[];
  budget: number;
  description: string;
}