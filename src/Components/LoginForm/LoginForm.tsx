import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import image842 from "../../Assets/image842.png";
import IconEMail from "../Icons/IconEmail";
import IconLock from "../Icons/IconLock";
import image833 from "../../Assets/image 833.png"
import "./LoginForm.css";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const storedUser = localStorage.getItem(email);
    if (!storedUser) {
        alert('Usuário não encontrado. Verifique o email ou cadastre-se.');
        return;
    }

    const userData = JSON.parse(storedUser);
    if(userData.password !== password) {
        alert('Senha incorreta. Tente novamente.');
        return;
    }

    alert('Login bem-sucedido!');
    console.log('Usuário logado!', userData)

    navigate("/comics")
  };
  
  return (
    <section className="signup-container">
      <div className="image-section">
        <img src={image842} alt="spider" />
      </div>

      <article className="form-section">
        <header className="logo-container">
            <span className="uol-icon">
               <img src={image833} alt="Icon UOL" />
            </span>
            <h1>
                <span className="uol">UOL</span>Comics
                </h1>
        </header>

      <section className="signup-form-container">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            
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
            </div>
          </div>
          <button type="submit" className="submit-btn">
            Entrar
          </button>
        </form>
        <p className="login-link">
          Ainda não tem uma conta ? <a href="/signupform">Clique aqui</a>
        </p>
      </section>
    </article>
</section>
  );
};
export default LoginForm;
