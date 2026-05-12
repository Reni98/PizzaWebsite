import "./PizzaForm.css"

function PizzaForm() {
  return (
   <div className="survey-section">
  <div className="survey-header">
    <h2>🍕 Segíts nekünk fejlődni!</h2>
    <p>Milyen pizzát látnál szívesen az étlapon? Mondd el a véleményed és alakítsuk együtt a kínálatot!</p>
  </div>
  
  <div className="google-form-wrapper">
   <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeTV1QY2f0bHZcnuVbM4tlVjNsc6GPwAUEmfvuU0X5soNZFNA/viewform?embedded=true" width="640" height="994" frameborder="0" marginheight="0" marginwidth="0">Betöltés…</iframe>
  </div>
</div>
  )
}

export default PizzaForm