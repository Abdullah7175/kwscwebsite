"use client";
import { useEffect, useState } from 'react';

export const usePerformanceMonitor = () => {
  const [performanceMetrics, setPerformanceMetrics] = useState({
    loadTime: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    cumulativeLayoutShift: 0,
    firstInputDelay: 0,
  });

  useEffect(() => {
    // Check if PerformanceObserver is supported
    if (typeof window === 'undefined' || !window.PerformanceObserver) {
      console.warn('PerformanceObserver not supported');
      return;
    }

    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        switch (entry.entryType) {
          case 'navigation':
            if (entry.loadEventEnd && entry.loadEventStart) {
              setPerformanceMetrics(prev => ({
                ...prev,
                loadTime: entry.loadEventEnd - entry.loadEventStart,
              }));
            }
            break;
          case 'paint':
            if (entry.name === 'first-contentful-paint') {
              setPerformanceMetrics(prev => ({
                ...prev,
                firstContentfulPaint: entry.startTime,
              }));
            }
            break;
          case 'largest-contentful-paint':
            setPerformanceMetrics(prev => ({
              ...prev,
              largestContentfulPaint: entry.startTime,
            }));
            break;
          case 'layout-shift':
            if (!entry.hadRecentInput) {
              setPerformanceMetrics(prev => ({
                ...prev,
                cumulativeLayoutShift: prev.cumulativeLayoutShift + entry.value,
              }));
            }
            break;
          case 'first-input':
            if (entry.processingStart && entry.startTime) {
              setPerformanceMetrics(prev => ({
                ...prev,
                firstInputDelay: entry.processingStart - entry.startTime,
              }));
            }
            break;
        }
      }
    });

    try {
      // Observe different performance entry types with error handling
      observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint', 'layout-shift', 'first-input'] });
    } catch (error) {
      console.warn('PerformanceObserver setup failed:', error);
    }

    // Fallback: Get basic performance metrics
    const getBasicMetrics = () => {
      if (window.performance && window.performance.timing) {
        const timing = window.performance.timing;
        const loadTime = timing.loadEventEnd - timing.navigationStart;
        
        setPerformanceMetrics(prev => ({
          ...prev,
          loadTime: loadTime || prev.loadTime,
        }));
      }
    };

    // Get basic metrics after a delay
    setTimeout(getBasicMetrics, 1000);

    return () => {
      try {
        observer.disconnect();
      } catch (error) {
        console.warn('PerformanceObserver disconnect failed:', error);
      }
    };
  }, []);

  // Log performance metrics when they change
  useEffect(() => {
    if (performanceMetrics.loadTime > 0 || performanceMetrics.firstContentfulPaint > 0) {
      console.log('🚀 Performance Metrics:', {
        loadTime: `${performanceMetrics.loadTime.toFixed(2)}ms`,
        firstContentfulPaint: `${performanceMetrics.firstContentfulPaint.toFixed(2)}ms`,
        largestContentfulPaint: `${performanceMetrics.largestContentfulPaint.toFixed(2)}ms`,
        cumulativeLayoutShift: performanceMetrics.cumulativeLayoutShift.toFixed(4),
        firstInputDelay: `${performanceMetrics.firstInputDelay.toFixed(2)}ms`,
      });
    }
  }, [performanceMetrics]);

  return performanceMetrics;
};

export const useImagePreloader = (imageUrls) => {
  const [loadedImages, setLoadedImages] = useState(new Set());
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    if (!imageUrls || imageUrls.length === 0) return;

    let loadedCount = 0;
    const totalImages = imageUrls.length;

    const preloadImage = (url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          loadedCount++;
          setLoadedImages(prev => new Set([...prev, url]));
          setLoadingProgress((loadedCount / totalImages) * 100);
          resolve(url);
        };
        img.onerror = reject;
        img.src = url;
      });
    };

    // Preload images with concurrency limit
    const preloadImages = async () => {
      const concurrencyLimit = 3;
      const chunks = [];
      
      for (let i = 0; i < imageUrls.length; i += concurrencyLimit) {
        chunks.push(imageUrls.slice(i, i + concurrencyLimit));
      }

      for (const chunk of chunks) {
        await Promise.allSettled(chunk.map(preloadImage));
      }
    };

    preloadImages();
  }, [imageUrls]);

  return { loadedImages, loadingProgress };
};
