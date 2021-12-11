var sinopse = ['O estudante Misumi Makoto é invocado para outro mundo, para ser o herói. Mas a Deusa do outro mundo não gosta desse herói, por isso o envia para o fim do mundo. Agora Makoto tem de encontrar o seu próprio caminho nesse novo mundo de fantasia! Moon-led Journey Across Another World 月が導く異世界道中'];
var name2 = ['tsuki ga', 'kimi to boku', 'the tutorial','fukushuu','black kanojo','black clover','apocalyptic','hataraku','gods reb','imamade','empire ro','that i r','kage no','koi ka mah','virus girlf','my yandere','negai o k','parallel p','rakudai k','rein arist','tensei kizo','son in law','son-in-law','tsumi to','the way to','the rise of','ugirareta','tantei wa','kanojo mo','chainsaw','mahouka','I swear that','jungle juice','houkago','koibito wo netorare','naze to boku','my is actually e','a pesquisar d','solo leveling','martial peak','my wife is de','the beginning after','kaifuku j'];
var caminho2 = './posters/';
   var post2 = ['external_cover.jpg','kimitoboku.jpg','thetutorial.jpg','fukushuu.jpg','blackkanojo.jpg','blackclover.jpg','apocaliptic.jpg','capa (1).jpg','gods.jpg','menina.jpg','empireeoom.jpg','that.jpeg','bruxas.jpg','external.jpg','virus.jpg','mm.jpg','queen.jpg','parallelparadise.jpg','magia.jpg','nemsei.jpg','kkk.jpg','son.jpg','soninlaw.jpg','tsumi.jpg','corea.jpg','riseofdemon.jpg','uragi.jpg','tantei.jpg','kanojo.jpg','chainsaw.jpg','mahouka.jpg','i swear.jpeg','jungle-juice-manga.jpg','houkago.jpg','koibito netorare.jpg','naze.jpg','mywife.jpg','perverts.jpg','solo.jpg','martial.jpg','demonqueen.jpg','thebenning.jpg','kaif.jpg'];
   var capa2 = [null];
   var at2 = [];
   var at2 = [];
  var links2 = ['https://leitor.net/manga/tsuki-ga-michibiku-isekai-douchuu/3446','https://leitor.net/manga/kimi-to-boku-no-saigo-no-senjou-aruiwa-sekai-ga-hajimaru-seisen/7469','https://leitor.net/manga/the-tutorial-tower-of-the-advanced-player/9733','https://leitor.net/manga/fukushuu-wo-koinegau-saikyou-yuusha-wa-yami-no-chikara-de-senmetsu-musou-suru/7917','https://leitor.net/manga/black-kanojo/4221','https://leitor.net/manga/black-clover/1751','https://leitor.net/manga/apocalyptic-super-system/9885','https://leitor.net/manga/hataraku-maou-sama/1106','https://leitor.net/manga/gods-reborn/10880','https://leitor.net/manga/is-there-an-empty-room/12233','https://leitor.net/manga/imamade-ichido-mo-onnaatsukai-sareta-koto-ga-nai-onna-kishi-wo-onnaatsukai-suru-manga/7205','https://leitor.net/manga/a-world-that-i-rule/3400','https://leitor.net/manga/kage-no-jitsuryokusha-ni-naritakute/7927','https://leitor.net/manga/koi-ka-mahou-ka-wakaranai/11441','https://leitor.net/manga/virus-girlfriend/8433','https://leitor.net/manga/yandere-kanojo-ni-nemura-sete-moraenai/12291','https://leitor.net/manga/negai-wo-kanaete-moraou-to-akuma-o-shoukan-shitakedo-kawaikattanode-kekkonshimashita-akuma-no-niizuma-/10602','https://leitor.net/manga/parallel-paradise/5239','https://leitor.net/manga/rakudai-kenja-no-gakuin-musou-nidome-no-tensei-s-rank-cheat-majutsushi-boukenroku/9171','https://leitor.net/manga/tensei-kizoku-kantei-skill-de-nariagaru-jakushou-ryouchi-wo-uketsuida-node-yuushuu-na-jinzai-wo-fuyashiteitara-saikyou-ryouchi-ni-natteta/10933','https://leitor.net/manga/tensei-kizoku-no-isekai-boukenroku-jichou-wo-shiranai-kamigami-no-shito/7450','https://leitor.net/manga/strongest-hired-son-in-law/11202','https://leitor.net/manga/son-in-law-above-them-all/11327','https://leitor.net/manga/tsumi-to-kai-corrupt-pleasure/6912','https://leitor.net/manga/the-way-to-protect-the-female-leads-older-brother/11870','https://leitor.net/manga/rise-of-the-demon-king/7827','https://leitor.net/manga/uragirareta-s-rank-boukensha-no-ore-wa-ai-suru-dorei-no-kanojora-to-tomo-ni-dorei-dake-no-harem-guild-wo-tsukuru/10360','https://leitor.net/manga/tantei-wa-mou-shindeiru/11424','https://leitor.net/manga/kanojo-mo-kanojo/9386','https://leitor.net/manga/chainsaw-man-edicao-colorida/12288','https://leitor.net/manga/mahouka-koukou-no-rettousei-kyuukousen-hen/11297','https://landwebtoons.site/manga/eu-juro-que-te-amo/','https://leitor.net/manga/jungle-juice/11624','https://leitor.net/manga/houkago-no-goumon-shoujo/8706','https://leitor.net/manga/koibito-wo-netorare-yuusha-party-kara-tsuihou-sa-retakedo-ex-skill---kotei-dameeji---ni-mezamete-muteki-no-sonzai-ni-saa-fukushuu-o-hajimeyou-/10623','https://leitor.net/manga/naze-boku-no-sekai-wo-daremo-oboeteinai-no-ka/7283','https://leitor.net/manga/my-wife-is-actually-the-emperor/12122','https://leitor.net/manga/a-perverts-daily-life/8194','https://leitor.net/manga/solo-leveling/7702','https://leitor.net/manga/martial-peak/7302','https://leitor.net/manga/my-wife-is-a-demon-queen/7969','https://leitor.net/manga/the-beginning-after-the-end/7403','https://leitor.net/manga/kaifuku-jutsushi-yarinaoshi/6854'];
