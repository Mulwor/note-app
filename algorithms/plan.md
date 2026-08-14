## 📋 ШПАРГАЛКА ПО ПАТТЕРНАМ

---

### 1. 🪟 Sliding Window (Скользящее окно)

**🔴 Красные флаги:** "подстрока", "подмассив", "contiguous", "at most K", "longest/shortest window"

**Шаблон:**
```python
left = 0
window = {}  # или переменная для отслеживания состояния
for right in range(len(s)):
    # 1. Расширяем окно вправо
    window[s[right]] += 1
    
    # 2. Сжимаем окно слева, пока условие нарушено
    while УСЛОВИЕ_НАРУШЕНО:
        window[s[left]] -= 1
        left += 1
    
    # 3. Обновляем ответ
    result = max(result, right - left + 1)
```

**Сложность:** O(n) время, O(k) память

**⚠️ Частые ошибки:** Забыть сжать окно; перепутать `while` и `if` при сжатии

---

### 2. 👆 Two Pointers (Два указателя)

**🔴 Красные флаги:** "sorted array", "pair", "sum", "palindrome", "remove duplicates"

**Шаблон (схождение):**
```python
left, right = 0, len(arr) - 1
while left < right:
    current = arr[left] + arr[right]
    if current == target:
        # нашли
    elif current < target:
        left += 1
    else:
        right -= 1
```

**Шаблон (один проход):**
```python
slow = 0
for fast in range(len(arr)):
    if УСЛОВИЕ:
        arr[slow] = arr[fast]
        slow += 1
return slow
```

**Сложность:** O(n) время, O(1) память

**⚠️ Частые ошибки:** Не отсортировать массив перед 3Sum; пропустить дубликаты

---

### 3. 🔍 Binary Search (Бинарный поиск)

**🔴 Красные флаги:** "sorted", "rotated", "find minimum/maximum", "log(n)", "peak"

**Шаблон:**
```python
left, right = 0, len(arr) - 1
while left <= right:
    mid = (left + right) // 2
    if arr[mid] == target:
        return mid
    elif arr[mid] < target:
        left = mid + 1
    else:
        right = mid - 1
return -1
```

**Шаблон (поиск по ответу):**
```python
left, right = min_val, max_val
while left < right:
    mid = (left + right) // 2
    if can_achieve(mid):
        right = mid
    else:
        left = mid + 1
return left
```

**Сложность:** O(log n) время, O(1) память

**⚠️ Частые ошибки:** Переполнение `(left + right)` → использовать `left + (right - left) // 2`; перепутать `<` и `<=`

---

### 4. 📊 Prefix Sum (Префиксные суммы)

**🔴 Красные флаги:** "subarray sum", "sum equals K", "divisible by K", "product except self"

**Шаблон:**
```python
prefix_sum = 0
count = {0: 1}  # важно! пустой префикс
for num in arr:
    prefix_sum += num
    if prefix_sum - k in count:
        result += count[prefix_sum - k]
    count[prefix_sum] = count.get(prefix_sum, 0) + 1
```

**Сложность:** O(n) время, O(n) память

**⚠️ Частые ошибки:** Забыть инициализировать `{0: 1}`; перепутать порядок вычитания

---

### 5. 📚 Stack / Monotonic Stack (Стек)

**🔴 Красные флаги:** "parentheses", "next greater", "histogram", "calculator", "temperature"

**Шаблон (монотонный стек):**
```python
stack = []  # хранит индексы
for i in range(len(arr)):
    while stack and arr[i] > arr[stack[-1]]:
        idx = stack.pop()
        # arr[i] — следующий больший для arr[idx]
    stack.append(i)
```

**Шаблон (скобки):**
```python
stack = []
for char in s:
    if char in '([{':
        stack.append(char)
    else:
        if not stack or not match(stack.pop(), char):
            return False
return len(stack) == 0
```

**Сложность:** O(n) время, O(n) память

**⚠️ Частые ошибки:** Забыть обработать оставшиеся элементы в стеке; перепутать направление монотонности

---

### 6. 🔗 Linked List (Связные списки)

