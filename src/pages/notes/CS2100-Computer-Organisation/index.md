---
title: CS2100 Computer Organisation
date: '2019-08-24'
spoiler: 
---

- [Lecture 1](#lecture-1)
- [Lecture 2](#lecture-2)
  - [Accuracy limitation](#accuracy-limitation)
  - [Data type conversion](#data-type-conversion)
  - [Data Representation & Number System](#data-representation--number-system)
  - [Answers for exercise](#answers-for-exercise)
  - [Decimal to Binary conversion](#decimal-to-binary-conversion)
- [Lecture 3](#lecture-3)
  - [Decimal to Base-R conversion](#decimal-to-base-r-conversion)
  - [Base-K to Base-J](#base-k-to-base-j)
  - [Shortcuts exist](#shortcuts-exist)
  - [Binary translation for 0 to 7 (base 10)](#binary-translation-for-0-to-7-base-10)
  - [Homework](#homework)
  - [Data Representation on computer](#data-representation-on-computer)
  - [Implication of storage unit](#implication-of-storage-unit)
  - [Data Types and Storage Unit](#data-types-and-storage-unit)
  - [Common Data types mapping](#common-data-types-mapping)
  - [Representing int](#representing-int)
  - [Overflow](#overflow)
  - [2s-Complement](#2s-complement)
  - [Addition/Subtraction](#additionsubtraction)
  - [Exploration](#exploration)
  - [Excess-K Representation](#excess-k-representation)
  - [Floating Point numbers](#floating-point-numbers)
  - [Misc Notes](#misc-notes)
- [Lecture 4](#lecture-4)
  - [Memory snapshot](#memory-snapshot)
  - [Pointer: Declaration](#pointer-declaration)
  - [Pointer: Dereferencing](#pointer-dereferencing)
  - [Pointer: Common Confusion](#pointer-common-confusion)
  - [Pointers: Helpful "pointers"](#pointers-helpful-%22pointers%22)
  - [Function parameter passing](#function-parameter-passing)
  - [Summary](#summary)
  - [Misc Notes](#misc-notes-1)

## Lecture 1

- Objectives

  - know fundamentals of computing devices
  - basics of data representation in computers
  - working of various computer parts
  - issues in computing devices

- Topics

  - C
  - Data rep & number systems
  - Assembly
  - Processor execution cycles
  - Pipelining
  - Memory hierarchy
  - Circuit design

- Books

  - Digital logic design
  - Book + ebook in luminus
  - Computer Organisation and Design, 4th edition

- Web Resources

  - Luminus
    - Materials
    - Announcements
    - Forum

- Contact

  - Email
  - ModRec
    - main channel for tutorial/lab schedule matters

- Aspects

  - How computer works? (hardware)
  - How software works? (how is software being executed on the hardware)

- Computer Organisation

  - Processor
    - Control
    - Data Path
    - Registers
  - Memory
    - Cache
  - Devices
    - Input
    - Output

- How software works

  - Human: high level language
    | Assembly Language (Lowest level of instructions for computer to execute)
    v
  - Computer: machine language
  - Multiple layers of abstraction
    - omit unneccessary details for the higher layer
    - provides a simpler interface for the higher layer

- Interaction

  - Software
    - C
  - Hardware
    - Processor
      - Datapath & Control
        - Digital design
          - Circuit design
            - Layout
    - Memory Organsation
    - I/O system

- C programming language
  - Lowest level hardware only recognises 1 or 0
  - Binary (Machine language)
- Several flavors of lanaugages to bridge the gap between languages

- Translator

  - translate program from one language to another
  - Compiler
    - standard anme for translator whose source is a high-level language
  - Interpreter
    - trasnlator that both translates and executes a source program
    - on the fly

- Life of a program

  - edit program in high level lang (editor)
  - compiler program in assembly lang (compiler)
  - assemble to machine lang (compiler)
  - link multiple programs into one executable (compiler)
  - load .exe into computer's memory (os)
  - execute .exe (os)

- Compiled lang

  - Compile
  - Assemble
  - Link

- Interpreted program

  - editor
  - at run time, statement by statement
  - compile, assemble, link
  - load, execute
  - interpreter
  - e.g. python, js

- Compiled program on virtual machine

- Traits of C

  - very effcient in execution speed & memory footprint
  - all code must be in a function
  - main function is where it always starts

- data type
  - restricts the range of values that can be stored
  - limits the size of the variable in memory

int

- size 4 bytes
- range `-2**31 to 2**31 - 1`
- "What" gets printed

```c
#include <stdio.h>

int main()
{
  int i = 1;
  while (i > 0)
  {
    i++;
  }
  printf("What");
  return 0;
}
```

## Lecture 2

### Accuracy limitation

- all variables have inaccuracy in representing floating point values

### Data type conversion

- rules

  - implicit: performed automatically based on well-defined rules
  - explicit: programmer can dictate the date type change
  - hierarchy
    - char -> int -> float -> double
    - precision increases down the ladder
    - widening
      - no info is lost
    - narrowing if going the other direction
      - lose floating point

- explicit conversion
  - type casting
    - expliciting promote/demote a variable
    - (data type) value/var
    - e.g. (double) 2

### Data Representation & Number System

- Numeral Systems
  - ways to express numbers
- Positional weighted system

  - position of digit in a number carries different weight
  - base 10 number
    - 0,1,2,3,4,5,6,7,8,9
  - base 6 number
    - 0,1,2,3,4,5

- Number systems example

| Base | Digits                          | Number         | Value                                             |
| ---- | ------------------------------- | -------------- | ------------------------------------------------- |
| 10   | 0,1,2,3,4,5,6,7,8,9             | 1011 (base 10) | `1 * 10^3 + 1 * 10^1 + 1 * 10^0`                  |
| 2    | 0,1                             | 1011 (base 2)  | `1 * 2^3 + 1 * 2^1 + 1 * 2^0` = 11 (base 10)      |
| 3    | 0,1,2                           | 1011 (base 3)  | `1 * 3^3 + 1 * 3^1 + 1 * 3^0` = 31 (base 10)      |
| 16   | 0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f | 1011 (base 16) | `1 * 16^3 + 1 * 16^1 + 1 * 16^0` = 4113 (base 10) |

- example base-r to decimal conversion

2A(base 16) = `2 * 16^1 + 10 * 16 ^ 0`

### Answers for exercise

1. 111 (base 2)
2. 1001 (base 8)
3. 1888 (base 16)
4. 11
5. 343
6. 4AC2

### Decimal to Binary conversion

- Method 1 (int)

  - Repeated by divison by 2
    - Use successive division by 2 until the quotient is 0
      - e.g. 43 is 110101 (Least significant bit 2)

- Method 1 (fractional part)

  - Repeated multiplication by 2 until fractional product is 0
  - 0.3125 (base 10) is 0.0101 (base 2)

- Method 2
  - sum of weights
    - determine set of binary weights whose sum is equal to the decimal number
  - to convert X, list down the wegihts
    - start with a 2^n that is just smaller than the X
      - list down all the powers of 2
    - start from the largest weight:
      - if x is > weight ->= indicate 1 -> subtract weight from x
      - if x is < weight -> indicate 0
- Method 2 (example)

213 (base 10)

| 2^n        | 128 | 64  | 32  | 16  | 8   | 4   | 2   | 1   |
| ---------- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0/1        | 1   | 1   | 0   | 1   | 0   | 1   | 0   | 1   |
| value left | 85  | 21  | 21  | 5   | 5   | 1   | 1   | 0   |

## Lecture 3

10.625 (base 10) to binary: 1010.101

### Decimal to Base-R conversion

- Method 1 is sure-fire

  - repeatedly divide by R
  - preferred if R > 2

- Method 2 still works

  - Usually harder when you need to test for multiples of a weight
  - Because needs more bases
  - **Example**
    - Bases for 3: 0, 1, 2 (Needs to think more)

- Exercise

89 (base 10)

| base | answer |
| ---- | ------ |
| 5    | 324    |
| 8    | 131    |
| 16   | 59     |
| 89   | 10     |

### Base-K to Base-J

- Base-K -> Base-10 -> Base-J
- 12 (base 5) -> 7 (base 10) -> 10 (base 7)

### Shortcuts exist

- Base 2 <-> Base 8
- Base 2 <-> Base 16

Can basically map the below table to anything else:

- Just group into 3 and do translation

- Base 8

| Binary | Octal |
| ------ | ----- |
| (00)0  | 0     |
| (00)1  | 1     |
| (0)10  | 2     |
| (0)11  | 3     |
| 100    | 4     |
| 101    | 5     |
| 110    | 6     |
| 111    | 7     |

Answers:

| Binary  | Octal |
| ------- | ----- |
| 1010110 | 252   |
| 111110  | 76    |
| 1000101 | 105   |

- Representing in base 8 and 16 allows us to display binary more succintly

- Base 16

| Binary | Hexdecimal |
| ------ | ---------- |
| (000)0 | 0          |
| (000)1 | 1          |
| (00)10 | 2          |
| (00)11 | 3          |
| (0)100 | 4          |
| (0)101 | 5          |
| (0)110 | 6          |
| (0)111 | 7          |
| 1000   | 8          |
| 1001   | 9          |
| 1010   | A          |
| 1011   | B          |
| 1100   | C          |
| 1101   | D          |
| 1110   | E          |
| 1111   | F          |

- Examples
- When evaluating hexadecimal from binary, evaluate from right to left

| Binary     | Hexdecimal |
| ---------- | ---------- |
| 111110     | 3E         |
| 11101100   | EC         |
| 1000101    | 45         |
| 101010     | 2A         |
| 1001000101 | 245        |

- Octal to Hexadecimal
  - Octal -> Binary -> Hexadecimal
- Examples
  - 0x156 (Hexadecimal spit out)

| Octal | Binary    | Hexadecimal |
| ----- | --------- | ----------- |
| 537   | 101011111 | 15F         |
| 123   | 110011    | 33          |
| 65    | 110101    | 35          |

### Binary translation for 0 to 7 (base 10)

| base 10 | binary |
| ------- | ------ |
| 0       | 0      |
| 1       | 1      |
| 2       | 10     |
| 3       | 11     |
| 4       | 100    |
| 5       | 101    |
| 6       | 110    |
| 7       | 111    |

### Homework

- Binary translation of 0 to 7 w/o thinking
- Hexadecimal translation of 0 to 15
- Decimal translation of A, B, C, D, E, F
- Powers of 2 up to 1024

### Data Representation on computer

- Information is stored as binary values on a computer
- Common storage unit
  - Bit: binary digit (0/1)
  - Byte: 8 bits
  - Word: 4 bytes (32 bits) / 8 bytes (64 bits)
    - Platform dependent
    - Double word: 2 \* word
    - Half word: 1/2 \* word

### Implication of storage unit

- n bits can represent up to 2^N values
  - Example:
    - 2 bits -> can represent upto 4 values
      |0|0|
      |0|1|
      |1|0|
      |1|1|
    - 2 \*\* 2 = 4
    - 3 bits: 8
    - 4 bits: 16
  - to represent m values
    - log2M bits are required
      - 32 values -> requires 5 bits
      - 40 values -> log2(40) => 5.32 => 6 (round up)
      - 100 values -> log2(100) => 6.64 => 7 (round up)

### Data Types and Storage Unit

- Data type map to the underlying storage unit
  - storage unit influence the possible values sotred in data type

### Common Data types mapping

| Data Type | 32-bit Processor  | 64-bit Processor    |
| --------- | ----------------- | ------------------- |
| int       | 4 bytes (32 bits) | 8 bytes (64 bits)   |
| float     | 4 bytes (32 bits) | 8 bytes (64 bits)   |
| double    | 8 bytes (64 bits) | 16 bytes (128 bits) |
| char      | 1 byte (8 bit)    |

- For most data types, we need to fig. out how to represent values using the limited bits

- 4 sub-topics:
  - int
    - unsigned no.s: only non-negative vlues
      - simple binary conversion will do
    - signed numbers: include both +ve & -ve
      - 3 common representations for signed numbers
        - sign and magnitude
        - complement
        - excess
  - floating pt number
  - char
  - digit

### Representing int

- unsigned no.s: only numbers >= 0
- signed numbers (include both +ve & -ve numbers)

1. **Sign and magnitude**

- use one of the bit as sign bit
  - 0: -ve
  - 1: +ve

| 5 | 0101 |
| -5 | 1101 |

- 1-bit sign and 7-bit magnitude format
- largest value:
  - 01111111
  - `2 ** 6 + ... + 2 ** 0`
  - 2 \*\* 7 - 1
  - 127
- smallest value:
  - 11111111
  - -127
- zeroes:
  - 00000000 (+ve 0)
  - 10000000 (-ve 0)
  - no diff btw them
- range -127 -> 127
- question:
  - for an n-bit sign-and-magnitude rep, what is the range of values that can be represented?
- drawback of sign-and-magnitude
  - not very kind on arithmetic calculations
  - a + b => c

2. **Complement**

- 1s-Complement (radix complement)

| Binary | n-bit 1s-complement representation |
| ------ | ---------------------------------- |
| X      | X                                  |
| -X     | `2 ** n - X -1`                    |

- Example

| Binary     | 8-bit 1s-complement representation                     |
| ---------- | ------------------------------------------------------ |
| 0000 1100  | 0000 1100                                              |
| -0000 1100 | `2 ** 8 - X -1 = 2 ** 8 - 12 -1 = 243 = 11110011 (1s)` |

- Just flip the bits to get the -ve representation

| Decimal | Binary | 3-bit 1s-complement representation |
| ------- | ------ | ---------------------------------- |
| 0       | 000    | 000                                |
| 1       | 001    | 001                                |
| 2       | 010    | 010                                |
| 3       | 011    | 011                                |
| -0      | -000   | 111                                |
| -1      | -001   | 110                                |
| -2      | -010   | `2 ** 3 - 2 - 1 = 5 = 101`         |
| -3      | -011   | 100                                |

- Flipping the table

| Decimal | Binary | 3-bit 1s-complement representation |
| ------- | ------ | ---------------------------------- |
| 0       | 000    | 000                                |
| 1       | 001    | 001                                |
| 2       | 010    | 010                                |
| 3       | 011    | 011                                |
| -3      | -011   | 100                                |
| -2      | -010   | 101                                |
| -1      | -001   | 110                                |
| -0      | -000   | 111                                |

- Question

  - How do you tell from 1s that it is a +ve/-ve value?
    - all -ve values has 0 at charAt(0)
    - all +ve values has 1 at charAt(0)

- 8-bit 1s-complement

  |                | Binary                    | Base 10 |
  | -------------- | ------------------------- | ------- |
  | Largest value  | 0111 1111                 | 127     |
  | Smallest value | `-0111 1111 => 1000 0000` | -127    |
  | Zeroes         | 0000 0000, 1111 1111      | +0, -0  |

- conclusion: n-bit 1s-complement

  |                | Binary                                               | Base 10      |
  | -------------- | ---------------------------------------------------- | ------------ |
  | Largest value  | 0([1 for i in range(n -1) ])                         | `2 ** n -1`  |
  | Smallest value | 1([1 for i in range(n -1) ])                         | `-2 ** n +1` |
  | Zeroes         | [0 for i in range(n -1) ], [1 for i in range(n -1) ] | +0, -0       |

- addition / subtraction

  - algorithm for addition, A + B
    - perfrom binary addition
    - if there is a carry out, add 1 to result
    - check for overflow
      - overflow occurs if result is opposite sign of A and B
  - algorithm for subtraction, A - B

    - A - B = A + (-B)

  - IF OVERFLOW OCCURS:
    - CAN JUST THROW ERROR
    - E.G. -3 + -7

### Overflow

- Signed numbers are of a fixed range
  - all representations have n bits
  - if result of addtion/subtraction goes byond range, an overflow occurs
    - it's a hardware problem
  - Overflow can be easily detected - postive + positive -> negative - negative + negative -> positive
    ` - results in overflow

### 2s-Complement

| Binary | n-bit 2s-Complement |
| ------ | ------------------- |
| X      | X                   |
| -X     | `2**n - X`          |

| Binary     | 8-bit 2s-Complement       |
| ---------- | ------------------------- |
| 0000 1100  | 0000 1100                 |
| -0000 1100 | `2**n - X` 244 -> 1110100 |

**3-bit example**

| Decimal | Binary | 3-bit 2s-complement representation |
| ------- | ------ | ---------------------------------- |
| 0       | 000    | 000                                |
| 1       | 001    | 001                                |
| 2       | 010    | 010                                |
| 3       | 011    | 011                                |
| -1      | -001   | 111                                |
| -2      | -010   | 110                                |
| -3      | -011   | 101                                |
| -4      | -100   | 100                                |

**Re-arranging (inc. magnitude)**

| Decimal | Binary | 3-bit 2s-complement representation |
| ------- | ------ | ---------------------------------- |
| 0       | 000    | 000                                |
| 1       | 001    | 001                                |
| 2       | 010    | 010                                |
| 3       | 011    | 011                                |
| -4      | -100   | 100                                |
| -3      | -011   | 101                                |
| -2      | -010   | 110                                |
| -1      | -001   | 111                                |

- Tricks
  - Flip and plus 1
  - `2 ** n - 1 - 2 + 1`
  - e.g.
    - 4 -> -4
      - 100
      - 011 (flip)
      - 100 (plus 1)
    - 3 -> -3
      - 011
      - 100 (flip)
      - 101 (plus 1)

**8-bit 2s-Complement representation**

Largest value | 127 (0111 1111)
Smallest value | -128 (1000 0000)
Zero | 0 (0000 0000)

**n-bit 2s-complement representation**

Largest value | 0 [1 for x in range(n - 1)] | 2 ** n - 1
Smallest value | 1 [0 for x in range(n - 1)] | - 2 ** n
Zero | [0 for x in range(n)] | 0

### Addition/Subtraction

**Addition**

1. Binary addition
2. Carry out is discarded
3. Check for overflow
   1. Carry in and carry out of the MSB are different
   2. Result is opposite sign of A and B

_Positive number & smaller -ve number_

```t
  01001 (9)
- 11100 (4)
_____________
=> (disc 1) 00101 (5)
// Carry out 1 is discarded
```

_+ve number & larger -ve number_

```t
  10111 (-9)
+ 00100 (4)
____________
=> 11011 (2s)
=>  0100
       1
____________
=> 10101 (-5) (True magnitude is 5)

```

_2 -ve numbers_

```t
  10111 (-9)
+ 11100 (-4)
_____________
  10011
   1100
      1
   1101
__________
  11101 (-13)
```

_Equal & Opposite number_

```t
-9: 10111
9: 01001

10111
01001
_____
00000 (0)
```

**Subtraction**

- The subtraction operation involves the operation of addition

1. Take 2's complment of number you are subtracting including the sign bit and add it to the other number

```t
(+9) - (+4)

9: 01001
4: 00100
-4: 11011 -> 11100

  01001
- 11100
_______
  00101 (5)
```

**Summary**

- Nice video for addition and subtraction that explains it better than the prof https://www.youtube.com/watch?v=Xaj8oV8P860

- Example: -57
- sign bit
- true magnitude
- 1's complement
  - Obtained by changing each 0 in the number a 1 and each 1 in the number to a 0
- 2's complement
  - Flip and add 1
  - Advantage: allows us to subtract by only using the operation of addition

| True Magnitude | 1's complement | 2's complement |
| -------------- | -------------- | -------------- |
| 1 111 001      | 1 000 110      | 1 000 111      |

### Exploration

- How fraction part can be represented in 1s or 2s

### Excess-K Representation

- To represent a number X:

  - add K to X, then represent the result as binary
  - K is basically the bias/offset

- Excess 4

| Decimal | Excess 4 |
| ------- | -------- |
| -4      | 0 => 000 |
| -3      | 1 => 001 |
| -2      | 2 => 010 |
| -1      | 3 => 011 |
| 0       | 4 => 100 |
| 1       | 5 => 101 |
| 2       | 6 => 110 |
| 3       | 7 => 111 |

- Why excess 4?
  - So that have roughly even range of +ve and -ve numbers

### Floating Point numbers

**Decimal binary conversion**

- Continue down the exponential range

`0.101 => 2 ** -1 + 2 ** -3 = 1/2 + 1/8 = 0.625`

**Fixed point number**

- In fixed point representaion, binary point is assumed to be at a fixed location
  - Integer and fraction parts are limited

**Floating point numbers**

- Allows use to represent very large or very small numbers
- Challenge
  - Find a fixed format that represents floating point number
    - Convert to scientific format
      - e.g.
        - `0.000023 => 0.23 * 10 ** -4`

**IEEE 754**

- For single-precision floating point number on a 32-bit platform
- first bit for sign
  - 0 / 1
- 8 bits for exponent
  - actual exponent + 127 (Excess 127)
- 23 bits for fraction

  - normalised to 1.X and X only
    - aka mantissa

- Example

  - `-39.625`
    - `-100111.101`
      - `-1.00111101 * (2 ** 5)`
        - sign bit: 1
        - exponent: 5 + 127 = 132 => 1000 0100
        - fraction bit: 0011 1101 0000....
        - Put them together: 1100 0010 0001 1110 1000 0000 0000 0000
        - Hexadecimal: 0xC21E8000

- Exercise:

  - `201.5`
    - `11001001.1`
      - `1.10010011 * (2 ** 7)`
        - sign bit: 0
        - exponent: 7 + 127 = 134 => 1000 0110
        - fraction bit: 1001 0011
        - Put them tgt: 0100 0011 0100 1001 1000 0000 0000 0000
        - Hexadecimal: 0x43498000

- Representing 0.0

  - everything 0
    - sign bit can be 1 / 0
  - 1000 0000 0000 0000 0000 0000 0000 0000
  - 0000 0000 0000 0000 0000 0000 0000 0000

- ASCII Code
  - Originally 7-bit sequence
  - 0 to 127 (18 chars are represented)
  - American Standard Code for Information Interchange
  - Subsequently extened to 8-but
    - extended range 128 to 255 can have platform dependent encoding
  - How to read:
    - Read row heading, then column heading
    - Read left, then right
  - Example

| 54  | 6F  | 6F  | 20  | 6C  | 61  | 74  | 65  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| T   | o   | o   |     | l   | a   | t   | e   |

- Other Representation
  - Unicode replaced ASCII code
    - Compuing industry standard maintained by Unicode Consortium
    - 120 000 chars in 2015
    - 3 bytes per char (2 ** 24)
    - UTF-8: 8 bit encoding
    - UTF-16, UTF-32

### Misc Notes

- Setting up C Build Process
  - Can be found on Lumnius -> "Miscellaneous"
- Lab
  - Report (print)
  - Need to attend to submit report
- Tutorial
  - Need to connect ideas, apply concept
  - Ok to be confused
- When question asks find complement of number
  - You are supposed to find the negative of the number
  - is confusing phrasing

## Lecture 4

- Function & Pointer
  - Syntac & Semantic
- Function Parameter Passing

  - By Value
  - By Address / Pointer

- python, js, c -> function
- java, c++ -> method

- function allows:
  - better maintenance
  - reusability
  - quick summary
    - i/p -> function -> o/p

### Memory snapshot

- location is given unique address
- locations are arranged consecutively
- content is in binary

| name | content | address |
| ---- | ------- | ------- |
| x    | 123     | 4096    |
| y    | 456     | 4150    |

- when code is compiled, name of variable is stripped away
  - in actual memory, only have memory address
- layout is handled by compiler
  - whr to put variables, order, etc

### Pointer: Declaration

- pointer variable: stores the address of a memory location

```c
int x;
// is int pointer b/c => by going to address, you will see an int value
int *ptr; // pointer variable (indicated by *)

ptr = &x; // &x gives you the address of x
```

| name | content | address |
| ---- | ------- | ------- |
| x    | 123     | 1024    |
| ptr  | 1024    | 1026    |

- usage
  - behaves the same way as normal variable

```c
int x;
int *ptr, *ptr2;

// address of x is put inside ptr
ptr = &x;
// ptr2 points to address of x
ptr2 = ptr;
```

### Pointer: Dereferencing

- follow the address stored in a pointer variable and manipulate the destination

```c
int x;
int *ptr;

// address of x is put inside ptr
ptr = &x;
// is reassigning x
*ptr = 1234;

*ptr = *ptr + 4321; // 4444
```

| name | content     | address |
| ---- | ----------- | ------- |
| x    | 123 => 1234 | 1024    |
| ptr  | 1024        | 1026    |

### Pointer: Common Confusion

- note the different meaning of `*`
  - during declaration
    - means: declare a pointer variable
    - `int *ptr;`
  - during usage
    - means: dereference a pointer variable
    - `*ptr = &x;`
  - all pointer variables store memory address
    - different type of pointer variables refer to the data type of the destination

### Pointers: Helpful "pointers"

- Real world analogy
  - let variable be house
  - if want to duplicate content of house:
    - instead of copying house
    - tell the person the address of your house
      - by knowing the address, one would be able to reach the same house and look at the contents inside it

### Function parameter passing

- Two ways of passing parameter into a function

1. Pass by value
2. Pass by pointer

| symbol | context            | def                                        |
| ------ | ------------------ | ------------------------------------------ |
| &x     |                    | pointer                                    |
| `*x`   | during declaration | declaring a pointer variable               |
| `*x`   | during usage       | dereferencing a pointer variable (content) | 

### Summary

- By Value

  - Cannot change the actual parameter

- By Address
  - Requires caller to pass in address using &
  - Requires dereferencing of params in function
  - Array are passed by address

### Misc Notes

**Getting Input**
```c
int i;
// Pass pointer to populate i
scanf(“%d”, &i);`
```

**Pointers**

```c
void getValue(int *myPointer) {
  *myPointer = 1000;
}

int main() {
  int my_array[4]
}
```

 