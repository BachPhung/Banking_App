import {Nav, NavMenu, NavItem, NavBtn, NavLinks} from './HomeElement'
import "../NavHome/NavHome.css";
import { stateStorage } from '../../App';
const NavHome = () => {
    return (
        <div>
            <Nav>
                <NavMenu>
                    <NavItem>
                        <NavLinks id={stateStorage.getState()===1 ? "active-tab" : "tab"} onClick={e=> stateStorage.dispatch({type:'PAYMENT'})}>Payment</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks id={stateStorage.getState()===2 ? "active-tab" : "tab"} onClick={e=> stateStorage.dispatch({type:'HISTORY'})}>History Transaction</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks id={stateStorage.getState()===3 ? "active-tab" : "tab"} onClick={e=> stateStorage.dispatch({type:'DETAIL'})}>Account Detail</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks id={stateStorage.getState()===4 ? "active-tab" : "tab"} onClick={e=> stateStorage.dispatch({type:'LOAN'})}>Loan</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavBtn>Log Out</NavBtn>
                    </NavItem>
                </NavMenu>
            </Nav>
        </div>
    )
}

export default NavHome

