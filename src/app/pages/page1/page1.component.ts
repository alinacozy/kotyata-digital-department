import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component {
  title='page1';

  id=0;

  constructor(private router: Router){

  }

  onSayHi(): void {
    this.router.navigate(['page2', this.id])
  }
}
