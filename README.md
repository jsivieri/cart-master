

FUNÇÕES DO CARRINHO

EXIBIÇÃO DOS ITENS
A tela do carrinho mostra todos os produtos adicionados, com nome, preço e quantidade.
QUANTIDADE E SUBTOTAL
Para cada item, aparece a quantidade e o subtotal.
BOTOES PARA ADICIONAR OU RETIRAR ITENS
Botões para aumentar ou diminuir a quantidade de cada produto no carrinho.Se a quantidade chegar a zero, o item é removido do carrinho.
TOTAL DO CARRINHO
O valor total é somado automaticamente conforme os itens e quantidades mudam.


O estado do carrinho é controlado no arquivo App.js usando o useState.
As funções de adicionar e remover itens são passadas para a tela do carrinho como propriedades props.
O componente do carrinho Cart.js recebe a lista de itens e as funções, e exibe tudo.
Os botões usam as funções para alterar a quantidade dos produtos.