x = int(input())
rev_x = 0

for _ in range(len(str(x))):
    last_digit = x % 10
    rev_x = rev_x * 10 + last_digit
    x //= 10
print(rev_x)