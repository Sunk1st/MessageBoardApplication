import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthorizationService } from '../authorization.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  userIsAuthenticated = false;
  private authListenerSubs: Subscription;

  constructor(private authorizationService: AuthorizationService) { }

  ngOnInit() {
    this.userIsAuthenticated = this.authorizationService.getIsAuth();
    this.authListenerSubs = this.authorizationService.getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
      });
  }

  onLogout() {
    this.authorizationService.logout();
  }

  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }

}
