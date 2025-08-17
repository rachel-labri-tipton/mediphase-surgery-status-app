import React from 'react';
import ProtectedRoute from './protected-route';
import type { Role } from '@/constant/nav';

export const routeWrapper = (
  element: React.ReactNode,
  allowedRoles?: Role[]
) => <ProtectedRoute allowedRoles={allowedRoles}>{element}</ProtectedRoute>;
