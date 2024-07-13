import TopSection from './topSection/topSection';
import BottomSection from './bottomSection/bottomSection';
import './App.css';
import { ErrorBoundary } from './ErrorBoundary';
import ButtonWrapper from './bottomSection/buttonWrapper';
import { Counter } from './bottomSection/counter';
import { PageWrapper } from './bottomSection/pageNumber';

export function App() {
  return (
    <div>
      <TopSection />
      <ErrorBoundary>
        <BottomSection data={localStorage.getItem('results')} count={Counter.getCount()} />
      </ErrorBoundary>
      <PageWrapper />
      <ButtonWrapper />
    </div>
  );
}
