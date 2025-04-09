export interface TimelineItem {
  id: number;
  name: string;
  start: string; // formato: YYYY-MM-DD
  end: string; // formato: YYYY-MM-DD
  color?: string;
}

export type Lane = TimelineItem[];
