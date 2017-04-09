var a = ["john", "mike", "susan", "matt", "joe", "larry", "ken", "samantha", "jenny", "Sara", "henry"];

function reverse(a)
{
  return a.split('').reverse().join('');
}
for(var i=0; i<a.length; i++)
{
  if(i +=1)
  {
    console.log(reverse(a[i]));
    
  }
}