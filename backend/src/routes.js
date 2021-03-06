const { Router } = require('express');

const axios = require('axios');

const routes = Router();

routes.post('/devs', async (request, response) => {
    const { github_username } = request.bory;

    const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
    
    console.log(apiResponse.data);

    return response.json({ message: 'Ola Nodejs!'});
});

module.exports = routes;