import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-parametr',
  templateUrl: './parametr.component.html',
  styleUrls: ['./parametr.component.scss']
})
export class ParametrComponent implements OnInit, OnDestroy {
  public imie!: string;

  public wiek!: number | string;

  private subscription!: Subscription;

  constructor(  private route: ActivatedRoute) { }

  ngOnInit(): void {
   this.subscription=  this.route.paramMap.subscribe(params => {
      this.imie = params.get('imie') || 'nie podano';
      this.wiek = params.get('wiek') || 'nie podano';
    })
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }



}
