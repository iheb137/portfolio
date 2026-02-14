'use client';

import { AdminProtectedLayout } from '@/components/admin-protected-layout';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AdminProtectedLayout>
      {children}
    </AdminProtectedLayout>
  );
}
