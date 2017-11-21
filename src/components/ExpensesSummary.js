import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import selectExpenses from "../selectors/expenses";
import getTotalExpenses from "../selectors/expenses-total";
import numeral from 'numeral';

export class ExpensesSummay extends React.Component{
  expenseCount = () => this.props.expenses.length;
  expensesTotal = () => numeral(getTotalExpenses(this.props.expenses)/ 100).format('$0,0.00');
  render(){
      return (
        <div className="page-header">
          <div className = "content-container">
            <h1 className = "page-header__title">
              Viewing <span>{this.expenseCount()}</span> {this.expenseCount() > 1 ? "expenses" : "expense"} totalling <span>{this.expensesTotal()}</span>
            </h1>
            <div className="page-header__actions">
              <Link className="button" to = "/create">Add Expense</Link>
            </div>
          </div>
        </div>
      );  
  }
}
const mapStateToProps = (state) =>({ 
  expenses:selectExpenses(state.expenses,state.filters)
 });

export default connect(mapStateToProps)(ExpensesSummay)