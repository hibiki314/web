function age(ageymd){
today=new Date();
year=today.getYear(); if(year<1900) year+=1900;
month=today.getMonth()+1;
date=today.getDate();
ymd=year*10000+month*100+date;
document.write(Math.floor((ymd-ageymd)/10000));
}