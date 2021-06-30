import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styles: [
  ]
})

export class HotelComponent {
  hotelID: string;
  hotels: any = {};
  hotel: any;
  offers: any;
  loading: boolean = false;
  @Select(state => state.list) list: Observable<string[]>;

  constructor(private router: ActivatedRoute,private store: Store) {
    this.loading = true;
    store.select(state => this.hotels = state.ListState.list[0]).subscribe()
  }

  ngOnInit() {
    this.hotelID = this.router.params['_value'].hotelId
    this.hotel = this.hotels.filter(hotel => hotel.hotel.hotelId === this.hotelID)[0]

    this.offers = this.hotel["offers"][0]
  }

}
