import { useState } from 'react'
import WorkTable from '../../../tables/WorkTable'
import ProfessionalBodiesTable from '../../../tables/ProfessionalBodiesTable'
import CooprativeTable from '../../../tables/CooprativeTable'
import LabourTable from '../../../tables/LabourTable'
import ProfssionalStepper from '../../../tabs/ProfssionalStepper'

export default function ProfessionalTabs() {
  const [stepper, setstepper] = useState(1)

  return (
    <div>
      <ProfssionalStepper step={setstepper} />

      {stepper === 1 && (
        <div className='space-y-5'>
          <WorkTable />
        </div>
      )}
      {stepper === 2 && (
        <div className='space-y-5'>
          <LabourTable />
        </div>
      )}
      {stepper === 3 && (
        <div className='space-y-5'>
          <ProfessionalBodiesTable />
        </div>
      )}
      {stepper === 4 && (
        <div className='space-y-5'>
          <CooprativeTable />
        </div>
      )}
    </div>
  )
}
