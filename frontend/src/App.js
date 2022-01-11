import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './pages/login';
import { Register } from './pages/register';
import Home from './pages/home';
import { Profile } from './components/profile';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import { Navigate } from 'react-router-dom';
function App() {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <Router>
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={user ? <Home /> : <Login />}
                    />
                    <Route
                        path="/login"
                        element={user ? <Navigate to="/" /> : <Login />}
                    />
                    <Route
                        path="/register"
                        element={user ? <Navigate to="/" /> : <Register />}
                    />
                    <Route path="/profile/:username" element={<Profile />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
