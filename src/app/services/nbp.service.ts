import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ExchangeRate} from "./exchange-rate";
import {shareReplay} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class NBPService {

  constructor(private http: HttpClient) {
  }


  public getExchangeRates() {
    return this.http.get<ExchangeRate[]>('http://api.nbp.pl/api/exchangerates/tables/a/').pipe(shareReplay());
  }
}
