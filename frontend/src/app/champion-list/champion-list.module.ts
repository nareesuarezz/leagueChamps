import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ChampionListPageRoutingModule } from './champion-list-routing.module';
import { ChampionListPage } from './champion-list.page';

@NgModule({
  imports: [
    CommonModule,   
    IonicModule,
    ChampionListPageRoutingModule,
  ],
  declarations: [ChampionListPage]
})
export class ChampionListPageModule { }
