import Medical from './Medical'
import Pension from './Pension'

export default function PensionComponent() {
  return (
    <div>
      <div className=''>
        <div className='grid gap-4 md:gap-6'>
          <div className=''>
            <Pension />
          </div>
          <div className=''>
            <Medical />
          </div>
          <div className=''>
            <Pension />
          </div>
        </div>
      </div>
    </div>
  )
}
