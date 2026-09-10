const scenes={
  technology:{name:'Technology',color:'#39d7ff',image:'assets/technology.jpg',words:[
  {word:'smartphone',ipa:'/ˈsmɑːtfəʊn/',kz:'смартфон',example:'I use my smartphone to study.',object:'📱'},
  {word:'online',ipa:'/ˌɒnˈlaɪn/',kz:'интернетке қосылған',example:'Our English lesson is online today.',object:'🌐'},
  {word:'Wi-Fi',ipa:'/ˈwaɪ faɪ/',kz:'сымсыз интернет',example:'The school has free Wi-Fi.',object:'📶'},
  {word:'app',ipa:'/æp/',kz:'қосымша',example:'This app helps me learn words.',object:'📲'},
  {word:'internet',ipa:'/ˈɪntənet/',kz:'интернет',example:'I found the information on the internet.',object:'🌍'},
  {word:'website',ipa:'/ˈwebsaɪt/',kz:'веб-сайт',example:'Our school has a website.',object:'🖥️'},
  {word:'laptop',ipa:'/ˈlæptɒp/',kz:'ноутбук',example:'I do my project on a laptop.',object:'💻'},
  {word:'tablet',ipa:'/ˈtæblət/',kz:'планшет',example:'She reads a book on her tablet.',object:'📱'},
  {word:'computer',ipa:'/kəmˈpjuːtə/',kz:'компьютер',example:'We use a computer in class.',object:'🖥️'},
  {word:'keyboard',ipa:'/ˈkiːbɔːd/',kz:'пернетақта',example:'Type your name on the keyboard.',object:'⌨️'},
  {word:'screen',ipa:'/skriːn/',kz:'экран',example:'The word is on the screen.',object:'🖥️'},
  {word:'download',ipa:'/ˌdaʊnˈləʊd/',kz:'жүктеп алу',example:'Download the homework file.',object:'⬇️'},
  {word:'upload',ipa:'/ˌʌpˈləʊd/',kz:'жүктеу',example:'Please upload your photo.',object:'⬆️'},
  {word:'link',ipa:'/lɪŋk/',kz:'сілтеме',example:'Open the link in the message.',object:'🔗'},
  {word:'password',ipa:'/ˈpɑːswɜːd/',kz:'құпиясөз',example:'Do not share your password.',object:'🔐'},
  {word:'chat',ipa:'/tʃæt/',kz:'онлайн әңгіме',example:'We discussed the task in the chat.',object:'💬'}]},
  social:{name:'Social Media',color:'#de5cff',image:'assets/social-media.jpg',words:[
  {word:'like',ipa:'/laɪk/',kz:'ұнату белгісі',example:'I gave the photo a like.',object:'💗'},
  {word:'story',ipa:'/ˈstɔːri/',kz:'уақытша жарияланым',example:'She shared our trip in her story.',object:'📸'},
  {word:'post',ipa:'/pəʊst/',kz:'жарияланым',example:'Our class made a new post.',object:'📝'},
  {word:'follower',ipa:'/ˈfɒləʊə/',kz:'жазылушы',example:'The school page has a new follower.',object:'👤'},
  {word:'comment',ipa:'/ˈkɒment/',kz:'пікір',example:'I wrote a kind comment.',object:'💬'},
  {word:'share',ipa:'/ʃeə/',kz:'бөлісу',example:'Please share this useful video.',object:'↗️'},
  {word:'subscribe',ipa:'/səbˈskraɪb/',kz:'жазылу',example:'Subscribe to our school channel.',object:'🔔'},
  {word:'channel',ipa:'/ˈtʃænəl/',kz:'арна',example:'This channel teaches English.',object:'📺'},
  {word:'blog',ipa:'/blɒɡ/',kz:'онлайн күнделік',example:'I read a travel blog.',object:'✍️'},
  {word:'video',ipa:'/ˈvɪdiəʊ/',kz:'бейне',example:'We watched a short video.',object:'🎬'},
  {word:'photo',ipa:'/ˈfəʊtəʊ/',kz:'фотосурет',example:'This photo is from our lesson.',object:'🖼️'},
  {word:'selfie',ipa:'/ˈselfi/',kz:'өзін-өзі түсірген сурет',example:'We took a selfie after the contest.',object:'🤳'},
  {word:'hashtag',ipa:'/ˈhæʃtæɡ/',kz:'тақырып белгісі',example:'Use the hashtag for our project.',object:'#️⃣'},
  {word:'profile',ipa:'/ˈprəʊfaɪl/',kz:'жеке парақша',example:'Her profile has a school photo.',object:'🪪'},
  {word:'account',ipa:'/əˈkaʊnt/',kz:'тіркелгі',example:'I created an account for learning.',object:'👥'}]},
  fashion:{name:'Fashion',color:'#ff738f',image:'assets/fashion.jpg',words:[
  {word:'T-shirt',ipa:'/ˈtiː ʃɜːt/',kz:'футболка',example:'My T-shirt is blue.',object:'👕'},
  {word:'style',ipa:'/staɪl/',kz:'стиль',example:'She has a simple style.',object:'✨'},
  {word:'jeans',ipa:'/dʒiːnz/',kz:'джинсы шалбар',example:'I wear jeans at the weekend.',object:'👖'},
  {word:'sneakers',ipa:'/ˈsniːkəz/',kz:'спорттық аяқкиім',example:'These sneakers are comfortable.',object:'👟'},
  {word:'jacket',ipa:'/ˈdʒækɪt/',kz:'күртеше',example:'Take your jacket; it is cold.',object:'🧥'},
  {word:'hoodie',ipa:'/ˈhʊdi/',kz:'капюшоны бар жейде',example:'My brother has a black hoodie.',object:'🧥'},
  {word:'look',ipa:'/lʊk/',kz:'сыртқы бейне',example:'I like her new look.',object:'🪞'},
  {word:'trend',ipa:'/trend/',kz:'сәнді бағыт',example:'Bright colours are a new trend.',object:'📈'},
  {word:'brand',ipa:'/brænd/',kz:'тауар белгісі',example:'This local brand makes clothes.',object:'🏷️'}]},
  shopping:{name:'Shopping',color:'#ffb237',image:'assets/shopping.jpg',words:[
  {word:'sale',ipa:'/seɪl/',kz:'жеңілдікпен сату',example:'The shop has a summer sale.',object:'🏷️'},
  {word:'shopping',ipa:'/ˈʃɒpɪŋ/',kz:'сауда жасау',example:'We went shopping on Saturday.',object:'🛍️'},
  {word:'price',ipa:'/praɪs/',kz:'баға',example:'What is the price of this book?',object:'💵'},
  {word:'discount',ipa:'/ˈdɪskaʊnt/',kz:'жеңілдік',example:'Students get a ten-percent discount.',object:'％'},
  {word:'market',ipa:'/ˈmɑːkɪt/',kz:'базар, нарық',example:'We bought fruit at the market.',object:'🏪'},
  {word:'shop',ipa:'/ʃɒp/',kz:'дүкен',example:'This shop sells school supplies.',object:'🏬'},
  {word:'cash',ipa:'/kæʃ/',kz:'қолма-қол ақша',example:'I paid for the pen in cash.',object:'💶'},
  {word:'cashback',ipa:'/ˈkæʃbæk/',kz:'ақшаның бір бөлігін қайтару',example:'The bank gives cashback for the order.',object:'↩️'}]},
  food:{name:'Food and Drinks',color:'#32d59a',image:'assets/food-drinks.jpg',words:[
  {word:'burger',ipa:'/ˈbɜːɡə/',kz:'бургер',example:'I ordered a chicken burger.',object:'🍔'},
  {word:'coffee',ipa:'/ˈkɒfi/',kz:'кофе',example:'My mother drinks coffee in the morning.',object:'☕'},
  {word:'fast food',ipa:'/ˌfɑːst ˈfuːd/',kz:'тез дайындалатын тағам',example:'Fast food should not be eaten every day.',object:'🍟'},
  {word:'menu',ipa:'/ˈmenjuː/',kz:'мәзір',example:'Please look at the menu.',object:'📋'},
  {word:'pizza',ipa:'/ˈpiːtsə/',kz:'пицца',example:'We shared a vegetable pizza.',object:'🍕'},
  {word:'sandwich',ipa:'/ˈsænwɪdʒ/',kz:'сэндвич',example:'I made a cheese sandwich.',object:'🥪'},
  {word:'milkshake',ipa:'/ˈmɪlkʃeɪk/',kz:'сүтті коктейль',example:'She chose a strawberry milkshake.',object:'🥤'}]},
  entertainment:{name:'Entertainment',color:'#8f6bff',image:'assets/entertainment.jpg',words:[
  {word:'music',ipa:'/ˈmjuːzɪk/',kz:'музыка',example:'I listen to music after school.',object:'🎧'},
  {word:'show',ipa:'/ʃəʊ/',kz:'ойын-сауық бағдарламасы',example:'We watched a talent show.',object:'🎭'},
  {word:'game',ipa:'/ɡeɪm/',kz:'ойын',example:'This word game is useful.',object:'🎮'},
  {word:'movie',ipa:'/ˈmuːvi/',kz:'фильм',example:'The movie has English subtitles.',object:'🎞️'},
  {word:'playlist',ipa:'/ˈpleɪlɪst/',kz:'ойнату тізімі',example:'I made an English song playlist.',object:'🎵'}]}
};
const grid=document.querySelector('#sceneGrid');
Object.entries(scenes).forEach(([key,s])=>{
 const b=document.createElement('button'); b.className='scene-card';
 b.innerHTML=`<img src="${s.image}" alt="${s.name} illustrated vocabulary page"><span class="card-copy"><small>${s.words.length} AR WORDS</small><strong>${s.name}</strong><span>Open camera →</span></span>`;
 b.onclick=()=>openScene(key); grid.appendChild(b);
});
const ar=document.querySelector('#arView'),video=document.querySelector('#camera'),fallback=document.querySelector('#cameraFallback');
let activeKey='technology',index=0,stream=null;
const audioStatus=document.querySelector('#audioStatus');
let voices=[];
function loadVoices(){if('speechSynthesis' in window)voices=window.speechSynthesis.getVoices()}
loadVoices();
if('speechSynthesis' in window)window.speechSynthesis.onvoiceschanged=loadVoices;
function renderWord(){const s=scenes[activeKey],w=s.words[index];document.documentElement.style.setProperty('--accent',s.color);document.querySelector('#categoryName').textContent=s.name;document.querySelector('#stepCount').textContent=`${index+1} / ${s.words.length}`;document.querySelector('#object').textContent=w.object;document.querySelector('#word').textContent=w.word;document.querySelector('#ipa').textContent=w.ipa;document.querySelector('#kazakh').textContent=w.kz;document.querySelector('#example').textContent=w.example;audioStatus.textContent='Tap “Hear the word” to listen.'}
async function startCamera(){try{stream=await navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:'environment'}},audio:false});video.srcObject=stream;fallback.hidden=true}catch(e){fallback.hidden=false}}
async function openScene(key){activeKey=key;index=0;document.body.classList.add('ar-open');ar.hidden=false;document.body.style.overflow='hidden';history.replaceState(null,'',`?scene=${key}`);renderWord();await startCamera()}
function closeScene(){if(stream){stream.getTracks().forEach(t=>t.stop());stream=null}ar.hidden=true;document.body.classList.remove('ar-open');document.body.style.overflow='';history.replaceState(null,'',location.pathname)}
function speak(){
 const w=scenes[activeKey].words[index];
 if(!('speechSynthesis' in window)){audioStatus.textContent='Audio is not supported in this browser. Open the link in Chrome.';return}
 window.speechSynthesis.cancel();
 window.speechSynthesis.resume();
 const u=new SpeechSynthesisUtterance(`${w.word}. ${w.example}`);
 loadVoices();
 u.voice=voices.find(v=>v.lang==='en-GB')||voices.find(v=>v.lang&&v.lang.startsWith('en'))||null;
 u.lang=u.voice?.lang||'en-GB';u.rate=.72;u.pitch=1;u.volume=1;
 u.onstart=()=>audioStatus.textContent=`Playing: ${w.word}`;
 u.onend=()=>audioStatus.textContent='Tap again to repeat.';
 u.onerror=()=>audioStatus.textContent='Sound did not start. Turn up media volume and tap again.';
 window.speechSynthesis.speak(u);
 setTimeout(()=>window.speechSynthesis.resume(),120);
}
document.querySelector('#speak').onclick=speak;
document.querySelector('#next').onclick=()=>{index=(index+1)%scenes[activeKey].words.length;renderWord()};
document.querySelector('#closeAr').onclick=closeScene;
const chromeLink=document.querySelector('#openChrome');
if(/Android/i.test(navigator.userAgent)){
 chromeLink.href=`intent://${location.host}${location.pathname}${location.search}#Intent;scheme=https;package=com.android.chrome;end`;
}else{
 chromeLink.href=location.href;chromeLink.target='_blank';chromeLink.rel='noopener';
}
const requested=new URLSearchParams(location.search).get('scene');if(requested&&scenes[requested])openScene(requested);
