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
cfgSteps:['Vivienda','Suelo','Cocina','Baño 1','Baño 2','Otros','Tus datos','Resumen'],roomCap:{S:'Salón-comedor',K:'Cocina',B1:'Baño 1',B2:'Baño 2 (suite)'},holdBase:'Mantén para ver la base',bath3:'El tercer baño del dúplex sigue los acabados del baño 2.',sol3d:'Maqueta 3D',solPhoto:'Imagen real',solPlay:'Día completo',
cfgProv:'Acabados provisionales pendientes de validación del promotor. Los suplementos se confirmarán antes de la reserva.',
cfgAmb:'simulación orientativa',chooseUnit:'¿Qué vivienda quieres configurar?',
cat:{paviment:'Pavimento general',cuina_frontals_baixos:'Frentes bajos de cocina',cuina_frontals_alts:'Frentes altos de cocina',cuina_taulell:'Encimera',cuina_led:'Iluminación LED',bany_paviment:'Pavimento de baño',bany_parets:'Revestimiento de paredes',bany_paret_especial:'Pared especial (ducha)',bany_moble:'Mueble de lavabo',fusteria_vidres:'Acristalamiento'},
ref:'De serie',supp:'Suplemento a confirmar',next:'Siguiente',prev:'Atrás',seeSum:'Ver resumen',total:'Precio vivienda + anexos',
annexes:'Anexos',noSlot:'Sin plaza',noMoto:'Sin plaza de moto',noStore:'Sin trastero',
gate:'Para ver el resumen y recibirlo, déjanos tus datos.',name:'Nombre y apellidos',phone:'Teléfono / WhatsApp',email:'Correo electrónico',msg:'Mensaje (opcional)',
consent:'Acepto que Metge Mir 24 trate mis datos para responder a mi solicitud, según la política de privacidad.',privacy:'Ver política de privacidad',
sumTitle:'Resumen de tu configuración',finishes:'Acabados elegidos',sendMail:'Enviar por correo',copy:'Copiar resumen',copied:'Resumen copiado',
mailHint:'Si tu dispositivo no abre el correo, escríbenos a',sumNote:'Configuración orientativa sin valor contractual. Precio de la vivienda y anexos sin IVA; acabados con suplemento a confirmar.',
ent:'Entorno',entLead:'Todo lo del día a día a pie: tren R4, bus, campus UAB, supermercados y el centro de Sabadell.',scale:['A pie','Sabadell','Área metropolitana'],
entNote:'Mapas de referencia del estudio de entorno. Distancias y tiempos estimados, pendientes de confirmar puerta a puerta.',walk:'a pie',car:'en coche',train:'en tren',
cats:{tr:'Conexiones',sh:'Compras',ed:'Educación',he:'Salud',le:'Ocio y parques',ce:'Centro y cultura'},allCats:'Todo',
sol:'Sol',solLead:'Gira la maqueta y mueve el mes y la hora para ver el sol y las sombras sobre el edificio.',month:'Mes',hour:'Hora',
months:['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'],sunUp:'Sol a',elev:'de altura',night:'El sol está bajo el horizonte',
litToday:'Horas de sol directo ese día por fachada (cielo despejado)',solNote:'Simulación orientativa. Modelo 3D del proyecto con su entorno; orientación estimada sobre cartografía (Metge Mir 341°, Bonavista 71°), pendiente de validar por el arquitecto. Las imágenes reales corresponden al mes de mayo.',
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
cfgSteps:['Habitatge','Terra','Cuina','Bany 1','Bany 2','Altres','Les teves dades','Resum'],roomCap:{S:'Saló-menjador',K:'Cuina',B1:'Bany 1',B2:'Bany 2 (suite)'},holdBase:'Mantén per veure la base',bath3:'El tercer bany del dúplex segueix els acabats del bany 2.',sol3d:'Maqueta 3D',solPhoto:'Imatge real',solPlay:'Dia complet',
cfgProv:'Acabats provisionals pendents de validació del promotor. Els suplements es confirmaran abans de la reserva.',
cfgAmb:'simulació orientativa',chooseUnit:'Quin habitatge vols configurar?',
cat:{paviment:'Paviment general',cuina_frontals_baixos:'Frontals baixos de cuina',cuina_frontals_alts:'Frontals alts de cuina',cuina_taulell:'Taulell',cuina_led:'Il·luminació LED',bany_paviment:'Paviment del bany',bany_parets:'Revestiment de parets',bany_paret_especial:'Paret especial (dutxa)',bany_moble:'Moble de lavabo',fusteria_vidres:'Vidres'},
ref:'De sèrie',supp:'Suplement a confirmar',next:'Següent',prev:'Enrere',seeSum:'Veure resum',total:'Preu habitatge + annexos',
annexes:'Annexos',noSlot:'Sense plaça',noMoto:'Sense plaça de moto',noStore:'Sense traster',
gate:'Per veure el resum i rebre’l, deixa’ns les teves dades.',name:'Nom i cognoms',phone:'Telèfon / WhatsApp',email:'Correu electrònic',msg:'Missatge (opcional)',
consent:'Accepto que Metge Mir 24 tracti les meves dades per respondre la meva sol·licitud, segons la política de privacitat.',privacy:'Veure política de privacitat',
sumTitle:'Resum de la teva configuració',finishes:'Acabats escollits',sendMail:'Enviar per correu',copy:'Copiar el resum',copied:'Resum copiat',
mailHint:'Si el teu dispositiu no obre el correu, escriu-nos a',sumNote:'Configuració orientativa sense valor contractual. Preu de l’habitatge i annexos sense IVA; acabats amb suplement a confirmar.',
ent:'Entorn',entLead:'Tot el del dia a dia a peu: tren R4, bus, campus UAB, supermercats i el centre de Sabadell.',scale:['A peu','Sabadell','Àrea metropolitana'],
entNote:'Mapes de referència de l’estudi d’entorn. Distàncies i temps estimats, pendents de confirmar porta a porta.',walk:'a peu',car:'en cotxe',train:'en tren',
cats:{tr:'Connexions',sh:'Compres',ed:'Educació',he:'Salut',le:'Lleure i parcs',ce:'Centre i cultura'},allCats:'Tot',
sol:'Sol',solLead:'Gira la maqueta i mou el mes i l’hora per veure el sol i les ombres sobre l’edifici.',month:'Mes',hour:'Hora',
months:['gen','febr','març','abr','maig','juny','jul','ag','set','oct','nov','des'],sunUp:'Sol a',elev:'d’altura',night:'El sol és sota l’horitzó',
litToday:'Hores de sol directe aquell dia per façana (cel serè)',solNote:'Simulació orientativa. Model 3D del projecte amb el seu entorn; orientació estimada sobre cartografia (Metge Mir 341°, Bonavista 71°), pendent de validar per l’arquitecte. Les imatges reals corresponen al mes de maig.',
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
const state={screen:'s-ed',hist:[],unit:null,view:'v1',floor:null,cmp:new Set(),agent:false,cfg:{step:0,unit:null,sel:{},park:null,moto:null,store:null,lead:null},park:{sel:null,filter:'all'},ent:{scale:0,cat:'all',sel:null},sol:{m:4,h:12,mode:'3d',play:false}};

