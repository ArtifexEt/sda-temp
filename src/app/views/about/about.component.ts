import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {SuperDialogComponent} from "../../components/super-dialog/super-dialog.component";
import {tap} from "rxjs";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialog = this.dialog.open(SuperDialogComponent, {
        width: "900px",
        position: {
          bottom: "10px"
        },
      }
    )

    dialog.componentInstance.wynik = 'Nie znam wyniku';

    dialog.afterClosed().pipe(tap(
      (rezultatZDialogu) => {
        console.log("Wynik", rezultatZDialogu)
      }
    )).subscribe()
  }

}
