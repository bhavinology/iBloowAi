import React, { useState } from "react";
import axios from "axios";
import "./fileupload.css";

function FileUpload() {
  const [data, setData] = useState();
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(true);
  const [process, setProcess] = useState(false);
  const [file, setFile] = useState();
  console.log("data in data", data);

  function changeHandler(event) {
    if (data) {
      setData();
    }
    setErr(false);
    setFile(event.target.files[0]);

    console.log("file in change handler", file);
  }

  const handleSubmission = async (e) => {
    try {
      //   e.preventDefault();
      setLoading(false);
      setProcess(true);
      console.log("file in submit fn", file);
      const formData = new FormData();
      formData.append("uploadfile", file);

      for (const key of formData.entries()) {
        console.log(key[0] + ", " + key[1]);
      }
      const postResponse = await axios.post(
        "http://20.68.149.204:5000/api/",
        formData
      );
      console.log(postResponse);
      // const getResponse = await axios.get(
      //   "https://jsonplaceholder.typicode.com/todos/"
      // );
      // console.log(getResponse);
      setData(postResponse.data);
      setErr(false);
    } catch (error) {
      console.log(error.message);
      setErr(true);
      setData();
    } finally {
      // setLoading(false);
      setProcess(false);
    }
  };

  return (
    <div className="file-upload-container">
      <div className="input-div">
        <input type="file" onChange={changeHandler} />
        <div>
          <button onClick={handleSubmission} className="submit-btn">
            Submit
          </button>
        </div>
      </div>
      <div className="data-display-container">
        {loading && <div> Upload File to get an output</div>}
        {process && <div>Processing.. </div>}
        {err && <div>There is a problem fetching the post data</div>}
        {data && (
          <>
            <h3 className="card-heading">AI Heart Sound Analysis</h3>
            <ul>
              <li className="card-list-items"> Artifact: {data.Artifact}</li>
              <li className="card-list-items"> Murmur: {data.Murmur}</li>
              <li className="card-list-items"> Normal: {data.Normal}</li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default FileUpload;
