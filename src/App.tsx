import FormRoot from './components/FormRoot'

function App() {

  return (
    <div className=''>
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-transparent bg-clip-text">
          Nimble Form Wizard
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A multi-step form that validates your inputs as you go, saves your progress,
          and keeps a record of all your submissions.
        </p>
      </header>

      <FormRoot />
    </div>
  )
}

export default App
