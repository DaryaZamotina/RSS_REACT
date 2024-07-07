import TopSection from './topSection/topSection';
import BottomSection from './bottomSection/bottomSection';
import './App.css';
import { ErrorBoundary } from './ErrorBoundary';
import ButtonWrapper from './bottomSection/buttonWrapper';
import React from 'react';
import { Counter } from './bottomSection/counter';
import PageWrapper from './bottomSection/pageNumber';

export class App extends React.Component {
  render() {
    return (
      <>
        <ErrorBoundary>
          <TopSection />
          <BottomSection data={localStorage.getItem('results')} count={Counter.getCount()} />
          <PageWrapper />
          <ButtonWrapper />
        </ErrorBoundary>
      </>
    );
  }
}
