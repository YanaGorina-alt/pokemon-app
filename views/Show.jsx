const React = require("react");
const myStyle = {
    color:"#ffffff",
    backgroundColor: '#ee1515'
}

class Show extends React.Component {
    render() {
        const poke = this.props.poke;
        const image = poke.img + ".jpg";
   return (

    <div>
        <h1 style = {myStyle}>"Gotta Catch'Em All"</h1>
        <h2>{poke.name}</h2>
        <img src = {image} alt = {poke.name}/>
        <a href = {"/pokemon"}>Back</a>
    </div>
   )
   } 
}

module.exports = Show;