import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from "../selectors/expenses";
import getTotalExpenses from "../selectors/expenses-total";
import numeral from 'numeral';

export class ExpensesSummay extends React.Component{
  expenseCount = () => this.props.expenses.length;
  expensesTotal = () => numeral(getTotalExpenses(this.props.expenses)/ 100).format('$0,0.00');
  render(){
    if(this.expenseCount()>0){
      return (
        <div>
          {`Viewing ${this.expenseCount()} ${this.expenseCount()>1?"expenses":"expense"} totalling ${this.expensesTotal()}`}
        </div>
      );
    }else{
      return null;
    }
    
  }
}
const mapStateToProps = (state) =>({ 
  expenses:selectExpenses(state.expenses,state.filters)
 });

export default connect(mapStateToProps)(ExpensesSummay)