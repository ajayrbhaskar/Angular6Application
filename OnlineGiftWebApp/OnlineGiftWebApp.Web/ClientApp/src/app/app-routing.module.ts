import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent, User_Routes } from './layout/user';
import { CommonComponent, Common_Routes } from './layout/common';
import { AdminLayoutComponent } from './admin/core';
import { AppRoute } from './shared/AppRoute'
/**
 * Route constant 
 */
const routes: Routes = [
  { path: '', redirectTo: AppRoute.home, pathMatch: 'full' },
  { path: '', component: UserComponent, children: User_Routes },
  { path: '', component: CommonComponent, children: Common_Routes },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: './admin/dashboard/dashboard.module#DashboardModule'
    }]
  },
  { path: '**', redirectTo: AppRoute.home },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}
