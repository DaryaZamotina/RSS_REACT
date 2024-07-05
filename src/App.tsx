//import { useState } from 'react';
import TopSection from './topSection/topSection';
import BottomSection from './bottomSection/bottomSection';
import './App.css';
import { ErrorBoundary } from './ErrorBoundary';

function App() {
  //const [count, setCount] = useState(0);

  return (
    <>
    <ErrorBoundary fallback={<p>Something went wrong</p>}>
    <TopSection />
    </ErrorBoundary>
    <ErrorBoundary fallback={<p>Something went wrong</p>}>
      <BottomSection />
      </ErrorBoundary>
    </>
  );
}

export default App;
