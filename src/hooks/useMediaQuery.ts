import { useSyncExternalStore } from 'react';

export function useMediaQuery(query: string): boolean {
	return useSyncExternalStore(
		(onStoreChange) => {
			if (typeof window === 'undefined') {
				return () => {};
			}

			const mediaQuery = window.matchMedia(query);

			// Современный API
			if (mediaQuery.addEventListener) {
				mediaQuery.addEventListener('change', onStoreChange);
				return () =>
					mediaQuery.removeEventListener('change', onStoreChange);
			} else {
				// Fallback для старых браузеров
				mediaQuery.addListener(onStoreChange);
				return () => mediaQuery.removeListener(onStoreChange);
			}
		},
		() => {
			if (typeof window === 'undefined') {
				return false;
			}
			return window.matchMedia(query).matches;
		},
		() => false, // SSR fallback
	);
}
