const React = require("react");
const myStyle = {
    color:"#ffffff",
    backgroundColor: '#ee1515'
}

const myStyledA = {
    color: "#ffffff",
    backgroundColor: "#ee1515",
    padding: "10px",
    borderRadius: "5px",
    textDecoration: "none",
    fontWeight: "bold",
  };

class Index extends React.Component {
    render() {
        const {pokemon} = this.props;
   return (
    <div>
        <h1 style = {myStyle}>'See All The Pokemon!'</h1>
        <ul>
            {pokemon.map( (poke, i)=>{
                return(
                    <div>
                        <li key = {i}>
                            {poke.name = poke.name.charAt(0).toUpperCase()+poke.name.slice(1)}
                        </li>
                        <a href={ `/pokemon/${poke._id}`}>{poke.name}</a>
                    </div>
                )
            })}
        </ul>
        <a  style = {myStyledA} href="/pokemon/new" >Create a Poke</a>
    </div>
   )
   } 
}

module.exports = Index;