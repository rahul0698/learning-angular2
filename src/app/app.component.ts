import { Component } from '@angular/core';
import { MycodeComponent } from './mycode/mycode.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app/css/myshopcomponent.css'],

})
export class AppComponent {
  public recentMovie = "None";
  public cart: string[] = [];
  public itemToremove;
  public movielist = ['batman', 'civil war', 'deadpool', 'interstellar']
  selectedMovies(movie) {
    this.recentMovie = movie;
    if (this.cart.find(myObj => myObj == this.recentMovie) == undefined) {
      this.cart.push(movie);
    }
  }

  remove(item) {
    // console.log(this.cart);

    this.itemToremove = this.cart.indexOf(item);

    // console.log(this.itemToremove);
    this.cart.splice(this.itemToremove, 1);

  }

}
