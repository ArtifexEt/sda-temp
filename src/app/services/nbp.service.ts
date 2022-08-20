import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ExchangeRate} from "./exchange-rate";
import {map, shareReplay} from "rxjs/operators";
import {ExchangeRates} from "./exchange-rates";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NBPService {

  constructor(private http: HttpClient) {
  }

  public getExchangeRates() {
    return this.http.get<ExchangeRate[]>('http://api.nbp.pl/api/exchangerates/tables/a/').pipe(shareReplay());
  }

  public getAverageExchangeRates$(): Observable<ExchangeRates> {
    return this.http.get<ExchangeRates[]>('https://api.nbp.pl/api/exchangerates/tables/a/').pipe(
      map(response => response[0]),
      shareReplay()
    );
  }
}
