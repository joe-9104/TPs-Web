import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Partie1 } from './partie1/partie1';
import { Partie2 } from './partie2/partie2';
import { Partie3 } from './partie3/partie3';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Partie1, Partie2, Partie3],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('tp4-angular');
}
