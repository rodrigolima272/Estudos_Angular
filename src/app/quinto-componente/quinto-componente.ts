import { Component } from '@angular/core';
import{CommonModule} from '@angular/core';

@Component({
  selector: 'app-quinto-componente',
  imports: [CommonModule],
  templateUrl: './quinto-componente.html',
  styleUrl: './quinto-componente.css'
})
export class QuintoComponente {

  nomes: string[] = ['Ariana','Bruna','Caio','Denis'];

}
