import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { UpdateStuff } from './appState.actions';



export interface AppStateModel {
  stuff: any,
}

@State<AppStateModel>({
  name: 'appState',
  defaults: {
    stuff: 'jabroni'
  },
})
@Injectable()
export class AppState {

  constructor(
    private http: HttpClient,
    private store: Store
  ) {}

  @Selector()
  static listStuff(state:AppStateModel) {
      return 'selector junk';
  }


  @Action(UpdateStuff)
  updateStuff(
    ctx: StateContext<AppStateModel>,
    payload: { stuff: any }
  ) {
    ctx.patchState({ stuff: payload.stuff });
  }

}
