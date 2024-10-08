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
import { SidebarComponent } from './components/sidebar/sidebar.component';



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
    SidebarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
