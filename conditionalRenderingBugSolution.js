The solution involves using the `useEffect` hook and the `useLocation` hook from `react-router-dom`. The `useEffect` hook will run whenever the location changes.  Here's how you can modify the code:

```javascript
import { useParams, useLocation, useEffect, useState } from 'react-router-dom';

function MyComponent() {
  const location = useLocation();
  const [params, setParams] = useState(useParams());

  useEffect(() => {
    // Update params whenever the location changes
    setParams(useParams());
  }, [location]);

  console.log('params:', params);

  return (
    <div>
      {params.id && <p>ID: {params.id}</p>}
      {/* ... rest of your component ... */}
    </div>
  );
}

//Example of Conditionally Rendering
export default function MyComponentWrapper(){
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    // Simulate a condition changing after a delay
    setTimeout(() => setShowComponent(true), 2000);
  }, []);

  return (
    <div>
      {showComponent && <MyComponent/>}
    </div>
  );
}
```
This ensures that `params` will always reflect the current URL parameters, even if the component is conditionally rendered.