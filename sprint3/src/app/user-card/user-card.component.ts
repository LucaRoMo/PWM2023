import {Component} from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {
  informacion: boolean = false;

  mostrarInformacion() {
    this.informacion = !this.informacion;
    console.log(this.informacion)
  }
}
