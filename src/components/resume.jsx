import React from 'react';
import { toCurrency } from '../utils/currency';
import { StepsContext } from './contexts/steps';
import { SummaryContext } from './contexts/summary';
import * as C from '../constants';

export const Resume = () => {
  const { isPlan, oneTimeBuy, products, stages } = React.useContext(SummaryContext);
  const { goToNext, canGoToNext } = React.useContext(StepsContext); 

  const mx = isPlan && !oneTimeBuy
    ? 1 - C.DISCOUNT
    : 1;

  const monthlyTotal = isPlan ? C.PLAN_COST : 0;
  const shippingTotal = isPlan ? C.SHIPPING_PLAN : C.SHIPPING_PRODUCTS;
  const productsTotal = products.reduce(
    (prev, { amount, price = 0 }, index) => prev + ((amount * price) * mx), 0);
  const total = monthlyTotal + shippingTotal + productsTotal;


  return (
    <div className="process-resume v-vertical-start">
      <div className="display-sm-none">
        <h3 className="text-big mb-2">Resumen</h3>
        { 
          isPlan
            ? (
              <>
                <div className="resume-item">
                  <p className="resume-name">Plan Mensual:</p>
                  <p className="resume-price resume-price-size">
                    <strong>${ toCurrency(monthlyTotal) }</strong>MXN
                  </p>
                </div>
                {
                  stages.map(({ id, name, amount }) => (
                    <div className="resume-item" key={id}>
                      <p className="resume-name">{ amount > 1 ? `X${amount} ` : ''}{ name }</p>
                    </div>
                  ))
                }
              </>
            )
            : null
        }
        <div className="resume-products">
          { 
            products.filter(({ isDiaper }) => isDiaper).map(({ id, name, amount, price = 0 }, index) => (
              <div className="resume-item" key={id}>
                <p className="resume-name">{ amount > 1 ? `X${amount} ` : ''}{ name }</p>
                <p className="resume-price resume-price-size">
                  <strong>${ toCurrency((price * amount) * mx) }</strong>MXN
                </p>
              </div>
            ))
          }
          {
            isPlan
              ? null
              : stages.map(({ id, name, amount }) => (
                <div className="resume-item" key={id}>
                  <p className="resume-name resume-name-stage">{ amount > 1 ? `X${amount} ` : ''}{ name }</p>
                </div>
              ))
          }
          { 
            products.filter(({ isDiaper }) => !isDiaper).map(({ id, name, amount, price = 0 }, index) => (
              <div className="resume-item" key={id}>
                <p className="resume-name">{ amount > 1 ? `X${amount} ` : ''}{ name }</p>
                <p className="resume-price resume-price-size">
                  <strong>${ toCurrency((price * amount) * mx) }</strong>MXN
                </p>
              </div>
            ))
          }
        </div>
        <div className="resume-stages">
          
        </div>
        <div className="row mb-7">
          <div className="col-padding-0 col-md-12 col-8">
            <p className="resume-name">Envío:</p>
          </div>
          <div className="col-padding-0 col-md-12 col-4 text-right text-md-left">
            <p className="resume-price-size">
              <strong>${ toCurrency(shippingTotal) }</strong>MXN
            </p>
          </div>
        </div>
        <img
          src="https://assets.website-files.com/600eff8cbf53c99e0ed39440/600f71e7850346a965a92547_caja-nunuu.png"
          loading="lazy" alt="" className="resume-img" />
        <div className="resume-item">
          <p className="resume-name">Total</p>
          <p className="resume-total resume-price-size">
            <strong>${ toCurrency(total) }</strong>MXN
          </p>
        </div>
      </div>
      <button 
        className="btn-blue full-width display-block next-step w-button mt-4 "
        disabled={!canGoToNext()}
        onClick={goToNext}
      >
        <span>Siguiente Paso</span>
        <img src='https://uploads-ssl.webflow.com/600eff8cbf53c99e0ed39440/60143b72d8ab46269e710fb9_Icon-Right.svg' />
      </button>
    </div>
  )
}