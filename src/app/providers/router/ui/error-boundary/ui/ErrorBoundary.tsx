import { Component, ErrorInfo, ReactNode } from 'react';

import { AppButton, FlexGroup, ThemeButton, Typography } from '@/shared/ui';

interface ErrorBoundaryProps {
  children: ReactNode;
}
interface ErrorBoundaryState {
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
    console.log(error, info.componentStack);
    return info;
    // logErrorToMyService(error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <FlexGroup
          alignItems='center'
          spaceTop='space8'
          direction='col'
          gap='gap6'
        >
          <Typography
            text='Unknown error reload page'
            textWeight='bolder'
            theme='error'
          />
          <AppButton
            onClick={() => window.location.reload()}
            theme={ThemeButton.RED}
            round='sm'
            size='md'
          >
            Reload
          </AppButton>
        </FlexGroup>
      );
    }

    return this.props.children;
  }
}
