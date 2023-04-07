import ThemeContext from "../context/ThemeContext";
import "../styles/PaymentSection.css"
import { useContext, Component , ChangeEvent, ReactNode, FormEvent } from "react"

type Props = {
    status : boolean;
}

type State = {
    cardNumber : number,
    nameOnCard : string,
    monthValue : number,
    yearValue : number,
    CVVNumber : number,
    showComponent : boolean,

}



class Debit extends Component<Props, State>{
    static cntValue = ThemeContext;

    constructor(props : Props) {
        super(props);

        this.state = {
            cardNumber : 0,
            nameOnCard : "",
            monthValue : 0,
            yearValue : 0,
            CVVNumber : 0,
            showComponent : this.props.status,

        }
        this.onButtonClick = this.onButtonClick.bind(this);
        this.onCanelButton = this.onCanelButton.bind(this);
        this.monthValueChange = this.monthValueChange.bind(this);
        this.yearValueChange = this.yearValueChange.bind(this);
    }

    componentDidMount(): void {
        // const { theme } = this.context;
        console.log("Mounted --->", this.context)
    }
    onButtonClick = ( ) => {
        this.setState( { showComponent : true})

    }

    onCanelButton = () => {
        
    }

    monthValueChange = (event : ChangeEvent<HTMLSelectElement>) => {
        this.setState( {monthValue : parseInt(event.target.value) })
    }

    yearValueChange = (event : ChangeEvent<HTMLSelectElement>) => {
        this.setState ( { yearValue : parseInt(event.target.value)})
    }

    submitHandler(event: React.FormEvent) {
        event.preventDefault();
        console.log(event);
        this.onButtonClick();
    }

    payHandler( event : ChangeEvent<HTMLInputElement>) {
        const name =  event.target.name;
        const value = event.target.value;

        // this.setState<{[P in keyof T]?: T[P] | undefined}>(
        //     { [name] : value}
        // )

        this.setState( {
            [name] : value
        } as unknown as Pick<State, keyof State>)
    }

    render(): ReactNode {

        const { cardNumber, nameOnCard, CVVNumber , monthValue} = this.state;

        return (
            
            <>
            <ThemeContext.Consumer>
                {
                (({theme, toggleTheme}) => (
                    <div className={`backgroundStyling backgroundStyling-${theme} `} onClick={toggleTheme}>
                        <form onSubmit={this.submitHandler}>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                        <label htmlFor="nameOnCard" className="label">Name on the card</label>
                                        </td>

                                        <td>
                                        <input type="text" name="nameOnCard" id="nameOnCard" className="input" 
                                            value={nameOnCard}
                                            onChange={this.payHandler}>
                                        </input>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <label htmlFor="monthValue">Month</label>
                                        </td>
                                        <td>
                                            <select name="monthValue" id="monthValue" value={monthValue} onChange={() =>this.monthValueChange} required>
                                                <option value={0} disabled> Select </option>
                                                <option value={1} > 1 </option>
                                                <option value={2} > 2 </option>
                                                <option value={3} > 3 </option>
                                                <option value={4} > 4 </option>
                                                <option value={6} > 5 </option>
                                                <option value={7} > 6 </option>
                                                <option value={8} > 7 </option>
                                                <option value={9} > 8 </option>
                                                <option value={10} > 9 </option>
                                                <option value={11} > 10 </option>
                                                <option value={12} > 11 </option>
                                            </select>
                                        </td>
                                    </tr>

                                
                                </tbody>
                            </table>
                        </form>
                    </div>
                ))
                }
            </ThemeContext.Consumer>
            </>
        );
    }

}

export default Debit;