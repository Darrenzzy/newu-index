export default (dateString)=>{
    var arr = dateString.split("T");
    var d=arr[0];

    var darr = d.split('-');

    var t=arr[1];
    var tarr = t.split('.000');
    var marr = tarr[0].split(':');

   var timeStamp = parseInt(darr[0])+"-"+parseInt(darr[1])+"-"+parseInt(darr[2])+" "+parseInt(marr[0])+":"+parseInt(marr[1])+":"+parseInt(marr[2]);
    
   return timeStamp

}