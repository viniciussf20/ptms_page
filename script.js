const art = document.getElementById('btn-artes');
var oculta = document.getElementById('oculta');
art.addEventListener('click',function(){
if(oculta.style.display==='block'){
    oculta.style.display = 'none';
}
else {
oculta.style.display = 'block'
    }
}) 

const dg = document.getElementById('btn-dg')
var oculta2 = document.getElementById('oculta2');
dg.addEventListener('click',function(){
if(oculta2.style.display==='block')
{
    oculta2.style.display = 'none';
}
else {
    
    oculta2.style.display = 'block';
}
})