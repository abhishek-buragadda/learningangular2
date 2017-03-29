import {Component} from '@angular/core';

@Component({
    moduleId : module.id,
    selector : "navbar",
    templateUrl :"navbar.component.html"
})

export class NavbarComponent {
    private siteName : string ;
    private btnString: string ;
    private homeString : string ;
    private aboutString : string ;
    private contactString : string ;

    constructor() {
        this.siteName = "Angular2 website";
        this.homeString = "Home";
        this.aboutString= "About";
         this.contactString = "Contact";
    }
}
