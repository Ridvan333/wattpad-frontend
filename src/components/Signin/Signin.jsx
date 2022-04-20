import React, { useState } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import Signup from "../Signup/Signup";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../redux/features/application";

export default function Signin(props) {
  const dispatch = useDispatch();

  const [signup, setSignup] = useState(false);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    setLogin(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleAuth = (e) => {
    e.preventDefault();
    if (!login || !password) {
      return alert("Заполните все поля");
    }
    dispatch(auth(login, password));

  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {!signup ? (
        <>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Авторизация
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h6>Введите данные</h6>
            <div className="form-floating formFloating">
              <input
                value={login}
                onChange={(e) => handleLogin(e)}
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Email</label>
            </div>
            <div className="form-floating">
              <input
                value={password}
                onChange={(e) => handlePassword(e)}
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Пароль</label>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={(e) => handleAuth(e)}>Войти</Button>
          </Modal.Footer>
          <div className="footer-signup">
            У вас нет аккаунта?{" "}
            <button onClick={() => setSignup(true)} className="register-button">
              Зарегистрироваться
            </button>
          </div>
        </>
      ) : (
        <Signup />
      )}
    </Modal>
  );
}