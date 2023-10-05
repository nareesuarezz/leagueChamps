import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LeagueChampsService } from '../services/league-champs.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


interface Champion {
  name: string;
  role: string;
  damage: string;
}

@Component({
  selector: 'app-champion-edit',
  templateUrl: './champion-edit.page.html',
  styleUrls: ['./champion-edit.page.scss'],
})
export class ChampionEditPage implements OnInit {

  constructor(private leagueChampService: LeagueChampsService, private router: Router, public formBuilder: FormBuilder, private route: ActivatedRoute, private toastController: ToastController) {
    this.ionicForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      role: ['', [Validators.required, Validators.minLength(2)]],
      damage: ['', [Validators.required, Validators.minLength(2)]],
    });
  }


  ionicForm: any;
  selectedChampion: any;


  ngOnInit() {
    this.route.params.subscribe(params => {
      const championId = params['championId'];

      this.leagueChampService.getOne(championId).subscribe((champion: any) => {
        this.selectedChampion = champion;
        this.ionicForm.setValue({
          name: champion.name,
          role: champion.role,
          damage: champion.damage,
        });
      });
    });
  }

  async presentSuccessToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000, // Duración en milisegundos
      color: 'success', // Color de la notificación (puedes ajustarlo)
    });
    toast.present();
  }

  async presentErrorToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000, // Duración en milisegundos
      color: 'danger', // Color de la notificación (puedes ajustarlo)
    });
    toast.present();
  }


  async editChamp() {
    if (this.ionicForm.valid && this.selectedChampion) {
      const { name, role, damage, id } = this.selectedChampion;

      const updatedChampion = {
        name: this.ionicForm.value.name,
        role: this.ionicForm.value.role,
        damage: this.ionicForm.value.damage,
      };

      this.leagueChampService.updateChamp(id, updatedChampion).subscribe(response => {
        // Verifica si la edición fue exitosa (puedes ajustar esto según tu API o servicio)
        if (response && typeof response === 'object') {
          // Aquí considera la respuesta como exitosa
          this.presentErrorToast('Hubo un error al editar el campeón.');
        } else {
          this.presentSuccessToast('El campeón se ha actualizado correctamente.');
        }


        this.selectedChampion = null;
        this.ionicForm.reset();
      });
    }
  }



  errorControl() {
    return this.ionicForm.controls;
  }

  submitForm = () => {
    if (this.ionicForm.valid) {
      console.log(this.ionicForm.value);
      return false;
    } else {
      return console.log('Please provide all the required values!');
    }
  };

  gotoHome() {
    this.router.navigateByUrl("/home");
  }

  gotoList() {
    this.router.navigateByUrl("/champion-list");
  }

  gotoAdd() {
    this.router.navigateByUrl("/champion-add");
  }

}

