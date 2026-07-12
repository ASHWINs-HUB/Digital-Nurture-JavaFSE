import { Component,OnInit,OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit,OnDestroy {
  ngOnInit() {
  console.log('HomeComponent initialised — courses loaded');
  }
  ngOnDestroy() {
    console.log('HomeComponent destroyed — cleanup performed');
  }
  portalName = 'Student Course Portal';

  isPortalActive = true;

  message = '';
  
  searchTerm = '';

  onEnrollClick() {
    this.message = 'Enrollment opened!';
  }
}