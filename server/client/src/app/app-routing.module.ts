import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { DetailsComponent } from './books/details/details.component';
import { AddComponent } from './books/add/add.component';
import { EditComponent } from './books/edit/edit.component';

const routes: Routes = [
  {
    path: 'books',
    component: BooksComponent,
    data: { title: 'List of Books' }
  },
  {
    path: 'books/details/:id',
    component: DetailsComponent,
    data: { title: 'Book Details' }
  },
  {
    path: 'books/add',
    component: AddComponent,
    data: { title: 'Add Book' }
  },
  {
    path: 'books/edit/:id',
    component: EditComponent,
    data: { title: 'Edit Book' }
  },
  { path: '', redirectTo: '/books', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
});
export class AppRoutingModule {}
