import { ContentChildren, NgModule } from '@angular/core';
import { ChildrenOutletContexts, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AsideComponent } from './layout/aside/aside.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductComponent } from './product/product.component';
import { StudentComponent } from './student/student.component';
const routes: Routes = [
  // {
  //   path: '',
  //   component: LayoutComponent,
  //   children: [{
  //     path: '',
  //     component: AsideComponent,
  //     children: [
  //       {
  //         path: '',
  //         component: FooterComponent,
  //         children: [
  //           {
  //             path: '',
  //             component: HeaderComponent
  //           },
  //         ]
  //       },
  //     ]
  //   },
  //   ]
  // },
  {
    path: '',
    component: LayoutComponent,
  },
  {
    path: '',
    component: AsideComponent,
  },
  {
    path: '',
    component: FooterComponent,
  },
  {
    path: '',
    component: HeaderComponent,
  },
  {
    path: 'product',
    component: ProductComponent,
  },
  {
    path: 'product/add',
    component: ProductFormComponent
  },
  {
    path: 'product/:id',
    component: ProductDetailComponent
  },
  {
    path: 'product/:id/del',
    component: ProductComponent
  },
  {
    path: 'product/:id/edit',
    component: ProductFormComponent
  },
  {
    path: 'app',
    component: AppComponent
  },
  {
    path: 'student',
    component: StudentComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
