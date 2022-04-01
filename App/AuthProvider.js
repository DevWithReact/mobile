import React, { createContext, useState, useEffect } from 'react';
import {
  AppState
} from 'react-native';
import Toast from 'react-native-toast-message';
export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [chatBadge, setChatBadge] = useState(false);

  useEffect(() => {
    // unsubscribe auth listener on unmount
    return () => {
    };
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        user,
        userProfile,
        loading,
        chatBadge,
        setBadge: (b) => {
          setChatBadge(b);
        },
        login: async (email, password) => {
        },
        register: async (displayName, email, password) => {
        },
        logout: async () => {
        }
      }}
    >
      {children}      
      <Toast />
    </AuthContext.Provider>
  )
}