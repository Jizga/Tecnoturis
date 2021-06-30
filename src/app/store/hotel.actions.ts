export class AddListItem {
  static readonly type = '[List] Add List Item';
  constructor(public readonly payload: string) { }
}
