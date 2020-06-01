import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PanierPizzaPage } from './panier-pizza.page';

describe('PanierPizzaPage', () => {
  let component: PanierPizzaPage;
  let fixture: ComponentFixture<PanierPizzaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanierPizzaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PanierPizzaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
