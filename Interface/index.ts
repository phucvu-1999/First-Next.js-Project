export interface Items {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  image: string;
  isFeatured: boolean;
}

export interface DateFilter {
  year: number;
  month: number;
}

export interface EventsProps {
  events: {
    e1: Items;
    e2: Items;
    e3: Items;
  };
}

export interface EventsChildProps {
  e1: Items;
  e2: Items;
  e3: Items;
}
