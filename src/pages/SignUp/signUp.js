import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo1.png';

function SignUp() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthDate, setbirthDate] = useState('');
  const [cpf, setCPF] = useState('');
  const [rg, setRG] = useState('');

  return (
    <div className="container-center">
      <div className="login">
        <div className="login-area">
          <img src={logo} alt="Sistema Logo" />
        </div>

        <form>
          <h1>Cadastrar uma conta</h1>
          <input
            type="text"
            placeholder="Seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            type="text"
            placeholder="email@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="*******"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="text"
            placeholder="data de nascimento 0000-00-00"
            value={birthDate}
            onChange={(e) => setbirthDate(e.target.value)}
          ></input>

          <label for="sexo">Defina seu Sexo</label>

          <select id="sexo">
            <option value=""></option>
            <option value="masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
            <option value="nan">Não Desejo Informar</option>
          </select>

          <input
            type="number"
            placeholder="CPF"
            value={cpf}
            onChange={(e) => setCPF(e.target.value)}
          ></input>

          <input
            type="number"
            placeholder="Registro Geral"
            value={rg}
            onChange={(e) => setRG(e.target.value)}
          ></input>

          <button type="submit">Cadastrar</button>
        </form>

        <Link to="/">Já tem uma conta? Entre</Link>

        <p>
          <strong>AMO SOLUÇÕES DIGITAIS</strong>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
