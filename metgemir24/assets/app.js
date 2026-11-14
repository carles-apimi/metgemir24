/* iShowi · Metge Mir 24 · showroom v0.1 (demo) — dades a data/promocion.json */
{
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
let D=null, L='es';
try{const q=localStorage.getItem('mm24-lang');if(q==='ca'||q==='es')L=q}catch(e){}
const T={
es:{intro:'12 viviendas de obra nueva en el centro de Sabadell. Pisos de 2 y 3 dormitorios y tres dúplex con terraza.',enter:'Entrar al showroom',introFoot:'Imágenes de carácter ilustrativo · Showroom iShowi en versión demo',agents:'Agentes',
heroTitle:'Vive en el centro de Sabadell',heroSub:'Carrer del Metge Mir, 24 · a 5 minutos a pie de Sabadell Centre (R4)',
vivTitle:'Viviendas',vivLead:'Doce viviendas en planta baja, primera y segunda, y tres dúplex con terraza en el ático. Elige una para ver su plano, su plano 3D y su precio.',
priceNote:'Precios sin IVA (10 %) salvo que se indique. Superficies orientativas, sujetas a variaciones de obra y licencia. Información según el RD 515/1989 disponible en la oficina de venta.',
refNote:'Imágenes y planos orientativos, sin valor contractual',
all:'Todas',allFloors:'Todas las plantas',beds:'dorm.',anyBeds:'Cualquier nº de dormitorios',sortP:'Precio: de menor a mayor',sortPd:'Precio: de mayor a menor',sortS:'Superficie',
units:'viviendas',plan:'Plano',plan3d:'Plano 3D',view:'Ver',config:'Configurar',contact:'Contactar',compare:'Comparar',compareN:'Comparar ({n})',
built:'Construida',useful:'Útil',ext:'Exterior',bedsL:'Dormitorios',bathsL:'Baños',floorL:'Planta',typeL:'Tipología',priceL:'Precio',vatIncl:'IVA incl.',plusVat:'+ IVA',duplex:'Dúplex',studio:'+ estudio',
pati:'patio',balco:'balcón',terrassa:'terraza',
st:{available:'Disponible',reserved:'Reservada',sold:'Vendida'},
dock:{viv:'Viviendas',park:'Aparcamiento',cfg:'Configurador',ent:'Entorno',sol:'Sol',obra:'Obra y pagos',cal:'Calidades',gal:'Galería',con:'Contacto'},
views:{v1:'Esquina',v2:'Acceso',v3:'Fachada',v4:'Balcones',v5:'Ático',v6:'Terraza'},
floorUnits:'Viviendas en esta planta',park:'Aparcamiento',parkLead:'Plazas de coche, de moto y trastero en el sótano. Toca una plaza para verla y su recorrido desde la rampa.',
parking:'Plaza de coche',moto:'Plaza de moto',storage:'Trastero',addToCfg:'Añadir a mi configuración',askSlot:'Preguntar por esta plaza',pickSlot:'Elige una plaza en el plano',
parkNote:'Precios sin IVA. Las plazas y el trastero se venden como anexo de una vivienda (IVA 10 %); vendidos por separado tributan al 21 %.',
cfgSteps:['Vivienda','Suelo','Cocina','Baños','Otros','Tus datos','Resumen'],
cfgProv:'Acabados provisionales pendientes de validación del promotor. Los suplementos se confirmarán antes de la reserva.',
cfgAmb:'Imagen de ambiente de referencia',chooseUnit:'¿Qué vivienda quieres configurar?',
cat:{paviment:'Pavimento general',cuina_frontals_baixos:'Frentes bajos de cocina',cuina_frontals_alts:'Frentes altos de cocina',cuina_taulell:'Encimera',cuina_led:'Iluminación LED',bany_paviment:'Pavimento de baño',bany_parets:'Revestimiento de paredes',bany_paret_especial:'Pared especial (ducha)',bany_moble:'Mueble de lavabo',fusteria_vidres:'Acristalamiento'},
ref:'Opción de referencia',supp:'Suplemento a confirmar',next:'Siguiente',prev:'Atrás',seeSum:'Ver resumen',total:'Precio vivienda + anexos',
annexes:'Anexos',noSlot:'Sin plaza',noMoto:'Sin plaza de moto',noStore:'Sin trastero',
gate:'Para ver el resumen y recibirlo, déjanos tus datos.',name:'Nombre y apellidos',phone:'Teléfono / WhatsApp',email:'Correo electrónico',msg:'Mensaje (opcional)',
consent:'Acepto que Metge Mir 24 trate mis datos para responder a mi solicitud, según la política de privacidad.',privacy:'Ver política de privacidad',
sumTitle:'Resumen de tu configuración',finishes:'Acabados elegidos',sendMail:'Enviar por correo',copy:'Copiar resumen',copied:'Resumen copiado',
mailHint:'Si tu dispositivo no abre el correo, escríbenos a',sumNote:'Configuración orientativa sin valor contractual. Precio de la vivienda y anexos sin IVA; acabados con suplemento a confirmar.',
ent:'Entorno',entLead:'Todo lo del día a día a pie: tren R4, bus, campus UAB, supermercados y el centro de Sabadell.',scale:['A pie','Sabadell','Área metropolitana'],
entNote:'Esquema orientativo, no a escala exacta. Distancias y tiempos estimados, pendientes de confirmar puerta a puerta.',walk:'a pie',car:'en coche',train:'en tren',
cats:{tr:'Conexiones',sh:'Compras',ed:'Educación',he:'Salud',le:'Ocio y parques',ce:'Centro y cultura'},allCats:'Todo',
sol:'Sol',solLead:'Mira por qué fachada entra el sol según el mes y la hora.',month:'Mes',hour:'Hora',
months:['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'],sunUp:'Sol a',elev:'de altura',night:'El sol está bajo el horizonte',
litToday:'Horas de sol directo hoy (cielo despejado, sin edificios vecinos)',solNote:'Simulación orientativa: orientación del edificio estimada sobre cartografía, no validada por el arquitecto. No tiene en cuenta las sombras de los edificios vecinos.',
obraTitle:'Obra y forma de pago',obraLead:'Calendario y forma de pago orientativos, pendientes de confirmar por el promotor.',
miles:[['Licencia de obras','En tramitación'],['Inicio de obras','Por confirmar'],['Estructura','Por confirmar'],['Cubierta y cerramientos','Por confirmar'],['Entrega de llaves','Por confirmar']],
payTitle:'Forma de pago orientativa',pay:[['Reserva','Se descuenta del primer pago',null],['Contrato privado (arras)','A la firma',.10],['Durante la obra','Según hitos de obra',.10],['Durante la obra','Cubierta',.20],['Escritura','A la entrega',.60]],
payNote:'Ejemplo calculado sobre la vivienda seleccionada, sin IVA. Las cantidades entregadas a cuenta se garantizan según la normativa vigente. Condiciones definitivas a confirmar por el promotor.',
payFor:'Ejemplo para',calTitle:'Memoria de calidades',calLead:'Resumen de la memoria de calidades del dossier comercial. Sujeta a modificaciones por necesidades de la obra.',
galTitle:'Galería',galLead:'Imágenes de la promoción. Los renders tienen carácter ilustrativo.',
conTitle:'Contacto',conLead:'¿Quieres visitar la zona, recibir el dossier o reservar? Escríbenos y te respondemos.',send:'Enviar',sentOk:'Preparado. Si no se ha abierto tu correo, copia el mensaje y envíalo a',
legal:'Aviso legal y privacidad',cookies:'Esta web no utiliza cookies de seguimiento.',
legalTxt:'<p><b>Promotor:</b> Habitatges IBS Metge Mir 2024, S.L. · <b>Comercialización:</b> Step by Step Habitatges · <b>Arquitectura:</b> Nomen i Associats Arquitectes. Web y showroom: iShowi by BoomBizz.</p><p>Las imágenes, renders, planos 3D y acabados son orientativos y no constituyen obligación contractual. Superficies y distribuciones sujetas a variaciones por necesidades de obra y licencia. Precios sin IVA salvo indicación. La información del RD 515/1989 está a disposición del comprador en la oficina de venta.</p><p><b>Privacidad (RGPD y LOPDGDD):</b> los datos que nos envíes se usarán solo para responder a tu solicitud y no se cederán a terceros salvo obligación legal. Puedes ejercer tus derechos de acceso, rectificación, supresión y oposición escribiendo a carles@apimi.com.</p><p>Esta web no utiliza cookies de seguimiento ni de publicidad.</p><p><i>Versión demo: textos legales pendientes de revisión jurídica antes de publicar.</i></p>',
agentTitle:'Acceso de agentes iShowi Hub',agentLead:'Los agentes autorizados entran con su usuario del Hub y ven, en cada vivienda, las acciones de apalabrar, reservar y subir documentación.',user:'Usuario',pass:'Contraseña',enterDemo:'Entrar en modo demo',agentDemo:'Demo: sin conexión al Hub. Las acciones no se guardan.',
agentOn:'Modo agente (demo)',logout:'Salir',apalabrar:'Apalabrar 72 h',reservar:'Reservar',docs:'Subir documentación',agentToast:'Demo: esta acción se registrará en iShowi Hub cuando esté conectado',
home:'Edificio',cmpTitle:'Comparar viviendas',close:'Cerrar',from:'desde',total12:'12 viviendas',dup3:'3 dúplex con terraza',walk5:'R4 a 5 min',floorsN:'PB + 2 + ático',
loadErr:'No se han podido cargar los datos de la promoción.'},
ca:{intro:'12 habitatges d’obra nova al centre de Sabadell. Pisos de 2 i 3 dormitoris i tres dúplex amb terrassa.',enter:'Entrar al showroom',introFoot:'Imatges de caràcter il·lustratiu · Showroom iShowi en versió demo',agents:'Agents',
heroTitle:'Viu al centre de Sabadell',heroSub:'Carrer del Metge Mir, 24 · a 5 minuts a peu de Sabadell Centre (R4)',
vivTitle:'Habitatges',vivLead:'Dotze habitatges a planta baixa, primera i segona, i tres dúplex amb terrassa a l’àtic. Tria’n un per veure’n el plànol, el plànol 3D i el preu.',
priceNote:'Preus sense IVA (10 %) llevat que s’indiqui. Superfícies orientatives, subjectes a variacions d’obra i llicència. Informació segons el RD 515/1989 disponible a l’oficina de venda.',
refNote:'Imatges i plànols orientatius, sense valor contractual',
all:'Totes',allFloors:'Totes les plantes',beds:'dorm.',anyBeds:'Qualsevol nombre de dormitoris',sortP:'Preu: de menor a major',sortPd:'Preu: de major a menor',sortS:'Superfície',
units:'habitatges',plan:'Plànol',plan3d:'Plànol 3D',view:'Veure',config:'Configurar',contact:'Contactar',compare:'Comparar',compareN:'Comparar ({n})',
built:'Construïda',useful:'Útil',ext:'Exterior',bedsL:'Dormitoris',bathsL:'Banys',floorL:'Planta',typeL:'Tipologia',priceL:'Preu',vatIncl:'IVA incl.',plusVat:'+ IVA',duplex:'Dúplex',studio:'+ estudi',
pati:'pati',balco:'balcó',terrassa:'terrassa',
st:{available:'Disponible',reserved:'Reservat',sold:'Venut'},
dock:{viv:'Habitatges',park:'Aparcament',cfg:'Configurador',ent:'Entorn',sol:'Sol',obra:'Obra i pagaments',cal:'Qualitats',gal:'Galeria',con:'Contacte'},
views:{v1:'Cantonada',v2:'Accés',v3:'Façana',v4:'Balcons',v5:'Àtic',v6:'Terrassa'},
floorUnits:'Habitatges d’aquesta planta',park:'Aparcament',parkLead:'Places de cotxe, de moto i traster al soterrani. Toca una plaça per veure-la i el recorregut des de la rampa.',
parking:'Plaça de cotxe',moto:'Plaça de moto',storage:'Traster',addToCfg:'Afegir a la meva configuració',askSlot:'Preguntar per aquesta plaça',pickSlot:'Tria una plaça al plànol',
parkNote:'Preus sense IVA. Les places i el traster es venen com a annex d’un habitatge (IVA 10 %); venuts per separat tributen al 21 %.',
cfgSteps:['Habitatge','Terra','Cuina','Banys','Altres','Les teves dades','Resum'],
cfgProv:'Acabats provisionals pendents de validació del promotor. Els suplements es confirmaran abans de la reserva.',
cfgAmb:'Imatge d’ambient de referència',chooseUnit:'Quin habitatge vols configurar?',
cat:{paviment:'Paviment general',cuina_frontals_baixos:'Frontals baixos de cuina',cuina_frontals_alts:'Frontals alts de cuina',cuina_taulell:'Taulell',cuina_led:'Il·luminació LED',bany_paviment:'Paviment del bany',bany_parets:'Revestiment de parets',bany_paret_especial:'Paret especial (dutxa)',bany_moble:'Moble de lavabo',fusteria_vidres:'Vidres'},
ref:'Opció de referència',supp:'Suplement a confirmar',next:'Següent',prev:'Enrere',seeSum:'Veure resum',total:'Preu habitatge + annexos',
annexes:'Annexos',noSlot:'Sense plaça',noMoto:'Sense plaça de moto',noStore:'Sense traster',
gate:'Per veure el resum i rebre’l, deixa’ns les teves dades.',name:'Nom i cognoms',phone:'Telèfon / WhatsApp',email:'Correu electrònic',msg:'Missatge (opcional)',
consent:'Accepto que Metge Mir 24 tracti les meves dades per respondre la meva sol·licitud, segons la política de privacitat.',privacy:'Veure política de privacitat',
sumTitle:'Resum de la teva configuració',finishes:'Acabats escollits',sendMail:'Enviar per correu',copy:'Copiar el resum',copied:'Resum copiat',
mailHint:'Si el teu dispositiu no obre el correu, escriu-nos a',sumNote:'Configuració orientativa sense valor contractual. Preu de l’habitatge i annexos sense IVA; acabats amb suplement a confirmar.',
ent:'Entorn',entLead:'Tot el del dia a dia a peu: tren R4, bus, campus UAB, supermercats i el centre de Sabadell.',scale:['A peu','Sabadell','Àrea metropolitana'],
entNote:'Esquema orientatiu, no a escala exacta. Distàncies i temps estimats, pendents de confirmar porta a porta.',walk:'a peu',car:'en cotxe',train:'en tren',
cats:{tr:'Connexions',sh:'Compres',ed:'Educació',he:'Salut',le:'Lleure i parcs',ce:'Centre i cultura'},allCats:'Tot',
sol:'Sol',solLead:'Mira per quina façana entra el sol segons el mes i l’hora.',month:'Mes',hour:'Hora',
months:['gen','febr','març','abr','maig','juny','jul','ag','set','oct','nov','des'],sunUp:'Sol a',elev:'d’altura',night:'El sol és sota l’horitzó',
litToday:'Hores de sol directe avui (cel serè, sense edificis veïns)',solNote:'Simulació orientativa: orientació de l’edifici estimada sobre cartografia, no validada per l’arquitecte. No té en compte les ombres dels edificis veïns.',
obraTitle:'Obra i forma de pagament',obraLead:'Calendari i forma de pagament orientatius, pendents de confirmar pel promotor.',
miles:[['Llicència d’obres','En tràmit'],['Inici d’obres','Per confirmar'],['Estructura','Per confirmar'],['Coberta i tancaments','Per confirmar'],['Lliurament de claus','Per confirmar']],
payTitle:'Forma de pagament orientativa',pay:[['Reserva','Es descompta del primer pagament',null],['Contracte privat (arres)','A la signatura',.10],['Durant l’obra','Segons fites d’obra',.10],['Durant l’obra','Coberta',.20],['Escriptura','Al lliurament',.60]],
payNote:'Exemple calculat sobre l’habitatge seleccionat, sense IVA. Les quantitats lliurades a compte es garanteixen segons la normativa vigent. Condicions definitives a confirmar pel promotor.',
payFor:'Exemple per a',calTitle:'Memòria de qualitats',calLead:'Resum de la memòria de qualitats del dossier comercial. Subjecta a modificacions per necessitats de l’obra.',
galTitle:'Galeria',galLead:'Imatges de la promoció. Els renders tenen caràcter il·lustratiu.',
conTitle:'Contacte',conLead:'Vols visitar la zona, rebre el dossier o reservar? Escriu-nos i et responem.',send:'Enviar',sentOk:'Preparat. Si no s’ha obert el teu correu, copia el missatge i envia’l a',
legal:'Avís legal i privacitat',cookies:'Aquesta web no fa servir galetes de seguiment.',
legalTxt:'<p><b>Promotor:</b> Habitatges IBS Metge Mir 2024, S.L. · <b>Comercialització:</b> Step by Step Habitatges · <b>Arquitectura:</b> Nomen i Associats Arquitectes. Web i showroom: iShowi by BoomBizz.</p><p>Les imatges, renders, plànols 3D i acabats són orientatius i no constitueixen obligació contractual. Superfícies i distribucions subjectes a variacions per necessitats d’obra i llicència. Preus sense IVA llevat d’indicació. La informació del RD 515/1989 és a disposició del comprador a l’oficina de venda.</p><p><b>Privacitat (RGPD i LOPDGDD):</b> les dades que ens enviïs s’utilitzaran només per respondre la teva sol·licitud i no se cediran a tercers llevat d’obligació legal. Pots exercir els drets d’accés, rectificació, supressió i oposició escrivint a carles@apimi.com.</p><p>Aquesta web no fa servir galetes de seguiment ni de publicitat.</p><p><i>Versió demo: textos legals pendents de revisió jurídica abans de publicar.</i></p>',
agentTitle:'Accés d’agents iShowi Hub',agentLead:'Els agents autoritzats entren amb el seu usuari del Hub i veuen, a cada habitatge, les accions d’aparaular, reservar i pujar documentació.',user:'Usuari',pass:'Contrasenya',enterDemo:'Entrar en mode demo',agentDemo:'Demo: sense connexió al Hub. Les accions no es desen.',
agentOn:'Mode agent (demo)',logout:'Sortir',apalabrar:'Aparaular 72 h',reservar:'Reservar',docs:'Pujar documentació',agentToast:'Demo: aquesta acció es registrarà a iShowi Hub quan estigui connectat',
home:'Edifici',cmpTitle:'Comparar habitatges',close:'Tancar',from:'des de',total12:'12 habitatges',dup3:'3 dúplex amb terrassa',walk5:'R4 a 5 min',floorsN:'PB + 2 + àtic',
loadErr:'No s’han pogut carregar les dades de la promoció.'}};
const t=k=>{const v=k.split('.').reduce((o,p)=>o&&o[p],T[L]);return v===undefined?k:v};
const eur=n=>n==null?'—':new Intl.NumberFormat(L==='ca'?'ca-ES':'es-ES',{maximumFractionDigits:0}).format(Math.round(n))+' €';
const m2=n=>new Intl.NumberFormat(L==='ca'?'ca-ES':'es-ES',{minimumFractionDigits:2,maximumFractionDigits:2}).format(n)+' m²';
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const icon=id=>`<svg class="i"><use href="#i-${id}"/></svg>`;
const fl=f=>({PB:L==='ca'?'Planta baixa':'Planta baja',P1:L==='ca'?'Planta primera':'Planta primera',P2:L==='ca'?'Planta segona':'Planta segunda'})[f];
const uName=u=>`${u.floor==='PB'?'PB':u.floor==='P1'?'1º':'2º'} ${u.door}`.replace('º',L==='ca'?(u.floor==='P1'?'r':'n'):'º');
const vat=n=>n*(1+D.vat);
const toast=m=>{const e=$('#toast');e.textContent=m;e.classList.add('on');clearTimeout(e._t);e._t=setTimeout(()=>e.classList.remove('on'),3200)};
const state={screen:'s-ed',hist:[],unit:null,view:'v1',floor:null,cmp:new Set(),agent:false,cfg:{step:0,unit:null,sel:{},park:null,moto:null,store:null,lead:null},park:{sel:null,filter:'all'},ent:{scale:0,cat:'all',sel:null},sol:{m:new Date().getMonth(),h:12}};

/* ---------- navigation ---------- */
const crumbs={'s-ed':'Metge Mir 24','s-viv':'dock.viv','s-pis':'','s-park':'dock.park','s-cfg':'dock.cfg','s-ent':'dock.ent','s-sol':'dock.sol','s-obra':'dock.obra','s-cal':'dock.cal','s-gal':'dock.gal','s-con':'dock.con'};
const renders={'s-ed':renderEd,'s-viv':renderViv,'s-pis':renderPis,'s-park':renderPark,'s-cfg':renderCfg,'s-ent':renderEnt,'s-sol':renderSol,'s-obra':renderObra,'s-cal':renderCal,'s-gal':renderGal,'s-con':renderCon};
function go(id,push=true){
  if(push&&state.screen!==id)state.hist.push(state.screen);
  state.screen=id;closeSheet();
  $$('.screen').forEach(s=>s.classList.toggle('on',s.id===id));
  $('#b-back').hidden=id==='s-ed';document.body.classList.toggle('on-cfg',id==='s-cfg');
  document.body.classList.toggle('lightTop',['s-viv','s-obra','s-cal','s-gal','s-con','s-pis','s-park','s-sol'].includes(id));
  const c=crumbs[id];$('#crumb').textContent=id==='s-pis'&&state.unit?`${t('dock.viv')} · ${uName(state.unit)}`:(c.includes('.')?t(c):c);
  renders[id]&&renders[id]();if(id==='s-ent')requestAnimationFrame(()=>renderEnt());
  $$('#m-nav a').forEach(a=>a.classList.toggle('on',a.dataset.go===id));
  try{history.replaceState(null,'','#'+id.slice(2))}catch(e){}
}
function back(){const p=state.hist.pop()||'s-ed';go(p,false)}
function openSheet(html){$('#sh-body').innerHTML=html;$('#sheet').classList.add('on');$('#scrim').classList.add('on')}
function closeSheet(){$('#sheet').classList.remove('on');$('#scrim').classList.remove('on');$$('.band').forEach(b=>b.classList.remove('sel'))}
function modal(html){$('#mo-body').innerHTML=html;$('#modal').classList.add('on')}
function closeModal(){$('#modal').classList.remove('on')}

/* ---------- static i18n ---------- */
function applyLang(){
  document.documentElement.lang=L;
  $$('[data-t]').forEach(e=>e.innerHTML=t(e.dataset.t));
  ['#lang-intro','#lang-top'].forEach(s=>{$(s).innerHTML=['es','ca'].map(l=>`<button data-l="${l}" class="${l===L?'on':''}">${l.toUpperCase()}</button>`).join('')});
  $('#m-addr').innerHTML=`<b>${esc(D.address)}</b>`;
  const nav=[['s-ed','home','home'],['s-viv','dock.viv','list'],['s-park','dock.park','car'],['s-cfg','dock.cfg','brush'],['s-ent','dock.ent','pin'],['s-sol','dock.sol','sun'],['s-obra','dock.obra','crane'],['s-cal','dock.cal','list'],['s-gal','dock.gal','img'],['s-con','dock.con','mail']];
  $('#m-nav').innerHTML=nav.map(([id,k,ic])=>`<a data-go="${id}">${icon(ic)}${t(k)}</a>`).join('');
  $('#m-foot').innerHTML=`<p>${t('cookies')}</p><button data-legal>${t('legal')}</button><p style="margin-top:12px">${esc(D.marketing)} · iShowi by BoomBizz</p>`;
  $('#dock').innerHTML=[['s-viv','viv','list'],['s-park','park','car'],['s-cfg','cfg','brush'],['s-ent','ent','pin'],['s-sol','sol','sun'],['s-obra','obra','crane'],['s-cal','cal','list'],['s-gal','gal','img'],['s-con','con','mail']].map(([id,k,ic])=>`<button data-go="${id}">${icon(ic)}${t('dock.'+k)}</button>`).join('');
  const minP=Math.min(...D.units.map(u=>u.price));
  $('#stats').innerHTML=`<span>${t('total12')}</span><span>${t('dup3')}</span><span>${t('from')} ${eur(minP)} ${t('plusVat')}</span><span>${t('walk5')}</span>`;
  $('#agentbar').textContent=t('agentOn');
  go(state.screen,false);
}

/* ---------- building ---------- */
const VIEWS=[['v1','fac_hero'],['v2','fac_acces'],['v3','fac_frontal'],['v4','fac_balcons'],['v5','fac_atic'],['v6','fac_terrassa']];
const BANDS={AT:[[240,150],[500,108],[820,62],[1100,108],[1410,140],[1410,192],[820,142],[235,203]],
P2:[[235,205],[820,145],[1410,195],[1410,420],[820,430],[235,410]],
P1:[[235,410],[820,430],[1410,420],[1410,560],[820,600],[235,555]],
PB:[[235,555],[820,600],[1410,560],[1410,640],[820,850],[235,640]]};
function renderEd(){
  const st=$('#ed-stage');
  if(!st.children.length)st.innerHTML=VIEWS.map(([k,f])=>`<div class="view" data-v="${k}"><img src="img/${f}.webp" alt="" ${k==='v1'?'':'loading="lazy"'}></div>`).join('');
  $$('.view').forEach(v=>v.classList.toggle('on',v.dataset.v===state.view));
  $('#views').innerHTML=VIEWS.map(([k])=>`<button data-view="${k}" class="${k===state.view?'on':''}">${t('views.'+k)}</button>`).join('');
  const show=state.view==='v1';
  $('#ovl').innerHTML=show?Object.entries(BANDS).map(([f,p])=>`<polygon class="band${state.floor===f?' sel':''}" data-floor="${f}" points="${p.map(q=>q.join(',')).join(' ')}"><title>${f}</title></polygon>`).join(''):'';
  $('#floors').hidden=!show;$('#flabs').hidden=!show;
  $('#floors').innerHTML=[['AT',L==='ca'?'Àtic':'Ático'],['P2','2'],['P1','1'],['PB','PB'],['S1',L==='ca'?'-1':'-1']].map(([f,l])=>`<button data-floor="${f}" class="${state.floor===f?'on':''}">${l}</button>`).join('');
}
function floorSheet(f){
  if(f==='S1'){go('s-park');return}
  state.floor=f;renderEd();
  const us=D.units.filter(u=>f==='AT'?u.duplex:u.floor===f);
  const title=f==='AT'?(L==='ca'?'Àtic · dúplex':'Ático · dúplex'):fl(f);
  openSheet(`<div class="sh-h"><h2>${title}</h2></div><p class="sub">${us.length} ${t('units')}${f==='AT'?' · '+(L==='ca'?'nivell superior dels dúplex de la segona planta':'nivel superior de los dúplex de la segunda planta'):''}</p>
  <ul class="ulist">${us.map(u=>`<li><button data-unit="${u.id}"><span class="badge ${u.status}"><i></i>${t('st.'+u.status)}</span><span><b>${uName(u)}</b><small>${u.type} · ${u.beds} ${t('beds')}${u.studio?' '+t('studio'):''} · ${m2(u.built)}${u.duplex?' · '+t('duplex'):''}</small></span><span class="pr">${eur(u.price)}<small>${t('plusVat')}</small></span></button></li>`).join('')}</ul>
  <p class="note">${t('priceNote')}</p>`);
}

/* ---------- viviendas ---------- */
const flt={floor:'all',beds:'all',sort:'p'};
function renderViv(){
  $('#f-floor').innerHTML=[['all',t('allFloors')],['PB',fl('PB')],['P1',fl('P1')],['P2',fl('P2')],['dup',t('duplex')]].map(([v,l])=>`<option value="${v}" ${flt.floor===v?'selected':''}>${l}</option>`).join('');
  $('#f-beds').innerHTML=[['all',t('anyBeds')],['2','2 '+t('beds')],['3','3 '+t('beds')]].map(([v,l])=>`<option value="${v}" ${flt.beds===v?'selected':''}>${l}</option>`).join('');
  $('#f-sort').innerHTML=[['p',t('sortP')],['pd',t('sortPd')],['s',t('sortS')]].map(([v,l])=>`<option value="${v}" ${flt.sort===v?'selected':''}>${l}</option>`).join('');
  let us=D.units.filter(u=>(flt.floor==='all'||(flt.floor==='dup'?u.duplex:u.floor===flt.floor))&&(flt.beds==='all'||u.beds==+flt.beds));
  us.sort((a,b)=>flt.sort==='p'?a.price-b.price:flt.sort==='pd'?b.price-a.price:b.built-a.built);
  $('#f-count').textContent=`${us.length} ${t('units')}`;
  $('#cards').innerHTML=us.map(u=>`<article class="card"><div class="ph" data-unit="${u.id}"><img src="iso/${u.img}.webp" alt="${t('plan3d')} ${uName(u)}" loading="lazy"><span class="badge ${u.status}"><i></i>${t('st.'+u.status)}</span></div>
  <div class="in"><h3>${uName(u)} <small>${u.type}${u.duplex?' · '+t('duplex'):''}</small></h3>
  <div class="chips"><span>${u.beds} ${t('beds')}${u.studio?' '+t('studio'):''}</span><span>${u.baths} ${L==='ca'?'banys':'baños'}</span><span>${m2(u.built)}</span>${u.ext?`<span>${t(u.extKind)} ${m2(u.ext)}</span>`:''}</div>
  <div class="price">${eur(u.price)} <small>${t('plusVat')} · ${eur(vat(u.price))} ${t('vatIncl')}</small></div>
  <label class="cmp"><input type="checkbox" data-cmp="${u.id}" ${state.cmp.has(u.id)?'checked':''}> ${t('compare')}</label>
  <div class="acts"><button class="btn ghost" data-unit="${u.id}">${t('view')}</button><button class="btn" data-cfg="${u.id}">${t('config')}</button></div></div></article>`).join('');
  updCmp();
}
function updCmp(){const b=$('#cmpbar');b.textContent=t('compareN').replace('{n}',state.cmp.size);b.classList.toggle('on',state.cmp.size>=2&&state.screen==='s-viv')}
function showCmp(){
  const us=[...state.cmp].map(id=>D.units.find(u=>u.id===id));
  const rows=[[t('typeL'),u=>u.type],[t('floorL'),u=>fl(u.floor)],[t('bedsL'),u=>u.beds+(u.studio?' '+t('studio'):'')],[t('bathsL'),u=>u.baths],[t('built'),u=>m2(u.built)],[t('useful'),u=>m2(u.useful)],[t('ext'),u=>u.ext?m2(u.ext):'—'],[t('priceL'),u=>`<b>${eur(u.price)}</b> ${t('plusVat')}`]];
  openSheet(`<div class="sh-h"><h2>${t('cmpTitle')}</h2></div><div style="overflow-x:auto"><table class="cmpt"><tr><th></th>${us.map(u=>`<td><b>${uName(u)}</b></td>`).join('')}</tr>${rows.map(([l,f])=>`<tr><th>${l}</th>${us.map(u=>`<td>${f(u)}</td>`).join('')}</tr>`).join('')}</table></div>`);
}

/* ---------- vivienda ---------- */
let pisTab='plan';
function openUnit(id){state.unit=D.units.find(u=>u.id===id);pisTab='iso';go('s-pis')}
function renderPis(){
  const u=state.unit;if(!u)return go('s-viv',false);
  $('#uv').innerHTML=`<img src="${pisTab==='iso'?'iso':'plan'}/${u.img}.webp" alt="${pisTab==='iso'?t('plan3d'):t('plan')} ${uName(u)}">`;
  const ag=state.agent?`<div class="agentacts"><button class="btn terra" data-ag="apalabrar">${t('apalabrar')}</button><button class="btn terra" data-ag="reservar">${t('reservar')}</button><button class="btn ghost" data-ag="docs">${t('docs')}</button></div>`:'';
  $('#ubar').innerHTML=`<div class="tabs"><button data-tab="iso" class="${pisTab==='iso'?'on':''}">${t('plan3d')}</button><button data-tab="plan" class="${pisTab==='plan'?'on':''}">${t('plan')}</button></div>
  <div class="info"><span><b>${uName(u)} · ${eur(u.price)}</b><small>${u.type} · ${u.beds} ${t('beds')}${u.studio?' '+t('studio'):''} · ${u.baths} ${L==='ca'?'banys':'baños'} · ${m2(u.built)} ${L==='ca'?'constr.':'constr.'}${u.ext?' · '+t(u.extKind)+' '+m2(u.ext):''} · ${t('plusVat')}</small></span><span class="badge ${u.status}"><i></i>${t('st.'+u.status)}</span></div>
  <button class="btn ghost" data-facts="${u.id}">${t('ext')==='Exterior'?'+ info':'+ info'}</button><button class="btn" data-cfg="${u.id}">${t('config')}</button><button class="btn terra" data-contact="${u.id}">${t('contact')}</button>${ag}`;
}
function unitFacts(u){
  openSheet(`<div class="sh-h"><h2>${uName(u)}</h2><span class="badge ${u.status}"><i></i>${t('st.'+u.status)}</span></div><p class="sub">${fl(u.floor)} · ${u.type}${u.duplex?' · '+t('duplex'):''}</p>
  <dl class="facts"><div><dt>${t('bedsL')}</dt><dd>${u.beds}${u.studio?' '+t('studio'):''}</dd></div><div><dt>${t('bathsL')}</dt><dd>${u.baths}</dd></div><div><dt>${t('built')}</dt><dd>${m2(u.built)}</dd></div><div><dt>${t('useful')}</dt><dd>${m2(u.useful)}</dd></div><div><dt>${t('ext')}${u.ext?' ('+t(u.extKind)+')':''}</dt><dd>${u.ext?m2(u.ext):'—'}</dd></div><div><dt>${t('priceL')} ${t('plusVat')}</dt><dd>${eur(u.price)}</dd></div></dl>
  <p class="sub">${eur(vat(u.price))} ${t('vatIncl')} (10 %)</p><div class="row2"><button class="btn" data-cfg="${u.id}">${t('config')}</button><button class="btn terra" data-contact="${u.id}">${t('contact')}</button></div><p class="note">${t('priceNote')}</p>`);
}

/* ---------- aparcamiento ---------- */
const kindL=k=>t(k);
function routeFor(r){const cx=r[0]+r[2]/2,cy=r[1]+r[3]/2;const pts=[[205,330],[215,640],[330,860],[640,820]];if(r[1]<330&&r[0]<300)return [[205,330],[205,300],[cx,cy]];pts.push([640,cy]);pts.push([cx,cy]);return pts}
function renderPark(){
  const P=state.park, sl=D.annexes;
  $('#pk').innerHTML=`<svg class="pk" viewBox="0 0 1190 1152" preserveAspectRatio="xMidYMid meet"><image href="img/parking.webp" width="1190" height="1152"/>
  <path class="route" id="pk-route" d="" />
  ${sl.map(s=>{const r=s.rect,on=P.sel===s.id,off=P.filter!=='all'&&P.filter!==s.kind;return `<g class="slot ${s.kind} ${s.status}${on?' on':''}${off?' off':''}" data-slot="${s.id}" tabindex="0" role="button" aria-label="${s.id}"><rect x="${r[0]}" y="${r[1]}" width="${r[2]}" height="${r[3]}" rx="8"/>${on?`<text class="tag" x="${r[0]+r[2]/2}" y="${r[1]+r[3]/2+8}" text-anchor="middle">${s.id}</text>`:''}</g>`}).join('')}
  <g id="pk-car" opacity="0"><rect x="-26" y="-48" width="52" height="96" rx="14" fill="#1f4d36"/><rect x="-20" y="-30" width="40" height="22" rx="5" fill="#cfe3d6"/><rect x="-20" y="16" width="40" height="16" rx="4" fill="#cfe3d6"/></g></svg>`;
  const s=sl.find(x=>x.id===P.sel);
  const cnt=k=>sl.filter(x=>x.kind===k).length;
  $('#pk-pan').innerHTML=`<span class="cat">${L==='ca'?'Soterrani':'Sótano'}</span><h2>${t('park')}</h2><p class="sub">${t('parkLead')}</p>
  <div class="seg">${[['all',t('all')],['parking',t('parking')],['moto',t('moto')],['storage',t('storage')]].map(([k,l])=>`<button data-pf="${k}" class="${P.filter===k?'on':''}">${l}</button>`).join('')}</div>
  <div class="legend"><span><i style="border-color:var(--green2)"></i>${cnt('parking')} × ${t('parking')} · ${eur(28000)}</span><span><i style="border-color:var(--terra)"></i>${cnt('moto')} × ${t('moto')} · ${eur(10000)}</span><span><i style="border-color:#3c5a8c"></i>${cnt('storage')} × ${t('storage')} · ${eur(6000)}</span></div>
  ${s?`<div class="apc"><span><b>${s.id}</b><small>${kindL(s.kind)} · <span class="badge ${s.status}" style="height:20px"><i></i>${t('st.'+s.status)}</span></small></span><strong>${eur(s.price)}</strong></div><div class="row2"><button class="btn" data-addslot="${s.id}">${t('addToCfg')}</button><button class="btn ghost" data-askslot="${s.id}">${t('askSlot')}</button></div>`:`<p class="apc" style="display:block">${t('pickSlot')}</p>`}
  <p class="note">${t('parkNote')}</p>`;
  if(s)animCar(s);
}
function animCar(s){
  const pts=routeFor(s.rect);$('#pk-route').setAttribute('d','M'+pts.map(p=>p.join(',')).join(' L'));
  const car=$('#pk-car');if(!car||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  const segs=[];let tot=0;for(let i=1;i<pts.length;i++){const d=Math.hypot(pts[i][0]-pts[i-1][0],pts[i][1]-pts[i-1][1]);segs.push(d);tot+=d}
  const t0=performance.now(),dur=Math.min(3200,900+tot*1.6);car.setAttribute('opacity','1');
  const step=now=>{let k=Math.min(1,(now-t0)/dur);k=k<.5?2*k*k:1-(-2*k+2)**2/2;let d=k*tot,i=0;while(i<segs.length-1&&d>segs[i]){d-=segs[i];i++}
    const a=pts[i],b=pts[i+1],f=segs[i]?d/segs[i]:1,x=a[0]+(b[0]-a[0])*f,y=a[1]+(b[1]-a[1])*f,ang=Math.atan2(b[1]-a[1],b[0]-a[0])*180/Math.PI+90;
    car.setAttribute('transform',`translate(${x},${y}) rotate(${ang})`);if(k<1&&state.screen==='s-park')requestAnimationFrame(step)};
  requestAnimationFrame(step);
}

/* ---------- configurador ---------- */
const CFG_STEPS=[[],['paviment'],['cuina_frontals_baixos','cuina_frontals_alts','cuina_taulell','cuina_led'],['bany_paviment','bany_parets','bany_paret_especial','bany_moble'],['fusteria_vidres'],[],[]];
const AMB=['int_salo','int_salo','int_salo','int_dorm','int_terr','int_terr','int_salo'];
const opts=c=>D.finishes.options.filter(o=>o.cat===c);
function cfgInit(id){const c=state.cfg;if(id){c.unit=id;if(c.step===0)c.step=1}D.finishes.options.forEach(o=>{if(!c.sel[o.cat])c.sel[o.cat]=o.code})}
function renderCfg(){
  cfgInit();const c=state.cfg,u=D.units.find(x=>x.id===c.unit);
  $('#c-blur').style.backgroundImage=`url(int/${AMB[c.step]}.webp)`;
  $('#c-steps').innerHTML=t('cfgSteps').map((s,i)=>`<button data-step="${i}" class="${i===c.step?'on':''} ${i<c.step?'done':''}" ${(i>0&&!c.unit)||(i===6&&!c.lead)?'disabled':''}><i>${i<c.step?'✓':i+1}</i>${s}</button>`).join('');
  // board
  const cats=CFG_STEPS[c.step];
  let tiles;
  if(c.step===0)tiles=D.units.slice(0,4).map(x=>`<div class="tile" style="background:#efe6d6 url(iso/${x.img}.webp) center/contain no-repeat"><span>${uName(x)}<small>${x.type}</small></span></div>`).join('');
  else if(cats.length)tiles=cats.map(cat=>{const o=D.finishes.options.find(z=>z.code===c.sel[cat]);return o.img?`<div class="tile" style="background-image:url(sw/${o.img})"><span>${esc(o.name)}<small>${t('cat.'+cat)}</small></span></div>`:`<div class="tile led ${o.code==='IL.B'?'on':''}"><span>${esc(o.name)}<small>${t('cat.'+cat)}</small></span></div>`}).join('');
  else tiles=Object.entries(c.sel).slice(0,4).map(([cat,code])=>{const o=D.finishes.options.find(z=>z.code===code);return o.img?`<div class="tile" style="background-image:url(sw/${o.img})"><span>${esc(o.name)}<small>${t('cat.'+cat)}</small></span></div>`:''}).join('');
  $('#c-board').innerHTML=`<div class="amb"><img src="int/${AMB[c.step]}.webp" alt=""><span class="capt">${t('cfgAmb')}</span></div><div class="tiles">${tiles}</div>`;
  // panel
  const sc=$('#c-scroll');let h='';
  if(c.step===0){h=`<span class="cat">1 · ${t('cfgSteps')[0]}</span><h2>${t('chooseUnit')}</h2><ul class="ulist">${D.units.map(x=>`<li><button data-cfgunit="${x.id}" style="${x.id===c.unit?'outline:2px solid var(--green);background:#fff':''}"><span class="badge ${x.status}"><i></i>${t('st.'+x.status)}</span><span><b>${uName(x)}</b><small>${x.type} · ${x.beds} ${t('beds')} · ${m2(x.built)}</small></span><span class="pr">${eur(x.price)}<small>${t('plusVat')}</small></span></button></li>`).join('')}</ul>`}
  else if(cats.length){h=`<span class="cat">${c.step+1} · ${t('cfgSteps')[c.step]} · ${uName(u)}</span><h2>${t('cfgSteps')[c.step]}</h2><p class="prov" style="margin-top:8px">${t('cfgProv')}</p>`+cats.map(cat=>`<div class="grp"><h3>${t('cat.'+cat)}</h3><div class="ops">${opts(cat).map((o,i)=>`<button class="op ${c.sel[cat]===o.code?'on':''}" data-opt="${cat}|${o.code}"><div class="sw" style="${o.img?`background-image:url(sw/${o.img})`:o.code==='IL.B'?'background:linear-gradient(180deg,#fff6d8 0 20%,#3b3b3b 55%)':'background:#3b3b3b'}"></div><b>${esc(o.name)}</b><small>${esc(o.ref||o.code)}</small><em>${i===0?t('ref'):t('supp')}</em></button>`).join('')}</div></div>`).join('');
    if(c.step===4)h+=`<div class="grp"><h3>${t('annexes')}</h3>${selAnnex('parking','park',t('noSlot'))}${selAnnex('moto','moto',t('noMoto'))}${selAnnex('storage','store',t('noStore'))}<button class="btn ghost" data-go="s-park" style="width:100%;margin-top:4px">${icon('car')} ${t('park')}</button></div>`}
  else if(c.step===5){const ld=c.lead||{};h=`<span class="cat">6 · ${t('cfgSteps')[5]}</span><h2>${t('cfgSteps')[5]}</h2><p class="sub">${t('gate')}</p><form id="lead-f" novalidate>
   <div class="field"><label for="ld-n">${t('name')}</label><input id="ld-n" required autocomplete="name" value="${esc(ld.n||'')}"></div>
   <div class="field"><label for="ld-p">${t('phone')}</label><input id="ld-p" type="tel" required autocomplete="tel" value="${esc(ld.p||'')}"></div>
   <div class="field"><label for="ld-e">${t('email')}</label><input id="ld-e" type="email" autocomplete="email" value="${esc(ld.e||'')}"></div>
   <label class="chk"><input type="checkbox" id="ld-c" ${ld.c?'checked':''}><span>${t('consent')} <button type="button" data-legal style="text-decoration:underline">${t('privacy')}</button></span></label></form>`}
  else h=summaryHTML();
  sc.innerHTML=h;sc.classList.remove('anim');void sc.offsetWidth;sc.classList.add('anim');sc.scrollTop=0;
  const tot=u?u.price+annexSum():0;
  $('#c-bar').innerHTML=`<div class="tot"><small>${t('total')} · ${t('plusVat')}</small><b>${u?eur(tot):'—'}</b></div>${c.step>0?`<button class="btn ghost" data-cstep="-1">${t('prev')}</button>`:''}${c.step<5?`<button class="btn" data-cstep="1" ${!c.unit?'disabled':''}>${t('next')}</button>`:c.step===5?`<button class="btn" id="ld-go">${t('seeSum')}</button>`:''}`;
}
function selAnnex(kind,key,none){const c=state.cfg;const sl=D.annexes.filter(s=>s.kind===kind&&s.status==='available');return `<div class="field"><label>${t(kind)} · ${eur(sl[0]?.price)}</label><select data-annex="${key}"><option value="">${none}</option>${sl.map(s=>`<option value="${s.id}" ${c[key]===s.id?'selected':''}>${s.id}</option>`).join('')}</select></div>`}
function annexSum(){const c=state.cfg;return ['park','moto','store'].reduce((a,k)=>a+(c[k]?D.annexes.find(s=>s.id===c[k]).price:0),0)}
function summaryLines(){const c=state.cfg;return Object.entries(c.sel).map(([cat,code])=>({cat,o:D.finishes.options.find(z=>z.code===code)}))}
function summaryHTML(){
  const c=state.cfg,u=D.units.find(x=>x.id===c.unit),ld=c.lead;
  const ann=['park','moto','store'].filter(k=>c[k]).map(k=>D.annexes.find(s=>s.id===c[k]));
  return `<span class="cat">7 · ${t('cfgSteps')[6]}</span><h2>${t('sumTitle')}</h2><div class="sum">
  <div class="blk"><h3>${uName(u)} · ${u.type} <small>${t('plusVat')}</small></h3><div class="ln"><i style="background-image:url(iso/${u.img}.webp);background-size:contain;background-repeat:no-repeat"></i><span>${u.beds} ${t('beds')} · ${m2(u.built)}${u.ext?' · '+t(u.extKind)+' '+m2(u.ext):''}</span><b>${eur(u.price)}</b></div>
  ${ann.map(s=>`<div class="ln"><i></i><span>${s.id}<small>${t(s.kind)}</small></span><b>${eur(s.price)}</b></div>`).join('')}</div>
  <div class="blk"><h3>${t('finishes')} <small>${t('supp')}</small></h3>${summaryLines().map(({cat,o})=>`<div class="ln"><i style="${o.img?`background-image:url(sw/${o.img})`:''}"></i><span>${esc(o.name)}<small>${t('cat.'+cat)}</small></span><b>${o.code}</b></div>`).join('')}</div>
  <div class="grand"><small>${t('total')} · ${t('plusVat')}</small><small style="text-align:right">${t('vatIncl')}</small><b>${eur(u.price+annexSum())}</b><b style="text-align:right;font-size:18px">${eur(vat(u.price+annexSum()))}</b></div>
  <div class="row2"><a class="btn" href="${mailto(summaryText())}">${icon('mail')} ${t('sendMail')}</a><button class="btn ghost" data-copy="sum">${t('copy')}</button></div>
  <p class="note">${t('mailHint')} <b>${D.contact.email}</b></p><p class="note">${t('sumNote')}</p></div>`;
}
function summaryText(){const c=state.cfg,u=D.units.find(x=>x.id===c.unit),ld=c.lead||{};
  const ann=['park','moto','store'].filter(k=>c[k]).map(k=>D.annexes.find(s=>s.id===c[k]));
  return [`Metge Mir 24 · ${t('sumTitle')}`,'',`${t('name')}: ${ld.n||''}`,`${t('phone')}: ${ld.p||''}`,`${t('email')}: ${ld.e||''}`,'',`${uName(u)} (${u.type}) · ${m2(u.built)} · ${eur(u.price)} ${t('plusVat')}`,...ann.map(s=>`${s.id} · ${t(s.kind)} · ${eur(s.price)} ${t('plusVat')}`),`${t('total')}: ${eur(u.price+annexSum())} ${t('plusVat')}`,'',t('finishes')+':',...summaryLines().map(({cat,o})=>`- ${t('cat.'+cat)}: ${o.name} (${o.code})`),'',t('sumNote')].join('\n')}
const mailto=(body,subj)=>`mailto:${D.contact.email}?subject=${encodeURIComponent(subj||'Metge Mir 24 · iShowi')}&body=${encodeURIComponent(body)}`;
async function copyText(s){try{await navigator.clipboard.writeText(s);toast(t('copied'))}catch(e){modal(`<h2>${t('copy')}</h2><textarea style="width:100%;height:260px;border-radius:12px;border:1.5px solid var(--line);padding:10px;font-size:13px" readonly>${esc(s)}</textarea>`)}}

/* ---------- entorno ---------- */
const POI=[
['tr','Sabadell Centre · Rodalies R4',230,320,'3–5 min','walk',1],['tr','Bus urbano TUS · Estació Centre',236,330,'3–5 min','walk',0],['tr','Estació d’autobusos interurbans',200,400,'4–7 min','walk',0],['tr','FGC Sabadell Plaça Major (S2)',215,1150,'13–17 min','walk',1],
['sh','Supermercat · zona Alfons Sala',250,220,'2–4 min','walk',0],['sh','Mercadona · c/ de Lacy',175,500,'6–8 min','walk',1],['sh','Mercat Central',222,1450,'17–21 min','walk',1],
['ed','UAB · Campus Sabadell',100,300,'3–5 min','walk',1],['ed','Col·legi Sagrada Família',240,650,'7–10 min','walk',0],['ed','Escola Sant Nicolau',198,800,'9–12 min','walk',0],['ed','ESDi · Escola Superior de Disseny',232,1000,'12–15 min','walk',1],
['he','Farmàcia · c/ de Covadonga',262,280,'3–5 min','walk',1],['he','CAP Sabadell Centre',226,1700,'19–25 min','walk',0],['he','Hospital Parc Taulí',330,2050,'8–12 min','car',1],
['le','Riu Ripoll · Mirador',60,260,'3–4 min','walk',1],['le','Plaça d’Antoni Llonch',210,450,'5–7 min','walk',0],['le','Plaça de Sant Salvador',300,420,'5–7 min','walk',0],['le','Parc de Catalunya',250,3500,'10–15 min','car',1],
['ce','Biblioteca',230,480,'5–7 min','walk',0],['ce','Fira Sabadell',190,750,'8–11 min','walk',0],['ce','Rambla de Sabadell',225,1000,'12–15 min','walk',1],['ce','Plaça Major',220,1120,'12–17 min','walk',1],
['tr','UAB · Campus Bellaterra',160,9500,'15–20 min','car',2],['tr','Barcelona · Plaça Catalunya',165,23000,'32–36 min','train',2],['tr','Aeroport del Prat · T1',190,40000,'35–55 min','car',2]];
const CC={tr:'#2e6bd8',sh:'#c08a1e',ed:'#7a4fc2',he:'#c0473c',le:'#2b8a55',ce:'#b8613a'};
const SC=[1150,4200,45000];
const pr=(d,sc)=>{const R=430;return sc===2?R*Math.sqrt(d/SC[2]):R*Math.min(d/SC[sc],1.06)};
function renderEnt(){
  const E=state.ent,sc=E.scale;
  const rings=sc===0?[250,500,1000]:sc===1?[1000,2000,4000]:[5000,20000,40000];
  $('#en-svg').innerHTML=`<defs><radialGradient id="rg"><stop offset="0" stop-color="#b8613a" stop-opacity=".35"/><stop offset="1" stop-color="#b8613a" stop-opacity="0"/></radialGradient></defs>
  <circle cx="500" cy="500" r="${pr(sc===0?300:sc===1?1200:12000,sc)}" fill="url(#rg)"/>
  ${rings.map(r=>`<circle cx="500" cy="500" r="${pr(r,sc)}" fill="none" stroke="rgba(255,255,255,.22)" stroke-dasharray="4 6"/><text class="ringl" x="${500+pr(r,sc)*0.71+6}" y="${500-pr(r,sc)*0.71}">${r>=1000?(r/1000)+' km':r+' m'}</text>`).join('')}
  <path d="M500 40 l10 24 h-20z" fill="rgba(255,255,255,.7)"/><text x="500" y="84" text-anchor="middle" class="ringl">N</text>
  <path d="M500 500 L ${500+Math.sin(-19*Math.PI/180)*440} ${500-Math.cos(-19*Math.PI/180)*440}" stroke="rgba(255,255,255,.08)" stroke-width="22"/>`;
  const box=$('#en-svg').getBoundingClientRect();const s=Math.min(box.width,box.height)/1000,ox=(box.width-1000*s)/2,oy=(box.height-1000*s)/2;
  const pos=(b,d)=>{const r=pr(d,sc),a=b*Math.PI/180;return [ox+(500+Math.sin(a)*r)*s,oy+(500-Math.cos(a)*r)*s]};
  const mk=$('#en-marks');
  if(!mk.children.length)mk.innerHTML=`<div class="mk home" style="left:50%;top:50%">Metge Mir 24</div>`+POI.map((p,i)=>`<button class="mk compact" data-poi="${i}" style="--c:${CC[p[0]]}"><i></i><span>${esc(p[1])}</span></button>`).join('');
  const h=mk.querySelector('.home');h.style.left=(ox+500*s)+'px';h.style.top=(oy+500*s)+'px';
  mk.querySelectorAll('[data-poi]').forEach(el=>{const p=POI[+el.dataset.poi];const vis=(sc===2?p[6]===2||p[3]>3000:p[6]<2&&p[3]<=SC[sc]*1.05)&&(E.cat==='all'||E.cat===p[0]);
    const [x,y]=pos(p[2],p[3]);el.style.left=x+'px';el.style.top=y+'px';el.classList.toggle('hide',!vis);el.classList.toggle('sel',E.sel===+el.dataset.poi);el.querySelector('i').textContent=p[5]==='walk'?'':p[5]==='car'?'C':'T';});
  const list=POI.map((p,i)=>[p,i]).filter(([p])=>(sc===2?p[6]===2||p[3]>3000:p[6]<2&&p[3]<=SC[sc]*1.05)&&(E.cat==='all'||E.cat===p[0])).sort((a,b)=>a[0][3]-b[0][3]);
  $('#en-pan').innerHTML=`<span class="cat">Sabadell</span><h2>${t('ent')}</h2><p class="sub">${t('entLead')}</p>
  <div class="seg">${t('scale').map((l,i)=>`<button data-esc="${i}" class="${sc===i?'on':''}">${l}</button>`).join('')}</div>
  <div class="cats"><button data-ecat="all" class="${E.cat==='all'?'on':''}" style="--c:#555"><i>·</i>${t('allCats')}</button>${Object.keys(CC).map(k=>`<button data-ecat="${k}" class="${E.cat===k?'on':''}" style="--c:${CC[k]}"><i></i>${t('cats.'+k)}</button>`).join('')}</div>
  <ul class="plist">${list.map(([p,i])=>`<li><button data-poi="${i}" class="${E.sel===i?'sel':''}" style="--c:${CC[p[0]]}"><i>${p[5]==='walk'?'':p[5]==='car'?'C':'T'}</i><span><b>${esc(p[1])}</b><small>${t('cats.'+p[0])} · ${p[3]>=1000?(p[3]/1000).toLocaleString(L)+' km':p[3]+' m'}</small></span><strong>${p[4]}<br><small>${t(p[5])}</small></strong></button></li>`).join('')}</ul>
  <p class="note">${t('entNote')}</p>`;
}

/* ---------- sol ---------- */
const R=Math.PI/180;
function sunPos(ms,lat,lon){const n=ms/86400000+2440587.5-2451545;const Lm=(280.46+.9856474*n)%360,g=((357.528+.9856003*n)%360)*R;const lam=(Lm+1.915*Math.sin(g)+.02*Math.sin(2*g))*R,eps=(23.439-4e-7*n)*R;
  const ra=Math.atan2(Math.cos(eps)*Math.sin(lam),Math.cos(lam)),dec=Math.asin(Math.sin(eps)*Math.sin(lam));const gmst=(18.697374558+24.06570982441908*n)%24;const H=((gmst*15+lon)*R-ra),la=lat*R;
  const el=Math.asin(Math.sin(la)*Math.sin(dec)+Math.cos(la)*Math.cos(dec)*Math.cos(H));const az=Math.atan2(-Math.sin(H),Math.tan(dec)*Math.cos(la)-Math.sin(la)*Math.cos(H));return {el:el/R,az:(az/R+360)%360}}
function lastSun(y,m){const d=new Date(Date.UTC(y,m+1,0));return d.getUTCDate()-d.getUTCDay()}
function madridMs(m,h){const y=2026,dst=(m>2&&m<9)||(m===2&&21>=lastSun(y,2))||(m===9&&21<lastSun(y,9));const off=dst?2:1;return Date.UTC(y,m,21,0,0)+(h-off)*3600000}
function renderSol(){
  const S=state.sol,sun=D.sun,p=sunPos(madridMs(S.m,S.h),sun.lat,sun.lon);
  const sx=6,W=sun.footprint_m[0]*sx,H=sun.footprint_m[1]*sx,rot=sun.facades[0].az-360; // -19
  const up=p.el>0, Ls=up?Math.min(sun.height_m/Math.tan(Math.max(p.el,3)*R),60)*sx:0, sa=(p.az+180)*R, dx=Math.sin(sa)*Ls, dy=-Math.cos(sa)*Ls;
  // footprint in world coords (rotated)
  const c=[300,300],cr=Math.cos(rot*R),sr=Math.sin(rot*R);const loc=[[-W/2,-H/2],[W/2,-H/2],[W/2,H/2],[-W/2,H/2]];const fp=loc.map(([x,y])=>[c[0]+x*cr-y*sr,c[1]+x*sr+y*cr]);
  const sh=fp.map(([x,y])=>[x+dx,y+dy]);const quads=[0,1,2,3].map(i=>{const j=(i+1)%4;return [fp[i],fp[j],sh[j],sh[i]]});
  const P=a=>a.map(q=>q.map(v=>v.toFixed(1)).join(',')).join(' ');
  const lit=f=>up&&Math.cos((p.az-f.az)*R)>0;
  const sunR=230,spx=300+Math.sin(p.az*R)*sunR*Math.cos(Math.max(p.el,0)*R),spy=300-Math.cos(p.az*R)*sunR*Math.cos(Math.max(p.el,0)*R);
  const edge=(i,cls,label,off)=>{const a=fp[i],b=fp[(i+1)%4],mx=(a[0]+b[0])/2,my=(a[1]+b[1])/2,nx=mx-300,ny=my-300,nl=Math.hypot(nx,ny);return `<line x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}" stroke="${cls?'#f0b63a':'#7b827c'}" stroke-width="${cls?7:3}" stroke-linecap="round"/><text x="${mx+nx/nl*off}" y="${my+ny/nl*off}" text-anchor="middle" font-size="13" font-weight="700" fill="#1b211d" style="font-family:var(--f)">${label}</text>`};
  $('#sol-svg').innerHTML=`<circle cx="300" cy="300" r="250" fill="rgba(255,255,255,.55)" stroke="#c9c2b4"/>
  ${[['N',0],['E',90],['S',180],['O',270]].map(([l,a])=>`<text x="${300+Math.sin(a*R)*270}" y="${306-Math.cos(a*R)*270}" text-anchor="middle" font-size="14" font-weight="700" fill="#4a524c">${L==='ca'&&l==='O'?'O':l}</text>`).join('')}
  <g opacity="${up?.28:0}" fill="#1b2a22">${quads.map(q=>`<polygon points="${P(q)}"/>`).join('')}<polygon points="${P(sh)}"/></g>
  <polygon points="${P(fp)}" fill="#f1e5cf" stroke="#1f4d36" stroke-width="2"/>
  ${edge(0,lit(sun.facades[0]),'Metge Mir',34)}${edge(1,lit(sun.facades[1]),'Bonavista',40)}${edge(2,lit(sun.facades[2]),L==='ca'?'Pati':'Patio',30)}
  <line x1="300" y1="300" x2="${spx}" y2="${spy}" stroke="${up?'#f0b63a':'transparent'}" stroke-width="2" stroke-dasharray="5 5"/>
  <circle cx="${spx}" cy="${spy}" r="${up?16:0}" fill="#f6c443" stroke="#fff" stroke-width="3"/>`;
  $('#sol-read').innerHTML=up?`<span class="pill">${t('sunUp')} <b>${Math.round(p.az)}°</b></span><span class="pill"><b>${Math.round(p.el)}°</b> ${t('elev')}</span>`:`<span class="pill dark">${t('night')}</span>`;
  // daily hours per facade
  const hrs=sun.facades.map(f=>{let n=0;for(let mm=0;mm<24*60;mm+=5){const q=sunPos(madridMs(S.m,mm/60),sun.lat,sun.lon);if(q.el>0&&Math.cos((q.az-f.az)*R)>0)n+=5}return n});
  const fmt=n=>`${Math.floor(n/60)} h ${String(n%60).padStart(2,'0')}`;
  const hh=Math.floor(S.h),mi=Math.round((S.h-hh)*60);
  $('#sol-pan').innerHTML=`<span class="cat">${L==='ca'?'Simulació':'Simulación'}</span><h2>${t('sol')}</h2><p class="sub">${t('solLead')}</p>
  <div class="sl"><span>${t('month')}</span><input type="range" class="mo" min="0" max="11" step="1" value="${S.m}" id="sol-m" aria-label="${t('month')}"><output>${t('months')[S.m]}</output></div>
  <div class="sl"><span>${t('hour')}</span><input type="range" min="6" max="22" step=".25" value="${S.h}" id="sol-h" aria-label="${t('hour')}"><output>${String(hh).padStart(2,'0')}:${String(mi).padStart(2,'0')}</output></div>
  <svg id="sol-chart" viewBox="0 0 400 150" preserveAspectRatio="none"></svg>
  <p class="sub" style="margin-top:12px">${t('litToday')}</p>
  <div class="fac">${sun.facades.map((f,i)=>`<div class="${lit(f)?'lit':''}"><u></u><span><b>${f[L]}</b><small>${L==='ca'?'Orientació':'Orientación'} ${f.az}°</small></span><strong>${fmt(hrs[i])}</strong></div>`).join('')}</div>
  <p class="note">${t('solNote')}</p>`;
  // chart elevation
  const pts=[];for(let hr=5;hr<=22.5;hr+=.25){const q=sunPos(madridMs(S.m,hr),sun.lat,sun.lon);pts.push([(hr-5)/17.5*400,140-Math.max(q.el,-5)/75*130])}
  const cx=(S.h-5)/17.5*400,cy=140-Math.max(p.el,-5)/75*130;
  $('#sol-chart').innerHTML=`<line x1="0" y1="140" x2="400" y2="140" stroke="#9aa"/><path d="M${pts.map(q=>q.map(v=>v.toFixed(1)).join(',')).join(' L')}" fill="none" stroke="#e0a85a" stroke-width="3"/><circle cx="${cx}" cy="${cy}" r="6" fill="#f6c443" stroke="#fff" stroke-width="2"/>${[8,12,16,20].map(h=>`<text x="${(h-5)/17.5*400}" y="148" font-size="9" text-anchor="middle" fill="#667">${h}h</text>`).join('')}`;
}

/* ---------- obra, calidades, galería, contacto ---------- */
function renderObra(){
  const u=state.unit||D.units[0];const pay=t('pay');
  $('#obra').innerHTML=`<h1>${t('obraTitle')}</h1><p class="lead">${t('obraLead')}</p><div class="grid2">
  <div class="box"><h2>${L==='ca'?'Calendari d’obra':'Calendario de obra'}</h2><ul class="tl">${t('miles').map((m,i)=>`<li class="${i===0?'next':''}"><b>${m[0]}</b><small>${m[1]}</small></li>`).join('')}</ul></div>
  <div class="box"><h2>${t('payTitle')}</h2><p class="sub">${t('payFor')} <select id="pay-u" style="height:40px;border-radius:999px;border:1.5px solid var(--line);padding:0 10px">${D.units.map(x=>`<option value="${x.id}" ${x.id===u.id?'selected':''}>${uName(x)} · ${eur(x.price)}</option>`).join('')}</select></p>
  <div class="bar">${pay.filter(p=>p[2]).map((p,i)=>`<i style="width:${p[2]*100}%;background:${['#1f4d36','#2f6b4c','#5a8f6f','#b8613a'][i]}"></i>`).join('')}</div>
  <ul class="pay">${pay.map(p=>`<li><span>${p[0]}<small>${p[1]}${p[2]?' · '+Math.round(p[2]*100)+' %':''}</small></span><b>${p[2]?eur(u.price*p[2]):'—'}</b></li>`).join('')}</ul><p class="note">${t('payNote')}</p></div></div>`;
}
const CAL={es:[['Fachadas y zonas comunes',['Fachadas estucadas con zócalo cerámico en la fachada principal','Carpintería exterior de aluminio con rotura de puente térmico y aislamiento acústico','Persianas térmicas motorizadas','Vestíbulo con revestimiento de madera y gres porcelánico de gran formato','Ascensor OTIS o similar']],['Terrazas, aparcamiento y trasteros',['Pavimento de gres porcelánico antideslizante en terrazas y balcones','Punto de luz y enchufe en terrazas','Barandillas de hierro pintadas','Puerta de garaje automática y pavimento de hormigón','Trasteros enyesados y pintados con punto de luz']],['Interiores',['Parquet flotante laminado','Baños con revestimiento cerámico en todas las zonas','Platos de ducha de resinas minerales','Sanitarios ROCA y grifería IMEX o similar','Lavabo cerámico con mueble suspendido de dos cajones']],['Cocina',['Muebles altos y bajos según distribución','Placa de inducción, campana integrada y horno multifunción Balay o similar','Encimera y frontal de 70 cm en material tipo Corian','Fregadero de acero inoxidable encastado']],['Carpintería e instalaciones',['Puertas block de DM lacadas en blanco','Puerta de seguridad de acceso','Aerotermia para agua caliente sanitaria','Climatización por conductos frío/calor (fan-coil)','Videoportero y preinstalación de lavadora y secadora']]],
ca:[['Façanes i zones comunes',['Façanes estucades amb sòcol ceràmic a la façana principal','Fusteria exterior d’alumini amb trencament de pont tèrmic i aïllament acústic','Persianes tèrmiques motoritzades','Vestíbul amb revestiment de fusta i gres porcel·lànic de gran format','Ascensor OTIS o similar']],['Terrasses, aparcament i trasters',['Paviment de gres porcel·lànic antilliscant a terrasses i balcons','Punt de llum i endoll a les terrasses','Baranes de ferro pintades','Porta de garatge automàtica i paviment de formigó','Trasters enguixats i pintats amb punt de llum']],['Interiors',['Parquet flotant laminat','Banys amb revestiment ceràmic a totes les zones','Plats de dutxa de resines minerals','Sanitaris ROCA i aixetes IMEX o similar','Lavabo ceràmic amb moble suspès de dos calaixos']],['Cuina',['Mobles alts i baixos segons distribució','Placa d’inducció, campana integrada i forn multifunció Balay o similar','Taulell i frontal de 70 cm en material tipus Corian','Aigüera d’acer inoxidable encastada']],['Fusteria i instal·lacions',['Portes block de DM lacades en blanc','Porta de seguretat d’accés','Aerotèrmia per a aigua calenta sanitària','Climatització per conductes fred/calor (fan-coil)','Videoporter i preinstal·lació de rentadora i assecadora']]]};
function renderCal(){$('#cal').innerHTML=`<h1>${t('calTitle')}</h1><p class="lead">${t('calLead')}</p><div class="grid2">${CAL[L].map(([h,l])=>`<div class="box"><h2>${h}</h2><ul>${l.map(x=>`<li>${x}</li>`).join('')}</ul></div>`).join('')}</div><p class="note">${L==='ca'?'SUBJECTE A MODIFICACIONS PER NECESSITATS DE L’OBRA':'SUJETO A MODIFICACIONES POR NECESIDADES DE LA OBRA'}</p>`}
const GAL=[['img/fac_hero.webp','v1',1],['img/fac_atic.webp','v5',0],['img/fac_balcons.webp','v4',0],['int/int_salo.webp','salo',1],['int/int_dorm.webp','dorm',0],['int/int_terr.webp','terr',0],['img/fac_acces.webp','v2',0],['img/fac_frontal.webp','v3',0],['img/fac_terrassa.webp','v6',1]];
const galCap=k=>({salo:L==='ca'?'Sala d’estar del dúplex':'Salón del dúplex',dorm:L==='ca'?'Dormitori':'Dormitorio',terr:L==='ca'?'Sortida a la terrassa':'Salida a la terraza'})[k]||t('views.'+k);
function renderGal(){$('#gal').innerHTML=GAL.map((g,i)=>`<button class="${g[2]?'w':''}" data-lb="${i}"><img src="${g[0]}" alt="${galCap(g[1])}" loading="lazy"><span>${galCap(g[1])}</span></button>`).join('')}
let lbI=0;function lb(i){lbI=(i+GAL.length)%GAL.length;$('#lb-img').src=GAL[lbI][0];$('#lb-cap').textContent=galCap(GAL[lbI][1]);$('#lb').classList.add('on')}
function renderCon(){const u=state.unit;$('#con').innerHTML=`<h1>${t('conTitle')}</h1><p class="lead">${t('conLead')}</p><div class="grid2"><form class="box" id="con-f" novalidate>
 <div class="field"><label for="cf-n">${t('name')}</label><input id="cf-n" autocomplete="name" required></div>
 <div class="field"><label for="cf-p">${t('phone')}</label><input id="cf-p" type="tel" autocomplete="tel" required></div>
 <div class="field"><label for="cf-e">${t('email')}</label><input id="cf-e" type="email" autocomplete="email"></div>
 <div class="field"><label for="cf-u">${t('dock.viv')}</label><select id="cf-u"><option value="">—</option>${D.units.map(x=>`<option value="${x.id}" ${u&&u.id===x.id?'selected':''}>${uName(x)} · ${x.type} · ${eur(x.price)}</option>`).join('')}</select></div>
 <div class="field"><label for="cf-m">${t('msg')}</label><textarea id="cf-m"></textarea></div>
 <label class="chk"><input type="checkbox" id="cf-c"><span>${t('consent')} <button type="button" data-legal style="text-decoration:underline">${t('privacy')}</button></span></label>
 <button class="btn" type="submit" style="width:100%">${t('send')}</button><div id="cf-ok"></div></form>
 <div class="box"><h2>Metge Mir 24</h2><p>${esc(D.address)}</p><div class="copybox">${icon('mail')}<b>${D.contact.email}</b><button class="pill sm" data-copy="mail">${t('copy').split(' ')[0]}</button></div><p class="note">${esc(D.marketing)} · ${esc(D.promoter)}</p><img src="img/fac_frontal.webp" alt="" style="border-radius:16px;margin-top:12px" loading="lazy"></div></div>`}

/* ---------- events ---------- */
document.addEventListener('click',e=>{
  const g=k=>e.target.closest(k);let el;
  if(el=g('[data-l]')){L=el.dataset.l;try{localStorage.setItem('mm24-lang',L)}catch(x){}applyLang();return}
  if(el=g('[data-legal]')){e.preventDefault();modal(`<h2>${t('legal')}</h2>${t('legalTxt')}`);return}
  if(el=g('[data-go]')){$('#menu').classList.remove('on');if(el.dataset.go==='s-cfg'&&!state.cfg.unit&&state.unit)cfgInit(state.unit.id);go(el.dataset.go);return}
  if(el=g('[data-view]')){state.view=el.dataset.view;state.floor=null;closeSheet();renderEd();return}
  if(el=g('[data-floor]')){floorSheet(el.dataset.floor);return}
  if(el=g('[data-unit]')){openUnit(el.dataset.unit);return}
  if(el=g('[data-cfg]')){state.cfg.unit=el.dataset.cfg;state.cfg.step=1;cfgInit();go('s-cfg');return}
  if(el=g('[data-contact]')){state.unit=D.units.find(u=>u.id===el.dataset.contact);go('s-con');return}
  if(el=g('[data-facts]')){unitFacts(D.units.find(u=>u.id===el.dataset.facts));return}
  if(el=g('[data-tab]')){pisTab=el.dataset.tab;renderPis();return}
  if(el=g('[data-ag]')){toast(t('agentToast'));return}
  if(el=g('[data-slot]')){state.park.sel=el.dataset.slot;renderPark();return}
  if(el=g('[data-pf]')){state.park.filter=el.dataset.pf;renderPark();return}
  if(el=g('[data-addslot]')){const s=D.annexes.find(x=>x.id===el.dataset.addslot);state.cfg[{parking:'park',moto:'moto',storage:'store'}[s.kind]]=s.id;if(!state.cfg.unit){state.cfg.step=0}else state.cfg.step=4;go('s-cfg');return}
  if(el=g('[data-askslot]')){go('s-con');setTimeout(()=>{$('#cf-m').value=`${el.dataset.askslot} · `},50);return}
  if(el=g('[data-step]')){if(!el.disabled){state.cfg.step=+el.dataset.step;renderCfg()}return}
  if(el=g('[data-cfgunit]')){state.cfg.unit=el.dataset.cfgunit;renderCfg();return}
  if(el=g('[data-opt]')){const [c,o]=el.dataset.opt.split('|');state.cfg.sel[c]=o;renderCfg();return}
  if(el=g('[data-cstep]')){state.cfg.step=Math.max(0,Math.min(6,state.cfg.step+ +el.dataset.cstep));renderCfg();return}
  if(el=g('#ld-go')){const n=$('#ld-n').value.trim(),p=$('#ld-p').value.trim(),em=$('#ld-e').value.trim(),c=$('#ld-c').checked;
    if(!n||p.replace(/\D/g,'').length<9||!c){toast(L==='ca'?'Omple nom, telèfon i accepta la privacitat':'Rellena nombre, teléfono y acepta la privacidad');return}
    state.cfg.lead={n,p,e:em,c};state.cfg.step=6;renderCfg();return}
  if(el=g('[data-copy]')){copyText(el.dataset.copy==='sum'?summaryText():D.contact.email);return}
  if(el=g('[data-esc]')){state.ent.scale=+el.dataset.esc;state.ent.sel=null;renderEnt();return}
  if(el=g('[data-ecat]')){state.ent.cat=el.dataset.ecat;renderEnt();return}
  if(el=g('[data-poi]')){state.ent.sel=+el.dataset.poi;renderEnt();return}
  if(el=g('[data-lb]')){lb(+el.dataset.lb);return}
});
document.addEventListener('change',e=>{
  const el=e.target;
  if(el.dataset.cmp){el.checked?state.cmp.add(el.dataset.cmp):state.cmp.delete(el.dataset.cmp);if(state.cmp.size>3){state.cmp.delete(el.dataset.cmp);el.checked=false}updCmp()}
  if(el.id==='f-floor'){flt.floor=el.value;renderViv()}if(el.id==='f-beds'){flt.beds=el.value;renderViv()}if(el.id==='f-sort'){flt.sort=el.value;renderViv()}
  if(el.dataset.annex){state.cfg[el.dataset.annex]=el.value||null;renderCfg()}
  if(el.id==='pay-u'){state.unit=D.units.find(u=>u.id===el.value);renderObra()}
});
document.addEventListener('input',e=>{if(e.target.id==='sol-m'){state.sol.m=+e.target.value;renderSol();$('#sol-m').focus()}if(e.target.id==='sol-h'){state.sol.h=+e.target.value;renderSol();$('#sol-h').focus()}});
document.addEventListener('submit',e=>{if(e.target.id==='con-f'){e.preventDefault();const n=$('#cf-n').value.trim(),p=$('#cf-p').value.trim();if(!n||p.replace(/\D/g,'').length<9||!$('#cf-c').checked){toast(L==='ca'?'Omple nom, telèfon i accepta la privacitat':'Rellena nombre, teléfono y acepta la privacidad');return}
  const uid=$('#cf-u').value,u=D.units.find(x=>x.id===uid);const body=[`${t('name')}: ${n}`,`${t('phone')}: ${p}`,`${t('email')}: ${$('#cf-e').value}`,u?`${t('dock.viv')}: ${uName(u)} (${u.type}) · ${eur(u.price)} ${t('plusVat')}`:'','',$('#cf-m').value].join('\n');
  $('#cf-ok').innerHTML=`<p class="note">${t('sentOk')} <b>${D.contact.email}</b></p><div class="row2"><a class="btn" href="${mailto(body,'Metge Mir 24 · '+(L==='ca'?'Sol·licitud d’informació':'Solicitud de información'))}">${icon('mail')} ${t('sendMail')}</a><button type="button" class="btn ghost" id="cf-cp">${t('copy')}</button></div>`;
  $('#cf-cp').onclick=()=>copyText(body);}});
$('#cmpbar').onclick=showCmp;
$('#b-menu').onclick=()=>$('#menu').classList.add('on');$('#m-x').onclick=()=>$('#menu').classList.remove('on');
$('#b-back').onclick=back;$('#sh-x').onclick=closeSheet;$('#scrim').onclick=closeSheet;$('#mo-x').onclick=closeModal;
$('#modal').addEventListener('click',e=>{if(e.target.id==='modal')closeModal()});
$('#lb-x').onclick=()=>$('#lb').classList.remove('on');$('#lb-p').onclick=()=>lb(lbI-1);$('#lb-n').onclick=()=>lb(lbI+1);
$('#b-agent').onclick=()=>{if(state.agent){state.agent=false;$('#agentbar').hidden=true;$('#b-agent span').textContent=t('agents');state.screen==='s-pis'&&renderPis();return}
  modal(`<h2>${t('agentTitle')}</h2><p>${t('agentLead')}</p><div class="field"><label for="ag-u">${t('user')}</label><input id="ag-u" autocomplete="username"></div><div class="field"><label for="ag-p">${t('pass')}</label><input id="ag-p" type="password" autocomplete="current-password"></div><button class="btn terra" id="ag-go" style="width:100%">${t('enterDemo')}</button><p class="note">${t('agentDemo')}</p>`);
  $('#ag-go').onclick=()=>{state.agent=true;closeModal();$('#agentbar').hidden=false;$('#b-agent span').textContent=t('logout');toast(t('agentDemo'));state.screen==='s-pis'&&renderPis()}};
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeModal();closeSheet();$('#lb').classList.remove('on');$('#menu').classList.remove('on')}
  if(e.key==='Enter'&&e.target.dataset&&e.target.dataset.slot){state.park.sel=e.target.dataset.slot;renderPark()}});
new ResizeObserver(()=>{state.screen==='s-ent'&&renderEnt()}).observe($('#s-ent .stg'));
$('#enter').onclick=()=>{$('#intro').classList.add('out')};

/* ---------- boot ---------- */
fetch('data/promocion.json').then(r=>r.json()).then(j=>{D=j;
  const h=(location.hash||'').slice(1);if(h&&$('#s-'+h))state.screen='s-'+h;
  if(h)$('#intro').classList.add('out');applyLang()}).catch(()=>{document.querySelector('.intro-c p').textContent=T[L].loadErr});
}
