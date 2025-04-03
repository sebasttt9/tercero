import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule} from '@ionic/angular'

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.scss'],
  imports: [CommonModule,IonicModule],
})
export class BienvenidaComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
