import { logger } from '../infra/logger'

/**
 * This file contains helper functions
 * 
 */

const ISEMAIL = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/

export const isEmail = (value) => {
    return value.match(ISEMAIL)
}

export const handleMongoQuery = async (queryCallback) => {
    try {
        let result = await queryCallback;
        return result
    } catch (error) {
        logger.error(error, { scope: 'Mongo Repository' })
        return null;
    }
}


export const handleResponse = async (ctx, callback) => {
    let { status, data } = await callback
    ctx.status = status
    ctx.body = data ? data : { "error" : "Internal server error"}
}
