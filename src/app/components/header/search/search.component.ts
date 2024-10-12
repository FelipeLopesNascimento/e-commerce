import { Component, OnInit } from '@angular/core';
import { DataProductsService } from '../../../services/data-products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {

  termoPesquisa:string = '';  // Armazena o termo de pesquisa
  resultados:any[] = [];  // Armazena os resultados filtrados
  products: any[] = [];
  constructor(private dataProductsService: DataProductsService, private router: Router) { }

  ngOnInit(): void {
    // Carrega os produtos do serviço quando o componente é inicializado
    this.dataProductsService.getProducts().subscribe(data => {
      this.products = data; // Inicialmente, mostra todos os produtos
    });
  }


  onSearch(): void {
    const termo = this.termoPesquisa.toLowerCase();
    if (termo) {
      this.resultados = this.products.filter(produto => produto.nome && produto.nome.toLowerCase().includes(termo));
    } else {
      this.resultados = [];
    }
  }

  selecionarResultado(resultado: any): void {
    this.router.navigate(['/item', resultado.id]);
  }






}
