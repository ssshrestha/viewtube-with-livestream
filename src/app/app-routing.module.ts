import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { AccountLoginComponent } from './account-login/account-login.component';
import { AccountRegisterComponent } from './account-register/account-register.component';
import { AccountComponent } from './account/account.component';
import { AuthGuard } from './auth.guard';
import { AuthorizeLiveGuard } from './authorize-live.guard';
import { StudioLivestreamComponent } from './studio-livestream/studio-livestream.component';
import { StudioUploadComponent } from './studio-upload/studio-upload.component';
import { StudioComponent } from './studio/studio.component';
import { VideoContentComponent } from './video-content/video-content.component';

const routes: Routes = [{ path: '', component: VideoContentComponent }, {
  path: 'studio', component: StudioComponent, canActivate: [AuthGuard],
  children: [{ path: 'upload', component: StudioUploadComponent }, {
    path: 'livestream', component: StudioLivestreamComponent, canActivate: [AuthorizeLiveGuard]
  }]
},
{
  path: 'account', component: AccountComponent,
  children: [{ path: 'login', component: AccountLoginComponent }, { path: 'register', component: AccountRegisterComponent }]
}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
