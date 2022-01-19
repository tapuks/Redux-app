import ListItem from "./ListItem"

const ListResult=({data})=> {

    return (
        data?.map(movie=> <ListItem key={movie.id} {...movie}/>


        )
    )


}

export default ListResult