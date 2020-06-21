import * as types from './types.js';
import axios from 'axios';

export const switchToAdd = () => { 
    return dispath => {
        dispath({
            type: types.SWITCH_TO_ADD,
            status: 'add'
        })
    }
}
export const switchToUpdate = () => {
    return dispath => {
        dispath({
            type: types.SWITCH_TO_UPDATE,
            status: 'update'
        })
    }
}
export const switchToRemove = () => {
    return dispath => {
        dispath({
            type: types.SWITCH_TO_REMOVE,
            status: 'remove'
        })
    }
}
export const addNewProduct = (product) => {
    return async dispath => {
        try {
            await axios.post('/api/dashboard/add', product)
            dispath({
                type: types.ADD_NEW_PRODUCT,
                success: true
            })
        } catch (error) {
            dispath({
                type: types.ADD_NEW_PRODUCT_FAILED,
                success: false
            })
        }
    }
}
export const updateAProduct = (product, id) => {
    return async dispath => {
        try {
            await axios.patch(`/api/dashboard/update/${id}`, product)
            dispath({
                type: types.UPDATE_A_PRODUCT,
                success: true
            })
        } catch (error) {
            dispath({
                type: types.UPDATE_A_PRODUCT_FAILED,
                success: false
            })
        }
    }
}
export const removeAProduct = (id) => {
    return async dispath => {
        try {
            await axios.delete(`/api/dashboard/remove/${id}`)
            dispath({
                type: types.REMOVE_A_PRODUCT,
                success: true
            })
        } catch (error) {
            dispath({
                type: types.REMOVE_A_PRODUCT_FAILED,
                success: false
            })
        }
    }
}
export const findAProduct = (name) => {
    return async dispath => {
        try {
            const response = await axios.get(`/api/dashboard/find/?name=${name}`);
            dispath({
                type: types.FIND_A_PRODUCT,
                success: true,
                data: response.data.product
            })
        } catch (error) {
            dispath({
                type: types.FIND_A_PRODUCT_FAILED,
                sucess: false
            })
        }
    }
}