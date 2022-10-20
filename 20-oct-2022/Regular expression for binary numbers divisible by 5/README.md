# Regular expression for binary numbers divisible by 5

## Level

4kyu

## Description

Define a regular expression which tests if a given string representing a binary number is divisible by 5.

Examples:

```javascript
// 5 divisable by 5
divisibleByFive.test("101") === true;

// 135 divisable by 5
divisibleByFive.test("10000111") === true;

// 666 not divisable by 5
divisibleByFive.test("0000001010011010") === false;
```

Note:
This can be solved by creating a Finite State Machine that evaluates if a string representing a number in binary base is divisible by given number.

The detailed explanation for dividing by 3 is [here](https://math.stackexchange.com/questions/140283/why-does-this-fsm-accept-binary-numbers-divisible-by-three)

The FSM diagram for dividing by 5 is [here](http://aswitalski.github.io/img/FSM-binary-divisible-by-five.png)
