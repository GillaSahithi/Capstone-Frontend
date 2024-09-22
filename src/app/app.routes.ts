import { Routes } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { ExploreComponent } from './explore/explore.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { OffersComponent } from './offers/offers.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    {path:'',redirectTo:'/landing',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'explore',component:ExploreComponent},
    {path:'offers',component:OffersComponent},
    {path:'events',component:EventsComponent},
    {path:'landing',component:LandingComponent},
    {path:'register',component:RegisterComponent}
];
