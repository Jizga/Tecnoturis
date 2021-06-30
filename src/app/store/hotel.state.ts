import { Injectable } from '@angular/core';
import { State, Selector, Action, StateContext } from '@ngxs/store';
import { AddListItem } from './hotel.actions';

export interface ListStateModel {
  list: string[];
}

@State<ListStateModel>({
  name: 'ListState',
  defaults: {
    list: []
  }
})

@Injectable({
  providedIn: 'root'
})

export class ListState {
  @Selector() static SelectAllItems(state: ListStateModel): string[] {
    return state.list;
  }

  @Action(AddListItem)
  addListItem(
    { getState, setState }: StateContext<ListStateModel>,
    { payload }: AddListItem
  ) {
    const state = getState();
    setState({
      list: [...state.list, payload],
    });
  }
}
