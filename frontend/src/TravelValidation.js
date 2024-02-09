function Validation(values){
  let error={}

  if (values.title===""){
      error.title="Title should not be empty";
  }
  else{
      error.title="";
  }

  if (values.description===""){
      error.description="Description should not be empty";
  }
  else{
      error.description="";
  }

  return error;
}

export default Validation;