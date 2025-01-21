# React 19 useEffect: Incorrect Object Comparison
This repository demonstrates a common error in React 19's `useEffect` hook: incorrect comparison of objects, leading to unexpected behavior such as infinite loops.  The example showcases how directly comparing objects using strict equality (`===`) within the `useEffect` dependency array can cause unintended re-renders.

## Problem
The `useEffect` hook's dependency array is designed to optimize when the effect runs.  If an object is passed as a dependency, React will compare references. Simply comparing object references (`===`) doesn't check the object's content. If the object changes (even if the contents are the same), it'll cause a re-render, leading to infinite loops.

## Solution
The solution involves using a deep comparison library or implementing a custom comparison function to ensure that changes are checked within the object's properties, not just the reference itself.