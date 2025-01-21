```javascript
import { useState, useEffect, useMemo } from 'react';
import deepEqual from 'deep-equal'; // Or Lodash's isEqual

function MyComponent(props) {
  const [count, setCount] = useState(0);

  const areObjectsEqual = useMemo(() => deepEqual(props.someObject, prevProps?.someObject), [props.someObject, prevProps?.someObject]);

  useEffect(() => {
    // Correct: Use deep comparison
    if (!areObjectsEqual) {
      // Perform some action
    }
  }, [areObjectsEqual]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```