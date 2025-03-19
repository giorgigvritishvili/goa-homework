import React, { createContext } from "react";


export const AuthContext = createContext();


export const AuthProvider = ({ children, email, password }) => {
    return (
        <AuthContext.Provider value={{ email, password }}>
            {children}
        </AuthContext.Provider>
    );
};


const App = () => {
    return (
        <div>
            <AuthProvider email="user1@example.com" password="pass123">
                <AuthConsumer />
            </AuthProvider>
            <AuthProvider email="user2@example.com" password="secure456">
                <AuthConsumer />
            </AuthProvider>
            <AuthProvider email="user3@example.com" password="mysecret789">
                <AuthConsumer />
            </AuthProvider>
        </div>
    );
};


const AuthConsumer = () => {
    const auth = React.useContext(AuthContext);
    return (
        <div>
            <h3>Email: {auth.email}</h3>
            <p>Password: {auth.password}</p>
            <hr />
        </div>
    );
};

export default App;
