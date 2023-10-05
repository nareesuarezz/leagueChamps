import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'champion-list',
    loadChildren: () => import('./champion-list/champion-list.module').then( m => m.ChampionListPageModule)
  },
  {
    path: 'champion-add',
    loadChildren: () => import('./champion-add/champion-add.module').then( m => m.ChampionAddPageModule)
  },
  { 
    path: 'champion-edit/:championId', 
    loadChildren: () => import('./champion-edit/champion-edit.module').then( m => m.ChampionEditPageModule) 
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
