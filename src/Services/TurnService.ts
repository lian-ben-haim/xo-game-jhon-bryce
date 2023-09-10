class TurnService {

    public changeTurn(turn: boolean): void {
        turn = !turn;
    } 
}

const turnService = new TurnService();

export default turnService;