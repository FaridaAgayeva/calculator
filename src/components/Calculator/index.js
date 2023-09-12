import React, { useState } from 'react'
import reset from './assets/reset.css'
import styles from './assets/styles.module.css'

export default function Calculator() {
  const [reqem, setReqem] = useState('')
  const [result, setResult] = useState('')

  function handleInput(event) {
    const clickedValue = event.target.value

    if (clickedValue === '.' && reqem.includes('.')) {
      return
    }

    if (
      (clickedValue === '+' ||
        clickedValue === '-' ||
        clickedValue === '*' ||
        clickedValue === '/') &&
      (reqem.endsWith('+') ||
        reqem.endsWith('-') ||
        reqem.endsWith('*') ||
        reqem.endsWith('/'))
    ) {
      return
    }

    if (clickedValue === 'Ac') {
      setReqem('')
      setResult('')
    } else if (clickedValue === 'x') {
      setReqem(reqem.slice(0, -1))
      setResult('')
    } else if (clickedValue === '=') {
      try {
        const calculatedResult = eval(reqem)
        setResult(calculatedResult)
      } catch (error) {
        setResult('Error')
      }
    } else {
      setReqem((prevReqem) => prevReqem + clickedValue)
      setResult('')
    }
  }

  return (
    <body style={{ marginTop: '20px' }}>
      <div className={styles.ana_ekran}>
        <div className={styles.hesablama_ekrani}>
          <div className={styles.emeller}>
            <div className={styles.text}>
              {reqem}={result}
            </div>
          </div>
        </div>
        <div className={styles.sin_cos}>
          <button className={styles.sincos} onClick={handleInput} value="!">
            !
          </button>
          <button
            className={styles.sincos}
            onClick={handleInput}
            value="square"
          >
            x^2
          </button>
          <button className={styles.sincos} onClick={handleInput} value="kub">
            x^3
          </button>
          <button className={styles.sincos} onClick={handleInput} value="(">
            (
          </button>
          <button className={styles.sincos} onClick={handleInput} value=")">
            )
          </button>
        </div>
        <div className={styles.silme}>
          <button className={styles.silButton} onClick={handleInput} value="Ac">
            Ac
          </button>
          <button className={styles.silButton} onClick={handleInput} value="x">
            x
          </button>
          <button className={styles.isareler} onClick={handleInput} value="/">
            /
          </button>
          <button className={styles.isareler} onClick={handleInput} value="*">
            x
          </button>
        </div>
        <div className={styles.esas_hisse}>
          <div className={styles.reqemler}>
            <div className={styles.r123}>
              <button
                className={styles.buttonReqem}
                onClick={handleInput}
                value="1"
              >
                1
              </button>
              <button
                className={styles.buttonReqem}
                onClick={handleInput}
                value="2"
              >
                2
              </button>
              <button
                className={styles.buttonReqem}
                onClick={handleInput}
                value="3"
              >
                3
              </button>
            </div>
            <div className={styles.r456}>
              <button
                className={styles.buttonReqem}
                style={{ marginTop: '10px' }}
                onClick={handleInput}
                value="4"
              >
                4
              </button>
              <button
                className={styles.buttonReqem}
                style={{ marginTop: '10px' }}
                onClick={handleInput}
                value="5"
              >
                5
              </button>
              <button
                className={styles.buttonReqem}
                style={{ marginTop: '10px' }}
                onClick={handleInput}
                value="6"
              >
                6
              </button>
            </div>
            <div className={styles.r789}>
              <button
                className={styles.buttonReqem}
                style={{ marginTop: '10px' }}
                onClick={handleInput}
                value="7"
              >
                7
              </button>
              <button
                className={styles.buttonReqem}
                style={{ marginTop: '10px' }}
                onClick={handleInput}
                value="8"
              >
                8
              </button>
              <button
                className={styles.buttonReqem}
                style={{ marginTop: '10px' }}
                onClick={handleInput}
                value="9"
              >
                9
              </button>
            </div>
            <div className={styles.sifir_noqte}>
              <button
                className={styles.buttonReqem}
                style={{ marginTop: '10px', width: '125px' }}
                onClick={handleInput}
                value="0"
              >
                0
              </button>
              <button
                className={styles.buttonReqem}
                style={{ marginTop: '10px' }}
                onClick={handleInput}
                value="."
              >
                .
              </button>
            </div>
          </div>
          <div className={styles.toplama_cixma}>
            <button className={styles.isareler} onClick={handleInput} value="-">
              -
            </button>
            <button
              className={styles.isareler}
              style={{ marginTop: '10px', height: '65px' }}
              onClick={handleInput}
              value="+"
            >
              +
            </button>
            <button
              className={styles.beraber}
              style={{ marginTop: '10px', height: '65px' }}
              onClick={handleInput}
              value="="
            >
              =
            </button>
          </div>
        </div>
      </div>
    </body>
  )
}
