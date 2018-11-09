import {Component} from '@angular/core';
import {UsersService} from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public users;
  public column;
  public desc;
  public state;

  constructor(private _usersService: UsersService) { }

  ngOnInit() {
    this.state = 'Loading...';
    this.getUsers();
  }

  private getUsers() {
    this._usersService.getUsers().subscribe(
      data => {
        this.state = 'Loaded with UsersService';
        this.users = this._usersService.parseUsers(data);
      },
      err => console.error(err),
      () => console.log('[users loaded]')
    );
  }

  public sort(column: string) {
    this.column = column;
    this.desc = this.desc ? 0 : 1;
  }

}
