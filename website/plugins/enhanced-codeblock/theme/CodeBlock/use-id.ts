import { useEffect, useState } from 'react';

const randomId = () => {
  // Use 8 bytes for randomness, convert to base36, and slice to obtain ID
  const arr = new Uint8Array(8);
  window.crypto.getRandomValues(arr);
  return Array.from(arr)
    .map((b) => b.toString(36).padStart(2, '0'))
    .join('')
    .slice(0, 9); // Preserve original slice length
};

function useClientId(): string {
	const [uuid, setUuid] = useState('');
	useEffect(() => setUuid(randomId()), []);

	return uuid;
}

export function useId(staticId?: string): string {
	return typeof staticId === 'string' ? staticId : useClientId();
}
