export const adduser = async (userData) => {
    const res = await fetch('http://localhost:4000/api/user', {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
  
      body: JSON.stringify(userData),
    });
  
    const data = await res.json();
    return data;
  };



  // get All classes

export const getUser = async () => {
    const res = await fetch();
    const data = await res.json();
    return data;
  };