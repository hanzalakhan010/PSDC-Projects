1. **Pyramid Pattern Generation**: Different patterns, like a number pyramid with increasing digits, requiring nested loops and understanding of spacing.

2. **Sieve of Eratosthenes**: Implementing the algorithm to find primes up to N, using loops to mark multiples.

3. **Matrix Transposition**: Using nested loops to transpose a matrix, handling rows and columns.

4. **Longest Balanced Substring**: Finding the maximum length of balanced parentheses in a string using loops and counters.

5. **Array Statistics Without Built-ins**: Calculating average, min, max without using array methods, just loops.

6. **Iterative Permutations**: Generating permutations iteratively for a small string, using loops instead of recursion.

Wait, the permutations problem might be a bit too much for someone at intermediate level, but maybe it's a good challenge. Alternatively, a problem that requires checking for anagrams using loops.

Alternatively, a problem that simulates a grid movement, like a robot moving and turning, tracked with loops.

Also, considering performance: like optimizing a loop to avoid unnecessary iterations.

Let me outline the problems with details:

**1. Advanced Pyramid Patterns**

Task: Create a function that generates a specific pyramid pattern based on input. For example, input 5 would produce a pyramid with numbers increasing and arranged in a certain way. This requires nested loops and understanding how to manage row and column relationships.

**2. Prime Number Sieve**

Implement the Sieve of Eratosthenes to list primes up to N. This requires understanding loops within loops and efficient marking of non-primes.

**3. Matrix Transposition**

Write a function to transpose a given N x M matrix using nested loops, without using any built-in methods like map. Handling 2D arrays and indices.

**4. Balanced Parenthesis Substring**

Given a string of parentheses, find the length of the longest balanced substring using a single loop and tracking counters.

**5. Array Statistics with Loops**

Process an array of numbers to find average, min, max without using reduce or Math functions, just loops. Forces manual tracking of variables.

**6. Iterative String Permutations**

Generate all permutations of a string using only loops, not recursion. This is challenging but possible with iterative approaches.





Here are **realistic input/output examples** for each problem with practical scenarios:

---

### 1. ATM Cash Withdrawal System
**Input:**
```js
withdrawCash(325, {
  100: 3,  // Only 3 hundreds left
  50: 15,
  20: 20,
  10: 30,
  5: 50
});
```
**Output:**
```
Dispensed: 3x100, 1x20, 1x5
Remaining inventory:
100: 0
50: 15
20: 19
10: 30
5: 49
```
**Edge Case Input:**
```js
withdrawCash(130, {100: 1, 50: 0, 20: 6, 10: 2, 5: 10});
```
**Output:**
```
Dispensed: 1x100, 1x20, 2x5
Remaining inventory:
100: 0
20: 5
5: 8
```

---

### 2. Elevator Scheduling System
**Input:**
```js
operateElevator(3, [4, 1, 5, 2], 10); 
// Current floor 3, requests, max capacity 10
```
**Output:**
```
[UP] Doors open at 4 (4 people enter)
[UP] Capacity reached (10/10)
[DOWN] Stopping at 2 (5 people exit)
[DOWN] Doors open at 1 (3 people enter)
[UP] Doors open at 5 (Final destination)
```
**Edge Case:**
```js
operateElevator(5, [], 8); // Empty call
```
**Output:**
```
Idle at floor 5
```

---

### 3. Live Sports Score Tracker
**Input:**
```js
trackGame('soccer', 'MUNvsARS', console.log);
```
**Simulated Output (with delays):**
```
[00:00] Initial: MUN 0 - 0 ARS
[23:45] GOAL! MUN 1 - 0 ARS
[45:00] Half-time: MUN 1 - 0 ARS
[89:12] GOAL! MUN 1 - 1 ARS
[90:00+] Final: MUN 1 - 1 ARS
```

---

### 4. Package Delivery Route Optimizer
**Input:**
```js
const stops = [
  {location: 'Warehouse', distance: 0, priority: 0},
  {location: 'A', distance: 12, priority: 2},
  {location: 'B', distance: 8, priority: 1},
  {location: 'C', distance: 25, priority: 3}
];
calculateRoute(stops, 30); // 30 mile fuel range
```
**Output:**
```
Optimal route: B (8mi) → A (12mi) → C (25mi)
Total distance: 45mi
Fuel check:
- After B: 22mi remaining
- After A: 10mi remaining
- Refuel needed before C
```

---

### 5. Hospital Triage System
**Input:**
```js
const patients = [
  {name: 'John', severity: 3},
  {name: 'Maria', severity: 1},
  {name: 'Alex', severity: 2},
  {name: 'Emma', severity: 1} // New arrival during triage
];
handleTriage(patients);
```
**Output:**
```
Processing Maria (Severity 1)
New patient Emma (Severity 1) arrived
Processing Emma (Severity 1)
Processing Alex (Severity 2)
Processing John (Severity 3)
Queue cleared
```

---

**Key Real-World Variations Covered:**  
1. Inventory shortages (ATM)  
2. Capacity limits + dynamic requests (Elevator)  
3. Real-time event streaming (Sports)  
4. Fuel constraints + reprioritization (Delivery)  
5. Queue mutations during processing (Hospital)  

Want me to show the actual loop implementations for any of these scenarios? These examples reflect how while loops handle state changes and external events in production systems!