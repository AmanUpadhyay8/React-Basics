export const Planets = (props) => {
    return (
        <div>
            
            <h1>{props.isGasPlanet && props.name}</h1>
        </div>
    );
};