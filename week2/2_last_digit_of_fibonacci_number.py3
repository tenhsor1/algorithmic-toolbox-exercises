def calc_fib(n):
  elems = []
  elems.append(0)
  elems.append(1)
  for i in range(2, n + 1):
    elems.append((elems[i-1] % 10) + (elems[i-2]) % 10)
  return elems[n] % 10
if __name__ == "__main__":
  n = int(input())
  print(calc_fib(n))
