const React = require("react");

class New extends React.Component{
    render(){
        return(
            <div>
                <h1>CREATE A NEW POKE!</h1>
                <form action="/pokemon" method="POST">
                    Name: <input type="text" name="name"/>
                    Image URL: <input type="text" name="img"/>
                <input type="submit" value="Create Poke"/>
                </form>
            </div>
        )
    }
}
module.exports = New;