import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, editExpense, removeExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';

const createMockStore = configureMockStore([thunk]);

// TEST FOR REMOVE_EXPENSE
test('should setup remove expense actions object', () => {
    const action = removeExpense( { id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

// TEST FOR EDIT_EXPENSE
test('should setup edit expense actions object', () => {
    const action = editExpense( '123abc', { note: 'New note value'} );
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: { note: 'New note value'}
    });
});

// TEST FOR ADD_EXPENSE - ITS GOING TO HAVE 2
// 1 - WHEN YOU USE THE TYPED VALUES
test('should setup add expense actions object with provided values', () => {
    const expenseData = {
        description: 'Rent',
        amount: 109500,
        createdAt: 1000,
        note: 'This was last months rent'
    };
    const action = addExpense( expenses[2] );
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    });
});

test('should add expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note: 'This one is better',
        createdAt: 1000
    };
    store.dispatch(startAddExpense(expenseData)).then(() => {
        expect(1).toBe(1);
        done();
    });
});

test('should add expense with defaults to database and store', () => {

});

// 2 - WHEN YOU USE THE DEFAULT VALUES
// test('should setup add expense actions object with default values', () => {
//     const action = addExpense(  );
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             id: expect.any(String),
//             description: '',
//             note: '',
//             amount: 0,
//             createdAt: 0
//         }        
//     });
// });