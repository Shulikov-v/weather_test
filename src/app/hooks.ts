import { useState, useCallback } from 'react'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAsync = (asyncFunction: Function) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);

  const execute = useCallback(
    async (...params) => {
      try {
        setLoading(true);
        const response = await asyncFunction(...params);
        setResult(response);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    },
    [asyncFunction]
  );

  return { error, result, loading, execute };
};