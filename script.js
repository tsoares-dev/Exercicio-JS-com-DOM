// 1.Crie um script que contenha 3 campos de formulario(text) , onde será aplicado via eventos as definições abaixo
// . Ao selecionar um campo o mesmo deve ter a cor verde
// . Ao sair do campo o mesmo deve ficar com a cor vermelha

function mudarCor1(){
  var x = document.getElementById("fname1");
  x.style.background = "green";
};
function mudarCor2(){
  var x = document.getElementById("fname1");
  x.style.background = "red";
};

// function mudarCor1(){
//   var x = document.getElementById("fname2");
//   x.style.background = "green";
// };
// function mudarCor2(){
//   var x = document.getElementById("fname2");
//   x.style.background = "red";
// };

// function mudarCor1(){
//   var x = document.getElementById("fname3");
//   x.style.background = "green";
// };
// function mudarCor2(){
//   var x = document.getElementById("fname3");
//   x.style.background = "red";
// };
// 2.Crie um script onde o usuario digite num campo de formulário (text) as teclas e via function e case aconteça a separação entre letras e números , onde os mesmo devem ser exibidos em campos diferentes.

// .
// 3. Primeiro, vamos criar um componente que possua duas caixas de texto. No entanto, essas caixas só podem aceitar números, além disso, elas devem ter rótulos (label) com um valor mínimo e um valor máximo. É preciso também sempre checar se o valor mínimo é menor que o valor máximo. O componente que você deverá construir ainda deve possuir um botão que deve contar e imprimir quantos números existem entre valor mínimo e valor máximo que sejam múltiplos de 2 e 3 (simultaneamente).

// 4. Agora você deverá criar um componente que tenha uma caixa de texto que só aceita números e tenha um rótulo (label). Aqui você usará esse número para calcular o fatorial dele e mostrá-lo na tela. O componente deve ainda possuir um botão “calcular”. Quando acionado ele deve calcular o fatorial do número digitado e imprimir o resultado e o tempo necessário para a execução. O resultado deve ser mostrado no formato : 53! = xx (yy milisegundos).

// 5. Agora você precisará criar um componente que possua um botão “criar relatório”. Quando acionado o seu programa deverá imprimir um relatório de resultados da disciplina javascript para 20 alunos, no formato de tabela. Mas vamos complicar um pouco ne? veja algumas regras adicionais! As notas deverão ser números inteiros entre 0 e 100, criadas aleatoriamente; (dica: use a função math.radom(), dá um google!) Cada aluno deve ser representado por um registro composto por numero e nota Use uma função construtora chamada Aluno. Se você for bem ousado, implemente usando classes; Armazene a nota do aluno como uma variável privada do tipo symbol, use getters e setters para recuperar a informação. Os registros devem ser armazenados em um array; A impressão do relatório deve ter: Um título; Os resultados mostrados linha a linha no formato “Aluno nr xx – Nota yy [(A/RE)PROVADO]”; e Um rodapé com estatística final no formato “APROVADOS: XX (xx%) | REPROVADOS: YY (yy%)”.

// 6. Agora você precisa criar um componente que possui 3 caixas de texto. Eles só aceitam números e possuem rótulos (label): Quantidade de números, valor mínimo e valor máximo. Seu componente deve possuir um botão calcular que quando acionado deve criar um array com quantidade de números aleatórios não repetidos e ordená-los. Os números devem estar entre valor mínimo e valor máximo (inclusives, ou seja incluindo o valor mínimo e valor máximo). Lembre-se que para calcular quantidade de números deve ser menor que a soma de valor mínimo e valor máximo.

// 7. O próximo componente será um que possui 3 caixas de texto que só aceitam números e tenha os rótulos (label): lado A, lado B e lado C. O componente deve ainda possuir um botão calcular que quando acionado deve dizer se um triângulo formado por esses 3 lados é um triângulo equilátero, isósceles ou escaleno.