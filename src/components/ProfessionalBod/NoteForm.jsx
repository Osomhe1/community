// import { Card } from '@nextui-org/react/dist'
import { useState } from 'react'
import { Card, CardBody, Textarea, Button } from '@nextui-org/react'
import { PlusIcon, Trash2Icon } from 'lucide-react'

const NoteForm = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')

  const handleInputChange = (e) => {
    setNewNote(e.target.value)
  }

  const handleAddNote = () => {
    if (newNote.trim() !== '') {
      setNotes([...notes, newNote])
      setNewNote('')
    }
  }

  const handleDeleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index)
    setNotes(updatedNotes)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Logic to submit notes goes here
    // For example, you might want to send notes to an API, save them in the database, etc.
    console.log('Submitted Notes:', notes)
    setNotes([])
  }

  return (
    <div className='py-8'>
      <h3 className='font-serif text-lg capitalize'>add note</h3>
      <form onSubmit={handleSubmit}>
        <div className='w-full mx-auto'>
          <Textarea
            value={newNote}
            onChange={handleInputChange}
            // label='Add Note'
            labelPlacement='outside'
            placeholder='Enter your note'
            className=' mb-6 md:mb-0 my-2 w-[18.5rem] md:w-[22rem]'
          />

          <Button
            color='primary'
            variant='bordered'
            className='my-4 rounded font-normal hover:-translate-y-1 ease-in-out duration-300'
            onClick={handleAddNote}
            endContent={<PlusIcon />}
          >
            {notes.length > 0 ? 'Add more' : 'Add Note'}
          </Button>
        </div>
        <div className='my-6'>
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
        </div>
        {notes.length > 0 && (
          <Button
            type='submit'
            color='success'
            className='my-4 text-white rounded'
            onClick={handleAddNote}
          >
            Submit
          </Button>
        )}
      </form>
    </div>
  )
}

export default NoteForm
