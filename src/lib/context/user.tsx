import { ID } from 'appwrite';
import { createContext, useContext, useEffect, useState } from 'react';
import { account } from '../appwrite';

// Define the type for the user object.  Use the type from Appwrite.
interface User {
    $id: string;
    name: string;
    email: string;
    registration: string;
    status: boolean;
    passwordUpdate?: string; // Optional, as it might not always be present
    [key: string]: any; // Allow other properties (if needed, be more specific if possible)
}

// Define the type for the context value.  This is crucial for strong typing.
interface UserContextType {
    currentUser: User | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
    register: (email: string, password: string, name: string) => Promise<void>;
    getLoggedInUser: () => Promise<User | null>;
}

// Create the context with the defined type.  Use null as the initial value.
const UserContext = createContext<UserContextType | null>(null);

// Custom hook to use the user context.  This provides type safety.
export function useUser() {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
}

// UserProvider component to manage user authentication.
export function UserProvider(props: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);

    // Login function with proper typing.
    async function login(email: string, password: string): Promise<void> {
        try {
            await account.createEmailPasswordSession(email, password);
            let loggedInUser = await account.get();
            setUser(loggedInUser);
        } catch (error) {
            console.error("Login error:", error);
            throw error; // Re-throw to be caught by the caller
        }
    }

    // Logout function.
    async function logout(): Promise<void> {
        try {
            await account.deleteSession('current');
            setUser(null);
        } catch (error) {
            console.error("Logout error", error);
            throw error;
        }
    }

    // Register function.
    async function register(email: string, password: string, name: string): Promise<void> {
        try {
            await account.create(ID.unique(), email, password, name);
            await login(email, password); // Auto-login after registration
        } catch (error) {
            console.error("Register error:", error);
            throw error;
        }
    }

    // Initialization function to check for an existing session.
    async function init(): Promise<void> {
        try {
            const loggedIn: User = await account.get();
            setUser(loggedIn);
        } catch (err: any) {
            // Handle errors, such as no session existing.  Important!
            if (err.code === 401) { // Example: 401 is often "Unauthorized"
                setUser(null); // No session, set user to null
            } else {
                console.error("Error initializing user:", err);
                setUser(null); // Or handle the error as appropriate for your app
            }
        }
    }

    async function getLoggedInUser(): Promise<User | null> {
        try {
            let loggedInUser: User = await account.get();
            return loggedInUser;
        } catch (e) {
            return null;
        }
    }

    // useEffect hook to call init() on component mount.
    useEffect(() => {
        init();
    }, []);

    // Provide the context value.  The '!' assertion is safe because we initialize it.
    const contextValue: UserContextType = {
        currentUser: user,
        login,
        logout,
        register,
        getLoggedInUser
    };

    return (
        <UserContext.Provider value={contextValue}>
            {props.children}
        </UserContext.Provider>
    );
}
