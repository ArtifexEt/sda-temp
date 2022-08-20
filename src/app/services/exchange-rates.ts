export interface Rate {
  code: string;
  currency: string;
  mid: number;
}

export interface ExchangeRates {
  effectiveDate: string;
  no: string;
  rates: Rate[];
  table: string;
}
