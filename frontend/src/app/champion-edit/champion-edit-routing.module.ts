import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChampionEditPage } from './champion-edit.page';

const routes: Routes = [
  {
    path: 'champion-edit/:championId', 
    component: ChampionEditPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChampionEditPageRoutingModule {}
