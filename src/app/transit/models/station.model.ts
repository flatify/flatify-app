export interface Station {
  id: number;
  name: string;
  departures: Departure[];
  servingLines: {}[];
}

interface Departure {
  departureId: number;
  departureTime: number;
  destination: string;
  label: string;
  lineBackgroundColor: string;
  live: boolean;
  product: string;
  sev: boolean;
}
