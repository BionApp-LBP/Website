export interface Product {
  title: string;
  desc: string;
  meta: string;
  status: 'LIVE' | 'COMING SOON';
}

export interface StickyScrollStackProps {
  items: Product[];
}
