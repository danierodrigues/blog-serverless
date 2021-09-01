import { Component } from '@angular/core';
import {post} from '../models/post.model';
import {ApiService} from '../services/api';
import {author} from '../models/author.model';
import {postBody} from '../models/post.model';
import { NotifierService } from 'angular-notifier';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  constructor(public api: ApiService, private _snackBar: MatSnackBar){

  }

  ngOnInit() {
    
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000
    });
  }

  fieldInputs(event:any,field:string){
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
    this.api.createAuthor(body)
    .subscribe((result:any) => {
        console.log(result);
        this.arrAuthors = result.body.arr;
        this.nameAuthorInput = "";
        this.postAuthorEnabled = false;
        this.openSnackBar("Author created with success", "Success");
      },
      error => {
        if(error.status === 0){
          console.log(error);
          this.openSnackBar("You have no internet connection.", "Error");
        }else{
          console.log(error);
          this.openSnackBar(error.error.message, "Error");
        }
        
      }
    );
  }


  createPosts(){
    let body: postBody = {
      "title": this.titleInput,
      "text": this.textInput,
      "author": this.AuthorSelectInput,
    };
    if(this.arrposts.length != 0)body.array = this.arrposts;
    this.api.createPost(body)
    .subscribe((result:any) => {
        console.log(result);
        this.arrposts = result.body.arr;
        this.titleInput = "";
        this.textInput = "";
        this.AuthorSelectInput = "";
        this.postFormEnabled = false;
        this.openSnackBar("Post created with success", "Success");
      },
      error => {
        if(error.status === 0){
          console.log(error);
          this.openSnackBar("You have no internet connection.", "Error");
        }else{
          console.log(error);
          this.openSnackBar(error.error.message, "Error");
        }
      }
    );
  }







}
