""" Python Vs X """

""" Python - Bubble Sort - Radix Sort"""

""" 
This project explores the Algorithms Bubble Sort and Radix Sort 
from assignment 2 with Python and Javascript to gain an understanding 
of the time complexity behavior using benchmarking techniques 
and Canvas JS for graph visualiztion. 
"""

import random
from functools import reduce
from math import ceil, log10
import timeit

def bubbleSort(lis):
    """ Bubble Sort Function takes 1 argument: list. """
    for i in range(len(lis) - 1):
        for j in range(0, len(lis) - i - 1):
            if lis[j] > lis[j + 1]:
                lis[j], lis[j + 1] = lis[j + 1], lis[j]

    return(lis)

def radixSort(list_of_items, max_digits):
    """ Radix Sort Function takes 2 arguments: list and max length of element in list. """
    for digit in range(0, max_digits):
        B = [[] for i in range(10)]
        for item in list_of_items:
            num = item // 10 ** (digit) % 10
            B[num].append(item)
        list_of_items = reduce(lambda x, y: x + y, B)

    return (list_of_items)


def bubble_radix_main():
    """ A 'main' function to be run. """
    number_of_runs = 10
    list1 = list(range(100))
    list2 = list(range(500))
    list3 = list(range(1000))
    list4 = list(range(2500))
    list5 = list(range(5000))
    list6 = list(range(7500))
    list7 = list(range(10000))
    list8 = list(range(20000))
    list9 = list(range(30000))
    list10 = list(range(40000))

    random.shuffle(list1)
    random.shuffle(list2)
    random.shuffle(list3)
    random.shuffle(list4)
    random.shuffle(list5)
    random.shuffle(list6)
    random.shuffle(list7)
    random.shuffle(list8)
    random.shuffle(list9)
    random.shuffle(list10)

    lists = [list1, list2, list3, list4, list5, list6, list7, list8, list9, list10]

    """ Loop through each list 10 times and take the average per size list. """
    for lis in lists:
        bubble_sort = timeit.Timer(lambda: bubbleSort(list(lis))).timeit(number=number_of_runs)
        avg_duration = bubble_sort / number_of_runs
        print(f'Bubble Sort Avg. Duration per run List size {len(lis)}: {avg_duration} seconds')
    
    for lis in lists:
        radix_duration = timeit.Timer(lambda: radixSort(list(lis), ceil(log10(max(lis))))).timeit(number=number_of_runs)
        avg_duration = radix_duration / number_of_runs
        print(f'Radix Sort Avg. Duration List size {len(lis)}: {avg_duration} seconds')

if __name__ == '__main__':
    bubble_radix_main()
