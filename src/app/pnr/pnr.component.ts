import { PnrService } from './../pnr.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pnr',
  template: `
    <form (ngSubmit)="check()">
      Enter PNR no : <input type="number" name="pnrNo" [(ngModel)]=pnrNo > <br>
      <button type="submit">Show Status</button>
    </form>
  `,
  styles: [
  ]
})
export class PnrComponent {

  pnrNo: number;

  constructor(private pnrServ: PnrService) { }

  check() {
    alert(this.pnrNo);
    this.pnrServ.fetchPnrStatus(this.pnrNo).subscribe(data => {
      alert(JSON.stringify(data));
    })
  }

}
