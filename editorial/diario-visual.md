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


## Registro de 15 de novembro de 2026 — continuidade de Rui, Adelaide e Beatriz

Foi acrescentado *O endereço no verso*, situado entre 2 e 4 de fevereiro de 1944. O texto retoma diretamente a carta de Adelaide encaminhada por Beatriz em *A carta que chegou sem pedir licença*. Rui recebe a resposta em Alcântara, responde à tia e mantém o limite de não regressar ainda. Não há reconciliação, encontro fortuito nem resolução da doença de Adelaide. A obra foi integrada como item 17 do Volume I e como fevereiro de 1944 na cronologia, preservando a ordem de leitura independente. A publicação pública não é presumida: build e resposta HTTP devem ser verificados separadamente.


## Complemento — 15 de novembro de 2026

### Correção da integração e do pipeline

A conferência dos snapshots encontrou uma divergência real: `src/data/editorial-fallback.json` não continha o último motivo recorrente nem a revisão da nota do arco Beatriz–Adelaide–Rui presentes no índice canônico. A validação de igualdade exata interrompia o deploy antes dos testes. O fallback foi substituído pelo conteúdo canônico, byte a byte.

A suíte também guardava expectativas antigas: 16 capítulos, 48 obras e uma ordem de publicação anterior ao manuscrito de 15 de novembro. As expectativas passaram a acompanhar o índice e o arquivo atuais, preservando a ordem cronológica explícita. Resultado verificado no workflow `43709184834`: **47 testes aprovados em 8 arquivos**, snapshots de entradas e índice editorial idênticos aos canônicos, Bestiário e Atlas válidos, prerender concluído e artefato React enviado.

A repetição do workflow havia criado mais de um artefato com o nome fixo `github-pages`, impedindo `deploy-pages` de escolher um único pacote. O workflow agora nomeia o artefato com `${{ github.run_id }}-${{ github.run_attempt }}` e aguarda oito segundos antes do deploy. A execução `43709184834`, no commit `cadb0fca472e1b697078c95a3a538c27ed21a880`, terminou com sucesso; o próprio job reportou sucesso para `https://vranuska.github.io/vespera-aeternum/`.

### O que ainda impede a confirmação pública

A execução dinâmica de Pages `43709184621` também terminou com sucesso, mas seu job executou **Build with Jekyll** a partir da branch `main`. Portanto, a origem de Pages ainda aparenta estar em **Deploy from a branch**. O deploy React do workflow foi aceito, mas o build Jekyll concorrente pode publicar o leitor estático antigo por cima dele. É necessário alterar manualmente **Settings → Pages → Build and deployment → Source** para **GitHub Actions**.

A tentativa de abrir o endereço público neste ambiente continuou sem retornar uma página legível. Assim, ficam separados os estados: código e snapshots integrados; testes e prerender aprovados; ação de deploy React concluída; origem efetiva do Pages e inspeção HTTP/visual ainda pendentes. Nenhuma aprovação visual foi presumida.

## Registro de 15 de novembro de 2026 — a visita de Estevão a Leonor

Foi acrescentado *A visita que coube no pátio*, situado em 3 de dezembro de 1891. O texto mostra Estevão recebendo a carta enviada por Leonor no fim de novembro e levando Bento até Arroios. A visita produz uma consequência concreta para o convite, mas não resolve a discussão antiga: Estevão admite apenas parte do que fez, Leonor não exige uma confissão completa e nenhum dos dois declara a reconciliação concluída.

O capítulo foi integrado como item 18 do Volume I e posicionado na cronologia depois de *O lugar onde a água ferve*, em dezembro de 1891. O arco registra que a carta foi recebida e a visita aconteceu; continuam em aberto a natureza completa da viagem de Estevão, o alcance das declarações que assinou e a possibilidade de um regresso mais duradouro. A porta do fogão permanece um objeto doméstico, sem função sobrenatural.

A integração editorial preserva a ordem de leitura independente e a cronologia do universo como estruturas distintas. A publicação pública não é presumida: snapshots, testes, build, deploy e resposta HTTP devem ser verificados separadamente.


## Registro de 15 de novembro de 2026 — Otaru no Atlas e publicação React

A zona portuária de Otaru foi acrescentada ao Atlas como lugar testemunhado em *A maré não assina recibos*. O registro identifica Otaru, Hokkaido, e a atividade entre armazéns, cais e barcaças em novembro de 1921, mas não inventa o cais, o armazém ou a posição exata do acidente. O marcador no mapa mortal é simbólico.

Foi criada a prancha vetorial original `assets/atlas/otaru-porto-1921.svg`, com descrição alternativa e legenda que a identificam como reconstituição esquemática, não como levantamento de um cais específico. O contexto histórico foi conferido em fontes institucionais: o canal de Otaru foi iniciado em 1914 e concluído em 1923; em 1921, as obras ainda estavam em andamento. O projeto criou espaço de atracação para barcaças que transferiam mercadorias entre navios e armazéns. Fontes: [Otaru City](https://www.city.otaru.lg.jp/docs/2023062000045/) e [Japan Tourism Agency](https://www.mlit.go.jp/tagengo-db/en/R5-00045.html).

O Atlas passou a conter nove lugares. Os nove caminhos de imagem foram verificados no repositório, e `src/data/atlas-fallback.json` está idêntico a `atlas.json`. O aplicativo recebeu o marcador `mortais:otaru`, a ligação canônica e testes de localização e imagem. A suíte de regressão inicialmente encontrou uma expectativa antiga de oito pranchas; o teste foi atualizado para nove e passou a verificar explicitamente a prancha de Otaru.

A execução [43765619973, tentativa 2](https://github.com/Vranuska/vespera-aeternum/actions/runs/43765619973) concluiu com sucesso no commit `e4e01074ba23536fac460b912cc7668a42cdea83`: **48 testes em oito arquivos**, snapshots validados, prerender concluído, artefato enviado e deploy-pages reportado como bem-sucedido. A execução automática `pages build and deployment` [43765620208](https://github.com/Vranuska/vespera-aeternum/actions/runs/43765620208) também concluiu com Jekyll. Como ela continua sendo disparada, a origem de Pages ainda aparenta estar configurada para publicação por branch; a troca para **GitHub Actions** permanece pendente para evitar que uma publicação Jekyll futura substitua o artefato React.

O endereço público não pôde ser inspecionado por HTTP nesta execução. Portanto, o deploy React foi confirmado pelo GitHub Actions, mas a resposta servida e a aparência pública não foram aprovadas visualmente.

O repositório do aplicativo está no commit `09b8ed566d78d3bcebb0eda88fc369b663734830`. O preview Lovable ainda informa `a4075564387553c8cca6cd1adeae3891e7dadbed`, anterior a essas alterações. A tentativa de sincronização pelo agente Lovable foi bloqueada por falta de créditos no workspace; nenhuma alteração visual foi feita. A composição aprovada de `5a038b8` permanece sem redesenho.
