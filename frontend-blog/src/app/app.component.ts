import { Component } from '@angular/core';
import {post} from '../models/post.model';
import {ApiService} from '../services/api';
import {author} from '../models/author.model';
import {postBody} from '../models/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  arrposts: Array<post> = [];
  arrAuthors: Array<String>  = [];
  postFormEnabled: Boolean = false;
  postAuthorEnabled: Boolean = false;
  nameAuthorInput:string = "";
  titleInput:string = "";
  textInput:string = "";
  AuthorSelectInput:string = "";


  constructor(public api: ApiService){

  }

  ngOnInit() {
    
  }

  fieldInputs(event:any,field:string){
    console.log("mudou");
    console.log(event.target.value);
    switch (field) {
      case "author":
        this.nameAuthorInput = event.target.value;
        break;
      case "titleInput":
        this.titleInput = event.target.value;
        break;
      case "textInput":
        this.textInput = event.target.value;
      break;
     /* case "AuthorSelectInput":
        this.AuthorSelectInput = event.target.value;
      break;*/
    
      default:
        break;
    }

  }

  createAuthors(){
    let body: author = {"newname":this.nameAuthorInput};
    if(this.arrAuthors.length != 0)body.array = this.arrAuthors;
    console.log({body})
    this.api.createAuthor(body)
    .subscribe((result:any) => {
        console.log(result.body.arr);
        this.arrAuthors = result.body.arr;
        this.nameAuthorInput = "";
        this.postAuthorEnabled = false;
      },
      error => {
        if(error.status == 400) {
          console.log(error);
        }
      }
    );
  }


  createPosts(){
    console.log(this.nameAuthorInput);
    let body: postBody = {
      "title": this.titleInput,
      "text": this.textInput,
      "author": this.AuthorSelectInput,
    };
    if(this.arrposts.length != 0)body.array = this.arrposts;
    console.log({body})
    this.api.createPost(body)
    .subscribe((result:any) => {
        console.log(result.body.arr);
        this.arrposts = result.body.arr;
        this.titleInput = "";
        this.textInput = "";
        this.AuthorSelectInput = "";
        this.postFormEnabled = false;
      },
      error => {
        if(error.status == 400) {
          console.log(error);
        }
      }
    );
  }







}
