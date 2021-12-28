var local = window.document.querySelector('#area');
var subvar = window.document.createElement('div');
var classarea = window.document.createElement('section');
classarea.setAttribute('class','areac');
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
  },
  cla: function (k) {
    for(let i in classenumber[k]) {
       let zsh = window.document.createElement('div');
      zsh.setAttribute('class','ccll');
      zsh.innerHTML = `${classename[classenumber[k][i]]}`;
      subvar.appendChild(zsh);
    }
    subvar.appendChild(classarea);
  },
  limpar: function () {
    subvar.innerHTML = '';
    subvar.setAttribute('class','nulo');
  },
  cls: function () {
    window.close();
  }
}
 var area = [];
 var linkh = ['https://nhentai.net/g/177849/','https://nhentai.net/g/215048/','https://www.hentai.name/g/149844/','https://hitomi.la/reader/1351084.html#23','https://nhentai.net/g/332696/','https://nhentai.net/g/323853/','https://nhentai.net/g/358388/','https://nhentai.net/g/268393/','https://nhentai.net/g/212556/','https://nhentai.net/g/234638/','https://nhentai.net/g/353852/','https://nhentai.net/g/344060/','https://nhentai.net/g/314590/','https://nhentai.net/g/169134/','https://nhentai.net/g/366379/'], nameg = ['(C90) [OrangeMaru (YD)] Damashiuchi | Foul Play (THE IDOLM@STER CINDERELLA GIRLS) [English] =LWB=','(C91) [OrangeMaru (YD)] Damashiuchi II (THE IDOLM@STER CINDERELLA GIRLS) [English] [NineTails]','(C94) [OrangeMaru (YD)] Yaou (Fate / Grand Order) [English] [KyuSee] [Decensored]','Highschool girls syndrome','(C96) [OrangeMaru (YD)] Chaldea Maid #Mash (Fate / Grand Order) [English] [Decensored]','(C97) [OrangeMaru (YD)] Mogurikomi | Sneaking in (Fate / Grand Order) [English] [Coffedrug] [Decensored]','(C97) [listra laranja (Sumisaki Yuduna)] Formi-chan ni Kurumaretai (Azur Lane) [Inglês] {Hennojin}','[Satou Kuuki] Aisei Tenshi Love Mary ～Akusei Jutai～ | The Archangel of Love, Love Mary ~Malignant Corruption~ [English] {darknight} [Decensored] [Digital]','(COMIC1 ☆ 12) [OrangeMaru (YD)] Jidou Kouryaku | Auto Capture (Fate / Grand Order) [Inglês] [Shuten Doujin & Coffedrug]','(COMIC1 ☆ 13) [OrangeMaru (YD)] Habilidade Kyouka Kaikin + OrangeMaru Special 04 (FateGrand Order) [Inglês] [N04h]','(SC2018 Primavera) [Arenowaiyo. (Aree)] Aisarete Okkiku Narimashita | Love Made Them Bigger (Azur Lane) [Inglês] {Doujins.com}','[774] Yupiel-sama no Geboku | Servo de Lady Yupiel (Towako Ichi) [Inglês] {CapableScoutMan & BEC Scans}','[Alp] Saionjike no Kareinaru Seikatsu (Sono Ato) | Vivendo o sonho na família Saionji (After Story) (Melty Limit) [Inglês] [WataTL] [Digital]','[Satou Kuuki] Aisei Tenshi Ame Maria ～ Akusei Jutai ～ | O Arcanjo do Amor, Amor Maria ~ Corrupção Maligna ~ [Inglês] {noite escura} [Decensurado] [Digital]','[ooyun] How to use dolls 06 (Girls Frontline) [Chinese] [最爱福瑞汉化组]'];
 var nameh = ['Damashiuch','Damashiu II','fate yaou','hitomi.la','chaldea fate','Mogurikomi','formi-chan','Love Mary','Skill Kyouka','nightmare',' Aisarete Ok','Yupiel-sama','Melty Limit','Archangel','how use doll'], classename = ['ahegao','anal','ball sucking','bdsm','big breasts','bikini','blindfold','blowjob','bondage','clothed female nude male','collar','corset','dark skin','demon girl','double penetration','femdom','ffm threesome','full color','gag','glasses','group','gyaru','harem','inverted nipples','kissing','lab coat','latex','leotard','lingerie','mind break','maid','metal armor','milking','mmf threesome','mosaic censorship','multi-work series','nakadashi','paizuri','poor grammar','prostitution','rape','rimjob','schoolboy uniform','schoolgirl uniform','sex toys','shibari','shotacon','slave','sole female','sole male','stockings','thigh high boots','tiara','teacher','tentacles','uncensored','virginity','x-ray','yandere'], classenumber = [[3,6,8,10,11,17,18,20,26,29,34,40,44,45,48,51],[1,8,14,17,19,20,25,33,34,35,36,38,40,44,48,50],[4,8,15,17,24,27,31,36,37,49,51,57],[1,2,4,7,12,15,16,20,21,23,36,39,41,42,43,46,49,56],[7,17,30,36,48,49,50,55,57],[1,4,7,9,17,36,48,49,52,57],[4,7,17,37,48,54],[0,1,4,5,12,13,15,20,22,24,26,28,29,36,37,40,43,50,51,54,55,56,57],[12,17,35,40],[1,7,8,14,15,16,17,20,49,52,54],[17,55],[4,7,32,36,37,48,49],[0,1,4,5,6,7,13,14,15,16,18,19,20,22,28,29,30,36,37,43,44,50,53,57],[0,15,24,29,34,36,40,48,49,56,57],[7,12,17,36,37,40,48,49,54,55,57],[],[]];
 /*function tst() {
   for(let i in classename){
     console.log(i + '//' + classename[i]);
   }
 }
 tst();*/
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
 exit.setAttribute('onclick', `metodo.cls()`);
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
let pim = window.document.createElement('div');
console.log(nameh[v])
pim.style.backgroundImage=`url(${imgh[v]})`;
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
  let mg = window.document.createElement('div');
  mg.style.backgroundImage=`url(${imgh[i]})`;
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
local.appendChild(subvar);
henthome();
//subpage function

