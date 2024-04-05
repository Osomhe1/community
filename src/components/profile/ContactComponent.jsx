import ContactInformation from './ContactInformation'
import ResedentialAddress from './ResedentialAddress'

export default function ContactComponent() {
  return (
    <div className=''>
      <div className='grid gap-4 md:gap-6'>
        <div className=''>
          <ContactInformation />
        </div>
        <div className=''>
          <ResedentialAddress />
        </div>
      </div>
    </div>
  )
}
