import React from 'react';

type State = {
  error: boolean;
};

type Children = {
  children: React.ReactNode;
};

export class ErrorBoundary extends React.Component<Children, State> {
  state: State = {
    error: null,
  };

  static getDerivedStateFromError(error: string) {
    return { error };
  }

  componentDidCatch(error: Error): void {
    console.log('Error in ErrorBoundary: ' + error);
  }

  render() {
    const { error } = this.state;

    if (error) {
      return (
        <div>
          <p>Something does not work correctly...</p>
        </div>
      );
    }
    return this.props.children;
  }
}
