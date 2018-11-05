def calc_fib(n):
  elems = []
  elems.append(0)
  elems.append(1)
  for i in range(2, n + 1):
    elems.append(elems[i-1] + elems[i-2])
  return elems[n]

if __name__ == "__main__":
  n = int(input())
  print(calc_fib(n))
