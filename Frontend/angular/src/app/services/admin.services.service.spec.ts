import { TestBed } from '@angular/core/testing';

import { Admin.ServicesService } from './admin.services.service';

describe('Admin.ServicesService', () => {
  let service: Admin.ServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Admin.ServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
