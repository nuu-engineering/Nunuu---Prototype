import React from 'react';
import * as C from '../../constants';
import { StepsContext } from '../contexts/steps';

export const Login = () => {
  const [register, setRegister] = React.useState(true);
  const { goToPrev } = React.useContext(StepsContext);

  const loginComp = (
    <>
      <h3 className="h3 mb-4">¿Ya eres cliente?</h3>
      <div className="col-10 col-padding-0 mb-5">
        <div className="w-form">
          <form id="email-form" name="email-form" data-name="Email Form">
            <div className="row mb-4">
              <div className="col-6 pl-0 pr-3 mb-4">
                <label htmlFor="Correo" className="label">Email</label>
                <input
                  type="email" className="input w-input" maxLength="256" name="Correo" data-name="Correo"
                  placeholder="Escribe tu correo" id="Correo" required

                />
              </div>
              <div className="col-6 pr-0 pl-3 mb-4">
                <label htmlFor="Contrase-a" className="label">Contraseña</label>
                <input
                  type="password" className="input w-input" maxLength="256" name="Contrase-a" data-name="Contraseña"
                  placeholder="Escribe tu contraseña" id="Contrase-a" required

                />
              </div>
              <a href="#" className="text-small text-decoration-none text-orange">He olvidado mi contraseña</a>
            </div>
            <button type='button' className="btn-pink full-width w-button">Iniciar Sesión</button>
          </form>
        </div>
        <button onClick={() => setRegister(true)} className="text-decoration-none text-blue no-client">Aun no soy cliente</button>
      </div>
    </>
  );
  const registerComp = (
    <>
      <h3 className="h3 mb-4">Crea una cuenta con nosotros</h3>
      <div className="col-10 col-padding-0 mb-5">
        <div className="w-form">
          <form id="email-form" name="email-form" data-name="Email Form">
            <div className="row mb-4">
              <label className="radio-button-field mr-4 w-radio">
                <input type="radio" data-name="Gender"
                  id="Sr." name="Gender" value="Sr." className="w-form-formradioinput radio-button w-radio-input"
                />
                <span htmlFor="Sr.-2" className="label w-form-label">Sr.</span>
              </label>
              <label className="radio-button-field w-radio">
                <input
                  type="radio" data-name="Gender" id="Sr." name="Gender" value="Sr."
                  className="w-form-formradioinput radio-button w-radio-input"
                />
                <span htmlFor="Sr.-2" className="label w-form-label">Sra.</span>
              </label>
            </div>
            <div className="row">
              <div className="col-6 pl-0 pr-3 mb-4">
                <label htmlFor="Nuevo-Nombre-2" className="label">Nombre*</label>
                <input type="text"
                  className="input w-input" maxLength="256" name="Nuevo-Nombre-2" data-name="Nuevo Nombre 2"
                  placeholder="Escribe tu nombre" id="Nuevo-Nombre-2" required

                />
              </div>
              <div className="col-6 pr-0 pl-3 mb-4">
                <label htmlFor="Nuevo-apellidos-2" className="label">Apellidos*</label>
                <input
                  type="text" className="input w-input" maxLength="256" name="Nuevo-apellidos-2" data-name="Nuevo Apellidos 2"
                  placeholder="Escribe tus apellidos" id="Nuevo-apellidos-2" required

                />
              </div>
            </div>
            <div className="row">
              <div className="col-6 pl-0 pr-3 mb-4">
                <label htmlFor="Nuevo-correo-2" className="label">email*</label>
                <input type="text"
                  className="input w-input" maxLength="256" name="Nuevo-correo-2" data-name="Nuevo Correo 2"
                  placeholder="Escribe tu correo" id="Nuevo-correo-2" required

                />
              </div>
              <div className="col-6 pr-0 pl-3 mb-4">
                <label htmlFor="telefono-2" className="label">TELÉFONO</label>
                <input type="tel"
                  className="input w-input" maxLength="256" name="telefono-2" data-name="Telefono 2"
                  placeholder="Escribe tu No.De Teléfono" id="telefono-2"/>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-6 pl-0 pr-3 mb-4">
                <label htmlFor="nuevo-contrase-a-3" className="label">Contraseña*</label>
                <input
                  type="password" className="input w-input" maxLength="256" name="nuevo-contrase-a-3"
                  data-name="Nuevo Contrase A 3" placeholder="Escribe tu contraseña" id="nuevo-contrase-a-3" required

                />
              </div>
              <div className="col-6 pr-0 pl-3 mb-4">
                <label htmlFor="nuevo-conf-contrase-a-2" className="label">CONFIRMA TU Contraseña</label>
                <input type="password" className="input w-input" maxLength="256"
                  name="nuevo-conf-contrase-a-2" data-name="Nuevo Conf Contrase A 2"
                  placeholder="Escribe de nuevo tu contraseña" id="nuevo-conf-contrase-a-2" required

                />
              </div>
              <label className="w-checkbox checkbox-field">
                <input type="checkbox" id="checkbox-2" name="checkbox-2"
                  data-name="Checkbox 2" className="w-checkbox-input checkbox"/>
                <span className="label text-charcoal w-form-label">SUBSCRIBIRME AL BOLÉTIN</span>
              </label>
            </div>
            <button type='button' className="btn-pink full-width w-button">Crear Cuenta</button>
          </form>
        </div>
        <button onClick={() => setRegister(false)} className="text-decoration-none text-blue already-client">Ya soy cliente</button>
      </div>
    </>
  );

  return (
    <div id="login" className="w-tab-pane w--tab-active" role="tabpanel">
      <button onClick={goToPrev} className="process-back w-inline-block">
        <img
          src="https://assets.website-files.com/600eff8cbf53c99e0ed39440/600f6ebc00ce6a5bf93e699f_icon-left.svg"
          loading="lazy" alt=""
        />
        <p className="return-text-2">Regresar</p>
      </button>
      <h2 className="h2 mb-2">Proporciona tus datos de entrega</h2>
      
      {
        register
          ? registerComp
          : loginComp
      }

      <div className="hr mb-6"></div>
      <div className="col-10 col-padding-0 mb-5">
        <h2 className="h3 mb-4">Datos De Envío</h2>
        <div className="w-form">
          <form id="email-form" name="email-form">
            <div className="row">
              <div className="col-6 pl-0 pr-3 mb-4">
                <label htmlFor="Nombre" className="label">Nombre*</label>
                <input
                  type="text"
                  className="input w-input"
                  maxLength="256"
                  name="Nombre"
                  placeholder="Escribe tu nombre"
                  id="Nombre"
                  required
                />
              </div>
              <div className="col-6 pr-0 pl-3 mb-4">
                <label htmlFor="Apellidos" className="label">Apellidos*</label>
                <input
                  type="text"
                  className="input w-input"
                  maxLength="256"
                  name="Apellidos"
                  placeholder="Escribe tus apellidos"
                  id="Apellidos"
                  required
                />
              </div>
            </div>
            <label htmlFor="Direcci-n" className="label">Dirección*</label>
            <input
              type="text"
              className="input mb-4 w-input"
              maxLength="256"
              name="Direcci-n"
              placeholder="Calle y Número"
              id="Direcci-n"
              required
            />
            <div className="row mb-4">
              <div className="col-6 pl-0 pr-3 mb-4">
                <label htmlFor="CP" className="label">Código Postal*</label>
                <input
                  type="number"
                  className="input w-input"
                  maxLength="256"
                  name="CP"
                  placeholder="Escribe tu código"
                  id="CP"
                  required
                />
              </div>
              <div className="col-6 pr-0 pl-3 mb-4">
                <label htmlFor="city" className="label">Ciudad</label>
                <select
                    name="city"
                    required
                    defaultValue='Second'
                    className="select-field w-select"
                >
                  <option value="First">Aguascalientes</option>
                  <option value="Second">CDMX</option>
                  <option value="Third">Querétaro</option>
                </select>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}