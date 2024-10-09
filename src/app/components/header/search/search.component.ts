import { Component, OnInit } from '@angular/core';
import { DataProductsService } from '../../../services/data-products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {

  termoPesquisa:string = '';  // Armazena o termo de pesquisa
  resultados:any[] = [];  // Armazena os resultados filtrados
  products: any[] = [];
  constructor(private dataProductsService: DataProductsService) { }

  ngOnInit(): void {
    // Carrega os produtos do serviço quando o componente é inicializado
    this.dataProductsService.getProducts().subscribe(data => {
      this.products = data; // Inicialmente, mostra todos os produtos
    });
  }


  // Método chamado sempre que o usuário digita na barra de pesquisa
  onSearch(): void {
    const termo = this.termoPesquisa.toLowerCase();
    if (termo) {
      this.resultados = this.products.filter(produto => produto.nome && produto.nome.toLowerCase().includes(termo));
    } else {
      this.resultados = [];
    }
  }

  // Método para selecionar um item e preencher o campo de pesquisa
  selecionarResultado(resultado: any): void {
    this.termoPesquisa = resultado.nome;
    this.resultados = [];  // Oculta a lista de resultados após a seleção
  }






}
