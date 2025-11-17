const c=document.createElement("div");c.style.cssText=
"width:40vmin;height:40vmin;border:8px solid #000;border-radius:50%;position:relative;";
document.body.appendChild(c);
const h=document.createElement("div"),m=document.createElement("div"),s=document.createElement("div");
[c,h,m,s].forEach(x=>x.style.position="absolute");
[h,m,s].forEach(x=>{x.style.left="50%";x.style.top="50%";x.style.transformOrigin="bottom";});
h.style.cssText+="width:6px;height:25%;background:#000;border-radius:3px;";
m.style.cssText+="width:4px;height:35%;background:#000;border-radius:2px;";
s.style.cssText+="width:2px;height:42%;background:red;border-radius:1px;";
c.appendChild(h);c.appendChild(m);c.appendChild(s);
function upd(){
  const t=new Date(),H=t.getHours()%12,M=t.getMinutes(),S=t.getSeconds()+t.getMilliseconds()/1000;
  h.style.transform=`translate(-50%,-100%) rotate(${H*30+M/2}deg)`;
  m.style.transform=`translate(-50%,-100%) rotate(${M*6+S/10}deg)`;
  s.style.transform=`translate(-50%,-100%) rotate(${S*6}deg)`;
  requestAnimationFrame(upd);
}
upd();
