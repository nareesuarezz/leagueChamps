import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChampionListPage } from './champion-list.page';

describe('ChampionListPage', () => {
  let component: ChampionListPage;
  let fixture: ComponentFixture<ChampionListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChampionListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
