import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';
import { HistoryComponent } from './pages/aboutus/history/history.component';
import { FactoryComponent } from './pages/aboutus/factory/factory.component';
import { StoreComponent } from './pages/aboutus/store/store.component';
import { PurchasingComponent } from './pages/policies/purchasing/purchasing.component';
import { DeliveryComponent } from './pages/policies/delivery/delivery.component';
import { ReturnComponent } from './pages/policies/return/return.component';
import { ContactComponent } from './pages/help/contact/contact.component';
import { QuestionsComponent } from './pages/help/questions/questions.component';
import { WorkComponent } from './pages/help/work/work.component';
import { CartComponent } from './pages/cart/cart.component';
import { ItemComponent } from './pages/item/item.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent ,
    pathMatch:'full'
  },
  {
    path: 'categoria/:categoria',
    component: CategoryComponent
  },
  {
    path: 'sobrenos/historia',
    component: HistoryComponent
  },
  {
    path: 'sobrenos/fabrica',
    component: FactoryComponent
  },
  {
    path: 'sobrenos/loja',
    component: StoreComponent
  },
  {
    path: 'politicas/compras',
    component: PurchasingComponent
  },
  {
    path: 'politicas/frete',
    component: DeliveryComponent
  },
  {
    path: 'politicas/devolução',
    component: ReturnComponent
  },
  {
    path: 'ajuda/contato',
    component: ContactComponent
  },
  {
    path: 'ajuda/duvidas',
    component: QuestionsComponent
  },
  {
    path: 'ajuda/trabalhe',
    component: WorkComponent
  },
  {
    path: 'carrinho',
    component: CartComponent
  },
  {
    path: 'item/:id',
    component: ItemComponent
  },
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
