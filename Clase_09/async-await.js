const getNameAsync = async (idPost) => {
    try {
        let respPost = await fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
        let post = await respPost.json()
    
        let userPost = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
        

        if (post) {
            let postU = await userPost.json()
            console.log(
            `El post ${idPost} con el titulo ${post.title} y lo escribió : ${postU.name} y vive en: ${postU.address.city}`
            );
            console.log("----------------")
        }
    } catch (error) {
      console.log(error)
    }   
};
   
getNameAsync(8);
getNameAsync(47);
getNameAsync(147);