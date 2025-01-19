
import commonAPI from "./commonAPI"
import SERVERURL from "./serverURL"

//createUser  create a user -post http request ,submit



export const createUserAPI = async (userDetails) =>{

   return await  commonAPI(`POST`,`${SERVERURL}/users`,userDetails)

}


//readUser read the user -get http request ,

export const getUserAPI =async ()=>{
    return await commonAPI(`GET`,`${SERVERURL}/users`,"")
}


//updateUser  update the user -put http request 

export const updateUserAPI = async (userId, userDetails) => {
    return await commonAPI('PUT', `${SERVERURL}/users/${userId}`, userDetails);
  }

//deleteUset delete the user -delete http request

export const deleteUserAPI =async (userId)=>{
    return await commonAPI('DELETE', `${SERVERURL}/users/${userId}`);

}

