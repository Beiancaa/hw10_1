a = ["john", "mike", "susan", "matt", "joe", "larry", "ken", "samantha", "jenny", "Sara", "henry"]

for i in 0..10
  if i % 2
   puts a[i].map(&:reverse!)
  end
end