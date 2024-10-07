import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {

  termoPesquisa:string = '';  // Armazena o termo de pesquisa
  resultados:string[] = [];  // Armazena os resultados filtrados
  produtos:string[] = [  // Simulação de produtos
    'Pincel Artístico',
    'Tinta a Óleo',
    'Cavalete de Madeira',
    'Tela para Pintura',
    'Kit de Aquarela',
    'Massa de Modelar',
    'Tinta Acrílica',
    'Papel para Desenho',
    'Estojo de Lápis',
    'Caneta Técnica'
  ];

  // Método chamado sempre que o usuário digita na barra de pesquisa
  onSearch(): void {
    const termo = this.termoPesquisa.toLowerCase();
    if (termo) {
      console.log(termo)
      this.resultados = this.produtos.filter(produto => produto.toLowerCase().includes(termo));
    } else {
      this.resultados = [];
    }
  }

  // Método para selecionar um item e preencher o campo de pesquisa
  selecionarResultado(resultado: string): void {
    this.termoPesquisa = resultado;
    this.resultados = [];  // Oculta a lista de resultados após a seleção
  }
constructor(){

}

  ngOnInit(): void {


  }
}
