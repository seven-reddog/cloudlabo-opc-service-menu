/* 服务套餐制作工具: deterministic business rules. MIT License. */
(function(){
'use strict';
const H=typeof module==='object'&&module.exports?require('./common.js'):globalThis.OPC;
const {clone,esc,num,money,lines,choices,required,tableRows,metric,note,safeName,csv,parseCSV,day,today,unique,replaceTokens,documentHTML,crc32,zipBytes}=H;
const process=function process(d){
 const rows=tableRows(d).map(r=>[required(r.name,'套餐名'),money(num(r.price)),num(r.days),num(r.revisions),r.deliverables]);const body='<p>'+esc(d.brand)+' · '+esc(d.contact)+'</p>'+rows.map(r=>'<section><h2>'+esc(r[0])+'</h2><h3>¥'+esc(r[1])+'</h3><p>'+esc(r[2])+' 个工作日 · '+esc(r[3])+' 轮修改</p><pre>'+esc(r[4])+'</pre></section>').join('')+'<section><pre>'+esc(d.terms)+'</pre></section>';
 return {metrics:[metric('套餐数量',rows.length)],columns:['套餐','价格','工作日','修改轮数','交付物'],rows,sections:[note('共同约定',d.terms)],files:[{name:'服务套餐.html',text:documentHTML(d.brand+' · 服务套餐',body)}]};
};
const api={process};
if(typeof module==='object'&&module.exports)module.exports=api;else globalThis.Core=api;
})();
