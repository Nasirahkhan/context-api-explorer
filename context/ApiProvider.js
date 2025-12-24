// contexts/ApiProvider.js
import React from 'react';
import { ApiProvider as Provider } from './ApiContext';

export default function ApiProvider({ children }) {
  return <Provider>{children}</Provider>;
}