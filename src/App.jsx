import { useState } from "react"

import characters from "./data"

function App() {
  const [password1, setPassword1] = useState("")
  const [password2, setPassword2] = useState("")
  const [copied, setCopied] = useState(null)

  // tailwind styles
  const mainStl = `bg-neutral-700 mx-auto mt-20 flex flex-col w-10/12 px-10 py-18
                   rounded-lg shadow-lg shadow-neutral-400/30 text-neutral-300
                   md:w-3/4 lg:w-8/12`
  const title1Stl = `text-4xl font-bold`
  const title2Stl = `text-4xl font-bold text-indigo-400 mb-3`
  const descStl = `text-lg`
  const btnStl = `bg-gradient-to-b from-indigo-500 to-indigo-400 mt-10
                  w-4/12 rounded-lg font-semibold border-none py-3 px-4
                  hover:transform hover:scale-105 active:scale-95
                  min-w-[250px]`
  const psswSecStl = `md:flex justify-center align-center gap-6 mt-20 shadow-all-stone 
                      w-full px-10 py-14 rounded-lg`
  const psswStl = `bg-gradient-to-b from-neutral-600 to-neutral-500 rounded-lg text-center my-4
                   py-1 px-1 shadow-lg shadow-neutral-400/30 flex-1 h-8 text-indigo-400 font-bold
                   hover:cursor-pointer hover-transform hover:scale-105 active:scale-95 w-full`
  //

  //functions

  const handleCopy = async (which, text) => {
     try{
      await navigator.clipboard.writeText(text);
      setCopied(which)
      setTimeout(() => setCopied(null), 1500)
     }catch(err){
      console.error("copy failed", err)
     }
  }

  const generatePssw = () => {
    let pssw = ""
    for(let i = 0; i < 16;  i++){
       pssw += characters[Math.floor(Math.random() * characters.length)]
    }
    return pssw
  }

  const handlePssw = () => {
    setPassword1(generatePssw)
    setPassword2(generatePssw)
  }
  
  return (
    <main className={mainStl}>
      <section>
        <h1 className={title1Stl}>Generate a</h1>
        <h2 className={title2Stl}>random passord</h2>
        <p className={descStl}>Never use an insecure password again.</p>
      </section>
      <button onClick={handlePssw} className={btnStl}>Generate password</button>
      <section className={psswSecStl}>
        <p className={psswStl} onClick={() => handleCopy("password1", password1)}>
          {copied === "password1" ? "✓ Copied!" : password1}
        </p>
        <p className={psswStl} onClick={() => handleCopy("password2", password2)}>
          {copied === "password2" ? "✓ Copied!" : password2}
        </p>
      </section>
    </main>
  )
}

export default App
