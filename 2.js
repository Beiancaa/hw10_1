var	a = ["john", "mike", "susan", "matt", "joe", "larry", "ken", "samantha", "jenny", "Sara", "henry"];
for( var i=10 ;i>0 ;i--)
{
 if(i-=2)
 {
  var str=a[i];
  var res = str.toUpperCase();
 }
 
  console.log(res);

}
