import { Component } from '@angular/core';
import {post} from '../models/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  arrposts: Array<post> = [{
    "title": "titulo",
    "text": "asdjnadsdsa  kmlk dfglkfdmgklfdm lkdfmlkmfdklgm lkdfmkgmdflkmglkdfm mkldfmglkmdflkgmdlfkm mdklfmgkmdfklgmkldfm fdlkmgkldfg",
    "author": "Daniel",
    "date": "31/08/2021, 10:34:26"
},{
  "title": "titulo",
  "text": "asdjnadsdsa  kmlk dfglkfdmgklfdm lkdfmlkmfdklgm lkdfmkgmdflkmglkdfm mkldfmglkmdflkgmdlfkm mdklfmgkmdfklgmkldfm fdlkmgkldfg",
  "author": "Daniel",
  "date": "31/08/2021, 10:34:26"
}];
  arrAuthors: Array<String>  = ['daniel', 'test'];
  postFormEnabled: Boolean = false;
  postAuthorEnabled: Boolean = false;

  







}
