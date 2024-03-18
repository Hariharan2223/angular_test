import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BookingComponent } from './booking/booking.component';

export const routes: Routes = [
    {
        path:"login",
        component:LoginComponent,
    },
    {
        path:"booking",
        component:BookingComponent,
    },
    {
        path:"login/booking",
        redirectTo:"booking",
        pathMatch:"full"
      }
];
