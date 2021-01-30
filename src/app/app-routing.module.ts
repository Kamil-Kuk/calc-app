import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './component/home/home.component';
import {PageNotFoundComponent} from './component/page-not-found/page-not-found.component';
import {BasicComponent} from './component/basic/basic.component';
import {AdvancedComponent} from './component/advanced/advanced.component';
import {ConverterComponent} from './component/converter/converter.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/basic',
    pathMatch: 'full'
  },
  {path: 'home',
    component: HomeComponent
  },
  {path: 'basic',
    component: BasicComponent
  },
  {path: 'advanced',
    component: AdvancedComponent
  },
  {path: 'converter',
    component: ConverterComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
