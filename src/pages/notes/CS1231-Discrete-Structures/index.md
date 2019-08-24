---
title: CS1231 Discrete Structures
date: '2019-08-24'
spoiler: 
---

- [Lecture 1](#lecture-1)
- [Lecture 2](#lecture-2)
- [Lecture 3](#lecture-3)
- [Lecture 4](#lecture-4)
  - [Valid and invalid arguments](#valid-and-invalid-arguments)

## Lecture 1

- Speaking Mathematically (Language of Mathematics)
  - Variables & Important Sets
  - Kinds of Mathematical Statements
    - Universal, conditional, existential statements
  - Systems used by mathematicians to communicate mathematical ideas
  - Pronunciation fo math expresssions
    - par.cse.nsysu.edu.tw/link/math-pronunciation.pdf
    - Handbook for spoken Mathematics
  - Variables
    - To give names to what you are seeking & to maintain generality
    - Name that holds a set of vlaues
- Important kinds of Mathematical statement

  - Universal
    - Certain statement is true for all elements in a set
    - for loop
  - Conditional
    - If one thing is true then some other thing is also true
    - if loops
    - if, then
  - Existential
    - Property is true for at least 1 thing in the set
    - .exists()
    - there is...
  - Others
    - Universal conditional statement
      - e.g. for all animals a, if a is dog, then a is mammal
    - Universal existential statement
      - for every elem of set, at least one elem that satisfies something
      - is universal: first part says that a certain property is true for all objects of a given type
      - is existential: second part asserts the existenece of something
    - Existential universal statement
      - is existential: first part assert
      - e.g there is >0 int that is <= every >0 int
    - Combination
      - universal + conditional + existential

- Proofs

  - Mathematical proof
    - inferential arugment for a mathematical statement
  - Theorem
    - Earlier statements proved to be true
  - A proof can be traced back to self evident or assumed statements, known as axioms, along with rules of inference
    - rules of inference
      - modus polems
        - if raining, streets are wet
        - if streets are wet, might not be raining
  - Proof methods
    - direct proof
      - if x is true, then y is true
    - proof by construction
    - proof by exhaustion
    - proof by contradiction
    - proof by contrapostion
  - Proof by mathematical induction

- Mistakes ❌

  - Circular augement
    - a implies b, b is true, therefore a is true

- "Essential quality of a proof is to compel believe."

- Proof is a concise, polished argurment expalining the validity of a statement

  - concise
    - no irrelevant details
  - polished
    - final draft
  - begin with intuitive idea, sketch out idea, find if it works, try again

- Definition

  - a precise and unambiguous description of the meaning of a mathematical term
  - wrong example ❌
    - it is warm outside
      - it's both true and false depending on perspectives

- Axioms

  - Statement that is assumed to be true without proof
    - Example
      - Euclid's 5 postulates
      - Peano axioms
        - for every int
          - there exists another int
          - such that the int is a successor of the previous int
      - Rivost Shamir Adlean algorithm
        - different encryption and decryption key
      - diffie helman
        - exchange p and q
        - secret p' and q'
        - pq' = p'q

- Theorem

  - mathematical statement that is proved using rigorous mathematical reasoning
  - usually a major or important result
  - try proving triangle inequality

- Lemma

  - minor result whose purpose is to help in proving a theorem

- Corollary

  - simple deduction from a theorem

- Conjecture

  - a statement believed to be true, but for which there is no proof (yet)
  - Goldbach's conjecture

- Basic properties of int

  - closure
    - int are closed under addition & multiplication
  - associavity
    - addition and multiplication are associatve
  - distributivity
    - multiplication is dstributive over addition
  - trichotomy
  - x = y or x < y or x > y

- Examples

  - prove that the product of 2 consec odd numbers is always odd
  - assume a < b
  - b = a + 2
  - ab = 4k^2 + 8k + 3
    = 2(2k^2 + 4k + 1) + 1
    = 2m + 1

- Homework
  - Prove that the product of any 2 odd numbers is always odd
  - Prove that the product of 2 consecutive odd numbers is always odd

## Lecture 2

- Exercises from last week:

  - Show that product of any 2 odd numbers is odd
    - Let a and b be odd numbers
      - There are 2 int k1 & k2 st a = 2k1 + 1, b = 2k2 + 1
      - a \* b = (2k1 + 1)(2k2 + 1)
        = 4k1k2 + 2k1 + 2k2 + 1
      - m = 2k1k2 + k1 + k2
      - m is an int by closure
      - definition of odd
      - a \* b = 2m + 1
  - we conclude that a \* b is odd by definition

  - Proof by construction

    - for existential proof
    - just need to find one value with the correct properties
    - direct proof

  - Proof by counter-example
    - Prove theat product of 2 irrational numbers is always irrational
      - sqrt(2) \* sqrt(2) = 2
      - Only 1 counter-example is necessary in this case

- Divisibility

  - n is divisible by d if n equals d \* some int
  - Prove that 6a is not divisible by 5 for an int a btw 1 and 4 inclusive
    - just list out the examples
  - Prove that diff btw 2 consec sqaures btw 30 & 100 is odd
    - just have to do proofs
  - Proof by exhaustion
    - is suitable when number of cases is finite
    - takes very long time

- Proof by deduction

  - Prove that difference of 2 consec squares is always odd
    - (n + 1)^2 - n^2 = n^2 + 2n + 1 - n^2 = 2n + 1
    - 2n + 1 is odd

- Proof that sqrt(2) is irrational

  - definition of rational
    - can be expressed as the fraction of 2 int
  - irrationality is the absence of rationality
  - sqrt(2) is irrational
  - indirect proof: proof by contradiction
    - to prove sqrt(2) is irrational, we try assuming that sqrt(2) is rational

- Prove that there exists 2 irrational numbers p & q such that p^q is rational

  - sqrt(2) is irrational
  - sqrt(2) ^ sqrt(2) is either rational or irrational

- Practice proving on your own and study others' proofs

- You can do proofs by doing it backwards

- Mathematical thinking
  - Reasoning
  - Observing structures
  - Working systematically
  - Visualising
  - Modelling
    - using var to model the real world

## Lecture 3

- Logical form and Logical equivalence
  - Conditional statements
  - Valid and invalid arguments
  - Things that look intuitively obvious are not obvious at all
- Statement
  - true or false
- Compound statements
  - Truth tables
  - Logical connectives
    - not ~
    - and ^
    - or
- Negation
  - if p is a statement variables, the negation of p is ~p
- Order of operations
  - ~ is performed first
  - and, or are coequal
  - use parentheses to ovveride ambiguity
  - conjuction is performed from left to right
- not hot but sunny
  - ~h ^ s
- not hot and not sunny
  - ~(h or s) | ~h ^ ~s
- Logical equivalence
  - if they have identical truth values for each possible substituition of statements for their statement variables
- Double negation
- Showing non-equivalence
  - Truth table - at least one row where their truth values differ
- De Morgan's law
  - ~(p ^ q) same as ~p v ~q
  - ~(p ^ q) same as ~p ^ ~q
  - just flip the the symbol in the middle
- Tautology
  - statement that is always true
  - regardless of truth values of the individual statements substituted
- Contradiction
  - statement that is always false
- Logical Equivalences
  - Commutative law
- Conditional
  - p -> q
  - when hypothesis is true
    - conclusion must be true for p -> q to be true
  - when hypothesis is false
    - p -> q always ture
    - vacuously true
    - e.g. if 0 = 1, then 1 = 2
      - this statement is vacuously true
    - it is a matter of convention apparently
- Order of operations
  - ~ not
  - ^ and
  - v or
  - -> implies
- Implication law
  - ~p v q equivalent to p -> q
- Contrapositive
  - p -> q
  - ~q -> ~p
- Converse
  - Converse of p -> q is q -> p
  - Converse error when you conflate both
- Inverse
  - Inverse of p -> q is ~p -> ~q
- Converse is equivalent to inverse
  - contrapositive
  - double negation
- Biconditional
  - p if, and only if, q
  - p <-> q
  - abbrev: iff
  - true if both p and q same truth values
  - (p -> q) ^ (q -> p)

- Order of operations
  - ~
  - ^
  - v
  - ->
  - <->

- Necessary and sufficient conditions
  - r is sufficent condition for s
    - occurrence of r is sufficient to guarantee the occurence of s
    - r -> s
  - r is necessary condition for s
    - ~r -> ~s
    - s -> r
  - if r is sufficient and necessary condition for s
    - r <-> s

## Lecture 4

### Valid and invalid arguments

- Argument

  - sequence of statements that end in a conclusion
  - prereq
    - if then
      - e.g. if x is man, then x is mortal -> x is mortal
    - is valid if and only if, whenever statements are substituted that make all the premises ture => conclusion is true
    - all statements except for final
      - k.a. premises (or hypothesis / assumptions)
      - final: conclusion
    - `.` : therefore
    - testing
      - identify premises and conc
      - construct truth table
      - look for critical row (row where all premises are true)
    - p -> q v ~r (argument is not valid b/c premises true, conc false)
      - q -> p ^ r
        - .p -> r

- Syllogism
  - argument form consisting of 2 premises and a conclusion
  - modus ponens
    - if p then q
      - p
        - .q
    - valid form of argument
    - modus tolelns
      - valid
      - if p then q
        - ~q
          - . ~p
  - examples
    - a.
      - pigeon hole principle
        - p : pigeons > pigeonholes
        - q : at least 2 pigeons in the same hole
        - p -> q
    - b.
      - p -> q
      - ~q
        - . ~p
- Others

  - Generalisation
    - p
      - . p v q
    - q
      - . p v q
    - e.g.
      - x is junior
        - . x is junior or senior
  - Specialisation
    - allows you to discard extra info
    - p ^ q
      - .p
    - p ^ q
      - .q
    - e.g.
      - x knows numerical analysis & graph algo
        - . x knows graph algo
  - Eliminaition
    - p v q
      - ~q
        - .p
    - p v q
      - ~p
        - .q
    - when 2 possibilites, can rule one out, the other must be true
    - e.g.
      - x - 3 = 0 or x + 2 = 0
        - if u know x >= 0
          - then x != -2
            - . x = 3
  - Transitivity
    - chain of statements then implies the next
    - p -> q
    - q -> r
      - .p -> r
  - Proof by Division into Cases

    - p v q
    - p -> r
    - q -> r
      - .r
    - if either p or q is valid:
      - can conclude r
    - useful for proof by construction
    - e.g.
      - if x != 0
      - real no. state any number is > 0 is 0 or is < 0
        - . `x**2 != 0`

  - Example 1

    - rk -> gk
    - gk -> sb
      - . rk -> sb (by transitivity)
    - rk -> sb (by conlusion of 1)
      - ~sb
        - . rk (by modus tolelens)
    - rl v rk
    - ~ rk
      - > rl (by elimnation)
    - rl -> gc
    - rl
      - > gc (modus ponens)

  - Fallacy
    - error in reasoning that results in an invalid arguemnt
      - 3 common fallacies
        - using ambiguous premises
          - have to begin with set of definitions
        - circular reasoning
          - assume what is to be proved without having derived it from the premises
          - abc -> d
            - ✅ correct a && b && c
              - .d
            - ❌ wrong a && b && c -> .d
              - .d
        - jumping to a conclusion (w/o adequate grounds)
          - e.g.
            - if x do things discreetly
              - . cheater
            - if x is cheater -> x sits in back row
            - if x in back row -> x is cheater
          - converse error
            - ❌ p -> q
              - if q
                - .p
            - q -> p
          - inverse error
            - if i/r inc
              - stock mkt prices goes down
            - if i/r not going up
              - ❌ . stock mkt prices will not go down
              - b/c stock mkt is dependent on multiple conditions
            - ❌ p -> q
              - ~p
                - . ~q
            - ✅ ~ p -> ~q
              - ~p
                - .~q
          - valid argument with false premise and false conclusion
            - valid argument by modus ponens
          - invalid arg with true premises and true conclusion
            - e.g.
              - p: sg is garden city
              - q: sg has lots of treees
              - statement: p -> q
              - ❌ conc: q -> p (invalid by converse error)
          - soundness of argument
            - argument is sound if and only if it is valid and all premises are true
            - i.e. premises true & valid reasoning -> sound

- Contradiction rule

  - (fill in the gaps)

- next week's lecture

  - logic of quantified statements

- hw
  - past year midterm qn
