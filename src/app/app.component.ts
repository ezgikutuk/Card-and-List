// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent {
//   title = 'MyFirstFirebaseProject';
// }
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { finalize, takeUntil } from "rxjs/operators";
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';


export interface Yemek {
  title: string;
  description: string;
  tag: string;
  date: Date;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'programmingtips';

  loading: boolean = true;
  itemCollection: Observable<any[]>;
  items: Yemek[] = [];

  private unsubscribe$ = new Subject<void>();
  
  constructor(private db: AngularFirestore, private storage: AngularFireStorage) { }

  ngOnInit(): void {
    this.itemCollection = this.db.collection('items').valueChanges();
    //console.log(this.itemCollection);

    this.itemCollection
      .pipe(
        takeUntil(this.unsubscribe$)
      )
      .subscribe(data => {
        this.items = data;
        //console.log(this.items);
      })
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
