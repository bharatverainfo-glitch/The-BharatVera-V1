(function(){
var C=window.BV_CONFIG||{},y=document.getElementById('yr');if(y)y.textContent=new Date().getFullYear();
// Google Analytics: only loads if GA_ID is set in config.js
if(C.GA_ID){var s=document.createElement('script');s.async=true;s.src='https://www.googletagmanager.com/gtag/js?id='+C.GA_ID;document.head.appendChild(s);
window.dataLayer=window.dataLayer||[];window.gtag=function(){dataLayer.push(arguments)};gtag('js',new Date());gtag('config',C.GA_ID,{anonymize_ip:true});}
// Real testimonials only: filled from testimonials.json (starts empty)
var t=document.getElementById('testimonials');
if(t)fetch('testimonials.json').then(function(r){return r.json()}).then(function(a){
 if(!a.length){t.innerHTML='<p class="mut">Reviews from real customers will appear here after launch.</p>';return}
 t.innerHTML=a.map(function(x){var d=document.createElement('div');d.className='card';var q=document.createElement('p');q.textContent='\u201c'+x.quote+'\u201d';var n=document.createElement('b');n.textContent=x.name+(x.rating?' \u00b7 '+'\u2605'.repeat(x.rating):'');d.append(q,n);return d.outerHTML}).join('')
}).catch(function(){t.innerHTML='<p class="mut">Reviews will appear here soon.</p>'});
// Contact form with spam protection: honeypot + minimum fill time + optional external endpoint
var f=document.getElementById('cf');
if(f){var t0=Date.now(),er=document.getElementById('err');
 f.addEventListener('submit',function(e){e.preventDefault();er.textContent='';var d=new FormData(f);
  if(d.get('website'))return location.href='thank-you.html'; // bot filled the hidden field: pretend success, send nothing
  if(!f.name.value.trim()||!/^\S+@\S+\.\S+$/.test(f.email.value)||!f.message.value.trim()){er.textContent='Please fill in your name, a valid email and a message.';return}
  if(Date.now()-t0<3000){er.textContent='That was very quick. Please wait a moment and send again.';return}
  var done=function(){location.href='thank-you.html'};
  if(C.FORM_URL)fetch(C.FORM_URL,{method:'POST',headers:{'Accept':'application/json'},body:d}).then(function(r){r.ok?done():er.textContent='Could not send. Please try again.'}).catch(function(){er.textContent='Could not send. Check your connection and try again.'});
  else{var m=JSON.parse(localStorage.getItem('bv_messages')||'[]');m.push({name:f.name.value,email:f.email.value,message:f.message.value,at:new Date().toISOString()});localStorage.setItem('bv_messages',JSON.stringify(m));done()}
 })}
})();