**🔴 Красные флаги:** "linked list", "reverse", "merge", "cycle", "nth from end"

**Шаблон (разворот):**
```python
prev = None
curr = head
while curr:
    next_node = curr.next
    curr.next = prev
    prev = curr
    curr = next_node
return prev
```

**Шаблон (быстрый/медленный):**
```python
slow = fast = head
while fast and fast.next:
    slow = slow.next
    fast = fast.next.next
# slow — середина
```

**Сложность:** O(n) время, O(1) память

**⚠️ Частые ошибки:** Потерять ссылку на `next`; не обработать пустой список

---

### 7. 🌳 Trees — DFS (Деревья — DFS)

**🔴 Красные флаги:** "binary tree", "depth", "path sum", "validate BST", "maximum path"

**Шаблон (рекурсивный DFS):**
```python
def dfs(node):
    if not node:
        return БАЗОВЫЙ_СЛУЧАЙ
    
    left = dfs(node.left)
    right = dfs(node.right)
    
    # Обработка текущего узла
    return РЕЗУЛЬТАТ
```

**Шаблон (BST валидация):**
```python
def validate(node, lo=float('-inf'), hi=float('inf')):
    if not node:
        return True
    if node.val <= lo or node.val >= hi:
        return False
    return validate(node.left, lo, node.val) and validate(node.right, node.val, hi)
```

**Сложность:** O(n) время, O(h) память (h — высота дерева)

**⚠️ Частые ошибки:** Забыть базовый случай; перепутать порядок обхода

---

### 8. 🌊 Trees — BFS + LCA + Graph (Деревья — BFS + LCA + Графы)

**🔴 Красные флаги:** "level order", "shortest path", "rotting", "islands", "lowest common ancestor"

**Шаблон (BFS по уровням):**
```python
from collections import deque
queue = deque([root])
while queue:
    level_size = len(queue)
    for _ in range(level_size):
        node = queue.popleft()
        # обработка
        if node.left: queue.append(node.left)
        if node.right: queue.append(node.right)
```

**Шаблон (Multi-source BFS):**
```python
queue = deque(ВСЕ_ИСТОЧНИКИ)
visited = set(ВСЕ_ИСТОЧНИКИ)
steps = 0
while queue:
    for _ in range(len(queue)):
        x, y = queue.popleft()
        for dx, dy in [(0,1),(0,-1),(1,0),(-1,0)]:
            nx, ny = x+dx, y+dy
            if valid(nx, ny) and (nx,ny) not in visited:
                visited.add((nx,ny))
                queue.append((nx,ny))
    steps += 1
```

**Сложность:** O(n) время, O(n) память

**⚠️ Частые ошибки:** Забыть отметить посещённые; не обработать все источники одновременно

---

### 9. 🧮 Dynamic Programming (Динамическое программирование)

**🔴 Красные флаги:** "minimum/maximum", "ways to", "longest subsequence", "knapsack", "stock"

**Шаблон (1D DP):**
```python
dp = [0] * (n + 1)
dp[0] = БАЗОВЫЙ_СЛУЧАЙ
for i in range(1, n + 1):
    for choice in ВОЗМОЖНЫЕ_ВЫБОРЫ:
        dp[i] = max/min(dp[i], dp[i - choice] + СТОИМОСТЬ)
return dp[n]
```

