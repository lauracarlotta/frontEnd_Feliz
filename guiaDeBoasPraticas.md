# Guia de boas Práticas em HTML, CSS e JavaScript #

*1-* A tag <script> deve ser declarada, como melhor prática antes da tag de fechamento da *body*. (Quando se declara na tag *head* podemos causar um delay muito grande porque se o browser renderiza o conteúdo do html de cima pra baixo, imagine que se temos um script extenso, o *body* da página irá demorar a carregar, enaquanto que, quando declarado no final, o usuário já terá o conteúdo da página carregado e assim podendo dar início a sua interação);

*2-* Sempre usar nomes de variáveis em inglês;

*3-* Usar somente camelCase;

*4-* #HTML# não pode reaproveitar códigos entre páginas. (P/ isso é necessário o uso de servidores em PHP);

*5-* Costumas-se deixar 50px de margens em itens clicáveis para páginas mobile;

*6-* Break pointes não precisam ser com valores redondos ou valores de dispositivos. Podemos "quebrar" onde for melhor para darmos ao usuário a melhor experiencia possível;

*7-* Não usar VAR para declarar variáveis: use apenas LET no caso de ser uma constante, ou seja, um valor que nunca muda, use CONST;

*8-* Sempre use ponto e vírgula;

*9-* Sempre comente o seu código; [Evite comentários, um código limpo e organizado é autoexplicativo 😊;
A não ser que seja muito necessário.]

*10-* Declare Variáveis, Fora da Instrução For;

*11-* Visualize sua interface em blocos, assim o desenvolvimento do seu site ficará bem mais simples;

*12-* Não Use Abreviações

*13-* Sempre use "aspas duplas" na declarações de atributos;

*14-* Sempre indente o seu cógido;

*15-* Seja simples;

*16-* Tenha uma ordem, exemplo:

    HTML:

        > class
        > id 
        > data-*
        > for, type, ou href
        > src, for, type, href
        > title, alt
        > aria-*, role

    CSS:

        1. Posicionamento
        2. Box Model
        3. Tipografia
        4. Visual;

*17-* ID ou CLASS? Prefira sempre pela class, assim a manutenção do seu código e a reutilização do mesmo, fica muito mais fácil, clara e adaptável;

*18-* Para o CSS, Sempre que você for utilizar um hexadecimal que tiver repetição de letras, utilize seu atalho.
Ex: #FFFFFF -> #FFF;

*19-* Quando necessário, utilize os seletores para estilos específicos de elementos muito repetidos. Assim você evita com que vaze para outros elementos iguais. Ex: div.caixa> img OU div.caixa p;

*20-* Se possível faça com que seu CSS siga a ordem das tags no arquivo HTML.

*21-* Não sobrescreva regras (E mobile-first)

    Com toda a certeza você já precisou limpar um float:left com um float:none, ou reescrever um width:auto. Isso não é legal.

    “Mas por que não é legal?”

    Bom, além de você escrever a mesma propriedade pro mesmo elemento duas vezes, você acaba ignorando os padrões no navegador (float, por exemplo, já é none por padrão). Inverta seus seletores: utilize o float:left em elementos que REALMENTE precisam flutar e os demais herdam o valor padrão.

    Geralmente isso acontece muito ao adaptar sites para mobile com media queries. Na tela grande você flutua os elementos para todos os lados, mas no celular decide empilhar e tirar o float;

*22-* SEMPRE, SEMPRE, SEMPRE use unidades flexíveis;

*23-* Documente bem as exceções (o porquê das suas escolhas, porque daquele valor x naquela propriedade, etc.);

*24-* Mantenha os arquivos de um componente no mesmo lugar;

*25-* Nunca utilizar tabelas para a contrução de layouts;

# Outras Anotaçãoes: #

* alert => Usado para a comunicação com o usuário
  console.log => usado para a comunicação com o desenvolvedor, uma vez que essa mensagem não fica visível para o usuário
  
  *
