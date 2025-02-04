import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-2';

  @ViewChild('boxContainer', { static: false }) boxContainer!: ElementRef;

  changeTextColor(event: any) {
    this.boxContainer.nativeElement.style.color = event?.target.value;
  }

  changeBackgroundColor(event: any) {
    this.boxContainer.nativeElement.style.backgroundColor = event?.target.value;
  }
}
