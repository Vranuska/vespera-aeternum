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


## Registro de 16 de novembro de 2026 — o Arquivo das Eras

### Diagnóstico

O portal inicial preservava a composição Reforged aprovada — manuscrito em destaque, outros manuscritos e, por fim, a Constelação. Os anéis, a frase central e a seleção de anos e meses já existiam. Porém, o atalho chamado **Arquivo das Eras** levava a um filtro de coleção da Bibliotheca, não a uma sala própria do arquivo. A Constelação também apresentava datas exatas e datas parciais na mesma lista mensal, sem permitir abrir um dia específico.

### Mudança de arquitetura

- Criada a rota dedicada `/arquivo-das-eras`, sem substituir a página inicial.
- O novo portal reutiliza a Constelação existente, preservando anéis, monograma, frase central e distinção entre cronologia do universo e ordem editorial.
- A navegação temporal agora desce de ano para mês e de mês para dia quando o índice fornece uma data completa. Registros conhecidos apenas por semana ou mês continuam visíveis numa seção separada; nenhuma data foi inventada.
- O portal apresenta um índice por forma literária — diários, contos, crônicas, cartas, poemas, memórias, fragmentos, confissões, diálogos e romance-mosaico — com contagens derivadas do catálogo e prateleiras vazias identificadas honestamente.
- O atalho lateral da página inicial e a navegação principal passam a abrir a nova rota. A Bibliotheca continua responsável por busca e filtros detalhados.
- A hierarquia aprovada da página inicial não foi alterada. Nenhum manuscrito, entrada canônica, capítulo ou posição cronológica foi removido ou reordenado.

### Estado técnico

A função temporal separa dias completos de registros com precisão parcial, com teste de regressão para janeiro de 1944 e novembro de 1891. A rota também recebe teste de correspondência. Build, testes e deploy desta versão devem ser registrados após a conclusão do workflow; a resposta HTTP e a inspeção visual pública permanecem verificações independentes.


### Build, pré-renderização e publicação — 16 de novembro

