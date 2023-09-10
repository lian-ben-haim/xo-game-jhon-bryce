import Cell from "../Cell/Cell";
import "./Board.css";

function Board(): JSX.Element {

    const boardCells = [
        [{id: 1, state:0},
        {id: 2, state:1},
        {id: 3, state:2}],

        [{id: 1, state:0},
        {id: 2, state:0},
        {id: 3, state:0}],

        [{id: 1, state:0},
        {id: 2, state:0},
        {id: 3, state:0}]
        
    ];
{/* <Cell key={row[0].id} cellState={row[0].state}/> */}
    return (
        <div className="Board">

            <table>
                { boardCells.map(row =>
                     <tr>{row.map(cell => 
                        <td> <Cell key={cell.id} cellState={cell.state}/> </td>)}
                     </tr>)
                }
            </table>
			
        </div>
    );
}

export default Board;
