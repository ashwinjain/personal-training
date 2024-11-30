// Import the required functions from the Firebase SDK
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtm9xwQZ-7CopFxXcqzc-oN8AqYIQkv6A",
  authDomain: "personal-training-84c26.firebaseapp.com",
  projectId: "personal-training-84c26",
  storageBucket: "personal-training-84c26.appspot.com", // fixed storageBucket domain
  messagingSenderId: "6893218002",
  appId: "1:6893218002:web:39524c8cb7a4db62aaa50b",
  measurementId: "G-P2VQEW1K8K",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
