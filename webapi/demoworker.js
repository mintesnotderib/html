let i=0;
function timedcount(){
 i++;
 postMessage(i);
 setTimeout(timedcount, 1000)
}
timedcount()