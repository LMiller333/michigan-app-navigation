import { Component } from '@angular/core';
import { FeedPage } from '../feed/feed';
import { SearchPage } from '../search/search';
import { HomePage } from '../home/home';
import { AccountPage} from '../account/account';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = FeedPage;
  tab3Root = SearchPage;
  tab4Root = AccountPage;

  constructor() {

  }
}
