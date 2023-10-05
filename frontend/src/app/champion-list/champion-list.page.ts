import { Component, OnInit } from '@angular/core';
import { LeagueChampsService } from '../services/league-champs.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-champion-list',
  templateUrl: './champion-list.page.html',
  styleUrls: ['./champion-list.page.scss'],
})
export class ChampionListPage implements OnInit {

  champions: any = [];
  selectedChampion: any; 

  constructor(private leagueChampService: LeagueChampsService, private router: Router, public alertController: AlertController) { }

  ngOnInit() { }

  ionViewWillEnter(){
    this.getAllChamps();
  }
 

  
  getAllChamps() {
    this.leagueChampService.getChamps().subscribe(response => {
      this.champions = response;
    });
  }

 
  

  deleteChamp(id: number) {
    this.leagueChampService.deleteChamp(id).subscribe(response => {
      this.getAllChamps();
    });
  }


  

  gotoHome() {
    this.router.navigateByUrl("/home");
  }

  gotoAdd() {
    this.router.navigateByUrl("/champion-add");
  }

  gotoEdit(champion: any) {
    this.router.navigate(['/champion-edit', champion.id]);
  }
  
  async deleteChampConfirmation(c:any) {
    const alert = await this.alertController.create({
      header: 'Confirmar borrado',
      message: `¿Seguro que quieres borrar a ${c.name}?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Borrar',
          handler: () => {
            this.deleteChamp(c.id);
          },
        },
      ],
    });
    await alert.present();
  }
}
