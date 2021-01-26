import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDetailDialogComponent } from './pokemon-detail-dialog.component';

describe('PokemonDetailDialogComponent', () => {
  let component: PokemonDetailDialogComponent;
  let fixture: ComponentFixture<PokemonDetailDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonDetailDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
