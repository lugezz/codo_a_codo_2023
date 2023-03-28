const getNameAxios = async (idPost) => {
    try {
        let respPost = await axios(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
        let userPost = await axios(`https://jsonplaceholder.typicode.com/users/${respPost.data.userId}`)
        

        if (respPost) {
            console.log(
            `El post ${idPost} con el titulo ${respPost.data.title} y lo escribió : ${userPost.data.name} y vive en: ${userPost.data.address.city}`
            );
            console.log("----------------")
        }
    } catch (error) {
      console.log(error)
    }   
};
   
getNameAxios(8);
getNameAxios(47);
getNameAxios(147);