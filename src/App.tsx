import TopSection from './topSection/topSection';
import BottomSection from './bottomSection/bottomSection';
import './App.css';
import { ErrorBoundary } from './ErrorBoundary';
import ButtonWrapper from './bottomSection/buttonWrapper';
import React from 'react';
import { PageWrapper } from './bottomSection/pageNumber';
import { Counter } from './bottomSection/counter';

type Info = {
  info: string;
};

export class App extends React.Component<Info> {
  render() {
    return (
      <div id={this.props.info}>
        <TopSection />
        <ErrorBoundary>
          <BottomSection data={localStorage.getItem('results')} count={Counter.getCount()} />
        </ErrorBoundary>
        <PageWrapper />
        <ButtonWrapper />
      </div>
    );
  }
}
