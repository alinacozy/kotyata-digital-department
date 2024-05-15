import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component {
  title='page2';

  id: number;

  constructor(activateRoute: ActivatedRoute){
    this.id=activateRoute.snapshot.params['id'];
  }

  onSayHi(): void {
    alert("Привет, " + this.id);
  }
}
