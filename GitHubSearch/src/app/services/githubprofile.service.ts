import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GitHubProfileService {
        private username : string ;
        private clientId : string ;
        private clientSecret: string ;
        constructor(private _http: Http){
                this.username="mkalakota";
                this.clientId = "3ff5e855b4c74264f5e8";
                this.clientSecret= "4eef1e00fbd91998f535359e8ba0d46116e6e1a7";
                console.log("service ready....");
        }

        getUsers(){
                return this._http.get("http://api.github.com/users/"+this.username+"?client_id="+this.clientId+"&client_secret="+this.clientSecret)
                            .map(res => res.json());
        }


      getRepos(){
            return this._http.get("http://api.github.com/users/"+this.username+"/repos?client_id="+this.clientId+"&client_secret="+this.clientSecret)
                        .map(res => res.json());
       }

       updateUser(username: string) {
         this.username = username;
       }
}
