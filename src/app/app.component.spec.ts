import {TestBed, async, inject} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {AppComponent} from './app.component';
import {SortPipe} from './sort.pipe';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {UsersService} from './users.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [
        AppComponent, SortPipe
      ],
      providers: [HttpClient, HttpClientModule, UsersService]
    }).compileComponents();
  }));

  it(`should create the app`, async(inject([HttpTestingController],
    (httpClient: HttpTestingController) => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    })));


});
