import { useState, useEffect, useRef } from 'react';
import * as Location from 'expo-location';

export function useHeading(): number | null {
  const [heading, setHeading] = useState<number | null>(null);
  const subscription = useRef<Location.LocationSubscription | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function start() {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (cancelled || status !== 'granted') return;

      subscription.current = await Location.watchHeadingAsync((h) => {
        if (cancelled) return;
        const value = h.trueHeading > -1 ? h.trueHeading : h.magHeading;
        setHeading(value);
      });
    }

    start().catch(() => {/* heading is optional — silently fail */});

    return () => {
      cancelled = true;
      subscription.current?.remove();
    };
  }, []);

  return heading;
}
