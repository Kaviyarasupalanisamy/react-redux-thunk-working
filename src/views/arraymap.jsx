import React from 'react';

class ArrayMap extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state= {family:[{name:"Kaviyarasu",age:28},{name:"Jeeva",age:27},{name:"Saravanan",age:30}]};
    }
    render()
    {
        return(
            <React.Fragment>
                <table border="1">
                    <thead><tr><th>Name</th><th>Age</th></tr></thead>
                    <tbody>
                    { this.state.family.map( (familyDet, index) => {
                      return( 
                      <tr key={index}><td>{familyDet.name}</td><td>{familyDet.age}</td></tr>
                       )}
                    )}
                    </tbody>
                </table>
            </React.Fragment>
        )
    }
}
export default ArrayMap;