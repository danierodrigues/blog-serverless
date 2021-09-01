import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {author} from '../models/author.model';
import {postBody} from '../models/post.model';

const backendPosts: string = 'http://localhost:3000/dev';
const backendAuthors: string = 'http://localhost:4000/dev';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }




    createAuthor(authorName: author){ //: Observable<HttpResponse<Config>> {
      return this.http.post(`${ backendAuthors }/author`,  authorName, {observe: 'response'});
      
    }

    createPost(body: postBody){ //: Observable<HttpResponse<Config>> {
        return this.http.post(`${ backendPosts }/posts`,  body, {observe: 'response'});
        
    }

}