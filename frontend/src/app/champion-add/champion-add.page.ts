import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'; 
import { LeagueChampsService } from '../services/league-champs.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-champion-add',
  templateUrl: './champion-add.page.html',
  styleUrls: ['./champion-add.page.scss'],
})
export class ChampionAddPage implements OnInit {

  constructor(private leagueChampService: LeagueChampsService, private router: Router, public formBuilder: FormBuilder) { }

  ionicForm: any; 


  ngOnInit() {

    this.ionicForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      role: ['', [Validators.required, Validators.minLength(2)]],
      damage: ['', [Validators.required, Validators.minLength(2)]],
    });
  }

  get errorControl() {
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

  addChamp() {
    if (this.ionicForm.valid) {
      const name = this.ionicForm.get('name').value;
      const role = this.ionicForm.get('role').value;
      const damage = this.ionicForm.get('damage').value;
  
      this.leagueChampService.addChamp({ name, role, damage }).subscribe(response => {
        this.ionicForm.reset();

      });
  
    }
  }

  gotoHome() {
    this.router.navigateByUrl("/home");
  }

  gotoList() {
    this.router.navigateByUrl("/champion-list");
  }


}
