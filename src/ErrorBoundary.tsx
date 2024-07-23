import React from 'react';

type State = {
  hasError: boolean;
  error: boolean;
};

type Children = {
  children: React.ReactNode;
};

export class ErrorBoundary extends React.Component<Children, State> {
  constructor(props: Children) {
    super(props);
    this.state = {
      hasError: false,
      error: undefined,
    };
  }

  static getDerivedStateFromError(error: string) {
    if (!localStorage.getItem('previousSearch') && !localStorage.getItem('results')) {
      return {
        hasError: true,
        error: error,
      };
    }
  }

  componentDidCatch(error: Error): void {
    if (!localStorage.getItem('previousSearch') && !localStorage.getItem('results')) {
      console.log('Error in ErrorBoundary: ' + error);
      console.error(error);
    }
  }

  render() {
    if (
      this.state.hasError ||
      (!localStorage.getItem('previousSearch') && !localStorage.getItem('results'))
    ) {
      return (
        <div>
          <p>Something does not work correctly...</p>
        </div>
      );
    }
    return this.props.children;
  }
}
