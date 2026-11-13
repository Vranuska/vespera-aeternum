# Diário visual e de publicação — Vespera Aeternum

Este documento preserva as decisões de composição do portal e registra regressões, correções e estados de publicação que precisam ser distinguidos. Não substitui o histórico de commits nem o manuscrito canônico.

## Composição aprovada

A referência visual é o trabalho Lovable identificado como commit `5a038b8`, “Reforged Vespera home page”, restaurado no preview. A composição deve permanecer incremental:

- cabeçalho vinho quase negro, monograma botânico dourado e navegação discreta;
- índice lateral delicado, com acesso à leitura, cronologia, gêneros, lugares e catálogos;
- manuscrito/pergaminho como primeiro conteúdo e protagonista da página;
- imagem enquadrada como elemento secundário, nunca um hero fotográfico de tela inteira;
- lista de outros manuscritos depois da peça em destaque;
- Constelação de memórias depois da leitura e da lista de manuscritos, como instrumento de navegação temporal, não como substituta da leitura;
- tipografia serifada, ornamentos contidos, responsividade, foco visível e respeito a `prefers-reduced-motion`.

A experiência deve parecer um arquivo habitado, não um blog genérico nem uma grade de cartões.

## Registro de 13 de novembro de 2026

### Regressão identificada

O commit `fb9f325687f7586b2be13bd59c992b7b377b598c` do repositório `Vranuska/vespera-aeternum-blog`, intitulado “Promove a Constelação à entrada do portal”, colocou a Constelação antes do manuscrito em destaque. Isso contrariava a hierarquia aprovada e as instruções deste projeto.

### Correção aplicada

O commit `9809a09b2371931552c6388deb7fddd48bb53093`, “Restaura manuscrito como primeira leitura do portal”, moveu a Constelação para depois do artigo com o manuscrito e “Outros manuscritos”. O índice lateral voltou a começar por “Diários” e “Ordem de leitura”, mantendo os atalhos de gêneros e catálogos.

A correção foi lida de volta no GitHub; o blob verificado de `src/routes/index.tsx` é `18044a95540ed59a24b4f29c21d04edbcaffda7d`. Nenhum manuscrito ou dado canônico foi alterado nessa correção visual.

### Preview, GitHub e produção — estados separados

- **Preview Lovable:** a última leitura da API informa o commit `627a3f1025536e9d3816eb1b58f2cf6111c898e9` e o estado `ready`. O código desse preview já coloca a Constelação depois dos manuscritos.
- **GitHub do frontend:** a branch `main` contém a correção `9809a09`. A API do Lovable ainda não confirmou que esse commit externo foi incorporado ao preview.
- **Produção GitHub Pages:** a execução `43417100912` concluiu com sucesso em 13 de novembro, mas ocorreu antes da correção `9809a09`; portanto, ela não comprova a publicação dessa correção. A execução confirmou a etapa de deploy do artefato anterior.
- **Verificação visual/HTTP:** pendente. O sucesso do job não deve ser apresentado como inspeção visual da página pública.

Próxima verificação: confirmar que o Lovable reconhece `9809a09`, executar novamente o build e confirmar separadamente a resposta e a aparência de `https://vranuska.github.io/vespera-aeternum/`.

## Regra de manutenção

Antes de qualquer mudança visual, comparar o arquivo afetado com a composição aprovada e com o preview atual. Mudanças na hierarquia da página inicial exigem justificativa explícita; mudanças de conteúdo pertencem ao repositório literário e não devem ser misturadas com correções do frontend.
