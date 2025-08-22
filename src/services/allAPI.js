
import BASEURL from "./baseUrl"
import commonAPI from "./commonAPI"

// addResumeApi - POST - called by steps component
export const addResumeApi = (resume)=>{
    return commonAPI("POST",`${BASEURL}/all-resume`,resume)
}