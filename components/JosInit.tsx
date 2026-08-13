'use client';

import { useEffect } from 'react';
import JOS from 'jos-animation';

export function JosInit() {
  useEffect(() => {
    JOS.init({
      debugMode: false,
      animation: 'fade-up',
      duration: 0.5,
      rootMargin: '10% 0% 15% 0%',
    });
  }, []);

  useEffect(() => {
    JOS.refresh();
  });

  return null;
}
