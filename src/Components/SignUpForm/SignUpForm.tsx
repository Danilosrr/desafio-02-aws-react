import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs";
import image842 from "../../Assets/image842.png";
import IconUser from "../Icons/IconUser";
import IconEMail from "../Icons/IconEmail";
import IconLock from "../Icons/IconLock";
import IconConfirm from "../Icons/IconConfirm";
import image833 from "../../Assets/image 833.png"
import "./SignUpForm.css";

const SignUpForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  
  const [nameError, setNameError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [confirmPasswordError, setConfirmPasswordError] = useState<string>("");

  const navigate = useNavigate();


  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password: string): boolean => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{6,}$/;
    return regex.test(password);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
   

    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");

    let valid = true

    const existingUser = localStorage.getItem(email);
    if (existingUser) {
      setEmailError("Este email já está cadastrado!")
      valid = false;
    }

    if (name.trim() === "") {
      setNameError("O campo de nome é obrigatório")
      valid = false
    }       

    if (!validateEmail(email)) {
        setEmailError  ("Por favor, insira um email válido!");
        valid = false;
    }

    if (!validatePassword(password)) {
        setPasswordError (
        "A senha deve ter no mínimo 6 caracteres, incluindo uma letra maiúscula, um número e um caractere especial"
      );
      valid = false;
    }

    if (password !== confirmPassword) {
        setConfirmPasswordError ("As senhas não coincidem!");
        valid = false;
    }

    if (valid) {
        const hashedPassword = bcrypt.hashSync(password, 10);
        const userData = {name, email, password: hashedPassword};
        localStorage.setItem(email, JSON.stringify(userData));
        alert("Conta criada com sucesso!");
        console.log("Usuário registrado:", userData);
        navigate("/login")
    }
  }

  return (
    <div className="signup-container">
      <div className="image-section">
        <img src={image842} alt="spider" />
      </div>

      <div className="form-section">
        <div className="logo-container">
            <span className="uol-icon">
               <img src={image833} alt="Icon UOL" />
            </span>
            <h1>
                <span className="uol">UOL</span>Comics
                </h1>
        </div>

      <div className="signup-form-container">
        <h1>Crie seu herói</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="input-container">
              <span className="icon">
                <IconUser />
              </span>
              <input
                type="text"
                placeholder="Nome Completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              {nameError && <p className="error-message">{nameError}</p>}
            </div>
            <div className="input-container">
              <span className="icon">
                <IconEMail />
              </span>
              <input
                type="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {emailError && <p className="error-message">{emailError}</p>}
            </div>
            <div className="input-container">
              <span className="icon">
                <IconLock />
              </span>
              <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {passwordError && (
                <p className="error-message">{passwordError}</p>
              )}
            </div>
            <div className="input-container">
              <span className="icon">
                <IconConfirm />
              </span>
              <input
                type="password"
                placeholder="Confirme a senha"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              {confirmPasswordError && <p className="error-message">{confirmPasswordError}</p>}
            </div>
          </div>
          <button type="submit" className="submit-btn">
            Criar conta
          </button>
        </form>
        <p className="login-link">
          Já tem uma conta ? <a href="/login">Clique aqui</a>
        </p>
      </div>
    </div>
</div>
  );
};
export default SignUpForm;
