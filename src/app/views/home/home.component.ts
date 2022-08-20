import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NBPService} from "../../services/nbp.service";
import {interval, Observable} from "rxjs";
import {ExchangeRates, Rate} from "../../services/exchange-rates";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['currency', 'code', 'mid'];
  public dataSource =  new MatTableDataSource<Rate>([]);

  private dataSubscription;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private nbpService:NBPService) {

    this.dataSubscription = this.nbpService.getAverageExchangeRates$().subscribe((exchangeRates) => {
      this.dataSource.data = exchangeRates.rates;
    })
  }

  ngOnInit(): void {

  }
  ngOnDestroy(): void {
    this.dataSubscription?.unsubscribe();
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


}
