/* eslint-disable react/prop-types */
// SalaryTable.js

import { Button } from '@nextui-org/react'
import { DownloadCloudIcon } from 'lucide-react'

const SalaryTable = ({ data }) => {
  return (
    <div className=' fontOswald overflow-x-auto'>
      <table className='table-auto min-w-full divide-y divide-gray-200'>
        <thead className='bg-gray-50'>
          <tr>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              Date
            </th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              Paid
            </th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              Deduction
            </th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              Net
            </th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              Action
            </th>
          </tr>
        </thead>
        <tbody className='bg-white divide-y divide-gray-200'>
          {data.map((employee) => (
            <tr key={employee.id}>
              <td className='px-6 py-4 whitespace-nowrap'>{employee?.date}</td>
              <td className='px-6 py-4 whitespace-nowrap'>{employee?.paid}</td>
              <td className='px-6 py-4 whitespace-nowrap'>
                {employee?.deduct}
              </td>
              <td className='px-6 py-4 whitespace-nowrap'>
                {employee?.salary}
              </td>
              <td className='px-6 py-4 whitespace-nowrap'>
                <Button endContent={<DownloadCloudIcon />}>Download</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* <Table aria-label='Example table with dynamic content'>
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody items={rows}>
          {(data) => (
            <TableRow key={data.key}>
              {(columnKey) => (
                <TableCell>{getKeyValue(data, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table> */}
    </div>
  )
}

export default SalaryTable
