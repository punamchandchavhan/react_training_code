function FileUpload(props) {
	return (
		<input type="file" name={props.name} onChange={props.handleFile} 
		accept="image/png, image/jpeg" className="form-control" />
	);
}

export default FileUpload;