/* ---------- navigation ---------- */
const crumbs={'s-ed':'Metge Mir 24','s-viv':'dock.viv','s-pis':'','s-park':'dock.park','s-cfg':'dock.cfg','s-ent':'dock.ent','s-sol':'dock.sol','s-obra':'dock.obra','s-cal':'dock.cal','s-gal':'dock.gal','s-con':'dock.con'};
const renders={'s-ed':renderEd,'s-viv':renderViv,'s-pis':renderPis,'s-park':renderPark,'s-cfg':renderCfg,'s-ent':renderEnt,'s-sol':renderSol,'s-obra':renderObra,'s-cal':renderCal,'s-gal':renderGal,'s-con':renderCon};
function bgSync(id){{const ov=$('#obra-tl video');if(ov){id==='s-obra'?ov.play().catch(()=>{}):ov.pause()}}const bv=$('#bgv video'),pg=$('#'+id).classList.contains('page');$('#bgv').classList.toggle('on',pg);if(bv){pg?bv.play().catch(()=>{}):bv.pause()}}
function go(id,push=true){
  if(push&&state.screen!==id)state.hist.push(state.screen);
  state.screen=id;closeSheet();bgSync(id);
  $$('.screen').forEach(s=>s.classList.toggle('on',s.id===id));
  $('#b-back').hidden=id==='s-ed';document.body.classList.toggle('on-cfg',id==='s-cfg');
  document.body.classList.toggle('lightTop',['s-viv','s-obra','s-cal','s-gal','s-con','s-pis','s-park','s-sol'].includes(id));
  const c=crumbs[id];$('#crumb').textContent=id==='s-pis'&&state.unit?`${t('dock.viv')} · ${uName(state.unit)}`:(c.includes('.')?t(c):c);
  renders[id]&&renders[id]();
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
  $('#b-home span').textContent=L==='ca'?'Inici':'Inicio';$('#m-nav').innerHTML=`<a data-intro>${icon('play')}${L==='ca'?'Inici · vídeo':'Inicio · vídeo'}</a>`+nav.map(([id,k,ic])=>`<a data-go="${id}">${icon(ic)}${t(k)}</a>`).join('');
  $('#m-foot').innerHTML=`<p>${t('cookies')}</p><button data-legal>${t('legal')}</button><p style="margin-top:12px">${esc(D.marketing)} · iShowi by BoomBizz</p>`;
  $('#dock').innerHTML=[['s-viv','viv','list'],['s-park','park','car'],['s-cfg','cfg','brush'],['s-ent','ent','pin'],['s-sol','sol','sun'],['s-obra','obra','crane'],['s-cal','cal','list'],['s-gal','gal','img'],['s-con','con','mail']].map(([id,k,ic])=>`<button data-go="${id}">${icon(ic)}${t('dock.'+k)}</button>`).join('');
  const minP=Math.min(...D.units.map(u=>u.price));
  $('#stats').innerHTML=`<span>${t('total12')}</span><span>${t('dup3')}</span><span>${t('from')} ${eur(minP)} ${t('plusVat')}</span><span>${t('walk5')}</span>`;
  $('#agentbar').textContent=t('agentOn');
  go(state.screen,false);
}

