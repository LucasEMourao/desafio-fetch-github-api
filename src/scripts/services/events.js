async function getEvents(userName) {
    const response = await fetch(`https://api.github.com/users/${userName}/events?per_page=10`);
    return await response.json();
      
  }

export {getEvents}