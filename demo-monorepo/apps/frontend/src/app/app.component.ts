import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginComponent } from "./login/login.component";

@Component({
  standalone: true,
  imports: [RouterModule, LoginComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'frontend';
}
