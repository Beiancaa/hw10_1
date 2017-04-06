var b = [5, 10, 23, 10, 7, 9, 39, 16, 1, 12, 36, 20, 50];
for(var i=0;i<b.length;i++)
{
  if(b[i]%2!==0)
  {
  console.log(b[i]*2);
  }
  
  if(b[i]%2===0)
  {
    console.log(b[i]-1);
  }
  if(b[i]%5===0)
  {
    console.log(Math.pow(b[i],2));
  }
  if(b[i]%10===0)
  {
    
    for(var j=0;j<i;j++)
    {
      var x=10;
    console.log(j*x);
    }  
  }
  
}