- Frontend confirmado na branch `main`, commit `5880629594da039a6d87f1dabd41f1ff42985389`.
- A execução [43866114622](https://github.com/Vranuska/vespera-aeternum/actions/runs/43866114622) terminou com `success`. Foram aprovados **50 testes em 8 arquivos**; o build Vite concluiu; a página `arquivo-das-eras/index.html` foi pré-renderizada e passou pela nova verificação explícita do workflow.
- O workflow também confirmou a sincronização dos snapshots: 50 obras, 18 capítulos, 18 registros cronológicos, 32 fora da cronologia, um dossiê canônico do Bestiário, quatro menções e nove lugares no Atlas.
- A etapa `Deploy to GitHub Pages` do workflow React terminou com sucesso. A execução automática paralela de Pages [43866113239](https://github.com/Vranuska/vespera-aeternum/actions/runs/43866113239) também concluiu um build Jekyll. O deploy React terminou depois dela, mas a execução Jekyll confirma que a origem por branch ainda precisa ser eliminada para evitar substituições futuras.
- A inspeção HTTP da página inicial e da nova rota não retornou conteúdo legível neste ambiente. Portanto, o artefato foi construído, pré-renderizado e enviado pelo workflow; a resposta pública e a aparência visual continuam sem verificação independente.

A página inicial aprovada permanece intacta. O novo portal é uma sala adicional do arquivo, não uma substituição do manuscrito em destaque nem da Constelação que vem depois da leitura.


## Registro complementar — 16 de novembro de 2026, 18h21 (Brasília)

### Diferença entre GitHub e preview Lovable

A branch `main` de `Vranuska/vespera-aeternum-blog` está no commit `5880629594da039a6d87f1dabd41f1ff42985389`. Ela contém a rota `src/routes/arquivo-das-eras.tsx`, o registro da rota em `src/routeTree.gen.ts`, a ligação no índice lateral e o atalho no cabeçalho.

A API do projeto Lovable continua a informar o preview como `ready`, mas no SHA interno `a4075564387553c8cca6cd1adeae3891e7dadbed`. A leitura desse ref confirmou que a rota dedicada ainda não existe no workspace e que o cabeçalho não contém o atalho novo. A home do preview ainda aponta o item lateral “Arquivo das Eras” para um filtro da Bibliotheca, em vez de abrir a rota dedicada.

Foi tentada uma sincronização direcionada pelo agente Lovable, com instrução explícita para preservar a composição aprovada e incorporar apenas as mudanças já existentes na `main`. A chamada foi recusada porque o workspace está sem créditos; nenhuma edição parcial foi aplicada. A sincronização do preview permanece pendente.

### A publicação Jekyll ocorreu depois do deploy React

A execução React [43866114622](https://github.com/Vranuska/vespera-aeternum/actions/runs/43866114622) terminou às 12:24:12 UTC com sucesso. As etapas de validação de snapshots, 50 testes em oito arquivos, build, pré-renderização da rota `/arquivo-das-eras`, upload do artefato e `Deploy to GitHub Pages` foram concluídas.

Depois dela, a execução dinâmica de Pages [43866353482](https://github.com/Vranuska/vespera-aeternum/actions/runs/43866353482) começou às 12:24:55 UTC e terminou às 12:25:40 UTC. Seus jobs mostram explicitamente `Build with Jekyll` e `Deploy to GitHub Pages`, ambos com sucesso. Portanto, houve uma publicação Jekyll posterior à publicação React; é provável que o artefato React tenha sido substituído pelo site estático da branch. A resposta HTTP não pôde ser obtida neste ambiente, então o conteúdo efetivamente servido continua sem confirmação independente.

A origem de publicação precisa ser alterada em **Settings → Pages → Build and deployment → Source → GitHub Actions**. As ferramentas conectadas disponíveis nesta execução não expõem a alteração dessa configuração do repositório. Não foi alterado o `index.html` antigo nem criada uma solução de redirecionamento que pudesse mascarar o problema.

### Dossiê de continuidade

Foi criado [Dossiê de continuidade — Pasaje de la Calandria](dossie-pasaje-de-la-calandria.md). Ele separa fatos do manuscrito, testemunhos, objetos, custódia conhecida e lacunas. Registra especialmente que a chave entrou na fechadura, mas não foi girada; que sua devolução não está narrada; e que a porta continua fechada. O documento é editorial, não é uma nova peça nem uma alteração de `entries.json`.

### Estado ao encerrar

- **Conteúdo canônico:** sem alterações; o portal e os snapshots permanecem preservados.
- **Frontend GitHub:** contém a rota dedicada e os atalhos do Arquivo das Eras.
- **Preview Lovable:** pronto, mas desatualizado; sincronização bloqueada por falta de créditos.
- **Deploy React:** confirmado pelo workflow.
- **Deploy Jekyll posterior:** confirmado; origem de Pages ainda precisa ser trocada.
- **HTTP/inspeção visual pública:** não verificados.
- **Composição aprovada:** nenhum redesenho ou alteração visual foi feito.


### Revisão textual do portal — 16 de novembro de 2026

No arquivo `src/routes/arquivo-das-eras.tsx`, a forma europeia «autónomas» foi corrigida para português brasileiro («autônomas»), no commit [79f513aa](https://github.com/Vranuska/vespera-aeternum-blog/commit/79f513aa421092dd7eec09171063181167bdf712). A alteração é exclusivamente textual: não muda layout, rotas, manuscritos ou dados canônicos. Ainda não aparece no preview Lovable, que permanece no SHA `a407556`; também não deve ser considerada publicada enquanto a origem de Pages e a sincronização não forem corrigidas.


### Atlas — Oficina de Augusto Calado · 17 de novembro de 2026

A cartografia do Ciclo das Inacabadas ganha seu primeiro lugar documentado em Alcântara, Lisboa: a oficina de pintura de letreiros de Augusto Calado, no rés do chão de um prédio cuja rua e número não são conhecidos.

- Nova prancha: `assets/atlas/oficina-augusto-calado.svg`. É uma reconstituição ilustrativa, não fotografia nem levantamento do imóvel.
- O marcador entrou no mapa simbólico do Mundo dos Mortais. Sua posição não representa coordenadas nem distâncias.
- A ficha canônica registra a oficina, o ofício de Calado, os objetos descritos no manuscrito, a aprendizagem de Rui e os limites de localização.
- Referências cruzadas: `A tinta do lado de fora` e `O endereço no verso`.
- A oficina e a sapataria de Palmira permanecem estabelecimentos distintos. A imagem representa a tabuleta sendo pintada, não instalada.
- Nenhuma função sobrenatural foi atribuída ao lugar.

### Verificação de publicação anterior · 17 de novembro de 2026

A execução React [44013673146](https://github.com/Vranuska/vespera-aeternum/actions/runs/44013673146) concluiu validação dos snapshots, testes, build, pré-renderização e deploy em 17/11 às 03:57 UTC. Ela ocorreu depois da execução Pages/Jekyll [43960034105](https://github.com/Vranuska/vespera-aeternum/actions/runs/43960034105), de 16/11 às 21:26 UTC. O artefato React é o último deploy confirmado no histórico consultado; a resposta HTTP e a aparência pública continuam sem verificação independente.

O preview Lovable permanece no commit interno `a4075564387553c8cca6cd1adeae3891e7dadbed`, anterior à rota dedicada do Arquivo das Eras. Nenhuma sincronização foi aplicada ao workspace nesta execução.

## Registro de 17 de novembro de 2026 — o lugar de uma folha

Foi acrescentado *O lugar de uma folha*, situado em 20 de dezembro de 1943 e narrado pela perspectiva limitada de Nuno. O capítulo retoma a segunda prova do sino, que permanecia com ele desde *O bolso de dentro*, e transforma a custódia numa decisão concreta: Nuno acondiciona a folha numa gaveta da tipografia de Lídia, sob uma chave que mantém consigo.

A nota que acompanha a prova registra somente o que Nuno presenciou. Ele viu a carga chegar e o sino sair da oficina, mas não acompanhou o transporte e não sabe onde o bronze se encontra. Lídia recebe uma cópia da nota, não a prova. Celeste não guarda o documento nem é chamada a assinar por algo que não viu.

O capítulo foi integrado como item 19 do Volume I e inserido na cronologia em 20/12/1943, depois de *As notas que ficaram de fora* e antes de *A mulher que guardou o negativo*. A ordem editorial permanece independente da cronologia. A origem e o trânsito do sino entre 1891 e 1943, a oitava linha e a estrela raspada continuam em aberto.

Os snapshots do frontend foram preparados para espelhar o catálogo e o índice canônicos. A validação de JSON, cobertura cronológica, ordem editorial e referências relacionadas foi executada após a integração. O workflow de publicação é acionado pelas alterações canônicas; build, testes e conclusão do deploy ainda precisam ser confirmados separadamente. A inspeção HTTP/visual do endereço público continuou indisponível nesta execução.

## Registro de 17 de novembro de 2026 — proveniência do sino e publicação

### Caderno de continuidade

Foi criado [Caderno de proveniência do sino de São Bartolomeu](dossie-sino-de-sao-bartolomeu.md), commit [1bcc9cd3](https://github.com/Vranuska/vespera-aeternum/commit/1bcc9cd3e9b9ad8409a768eebb3463ef867fd2e2). O documento examina sete capítulos do Ciclo das Inacabadas e separa fatos, recorrências e lacunas entre Porto/1886, Lisboa/1891 e Lisboa/1943.

O caderno registra a custódia das três provas, distingue o formulário de oito espaços e a folha de Artur, e aponta uma diferença terminológica: em uma passagem de *O bolso de dentro* aparece «segundo certificado», enquanto os capítulos que descrevem a impressão e a custódia chamam o objeto de «segunda prova». A versão publicada foi preservada; a orientação para futuras referências é usar «segunda prova», sem criar um documento adicional.

Nenhum fato novo foi acrescentado ao cânone. Não foram alterados entries.json, bestiario.json, atlas.json ou o índice do romance-mosaico. O novo caderno é editorial, não uma entrada literária.

### Correção de teste e publicação React

A inclusão do capítulo XIX tornou obsoleta uma expectativa em src/test/works.test.ts: o teste ainda esperava que *O endereço no verso* fosse a obra mais recente. Atualizei somente as expectativas da ordem por data, acrescentando *O lugar de uma folha* no primeiro lugar e deslocando as três entradas seguintes. Commit do frontend: [95303348](https://github.com/Vranuska/vespera-aeternum-blog/commit/95303348b70acd9d7699952fdcaf1e36d9914019).

A tentativa 1 do workflow 44100364052 falhou apenas nesse teste de ordem. A tentativa 2 passou: **50 testes em oito arquivos**. A validação dos snapshots encontrou 51 obras, 19 capítulos, 19 itens cronológicos, 32 itens fora da cronologia, um dossiê do Bestiário, quatro menções e dez lugares no Atlas. O build pré-renderizou 87 páginas, incluindo /arquivo-das-eras/ e /diarios/2026-11-17-o-lugar-de-uma-folha/.

A publicação React foi concluída com sucesso às 21:43:45 UTC, no [workflow 44100364052, tentativa 2](https://github.com/Vranuska/vespera-aeternum/actions/runs/44100364052). O endereço informado pelo próprio job foi https://vranuska.github.io/vespera-aeternum/.

A execução dinâmica Pages/Jekyll [44100372594](https://github.com/Vranuska/vespera-aeternum/actions/runs/44100372594) terminou às 14:12:02 UTC, antes do deploy React. O estado de Source em Settings → Pages não pôde ser lido pelas ferramentas disponíveis, e a resposta HTTP/visual do domínio não foi obtida. Portanto, o sucesso do job React está confirmado; a aparência efetivamente servida ao visitante não foi verificada de forma independente.

### Sincronização Lovable

A branch main do frontend avançou apenas nos snapshots offline, na ordem editorial e no teste. Nenhum arquivo de layout, CSS, imagem ou componente visual foi alterado nesta execução.

O preview continua no commit interno a4075564387553c8cca6cd1adeae3891e7dadbed, enquanto a branch main chegou a 95303348. A tentativa de sincronizar exclusivamente src/data/entries-fallback.json, src/data/editorial-fallback.json, src/data/reading-order.ts e src/test/works.test.ts foi recusada pelo Lovable porque o workspace gratuito está sem créditos. A recusa ocorreu antes de qualquer edição; o preview permanece sem sincronização.

A composição aprovada em 5a038b8 foi preservada. Não houve redesenho, alteração de SiteChrome, CSS, tipografia, cores, assets ou hierarquia visual.

### Nota de publicação posterior — 17 de novembro de 2026

A primeira tentativa do workflow React 44184359506 concluiu às 21:53:21 UTC. A execução dinâmica Pages/Jekyll 44184359254 terminou às 21:53:27 UTC, depois dela. O commit do próprio diário também disparou a execução Jekyll 44184579975, concluída às 21:54:36 UTC.

Para que o último deploy não ficasse no artefato Jekyll, a tarefa build-and-deploy da execução React 44184359506 foi repetida. A tentativa 2 concluiu às 21:55:33 UTC, depois do Jekyll mais recente. Os 50 testes voltaram a passar, as 87 páginas foram pré-renderizadas e o deploy React foi reportado como bem-sucedido. A última publicação confirmada no histórico consultado é, portanto, React.

O Pages/Jekyll continua a ser acionado por pushes. A configuração Source não pôde ser lida pelas ferramentas disponíveis; futuras alterações podem voltar a criar uma publicação Jekyll posterior. A resposta HTTP e a aparência pública continuam sem verificação independente.


### Revisão de acabamento e publicação da versão 4 — 17 de novembro de 2026

A revisão das críticas de ritmo e continuidade produziu a quarta versão de *A maré não assina recibos*. Foram fundidos 31 intervalos de parágrafo que isolavam ações ou respostas sem acrescentar tensão; a contagem «Um. Dois. Três.» permanece separada porque organiza a percepção de Nao durante o acidente. A versão termina na bota, sem comentário posterior. O recibo conserva a divergência de destino e peso da porcelana; a resposta «Já me custou o salário» foi mantida por ser mais concreta e menos teatral do que a alternativa de confronto sugerida.

A revisão também corrigiu uma falha de publicação: embora a versão 3 já existisse no arquivo de versões, o entries.json e o fallback do aplicativo ainda serviam a primeira versão. Agora a leitura corrente usa a v4. O arquivo original e as versões 1, 2 e 3 permanecem preservados. O entries.json canônico e src/data/entries-fallback.json têm o mesmo conteúdo e o mesmo blob SHA 036a3728b2f66004526a22ab7bf812b3d2a0d604. Foi acrescentado um teste que exige o recibo contestado e o encerramento na bota.

A publicação React [44190121858](https://github.com/Vranuska/vespera-aeternum/actions/runs/44190121858) concluiu às 22:29:20 UTC, depois da publicação dinâmica Jekyll [44190123466](https://github.com/Vranuska/vespera-aeternum/actions/runs/44190123466), concluída às 22:27:23 UTC. A espera de 120 segundos entre o upload e o deploy React evitou a colisão anterior. O build validou 51 obras, 19 capítulos, 19 itens cronológicos, 32 fora da cronologia, **51 testes em oito arquivos** e 87 páginas pré-renderizadas, incluindo o Arquivo das Eras e o diário de Nao.

Nenhuma alteração visual foi feita. A branch main do frontend chegou a 2e266866, mas o preview Lovable continua em a407556; a sincronização ainda está bloqueada pela falta de créditos do workspace. A composição aprovada em 5a038b8 não foi redesenhada. O job React reportou sucesso, mas a resposta HTTP e a aparência pública não foram verificadas de forma independente. O Pages/Jekyll continua ativo; a espera de 120 segundos é uma proteção provisória até que a origem seja alterada para GitHub Actions.


## Revisão literária — 17 de novembro de 2026 · *A maré não assina recibos*, versão 5

A versão 4 permanece preservada. A versão 5 é a nova versão de leitura e aplica uma revisão estritamente localizada, sem reabrir a estrutura do conto:

- a contagem do acidente mantém os três tempos, mas o terceiro se liga ao resultado: «Três. A corda cedeu»;
- duas quebras narrativas foram fundidas para reduzir o efeito de frase isolada sem apagar o ritmo defensivo de Nao;
- a ponta solta da etiqueta passa a ser uma ação não realizada, sem explicar a culpa em voz alta;
- no recibo, Nao coloca a cópia do manifesto ao lado da contestação e diz ao escriturário que ele não precisa concordar, apenas entregar os dois documentos. O peso institucional passa pela ação e pela custódia, não por uma máxima;
- o último movimento elimina a repetição imediata da bota. A mãe serve duas tigelas, o terceiro prato fica no armário, a carta é colocada sob a tigela de Nao e a última imagem permanece sendo a bota limpa por dentro.

O ID editorial e a posição fora da cronologia do Volume I não mudam. entries.json e o fallback do frontend são atualizados com os mesmos 202 parágrafos; as versões anteriores, o original e a v1 permanecem intactos.

## Publicação — 17 de novembro de 2026 · correção da concorrência Pages

A execução dinâmica Pages `44191141812` concluiu às 22:38:44 UTC, depois da execução React `44191143605`, concluída às 22:35:37 UTC. A espera fixa de 120 segundos não cobria essa duração e não assegurava a ordem final dos artefatos.

O workflow passa a consultar a API de Actions com permissão somente de leitura, localizar a execução dinâmica do mesmo SHA e aguardar seu término antes de chamar `deploy-pages`. Se a origem do Pages for trocada para GitHub Actions, a execução dinâmica deixa de aparecer e a etapa prossegue após a janela de descoberta. A alteração não muda o conteúdo nem a composição visual. A troca da origem em Settings → Pages continua sendo a solução definitiva e requer acesso às configurações do repositório.


## Ciclo editorial — 18 de novembro de 2026 · Caderno das Travessias

O ciclo de hoje acrescenta três peças coordenadas ao fio de Nao Sakamoto e Sōta:

- *O primeiro quarto em terra* — narrativa em terceira pessoa limitada por Sōta, em Hakodate, 12/01/1922. A consequência concreta da carta de dezembro é um endereço temporário, não um regresso.
- *Carta de Nao a Sōta* — documento datado de 05/01/1922. Registra a prova de escrituração e a suspensão ainda sem resposta; não prova aprovação, dispensa ou contratação.
- *Porto de Hakodate* — décimo primeiro lugar ilustrado do Atlas, com prancha vetorial independente em \`assets/atlas/hakodate-porto-1922.svg\`. A reconstituição não identifica cais, edifício ou coordenadas.

A ordem editorial secundária é *A maré não assina recibos* → *O primeiro quarto em terra* → *Carta de Nao a Sōta*. A cronologia permanece distinta: novembro–dezembro de 1921, 5 de janeiro de 1922 e 12 de janeiro de 1922. O arco não entra no Volume I nem recebe numeração de capítulo.

A classificação também foi corrigida: *A maré não assina recibos* tinha data de universo conhecida, mas estava na lista de obras sem posição cronológica. Agora aparece na era de 1921; a seção residual passa a chamar-se «Sem posição cronológica». O Volume I continua com 19 capítulos.

A composição aprovada do portal não foi alterada. A prancha é um asset novo, separado, vetorial e com fundo transparente. As fontes históricas e os limites de localização foram registrados no caderno do Atlas.



## Auditoria de integração — 18 de novembro de 2026 · Caderno das Travessias

O ciclo editorial desta data já estava completo no repositório ao iniciar esta auditoria. Não foi criado um segundo trio de peças, para respeitar a regra de um único ciclo por dia.

### Verificação do conteúdo canônico

- `entries.json`: 53 obras, sem IDs duplicados e sem referências relacionadas quebradas.
- As duas obras do ciclo estão preservadas: *O primeiro quarto em terra* (96 parágrafos) e *Carta de Nao a Sōta* (15 parágrafos). Os manuscritos foram relidos; a carta separa o que comprova, sugere e não permite concluir.
- O índice mantém 19 capítulos do Volume I, 22 registros cronológicos e 31 obras sem posição cronológica. O Caderno das Travessias permanece numa sequência editorial própria: *A maré não assina recibos* → *O primeiro quarto em terra* → *Carta de Nao a Sōta*. A ordem editorial coloca a narrativa antes da carta; a cronologia conserva 5 e 12 de janeiro de 1922.
- O Atlas contém onze lugares. O Porto de Hakodate possui história, limites, habitantes, conexões e prancha vetorial independente. O cais e a hospedaria de Sōta continuam sem endereço ou coordenadas.
- Os fallbacks de obras, índice editorial, Atlas e Bestiário no frontend GitHub têm os mesmos blobs SHA dos arquivos canônicos. O Bestiário conserva uma ficha completa e quatro menções; nenhuma criatura nova foi inventada para completar o trio.

### Estado da sincronização Lovable/GitHub

A auditoria do projeto Lovable `67d4aa78-e2dc-46a4-bf90-f7e8039f51c3` encontrou o projeto pronto e marcado como publicado, mas com dados antigos: o fallback contém 31 obras, não existe a rota `/arquivo-das-eras`, o mapa estático não contém Otaru nem Hakodate e os arquivos de fallback canônicos do Atlas e do Bestiário não estão presentes nessa versão. O último commit interno reportado pelo Lovable é `82cacb5c3e0f3b93d7b0caa8c455d7b506b6fa3a`; o frontend GitHub já contém a rota, os 53 registros e os onze lugares.

O workspace Lovable está no plano Free e a tentativa de auditoria sem edição foi recusada por falta de créditos. Nenhum arquivo, layout ou publicação do Lovable foi alterado. A sincronização deve aguardar créditos e ser feita somente sobre dados, rotas e renderizadores necessários, sem substituir a composição Reforged aprovada.

O preview atual, o preview aprovado e a produção Lovable foram tentados separadamente, mas não retornaram conteúdo legível neste ambiente. O projeto reporta `is_published: true`; isso não confirma que a produção esteja na versão atual. O endereço público e o preview continuam sem inspeção visual confirmada.

### Publicação e validação

O commit frontend `6712c910d16dd6f7ef05392f965f473d1ad1ccb7` não apresenta status checks no endpoint consultado. Portanto, não se declara build ou testes aprovados para este ciclo. O endereço GitHub Pages também não pôde ser lido. A origem de Pages em GitHub Actions ainda não foi confirmada nas configurações do repositório; a alteração em Settings → Pages permanece pendente de acesso.

Fontes históricas consultadas para Hakodate: [Hakodate City — Information on Port of Hakodate](https://www.city.hakodate.hokkaido.jp/docs/2019020800086/) e [Travel Hakodate — History](https://www.hakodate.travel/en/about/history/).


---

## Ciclo editorial integrado — 20 de novembro de 2026 · Caderno de Eva

### As três entradas

1. **As estrelas do lado de dentro** — memória de Azrakhel anterior ao desaparecimento de Eva. A cena desloca a relação entre os dois para um gesto cotidiano: Eva escolhe os próprios sapatos e Azrakhel aprende a não decidir por ela.
2. **Folha de prova de um par para Eva** — documento ficcional da oficina. A anotação da sapateira fornece uma perspectiva profissional independente da lembrança do pai e explicita o que o papel comprova, sugere e não permite concluir.
3. **Dossiê de Azrakhel** — ficha canônica aberta no Bestiário, com um retrato e duas imagens de galeria em SVGs separados. O dossiê diferencia o uso observado de uma espada de qualquer poder não demonstrado; não atribui domínio do fogo, posto infernal ou identidade à mulher de vestido cinza.

### Continuidade editorial e visual

- O arquivo canônico passa a conter 55 obras. Os dois novos IDs estão no catálogo de leitura e ligados explicitamente ao manuscrito de origem.
- O Volume I permanece com 19 capítulos. O Caderno de Eva possui uma ordem própria — memória, depois documento — sem numeração de capítulo.
- A cronologia do universo permanece com 22 registros. As duas entradas novas ficam em `unplaced_archive`, pois a data de publicação não é uma data de acontecimento e os manuscritos não fornecem data absoluta.
- O Bestiário passa a ter dois dossiês completos (Eithne e Azrakhel) e três menções (Ithariel, Aurelian e Malpherion).
- O possível vínculo entre os sapatos encomendados na memória e o sapatinho encontrado no Salão foi mantido como questão aberta. Nenhum encantamento ou poder foi atribuído ao bordado.
- Foram criados três assets vetoriais independentes: retrato de Azrakhel, segunda chegada ao Salão e prova dos sapatos de Eva. São reconstituições ilustrativas, não fotografias ou documentos históricos.
- A composição Reforged aprovada não foi redesenhada. O frontend já dispõe de renderizador de dossiê canônico; a integração foi feita por dados e assets, sem introduzir hero, grade protagonista ou alteração tipográfica.

### Integração e publicação

O frontend recebeu primeiro os snapshots de `entries.json`, `bestiario.json` e `editorial/indice-romance-mosaico.json`, e depois os arquivos canônicos foram atualizados com os mesmos conteúdos para satisfazer a comparação byte a byte do workflow. As validações locais de estrutura e as leituras de retorno ainda devem ser registradas após a execução de CI.

A configuração de GitHub Pages deve continuar sendo verificada em Settings → Pages → Build and deployment → Source. Enquanto a origem for publicação por branch, o workflow conserva uma etapa de espera pela execução Jekyll antes de entregar o artefato React. O indicador `is_published` do Lovable não substitui inspeção independente do preview e da produção.


## Fechamento da auditoria — 20 de novembro de 2026 · Caderno de Eva

A inspeção dos repositórios confirmou que o trio acima já estava criado e integrado. Esta revisão não criou um segundo conjunto de entradas: corrigiu a apresentação do dossiê no índice do Bestiário, removeu uma leitura indevida de habilidade e reparou um teste de Atlas que ainda esperava dez pranchas quando o cânone contém onze.

### Conferência do cânone e da ordem

- `entries.json` contém 55 obras. Os IDs `2026-11-20-as-estrelas-do-lado-de-dentro` e `2026-11-20-folha-de-prova-de-eva` existem uma única vez, têm ligações relacionadas válidas e ocupam as posições 1 e 2 da série secundária **Caderno de Eva**.
- O índice editorial tem 19 capítulos no Volume I, 22 itens com posição cronológica e 33 fora da cronologia. As duas peças permanecem fora do Volume I e em `unplaced_archive`: a data de publicação não determina o tempo do universo, e os manuscritos não fornecem data absoluta.
- `bestiario.json` contém dois dossiês completos e três menções. Azrakhel é a terceira entrada deste ciclo por meio de um dossiê canônico; a oficina permanece sem ficha no Atlas porque nome, domínio e localização não foram estabelecidos.
- O dossiê mantém a contradição entre a declaração de Azrakhel e a fala do reflexo de Vespera sobre Eva. O bordado não recebeu propriedades sobrenaturais. A única aptidão registrada é o manejo de arma branca, efetivamente testemunhado.
- Os três SVGs de Azrakhel são arquivos independentes. O retrato e as duas cenas da galeria estão identificados como reconstituições ilustrativas; não são tratados como fotografias.

### Correções na integração

- No frontend, `src/test/atlas.test.ts` foi corrigido de dez para onze pranchas ilustradas.
- `src/data/characters.ts` deixou de apresentar o parentesco de Eva como fato confirmado e passou a mencionar a contestação do reflexo. Também foi retirada a formulação “Incendeia sobremesas sem querer” do conjunto de traços, pois o manuscrito não demonstra controle do fogo.
- `src/test/bestiary.test.ts` ganhou uma regressão que verifica a apresentação não conclusiva de Azrakhel e a ausência do traço ambíguo.
- O README canônico foi alinhado à mesma distinção sobre Eva e atualizado para indicar os dois dossiês completos.

Commits canônicos: [catálogo e manuscritos — f0c10dc](https://github.com/Vranuska/vespera-aeternum/commit/f0c10dc7564959c4bf8620d6e0e32e0a86d3ec06), [dossiê — e6ab271](https://github.com/Vranuska/vespera-aeternum/commit/e6ab271320b28c12390edb60f3be56823debe6bf), [ordem editorial — a272b09](https://github.com/Vranuska/vespera-aeternum/commit/a272b09a10106c3b747f29fa8004df13eff879cc), [gravura de Eva — b71d913](https://github.com/Vranuska/vespera-aeternum/commit/b71d9130b14a953a90a692a1196a638a5f3ddeba), [registro do ciclo — 2bda7ff](https://github.com/Vranuska/vespera-aeternum/commit/2bda7ff7532b9a41552251b572c8b3787aa347a8) e [README — e7493f7](https://github.com/Vranuska/vespera-aeternum/commit/e7493f7a78cea159a7f4e7fc1935423414249416).

Commits do frontend: [correção da contagem do Atlas — 0234058](https://github.com/Vranuska/vespera-aeternum-blog/commit/0234058f6b42592c094b8f04e2d2c40d0e971709), [resumo de Azrakhel — 6db1b46](https://github.com/Vranuska/vespera-aeternum-blog/commit/6db1b46ed377511b1afd4178f1b65cd8a032a3e0) e [teste de regressão — 18b3fad](https://github.com/Vranuska/vespera-aeternum-blog/commit/18b3fadc288afd58da4d86deafc50e08ded11641).

### CI, build e deploy

A execução [44733566494](https://github.com/Vranuska/vespera-aeternum/actions/runs/44733566494), no commit canônico `e7493f7`, terminou com sucesso. Os logs confirmam:

- 55 obras, 19 capítulos, 22 registros cronológicos, 33 fora da cronologia e todas as referências relacionadas válidas;
- 2 dossiês do Bestiário, 3 menções e 11 lugares no Atlas, com snapshots sincronizados;
- 8 arquivos de teste aprovados e 54 testes aprovados;
- build e pré-renderização de 91 páginas, incluindo o Arquivo das Eras, os dois novos manuscritos e `/bestiario/azrakhel`;
- artefato Pages enviado e etapa React de publicação concluída com “Reported success”.

A execução dinâmica Pages/Jekyll do mesmo SHA, [44733566208](https://github.com/Vranuska/vespera-aeternum/actions/runs/44733566208), terminou antes do deploy React. O workflow aguardou essa execução e publicou o artefato React depois dela. Isso confirma a ordem desta publicação, mas não muda a configuração da origem: **Settings → Pages → Build and deployment → Source** ainda deve ser conferido manualmente e, se continuar como publicação por branch, alterado para **GitHub Actions**. A etapa de espera do workflow é apenas uma proteção provisória.

O deploy React mais recente confirmado corresponde ao commit `e7493f7`. As rotas emitidas no artefato são [Arquivo das Eras](https://vranuska.github.io/vespera-aeternum/arquivo-das-eras/), [As estrelas do lado de dentro](https://vranuska.github.io/vespera-aeternum/diarios/2026-11-20-as-estrelas-do-lado-de-dentro/), [Folha de prova de um par para Eva](https://vranuska.github.io/vespera-aeternum/diarios/2026-11-20-folha-de-prova-de-eva/) e [Dossiê de Azrakhel](https://vranuska.github.io/vespera-aeternum/bestiario/azrakhel/). **A inspeção HTTP e visual independente não foi concluída**: as tentativas de abrir a produção e as rotas no ambiente disponível retornaram erro de acesso. Portanto, build, pré-renderização e deploy estão confirmados; a aparência no navegador público não está.

### Estado do Lovable

O projeto `67d4aa78-e2dc-46a4-bf90-f7e8039f51c3` continua marcado como publicado e pronto, mas seu último commit interno é `82cacb5c3e0f3b93d7b0caa8c455d7b506b6fa3a`, anterior às alterações atuais. Na revisão desse ref não havia rota `/arquivo-das-eras`, e os fallbacks/índices permaneciam antigos. Nenhuma edição ou publicação foi feita no workspace Lovable; o preview e a produção Lovable não puderam ser inspecionados separadamente neste ambiente. A sincronização deve levar os dados e componentes do frontend GitHub para o workspace sem reconstruir a composição Reforged aprovada.

### Fios que permanecem abertos

O próximo desenvolvimento do Caderno de Eva deve confrontar, sem resolver por conveniência, a memória da oficina com o sapatinho encontrado no Salão: ainda não sabemos se são o mesmo par, como chegou à Casa, nem por que o reflexo nega o parentesco. Permanecem sem identificação a sapateira, a oficina, a mulher de vestido cinza e quem sugeriu os lírios. Nenhuma dessas lacunas deve ser preenchida no Atlas ou no Bestiário antes de haver testemunho narrativo.
