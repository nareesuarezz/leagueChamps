import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChampionAddPage } from './champion-add.page';

describe('ChampionAddPage', () => {
  let component: ChampionAddPage;
  let fixture: ComponentFixture<ChampionAddPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChampionAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
