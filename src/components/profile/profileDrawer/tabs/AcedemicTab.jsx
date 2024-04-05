import { useState } from 'react'
import InfoTab from '../../../tabs/InforTabs'
import EducationTable from '../../../tables/EducationTable'
import CertificationTable from '../../../tables/CertificationTable'

export default function AcedemicTab() {
  const [stepper, setstepper] = useState(1)

  return (
    <div>
      <InfoTab step={setstepper} />

      {stepper === 1 && (
        <div className='space-y-5'>
          <EducationTable />
        </div>
      )}
      {stepper === 2 && (
        <div className='space-y-5'>
          <CertificationTable />
        </div>
      )}
    </div>
  )
}
