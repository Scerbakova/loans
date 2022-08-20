import { Component } from '@angular/core';
import { PersonCreditHistoryService } from './person-credit-history.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PersonCreditHistoryService],
})
export class AppComponent {
  title = 'loans';
}
