import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExampleModule } from './example/example.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ExampleModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
