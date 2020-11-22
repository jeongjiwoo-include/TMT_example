const url = 'http://112.172.255.3:3000';

exports.GET = async (route) => {
  try {
    const response = await fetch(`${url}/${route}`);
    if (response.status === 200) {
      const json = await response.json();
      return json;
    } else throw new Error('error');
  } catch (err) {
    console.log(err);
  }
};

exports.POST = async (route, body) => {
  try {
    const response = await fetch(`${url}/${route}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    if (response.status === 200) {
      const json = await response.json();
      return json;
    } else {
      throw new Error('error');
    }
  } catch (err) {
    console.log(err);
  }
};

exports.PUT = async (route, body) => {
  try {
    const response = await fetch(`${url}/${route}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    if (response.status === 200) {
      const json = await response.json();
      return json;
    } else {
      throw new Error(response.status);
    }
  } catch (err) {
    console.log(err);
  }
};

exports.DELETE = async (route, body) => {
  try {
    const response = await fetch(`${url}/${route}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    if (response.status === 200) {
      const json = await response.json();
      return json;
    } else {
      throw new Error('error');
    }
  } catch (err) {
    console.log(err);
  }
};