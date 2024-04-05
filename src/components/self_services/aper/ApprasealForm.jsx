import {
  Input,
  Button,
  Card,
  CardBody,
  RadioGroup,
  Radio,
  Textarea,
  Select,
  SelectItem,
} from '@nextui-org/react'
import { Book } from 'lucide-react'
import { useState } from 'react'
import { DatePicker } from 'rsuite'
import { animals } from './animals'

export default function ApprasealForm() {
  const [jobKnowledge, setJobKnowledge] = useState('')

  const handleJobKnowledgeChange = (value) => {
    setJobKnowledge(value)
  }
  return (
    <div className='grid  gap-2 w-full py-8 '>
      <h2 className='text-[22px] font-normal text-[#212529] '>NEW APPRAISAL</h2>
      <form action='  gap-4'>
        {/* section 1 */}
        <Card className='shadow-md my-4'>
          <h2 className='text-[17px] font-semibold  px-4 text-[#212529]'>
            Period
          </h2>
          <CardBody className='p-4 w-full  grid md:grid-cols-2 gap-3'>
            <div className='p-2 gap-2 grid '>
              <label>From:</label>
              <DatePicker />
            </div>
            <div className=' grid gap-2 p-2'>
              <label>To:</label>
              <DatePicker />
            </div>
          </CardBody>
        </Card>
        {/* section 2 */}
        <Card className='shadow-md my-4'>
          <h2 className='text-[17px] font-semibold  px-4 text-[#212529]'>
            Highest Educational/Professional Qualification(s) with Dates.
          </h2>
          <CardBody className='p-4 w-full   '>
            <div className='grid md:grid-cols-2 gap-3'>
              <div className='p-2   '>
                <Input
                  type='text'
                  label='Qualification'
                  placeholder='Qualification'
                  labelPlacement='outside'
                  startContent={
                    <Book className='text-2xl text-default-400 pointer-events-none flex-shrink-0' />
                  }
                />
              </div>
              <div className='w-full  grid p-2'>
                <label>Date:</label>
                <DatePicker />
              </div>
            </div>
            <div className='grid md:grid-cols-2 gap-3'>
              <div className='p-2   '>
                <Input
                  type='Qualification'
                  label='Qualification'
                  placeholder='Qualification'
                  labelPlacement='outside'
                  startContent={
                    <Book className='text-2xl text-default-400 pointer-events-none flex-shrink-0' />
                  }
                />
              </div>
              <div className='w-full  grid p-2'>
                <label>Date:</label>
                <DatePicker />
              </div>
            </div>
            <div className='grid md:grid-cols-2 gap-3'>
              <div className='p-2   '>
                <Input
                  type='Qualification'
                  label='Qualification'
                  placeholder='Qualification'
                  labelPlacement='outside'
                  startContent={
                    <Book className='text-2xl text-default-400 pointer-events-none flex-shrink-0' />
                  }
                />
              </div>
              <div className='w-full  grid p-2'>
                <label>Date:</label>
                <DatePicker />
              </div>
            </div>
            <div className='grid md:grid-cols-2 gap-3'>
              <div className='p-2   '>
                <Input
                  type='Qualification'
                  label='Qualification'
                  placeholder='Qualification'
                  labelPlacement='outside'
                  startContent={
                    <Book className='text-2xl text-default-400 pointer-events-none flex-shrink-0' />
                  }
                />
              </div>
              <div className='w-full  grid p-2'>
                <label>Date:</label>
                <DatePicker />
              </div>
            </div>
            <div className='grid md:grid-cols-2 gap-3'>
              <div className='p-2   '>
                <Input
                  type='Qualification'
                  label='Qualification'
                  placeholder='Qualification'
                  labelPlacement='outside'
                  startContent={
                    <Book className='text-2xl text-default-400 pointer-events-none flex-shrink-0' />
                  }
                />
              </div>
              <div className='w-full  grid p-2'>
                <label>Date:</label>
                <DatePicker />
              </div>
            </div>
            <div className='grid md:grid-cols-2 gap-3'>
              <div className='p-2   '>
                <Input
                  type='Qualification'
                  label='Qualification'
                  placeholder='Qualification'
                  labelPlacement='outside'
                  startContent={
                    <Book className='text-2xl text-default-400 pointer-events-none flex-shrink-0' />
                  }
                />
              </div>
              <div className='w-full  grid p-2'>
                <label>Date:</label>
                <DatePicker />
              </div>
            </div>
          </CardBody>
        </Card>
        {/* section 3 */}
        <Card className='shadow-md my-4'>
          <h2 className='text-[17px] font-semibold  px-4 text-[#212529]'>
            PART 2
          </h2>
          <h2 className='text-[17px] font-semibold  px-4 text-[#212529]'>
            RATING FACTORS: POOR(1), FAIR(2), GOOD(3), V. Good(4), EXCELLENT(5)
          </h2>
          <CardBody className=' w-full '>
            <div className='grid md:grid-cols-2 items-center gap-4'>
              <div className=''>
                <label className='uppercase flex gap-2 spacey-4'>
                  {' '}
                  <span className=''>a.</span> Job Knowledge/Experience:
                </label>
                <p className='my-4'>
                  Consider the extent to which the employee possesses the
                  experience required for the job. Overall knowledge of job
                  routine, competence and/or technical ability.
                </p>
              </div>
              <RadioGroup orientation='horizontal'>
                <Radio
                  id='poor'
                  name='jobKnowledge'
                  value='Poor'
                  size='sm'
                  checked={jobKnowledge === 'Poor'}
                  onChange={() => handleJobKnowledgeChange('Poor')}
                >
                  Poor
                </Radio>

                <Radio
                  id='fair'
                  size='sm'
                  name='jobKnowledge'
                  value='Fair'
                  checked={jobKnowledge === 'Fair'}
                  onChange={() => handleJobKnowledgeChange('Fair')}
                >
                  Fair
                </Radio>

                <Radio
                  id='good'
                  size='sm'
                  name='jobKnowledge'
                  value='Good'
                  checked={jobKnowledge === 'Good'}
                  onChange={() => handleJobKnowledgeChange('Good')}
                >
                  Good
                </Radio>

                <Radio
                  id='veryGood'
                  size='sm'
                  name='jobKnowledge'
                  value='Very Good'
                  checked={jobKnowledge === 'Very Good'}
                  onChange={() => handleJobKnowledgeChange('Very Good')}
                >
                  Very Good
                </Radio>

                <Radio
                  id='excellent'
                  name='jobKnowledge'
                  value='Excellent'
                  size='sm'
                  checked={jobKnowledge === 'Excellent'}
                  onChange={() => handleJobKnowledgeChange('Excellent')}
                >
                  Excellent
                </Radio>
              </RadioGroup>
            </div>
            <div className='grid md:grid-cols-2 items-center gap-4'>
              <div className=''>
                <label className='uppercase flex gap-2 spacey-4'>
                  {' '}
                  <span className=''>b.</span> JOB PERFORMANCE:
                </label>
                <p className='my-4'>
                  Consider work output and quality of work and ability to Keep
                  to deadline.
                </p>
              </div>
              <RadioGroup orientation='horizontal'>
                <Radio
                  id='poor'
                  name='jobKnowledge'
                  value='Poor'
                  size='sm'
                  checked={jobKnowledge === 'Poor'}
                  onChange={() => handleJobKnowledgeChange('Poor')}
                >
                  Poor
                </Radio>

                <Radio
                  id='fair'
                  size='sm'
                  name='jobKnowledge'
                  value='Fair'
                  checked={jobKnowledge === 'Fair'}
                  onChange={() => handleJobKnowledgeChange('Fair')}
                >
                  Fair
                </Radio>

                <Radio
                  id='good'
                  size='sm'
                  name='jobKnowledge'
                  value='Good'
                  checked={jobKnowledge === 'Good'}
                  onChange={() => handleJobKnowledgeChange('Good')}
                >
                  Good
                </Radio>

                <Radio
                  id='veryGood'
                  size='sm'
                  name='jobKnowledge'
                  value='Very Good'
                  checked={jobKnowledge === 'Very Good'}
                  onChange={() => handleJobKnowledgeChange('Very Good')}
                >
                  Very Good
                </Radio>

                <Radio
                  id='excellent'
                  name='jobKnowledge'
                  value='Excellent'
                  size='sm'
                  checked={jobKnowledge === 'Excellent'}
                  onChange={() => handleJobKnowledgeChange('Excellent')}
                >
                  Excellent
                </Radio>
              </RadioGroup>
            </div>
            <div className='grid md:grid-cols-2 items-center gap-4'>
              <div className=''>
                <label className='uppercase flex gap-2 spacey-4'>
                  {' '}
                  <span className=''>c.</span> ATTITUDE TO WORK:
                </label>
                <p className='my-4'>
                  Consider willingness and promptness in carrying out assigned
                  work.
                </p>
              </div>
              <RadioGroup orientation='horizontal'>
                <Radio
                  id='poor'
                  name='jobKnowledge'
                  value='Poor'
                  size='sm'
                  checked={jobKnowledge === 'Poor'}
                  onChange={() => handleJobKnowledgeChange('Poor')}
                >
                  Poor
                </Radio>

                <Radio
                  id='fair'
                  size='sm'
                  name='jobKnowledge'
                  value='Fair'
                  checked={jobKnowledge === 'Fair'}
                  onChange={() => handleJobKnowledgeChange('Fair')}
                >
                  Fair
                </Radio>

                <Radio
                  id='good'
                  size='sm'
                  name='jobKnowledge'
                  value='Good'
                  checked={jobKnowledge === 'Good'}
                  onChange={() => handleJobKnowledgeChange('Good')}
                >
                  Good
                </Radio>

                <Radio
                  id='veryGood'
                  size='sm'
                  name='jobKnowledge'
                  value='Very Good'
                  checked={jobKnowledge === 'Very Good'}
                  onChange={() => handleJobKnowledgeChange('Very Good')}
                >
                  Very Good
                </Radio>

                <Radio
                  id='excellent'
                  name='jobKnowledge'
                  value='Excellent'
                  size='sm'
                  checked={jobKnowledge === 'Excellent'}
                  onChange={() => handleJobKnowledgeChange('Excellent')}
                >
                  Excellent
                </Radio>
              </RadioGroup>
            </div>
            <div className='grid md:grid-cols-2 items-center gap-4'>
              <div className=''>
                <label className='uppercase flex gap-2 spacey-4'>
                  {' '}
                  <span className=''>d.</span> TEAM WORK:
                </label>
                <p className='my-4'>
                  Consider how well the appraisee relates to his / her
                  colleagues and supervisors and the public.
                </p>
              </div>
              <RadioGroup orientation='horizontal'>
                <Radio
                  id='poor'
                  name='jobKnowledge'
                  value='Poor'
                  size='sm'
                  checked={jobKnowledge === 'Poor'}
                  onChange={() => handleJobKnowledgeChange('Poor')}
                >
                  Poor
                </Radio>

                <Radio
                  id='fair'
                  size='sm'
                  name='jobKnowledge'
                  value='Fair'
                  checked={jobKnowledge === 'Fair'}
                  onChange={() => handleJobKnowledgeChange('Fair')}
                >
                  Fair
                </Radio>

                <Radio
                  id='good'
                  size='sm'
                  name='jobKnowledge'
                  value='Good'
                  checked={jobKnowledge === 'Good'}
                  onChange={() => handleJobKnowledgeChange('Good')}
                >
                  Good
                </Radio>

                <Radio
                  id='veryGood'
                  size='sm'
                  name='jobKnowledge'
                  value='Very Good'
                  checked={jobKnowledge === 'Very Good'}
                  onChange={() => handleJobKnowledgeChange('Very Good')}
                >
                  Very Good
                </Radio>

                <Radio
                  id='excellent'
                  name='jobKnowledge'
                  value='Excellent'
                  size='sm'
                  checked={jobKnowledge === 'Excellent'}
                  onChange={() => handleJobKnowledgeChange('Excellent')}
                >
                  Excellent
                </Radio>
              </RadioGroup>
            </div>
            <div className='grid md:grid-cols-2 items-center gap-4'>
              <div className=''>
                <label className='uppercase flex gap-2 spacey-4'>
                  {' '}
                  <span className=''>e.</span> JOB KNOWLEDGE:
                </label>
                <p className='my-4'>
                  Consider his/her grasp and overall knowledge of the
                  organization/authority as it relates to his/her assignment.
                </p>
              </div>
              <RadioGroup orientation='horizontal'>
                <Radio
                  id='poor'
                  name='jobKnowledge'
                  value='Poor'
                  size='sm'
                  checked={jobKnowledge === 'Poor'}
                  onChange={() => handleJobKnowledgeChange('Poor')}
                >
                  Poor
                </Radio>

                <Radio
                  id='fair'
                  size='sm'
                  name='jobKnowledge'
                  value='Fair'
                  checked={jobKnowledge === 'Fair'}
                  onChange={() => handleJobKnowledgeChange('Fair')}
                >
                  Fair
                </Radio>

                <Radio
                  id='good'
                  size='sm'
                  name='jobKnowledge'
                  value='Good'
                  checked={jobKnowledge === 'Good'}
                  onChange={() => handleJobKnowledgeChange('Good')}
                >
                  Good
                </Radio>

                <Radio
                  id='veryGood'
                  size='sm'
                  name='jobKnowledge'
                  value='Very Good'
                  checked={jobKnowledge === 'Very Good'}
                  onChange={() => handleJobKnowledgeChange('Very Good')}
                >
                  Very Good
                </Radio>

                <Radio
                  id='excellent'
                  name='jobKnowledge'
                  value='Excellent'
                  size='sm'
                  checked={jobKnowledge === 'Excellent'}
                  onChange={() => handleJobKnowledgeChange('Excellent')}
                >
                  Excellent
                </Radio>
              </RadioGroup>
            </div>
            <div className='grid md:grid-cols-2 items-center gap-4'>
              <div className=''>
                <label className='uppercase flex gap-2 spacey-4'>
                  {' '}
                  <span className=''>f.</span> LEVEL OF KNOWLEDGE:
                </label>
                <p className='my-4'>
                  Consider his/her knowledge, his/her fundamentals and skills on
                  the job.
                </p>
              </div>
              <RadioGroup orientation='horizontal'>
                <Radio
                  id='poor'
                  name='jobKnowledge'
                  value='Poor'
                  size='sm'
                  checked={jobKnowledge === 'Poor'}
                  onChange={() => handleJobKnowledgeChange('Poor')}
                >
                  Poor
                </Radio>

                <Radio
                  id='fair'
                  size='sm'
                  name='jobKnowledge'
                  value='Fair'
                  checked={jobKnowledge === 'Fair'}
                  onChange={() => handleJobKnowledgeChange('Fair')}
                >
                  Fair
                </Radio>

                <Radio
                  id='good'
                  size='sm'
                  name='jobKnowledge'
                  value='Good'
                  checked={jobKnowledge === 'Good'}
                  onChange={() => handleJobKnowledgeChange('Good')}
                >
                  Good
                </Radio>

                <Radio
                  id='veryGood'
                  size='sm'
                  name='jobKnowledge'
                  value='Very Good'
                  checked={jobKnowledge === 'Very Good'}
                  onChange={() => handleJobKnowledgeChange('Very Good')}
                >
                  Very Good
                </Radio>

                <Radio
                  id='excellent'
                  name='jobKnowledge'
                  value='Excellent'
                  size='sm'
                  checked={jobKnowledge === 'Excellent'}
                  onChange={() => handleJobKnowledgeChange('Excellent')}
                >
                  Excellent
                </Radio>
              </RadioGroup>
            </div>
            <div className='grid md:grid-cols-2 items-center gap-4'>
              <div className=''>
                <label className='uppercase flex gap-2 spacey-4'>
                  {' '}
                  <span className=''>g.</span> SAFETY CONSCIOUSNESS:
                </label>
                <p className='my-4'>
                  Consider ability to take measures for own and others’ safety;
                  company property, mails and packages and equipment. Ability to
                  follow technical rules and instructions.
                </p>
              </div>
              <RadioGroup orientation='horizontal'>
                <Radio
                  id='poor'
                  name='jobKnowledge'
                  value='Poor'
                  size='sm'
                  checked={jobKnowledge === 'Poor'}
                  onChange={() => handleJobKnowledgeChange('Poor')}
                >
                  Poor
                </Radio>

                <Radio
                  id='fair'
                  size='sm'
                  name='jobKnowledge'
                  value='Fair'
                  checked={jobKnowledge === 'Fair'}
                  onChange={() => handleJobKnowledgeChange('Fair')}
                >
                  Fair
                </Radio>

                <Radio
                  id='good'
                  size='sm'
                  name='jobKnowledge'
                  value='Good'
                  checked={jobKnowledge === 'Good'}
                  onChange={() => handleJobKnowledgeChange('Good')}
                >
                  Good
                </Radio>

                <Radio
                  id='veryGood'
                  size='sm'
                  name='jobKnowledge'
                  value='Very Good'
                  checked={jobKnowledge === 'Very Good'}
                  onChange={() => handleJobKnowledgeChange('Very Good')}
                >
                  Very Good
                </Radio>

                <Radio
                  id='excellent'
                  name='jobKnowledge'
                  value='Excellent'
                  size='sm'
                  checked={jobKnowledge === 'Excellent'}
                  onChange={() => handleJobKnowledgeChange('Excellent')}
                >
                  Excellent
                </Radio>
              </RadioGroup>
            </div>
            <div className='grid md:grid-cols-2 items-center gap-4'>
              <div className=''>
                <label className='uppercase flex gap-2 spacey-4'>
                  {' '}
                  <span className=''>h.</span> COPERATION:
                </label>
                <p className='my-4'>
                  Consider how good his/her ability to exercise reasonable care
                  at all times.
                </p>
              </div>
              <RadioGroup orientation='horizontal'>
                <Radio
                  id='poor'
                  name='jobKnowledge'
                  value='Poor'
                  size='sm'
                  checked={jobKnowledge === 'Poor'}
                  onChange={() => handleJobKnowledgeChange('Poor')}
                >
                  Poor
                </Radio>

                <Radio
                  id='fair'
                  size='sm'
                  name='jobKnowledge'
                  value='Fair'
                  checked={jobKnowledge === 'Fair'}
                  onChange={() => handleJobKnowledgeChange('Fair')}
                >
                  Fair
                </Radio>

                <Radio
                  id='good'
                  size='sm'
                  name='jobKnowledge'
                  value='Good'
                  checked={jobKnowledge === 'Good'}
                  onChange={() => handleJobKnowledgeChange('Good')}
                >
                  Good
                </Radio>

                <Radio
                  id='veryGood'
                  size='sm'
                  name='jobKnowledge'
                  value='Very Good'
                  checked={jobKnowledge === 'Very Good'}
                  onChange={() => handleJobKnowledgeChange('Very Good')}
                >
                  Very Good
                </Radio>

                <Radio
                  id='excellent'
                  name='jobKnowledge'
                  value='Excellent'
                  size='sm'
                  checked={jobKnowledge === 'Excellent'}
                  onChange={() => handleJobKnowledgeChange('Excellent')}
                >
                  Excellent
                </Radio>
              </RadioGroup>
            </div>
            <div className='grid md:grid-cols-2 items-center gap-4'>
              <div className=''>
                <label className='uppercase flex gap-2 spacey-4'>
                  {' '}
                  <span className=''>i.</span> MENTAL ALERTNESS:
                </label>
                <p className='my-4'>
                  Consider ability to learn quickly, develop a retentive memory,
                  solve problems with imagination and vision and to try out new
                  ideas and procedures.
                </p>
              </div>
              <RadioGroup orientation='horizontal'>
                <Radio
                  id='poor'
                  name='jobKnowledge'
                  value='Poor'
                  size='sm'
                  checked={jobKnowledge === 'Poor'}
                  onChange={() => handleJobKnowledgeChange('Poor')}
                >
                  Poor
                </Radio>

                <Radio
                  id='fair'
                  size='sm'
                  name='jobKnowledge'
                  value='Fair'
                  checked={jobKnowledge === 'Fair'}
                  onChange={() => handleJobKnowledgeChange('Fair')}
                >
                  Fair
                </Radio>

                <Radio
                  id='good'
                  size='sm'
                  name='jobKnowledge'
                  value='Good'
                  checked={jobKnowledge === 'Good'}
                  onChange={() => handleJobKnowledgeChange('Good')}
                >
                  Good
                </Radio>

                <Radio
                  id='veryGood'
                  size='sm'
                  name='jobKnowledge'
                  value='Very Good'
                  checked={jobKnowledge === 'Very Good'}
                  onChange={() => handleJobKnowledgeChange('Very Good')}
                >
                  Very Good
                </Radio>

                <Radio
                  id='excellent'
                  name='jobKnowledge'
                  value='Excellent'
                  size='sm'
                  checked={jobKnowledge === 'Excellent'}
                  onChange={() => handleJobKnowledgeChange('Excellent')}
                >
                  Excellent
                </Radio>
              </RadioGroup>
            </div>
            <div className='grid md:grid-cols-2 items-center gap-4'>
              <div className=''>
                <label className='uppercase flex gap-2 spacey-4'>
                  {' '}
                  <span className=''>j.</span> PUNCTUALITY:
                </label>
                <p className='my-4'>
                  Consider the extent to which this employee observes the
                  company hours of work
                </p>
              </div>
              <RadioGroup orientation='horizontal'>
                <Radio
                  id='poor'
                  name='jobKnowledge'
                  value='Poor'
                  size='sm'
                  checked={jobKnowledge === 'Poor'}
                  onChange={() => handleJobKnowledgeChange('Poor')}
                >
                  Poor
                </Radio>

                <Radio
                  id='fair'
                  size='sm'
                  name='jobKnowledge'
                  value='Fair'
                  checked={jobKnowledge === 'Fair'}
                  onChange={() => handleJobKnowledgeChange('Fair')}
                >
                  Fair
                </Radio>

                <Radio
                  id='good'
                  size='sm'
                  name='jobKnowledge'
                  value='Good'
                  checked={jobKnowledge === 'Good'}
                  onChange={() => handleJobKnowledgeChange('Good')}
                >
                  Good
                </Radio>

                <Radio
                  id='veryGood'
                  size='sm'
                  name='jobKnowledge'
                  value='Very Good'
                  checked={jobKnowledge === 'Very Good'}
                  onChange={() => handleJobKnowledgeChange('Very Good')}
                >
                  Very Good
                </Radio>

                <Radio
                  id='excellent'
                  name='jobKnowledge'
                  value='Excellent'
                  size='sm'
                  checked={jobKnowledge === 'Excellent'}
                  onChange={() => handleJobKnowledgeChange('Excellent')}
                >
                  Excellent
                </Radio>
              </RadioGroup>
            </div>
            <div className='grid md:grid-cols-2 items-center gap-4'>
              <div className=''>
                <label className='uppercase flex gap-2 spacey-4'>
                  {' '}
                  <span className=''>k.</span> REGULARITY AT WORK/HONESTY:
                </label>
                <p className='my-4'>
                  Consider number of times employee is absent from work and
                  frequency of sick leave.Also,consider his/her loyalty and
                  forthrightness.
                </p>
              </div>
              <RadioGroup orientation='horizontal'>
                <Radio
                  id='poor'
                  name='jobKnowledge'
                  value='Poor'
                  size='sm'
                  checked={jobKnowledge === 'Poor'}
                  onChange={() => handleJobKnowledgeChange('Poor')}
                >
                  Poor
                </Radio>

                <Radio
                  id='fair'
                  size='sm'
                  name='jobKnowledge'
                  value='Fair'
                  checked={jobKnowledge === 'Fair'}
                  onChange={() => handleJobKnowledgeChange('Fair')}
                >
                  Fair
                </Radio>

                <Radio
                  id='good'
                  size='sm'
                  name='jobKnowledge'
                  value='Good'
                  checked={jobKnowledge === 'Good'}
                  onChange={() => handleJobKnowledgeChange('Good')}
                >
                  Good
                </Radio>

                <Radio
                  id='veryGood'
                  size='sm'
                  name='jobKnowledge'
                  value='Very Good'
                  checked={jobKnowledge === 'Very Good'}
                  onChange={() => handleJobKnowledgeChange('Very Good')}
                >
                  Very Good
                </Radio>

                <Radio
                  id='excellent'
                  name='jobKnowledge'
                  value='Excellent'
                  size='sm'
                  checked={jobKnowledge === 'Excellent'}
                  onChange={() => handleJobKnowledgeChange('Excellent')}
                >
                  Excellent
                </Radio>
              </RadioGroup>
            </div>
            <div className='grid md:grid-cols-2 items-center gap-4'>
              <div className=''>
                <label className='uppercase flex gap-2 spacey-4'>
                  {' '}
                  <span className=''>l.</span> DRESSING AND GROOMING:
                </label>
                <p className='my-4'>Neatness and decency in dressing.</p>
              </div>
              <RadioGroup orientation='horizontal'>
                <Radio
                  id='poor'
                  name='jobKnowledge'
                  value='Poor'
                  size='sm'
                  checked={jobKnowledge === 'Poor'}
                  onChange={() => handleJobKnowledgeChange('Poor')}
                >
                  Poor
                </Radio>

                <Radio
                  id='fair'
                  size='sm'
                  name='jobKnowledge'
                  value='Fair'
                  checked={jobKnowledge === 'Fair'}
                  onChange={() => handleJobKnowledgeChange('Fair')}
                >
                  Fair
                </Radio>

                <Radio
                  id='good'
                  size='sm'
                  name='jobKnowledge'
                  value='Good'
                  checked={jobKnowledge === 'Good'}
                  onChange={() => handleJobKnowledgeChange('Good')}
                >
                  Good
                </Radio>

                <Radio
                  id='veryGood'
                  size='sm'
                  name='jobKnowledge'
                  value='Very Good'
                  checked={jobKnowledge === 'Very Good'}
                  onChange={() => handleJobKnowledgeChange('Very Good')}
                >
                  Very Good
                </Radio>

                <Radio
                  id='excellent'
                  name='jobKnowledge'
                  value='Excellent'
                  size='sm'
                  checked={jobKnowledge === 'Excellent'}
                  onChange={() => handleJobKnowledgeChange('Excellent')}
                >
                  Excellent
                </Radio>
              </RadioGroup>
            </div>
          </CardBody>
        </Card>
        {/* section 4 */}
        <Card className='shadow-md my-4'>
          <h2 className='text-[17px] font-semibold  px-4 text-[#212529]'>
            PART 3
          </h2>
          <CardBody className='p4 w-full  grid md:grid-cols2 gap-3'>
            <div className='p-2 grid md:grid-cols-2 w-full'>
              <ol>
                <li>
                  <span>1.</span> Discuss strengths displayed by appraisee and
                  mention weaknesses identified
                </li>
              </ol>
              <Textarea isDisabled defaultValue='' className='max-wxs' />
            </div>
            <div className='p-2 grid md:grid-cols-2 w-full'>
              <ol>
                <li>
                  <span>2.</span> Did you raise these points or the appraisee
                  raised them?
                </li>
              </ol>
              <Textarea isDisabled defaultValue='' className='max-wxs' />
            </div>
            <div className='p-2 grid md:grid-cols-2 w-full'>
              <ol>
                <li>
                  <span>3.</span> What was the employee’s reaction to your
                  comments on these points?
                </li>
              </ol>
              <Textarea isDisabled defaultValue='' className='max-wxs' />
            </div>
            <div className='p-2 grid md:grid-cols-2 w-full'>
              <ol>
                <li>
                  <span>4.</span> What steps do you think should be taken to
                  help the appraisee overcome the identified weaknesses and
                  build on the identified strengths?
                </li>
              </ol>
              <Textarea isDisabled defaultValue='' className='max-wxs' />
            </div>
          </CardBody>
        </Card>
        {/* section 5 */}
        <Card className='shadow-md my-4'>
          <h2 className='text-[17px] font-semibold  px-4 text-[#212529]'>
            PART 5
          </h2>
          <h2 className='text-[17px] font-semibold  px-4 text-[#212529]'>
            Summary: Overall rating by the Assessor.
          </h2>
          <CardBody className='p4 w-full  grid md:grid-cols2 gap-3'>
            <div className='grid md:grid-cols-2 items-center gap-4'>
              <div className='w-[80%] mx-auto '>
                <p className='my-4'>
                  OVERALL EVALUATION (Tick the appropriate box )
                </p>
              </div>
              <RadioGroup orientation='horizontal'>
                <Radio
                  id='poor'
                  name='jobKnowledge'
                  value='Poor'
                  size='sm'
                  checked={jobKnowledge === 'Poor'}
                  onChange={() => handleJobKnowledgeChange('Poor')}
                >
                  Poor
                </Radio>

                <Radio
                  id='fair'
                  size='sm'
                  name='jobKnowledge'
                  value='Fair'
                  checked={jobKnowledge === 'Fair'}
                  onChange={() => handleJobKnowledgeChange('Fair')}
                >
                  Fair
                </Radio>

                <Radio
                  id='good'
                  size='sm'
                  name='jobKnowledge'
                  value='Good'
                  checked={jobKnowledge === 'Good'}
                  onChange={() => handleJobKnowledgeChange('Good')}
                >
                  Good
                </Radio>

                <Radio
                  id='veryGood'
                  size='sm'
                  name='jobKnowledge'
                  value='Very Good'
                  checked={jobKnowledge === 'Very Good'}
                  onChange={() => handleJobKnowledgeChange('Very Good')}
                >
                  Very Good
                </Radio>

                <Radio
                  id='excellent'
                  name='jobKnowledge'
                  value='Excellent'
                  size='sm'
                  checked={jobKnowledge === 'Excellent'}
                  onChange={() => handleJobKnowledgeChange('Excellent')}
                >
                  Excellent
                </Radio>
              </RadioGroup>
            </div>
            <div className='p-2 grid md:grid-cols-2 w-full'>
              <ol>
                <li>
                  Assessor’s comment on the above should include justification
                  for this rating if you rate the employee Excellent or Poor
                </li>
              </ol>
              <Textarea isDisabled defaultValue='' className='max-wxs' />
            </div>
            <div className='p-2 grid my2 md:grid-cols-2 w-full'>
              <ol>
                <li>Promotability: Specify the next likely promotion</li>
              </ol>
              <Textarea
                isDisabled
                defaultValue=''
                minRows={1}
                className='max-wxs h2'
              />
            </div>
            <div className='p-2 grid md:grid-cols-2 w-full'>
              <ol>
                <li>Appraisee’s comments/Discussions</li>
              </ol>
              <Textarea isDisabled defaultValue='' className='max-wxs' />
            </div>
            <div className='p-2 grid md:grid-cols-2 w-full'>
              <ol>
                <li>Comments by the Reporting Officer</li>
              </ol>
              <Textarea isDisabled defaultValue='' className='max-wxs' />
            </div>
            <div className='p-2 grid md:grid-cols-2 w-full'>
              <ol>
                <li>Comments by Countersigning Officer</li>
              </ol>
              <Textarea isDisabled defaultValue='' className='max-wxs' />
            </div>
          </CardBody>
        </Card>
        {/* section 6 */}
        <Card className='shadow-md my-4'>
          <CardBody className='p-4 w-full   gap-3'>
            <div className='p-2 grid md:grid-cols-2 gap-4 '>
              <Select
                items={animals}
                label='Select Reporting Officer'
                placeholder='Select'
                labelPlacement='outside'
              >
                {(animal) => (
                  <SelectItem key={animal.value}>{animal.label}</SelectItem>
                )}
              </Select>
              <Select
                items={animals}
                label='Select Countersigning Officer'
                labelPlacement='outside'
                placeholder='Select '
              >
                {(animal) => (
                  <SelectItem key={animal.value}>{animal.label}</SelectItem>
                )}
              </Select>
            </div>
          </CardBody>
        </Card>

        <div className='  '>
          <Button
            color='success'
            className='my-4  text-white rounded'
            // onClick={handleAddNote}
          >
            Save
          </Button>
        </div>
      </form>
    </div>
  )
}
