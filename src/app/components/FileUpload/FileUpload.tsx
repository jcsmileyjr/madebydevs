import Image from 'next/image';
import Upload from '../../images/upload.png'
// Notes: https://stackoverflow.com/questions/44173593/how-to-hide-input-file-and-style-the-input-file-to-icon-image
export default function FileUpload() {

    return (
        <div>
            <label className="" htmlFor="file-upload">
                <Image src={Upload} alt="info" width={20} height={50} className='h-10 border-2 mx-2 self-center relative' />
                <span className="hidden">Upload</span>
            </label>
            <input className="hidden" id="file-upload" type="file"/>
        </div>
    )
}