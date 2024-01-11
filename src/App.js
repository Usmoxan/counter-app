import { useCallback, useState } from "react"
import React from "react"
import ItemList from "./components/item-list"

export default function App() {
  const [counter, setCount] = useState(0)
  const [active, setActive] = useState(true)
  const onIncrement = () => setCount(prevState => prevState + 1)
  const onToggle = () => setActive(prevState => !prevState)
  const counterGenerate = useCallback(() => {
    return new Array(counter).fill('').map((_, idx) => `counter ${idx + 1}`)
  }, [counter])
  const colors = {
    fontWeight: "bold",
    color: active ? 'green' : 'red'
  }
  return (
    <div className='w-50 mx-auto mb-5' >

      <div className='border p-3 mt-5' >

        <p className='text-center' style={colors}> User activeted{counter} </p>
        <div className='d-flex justify-content-center' >

          <button className='btn btn-success' onClick={onIncrement} >
            Increase
          </button>
          <button className='btn btn-warning' onClick={onToggle}>
            Toggle
          </button>
        </div>
        <ItemList counterGenerate={counterGenerate} />
      </div>
    </div >
  );
}



