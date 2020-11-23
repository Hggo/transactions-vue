## Decisões técnicas:

### Framework SPA
O Vue foi escolhido por vários motívos, entre eles:
 - É um framework bem pequeno em comparação aos concorrentes, angular e react;
 - Gerenciamento de estado com o Vuex é muito mais simples do que o redux;
 - Setup do projeto com vue cli é super pragmático, gerado um boilerplate bem completo, com dependências e arquivos de configuração de testes e linter;
 - Preferi usar arquivos .vue pois components devem ser pequenos blocos de código encapsulados, e a ideia de um component por arquivo tras a necessidade de os components terem o mínimo de lógica de negócio, além de desempenharem uma função bem específica;
 - Vuex simplifica muito a comunicação entre os components, e além disso geralmente simplifica os testes, pois certos tipos de lógica podem ser deixados no store, e isso evita comunicações complexas entre components;

### Typescript
O typescript tras várias possibilidades para o projeto, a utilização de uma estrutura sólida de classes permite que bugs sejam encontrados em compilação.

### Cypress
O runner do cypress facilita muito o desenvolvimento de testes, provedo ferramentas que te permitem escrever testes interativamente, capturando os elementos com o seletor visual. Além disso, a captura feita do dom que pode ser vista sequencialmente, facilita muito entender possiveis erros e bugs.