/* ---------- building ---------- */
const VIEWS=[['v1','VIDEO'],['v2','fac_acces'],['v3','fac_frontal'],['v4','fac_balcons'],['v5','fac_atic'],['v6','fac_terrassa']];
const BANDS={AT:[[240,150],[500,108],[820,62],[1100,108],[1410,140],[1410,192],[820,142],[235,203]],
P2:[[235,205],[820,145],[1410,195],[1410,420],[820,430],[235,410]],
P1:[[235,410],[820,430],[1410,420],[1410,560],[820,600],[235,555]],
PB:[[235,555],[820,600],[1410,560],[1410,640],[820,850],[235,640]]};
function renderEd(){
  const st=$('#ed-stage');
  if(!st.children.length)st.innerHTML=VIEWS.map(([k,f])=>f==='VIDEO'?`<div class="view" data-v="${k}"><video src="${D.media.dianit}" poster="sun/s2.webp" autoplay muted loop playsinline></video></div>`:`<div class="view" data-v="${k}"><img src="img/${f}.webp" alt="" loading="lazy"></div>`).join('');
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
const BATH=['bany_paviment','bany_parets','bany_paret_especial','bany_moble'];
const ROOMS={S:{w:1280,h:960,cats:['paviment']},K:{w:1400,h:788,cats:['paviment','cuina_frontals_baixos','cuina_frontals_alts','cuina_taulell','cuina_led']},B1:{w:1280,h:960,cats:BATH},B2:{w:1280,h:960,cats:BATH}};
const CSTEP=[{room:'S',cats:[]},{room:'S',cats:['paviment']},{room:'K',cats:['cuina_frontals_baixos','cuina_frontals_alts','cuina_taulell','cuina_led']},{room:'B1',cats:BATH},{room:'B2',cats:BATH},{room:'K',cats:['fusteria_vidres']},{room:'S',cats:[]},{room:'S',cats:[]}];
const DEF={paviment:'SV.C',cuina_frontals_baixos:'FB.B',cuina_frontals_alts:'FA.B',cuina_taulell:'EC.A',cuina_led:'IL.B'};
const skey=(room,cat)=>room[0]==='B'&&BATH.includes(cat)?room+':'+cat:cat;
const opts=c=>D.finishes.options.filter(o=>o.cat===c);
const optOf=code=>D.finishes.options.find(o=>o.code===code);
const lyFile=(room,code)=>code==='IL.B'||!code?'':`cfg/${room}_${code.replace('.','_')}.webp`;
function cfgInit(id){const c=state.cfg;if(id){c.unit=id;if(c.step===0)c.step=1}
  D.finishes.options.forEach(o=>{[o.cat,'B1:'+o.cat,'B2:'+o.cat].forEach(k=>{if(k.includes(':')&&!BATH.includes(o.cat))return;if(!c.sel[k])c.sel[k]=DEF[o.cat]||opts(o.cat)[0].code})})}
function roomHTML(room,cls=''){const r=ROOMS[room],c=state.cfg;return `<div class="room ${cls}" data-room="${room}" style="aspect-ratio:${r.w}/${r.h}"><img src="cfg/${room}_base.webp" alt="">${r.cats.map(cat=>{const f=lyFile(room,c.sel[skey(room,cat)]);return f?`<img class="ly" data-ly="${cat}" src="${f}" alt="">`:`<img class="ly" data-ly="${cat}" alt="" hidden>`}).join('')}</div>`}
function fitRoom(){const b=$('#c-board'),rm=b&&b.querySelector('.room');if(!rm)return;const r=ROOMS[rm.dataset.room],W=b.clientWidth,H=b.clientHeight,s=Math.min(W/r.w,H/r.h);rm.style.width=Math.floor(r.w*s)+'px';rm.style.height=Math.floor(r.h*s)+'px'}
function setLayer(room,cat){const rm=$('#c-board .room');if(!rm||rm.dataset.room!==room)return;const old=rm.querySelector(`[data-ly="${cat}"]`),f=lyFile(room,state.cfg.sel[skey(room,cat)]);
  const sh=rm.querySelector('.shine');if(sh){sh.classList.remove('go');void sh.offsetWidth;sh.classList.add('go')}
  if(!f){if(old){old.style.opacity=0;setTimeout(()=>{old.hidden=true;old.removeAttribute('src')},450)}return}
  const n=new Image();n.className='ly';n.dataset.ly=cat;n.alt='';n.style.opacity=0;n.onload=()=>{requestAnimationFrame(()=>{n.style.opacity=1});setTimeout(()=>old&&old.remove(),500)};n.src=f;old?old.after(n):rm.appendChild(n)}
function renderCfg(){cfgInit();const c=state.cfg,st=CSTEP[c.step],u=D.units.find(x=>x.id===c.unit);
  $('#c-blur').style.backgroundImage=`url(cfg/${st.room}_base.webp)`;
  $('#c-steps').innerHTML=t('cfgSteps').map((s,i)=>`<button data-step="${i}" class="${i===c.step?'on':''} ${i<c.step?'done':''}" ${(i>0&&!c.unit)||(i===7&&!c.lead)?'disabled':''}><i>${i<c.step?'✓':i+1}</i>${s}</button>`).join('');
  const on=$('#c-steps .on');on&&on.scrollIntoView({inline:'center',block:'nearest'});
  $('#c-board').innerHTML=roomHTML(st.room,'enter')+'';const rm=$('#c-board .room');rm.insertAdjacentHTML('beforeend',`<div class="shine"></div><span class="capt">${t('roomCap.'+st.room)} · ${t('cfgAmb')}</span><button class="pill sm cmpb" data-hold>${t('holdBase')}</button>`);fitRoom();
  renderCfgPanel(true)}
function renderCfgPanel(anim){const c=state.cfg,st=CSTEP[c.step],u=D.units.find(x=>x.id===c.unit),sc=$('#c-scroll');let h='';const keep=sc.scrollTop;
  if(c.step===0){h=`<span class="cat">1 · ${t('cfgSteps')[0]}</span><h2>${t('chooseUnit')}</h2><ul class="ulist">${D.units.map(x=>`<li><button data-cfgunit="${x.id}" style="${x.id===c.unit?'outline:2px solid var(--green);background:#fff':''}"><span class="badge ${x.status}"><i></i>${t('st.'+x.status)}</span><span><b>${uName(x)}</b><small>${x.type} · ${x.beds} ${t('beds')} · ${m2(x.built)}</small></span><span class="pr">${eur(x.price)}<small>${t('plusVat')}</small></span></button></li>`).join('')}</ul>`}
  else if(c.step<=5){h=`<span class="cat">${c.step+1} / 8 · ${uName(u)} · ${u.type}</span><h2>${t('cfgSteps')[c.step]}</h2><p class="prov" style="margin-top:8px">${t('cfgProv')}</p>`+(c.step===4&&u.baths>2?`<p class="note">${t('bath3')}</p>`:'')+st.cats.map(cat=>{const k=skey(st.room,cat);return `<div class="grp"><h3>${t('cat.'+cat)} <small>${esc(optOf(c.sel[k]).name)}</small></h3><div class="ops">${opts(cat).map(o=>{const d=(DEF[cat]||opts(cat)[0].code)===o.code;return `<button class="op ${c.sel[k]===o.code?'on':''}" data-opt="${cat}|${o.code}"><div class="sw" style="${o.img?`background-image:url(sw/${o.img})`:o.code==='IL.B'?'background:linear-gradient(180deg,#fff6d8 0 20%,#3b3b3b 55%)':'background:#3b3b3b'}"></div><b>${esc(o.name)}</b><small>${esc(o.ref||o.code)}</small><em>${d?t('ref'):t('supp')}</em></button>`}).join('')}</div></div>`}).join('');
    if(c.step===5)h+=`<div class="grp"><h3>${t('annexes')}</h3>${selAnnex('parking','park',t('noSlot'))}${selAnnex('moto','moto',t('noMoto'))}${selAnnex('storage','store',t('noStore'))}<button class="btn ghost" data-go="s-park" style="width:100%;margin-top:4px">${icon('car')} ${t('park')}</button></div>`}
  else if(c.step===6){const ld=c.lead||{};h=`<span class="cat">7 / 8</span><h2>${t('cfgSteps')[6]}</h2><p class="sub">${t('gate')}</p><form id="lead-f" novalidate>
   <div class="field"><label for="ld-n">${t('name')}</label><input id="ld-n" required autocomplete="name" value="${esc(ld.n||'')}"></div>
   <div class="field"><label for="ld-p">${t('phone')}</label><input id="ld-p" type="tel" required autocomplete="tel" value="${esc(ld.p||'')}"></div>
   <div class="field"><label for="ld-e">${t('email')}</label><input id="ld-e" type="email" autocomplete="email" value="${esc(ld.e||'')}"></div>
   <label class="chk"><input type="checkbox" id="ld-c" ${ld.c?'checked':''}><span>${t('consent')} <button type="button" data-legal style="text-decoration:underline">${t('privacy')}</button></span></label></form>`}
  else h=summaryHTML();
  sc.innerHTML=h;if(anim){sc.classList.remove('anim');void sc.offsetWidth;sc.classList.add('anim');sc.scrollTop=0}else{sc.classList.remove('anim');sc.scrollTop=keep}
  const tot=u?u.price+annexSum():0;
  $('#c-bar').innerHTML=`<div class="tot"><small>${t('total')} · ${t('plusVat')}</small><b>${u?eur(tot):'—'}</b></div>${c.step>0?`<button class="btn ghost" data-cstep="-1">${t('prev')}</button>`:''}${c.step<6?`<button class="btn" data-cstep="1" ${!c.unit?'disabled':''}>${t('next')}</button>`:c.step===6?`<button class="btn" id="ld-go">${t('seeSum')}</button>`:''}`}
function selAnnex(kind,key,none){const c=state.cfg;const sl=D.annexes.filter(s=>s.kind===kind&&s.status==='available');return `<div class="field"><label>${t(kind)} · ${eur(sl[0]?.price)}</label><select data-annex="${key}"><option value="">${none}</option>${sl.map(s=>`<option value="${s.id}" ${c[key]===s.id?'selected':''}>${s.id}</option>`).join('')}</select></div>`}
function annexSum(){const c=state.cfg;return ['park','moto','store'].reduce((a,k)=>a+(c[k]?D.annexes.find(s=>s.id===c[k]).price:0),0)}
function summaryLines(){const c=state.cfg,out=[];[['S',['paviment']],['K',CSTEP[2].cats],['B1',BATH],['B2',BATH],['K',['fusteria_vidres']]].forEach(([room,cats])=>cats.forEach(cat=>out.push({room,cat,o:optOf(c.sel[skey(room,cat)])})));return out}
function summaryHTML(){
  const c=state.cfg,u=D.units.find(x=>x.id===c.unit);
  const ann=['park','moto','store'].filter(k=>c[k]).map(k=>D.annexes.find(s=>s.id===c[k]));
  return `<span class="cat">8 / 8</span><h2>${t('sumTitle')}</h2><div class="sum">
  <div class="rooms4">${['S','K','B1','B2'].map(r=>`<figure>${roomHTML(r)}<figcaption>${t('roomCap.'+r)}</figcaption></figure>`).join('')}</div>
  <div class="blk"><h3>${uName(u)} · ${u.type} <small>${t('plusVat')}</small></h3><div class="ln"><i style="background-image:url(iso/${u.img}.webp);background-size:contain;background-repeat:no-repeat"></i><span>${u.beds} ${t('beds')} · ${m2(u.built)}${u.ext?' · '+t(u.extKind)+' '+m2(u.ext):''}</span><b>${eur(u.price)}</b></div>
  ${ann.map(s=>`<div class="ln"><i></i><span>${s.id}<small>${t(s.kind)}</small></span><b>${eur(s.price)}</b></div>`).join('')}</div>
  <div class="blk"><h3>${t('finishes')} <small>${t('supp')}</small></h3>${summaryLines().map(({room,cat,o})=>`<div class="ln"><i style="${o.img?`background-image:url(sw/${o.img})`:''}"></i><span>${esc(o.name)}<small>${t('roomCap.'+room)} · ${t('cat.'+cat)}</small></span><b>${o.code}</b></div>`).join('')}</div>
  <div class="grand"><small>${t('total')} · ${t('plusVat')}</small><small style="text-align:right">${t('vatIncl')}</small><b>${eur(u.price+annexSum())}</b><b style="text-align:right;font-size:18px">${eur(vat(u.price+annexSum()))}</b></div>
  <div class="row2"><a class="btn" href="${mailto(summaryText())}">${icon('mail')} ${t('sendMail')}</a><button class="btn ghost" data-copy="sum">${t('copy')}</button></div>
  <p class="note">${t('mailHint')} <b>${D.contact.email}</b></p><p class="note">${t('sumNote')}</p></div>`;
}
function summaryText(){const c=state.cfg,u=D.units.find(x=>x.id===c.unit),ld=c.lead||{};
  const ann=['park','moto','store'].filter(k=>c[k]).map(k=>D.annexes.find(s=>s.id===c[k]));
  return [`Metge Mir 24 · ${t('sumTitle')}`,'',`${t('name')}: ${ld.n||''}`,`${t('phone')}: ${ld.p||''}`,`${t('email')}: ${ld.e||''}`,'',`${uName(u)} (${u.type}) · ${m2(u.built)} · ${eur(u.price)} ${t('plusVat')}`,...ann.map(s=>`${s.id} · ${t(s.kind)} · ${eur(s.price)} ${t('plusVat')}`),`${t('total')}: ${eur(u.price+annexSum())} ${t('plusVat')}`,'',t('finishes')+':',...summaryLines().map(({room,cat,o})=>`- ${t('roomCap.'+room)} · ${t('cat.'+cat)}: ${o.name} (${o.code})`),'',t('sumNote')].join('\n')}
const mailto=(body,subj)=>`mailto:${D.contact.email}?subject=${encodeURIComponent(subj||'Metge Mir 24 · iShowi')}&body=${encodeURIComponent(body)}`;
async function copyText(s){try{await navigator.clipboard.writeText(s);toast(t('copied'))}catch(e){modal(`<h2>${t('copy')}</h2><textarea style="width:100%;height:260px;border-radius:12px;border:1.5px solid var(--line);padding:10px;font-size:13px" readonly>${esc(s)}</textarea>`)}}

/* ---------- entorno ---------- */
const POI=[
['tr','Sabadell Centre · Rodalies R4',350,'3–5 min','walk',0],['tr','Bus urbà TUS · Estació Centre',350,'3–5 min','walk',0],['tr','Estació d’autobusos interurbans',400,'4–7 min','walk',0],['sh','Supermercat · zona Alfons Sala',220,'2–4 min','walk',0],['sh','Mercadona · c/ de Lacy',500,'6–8 min','walk',0],['ed','UAB · Campus Sabadell',300,'3–5 min','walk',0],['he','Farmàcia · c/ de Covadonga',280,'3–5 min','walk',0],['le','Plaça de Sant Salvador',420,'5–7 min','walk',0],['le','Plaça d’Antoni Llonch',450,'5–7 min','walk',0],['ce','Biblioteca',480,'5–7 min','walk',0],['ed','Col·legi Sagrada Família',650,'7–10 min','walk',0],['ed','Escola Sant Nicolau',800,'9–12 min','walk',0],
['ce','Fira Sabadell',750,'8–11 min','walk',1],['ed','ESDi · Escola Superior de Disseny',1000,'12–15 min','walk',1],['ce','Rambla de Sabadell',1000,'12–15 min','walk',1],['ce','Plaça Major',1120,'12–17 min','walk',1],['tr','FGC Sabadell Plaça Major (S2)',1150,'13–17 min','walk',1],['sh','Mercat Central',1450,'17–21 min','walk',1],['he','CAP Sabadell Centre',1700,'19–25 min','walk',1],['he','Hospital Parc Taulí',2050,'8–12 min','car',1],['le','Parc de Catalunya',3500,'10–15 min','car',1],
['ed','UAB · Campus Bellaterra',9500,'15–20 min','car',2],['tr','Barcelona · Plaça Catalunya (R4)',23000,'32–36 min','train',2],['tr','Aeroport del Prat · T1',40000,'35–55 min','car',2]];
const CC={tr:'#2e6bd8',sh:'#c08a1e',ed:'#7a4fc2',he:'#c0473c',le:'#2b8a55',ce:'#b8613a'};
let entShown=-1;
function renderEnt(){
  const E=state.ent,sc=E.scale,st=$('#en-map');
  if(entShown!==sc){const dir=sc>entShown?'out':'in';const old=st.querySelector('img');const n=new Image();n.alt=t('scale')[sc];n.className='new '+dir;n.onload=()=>{st.appendChild(n);requestAnimationFrame(()=>requestAnimationFrame(()=>{n.classList.remove('new');if(old){old.classList.add('gone',dir);setTimeout(()=>old.remove(),900)}}))};n.src=`map/e${sc+1}.webp`;entShown=sc}
  const list=POI.filter(p=>p[5]===sc&&(E.cat==='all'||E.cat===p[0])).sort((a,b)=>a[2]-b[2]);
  $('#en-pan').innerHTML=`<span class="cat">Sabadell</span><h2>${t('ent')}</h2><p class="sub">${t('entLead')}</p>
  <div class="seg">${t('scale').map((l,i)=>`<button data-esc="${i}" class="${sc===i?'on':''}">${l}</button>`).join('')}</div>
  <div class="cats"><button data-ecat="all" class="${E.cat==='all'?'on':''}" style="--c:#555"><i>·</i>${t('allCats')}</button>${Object.keys(CC).map(k=>`<button data-ecat="${k}" class="${E.cat===k?'on':''}" style="--c:${CC[k]}"><i></i>${t('cats.'+k)}</button>`).join('')}</div>
  <ul class="plist">${list.map(p=>`<li><button style="--c:${CC[p[0]]}"><i>${p[4]==='walk'?'':p[4]==='car'?'C':'T'}</i><span><b>${esc(p[1])}</b><small>${t('cats.'+p[0])} · ${p[2]>=1000?(p[2]/1000).toLocaleString(L)+' km':p[2]+' m'}</small></span><strong>${p[3]}<br><small>${t(p[4])}</small></strong></button></li>`).join('')}</ul>
  <p class="note">${t('entNote')}</p>`;
}

/* ---------- sol ---------- */
const R=Math.PI/180;
function sunPos(ms,lat,lon){const n=ms/86400000+2440587.5-2451545;const Lm=(280.46+.9856474*n)%360,g=((357.528+.9856003*n)%360)*R;const lam=(Lm+1.915*Math.sin(g)+.02*Math.sin(2*g))*R,eps=(23.439-4e-7*n)*R;
  const ra=Math.atan2(Math.cos(eps)*Math.sin(lam),Math.cos(lam)),dec=Math.asin(Math.sin(eps)*Math.sin(lam));const gmst=(18.697374558+24.06570982441908*n)%24;const H=((gmst*15+lon)*R-ra),la=lat*R;
  const el=Math.asin(Math.sin(la)*Math.sin(dec)+Math.cos(la)*Math.cos(dec)*Math.cos(H));const az=Math.atan2(-Math.sin(H),Math.tan(dec)*Math.cos(la)-Math.sin(la)*Math.cos(H));return {el:el/R,az:(az/R+360)%360}}
function lastSun(y,m){const d=new Date(Date.UTC(y,m+1,0));return d.getUTCDate()-d.getUTCDay()}
function madridMs(m,h){const y=2026,dst=(m>2&&m<9)||(m===2&&21>=lastSun(y,2))||(m===9&&21<lastSun(y,9));const off=dst?2:1;return Date.UTC(y,m,21,0,0)+(h-off)*3600000}
let S3=null,S3g=null;
function sol3dInit(){
  if(S3||!window.THREE)return;const T=THREE,cv=$('#sol-3d');
  const rn=new T.WebGLRenderer({canvas:cv,antialias:true});rn.setPixelRatio(Math.min(devicePixelRatio,2));rn.shadowMap.enabled=true;rn.shadowMap.type=T.PCFSoftShadowMap;
  const sc=new T.Scene(),cam=new T.PerspectiveCamera(38,1,1,600);
  const hemi=new T.HemisphereLight(0xdfe9f5,0x8a7a66,.75);sc.add(hemi);
  const sun=new T.DirectionalLight(0xfff1d6,1.25);sun.castShadow=true;sun.shadow.mapSize.set(2048,2048);Object.assign(sun.shadow.camera,{left:-60,right:60,top:60,bottom:-60,near:1,far:300});sun.shadow.bias=-.0006;sc.add(sun);sc.add(sun.target);sun.target.position.set(-9,0,-9);
  const M=c=>new T.MeshLambertMaterial({color:c});const proc=new T.Group();sc.add(proc);
  const box=(x0,x1,y0,y1,z0,z1,m,cast=true)=>{const g=new T.Mesh(new T.BoxGeometry(x1-x0,y1-y0,z1-z0),m);g.position.set((x0+x1)/2,(y0+y1)/2,(z0+z1)/2);g.castShadow=cast;g.receiveShadow=true;proc.add(g);return g};
  const gr=new T.Mesh(new T.PlaneGeometry(260,260),M(0xb9b3a8));gr.rotation.x=-Math.PI/2;gr.receiveShadow=true;sc.add(gr);S3g=gr;
  const road=M(0x6f6f72);box(0,8,0,.03,-60,60,road,false);box(-60,60,0,.03,0,8,road,false);
  const est=M(0xeadcc0),soc=M(0xd9c7a6),grn=M(0x1f4d36),ter=M(0xb8613a),vei=M(0xcfc9c1),vei2=M(0xbdb6ad);
  box(-17.7,0,0,2.96,-18.3,0,soc);box(-17.7,0,2.96,9.2,-18.3,0,est);
  box(-17.7,0,9.2,10.1,-18.3,-18.0,est);box(-17.7,-17.4,9.2,10.1,-18.3,0,est);box(-.3,0,9.2,10.1,-18.3,0,est);box(-17.7,0,9.2,10.1,-.3,0,est);
  box(-17.5,-3.8,9.2,11.3,-18.1,-4.4,est);
  const roof=new T.Mesh(new T.ConeGeometry(1,1.3,4),ter);roof.rotation.y=Math.PI/4;roof.scale.set(13.7/1.414,1,13.7/1.414);roof.position.set(-10.65,11.95,-11.25);roof.castShadow=true;proc.add(roof);
  for(let f=0;f<3;f++)for(let i=0;i<5;i++){const y=f===0?.6:3.6+(f-1)*3.05,h=f===0?1.9:2.3;box(0,.08,y,y+h,-16.6+i*3.4,-15.2+i*3.4,grn,false);box(-16.6+i*3.4,-15.2+i*3.4,y,y+h,0,.08,grn,false)}
  [[-9,-5.5,3.5],[-9,-5.5,6.55]].forEach(([a,b,y])=>box(a,b,y,y+.12,0,.9,M(0x8d8d8d)));[[-12,-8.5,3.5],[-12,-8.5,6.55]].forEach(([a,b,y])=>box(0,.6,y,y+.12,a,b,M(0x8d8d8d)));
  box(-29,-17.7,0,8.6,-18.3,0,vei);box(-17.7,0,0,9.5,-29.4,-18.3,vei2);box(-29,-17.7,0,8.2,-29.4,-18.3,vei);
  box(8,16.5,0,8.2,-29,0,vei2);box(8,16.5,0,8.6,8,13.9,vei);box(-29,0,0,8.4,8,13.9,vei);
  const label=(txt,x,y,z,s=7)=>{const c=document.createElement('canvas');c.width=512;c.height=96;const g=c.getContext('2d');g.fillStyle='rgba(255,252,246,.95)';g.beginPath();g.roundRect(4,4,504,88,44);g.fill();g.fillStyle='#1b211d';g.font='600 40px Plus Jakarta Sans, sans-serif';g.textAlign='center';g.textBaseline='middle';g.fillText(txt,256,50);const sp=new T.Sprite(new T.SpriteMaterial({map:new T.CanvasTexture(c),depthTest:false}));sp.scale.set(s,s*96/512,1);sp.position.set(x,y,z);sc.add(sp);return sp};
  label('C/ Metge Mir',4,1.2,-9);label('C/ Bonavista',-9,1.2,4);
  const nd=[Math.cos(-341*R),Math.sin(-341*R)];const ar=new T.ArrowHelper(new T.Vector3(nd[0],0,nd[1]),new T.Vector3(10,.2,12),7,0xc0473c,2.2,1.4);sc.add(ar);label('N',10+nd[0]*8.5,1,12+nd[1]*8.5,2.2);
  const sph=new T.Mesh(new T.SphereGeometry(1.6,20,20),new T.MeshBasicMaterial({color:0xf6c443}));sc.add(sph);
  S3={rn,sc,cam,sun,hemi,sph,th:.85,ph:.95,rad:74};
  if(D.media.model&&T.GLTFLoader){rn.outputEncoding=T.sRGBEncoding;new T.GLTFLoader().load(D.media.model,g=>{g.scene.traverse(o=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=true;if(o.material&&o.material.transparent){o.castShadow=false;o.material.depthWrite=false}}});sc.remove(proc);S3g.position.y=-.7;sc.add(g.scene);S3.real=true;sol3dDraw()},undefined,()=>{rn.outputEncoding=T.LinearEncoding;sol3dDraw()})}
  let drag=null;cv.addEventListener('pointerdown',e=>{drag=[e.clientX,e.clientY];cv.setPointerCapture(e.pointerId)});cv.addEventListener('pointermove',e=>{if(!drag)return;S3.th-=(e.clientX-drag[0])*.008;S3.ph=Math.max(.25,Math.min(1.45,S3.ph-(e.clientY-drag[1])*.006));drag=[e.clientX,e.clientY];sol3dDraw()});
  ['pointerup','pointercancel'].forEach(v=>cv.addEventListener(v,()=>drag=null));cv.addEventListener('wheel',e=>{e.preventDefault();S3.rad=Math.max(40,Math.min(130,S3.rad+e.deltaY*.05));sol3dDraw()},{passive:false});
  new ResizeObserver(()=>sol3dDraw()).observe(cv.parentElement);
}
function sol3dDraw(){if(!S3||state.screen!=='s-sol')return;const {rn,sc,cam,sun,hemi,sph}=S3,cv=rn.domElement,W=cv.parentElement.clientWidth,H=cv.parentElement.clientHeight;if(!W||!H)return;
  rn.setSize(W,H,false);cam.aspect=W/H;cam.updateProjectionMatrix();
  const c=[-9,4,-9];cam.position.set(c[0]+S3.rad*Math.sin(S3.ph)*Math.cos(S3.th),c[1]+S3.rad*Math.cos(S3.ph),c[2]+S3.rad*Math.sin(S3.ph)*Math.sin(S3.th));cam.lookAt(c[0],c[1],c[2]);
  const p=S3.p||{el:40,az:180},a=(p.az-341)*R,e=Math.max(p.el,-10)*R,d=[Math.cos(a)*Math.cos(e),Math.sin(e),Math.sin(a)*Math.cos(e)];
  sun.position.set(c[0]+d[0]*120,d[1]*120,c[2]+d[2]*120);sph.position.set(c[0]+d[0]*52,Math.max(d[1]*52,-5),c[2]+d[2]*52);sph.visible=p.el>-2;
  const k=Math.max(0,Math.min(1,p.el/12));sun.intensity=1.3*k;sun.color.setHSL(.1,.75,.55+.35*Math.min(1,p.el/35));hemi.intensity=.22+.55*k;
  sc.background=new THREE.Color().setHSL(.58,.45,.1+.72*k);rn.render(sc,cam)}
