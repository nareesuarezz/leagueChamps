import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChampionAddPage } from './champion-add.page';

const routes: Routes = [
  {
    path: '',
    component: ChampionAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChampionAddPageRoutingModule {}
