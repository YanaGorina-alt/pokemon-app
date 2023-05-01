const React = require("react");
const myStyle = {
    color:"#ffffff",
    backgroundColor: '#ee1515'
}

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
                        <a href={ `/pokemon/${i}`}>{poke.name}</a>
                    </div>
                )
            })}
        </ul>
    </div>
   )
   } 
}

module.exports = Index;