import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

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
    const action = addExpense( expenseData );
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            //We cant type the id becausse the id keeps on changing
            id: expect.any(String)
        }
    });
});

// 2 - WHEN YOU USE THE DEFAULT VALUES
test('should setup add expense actions object with default values', () => {
    const action = addExpense(  );
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }        
    });
});