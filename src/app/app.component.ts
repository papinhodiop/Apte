import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // Si vous utilisez le routeur




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, // Si vous utilisez le routeur
    
],
  templateUrl: './app.component.html',
})
export class AppComponent {
  [x: string]: any;
 
}