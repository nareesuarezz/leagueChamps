import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChampionEditPage } from './champion-edit.page';

describe('ChampionEditPage', () => {
  let component: ChampionEditPage;
  let fixture: ComponentFixture<ChampionEditPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChampionEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
