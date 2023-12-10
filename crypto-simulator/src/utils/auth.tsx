import { createContext, useContext, useState, useEffect } from 'react'

interface AuthContext {
    isAuthenticated: boolean,
    signIn: (googleAuthToken: string) => void
}

const AuthContext = createContext<AuthContext>(null!)

export const useAuth = () => useContext(AuthContext)
export const AuthProvider = ({ children }: any) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const signIn = (googleAuthToken: string) => {
        localStorage.setItem('googleAuthToken', googleAuthToken)
        setIsAuthenticated(true)
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, signIn }}>
            {children}
        </AuthContext.Provider>
    )
}