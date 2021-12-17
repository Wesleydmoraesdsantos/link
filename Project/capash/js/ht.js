var local = window.document.querySelector('#area');
var metodo = {
  sel: function() {
  let n = Math.round(Math.random()*20);
  console.log(n);
   if(n > 14){
      n = n - Math.round(Math.random()*2);
      console.log(n);
    }
    if(n > 14){
       n = n - Math.round(Math.random()*3);
      console.log(n);
    }
    if(n > 14){
      n = Math.round(Math.random());
    }
  return n;
  }
}
 var area = [];
 var linkh = ['https://nhentai.net/g/177849/','https://nhentai.net/g/215048/','https://hitomi.la/reader/1351084.html#23','https://nhentai.net/g/366843/','https://nhentai.net/g/332696/','https://nhentai.net/g/323853/','https://nhentai.net/g/358388/','https://nhentai.net/g/212556/','https://nhentai.net/g/234638/','https://nhentai.net/g/353852/','https://nhentai.net/g/344060/','https://nhentai.net/g/169134/','https://nhentai.net/g/314590/','https://nhentai.net/g/268393/','https://nhentai.net/g/366379/'];
 var nameh = ['Damashiuch','Damashiu II','hitomi.la','fate yaou','chaldea fate','Mogurikomi','formi-chan','auto capt','Skill Kyouka','nightmare',' Aisarete Ok','Yupiel-sama','Melty Limit','Archangel','how use doll'];
 //var camih = './capash/';
 var imgh = ['cover.jpg','cover1.jpg','cover2.jpg','hen.webp','cover3.jpg','cover4.jpg','hh.jpg','hh1.jpg','hh2.jpg','hh3.jpg','hh4.jpg','hh5.jpg','hh6.jpg','hh7.jpg','hh8.jpg'];
function henthome() {
  //cabeçalho
  let head = window.document.createElement('header');
  head.setAttribute('class','cabecalho');
 let mn = window.document.createElement('img');
 mn.setAttribute('src','./setimg/menuwhite.png');
 let hm = window.document.createElement('h1');
 let sm = window.document.createElement('span');
 hm.innerHTML = '.undefined';
 sm.innerText = 'hents';
 hm.setAttribute('class','htit');
 sm.setAttribute('class','stit');
 let ctd = window.document.createElement('div');
 ctd.setAttribute('class','cent inazuma')
 ctd.appendChild(hm);
 ctd.appendChild(sm);
 
 let exit = window.document.createElement('img');
 exit.setAttribute('src','./setimg/xx.png');
 mn.setAttribute('class','btmn1 inazuma');
 exit.setAttribute('class','btmn2 inazuma');
 //mn.setAttribute('onclick',);
 //exit.setAttribute('onclick',);
 area.push(window.document.createElement('div'));
 head.appendChild(mn);
 head.appendChild(ctd);
 head.appendChild(exit);
 
local.appendChild(head);
//inicio do corpo

let v = metodo.sel();
let show = window.document.createElement('article');
show.setAttribute('class','principal');
show.setAttribute('onclick',`subh(${v})`);
let pim = window.document.createElement('img');
pim.setAttribute('alt','H de exposicão');
console.log(nameh[v])
pim.setAttribute('src',imgh[v]);
pim.setAttribute('class','mainexp inazuma');
let pp = window.document.createElement('span');
let jk = window.document.createElement('div');
jk.setAttribute('class','tn inazuma');
pp.setAttribute('class','zz');
pp.innerText = `${nameh[v]}`;
jk.appendChild(pp)
show.appendChild(pim);
show.appendChild(jk);
local.appendChild(show)
//list h
let ml = window.document.createElement('main');
ml.setAttribute('class','myl');
let tt = window.document.createElement('h2');
  tt.innerText = `your list`;
  tt.setAttribute('class','topo');
  tt.style.margin="0px";
  ml.appendChild(tt);
  ml.appendChild(window.document.createElement('hr'));
for(let i in nameh){
  let dv = window.document.createElement('div');
  dv.setAttribute('class','linem');
  dv.setAttribute('onclick',`subh(${i})`);
  let mg = window.document.createElement('img');
  mg.setAttribute('src',imgh[i]);
  mg.setAttribute('alt','picture/image');
  mg.setAttribute('class','imgclass');
  let ltt = window.document.createElement('p');
  ltt.innerText = `${nameh[i]}`;
  ltt.setAttribute('class','csstxt');
  
  dv.appendChild(mg);
  dv.appendChild(ltt);
  ml.appendChild(dv);
}
local.appendChild(ml);
//rodape
let ft = window.document.createElement('footer');
ft.setAttribute('class','fff');
let fp = window.document.createElement('p');
fp.innerText = 'developed by: @King';

ft.appendChild(fp);
local.appendChild(ft);
}
var subvar = window.document.createElement('div');
local.appendChild(subvar);
henthome();
//subpage function

function subh(n) {
  //cabeçalho do sub
  console.log('sub ok');
  subvar.setAttribute('class','zzxx');
  let subext = window.document.createElement('img');
  subext.setAttribute('src','./setimg/xx.png');
  subext.setAttribute('alt','go out');
  subext.setAttribute('class','extali');
  let sp = window.document.createElement('h1');
  let spa = window.document.createElement('span');
  let mspa = window.document.createElement('span');
  sp.innerText = '.undefined';
  spa.innerText = 'hent4s'
  mspa.appendChild(sp);
  mspa.appendChild(spa);
 sp.setAttribute('class','inazuma mz');
 spa.setAttribute('class','inazuma mz');
  mspa.setAttribute('class','tp');
  let ccp = window.document.createElement('img');
  ccp.setAttribute('src', imgh[n]);
  ccp.setAttribute('alt','capa');
  ccp.setAttribute('class','maincapa');
  let locs = window.document.createElement('header');
  locs.appendChild(subext);
  locs.appendChild(mspa);
  locs.setAttribute('class','alc');
  subvar.appendChild(locs);
  subvar.appendChild(ccp);
  //paragrafos e TXTs
  
  
}