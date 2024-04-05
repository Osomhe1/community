import StaffDetailsTable from '../../../../components/tables/StaffDetailsTable'
import PageHeader from '../../../../components/payroll_components/PageHeader'

const StaffDetails = () => {
  return (
    <div>
      <div className='py-6'>
        <PageHeader
          header_text={'HR Opration'}
          breadCrumb_data={[
            {
              name: 'HR',
            },
            {
              name: 'StaffDetails',
            },
          ]}
          btnAvailable={false}
        />
      </div>

      <StaffDetailsTable />
    </div>
  )
}

export default StaffDetails
