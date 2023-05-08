import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-banner',
  templateUrl: './left-banner.component.html',
  styleUrls: ['./left-banner.component.scss']
})

export class LeftBannerComponent {

  constructor(private router: Router){}

  goToEmployee(){
    this.router.navigate(['/employee']);
  }

  goToEmployeeList(){
    this.router.navigate(['']);
  }
}

