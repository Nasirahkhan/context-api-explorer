// contexts/AuthProvider.js
import React from 'react';
import { AuthProvider as Provider } from './AuthContext';

export default function AuthProvider({ children }) {
  return <Provider>{children}</Provider>;
}