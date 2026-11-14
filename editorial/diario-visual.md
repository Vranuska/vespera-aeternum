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

## Registro complementar — 13 de novembro de 2026, 18h32 (Brasília)

### Publicação React

A execução `43510748557` do workflow **Deploy Lovable archive to GitHub Pages** terminou com conclusão `success`. O job executou com sucesso as doze etapas, incluindo:

- checkout do frontend na branch `main`, confirmando o SHA `9809a09b2371931552c6388deb7fddd48bb53093`;
- instalação congelada das dependências;
- validação dos snapshots canônicos de obras, índice editorial, Bestiário e Atlas;
- testes de regressão de arquivo, continuidade e atribuição;
- build com prerender;
- preparação e validação da raiz do artefato;
- configuração, upload e deploy no GitHub Pages.

A execução seguinte de Pages, `43510756840`, também terminou com sucesso. Isso confirma que o workflow de publicação e o processamento do Pages foram concluídos, mas não substitui a verificação independente por HTTP nem a inspeção visual da página pública.

### Estado do preview

A API do Lovable ainda informa o preview como `ready`, no SHA interno `627a3f1025536e9d3816eb1b58f2cf6111c898e9`. O GitHub `main` está em `9809a09b2371931552c6388deb7fddd48bb53093`. A leitura dos arquivos confirma que a hierarquia da página inicial permanece compatível com a composição aprovada; ainda assim, os SHAs distintos impedem declarar sincronização integral do preview.

### Estado de verificação

- **GitHub frontend:** correção `9809a09` confirmada.
- **Build e testes:** concluídos com sucesso no workflow `43510748557`.
- **Deploy GitHub Pages:** etapa `Deploy to GitHub Pages` concluída com sucesso.
- **HTTP/visual em produção:** ainda não verificado diretamente neste ambiente; a tentativa de acesso externo não retornou uma página legível.
- **Preview Lovable:** estado `ready`; inspeção visual independente pendente.

Não registrar a produção como visualmente aprovada até confirmar a resposta HTTP e conferir a composição no endereço público.

## Regra de manutenção

Antes de qualquer mudança visual, comparar o arquivo afetado com a composição aprovada e com o preview atual. Mudanças na hierarquia da página inicial exigem justificativa explícita; mudanças de conteúdo pertencem ao repositório literário e não devem ser misturadas com correções do frontend.

## Registro de 14 de novembro de 2026

### Hierarquia do portal — conferência da fonte

A leitura de `src/routes/index.tsx` na branch `main` confirma a composição aprovada: manuscrito em destaque, lista de outros manuscritos e, depois, a Constelação. A Constelação continua sendo a navegação temporal do arquivo, não substitui a leitura convencional. A afirmação antiga no índice editorial de que ela havia sido promovida para antes do manuscrito estava desatualizada e foi corrigida; a hierarquia visual não foi reconstruída nem alterada nesta etapa.

### Atlas — prancha do Pasaje de la Calandria

Foi criada `assets/atlas/pasaje-calandria.svg`, uma reconstituição ilustrativa baseada no corredor, no portão verde do nº 48, no pátio, na árvore e na porta baixa descritos em *A rua que cabia na margem*. A imagem é identificada como reconstituição, não como fotografia ou levantamento. A porta permanece fechada; a prancha não revela o outro lado nem estabelece ligação com Umbra, Sonhar ou Entre. O snapshot React do Atlas e o teste de regressão foram preparados para oito lugares com imagem.

### Build e publicação

A execução `43512103928` (workflow **Deploy Lovable archive to GitHub Pages**, commit `a887f5c`) terminou com conclusão `success` em 13 de novembro de 2026. O job confirmou snapshots, testes, prerender, preparação do artefato e deploy. A resposta HTTP e a inspeção visual independente do domínio público continuam pendentes; sucesso do workflow não será tratado como aprovação visual.

## Complemento — 14 de novembro de 2026, 08h50 (Brasília)

### Resultado dos workflows após a integração do Pasaje

- A execução React `43591771980`, no commit `aa0f5f9`, terminou com `success`. As etapas de sincronização dos snapshots, validação do Bestiário e Atlas, testes de regressão, prerender, preparação do artefato e `Deploy to GitHub Pages` passaram.
- A execução dinâmica de Pages `43591771875` também terminou com `success`, mas o job executou **Build with Jekyll** a partir da branch `main`. Isso impede tratar o sucesso do deploy React como prova de que o domínio público está servindo o artefato React; a fonte efetiva de Pages precisa ser confirmada.
- A URL pública não pôde ser inspecionada por HTTP nesta execução. A pendência operacional é verificar em **Settings → Pages → Build and deployment → Source** se a fonte continua em `Deploy from a branch`; se estiver, alterá-la para `GitHub Actions`, e então conferir a página servida e sua aparência.

A partir deste registro, commits e sucesso de workflow permanecem estados separados de publicação pública verificada.
