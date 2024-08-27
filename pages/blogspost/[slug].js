import { useRouter } from "next/router";
import React from "react";
const Post = ()=>{
    const router = useRouter();
    const {slug} = router.query
    console.log(slug);
    

    return <p> Post: {slug} </p>
}

export default Post;