import React, { useState, ChangeEvent } from "react";

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [ipfsHash, setIpfsHash] = useState(null);

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
      console.log(resData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <label className="form-label"> Choose File</label>
      <input type="file" onChange={changeHandler} />
      <button onClick={handleSubmission}>Submit</button>
      {ipfsHash && (
        <img
          src={`https://ipfs.io/ipfs/${ipfsHash}`} // Construct URL to fetch image from IPFS
          alt="IPFS Image"
        />
      )}
    </>
  );
}

export default App;
