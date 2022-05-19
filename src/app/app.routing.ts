import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    {path: 'login', loadChildren: () => import('../app/modules/login/login.module'). then(r => r.LoginModule)},
	{path: 'cards', loadChildren: () => import('../app/modules/cards/cards.module'). then(r => r.CardsModule)},
	
	{ path: '', redirectTo: 'cards', pathMatch: 'full' },
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes,{
			scrollPositionRestoration: 'enabled'
		  })
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }