'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';

export default function ConditionalNavbar() {
    const pathname = usePathname();

    // Only show navbar on the root route
    if (pathname?.startsWith('/documentation')) {
        return null;
    }

    return <Navbar />;
}
