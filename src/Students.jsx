function Students(props){
    return(
       props.isLogged ? <h1>welcome to my website :{props.username}</h1> :
        <h1> please login first to continue</h1>
    );
}
export default Students