const PH=[[6,3],[8.5,0],[13.5,1],[19.5,2],[21.8,3]];
function renderSol(panel=true){
  const S=state.sol,sun=D.sun,p=sunPos(madridMs(S.m,S.h),sun.lat,sun.lon),up=p.el>0;
  const st=$('#s-sol .stg');st.classList.toggle('photo',S.mode==='photo');
  if(S.mode==='photo'){let i=0;while(i<PH.length-2&&S.h>PH[i+1][0])i++;const a=PH[i],b=PH[i+1],f=Math.max(0,Math.min(1,(S.h-a[0])/(b[0]-a[0])));$$('#sol-ph img').forEach((im,k)=>{im.style.opacity=k===b[1]?f:k===a[1]?1:0;im.style.zIndex=k===b[1]?2:k===a[1]?1:0})}
  else{sol3dInit();if(S3){S3.p=p;sol3dDraw()}}
  const lit=f=>up&&Math.cos((p.az-f.az)*R)>0;
  $('#sol-read').innerHTML=up?`<span class="pill">${t('sunUp')} <b>${Math.round(p.az)}°</b></span><span class="pill"><b>${Math.round(p.el)}°</b> ${t('elev')}</span>`:`<span class="pill dark">${t('night')}</span>`;
  const hh=Math.floor(S.h),mi=Math.round((S.h-hh)*60),hs=`${String(hh).padStart(2,'0')}:${String(mi).padStart(2,'0')}`;
  if(!panel){$('#sol-ho').textContent=hs;$('#sol-h').value=S.h;$$('#sol-fac div').forEach((d,i)=>d.classList.toggle('lit',lit(sun.facades[i])));const cx=(S.h-5)/17.5*400,cy=140-Math.max(p.el,-5)/75*130;const dot=$('#sol-dot');dot&&(dot.setAttribute('cx',cx),dot.setAttribute('cy',cy));return}
  const hrs=sun.facades.map(f=>{let n=0;for(let mm=0;mm<24*60;mm+=5){const q=sunPos(madridMs(S.m,mm/60),sun.lat,sun.lon);if(q.el>0&&Math.cos((q.az-f.az)*R)>0)n+=5}return n});
  const fmt=n=>`${Math.floor(n/60)} h ${String(n%60).padStart(2,'0')}`;
  const pts=[];for(let hr=5;hr<=22.5;hr+=.25){const q=sunPos(madridMs(S.m,hr),sun.lat,sun.lon);pts.push([(hr-5)/17.5*400,140-Math.max(q.el,-5)/75*130])}
  const cx=(S.h-5)/17.5*400,cy=140-Math.max(p.el,-5)/75*130;
  $('#sol-pan').innerHTML=`<span class="cat">${L==='ca'?'Simulació 3D':'Simulación 3D'}</span><h2>${t('sol')}</h2><p class="sub">${t('solLead')}</p>
  <div class="seg"><button data-solmode="3d" class="${S.mode!=='photo'?'on':''}">${t('sol3d')}</button><button data-solmode="photo" class="${S.mode==='photo'?'on':''}">${t('solPhoto')}</button><button data-solplay class="${S.play?'on':''}">${S.play?'❚❚':'▶'} ${t('solPlay')}</button></div>
  <div class="sl"><span>${t('month')}</span><input type="range" class="mo" min="0" max="11" step="1" value="${S.m}" id="sol-m" aria-label="${t('month')}"><output>${t('months')[S.m]}</output></div>
  <div class="sl"><span>${t('hour')}</span><input type="range" min="6" max="22" step=".25" value="${S.h}" id="sol-h" aria-label="${t('hour')}"><output id="sol-ho">${hs}</output></div>
  <svg id="sol-chart" viewBox="0 0 400 150" preserveAspectRatio="none"><line x1="0" y1="140" x2="400" y2="140" stroke="#9aa"/><path d="M${pts.map(q=>q.map(v=>v.toFixed(1)).join(',')).join(' L')}" fill="none" stroke="#e0a85a" stroke-width="3"/><circle id="sol-dot" cx="${cx}" cy="${cy}" r="6" fill="#f6c443" stroke="#fff" stroke-width="2"/>${[8,12,16,20].map(h=>`<text x="${(h-5)/17.5*400}" y="148" font-size="9" text-anchor="middle" fill="#667">${h}h</text>`).join('')}</svg>
  <p class="sub" style="margin-top:12px">${t('litToday')}</p>
  <div class="fac" id="sol-fac">${sun.facades.map((f,i)=>`<div class="${lit(f)?'lit':''}"><u></u><span><b>${f[L]}</b><small>${L==='ca'?'Orientació':'Orientación'} ${f.az}°</small></span><strong>${fmt(hrs[i])}</strong></div>`).join('')}</div>
  <p class="note">${t('solNote')}</p>`;
}
let solTimer=null;
function solPlay(on){state.sol.play=on;clearInterval(solTimer);if(on)solTimer=setInterval(()=>{if(state.screen!=='s-sol'){solPlay(false);return}state.sol.h+=.125;if(state.sol.h>22)state.sol.h=6;renderSol(false)},60);renderSol()}

