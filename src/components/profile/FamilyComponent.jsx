import Separator from '../payroll_components/Separator'
// import FamilyTable from '../tables/FamilyTable'
import FamilyCard from './FamilyCard'
// import NextOfKin from './NextOfKin'

export default function FamilyComponent() {
  return (
    <div className='my-8'>
      <Separator separator_text={'Family'} />
      <div className='space-y-4  overflow-hidden w-full'>
        {/* <div className='md:mt-[4.4rem] h-full'>
          <NextOfKin />
        </div> */}
        {/* <FamilyTable /> */}
        <FamilyCard />
      </div>
    </div>
  )
}
