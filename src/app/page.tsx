'use client'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { add, subtract } from '../../counterSlice/reducer'


export default function Home() {
  const selector:any = useSelector((state) => state)
  const dispatch =useDispatch()
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className=''>
        {selector.counterReducer.value}
        <div>
          
        <button onClick={() => {dispatch(add(2))}}>add</button>
        <div className='border incline bg-red-500 py-3 px-10'>
        <button onClick={() => {dispatch(subtract())}}>subtract</button>
      </div></div></div>
    </main>
  )
}
