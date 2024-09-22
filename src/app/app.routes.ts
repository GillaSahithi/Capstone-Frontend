import { Routes } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { ExploreComponent } from './explore/explore.component';
import { HomeComponent } from './home/home.component';
import { OffersComponent } from './offers/offers.component';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'explore',component:ExploreComponent},
    {path:'offers',component:OffersComponent},
    {path:'events',component:EventsComponent}
];
