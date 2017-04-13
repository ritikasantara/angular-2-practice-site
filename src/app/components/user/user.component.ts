import { Component } from '@angular/core';
import { PostsService } from '../../services/posts.service';

@Component({

  moduleId: module.id,
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [PostsService]
  
})
export class UserComponent {

  name: string;
  email: string;
  address : address;
  hobbies : string[];
  showHobbies : boolean;
  posts : Post[];


  constructor(private postsService: PostsService) {
    
    this.name = 'Ritika';
    this.email = 'ritz@gmail.com';
    this.address = {
      street : '5th main st.',
      city : 'Boston',
      state : 'MA'
    };
    this.hobbies = ['Web designing','Reading','Movies'];
    this.showHobbies = false;

    this.postsService.getPosts().subscribe(posts => {

      this.posts = posts;

    });
  
  }

  toggleHobbies(){
    this.showHobbies = !this.showHobbies;
  }
  
  addHobby(hobby){
    this.hobbies.push(hobby);
  }

  deleteHobby(i){
    this.hobbies.splice(i,1);
  }

}

interface address{
  street: string;
  city: string;
  state: string;
}

interface Post{
  id: number;
  title: string;
  body: string;
}
