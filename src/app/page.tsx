import Image from 'next/image'
import Header from '@/components/header'
import Balance from '@/components/balance'
import TransitionSummary from '@/components/transitionSummary'
import TransitionHistory from '@/components/transitionhistory'
import AddTransition from '@/components/Addtransition'
import Context from './context/context'
export default function Home() {
  return (
      <Context>
          <Header />
        <div className='container'>
          <Balance />
          <TransitionSummary />
          <TransitionHistory />
          <AddTransition />
        </div>
      </Context>
  )
}
