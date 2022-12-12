import { Component } from '@angular/core';

@Component({
  selector: 'app-ui3',
  templateUrl: './ui3.component.html',
  styleUrls: ['./ui3.component.scss'],
})
export class Ui3Component {
  public close: boolean = true;

  public toggle(): void {
    this.close = !this.close;
  }
}
