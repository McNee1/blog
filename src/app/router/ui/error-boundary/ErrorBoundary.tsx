import { Component, ErrorInfo, ReactNode } from 'react';

import { AppButton, FlexCol, Typography } from '@/shared/ui';

interface ErrorBoundaryProps {
  children: ReactNode;
}
interface ErrorBoundaryState {
  error?: string;
  hasError: boolean;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // Example "componentStack":
    //   in ComponentThatThrows (created by App)
    //   in ErrorBoundary (created by App)
    //   in div (created by App)
    //   in App

    this.setState({ error: error.message });
    return info;
    // logErrorToMyService(error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <FlexCol
          space={{ paddingX: 'px8', paddingTop: 'pt6' }}
          alignItems='center'
          gap='gap6'
        >
          <Typography
            content={this.state.error}
            weight='bolder'
            variant='error'
          />
          <AppButton
            onClick={() => window.location.reload()}
            variant='red'
            round='sm'
            size='md'
          >
            Reload
          </AppButton>
        </FlexCol>
      );
    }

    return this.props.children;
  }
}
