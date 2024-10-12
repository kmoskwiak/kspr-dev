import React, { ReactNode } from 'react';
import { CustomError } from '../components/CustomError/CustomError';
import { NotFoundError } from './not-found-error';

export class ErrorBoundary extends React.Component<{ code?: number, children: ReactNode }, { hasError: boolean, code: number }> {
    constructor(props) {
        super(props);
        this.state = { hasError: false, code: 0 };
    }

    static getDerivedStateFromError(error) {

        if (error.name === NotFoundError.name) {
            return { hasError: true, code: 404 };
        }

        return { hasError: true };
    }

    componentDidCatch(error, info) {
        // Example "componentStack":
        //   in ComponentThatThrows (created by App)
        //   in ErrorBoundary (created by App)
        //   in div (created by App)
        //   in App
        //logErrorToMyService(error, info.componentStack);
    }

    render() {
        if (this.state.hasError) {
            return <CustomError code={this.state.code ?? 0} />;
        }

        return this.props.children;
    }
}