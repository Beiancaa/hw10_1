b = [5, 10, 23, 10, 7, 9, 39, 16, 1, 12, 36, 20, 50]

 

  c=Array.new(b.length) 
  for i in 0..13
   
    c[i] = b[i] * 10 - 5
     
    i += 1
    puts b
  puts c
  puts c + b
  
  end
