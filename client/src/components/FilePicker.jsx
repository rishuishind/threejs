import CustomButton from "./CustomButton"

const FilePicker = (props) => {
  return (
    <div className='filepicker-container'>
      <div className='flex-1 flex flex-col'>
        <input id="file-upload" type="file" accept="image/*" onChange={(e) => props.setFile(e.target.files[0])} />
        <label htmlFor="file-upload" className="filepicker-label">Upload File</label>
        <p className='mt-2 text-gray-500 text-xs truncate'>
          {props.file === '' ? 'No files selected' : props.file.name}
        </p>
        <div className='mt-4 flex flex-wrap gap-3'>
          <CustomButton
            type='outline'
            title='Logo'
            handleClick={() => props.readFile('logo')}
            customStyles='text-xs'
          />
          <CustomButton
            type='filled'
            title='Full'
            handleClick={() => props.readFile('full')}
            customStyles='text-xs px-4'
          />
        </div>
      </div>
    </div>
  )
}

export default FilePicker