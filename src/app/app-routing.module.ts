import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';     // Add this
import { AboutComponent } from './about/about.component';  // Add this
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'about/:id',
        component: AboutComponent
    },
    {
        path: 'blog',
        component: BlogComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
