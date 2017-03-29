import { Component } from '@angular/core';
import {GitHubProfileService} from './services/githubprofile.service';
@Component({
    moduleId : module.id,
    selector: 'my-app',
    templateUrl: "app.component.html",
    providers : [GitHubProfileService]
})
export class AppComponent  { name = 'Angular'; }
