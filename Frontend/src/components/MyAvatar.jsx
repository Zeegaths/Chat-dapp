import { useState } from "react";
import './MyAvatar.css'; // Import CSS file for styling

function MyAvatar() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [ipfsHash, setIpfsHash] = useState(null);
  const [showInput, setShowInput] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files?.[0] ?? null);
  };

  const handleSubmission = async () => {
    try {
      if (!selectedFile) return;

      const formData = new FormData();
      formData.append("file", selectedFile);
      const metadata = JSON.stringify({
        name: "File name",
      });
      formData.append("pinataMetadata", metadata);

      const options = JSON.stringify({
        cidVersion: 0,
      });
      formData.append("pinataOptions", options);

      const res = await fetch(
        "https://api.pinata.cloud/pinning/pinFileToIPFS",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_PINATA_JWT}`,
          },
          body: formData,
        }
      );
      const resData = await res.json();
      setIpfsHash(resData.IpfsHash); // Set the IPFS hash received from the response
      setShowInput(false); // Hide the input after successful submission
      console.log(resData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeAvatar = () => {
    setShowInput(true); // Show the input when changing avatar
  };

  return (
    <>
      <button onClick={handleChangeAvatar}>Change Avatar</button>
      {showInput && (
        <>
          <label className="form-label"> Choose Avatar</label>
          <input type="file" onChange={changeHandler} />
        </>
      )}
      {selectedFile && (
        <div className="avatar-container">
          <img
            className="avatar-image"
            src={`https://ipfs.io/ipfs/${ipfsHash}`} // Construct URL to fetch image from IPFS
            alt="IPFS Image"
          />
          <button onClick={handleSubmission}>Save</button>
        </div>
      )}
    </>
  );
}

export default MyAvatar;
