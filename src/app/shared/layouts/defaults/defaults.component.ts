import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-defaults',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './defaults.component.html',
  styleUrl: './defaults.component.scss'
})
export class DefaultsComponent {

}
