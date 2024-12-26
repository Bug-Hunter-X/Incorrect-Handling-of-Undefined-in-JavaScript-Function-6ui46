# Incorrect Handling of Undefined in JavaScript Function

This repository demonstrates a common error in JavaScript where undefined values are not handled correctly in a function that performs arithmetic operations.  The original code returns `null` when encountering `undefined`, whereas the mathematically correct behavior would be to return `NaN` (Not a Number).  The solution demonstrates how to correctly handle these cases.

## Bug

The function `foo` attempts to add two numbers. However, it only checks for `null` values, omitting `undefined`. When one of the arguments is `undefined`, it incorrectly returns `null`. This behavior can lead to unexpected results and silent errors in applications.

## Solution

The improved function explicitly checks for both `null` and `undefined` using the loose equality operator (`==`).  If either is found, it returns `NaN`, conforming to JavaScript's behavior for undefined values in mathematical operations.