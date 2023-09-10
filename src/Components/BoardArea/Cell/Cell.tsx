import "./Cell.css";
import oImage from "../../../Assests/Images/o-photo.png";
import xImage from "../../../Assests/Images/x-photo.png";


interface CellProps {
    cellState : number;
}

function Cell(props: CellProps): JSX.Element {

    const cellStates = [
        {id: 0, imageSrc : null},
        {id: 1, imageSrc: xImage},
        {id: 2, imageSrc: oImage}
    ];

    return (
        <div className="Cell">
            {props.cellState !== 0 &&
                <img src={cellStates[props.cellState].imageSrc}/>
            }
			
        </div>
    );
}

export default Cell;
