declare const module: any;
import { Component } from '@angular/core';
import { GitHubProfileService } from "../services/githubprofile.service";

@Component({
    moduleId: module.id,
    selector : "profile",
    templateUrl : "profile.component.html"

})

export class ProfileComponent {
    private  user:any={};
    private repos:any[];
    private username:any;
    constructor(private _githubService: GitHubProfileService){
        this.user=false;

    }
    searchUser(){
      this._githubService.updateUser(this.username);
      this._githubService.getUsers().subscribe(user=>{
                  this.user = user;
                  console.log(user);

      });
      this._githubService.getRepos().subscribe(repos=> {
          this.repos = repos;
          console.log(repos);
      });

    }

}
