import React, { useState, useCallback, memo } from 'react';
import PropTypes from 'prop-types';

// Optimized Image Component with lazy loading and error handling
const OptimizedImage = memo(({
  src,
  alt,
  className = '',
  loading = 'lazy',
  decoding = 'async',
  onLoad,
  onError,
  fallbackSrc,
  showLoader = true,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);

  const handleLoad = useCallback((e) => {
    setIsLoading(false);
    if (onLoad) onLoad(e);
  }, [onLoad]);

  const handleError = useCallback((e) => {
    setIsLoading(false);
    setHasError(true);

    // Try fallback image if provided
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
      setHasError(false);
      setIsLoading(true);
    } else if (onError) {
      onError(e);
    }
  }, [onError, fallbackSrc, currentSrc]);

  // Show error state
  if (hasError && !fallbackSrc) {
    return (
      <div className={`image-error ${className}`} {...props}>
        <div className="error-content">
          <i className="bi bi-image" aria-hidden="true"></i>
          <span>Image failed to load</span>
        </div>

        <style jsx>{`
          .image-error {
            display: flex;
            align-items: center;
            justify-content: center;
            background: #f8f9fa;
            border: 2px dashed #dee2e6;
            border-radius: 8px;
            min-height: 200px;
            color: #6c757d;
          }

          .error-content {
            text-align: center;
          }

          .error-content i {
            font-size: 2rem;
            margin-bottom: 0.5rem;
            display: block;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className={`optimized-image-container ${className}`}>
      {isLoading && showLoader && (
        <div className="image-loader">
          <div className="spinner-border spinner-border-sm text-primary" role="status">
            <span className="visually-hidden">Loading image...</span>
          </div>
        </div>
      )}

      <img
        src={currentSrc}
        alt={alt}
        loading={loading}
        decoding={decoding}
        onLoad={handleLoad}
        onError={handleError}
        className={`optimized-image ${isLoading ? 'loading' : 'loaded'}`}
        {...props}
      />

      <style jsx>{`
        .optimized-image-container {
          position: relative;
          display: inline-block;
          overflow: hidden;
        }

        .image-loader {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 1;
        }

        .optimized-image {
          transition: opacity 0.3s ease;
          max-width: 100%;
          height: auto;
        }

        .optimized-image.loading {
          opacity: 0;
        }

        .optimized-image.loaded {
          opacity: 1;
        }
      `}</style>
    </div>
  );
});

OptimizedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  loading: PropTypes.oneOf(['lazy', 'eager']),
  decoding: PropTypes.oneOf(['async', 'sync', 'auto']),
  onLoad: PropTypes.func,
  onError: PropTypes.func,
  fallbackSrc: PropTypes.string,
  showLoader: PropTypes.bool
};

OptimizedImage.displayName = 'OptimizedImage';

// Background Image Component
const BackgroundImage = memo(({
  src,
  alt,
  className = '',
  children,
  overlay = false,
  overlayOpacity = 0.5,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const handleError = useCallback(() => {
    setHasError(true);
  }, []);

  return (
    <div
      className={`background-image ${className} ${isLoaded ? 'loaded' : 'loading'}`}
      style={{
        backgroundImage: hasError ? 'none' : `url(${src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
      role="img"
      aria-label={alt}
      {...props}
    >
      {overlay && (
        <div
          className="background-overlay"
          style={{ opacity: overlayOpacity }}
        />
      )}

      {children}

      {/* Hidden image for loading detection */}
      <img
        src={src}
        alt=""
        onLoad={handleLoad}
        onError={handleError}
        style={{ display: 'none' }}
        aria-hidden="true"
      />

      <style jsx>{`
        .background-image {
          position: relative;
          transition: opacity 0.3s ease;
        }

        .background-image.loading {
          opacity: 0.7;
        }

        .background-image.loaded {
          opacity: 1;
        }

        .background-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          transition: opacity 0.3s ease;
        }
      `}</style>
    </div>
  );
});

BackgroundImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
  overlay: PropTypes.bool,
  overlayOpacity: PropTypes.number
};

BackgroundImage.displayName = 'BackgroundImage';

// Image Gallery Component
const ImageGallery = memo(({
  images,
  className = '',
  columns = 3,
  gap = '1rem'
}) => {
  return (
    <div
      className={`image-gallery ${className}`}
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap
      }}
    >
      {images.map((image, index) => (
        <OptimizedImage
          key={index}
          src={image.src}
          alt={image.alt}
          className="gallery-image"
        />
      ))}

      <style jsx>{`
        .image-gallery {
          width: 100%;
        }

        .gallery-image {
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .gallery-image:hover {
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          .image-gallery {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 480px) {
          .image-gallery {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
});

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired
    })
  ).isRequired,
  className: PropTypes.string,
  columns: PropTypes.number,
  gap: PropTypes.string
};

ImageGallery.displayName = 'ImageGallery';

export {
  OptimizedImage,
  BackgroundImage,
  ImageGallery
};
