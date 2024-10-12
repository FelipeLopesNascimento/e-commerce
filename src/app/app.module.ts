import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { SearchComponent } from './components/header/search/search.component';
import { IconsComponent } from './components/header/icons/icons.component';
import { HeaderComponent } from './components/header/header.component';
import { CategoriasComponent } from './components/header/categorias/categorias.component';
import { PoliciesComponent } from './components/footer/policies/policies.component';
import { HelpComponent } from './components/footer/help/help.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutusComponent } from './components/footer/aboutus/aboutus.component';
import { ContactComponent } from './components/footer/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './components/content/content.component';
import { ProductComponent } from './components/content/product/product.component';
import { provideHttpClient } from '@angular/common/http';
import { CategoryComponent } from './pages/category/category.component';
import { HistoryComponent } from './pages/aboutus/history/history.component';
import { FactoryComponent } from './pages/aboutus/factory/factory.component';
import { StoreComponent } from './pages/aboutus/store/store.component';
import { PurchasingComponent } from './pages/policies/purchasing/purchasing.component';
import { DeliveryComponent } from './pages/policies/delivery/delivery.component';
import { ReturnComponent } from './pages/policies/return/return.component';
import { QuestionsComponent } from './pages/help/questions/questions.component';
import { WorkComponent } from './pages/help/work/work.component';
import { CartComponent } from './pages/cart/cart.component';
import { ItemComponent } from './pages/item/item.component';



@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    SearchComponent,
    IconsComponent,
    HeaderComponent,
    CategoriasComponent,
    PoliciesComponent,
    HelpComponent,
    FooterComponent,
    AboutusComponent,
    ContactComponent,
    HomeComponent,
    ContentComponent,
    ProductComponent,
    CategoryComponent,
    HistoryComponent,
    FactoryComponent,
    StoreComponent,
    PurchasingComponent,
    DeliveryComponent,
    ReturnComponent,
    QuestionsComponent,
    WorkComponent,
    CartComponent,
    ItemComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,


  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
