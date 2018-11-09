import {TestBed, async, inject} from '@angular/core/testing';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {UsersService} from './users.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {AppComponent} from './app.component';
import {SortPipe} from './sort.pipe';


describe('UsersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpClient, HttpClientModule, UsersService]
    });
  });

  it('should be created', async(inject([UsersService], (service: UsersService) => {
    expect(service).toBeTruthy();
  })));
});
