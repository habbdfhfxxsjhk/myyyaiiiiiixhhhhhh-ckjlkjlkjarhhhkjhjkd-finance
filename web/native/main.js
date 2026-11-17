import {Capacitor} from '@capacitor/core';
import {LocalNotifications} from '@capacitor/local-notifications';
const ID=101;
async function setup(){
 if(!Capacitor.isNativePlatform())return;
 const permission=await LocalNotifications.requestPermissions();
 if(permission.display!=='granted')return;
 const pending=await LocalNotifications.getPending();
 if(pending.notifications.some(n=>n.id===ID))await LocalNotifications.cancel({notifications:[{id:ID}]});
 const at=new Date();at.setHours(1,0,0,0);if(at<=new Date())at.setDate(at.getDate()+1);
 await LocalNotifications.schedule({notifications:[{id:ID,title:'MAX CARD FINANCE PRO',body:'حان وقت الجرد اليومي! راجع عمليات اليوم وأكد الجرد.',schedule:{at,repeats:true,every:'day',allowWhileIdle:true}}]});
 await LocalNotifications.addListener('localNotificationActionPerformed',()=>{document.querySelector('[data-nav="inventoryDaily"]')?.click();});
}
setup().catch(error=>console.warn('Daily reminder unavailable:',error));
