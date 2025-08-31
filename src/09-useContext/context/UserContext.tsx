import { createContext, useEffect, useState, type ReactNode } from "react"
import { users, type User } from "../data/user-mock.data";

interface Props {
    children: ReactNode;
}

type AuthStatus = 'checking' | 'authenticated' | 'not-authenticated';

interface UserContextProps {
    //state
    authStatus: AuthStatus;
    user: User | null;
    //methods
    login: (userId: number) => boolean;
    logout: () => void;
}

// ANCHOR contexto
export const UserContext = createContext({} as UserContextProps)

// ANCHOR proveedor HOC
export const UserContextProvider = ({ children }: Props) => {
    const [authStatus, setAuthStatus] = useState<AuthStatus>('checking');
    const [user, setUser] = useState<User | null>(null);


    const handleLogin = (userId: number) => {
        const user = users.find(user => user.id == userId);

        if(!user) {
            console.log(`user not found ${userId}`);
            setAuthStatus('not-authenticated');
            setUser(null);
            return false;
        }

        setAuthStatus('authenticated');
        setUser(user);
        localStorage.setItem('userId', userId.toString());
        return true
    }
    const handleLogout = () => {
        console.log('logout')
        setAuthStatus('not-authenticated');
        setUser(null);
        localStorage.removeItem('userId');
    }

    useEffect(() => {
        const storedUserId = localStorage.getItem('userId');
        if(storedUserId) handleLogin(+storedUserId);
        else handleLogout();
    }, [])

    return (
        <UserContext value={{
            authStatus: authStatus,
            user: user,
            login: handleLogin,
            logout: handleLogout
    }}>
        {children}
    </UserContext >
    )
}


