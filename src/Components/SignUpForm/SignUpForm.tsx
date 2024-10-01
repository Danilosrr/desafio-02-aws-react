import React, { useState } from 'react';
import './SignUpForm.css'


const SignUpForm: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');


const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

const validatePassword = (password: string): boolean => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{6,}$/;
    return regex.test(password)
}

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
        alert('Por favor, insira um email válido!');
        return;
    }
    
    if (!validatePassword(password)) {
        alert('A senha deve ter no mínimo 6 caracteres, incluindo uma letra maiúscula, um número e um caractere especial');
        return;
    }
    
    if (password !== confirmPassword) {
        alert('As senhas não coincidem!');
        return;
    }
    
    const userData = {name, email, password};
    localStorage.setItem(email, JSON.stringify(userData));
        alert('Conta criada com sucesso!');
        console.log('Usuário registrado:', userData);
}

return ( 
    <div className='singup-container'>
        <div className='image-section'>
            <img src="/desafio-02-aws-react/src/Assets/image 842.png" alt="imagem de fundo" />
        </div>
    <div className="signup-form-container">
        <h1>Crie seu herói</h1>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <input
                type="text"
                placeholder="Nome Completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                />
            </div>
            <div className="form-group">
                <input
                type="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
            </div>
            <div className="form-group">
                <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
            </div>
            <div className="form-group">
                <input
                type="password"
                placeholder="Confirme a senha"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                />
            </div>
            <button type="submit" className="submit-btn">Criar conta</button>
        </form>
        <p className="login-link">Já tem uma conta ? <a href="/login">Clique aqui</a></p>
    </div>
    </div>
    )
}
    export default SignUpForm;