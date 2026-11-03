/* Vespera Aeternum: content stays text; artwork stays replaceable standalone assets. */
const $=(selector,base=document)=>base.querySelector(selector);
const assets='assets/png/';
const humanize=s=>String(s||'').split('-').filter(Boolean).map(v=>v.charAt(0).toLocaleUpperCase('pt-BR')+v.slice(1)).join(' ');
const host=$('#app');
let works=[];
let demonstration=false;
const example=[{
 id:'demonstracao-o-lugar-onde-a-agua-ferve', title:'O lugar onde a água ferve',
 date:'28 de outubro de 2026', place:'Lisboa · 1891',series:{id:'ciclo-das-inacabadas',title:'Ciclo das Inacabadas',position:8},
 paragraphs:['Lisboa, novembro de 1891.','A casa cheirava a ferrugem, serragem e chuva antiga. Leonor Ferreira observava o fogão de ferro como quem avalia um animal não domesticado. Prometia calor, refeições decentes e talvez um pouco de estabilidade. O problema é que lhe faltavam uma porta e uma perna.','Ainda assim, decidira ficar com ele. Havia aprendido, desde cedo, que certas teimosias merecem abrigo.'],
 related_entries:[]
}];
function node(tag,className,text){const e=document.createElement(tag);if(className)e.className=className;if(text!==undefined)e.textContent=text;return e}
function img(file,cls='',alt=''){const i=node('img',cls);i.src=assets+file;i.alt=alt;i.loading='lazy';i.decoding='async';return i}
function link(href,label,cls=''){const a=node('a',cls,label);a.href=href;return a}
function choose(route){const next='#'+route;if(location.hash===next)render();else location.hash=next}
function norm(x){return String(x??'').toLocaleLowerCase('pt-BR').normalize('NFD').replace(/[\u0300-\u036f]/g,'')}
function roman(x){const n=Number(x);const map=['','I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII','XIII','XIV','XV'];return map[n]||String(n||'')}
function orderWorks(list){const bySeries=(a,b)=>a.series?.id===b.series?.id?Number(a.series?.position||0)-Number(b.series?.position||0):0;return [...list].sort((a,b)=>{if(a.series?.id==='ciclo-das-inacabadas'&&b.series?.id!=='ciclo-das-inacabadas')return -1;if(b.series?.id==='ciclo-das-inacabadas'&&a.series?.id!=='ciclo-das-inacabadas')return 1;return bySeries(a,b)||String(a.id).localeCompare(String(b.id))})}
function setActive(route){document.querySelectorAll('[data-route]').forEach(a=>{const current=a.dataset.route===route||route.startsWith('conto/')&&(a.dataset.route==='diarios');if(current)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')})}
function disclaimer(){if(!demonstration)return null;const t=node('p','eyebrow','Prévia de layout · Arquivo de exemplo');t.style.marginBottom='18px';return t}
function createHome(){const h=node('div','home-intro');h.append(img('monograma-ilustrado.png','home-emblem'),node('div','home-descriptor','DIÁRIOS · CARTAS · MAPAS · BESTIÁRIO · ARQUIVO'),node('h1','','Vespera Aeternum'),img('divisor-principal.png','top-ornament'),node('p','home-quote','“Não sou a Morte. Sou aquilo que permanece entre o desejo de existir e a obrigação de terminar.”'));const a=node('div','home-actions');a.append(link('#diarios','Explorar os diários  ❯','paper-link'),link('#ordem','Ordem de leitura  ❯','paper-link'));h.append(a);const n=disclaimer();if(n)h.prepend(n);host.replaceChildren(h);document.title='Vespera Aeternum — Início'}
function renderIndex(mode){const box=node('section','paper-list');const title={diarios:'Todos os diários',ordem:'Ordem de leitura',cronologia:'Cronologia',personagens:'Personagens',lugares:'Lugares',objetos:'Objetos',cartas:'Cartas',atlas:'Atlas dos lugares',bestiario:'Bestiário',sobre:'Sobre Vespera'}[mode]||'Os arquivos';box.append(node('span','eyebrow','OS ARQUIVOS DE VESPERA'),node('h1','',title));if(mode==='sobre'){box.append(node('p','','Não sou a Morte. Sou aquilo que permanece entre o desejo de existir e a obrigação de terminar.'));box.append(node('p','','Um universo literário de histórias que se cruzam entre épocas, lugares e personagens.'));host.replaceChildren(box);return}
 const descriptions={diarios:'Escolha um manuscrito para ler, um de cada vez.',ordem:'A leitura segue a sequência dos capítulos dentro de cada ciclo.',cronologia:'Os manuscritos registrados, com suas datas.',personagens:'Percorra os manuscritos para encontrar suas personagens.',lugares:'Lugares que guardam histórias.',objetos:'Objetos e indícios que atravessam o arquivo.',cartas:'Correspondências registradas no arquivo.',atlas:'O atlas ilustrado está em preparação. Enquanto isso, explore os lugares mencionados nos diários.',bestiario:'O bestiário ilustrado está em preparação.'};box.append(node('p','',descriptions[mode]||''));
 let shown=orderWorks(works);
 if(mode==='cartas')shown=shown.filter(w=>/carta/i.test(w.title+' '+(Array.isArray(w.genres)?w.genres.join(' '):w.genre||'')));
 if(mode==='cronologia')shown=[...shown].sort((a,b)=>String(a.date||'').localeCompare(String(b.date||'')));
 if(mode==='bestiario')shown=[];
 if(!shown.length)box.append(node('p','empty-state','Ainda não há registros nesta seção.'));
 for(const w of shown){const b=node('button','');b.type='button';b.append(node('small','',w.series?.title?`${w.series.title} · Capítulo ${roman(w.series.position)}`:(w.date||'MANUSCRITO')),document.createTextNode(w.title));b.addEventListener('click',()=>choose('conto/'+encodeURIComponent(w.id)));box.append(b)}
 const d=disclaimer();if(d)box.prepend(d);host.replaceChildren(box);document.title=title+' — Vespera Aeternum'}
function story(w){const all=orderWorks(works);const ix=all.findIndex(e=>e.id===w.id);const article=node('article','story');article.id='manuscrito';const d=disclaimer();if(d)article.append(d);
 article.append(node('time','',w.date||'Fragmento sem data'),node('h1','',w.title),img('divisor-simples.png','title-rule'));
 if(w.series?.title)article.append(node('div','chapter-series',`Volume I — ${w.series.title} · Capítulo ${roman(w.series.position)}`));
 const isStove=/lugar onde a agua ferve/.test(norm(w.title));
 if(isStove){const fig=node('figure','chapter-art');fig.append(img('gravura-floral-ilustrada.png','botanical'));const frame=node('div','illustration-frame');frame.append(img('ilustracao-fogao.png','art-picture','Fogão de ferro antigo em uma cozinha de Lisboa'));frame.append(img('moldura-antiga-ilustrada.png','frame-overlay'));const cap=node('figcaption','','O FOGÃO SEM PORTA');cap.append(node('span','','LISBOA, 1891'));frame.append(cap);fig.append(frame);article.append(fig)}
 if(w.place&&!isStove)article.append(node('div','chapter-deck',w.place));
 if(isStove)article.append(node('blockquote','chapter-deck','Leonor Ferreira desconfiava de homens que prometiam voltar e de fogões que prometiam aquecer. Dos primeiros possuía alguma experiência. Dos segundos, acabava de adquirir um exemplar.'));
 const text=node('div','chapter-text');for(const [idx,p] of (w.paragraphs||[]).entries()){const kind=p.trim()==='✧'?'break':idx===0?'opening-paragraph':'';text.append(node('p',kind,p))}article.append(text);
 const meta=node('section','story-meta');meta.setAttribute('aria-label','Informações do manuscrito');
 const related=(w.related_entries||[]).map(id=>works.find(e=>e.id===id)).filter(Boolean);
 const participants=Array.isArray(w.characters)?w.characters:[];
 const data=[
  ['icon-conto.png','TIPO','CONTO'],
  ['icon-data.png','CRONOLOGIA',w.date||'SEM DATA'],
  ['icon-local.png','LOCAL',w.place||'NÃO INFORMADO'],
  ['icon-personagens.png','PERSONAGENS',participants.slice(0,2).map(humanize).join(' · ')||'—'],
  ['icon-conecta.png','CONECTA COM',related[0]?.title||'—'],
  ['icon-documento.png','ORDEM DE LEITURA',w.series?.position?'CAPÍTULO '+roman(w.series.position):'MANUSCRITO INDEPENDENTE']
 ];
 data.forEach(([file,label,val])=>{const row=node('div','meta-item');row.append(img(file));const copy=node('div','meta-text');copy.append(node('strong','',label),node('span','',val));row.append(copy);meta.append(row)});
 article.append(meta);
 if(related.length){const relatedNav=node('nav','story-related');relatedNav.setAttribute('aria-label','Manuscritos relacionados');relatedNav.append(node('span','','Também neste arquivo: '));related.forEach((entry,i)=>{if(i)relatedNav.append(document.createTextNode(' · '));relatedNav.append(link('#conto/'+encodeURIComponent(entry.id),entry.title))});article.append(relatedNav)}
 
 const nav=node('nav','reading-nav');nav.setAttribute('aria-label','Navegação dos capítulos');nav.append(ix>0?link('#conto/'+encodeURIComponent(all[ix-1].id),'❮  '+all[ix-1].title):link('#ordem','❮  Ordem de leitura'));nav.append(link('#ordem','☷  ÍNDICE'));nav.append(ix<all.length-1?link('#conto/'+encodeURIComponent(all[ix+1].id),all[ix+1].title+'  ❯'):link('#diarios','Todos os diários  ❯'));article.append(nav);
 host.replaceChildren(article);document.title=w.title+' — Vespera Aeternum';}
function render(){if(!works.length)return;const route=decodeURIComponent(location.hash.replace(/^#/,'')||'inicio');setActive(route);if(route==='inicio')createHome();else if(route.startsWith('conto/')){const w=works.find(e=>e.id===route.slice(6));if(w)story(w);else renderIndex('diarios')}else if(works.some(x=>x.id===route)){choose('conto/'+encodeURIComponent(route));return}else renderIndex(route);window.scrollTo({top:0,behavior:'instant'})}
async function loadWorks(){try{const r=await fetch('./entries.json',{cache:'no-cache'});if(!r.ok)throw Error('not local');const list=await r.json();if(!Array.isArray(list)||!list.length)throw Error('empty');works=list;}catch(e){works=example;demonstration=true;}render()}
window.addEventListener('hashchange',render);
const overlay=$('#search-dialog'),input=$('#search-field'),results=$('#search-results');
$('#search-open').addEventListener('click',()=>{overlay.hidden=false;input.value='';updateSearch();input.focus()});
$('#search-close').addEventListener('click',()=>{overlay.hidden=true;$('#search-open').focus()});overlay.addEventListener('click',e=>{if(e.target===overlay)overlay.hidden=true});
window.addEventListener('keydown',e=>{if(e.key==='Escape'&&!overlay.hidden)overlay.hidden=true});
function updateSearch(){const s=norm(input.value);results.replaceChildren();for(const w of works.filter(w=>!s||norm(`${w.title} ${w.place||''} ${w.series?.title||''}`).includes(s)).slice(0,30)){const b=node('button','',w.title);b.addEventListener('click',()=>{overlay.hidden=true;choose('conto/'+encodeURIComponent(w.id))});results.append(b)}if(!results.children.length)results.append(node('p','','Nenhum manuscrito encontrado.'))}
input.addEventListener('input',updateSearch);
$('#theme-switch').addEventListener('click',()=>document.body.classList.toggle('illuminated'));
loadWorks();
