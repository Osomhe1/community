import { Card, Image } from '@nextui-org/react'
import logo from '../../../public/assets/images/community-logo.png'
import SalaryTable from '../tables/SalaryTable'

/* eslint-disable react/no-unescaped-entities */
export default function Salary() {
  const employees = [
    {
      id: 1,
      paid: '$96,000',
      deduct: '$4,000',
      salary: '$100,000',
      date: '2000/2/1',
    },
    {
      id: 2,
      paid: '$70,000',
      deduct: '$20,000',
      salary: '$90,000',
      date: '2000/3/1',
    },
    {
      id: 3,
      paid: '$85,000',
      deduct: '$5,000',
      salary: '$90,000',
      date: ' 2000/4/1',
    },
  ]

  return (
    <>
      <Card className=' fontOswald shadow-md  overflow-hidden'>
        <div className='p-4'>
          <h4 className='text-lg text-center font-semibold mb-4'>
            Payslip for the month of Feb 2019
          </h4>
          <div className='flex flex-wrap -mx-4 mb-6'>
            <div className='w-full sm:w-1/2 px-4 mb-4'>
              <Image src={logo} className='h-12' alt='Logo' />
              <ul className='list-none mt-2'>
                <li>Dreamguy's Technologies</li>
                <li>3864 Quiet Valley Lane,</li>
                <li>Sherman Oaks, CA, 91403</li>
              </ul>
            </div>
            <div className='w-full sm:w-1/2 px-4 mb-4'>
              <div className='text-right'>
                <h3 className='text-lg font-semibold'>Payslip #49029</h3>
                <ul className='list-none'>
                  <li>
                    Salary Month: <span>March, 2019</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='mb-6'>
            <h5 className='text-lg font-semibold'>
              <strong>John Doe</strong>
            </h5>
            <p className='mt-0'>Web Designer</p>
            <p className='mt-0'>Employee ID: FT-0009</p>
            <p className='mt-0'>Joining Date: 1 Jan 2013</p>
          </div>
          <div className='flex flex-wrap -mx-4 mb-6'>
            <div className='w-full sm:w-1/2 px-4'>
              <div>
                <h4 className='text-lg font-semibold mb-4'>
                  <strong>Earnings</strong>
                </h4>
                <table className='w-full table-fixed mb-4'>
                  <tbody>
                    <tr>
                      <td className='w-2/3'>
                        <strong>Basic Salary</strong>
                      </td>
                      <td className='text-right'>$6500</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>House Rent Allowance (H.R.A.)</strong>
                      </td>
                      <td className='text-right'>$55</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Conveyance</strong>
                      </td>
                      <td className='text-right'>$55</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Other Allowance</strong>
                      </td>
                      <td className='text-right'>$55</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Total Earnings</strong>
                      </td>
                      <td className='text-right'>
                        <strong>$55</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className='w-full sm:w-1/2 px-4'>
              <div>
                <h4 className='text-lg font-semibold mb-4'>
                  <strong>Deductions</strong>
                </h4>
                <table className='w-full table-fixed mb-4'>
                  <tbody>
                    <tr>
                      <td className='w-2/3'>
                        <strong>Tax Deducted at Source (T.D.S.)</strong>
                      </td>
                      <td className='text-right'>$0</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Provident Fund</strong>
                      </td>
                      <td className='text-right'>$0</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>ESI</strong>
                      </td>
                      <td className='text-right'>$0</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Loan</strong>
                      </td>
                      <td className='text-right'>$300</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Total Deductions</strong>
                      </td>
                      <td className='text-right'>
                        <strong>$59698</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className='w-full px-4'>
              <p>
                <strong>Net Salary: $59698</strong> (Fifty nine thousand six
                hundred and ninety eight only.)
              </p>
            </div>
          </div>
        </div>
      </Card>
      <Card className='  shadow-md  my-6 container mx-auto p-4'>
        <h1 className='text-2xl font-semibold mb-4'>Salary Information</h1>
        <SalaryTable data={employees} />
      </Card>
    </>
  )
}
