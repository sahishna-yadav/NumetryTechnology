import React, { useState } from 'react';
import videoLogo from "../assets/video-posting.png"
import { Button ,Card,Label,TextInput,Textarea} from 'flowbite-react'
function VideoUploaded() {
  const [selectedFile ,setSelectedFile]=useState(null);
  const [progress ,setProgress]=useState(0);
  const [uploading ,setUploading]=useState(false);
  const [message ,setMessage]=useState("");
function handleFileChange(event){
 console.log(event.target.files[0]);
 setSelectedFile(event.target.files[0]);

  }
  function handleForm(){
 console.log("button clicked");
 console.log(selectedFile);
  }
  return(
    <div className= "text-white">
       <Card className="flex flex-col items-center justify-center">
        <h1>Upload Videos</h1>
        <div>
        <form  className=" flex flex-col space-y-6"onSubmit={handleForm}>  
          <div>
      <div className="mb-2 block">
        <Label htmlFor="file-upload" value="Video Title" />
      </div>
      <TextInput placeholder="Enter Title" />
    </div>
    <div className="max-w-md">
      <div className="mb-2 block">
        <Label htmlFor="comment" value="video Description" />
      </div>
      <Textarea id="comment" placeholder="Write video description" required rows={4} />
    </div>
        
        
  <div className='flex items-center space-x-5 justify-center'>
  <div className="shrink-0">
  <img className="h-16 w-16 object-cover " src={videoLogo} />
  </div>
  <label className="block">
    <span className="sr-only">Choose Video File</span>
    <input  onChange={handleFileChange}type="file" 
    className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "/>
  </label>
  </div>  
  </form>
</div>
<div className='flex justify-center'>
  <Button onClick={handleForm}>Upload</Button>
  </div>
</Card>
</div>
  )
}

export default VideoUploaded