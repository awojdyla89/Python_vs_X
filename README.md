## Python Vs X

#### **Contributor:** Adam C Wojdyla
#### **Course:** CS-4050 Algorithms and Algorithms and Analysis
#### **Date of Completion:** 11/14/2021


### Coding directions

For this assignment you will choose any one of the Programming Assignments you have completed and implement it in another language besides Python. 

### Functions implemented

- Assignment 2: **Bubble Sort - Radix Sort**
- Language chosen to compare: **JavaScript**

### Visualiztion 

- Created four CanvasJS graphs to compare:
    - Python: Bubble Sort vs Radix Sort average time per iteration.
    - JavaScript: Bubble Sort vs Radix Sort average time per iteration.
    - Python vs JavaScript: Bubble Sort average per iteration.
    - Python vs JavaScript: Radix Sort average per iteration.

### Benchmarking

- Each graph holds ten data points. 
- Each data point represents various datasets ranging from 500-40000 elements.
- Each dataset is randomized.
- Each dataset runs 10 iterations and takes the average run time per iteration.

### Results
- Bubble Sort - Both algorithms are very similar in implementation. For the largest dataset of 40k elements JavaScript's average was ~6 seconds per iteration vs Python's ~111 seconds per iteration to sort.
- Radix Sort - Again, very similar in implementation. For the largest dataset of 40k elements JavaScripts average was ~0.03 per iteration vs Python's ~0.07 per iteration to sort.
