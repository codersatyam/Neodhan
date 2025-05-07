import React, { useState } from 'react';
import './EmiCalculator.css';

function calculateEMI(P, R, N) {
  const r = R / (12 * 100);
  const emi = (P * r * Math.pow(1 + r, N)) / (Math.pow(1 + r, N) - 1);
  return emi ? emi.toFixed(2) : 0;
}

export default function EmiCalculator() {
  const [amount, setAmount] = useState(25000);
  const [rate, setRate] = useState(5);
  const [years, setYears] = useState(5);
  const months = years * 12;
  const emi = calculateEMI(amount, rate, months);
  const totalCost = emi * months;

  return (
    <div className="emi-flex-wrap">
      {/* Left: Inputs */}
      <div className="emi-form-col">
        <div className="emi-field-block">
          <label htmlFor="loan-amount">Loan Amount</label>
          <input
            id="loan-amount"
            type="number"
            min="1000"
            max="10000000"
            step="1000"
            value={amount}
            onChange={e => setAmount(Number(e.target.value))}
            className="emi-input"
          />
          <div className="emi-helper">Enter the amount you wish to borrow.</div>
        </div>
        <div className="emi-field-block">
          <label htmlFor="interest-rate">Interest Rate</label>
          <div className="emi-slider-row">
            <input
              id="interest-rate"
              type="range"
              min="0.01"
              max="20"
              step="0.01"
              value={rate}
              onChange={e => setRate(Number(e.target.value))}
              className="emi-slider"
            />
            <span className="emi-slider-value">{rate}%</span>
          </div>
          <div className="emi-slider-labels">
            <span>0.01%</span>
            <span>20%</span>
          </div>
          <div className="emi-helper">Annual interest rate on the loan.</div>
        </div>
        <div className="emi-field-block">
          <label htmlFor="loan-term">Loan Term</label>
          <div className="emi-slider-row">
            <input
              id="loan-term"
              type="range"
              min="1"
              max="7"
              step="1"
              value={years}
              onChange={e => setYears(Number(e.target.value))}
              className="emi-slider"
            />
            <span className="emi-slider-value">{years} years</span>
          </div>
          <div className="emi-slider-labels">
            <span>1 years</span>
            <span>7 years</span>
          </div>
          <div className="emi-helper">Duration of the loan in years.</div>
        </div>
      </div>
      {/* Right: Summary Card */}
      <div className="emi-summary-card">
        <div className="emi-summary-title">Monthly Payment</div>
        <div className="emi-summary-amount">${emi}</div>
        <div className="emi-summary-desc">Your estimated monthly payment.</div>
        <div className="emi-summary-row">
          <span className="emi-summary-label">Total Cost of Loan</span>
          <span className="emi-summary-value">${Number(totalCost).toLocaleString()}</span>
        </div>
        <div className="emi-summary-label emi-summary-desc">Total amount paid including interest.</div>
        <div className="emi-summary-promo">Drive Your Dream Car Today</div>
        <div className="emi-summary-small">Take the next step towards owning your new car. Consult with our experts and get the best loan offers now.</div>
        <button className="emi-summary-btn">Get Loan Offers</button>
      </div>
    </div>
  );
}
