'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export function AdminProtectedLayout({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    
    if (!token) {
      router.push('/admin/login');
      return;
    }

    // Vérifier le token
    fetch('/api/auth', {
      headers: { 'Authorization': `Bearer ${token}` },
    })
      .then(res => {
        if (res.ok) {
          setIsAuthenticated(true);
        } else {
          localStorage.removeItem('adminToken');
          router.push('/admin/login');
        }
      })
      .catch(() => {
        router.push('/admin/login');
      })
      .finally(() => setLoading(false));
  }, [router]);

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Chargement...</div>;
  }

  if (!isAuthenticated) {
    return null;
  }

  return <>{children}</>;
}
