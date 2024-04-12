//Criação das variaveis
let potedeCafe = "café pilão"
let poteAcucar = "Açucar cristal"
let poteBiscoito = "Biscoito Maizena"
//Nesse caso, a mensagem da vovo é uma constante e não pode ser mudada no código, a não ser que seja mudada aqui. 
const messagemDaVovo ="Na cozinha da vovó hoje tem:"

console.log("Na cozinha da vovó hoje tem: " + 
potedeCafe + " , " + 
poteAcucar + " , " +
poteBiscoito
)

//Alteração do valor da variavel "pote de cafe". Como a variavel foi criada na memoria, não é necessario criar o let mas sim, criar o novo valor da variavel e executar
//o comando novamente. 

poteCafe = "Café 3 corações"
//Abaixo a constante "messagemDaVovo" foi criada para demonstrar como funcionam as constantes que um valor fixo e que não muda. 
console.log(messagemDaVovo + 
poteCafe + " , " + 
poteAcucar + " , " +
poteBiscoito
)
