import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChampionListPage } from './champion-list.page';

const routes: Routes = [
  {
    path: '',
    component: ChampionListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChampionListPageRoutingModule {}
