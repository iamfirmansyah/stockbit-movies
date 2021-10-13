const { apiSearchMovies, apiDetailsMovies } = require('../repository/api')
const {response} = require('../services/response') 
const {recordRequest} = require('../services/logger')
const axios = require('axios')
const validator = require('../helpers/validate');

module.exports = {
    async searchMovies(req, res) {
        const validationRule = {
            "filter": "required|min:3",
        }

        validator(req.query, validationRule, {}, (err, status) => {
            if (!status) {
                response(res, 400, "failed", err)
            }
        });
        
        const splitURL = req.originalUrl.split('?')
        const endPoint = splitURL[0];
        const parameters = splitURL[1];

        const log = await recordRequest({ date: new Date(), endpoint: endPoint, parameters: parameters})

        try{
            const {filter, page} = req.query
            const movies = await apiSearchMovies(filter , page)
            response(res, 200, "success", movies)
        }catch(error){
            response(res, 500, "failed", error)
        }
    },

    async detailMovies(req, res) {
        const validationRule = {
            "imdbID": "required",
        }

        validator(req.query, validationRule, {}, (err, status) => {
            if (!status) {
                return response(res, 400, "failed", err)
            } 
        });

        const splitURL = req.originalUrl.split('?')
        const endPoint = splitURL[0];
        const parameters = splitURL[1];

        const log = await recordRequest({ date: new Date(), endpoint: endPoint, parameters: parameters})

        try{
            const {imdbID} = req.query
            const movies = await apiDetailsMovies(imdbID)
            response(res, 200, "success", movies)
        }catch(error){
            response(res, 500, "failed", error)
        }
    }
    
    
}