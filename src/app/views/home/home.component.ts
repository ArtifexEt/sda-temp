import {Component, OnInit} from '@angular/core';
import {NBPService} from "../../services/nbp.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public wynik;

  constructor(private nbpService:NBPService) {
    this.wynik = this.nbpService.getExchangeRates();
  }

  ngOnInit(): void {

  }

}
