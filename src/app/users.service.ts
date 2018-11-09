import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UsersService {

  constructor(private http: HttpClient) {
  }


  /***
   *load data from a single API endpoint
   */
  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  /***
   * The table should include their full name, contact info (email, address, and phone number) and company name.
   Please put the company name in ALL CAPS.
   Please only display the first five digits of the zipcode.
   Do not show any users who have a phone number with an extension (e.g., phone number ending in x1234)
   Clicking on the "Full Name" header in the table should sort the users by last name from A-Z.
   Clicking on it again should sort by last name from Z-A.
   * @param data
   */
  parseUsers(data) {
    const result = [];
    data.forEach(user => {
      if (user.phone && user.phone.indexOf('x') === -1) {
          user.company.name = user.company.name.toUpperCase();
          user.lastname = user.name.split(' ').pop().trim();
          user.address.zipcode = user.address.zipcode.split('-')[0];
          result.push(user);
      }
    });
    return result;
  }
}
