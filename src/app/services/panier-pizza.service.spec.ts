import { TestBed } from '@angular/core/testing';

import { PanierPizzaService } from './panier-pizza.service';

describe('PanierPizzaService', () => {
  let service: PanierPizzaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PanierPizzaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
