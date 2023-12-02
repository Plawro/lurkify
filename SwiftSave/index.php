
<!DOCTYPE html> 
<html> 
 <head> 
  <title> Ajax JavaScript File Upload Example </title> 
 </head> 
 <body>
  <!-- HTML5 Input Form Elements -->
  <input id="fileupload" type="file" name="fileupload" /> 
  <button id="upload-button" onclick="uploadFile()"> Upload </button>

  <!-- Ajax JavaScript File Upload Logic -->
  <script>
  async function uploadFile() {
  let formData = new FormData(); 
  formData.append("file", fileupload.files[0]);
  await fetch('/upload.php', {
    method: "POST", 
    body: formData
  }); 
  alert('The file has been uploaded successfully.');
  }
  </script>

<?php

/* Get the name of the uploaded file */
$filename = $_FILES['file']['name'];

/* Choose where to save the uploaded file */
$location = "upload/".$filename;

/* Save the uploaded file to the local filesystem */
if ( move_uploaded_file($_FILES['file']['tmp_name'], $location) ) { 
  echo 'Success'; 
} else { 
  echo 'Failure'; 
}

?>
 </body> 
</html>