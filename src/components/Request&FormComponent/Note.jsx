/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import { Card } from '@nextui-org/react/dist'
import { useState } from 'react'
import { Card, CardBody, Textarea, Button } from '@nextui-org/react'
// import { PlusCircle, Trash2Icon } from 'lucide-react'

const Note = ({ setInformation,setSelectedTab }) => {
//   const [notes, setNotes] = useState([])
  const [note, setNote] = useState('')

  const handleInputChange = (e) => {
    setNote(e.target.value)
      setInformation((information)=>{
  return {...information,note}
  })
  }

//   const handleAddNote = () => {
//     if (note.trim() !== '') {
//       setNotes([...notes, note])
//       setNote('')
//     }
//   }

//   const handleDeleteNote = (index) => {
//     const updatedNotes = notes.filter((_, i) => i !== index)
//     setNotes(updatedNotes)
//   }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Logic to submit notes goes here
    // For example, you might want to send notes to an API, save them in the database, etc.
     setInformation((information)=>{
  return {...information,note}
  })
  setSelectedTab(0)
    console.log('Submitted Note:', note)
    setNote('')
  }

  return (
    <div className='p-8 bg-white shadow rounded'>
      {/* <form onSubmit={handleSubmit}> */}
      <div>
        <div>
          <Textarea
          minRows={6}
            value={note}
            onChange={handleInputChange}
            labelPlacement='outside'
            placeholder='Write something'
            className='col-span-12 md:col-span-6 mb-6 md:mb-0 my-2'
            radius="sm"
                       classNames={{
                  inputWrapper: "outline-1 border-[1px] shadow-none rounded-[0.375rem] bg-white hover:bg-white focus-within:outline-blue-500 outline-offset-0 focus-within:!bg-white",
                  label:'font-helvetica tracking-5'
                }}
          />

          {/* <PlusCircle
            className='bg-blue-500 text-white rounded-full my-2 w-8 h-8'
            onClick={handleAddNote}
          /> */}
        </div>
        {/* <div className='my-6'>
          {notes.map((note, index) => (
            <Card key={index} className=' my-2 shadow '>
              <CardBody className='flex flex-row justify-between items-center gap-3'>
                <p className=''>{note}</p>
                <Button
                  variant='isbordered'
                  isIconOnly
                  type='button'
                  onClick={() => handleDeleteNote(index)}
                >
                  <Trash2Icon className='text-red-500' />
                </Button>
              </CardBody>
            </Card>
          ))}
        </div> */}
       <div className='flex justify-end'>
        {/* <Button
        type='submit'
          color='primary'
          size='sm'
          className='my-4 text-white rounded'
        >
          Submit Note
        </Button> */}
       </div>
      </div>
    </div>
  )
}

export default Note
