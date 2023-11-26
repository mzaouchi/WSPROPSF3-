import PropTypes from 'prop-types';
// const Dali=(props)=>{
    const Dali=({name,old,pays,gomycode,a,hello,helloName,b,children})=>{
    return(
        <div>
            {children}
            {/* <h2>Saleem Dali</h2>
            <h3>{props.name}</h3>
            <h4>My old is {props.old}</h4>
            
            <ul>
                {
                    props.pays.map((el,i,t)=> <li>{el}</li>)
                }
            </ul>

            <h2>My name is {props.gomycode.student}, i study {props.gomycode.track} and i am from {props.gomycode.address.city}</h2> */}
            <h2>Saleem Dali</h2>
            <h3>{name}</h3>
            <h4>My old is {old}</h4>
            
            <ul>
                {
                    pays.map((el,i,t)=> <li>{el}</li>)
                }
            </ul>

            <h2>My name is {gomycode.student}, i study {gomycode.track} and i am from {gomycode.address.city}</h2>

            {/* <h5>{a}</h5> */}
            {
                b === true ?
                <button onClick={hello}>Haw Hné</button>
                :
                <button onClick={()=>helloName("Haboub")}>Khali</button>
            }
            
            
        </div>
    )
}

Dali.defaultProps={
    name : "Moez",
    old : 788888888
}

Dali.propTypes = {
   
    name: PropTypes.string,
    pays: PropTypes.array

}

export default Dali