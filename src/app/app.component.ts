import { Component, OnInit, VERSION } from '@angular/core';
import { from, of } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  //Creating an osbservable
  //of and from automatically completes, so i don't have to unsub
  ngOnInit() {
    of(2, 4, 6, 8).subscribe((val) => console.log(val));

    from([1, 2, 3, 4]).subscribe((val) => console.log(val));
  }
}
