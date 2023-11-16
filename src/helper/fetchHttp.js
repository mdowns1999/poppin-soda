const fetchHttp = async (configObject) => {
  //Set the defaukt or other options ofr the request
  const options = {
    method: configObject.method ? configObject.method : "GET",
    headers: configObject.headers ? configObject.headers : {},
    body: configObject.body ? JSON.stringify(configObject.body) : null,
  };

  //Fetch the data
  const response = await fetch(configObject.url, options);

  //Check if the response was okay and then return the response
  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: configObject.error.message }),
      { status: configObject.error.status }
    );
  } else {
    return response;
  }
};

export default fetchHttp;
