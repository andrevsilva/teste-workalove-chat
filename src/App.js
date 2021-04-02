import React from 'react';
import { Formik , Field , Form, ErrorMessage } from 'formik';
import './App.css';
import schema from './schema.js';

function App() {

  function onSubmit(values , actions) {
    console.log('SUBMIT' , values);
  }

  function proxEtapa(e) {
      e.preventDefault();
      console.log('O link foi clicado.');
      ('.balaoChatSystem').css('display' , 'none');
    }

  return (
    <div className="App">
      <div className="corpoChat">
        <div className="balaoChatSystem">
          <span>Olá, eu sou Chatnilson, tudo bem? Para começarmos, preciso saber seu nome</span>
        </div>
        <div className="balaoChatUser">
          <Formik 
            validationSchema={schema}
            validateOnMount
            proxEtapa={proxEtapa}
            onSubmit={onSubmit}
            initialValues={{
              nome: ''
            }}
            render={({ isValid }) => (
            <Form>
              <div>
                <Field name="nome" type="text" placeholder="Digite seu nome" />
                <ErrorMessage name="nome"/>
              </div>
              <button id="enviarNome" type="submit" onClick={proxEtapa}>Salvar</button>
            </Form>

            )}
          />
        </div>

        <div className="balaoChatSystem">
          <span>Que satisfação. Agora que sei seu nome, qual cidade e estado que você mora?</span>
        </div>
        <div className="balaoChatUser">
        <Formik 
            validationSchema={schema}
            validateOnMount
            onSubmit={onSubmit}
            initialValues={{
              cidade: ''
            }}
            render={({ isValid}) => (
            <Form>
              <div>
                <Field name="cidade" type="text" placeholder="Digite sua cidade"/>
                <ErrorMessage name="cidade" />
              </div>
              <button type="submit" disabled={!isValid}>Salvar</button>
            </Form>

            )}
          />
        </div>

        <div className="balaoChatSystem">
          <span>Legal, agora que sabemos sua cidade e estado. Quando foi que você nasceu?</span>
        </div>
        <div className="balaoChatUser">
        <Formik 
            validationSchema={schema}
            validateOnMount
            onSubmit={onSubmit}
            initialValues={{
              nascimento: ''
            }}
            render={({ isValid}) => (
            <Form>
              <div>
                <Field name="nascimento" type="text" placeholder="Digite sua data de nascimento"/>
                <ErrorMessage className="erro" name="nascimento"/>
              </div>
              <button type="submit" disabled={!isValid}>Salvar</button>
            </Form>

            )}
          />
        </div>
        

        <div className="balaoChatSystem">
          <span>Agora me fala teu e-mail, por gentileza.</span>
        </div>
        <div className="balaoChatUser">
        <Formik 
            validationSchema={schema}
            validateOnMount
            onSubmit={onSubmit}
            initialValues={{
              email: ''
            }}
            render={({ isValid}) => (
            <Form>
              <div>
                <Field name="email" type="email" placeholder="Digite seu e-mail"/>
                <ErrorMessage name="email"/>
              </div>
              <button type="submit" disabled={!isValid}>Salvar</button>
            </Form>

            )}
          />
          </div>
        
      </div>
    </div>
  );
}

export default App;
