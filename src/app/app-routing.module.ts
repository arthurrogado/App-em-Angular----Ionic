import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: 'principal',
		loadChildren: () => import('./principal/principal.module').then(m => m.PrincipalPageModule)
	},
	{
		path: '',
		redirectTo: 'principal',
		pathMatch: 'full'
	},
	{
		path: 'ex01',
		children: [
			
			{
				path: 'pag1',
				loadChildren: () => import('./ex01/pag1/pag1.module').then(m => m.Pag1PageModule)
			},
			{
				path: 'pag2',
				loadChildren: () => import('./ex01/pag2/pag2.module').then(m => m.Pag2PageModule)
			},
			{
				path: 'inicio',
				loadChildren: () => import('./ex01/inicio/inicio.module').then(m => m.InicioPageModule)
			},
			
		]
	},
  {
    path: 'principal',
    loadChildren: () => import('./principal/principal.module').then( m => m.PrincipalPageModule)
  },
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
