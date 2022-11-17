
let Fecha=document.querySelector('.fecha');
let Anio=document.querySelector('.anio');
let Hora=document.querySelector('.hora_min');
let Segundos=document.querySelector('.segundos');
let Am_pm=document.querySelector('.am_pm');

function reloj(){
    let tiempo=new Date();

    let dia=tiempo.getDay()
    let fecha=tiempo.getDate()
    let mes=tiempo.getMonth()
    let anio=tiempo.getFullYear()
    let hora=tiempo.getHours()
    let minuto=tiempo.getMinutes()
    let segundo=tiempo.getSeconds()
    let AM=""

    let dias=["Lun","Mar","Mie","Jue","Vie","Sab","Dom"]
        diaAct=dias[dia];

    let meses=["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];
    mesAct=meses[mes]

    if(hora>12){
        hora=hora-12
        AM="PM"
    }else{
        hora=hora;
        AM="AM"
    }

    if(hora==0) hora="0"+hora;

    if(segundo<10) segundo="0"+segundo;
    if(minuto<10) minuto="0"+minuto;

    Fecha.innerHTML=`${diaAct} ${fecha} ${mesAct}`;
    Hora.innerHTML=`${hora} : ${minuto}`;
    Segundos.innerHTML=segundo;
    Am_pm.innerHTML=AM
    Anio.innerHTML=anio

}

reloj();
setInterval(reloj,1000)