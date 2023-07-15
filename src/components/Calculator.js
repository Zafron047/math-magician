import React from 'react';
import UI from './UI';
import '../styles/calcSection.css';

export default function Calculator() {
  return (
    <section className="calcSection">
      <h2>Let&apos;s do some Math!</h2>
      <div className="calculator">
        <UI />
      </div>
    </section>
  );
}
