//  defines a React component with the name App. 
// Technically the React component is defined as a JavaScript function. The following is a function (which does not receive any parameters)
// The function is then assigned to a constant variable App:
const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  console.log(now, a+b)

  return (
    // Any JavaScript code within the curly braces is evaluated and the result of this evaluation is embedded into the defined place in the HTML produced by the component.
    <div>
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
    </div>
  )
}

// You can have multiple named exports per module but only one default export.
export default App