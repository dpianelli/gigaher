import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface Article {
  title: string;
  body: string;
  uid: string;
  date_created: Date;
  category: string;
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  articlesCol: AngularFirestoreCollection<Article>;
  articles: Observable<Article[]>;

  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    this.articlesCol = this.afs.collection('articles');
    this.articles = this.articlesCol.valueChanges();
  }

}
