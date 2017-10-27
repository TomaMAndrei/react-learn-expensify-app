import React from "react";
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { ExpensesSummay } from '../../components/ExpensesSummary';



test("should expenses summary render corectly with 1 expense", () => {
  const wrapper = shallow(
    <ExpensesSummay expenses={[expenses[1]]} />
  );
  expect(wrapper).toMatchSnapshot();
});
test("should expenses summary render corectly with 3 expenses", () => {
  const wrapper = shallow(
    <ExpensesSummay expenses={expenses} />
  );
  expect(wrapper).toMatchSnapshot();
});

