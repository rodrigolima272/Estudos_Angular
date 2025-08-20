import { Component } from '@angular/core';
import {CommonModule} from '@angular/core';

@Component({
  selector: 'app-sexto-componente',
  imports: [CommonModule],
  templateUrl: './sexto-componente.html',
  styleUrl: './sexto-componente.css'
})
export class SextoComponente {

  linguagem: string = 'html';
}
