import axios from 'axios'
import { main_api } from '../api/MAIN_API'
import { changeStateValue } from '../redux/MainReducer'

export const loginUser = (data) => async dispatch => {
    return await axios({
        method: 'POST',
        url: `${main_api}/user/check`,
        params: data
    })
    .then(resp => {
        dispatch(changeStateValue({
            name: 'user',
            value: resp.data.user
        }))
        localStorage.setItem('Razer_Nest', resp.data.token)
        return 'success'
    }).catch(err => {
        return 'error'
    })
}

export const registerUser = (data) => async dispatch => {
    return await axios({
        method: 'POST',
        url: `${main_api}/user/insert`,
        params: data,
        headers:{
            "Accept":"application/json",
            "Content-Type":"application/json",
            "Authorization":`Bearer ${localStorage.getItem('Razer_Nest')}`,
        }
    })
    .then(resp => {
        return 'success'
    }).catch(err => {
        return 'error'
    })
}

export const getCategories = () => async dispatch => {
    return await axios.get(`${main_api}/category`)
    .then(resp => {
        console.log(resp.data)
        dispatch(changeStateValue({
            name: 'categories',
            value: resp.data
        }))
    }).catch(err => {
        console.log(err.resp)
    })
}

export const getProducts = (categoryId="") => async dispatch => {
    return await axios.get(`${main_api}/product?filterByCategory=${categoryId}`)
    .then(resp => {
        console.log(resp.data)
        dispatch(changeStateValue({
            name: 'products',
            value: resp.data
        }))
    }).catch(err => {
        console.log(err.resp)
    })
}

export const getProductProperties = (productId="") => async dispatch => {
    return await axios.get(`${main_api}/productproperies?filterByProduct=${productId}`)
    .then(resp => {
        dispatch(changeStateValue({
            name: 'productproperties',
            value: resp.data
        }))
    }).catch(err => {
        console.log(err.resp)
    })
}

export const getImages = (productId="") => async dispatch => {
    return await axios.get(`${main_api}/images?filterByProduct=${productId}`)
    .then(resp => {
        dispatch(changeStateValue({
            name: 'images',
            value: resp.data
        }))
    }).catch(err => {
        console.log(err.resp)
    })
}

export const getProductPropertiesById = (id) => async dispatch => {
    return await axios.get(`${main_api}/productproperties/${id}`)
    .then(resp => {
        dispatch(changeStateValue({
            name: 'productproperties',
            value: resp.data
        }))
    }).catch(err => {
        console.log(err.resp)
    })
}

export const getProductById = (id) => async dispatch => {
    return await axios.get(`${main_api}/product/${id}`)
    .then(resp => {
        dispatch(changeStateValue({
            name: 'productsData',
            value: resp.data
        }))
    }).catch(err => {
        console.log(err.resp)
    })
}