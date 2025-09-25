import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return {
      hasError: true,
      errorId: Date.now() // Generate unique error ID for tracking
    };
  }

  componentDidCatch(error, errorInfo) {
    // Log error details for debugging
    console.error('ErrorBoundary caught an error:', error, errorInfo);

    this.setState({
      error,
      errorInfo
    });

    // In production, you would send this to an error reporting service
    // Example: Sentry, LogRocket, or similar
    if (process.env.NODE_ENV === 'production') {
      // reportError(error, errorInfo, this.state.errorId);
    }
  }

  handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null
    });
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      const { fallback: Fallback, showDetails } = this.props;

      // If a custom fallback component is provided, use it
      if (Fallback) {
        return <Fallback error={this.state.error} retry={this.handleRetry} />;
      }

      // Default error UI
      return (
        <div className="error-boundary" role="alert" aria-live="assertive">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-8">
                <div className="error-card">
                  <div className="error-icon">
                    <i className="bi bi-exclamation-triangle" aria-hidden="true"></i>
                  </div>

                  <h1 className="error-title">Oops! Something went wrong</h1>

                  <p className="error-message">
                    We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
                  </p>

                  <div className="error-actions">
                    <button
                      className="btn btn-primary me-3"
                      onClick={this.handleRetry}
                      aria-label="Try to reload the page"
                    >
                      <i className="bi bi-arrow-clockwise me-2" aria-hidden="true"></i>
                      Try Again
                    </button>

                    <button
                      className="btn btn-outline-primary"
                      onClick={this.handleGoHome}
                      aria-label="Go back to homepage"
                    >
                      <i className="bi bi-house me-2" aria-hidden="true"></i>
                      Go Home
                    </button>
                  </div>

                  {this.state.errorId && (
                    <div className="error-id">
                      <small className="text-muted">
                        Error ID: {this.state.errorId}
                      </small>
                    </div>
                  )}

                  {showDetails && this.state.error && (
                    <details className="error-details">
                      <summary>Technical Details (for developers)</summary>
                      <pre className="error-stack">
                        {this.state.error.toString()}
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </details>
                  )}
                </div>
              </div>
            </div>
          </div>

          <style jsx>{`
            .error-boundary {
              min-height: 100vh;
              display: flex;
              align-items: center;
              background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
              padding: 2rem 0;
            }

            .error-card {
              background: white;
              border-radius: 15px;
              padding: 3rem 2rem;
              box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
              text-align: center;
              position: relative;
              overflow: hidden;
            }

            .error-card::before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              height: 4px;
              background: linear-gradient(90deg, #f85d23, #ff8c42);
            }

            .error-icon {
              font-size: 4rem;
              color: #f85d23;
              margin-bottom: 1.5rem;
              opacity: 0.8;
            }

            .error-title {
              font-size: 2rem;
              font-weight: 700;
              color: #2c3e50;
              margin-bottom: 1rem;
            }

            .error-message {
              font-size: 1.1rem;
              color: #6c757d;
              line-height: 1.6;
              margin-bottom: 2rem;
            }

            .error-actions {
              margin-bottom: 2rem;
            }

            .btn {
              padding: 0.75rem 1.5rem;
              border-radius: 25px;
              font-weight: 600;
              transition: all 0.3s ease;
              border: none;
              cursor: pointer;
            }

            .btn-primary {
              background: #f85d23;
              color: white;
            }

            .btn-primary:hover {
              background: #e64a19;
              transform: translateY(-2px);
              box-shadow: 0 5px 15px rgba(248, 93, 35, 0.3);
            }

            .btn-outline-primary {
              border: 2px solid #f85d23;
              color: #f85d23;
              background: transparent;
            }

            .btn-outline-primary:hover {
              background: #f85d23;
              color: white;
              transform: translateY(-2px);
              box-shadow: 0 5px 15px rgba(248, 93, 35, 0.3);
            }

            .error-id {
              margin-top: 1rem;
            }

            .error-details {
              margin-top: 2rem;
              text-align: left;
            }

            .error-details summary {
              cursor: pointer;
              font-weight: 600;
              color: #6c757d;
              margin-bottom: 1rem;
            }

            .error-stack {
              background: #f8f9fa;
              border: 1px solid #dee2e6;
              border-radius: 5px;
              padding: 1rem;
              font-size: 0.875rem;
              color: #495057;
              overflow-x: auto;
              white-space: pre-wrap;
              max-height: 300px;
              overflow-y: auto;
            }

            @media (max-width: 768px) {
              .error-card {
                padding: 2rem 1.5rem;
              }

              .error-title {
                font-size: 1.5rem;
              }

              .error-actions {
                flex-direction: column;
                gap: 1rem;
              }

              .btn {
                width: 100%;
              }
            }
          `}</style>
        </div>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
  fallback: PropTypes.elementType,
  showDetails: PropTypes.bool
};

ErrorBoundary.defaultProps = {
  showDetails: process.env.NODE_ENV === 'development'
};

export default ErrorBoundary;
