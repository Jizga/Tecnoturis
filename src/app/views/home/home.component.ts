import { Component, Input } from '@angular/core';
import { HotelsService } from 'src/app/services/hotels.service';
import { Store } from '@ngxs/store';
import { AddListItem } from 'src/app/store/hotel.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {

  hotelsList: any[] = []
  loading: boolean;
  error: boolean;

  constructor(private hotelsServ: HotelsService, private store: Store) {

    this.loading = true;
  }

  async ngOnInit() {
    this.loading = true;
    (await this.hotelsServ.getHotelsList())
      .subscribe(data => {
        this.hotelsList = data;
        this.store.dispatch(new AddListItem(data));
        this.loading = false;

      }, (errorService) => {
        this.loading = false;
        this.error = errorService.error.message;
      })
  }



}
