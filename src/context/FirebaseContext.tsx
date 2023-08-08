import { FirebaseApp, getApp, getApps, initializeApp } from 'firebase/app';
import { connectAuthEmulator, getAuth } from 'firebase/auth';
import {
  connectFirestoreEmulator,
  getFirestore,
  initializeFirestore,
} from 'firebase/firestore';
import { connectFunctionsEmulator, getFunctions } from 'firebase/functions';
import * as React from 'react';
import { createContext } from 'react';

export const FirebaseAppContext = createContext<FirebaseApp>(null);

const firebaseConfig = {
  apiKey: 'AIzaSyC1W1cboNnqjEp7URXHj7myUogk-etz-f0',
  authDomain: 'olympiads-xyz.firebaseapp.com',
  databaseURL:
    'https://olympiads-xyz-default-rtdb.europe-west1.firebasedatabase.app/',
  projectId: 'olympiads-xyz',
  storageBucket: 'olympiads-xyz.appspot.com',
  messagingSenderId: '1077817845669',
  appId: '1:1077817845669:web:443e3912b682908df12a4c',
  measurementId: 'G-PK3S0MFEFQ',
};
export const FirebaseProvider = ({ children }) => {
  const [firebaseApp, setFirebaseApp] = React.useState<FirebaseApp>(null);

  React.useEffect(() => {
    if (!firebaseApp && typeof window !== 'undefined') {
      const firebaseApp =
        getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
      setFirebaseApp(firebaseApp);
      if (localStorage.getItem('USACO_GUIDE_LONG_POLLING') === 'true') {
        // console.log('Initializing long polling');
        initializeFirestore(firebaseApp, {
          experimentalForceLongPolling: true,
        });
      }

      const shouldUseEmulator = false;
      if (shouldUseEmulator) {
        connectAuthEmulator(getAuth(firebaseApp), 'http://localhost:9099');
        connectFirestoreEmulator(getFirestore(firebaseApp), 'localhost', 8080);
        connectFunctionsEmulator(getFunctions(firebaseApp), 'localhost', 5001);
      }
    }
  }, []);

  return (
    <FirebaseAppContext.Provider value={firebaseApp}>
      {children}
    </FirebaseAppContext.Provider>
  );
};
