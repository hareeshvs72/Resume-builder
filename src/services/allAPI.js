
import BASEURL from "./baseUrl"
import commonAPI from "./commonAPI"

// addResumeApi - POST - called by steps component
export const addResumeApi =async (resume)=>{
    return await commonAPI("POST",`${BASEURL}/all-resume`,resume)
}

// add resume to history 

export const addResumeDownloadAPI = async (resume)=>{
    return await commonAPI("POST",`${BASEURL}/history`,resume)
}

// get History Api 
 
export const getHistoryApi = async ()=>{
    return await commonAPI("GET",`${BASEURL}/history`,{})

}

// delet history api

export const deleteHistory = async (id)=>{
    return await commonAPI("DELETE",`${BASEURL}/history/${id}`,{})

}
 
// get resume api "get" - get called by edit component when its open in browser (use effect)

export const getResumeApiEdit = async (id)=>{
    return await commonAPI("GET",`${BASEURL}/all-resume/${id}`,{})

}