function subh(n) {
  //cabeçalho do sub
  subvar.setAttribute('class','zzxx');
  let subext = window.document.createElement('img');
  subext.setAttribute('src','./setimg/xx.png');
  subext.setAttribute('alt','go out');
  subext.setAttribute('class','extali');
  subext.setAttribute('onclick','metodo.limpar()');
  let sp = window.document.createElement('h1');
  let spa = window.document.createElement('span');
  let mspa = window.document.createElement('span');
  sp.innerText = '.undefined';
  spa.innerText = 'hent4is'
  mspa.appendChild(sp);
  mspa.appendChild(spa);
 sp.setAttribute('class','inazuma mz');
 spa.setAttribute('class','inazuma mz');
  mspa.setAttribute('class','tp');
  let ccp = window.document.createElement('div');
  ccp.style.backgroundImage=`url(${imgh[n]})`;
  ccp.setAttribute('class','maincapa');
  let locs = window.document.createElement('header');
  locs.appendChild(subext);
  locs.appendChild(mspa);
  locs.setAttribute('class','alc');
  subvar.appendChild(locs);
  subvar.appendChild(ccp);
  //paragrafos e TXTs
  let aln = window.document.createElement('h4');
  aln.setAttribute('class','titu');
  aln.innerHTML = `${nameg[n]}`
  subvar.appendChild(aln)
  
  let dd = window.document.createElement('div');
  dd.setAttribute('class','read');
  let tvi = window.document.createElement('img');
  tvi.setAttribute('src','./css/read.png');
  tvi.setAttribute('class','minii');
  tvi.setAttribute('alt','go');
  let lin = window.document.createElement('a');
  lin.setAttribute('href',linkh[n]);
  lin.setAttribute('target','_blank');
  lin.setAttribute('rel','nofollow');
  lin.setAttribute('class','linkk');
  let pr = window.document.createElement('p');
  pr.appendChild(window.document.createTextNode('read now!'));
  pr.setAttribute('class','ppr');
  
  dd.appendChild(tvi);
  dd.appendChild(pr);
  lin.appendChild(dd);
  subvar.appendChild(lin);
  //classes e fonte
  metodo.cla(n);//chama as classes
}