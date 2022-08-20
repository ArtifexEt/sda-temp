import {Component, OnInit} from '@angular/core';
import {NBPService} from "../../services/nbp.service";
import {Observable} from "rxjs";
import {ExchangeRates} from "../../services/exchange-rates";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['currency', 'code', 'mid'];
  public wynik$: Observable<ExchangeRates>;

  constructor(private nbpService:NBPService) {
    this.wynik$ = this.nbpService.getAverageExchangeRates$();
  }

  ngOnInit(): void {

  }

}
