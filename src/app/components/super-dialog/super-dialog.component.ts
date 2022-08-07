import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-super-dialog',
  templateUrl: './super-dialog.component.html',
  styleUrls: ['./super-dialog.component.scss']
})
export class SuperDialogComponent implements OnInit {

  public wynik = 'nie podano';

  constructor() { }

  ngOnInit(): void {
  }

  changeAnimal($event: Event) {
    this.wynik = ($event.target as HTMLInputElement).value;
  }
}
