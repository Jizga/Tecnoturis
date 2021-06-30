import { Component, Input } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: []
})
export class CardsComponent {

  @Input() items: any[] = [];

  constructor(private router: Router) { }

  //Ver los detalles del Hotel seleccionado
  ShowHotel(item: any) {

    let idHotel = item['hotel']['hotelId']

    this.router.navigate(['/hotel', idHotel])
  }

}
