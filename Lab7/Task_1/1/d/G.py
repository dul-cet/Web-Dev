arr = list(map(int, input().split()))
max_value = arr[0]
max_index = 0
for i in range(1, len(arr)):
    if arr[i] > max_value:
        max_value = arr[i]
        max_index = i
print(max_value, max_index)