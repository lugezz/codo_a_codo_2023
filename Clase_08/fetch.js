let getNameFetch = (idPost) => {
    try {
       fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
       .then((res) => {
           /* console.log(res) */
           return res.json();
         })
     
         .then((post) => {
           /*     console.log(post); */
           fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
             .then((res) => {
               /* console.log(res) */
               return res.json();
             })
             .then((user) => {
              if (user.name) {
                console.log(
                  `El post ${idPost} con el titulo ${post.title} y lo escribió : ${user.name} y vive en: ${user.address.city}`
                );
                console.log("----------------")
              }
             });
         });
     
    } catch (error) {
      console.log('Catch del error')
      console.log(error)
    }
   
};
   
getNameFetch(8);
getNameFetch(47);
getNameFetch(147);