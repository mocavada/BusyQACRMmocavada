import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-financial-tool',
  templateUrl: './cw-financial-tool.component.html',
  styleUrls: ['./cw-financial-tool.component.css']
})
export class CwFinancialToolComponent implements OnInit {
  annuity;
  interestRate;
  ammount;
  period;

  constructor() { }

  ngOnInit() { }
  onAdd() {
    this.ammount = this.annuity
      * (((1 + (this.interestRate / 12)) ** (12 * this.period)) - 1)
      / (this.interestRate / 12)
      * (1 + (this.interestRate / 12));
  }
}