var prov = ['wonderland','leitor.net','mangayabu','tsuki mangás'];
 var lugarposter = window.document.createElement('img');

 var v = Number(window.document.querySelector('#titulo').innerText);
 var lugarimg = window.document.querySelector('#divimg');
 
// window.document.querySelector('#zero').style.background='url(./posters/solo.jpg)';
 var lugarp = window.document.querySelector('#font');

 var fontlink = window.document.createElement('a');
 var fontspan = window.document.createElement('span');
 var fontp = window.document.createElement('p');
 fontp.innerHTML = 'font: '
 fontspan.appendChild(window.document.createTextNode(prov[1]))
 fontlink.setAttribute('target','_blank')
 fontlink.setAttribute('rel','nofollow')
 fontlink.setAttribute('href',links2[v])
 fontlink.setAttribute('class','nound')
 var div1 = window.document.createElement('div');
 var img = caminho2 + post2[v];
 console.log(img);
 lugarposter.setAttribute('src', img);
 lugarposter.setAttribute('alt', name2[v]);
 lugarposter.setAttribute('class','imgtam');
 lugarposter.style.border="5px solid black"
 
 div1.setAttribute('class','imgcenter');
 
 div1.appendChild(lugarposter);
 lugarimg.appendChild(div1);

 fontlink.appendChild(fontspan)
 fontp.appendChild(fontlink)
 lugarp.appendChild(fontp)
 // ancoragem dos sites
 var goread = window.document.querySelector('#two');
 var golink = window.document.createElement('a');
 golink.setAttribute('href',links2[v]);
 golink.setAttribute('target','_blank');
 golink.setAttribute('rel','nofollow');
 golink.setAttribute('class','nound col');
 var gop = window.document.createElement('p');

 var gospan = window.document.createElement('span');
 var godiv = window.document.createElement('div');
 var tagimg = window.document.createElement('img');
 tagimg.setAttribute('src','../cssandjs/literature.png')
  gop.setAttribute('class','titulo2')
 gop.setAttribute('id','ler')
 tagimg.setAttribute('alt','book icon')
 tagimg.setAttribute('width','26px')
 tagimg.setAttribute('hight','26px')
 tagimg.setAttribute('class','titulo2')
 godiv.setAttribute('id','three');
 
 gop.appendChild(window.document.createTextNode(' ler agora!'))
 
 godiv.appendChild(tagimg);
 godiv.appendChild(gop);
 golink.appendChild(godiv);
 goread.appendChild(golink);

 console.log(v);
 //color da sombra do poster
 function colortxt(){
   var time = new Date();
   var sec = time.getSeconds();
   console.log(sec)
   if(sec >= 50){
     lugarposter.style.border="rgb(23,255,57)";
     //lime
   }else if(sec >= 45){
     lugarposter.style.borderColor="rgb(122,23,255)";
     // roxo
   }else if(sec >= 40){
     lugarposter.style.borderColor="rgb(255,50,50)";
     //red
   }else if(sec >= 35){
     lugarposter.style.borderColor="rgb(255,255,255)";
     //white
   }else if(sec >= 30){
     lugarposter.style.borderColor="rgb(23,255,226)";
     // baby green
   }else if(sec >= 25)
   if(sec >= 25){
     lugarposter.style.borderColor="rgb(0,0,0)";
     //black
   }else if(sec >= 20){
     lugarposter.style.borderColor="rgb(18,25,255)";
     // dark blue
   }else if(sec >= 15){
     lugarposter.style.borderColor="rgb(255,131,23)";
     //orange
   }else if(sec >= 10){
     lugarposter.style.borderColor="rgb(255,246,23)";
     //yellow
   }else if(sec >= 5){
     lugarposter.style.borderColor="rgb(255,23,128)";
     //light pink
   }else{
     lugarposter.style.borderColor="rgb(255,23,167)";
     //pink
   }
 };
 colortxt()
 // funcao da sinopse
 var exps = window.document.querySelector('#four');
 var par = window.document.createElement('p');
 var bold = window.document.createElement('strong');
 bold.appendChild(window.document.createTextNode('sinopse: '));
 par.appendChild(bold);
 par.appendChild(window.document.createTextNode(sinopse[v]));
 par.style.textAlign="justify"
 exps.appendChild(par);