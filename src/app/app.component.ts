import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExampleModule } from '../../projects/example-lib/src/lib/example.module';
import { ThreejsService } from '../../projects/example-lib/src/lib/threejs.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ExampleModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(private threeService: ThreejsService) { }
}
