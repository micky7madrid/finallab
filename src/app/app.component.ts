import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  message: string = "THE DIFFICULTIES I FACED WAS APPLYING DIFFERENT SYNTAX TO THIS WEBSITE AND I ENDED LEARNING A BIT OF TYPESCRIPT TO DISPLAY THIS MESSAGE ON THE WEBSITE. ANOTHER DIFFICULTY WAS THAT HOSTING THE WEBSITE. I ENDED UP USING VERCEL TO HOST MY WEBSITE AND IT TOOK ME A LOT OF TIME TO HOST IT.";
}
