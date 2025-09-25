import React, { memo } from 'react';
import PropTypes from 'prop-types';

// Loading Spinner Component
const LoadingSpinner = memo(({
  size = 'md',
  color = 'primary',
  text = '',
  className = '',
  showText = true
}) => {
  const sizeClasses = {
    sm: 'spinner-border-sm',
    md: '',
    lg: 'spinner-border-lg'
  };

  const colorClasses = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    success: 'text-success',
    danger: 'text-danger',
    warning: 'text-warning',
    info: 'text-info',
    light: 'text-light',
    dark: 'text-dark'
  };

  return (
    <div className={`loading-spinner d-flex align-items-center justify-content-center ${className}`}>
      <div
        className={`spinner-border ${sizeClasses[size]} ${colorClasses[color]}`}
        role="status"
        aria-hidden={!showText}
      >
        {showText && (
          <span className="visually-hidden">
            {text || 'Loading...'}
          </span>
        )}
      </div>
      {text && showText && (
        <span className="loading-text ms-2">{text}</span>
      )}
    </div>
  );
});

LoadingSpinner.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  color: PropTypes.oneOf([
    'primary', 'secondary', 'success', 'danger',
    'warning', 'info', 'light', 'dark'
  ]),
  text: PropTypes.string,
  className: PropTypes.string,
  showText: PropTypes.bool
};

LoadingSpinner.displayName = 'LoadingSpinner';

// Skeleton Loader Component
const SkeletonLoader = memo(({
  lines = 3,
  className = '',
  animate = true,
  width = null
}) => {
  return (
    <div className={`skeleton-loader ${className}`}>
      {Array.from({ length: lines }, (_, index) => (
        <div
          key={index}
          className={`skeleton-line ${animate ? 'skeleton-animate' : ''}`}
          style={{
            width: width ? `${width[index % width.length]}%` : '100%',
            height: '1rem',
            marginBottom: index < lines - 1 ? '0.5rem' : 0
          }}
        />
      ))}
    </div>
  );
});

SkeletonLoader.propTypes = {
  lines: PropTypes.number,
  className: PropTypes.string,
  animate: PropTypes.bool,
  width: PropTypes.arrayOf(PropTypes.number)
};

SkeletonLoader.displayName = 'SkeletonLoader';

// Card Skeleton Component
const CardSkeleton = memo(({ className = '' }) => {
  return (
    <div className={`card-skeleton ${className}`}>
      <div className="skeleton-image skeleton-animate" />
      <div className="skeleton-content">
        <div className="skeleton-title skeleton-animate" />
        <div className="skeleton-text skeleton-animate" />
        <div className="skeleton-text skeleton-animate" style={{ width: '70%' }} />
      </div>
    </div>
  );
});

CardSkeleton.displayName = 'CardSkeleton';

// Page Loading Component
const PageLoading = memo(({
  message = 'Loading page...',
  showLogo = true
}) => {
  return (
    <div className="page-loading">
      <div className="loading-container">
        {showLogo && (
          <div className="loading-logo">
            <h2>NworahSoft</h2>
          </div>
        )}
        <LoadingSpinner size="lg" text={message} />
      </div>

      <style jsx>{`
        .page-loading {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
        }

        .loading-container {
          text-align: center;
        }

        .loading-logo {
          margin-bottom: 2rem;
        }

        .loading-logo h2 {
          color: #f85d23;
          font-weight: 700;
          font-size: 2rem;
          margin: 0;
        }
      `}</style>
    </div>
  );
});

PageLoading.propTypes = {
  message: PropTypes.string,
  showLogo: PropTypes.bool
};

PageLoading.displayName = 'PageLoading';

// Progress Bar Component
const ProgressBar = memo(({
  progress = 0,
  color = '#f85d23',
  height = 4,
  className = '',
  showPercentage = false
}) => {
  return (
    <div className={`progress-bar-container ${className}`}>
      <div
        className="progress-bar-fill"
        style={{
          width: `${Math.min(100, Math.max(0, progress))}%`,
          backgroundColor: color,
          height: `${height}px`
        }}
      />
      {showPercentage && (
        <div className="progress-percentage">
          {Math.round(progress)}%
        </div>
      )}

      <style jsx>{`
        .progress-bar-container {
          width: 100%;
          background: #e9ecef;
          border-radius: ${height / 2}px;
          overflow: hidden;
          position: relative;
        }

        .progress-bar-fill {
          transition: width 0.3s ease;
          border-radius: ${height / 2}px;
        }

        .progress-percentage {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 0.75rem;
          font-weight: 600;
          color: #6c757d;
        }
      `}</style>
    </div>
  );
});

ProgressBar.propTypes = {
  progress: PropTypes.number,
  color: PropTypes.string,
  height: PropTypes.number,
  className: PropTypes.string,
  showPercentage: PropTypes.bool
};

ProgressBar.displayName = 'ProgressBar';

export {
  LoadingSpinner,
  SkeletonLoader,
  CardSkeleton,
  PageLoading,
  ProgressBar
};
