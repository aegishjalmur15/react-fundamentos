import React, { useMemo } from "react";
import { useParams, useLocation } from "react-router-dom";

export default function Post(){
    const params = useParams();
    const {search} = useLocation();

    const queryParams = useMemo(()=> new URLSearchParams(search), [search])

    return(
        <>
        <h1>Post {params.id}</h1>
        <p>Params: {queryParams.get('param')}</p>
        </>
    );
}

//? IN CLASS COMPONENT
// export default class Post extends React.Component {
    
//     constructor(props){
//         super(props);

//         const  params = this.props.match.params;
//         const { search } = this.props.location;
//         this.id = params.id;
//         this.queryParams = new URLSearchParams(search);
//     }

//     render() {
//     return (
//       <>
//         <h1>Post {this.id}</h1>
//         <p>Params: {this.queryParams.get("param")}</p>
//       </>
//     );
//   }
// }