/* ---------- obra, calidades, galería, contacto ---------- */
function renderObra(){
  const u=state.unit||D.units[0];const pay=t('pay');
  const keep=$('#obra-tl');
  $('#obra').innerHTML=`<h1>${t('obraTitle')}</h1><p class="lead">${t('obraLead')}</p><div id="obra-slot"></div><div class="grid2">
  <div class="box"><h2>${L==='ca'?'Calendari d’obra':'Calendario de obra'}</h2><ul class="tl">${t('miles').map((m,i)=>`<li class="${i===0?'next':''}"><b>${m[0]}</b><small>${m[1]}</small></li>`).join('')}</ul></div>
  <div class="box"><h2>${t('payTitle')}</h2><p class="sub">${t('payFor')} <select id="pay-u" style="height:40px;border-radius:999px;border:1.5px solid var(--line);padding:0 10px">${D.units.map(x=>`<option value="${x.id}" ${x.id===u.id?'selected':''}>${uName(x)} · ${eur(x.price)}</option>`).join('')}</select></p>
  <div class="bar">${pay.filter(p=>p[2]).map((p,i)=>`<i style="width:${p[2]*100}%;background:${['#1f4d36','#2f6b4c','#5a8f6f','#b8613a'][i]}"></i>`).join('')}</div>
  <ul class="pay">${pay.map(p=>`<li><span>${p[0]}<small>${p[1]}${p[2]?' · '+Math.round(p[2]*100)+' %':''}</small></span><b>${p[2]?eur(u.price*p[2]):'—'}</b></li>`).join('')}</ul><p class="note">${t('payNote')}</p></div></div>`;
  if(D.media.obra){if(keep&&keep.dataset.l===L)$('#obra-slot').replaceWith(keep);else{keep&&keep.querySelector('video').pause();obraTL()}}
}
function obraTL(){
  const ph=L==='ca'?['Estat actual','Enderroc i excavació','Estructura','Edifici acabat']:['Estado actual','Derribo y excavación','Estructura','Edificio terminado'];
  const cuts=[0,.22,.5,.82];
  const el=document.createElement('div');el.id='obra-tl';el.className='otl';el.dataset.l=L;
  el.innerHTML=`<div class="oshade"></div>
  <div class="ohead"><small>${L==='ca'?'Timelapse · recreació il·lustrativa':'Timelapse · recreación ilustrativa'}</small><h2>${L==='ca'?'Del solar a casa teva':'Del solar a tu casa'}</h2></div>
  <button class="oplay" aria-label="${L==='ca'?'Reproduir o aturar':'Reproducir o pausar'}"><svg viewBox="0 0 24 24" width="20" height="20"><path class="pl" d="M8 5v14l11-7z" fill="currentColor"/><path class="pa" d="M7 5h4v14H7zM13 5h4v14h-4z" fill="currentColor"/></svg></button>
  <div class="obar"><div class="otrack"><i></i>${cuts.slice(1).map(c=>`<b style="left:${c*100}%"></b>`).join('')}</div><div class="oph">${ph.map((p,i)=>`<button data-ph="${i}" style="left:${cuts[i]*100}%;width:${((cuts[i+1]||1)-cuts[i])*100}%"><span>${p}</span></button>`).join('')}</div></div>`;
  const v=document.createElement('video');Object.assign(v,{src:D.media.obra,poster:'video/obra.webp',muted:true,loop:true,playsInline:true,preload:'auto'});v.setAttribute('playsinline','');v.setAttribute('muted','');el.prepend(v);
  $('#obra-slot').replaceWith(el);
  const fill=el.querySelector('.otrack i'),tr=el.querySelector('.otrack'),bs=[...el.querySelectorAll('[data-ph]')];
  const sync=()=>{const k=v.duration?v.currentTime/v.duration:0;fill.style.width=k*100+'%';let n=0;cuts.forEach((c,i)=>{if(k>=c-.001)n=i});bs.forEach((b,i)=>b.classList.toggle('on',i===n));el.classList.toggle('playing',!v.paused)};
  const loop=()=>{sync();if(!v.paused)requestAnimationFrame(loop)};
  ['play','pause','seeked','loadedmetadata','timeupdate'].forEach(e=>v.addEventListener(e,e==='play'?loop:sync));
  const tog=()=>{v.paused?v.play().catch(()=>{}):v.pause()};
  el.querySelector('.oplay').onclick=tog;v.onclick=tog;
  const seek=k=>{if(v.duration){v.currentTime=Math.max(0,Math.min(.985,k))*v.duration;sync()}};
  let drag=false;const at=e=>{const r=tr.getBoundingClientRect();seek((e.clientX-r.left)/r.width)};
  tr.addEventListener('pointerdown',e=>{drag=true;tr.setPointerCapture(e.pointerId);v.pause();at(e)});tr.addEventListener('pointermove',e=>drag&&at(e));['pointerup','pointercancel'].forEach(n=>tr.addEventListener(n,()=>drag=false));
  bs.forEach((b,i)=>b.onclick=()=>{seek(cuts[i]+.005);v.play().catch(()=>{})});
  sync();if(state.screen==='s-obra')v.play().catch(()=>{});
}
const CAL={es:[['Fachadas y zonas comunes',['Fachadas estucadas con zócalo cerámico en la fachada principal','Carpintería exterior de aluminio con rotura de puente térmico y aislamiento acústico','Persianas térmicas motorizadas','Vestíbulo con revestimiento de madera y gres porcelánico de gran formato','Ascensor OTIS o similar']],['Terrazas, aparcamiento y trasteros',['Pavimento de gres porcelánico antideslizante en terrazas y balcones','Punto de luz y enchufe en terrazas','Barandillas de hierro pintadas','Puerta de garaje automática y pavimento de hormigón','Trasteros enyesados y pintados con punto de luz']],['Interiores',['Parquet flotante laminado','Baños con revestimiento cerámico en todas las zonas','Platos de ducha de resinas minerales','Sanitarios ROCA y grifería IMEX o similar','Lavabo cerámico con mueble suspendido de dos cajones']],['Cocina',['Muebles altos y bajos según distribución','Placa de inducción, campana integrada y horno multifunción Balay o similar','Encimera y frontal de 70 cm en material tipo Corian','Fregadero de acero inoxidable encastado']],['Carpintería e instalaciones',['Puertas block de DM lacadas en blanco','Puerta de seguridad de acceso','Aerotermia para agua caliente sanitaria','Climatización por conductos frío/calor (fan-coil)','Videoportero y preinstalación de lavadora y secadora']]],
ca:[['Façanes i zones comunes',['Façanes estucades amb sòcol ceràmic a la façana principal','Fusteria exterior d’alumini amb trencament de pont tèrmic i aïllament acústic','Persianes tèrmiques motoritzades','Vestíbul amb revestiment de fusta i gres porcel·lànic de gran format','Ascensor OTIS o similar']],['Terrasses, aparcament i trasters',['Paviment de gres porcel·lànic antilliscant a terrasses i balcons','Punt de llum i endoll a les terrasses','Baranes de ferro pintades','Porta de garatge automàtica i paviment de formigó','Trasters enguixats i pintats amb punt de llum']],['Interiors',['Parquet flotant laminat','Banys amb revestiment ceràmic a totes les zones','Plats de dutxa de resines minerals','Sanitaris ROCA i aixetes IMEX o similar','Lavabo ceràmic amb moble suspès de dos calaixos']],['Cuina',['Mobles alts i baixos segons distribució','Placa d’inducció, campana integrada i forn multifunció Balay o similar','Taulell i frontal de 70 cm en material tipus Corian','Aigüera d’acer inoxidable encastada']],['Fusteria i instal·lacions',['Portes block de DM lacades en blanc','Porta de seguretat d’accés','Aerotèrmia per a aigua calenta sanitària','Climatització per conductes fred/calor (fan-coil)','Videoporter i preinstal·lació de rentadora i assecadora']]]};
function renderCal(){$('#cal').innerHTML=`<h1>${t('calTitle')}</h1><p class="lead">${t('calLead')}</p><div class="grid2">${CAL[L].map(([h,l])=>`<div class="box"><h2>${h}</h2><ul>${l.map(x=>`<li>${x}</li>`).join('')}</ul></div>`).join('')}</div><p class="note">${L==='ca'?'SUBJECTE A MODIFICACIONS PER NECESSITATS DE L’OBRA':'SUJETO A MODIFICACIONES POR NECESIDADES DE LA OBRA'}</p>`}
const GAL=[['sun/s2.webp','v1',1],['sun/s4.webp','nit',0],['img/fac_atic.webp','v5',0],['img/fac_balcons.webp','v4',0],['int/int_salo.webp','salo',1],['int/int_dorm.webp','dorm',0],['int/int_terr.webp','terr',0],['img/fac_acces.webp','v2',0],['img/fac_frontal.webp','v3',0],['img/fac_terrassa.webp','v6',1]];
const galCap=k=>({nit:L==='ca'?'De nit':'De noche',salo:L==='ca'?'Sala d’estar del dúplex':'Salón del dúplex',dorm:L==='ca'?'Dormitori':'Dormitorio',terr:L==='ca'?'Sortida a la terrassa':'Salida a la terraza'})[k]||t('views.'+k);
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
  if(g('[data-intro]')){$('#menu').classList.remove('on');showIntro();return}
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
  if(el=g('[data-addslot]')){const s=D.annexes.find(x=>x.id===el.dataset.addslot);state.cfg[{parking:'park',moto:'moto',storage:'store'}[s.kind]]=s.id;if(!state.cfg.unit){state.cfg.step=0}else state.cfg.step=5;go('s-cfg');return}
  if(el=g('[data-askslot]')){go('s-con');setTimeout(()=>{$('#cf-m').value=`${el.dataset.askslot} · `},50);return}
  if(el=g('[data-step]')){if(!el.disabled){state.cfg.step=+el.dataset.step;renderCfg()}return}
  if(el=g('[data-cfgunit]')){state.cfg.unit=el.dataset.cfgunit;renderCfg();return}
  if(el=g('[data-opt]')){const [c,o]=el.dataset.opt.split('|'),rm=CSTEP[state.cfg.step].room;state.cfg.sel[skey(rm,c)]=o;setLayer(rm,c);renderCfgPanel(false);return}
  if(el=g('[data-solmode]')){state.sol.mode=el.dataset.solmode;renderSol();return}
  if(el=g('[data-solplay]')){solPlay(!state.sol.play);return}
  if(el=g('[data-cstep]')){state.cfg.step=Math.max(0,Math.min(7,state.cfg.step+ +el.dataset.cstep));renderCfg();return}
  if(el=g('#ld-go')){const n=$('#ld-n').value.trim(),p=$('#ld-p').value.trim(),em=$('#ld-e').value.trim(),c=$('#ld-c').checked;
    if(!n||p.replace(/\D/g,'').length<9||!c){toast(L==='ca'?'Omple nom, telèfon i accepta la privacitat':'Rellena nombre, teléfono y acepta la privacidad');return}
    state.cfg.lead={n,p,e:em,c};state.cfg.step=7;renderCfg();return}
  if(el=g('[data-copy]')){copyText(el.dataset.copy==='sum'?summaryText():D.contact.email);return}
  if(el=g('[data-esc]')){state.ent.scale=+el.dataset.esc;state.ent.sel=null;renderEnt();return}
  if(el=g('[data-ecat]')){state.ent.cat=el.dataset.ecat;renderEnt();return}
    if(el=g('[data-lb]')){lb(+el.dataset.lb);return}
});
document.addEventListener('change',e=>{
  const el=e.target;
  if(el.dataset.cmp){el.checked?state.cmp.add(el.dataset.cmp):state.cmp.delete(el.dataset.cmp);if(state.cmp.size>3){state.cmp.delete(el.dataset.cmp);el.checked=false}updCmp()}
  if(el.id==='f-floor'){flt.floor=el.value;renderViv()}if(el.id==='f-beds'){flt.beds=el.value;renderViv()}if(el.id==='f-sort'){flt.sort=el.value;renderViv()}
  if(el.dataset.annex){state.cfg[el.dataset.annex]=el.value||null;renderCfg()}
  if(el.id==='pay-u'){state.unit=D.units.find(u=>u.id===el.value);renderObra()}
});
document.addEventListener('input',e=>{if(e.target.id==='sol-m'){state.sol.m=+e.target.value;renderSol();$('#sol-m').focus()}if(e.target.id==='sol-h'){state.sol.h=+e.target.value;renderSol(false)}});
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
new ResizeObserver(()=>fitRoom()).observe($('#c-board'));
$('#enter').onclick=()=>{const i=$('#intro');i.classList.add('zoom');const v=$('#intro video');if(v){v.pause();v.muted=true;const b=$('#snd');b.classList.remove('on');b.setAttribute('aria-pressed','false')}setTimeout(()=>i.classList.add('out'),900);bgSync(state.screen)};
function showIntro(){const i=$('#intro'),v=$('#intro video');closeSheet();{const ov=$('#obra-tl video');ov&&ov.pause()}i.classList.add('back');i.classList.remove('zoom');void i.offsetWidth;i.classList.remove('out','back');if(v){v.currentTime=0;v.play().catch(()=>{})}}
const hold=(e,on)=>{const b=e.target.closest&&e.target.closest('[data-hold]');if(b||!on)$$('#c-board .ly').forEach(l=>l.style.visibility=on&&b?'hidden':'')};
document.addEventListener('pointerdown',e=>hold(e,true));document.addEventListener('pointerup',e=>hold(e,false));document.addEventListener('pointercancel',e=>hold(e,false));

/* ---------- boot ---------- */
fetch('data/promocion.json').then(r=>r.json()).then(j=>{D=j;
  const h=(location.hash||'').slice(1);if(h&&$('#s-'+h))state.screen='s-'+h;
  const mkv=(src,o={})=>{const v=document.createElement('video');Object.assign(v,{src,muted:true,loop:true,autoplay:true,playsInline:true},o);v.setAttribute('playsinline','');v.setAttribute('muted','');v.onerror=()=>v.remove();return v};
  if(D.media.intro){const v=mkv(D.media.intro,{poster:'video/intro.jpg',autoplay:!h});$('#intro .kb').after(v);const b=$('#snd');b.hidden=false;b.onclick=()=>{v.muted=!v.muted;if(!v.muted){v.currentTime=0;v.play()}b.classList.toggle('on',!v.muted);b.setAttribute('aria-pressed',!v.muted)}}
  if(D.media.general){$('#c-blur').appendChild(mkv(D.media.general));$('#bgv').appendChild(mkv(D.media.general,{autoplay:false,preload:'none'}))}
  if(h)$('#intro').classList.add('out');applyLang();bgSync(state.screen)}).catch(()=>{document.querySelector('.intro-c p').textContent=T[L].loadErr});
}
