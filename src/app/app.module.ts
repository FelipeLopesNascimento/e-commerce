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


@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    SearchComponent,
    IconsComponent,
    HeaderComponent,
    CategoriasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