**Шаблон (Kadane's):**
```python
max_sum = curr_sum = arr[0]
for num in arr[1:]:
    curr_sum = max(num, curr_sum + num)
    max_sum = max(max_sum, curr_sum)
```

**Сложность:** O(n×m) время, O(n) память

**⚠️ Частые ошибки:** Неправильный базовый случай; перепутать порядок заполнения таблицы

---

### 10. 🔄 Backtracking + Intervals (Поиск с возвратом + Интервалы)

**🔴 Красные флаги:** "generate all", "permutations", "combinations", "merge intervals", "overlapping"

**Шаблон (Backtracking):**
```python
def backtrack(path, choices):
    if БАЗОВЫЙ_СЛУЧАЙ:
        result.append(path[:])
        return
    for choice in choices:
        if VALID(choice):
            path.append(choice)
            backtrack(path, next_choices)
            path.pop()  # откат
```

**Шаблон (Интервалы):**
```python
intervals.sort(key=lambda x: x[0])
merged = [intervals[0]]
for start, end in intervals[1:]:
    if start <= merged[-1][1]:
        merged[-1][1] = max(merged[-1][1], end)
    else:
        merged.append([start, end])
```

**Сложность:** Backtracking: O(2^n); Intervals: O(n log n)

**⚠️ Частые ошибки:** Забыть `path.pop()`; не отсортировать интервалы

---

### 11. 🏔️ Heap + Design (Куча + Проектирование)

**🔴 Красные флаги:** "top K", "kth largest", "median", "LRU", "O(1) operations"

**Шаблон (Top K):**
```python
import heapq
heap = []
for item in arr:
    heapq.heappush(heap, item)
    if len(heap) > k:
        heapq.heappop(heap)
return heap
```

**Шаблон (LRU Cache):**
```python
# HashMap + Doubly Linked List
# get: O(1) — переместить в начало
# put: O(1) — добавить в начало, удалить хвост если переполнение
```

**Шаблон (Two Heaps для медианы):**
```python
# max_heap — левая половина (инвертированные значения)
# min_heap — правая половина
# Балансировка: размеры отличаются не более чем на 1
```

**Сложность:** Top K: O(n log k); LRU: O(1)

**⚠️ Частые ошибки:** В Python `heapq` — min-heap, для max-heap инвертировать значения

---

### 12. 🗂️ Hash Table + String (Хеш-таблицы + Строки)

**🔴 Красные флаги:** "anagram", "frequency", "isomorphic", "first unique", "roman"

**Шаблон (частоты):**
```python
from collections import Counter, defaultdict
freq = Counter(s)
# или
freq = defaultdict(int)
for char in s:
    freq[char] += 1
```

**Шаблон (изоморфные строки):**
```python
map_s_to_t = {}
map_t_to_s = {}
for cs, ct in zip(s, t):
    if cs in map_s_to_t and map_s_to_t[cs] != ct:
        return False
    if ct in map_t_to_s and map_t_to_s[ct] != cs:
        return False
    map_s_to_t[cs] = ct
    map_t_to_s[ct] = cs
```

**Сложность:** O(n) время, O(k) память

**⚠️ Частые ошибки:** Забыть проверить оба направления маппинга; не обработать edge cases

---

### 13. ✏️ String Advanced + Matrix (Строки + Матрицы)

**🔴 Красные флаги:** "multiply strings", "add strings", "compress", "spiral", "rotate"

**Шаблон (сложение строк):**
```python
i, j = len(a)-1, len(b)-1
carry = 0
result = []
while i >= 0 or j >= 0 or carry:
    total = carry
    if i >= 0: total += ord(a[i]) - ord('0'); i -= 1
    if j >= 0: total += ord(b[j]) - ord('0'); j -= 1
    result.append(str(total % 10))
    carry = total // 10
return ''.join(reversed(result))
```

**Шаблон (поворот матрицы):**
```python
# Транспонировать + отразить по горизонтали
matrix.reverse()
for i in range(n):
    for j in range(i+1, n):
        matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
```

**Сложность:** O(n×m) время, O(1) память (in-place)

**⚠️ Частые ошибки:** Перепутать порядок операций при повороте; не обработать carry

---

### 14. 🔢 Math + Bit Manipulation (Математика + Биты)

**🔴 Красные флаги:** "XOR", "single number", "missing number", "prime", "majority"

**Шаблон (XOR):**
```python
result = 0
for num in arr:
    result ^= num
return result  # все пары обнуляются, остаётся одинокий
```

**Шаблон (решето Эратосфена):**
```python
sieve = [True] * n
sieve[0] = sieve[1] = False
for i in range(2, int(n**0.5) + 1):
    if sieve[i]:
        for j in range(i*i, n, i):
            sieve[j] = False
```

**Шаблон (Boyer-Moore Voting):**
```python
candidate, count = None, 0
for num in arr:
    if count == 0:
        candidate = num
    count += 1 if num == candidate else -1
return candidate
```

**Сложность:** O(n) время, O(1) память

**⚠️ Частые ошибки:** Забыть что XOR коммутативен; перепутать индексы в решете

---

### 15. 🎯 Greedy + Array (Жадные алгоритмы)

**🔴 Красные флаги:** "jump game", "partition labels", "maximum distance", "summary ranges"

**Шаблон (Jump Game):**
```python
max_reach = 0
for i in range(len(arr)):
    if i > max_reach:
        return False
    max_reach = max(max_reach, i + arr[i])
return True
```

**Шаблон (Partition Labels):**
```python
last = {c: i for i, c in enumerate(s)}
start = end = 0
result = []
for i, c in enumerate(s):
    end = max(end, last[c])
    if i == end:
        result.append(end - start + 1)
        start = i + 1
```

**Сложность:** O(n) время, O(1) память

**⚠️ Частые ошибки:** Жадный выбор не всегда оптимален — нужно доказательство; забыть обновить максимум

---

## 📅 ПЛАН ОБУЧЕНИЯ: 15 ДНЕЙ

---

### 📆 День 1: Sliding Window (12 задач)

| # | Задача | Сложность | 🔒 |
|---|--------|-----------|-----|
| 1 | 485. Max Consecutive Ones | Easy | |
| 2 | 3. Longest Substring Without Repeating Characters | Med | |
| 3 | 424. Longest Repeating Character Replacement | Med | |
| 4 | 567. Permutation in String | Med | |
| 5 | 438. Find All Anagrams in a String | Med | |
| 6 | 159. Longest Substring with At Most Two Distinct Characters | Med | 🔒 |
| 7 | 209. Minimum Size Subarray Sum | Med | |
| 8 | 713. Subarray Product Less Than K | Med | |
| 9 | 1004. Max Consecutive Ones III | Med | |
| 10 | 1493. Longest Subarray of 1's After Deleting One Element | Med | |
| 11 | 487. Max Consecutive Ones II | Med | 🔒 |
| 12 | 76. Minimum Window Substring | Hard | |

**Порядок решения:** от простых к сложным. Первые 5 — разминка, последние 3 — хардкор.

---

### 📆 День 2: Two Pointers (16 задач)

| # | Задача | Сложность | 🔒 |
|---|--------|-----------|-----|
| 1 | 26. Remove Duplicates from Sorted Array | Easy | |
| 2 | 283. Move Zeroes | Easy | |
| 3 | 88. Merge Sorted Array | Easy | |
| 4 | 977. Squares of a Sorted Array | Easy | |
| 5 | 125. Valid Palindrome | Easy | |
| 6 | 680. Valid Palindrome II | Easy | |
| 7 | 844. Backspace String Compare | Easy | |
| 8 | 167. Two Sum II - Input Array Is Sorted | Med | |
| 9 | 11. Container With Most Water | Med | |
| 10 | 15. 3Sum | Med | |
| 11 | 16. 3Sum Closest | Med | |
| 12 | 18. 4Sum | Med | |
| 13 | 532. K-diff Pairs in an Array | Med | |
| 14 | 350. Intersection of Two Arrays II | Easy | |
| 15 | 2215. Find the Difference of Two Arrays | Easy | |
| 16 | 1868. Product of Two Run-Length Encoded Arrays | Med | 🔒 |

**Порядок:** первые 7 — разминка на один проход, затем 3Sum-семейство, затем остальное.

---

### 📆 День 3: Binary Search (13 задач)

| # | Задача | Сложность | 🔒 |
|---|--------|-----------|-----|
| 1 | 704. Binary Search | Easy | |
| 2 | 35. Search Insert Position | Easy | |
| 3 | 374. Guess Number Higher or Lower | Easy | |
| 4 | 34. Find First and Last Position of Element in Sorted Array | Med | |
| 5 | 33. Search in Rotated Sorted Array | Med | |
| 6 | 81. Search in Rotated Sorted Array II | Med | |
| 7 | 153. Find Minimum in Rotated Sorted Array | Med | |
| 8 | 162. Find Peak Element | Med | |
| 9 | 852. Peak Index in a Mountain Array | Med | |
| 10 | 1901. Find a Peak Element II | Med | |
| 11 | 74. Search a 2D Matrix | Med | |
| 12 | 658. Find K Closest Elements | Med | |
| 13 | 4. Median of Two Sorted Arrays | Hard | |

**Порядок:** классический бинарный поиск → rotated → peak → 2D → median.

---

### 📆 День 4: Prefix Sum + Kadane's (9 задач)

| # | Задача | Сложность | 🔒 |
|---|--------|-----------|-----|
| 1 | 724. Find Pivot Index | Easy | |
| 2 | 238. Product of Array Except Self | Med | |
| 3 | 560. Subarray Sum Equals K | Med | |
| 4 | 523. Continuous Subarray Sum | Med | |
| 5 | 974. Subarray Sums Divisible by K | Med | |
| 6 | 1524. Number of Sub-arrays With Odd Sum | Med | |
| 7 | 2657. Find the Prefix Common Array of Two Arrays | Med | |
| 8 | 53. Maximum Subarray | Med | |
| 9 | 152. Maximum Product Subarray | Med | |

**Порядок:** сначала префиксные суммы (1-7), затем Kadane's (8-9).

---

### 📆 День 5: Stack + Monotonic Stack (12 задач)

| # | Задача | Сложность | 🔒 |
|---|--------|-----------|-----|
| 1 | 20. Valid Parentheses | Easy | |
| 2 | 232. Implement Queue using Stacks | Easy | |
| 3 | 155. Min Stack | Med | |
| 4 | 716. Max Stack | Hard | 🔒 |
| 5 | 71. Simplify Path | Med | |
| 6 | 150. Evaluate Reverse Polish Notation | Med | |
| 7 | 227. Basic Calculator II | Med | |
| 8 | 739. Daily Temperatures | Med | |
| 9 | 42. Trapping Rain Water | Hard | |
| 10 | 85. Maximal Rectangle | Hard | |
| 11 | 239. Sliding Window Maximum | Hard | |
| 12 | 480. Sliding Window Median | Hard | |

**Порядок:** базовый стек (1-4) → парсинг (5-7) → монотонный стек (8-10) → deque (11-12).

---

### 📆 День 6: Linked List (7 задач)

| # | Задача | Сложность | 🔒 |
|---|--------|-----------|-----|
| 1 | 206. Reverse Linked List | Easy | |
| 2 | 21. Merge Two Sorted Lists | Easy | |
| 3 | 141. Linked List Cycle | Easy | |
| 4 | 234. Palindrome Linked List | Easy | |
| 5 | 19. Remove Nth Node From End of List | Med | |
| 6 | 2. Add Two Numbers | Med | |
| 7 | 23. Merge k Sorted Lists | Hard | |

**Порядок:** разворот → слияние → цикл → палиндром → удаление → сложение → k списков.

---

### 📆 День 7: Trees — DFS (10 задач)

| # | Задача | Сложность | 🔒 |
|---|--------|-----------|-----|
| 1 | 104. Maximum Depth of Binary Tree | Easy | |
| 2 | 100. Same Tree | Easy | |
| 3 | 101. Symmetric Tree | Easy | |
| 4 | 110. Balanced Binary Tree | Easy | |
| 5 | 404. Sum of Left Leaves | Easy | |
| 6 | 98. Validate Binary Search Tree | Med | |
| 7 | 113. Path Sum II | Med | |
| 8 | 938. Range Sum of BST | Easy | |
| 9 | 652. Find Duplicate Subtrees | Med | |
| 10 | 124. Binary Tree Maximum Path Sum | Hard | |

**Порядок:** базовые DFS (1-5) → BST (6, 8) → path sum (7) → сериализация (9) → hard (10).

---

### 📆 День 8: Trees — BFS + LCA + Graph (9 задач)

| # | Задача | Сложность | 🔒 |
|---|--------|-----------|-----|
| 1 | 102. Binary Tree Level Order Traversal | Med | |
| 2 | 103. Binary Tree Zigzag Level Order Traversal | Med | |
| 3 | 235. Lowest Common Ancestor of a BST | Med | |
| 4 | 236. Lowest Common Ancestor of a Binary Tree | Med | |
| 5 | 1650. Lowest Common Ancestor of a Binary Tree III | Med | 🔒 |
| 6 | 449. Serialize and Deserialize BST | Med | |
| 7 | 200. Number of Islands | Med | |
| 8 | 994. Rotting Oranges | Med | |
| 9 | 332. Reconstruct Itinerary | Hard | |

**Порядок:** BFS по уровням (1-2) → LCA (3-5) → сериализация (6) → графы (7-9).

---

### 📆 День 9: Dynamic Programming (11 задач)

| # | Задача | Сложность | 🔒 |
|---|--------|-----------|-----|
| 1 | 121. Best Time to Buy and Sell Stock | Easy | |
| 2 | 122. Best Time to Buy and Sell Stock II | Med | |
| 3 | 5. Longest Palindromic Substring | Med | |
| 4 | 300. Longest Increasing Subsequence | Med | |
| 5 | 322. Coin Change | Med | |
| 6 | 279. Perfect Squares | Med | |
| 7 | 139. Word Break | Med | |
| 8 | 72. Edit Distance | Med | |
| 9 | 1143. Longest Common Subsequence | Med | |
| 10 | 309. Best Time to Buy and Sell Stock with Cooldown | Med | |
| 11 | 714. Best Time to Buy and Sell Stock with Transaction Fee | Med | |

**Порядок:** stock (1-2) → палиндром (3) → LIS (4) → рюкзак (5-7) → 2D DP (8-9) → stock advanced (10-11).

---

### 📆 День 10: Backtracking + Intervals (7 задач)

| # | Задача | Сложность | 🔒 |
|---|--------|-----------|-----|
| 1 | 22. Generate Parentheses | Med | |
| 2 | 301. Remove Invalid Parentheses | Hard | |
| 3 | 56. Merge Intervals | Med | |
| 4 | 252. Meeting Rooms | Easy | 🔒 |
| 5 | 253. Meeting Rooms II | Med | 🔒 |
| 6 | 435. Non-overlapping Intervals | Med | |
| 7 | 986. Interval List Intersections | Med | |

**Порядок:** backtracking (1-2) → интервалы от простых к сложным (3-7).

---

### 📆 День 11: Heap + Design (10 задач)

| # | Задача | Сложность | 🔒 |
|---|--------|-----------|-----|
| 1 | 347. Top K Frequent Elements | Med | |
| 2 | 692. Top K Frequent Words | Med | |
| 3 | 295. Find Median from Data Stream | Hard | |
| 4 | 933. Number of Recent Calls | Easy | |
| 5 | 362. Design Hit Counter | Med | 🔒 |
| 6 | 380. Insert Delete GetRandom O(1) | Med | |
| 7 | 146. LRU Cache | Med | |
| 8 | 2241. Design an ATM Machine | Med | |
| 9 | 281. Zigzag Iterator | Med | 🔒 |
| 10 | 341. Flatten Nested List Iterator | Med | |

**Порядок:** heap (1-3) → простой дизайн (4-6) → сложный дизайн (7-10).

---

### 📆 День 12: Hash Table + String Basics (9 задач)

| # | Задача | Сложность | 🔒 |
|---|--------|-----------|-----|
| 1 | 1. Two Sum | Easy | |
| 2 | 242. Valid Anagram | Easy | |
| 3 | 771. Jewels and Stones | Easy | |
| 4 | 387. First Unique Character in a String | Easy | |
| 5 | 205. Isomorphic Strings | Easy | |
| 6 | 49. Group Anagrams | Med | |
| 7 | 13. Roman to Integer | Easy | |
| 8 | 12. Integer to Roman | Med | |
| 9 | 28. Find the Index of the First Occurrence in a String | Easy | |

**Порядок:** хеш-таблицы (1-6) → римские числа (7-8) → поиск подстроки (9).

---

### 📆 День 13: String Advanced + Matrix (10 задач)

| # | Задача | Сложность | 🔒 |
|---|--------|-----------|-----|
| 1 | 415. Add Strings | Easy | |
| 2 | 43. Multiply Strings | Med | |
| 3 | 443. String Compression | Med | |
| 4 | 557. Reverse Words in a String III | Easy | |
| 5 | 392. Is Subsequence | Easy | |
| 6 | 161. One Edit Distance | Med | 🔒 |
| 7 | 1446. Consecutive Characters | Easy | |
| 8 | 68. Text Justification | Hard | |
| 9 | 48. Rotate Image | Med | |
| 10 | 59. Spiral Matrix II | Med | |

**Порядок:** арифметика строк (1-2) → сжатие/разворот (3-5) → edit distance (6) → хардкор (7-8) → матрицы (9-10).

---

### 📆 День 14: Math + Bit Manipulation (9 задач)

| # | Задача | Сложность | 🔒 |
|---|--------|-----------|-----|
| 1 | 136. Single Number | Easy | |
| 2 | 268. Missing Number | Easy | |
| 3 | 169. Majority Element | Easy | |
| 4 | 7. Reverse Integer | Med | |
| 5 | 204. Count Primes | Med | |
| 6 | 470. Implement Rand10() Using Rand7() | Med | |
| 7 | 149. Max Points on a Line | Hard | |
| 8 | 356. Line Reflection | Med | 🔒 |
| 9 | 1572. Matrix Diagonal Sum | Easy | |

**Порядок:** XOR/биты (1-3) → математика (4-6) → геометрия (7-8) → матрица (9).

---

### 📆 День 15: Greedy + Array (7 задач)

| # | Задача | Сложность | 🔒 |
|---|--------|-----------|-----|
| 1 | 55. Jump Game | Med | |
| 2 | 763. Partition Labels | Med | |
| 3 | 849. Maximize Distance to Closest Person | Med | |
| 4 | 581. Shortest Unsorted Continuous Subarray | Med | |
| 5 | 228. Summary Ranges | Easy | |
| 6 | 118. Pascal's Triangle | Easy | |
| 7 | 1450. Number of Students Doing Homework at a Given Time | Easy | |

**Порядок:** жадные (1-4) → массивы (5-7). Лёгкий финальный день! 🎉

---

## 📊 Сводная таблица плана

| День | Тема | Задач | Сложность |
|------|------|-------|-----------|
| 1 | Sliding Window | 12 | 🟡🟡🟡 |
| 2 | Two Pointers | 16 | 🟡🟡 |
| 3 | Binary Search | 13 | 🟡🟡🟡 |
| 4 | Prefix Sum + Kadane's | 9 | 🟡🟡 |
| 5 | Stack + Monotonic Stack | 12 | 🔴🔴 |
| 6 | Linked List | 7 | 🟡 |
| 7 | Trees — DFS | 10 | 🟡🟡 |
| 8 | Trees — BFS + LCA + Graph | 9 | 🟡🟡 |
| 9 | Dynamic Programming | 11 | 🔴🔴 |
| 10 | Backtracking + Intervals | 7 | 🟡🟡 |
| 11 | Heap + Design | 10 | 🔴 |
| 12 | Hash Table + String Basics | 9 | 🟢 |
| 13 | String Advanced + Matrix | 10 | 🟡🟡 |
| 14 | Math + Bit Manipulation | 9 | 🟡 |
| 15 | Greedy + Array | 7 | 🟢 |
| **Итого** | **15 дней** | **151 задача** | |

---

## 💡 Рекомендации по прохождению

1. **Не решайте подряд более 30 минут.** Если застряли — посмотрите подсказку, но не решение.
2. **После каждой задачи** запишите в шпаргалку: какой паттерн применили и где ошиблись.
3. **Премиальные задачи** (🔒) можно пропустить и заменить бесплатными альтернативами, которые уже в списке.
4. **Дни 5, 9, 11** — самые сложные. Если не успеваете за день, разбейте на два.
5. **Повторение:** через 3 дня после прохождения темы вернитесь и решите 2-3 задачи из неё без подсказок.

Удачи! 🚀 Если нужна помощь с конкретной задачей или паттерном — обращайтесь.
