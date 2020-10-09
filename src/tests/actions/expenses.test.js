import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { 
    startAddExpense, 
    addExpense, 
    editExpense, 
    startEditExpense,
    removeExpense, 
    startRemoveExpense,
    setExpenses, 
    startSetExpenses 
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const uid = 'thisismytestuid';
const defaultAuthState = { auth: { uid } };
const createMockStore = configureMockStore([thunk]);

// beforeEach((done) => {
//     const expensesData = {};
//     expenses.forEach(({ id, description, note, amount, createdAt }) => {
//         expensesData[id] = { description, note, amount, createdAt };
//     });
//     database.ref('expenses').set(expensesData).then(() => done());
// });

beforeEach(() => {
    const expensesData = {};
    expenses.forEach(({ id, description, note, amount, createdAt }) => {
        expensesData[id] = { description, note, amount, createdAt };
    });
    database.ref(`users/${uid}/expenses`).set(expensesData);
});

// TEST FOR REMOVE_EXPENSE
test('should setup remove expense actions object', () => {
    const action = removeExpense( { id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

// TEST FOR REMOVE_EXPENSE FOR ASYNC ACTION
test('should remove expense from firebase', () => {
    const store = createMockStore(defaultAuthState);
    const id = expenses[2].id;
    store.dispatch(startRemoveExpense({ id })).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id
        });
        return database.ref(`users/${uid}/expenses/${id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toBeFalsy();
        // done();
    })
});

// TEST FOR EDIT_EXPENSE FOR ASYNC ACTION
test('should edit expense from firebase', () => {
    const store = createMockStore(defaultAuthState);
    const id = expenses[0].id;
    const updates = { amount: 21054};
    store.dispatch(startEditExpense(id, updates)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'EDIT_EXPENSE',
            id,
            updates
        });
        return database.ref(`users/${uid}/expenses/${id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val().amount).toBe(updates.amount);
        // done();
    })
});

// TEST FOR EDIT_EXPENSE
test('should setup edit expense actions object', () => {
    const action = editExpense('123abc', { note: 'New note value'} );
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: { note: 'New note value'}
    });
});

// TEST FOR ADD_EXPENSE - ITS GOING TO HAVE 2
// 1 - WHEN YOU USE THE TYPED VALUES
test('should setup add expense actions object with provided values', () => {
    const action = addExpense( expenses[2] );
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    });
});

// THIS TEST WITHOUT THE DONE() FUNCTION DOES WORK !!!!!!!!!!!!!!!!!!
test('should add expense to database and store', () => {
    const store = createMockStore(defaultAuthState);
    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note: 'This one is better',
        createdAt: 1000
    };
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });

        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
     }) .then((snapshot) => {
            expect(snapshot.val()).toEqual(expenseData);
            // done();                      
    });
});

//THIS TEST IS NOT WORKING!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// test('should add expense to database and store', done => {
//     const store = createMockStore({});
//     const expenseData = {
//         description: 'Mouse',
//         amount: 3000,
//         note: 'This one is better',
//         createdAt: 1000
//     };
//     store.dispatch(startAddExpense(expenseData)).then(() => {
//         const actions = store.getActions();
//         expect(actions[0]).toEqual({
//             type: 'ADD_EXPENSE',
//             expense: {
//                 id: expect.any(String),
//                 ...expenseData
//             }
//         });

//         return database.ref(`expenses/${actions[0].expense.id}`).once('value');
//      }) .then((snapshot) => {
//             expect(snapshot.val()).toEqual(expenseData);
//             done();                      
//     });
// });

// THIS TEST WITHOUT THE DONE() FUNCTION DOES WORK!!!!!!!!!!!!!!!!!!!!
test('should add expense with defaults to database and store', () => {
    const store = createMockStore(defaultAuthState);
    const expenseDefaults = {
        description: '',
        amount: 0,
        note: '',
        createdAt: 0
    };
    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseDefaults
            }
        });

        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
     }) .then((snapshot) => {
            expect(snapshot.val()).toEqual(expenseDefaults);
            // done();                      
    });
});

//THIS TEST IS NOT WORKING!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// test('should add expense with defaults to database and store', (done) => {
//     const store = createMockStore({});
//     const expenseDefaults = {
//         description: '',
//         amount: 0,
//         note: '',
//         createdAt: 0
//     };
//     store.dispatch(startAddExpense({})).then(() => {
//         const actions = store.getActions();
//         expect(actions[0]).toEqual({
//             type: 'ADD_EXPENSE',
//             expense: {
//                 id: expect.any(String),
//                 ...expenseDefaults
//             }
//         });

//         return database.ref(`expenses/${actions[0].expense.id}`).once('value');
//      }) .then((snapshot) => {
//             expect(snapshot.val()).toEqual(expenseDefaults);
//             done();                      
//     });
// });

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

// TEST FOR SET_EXPENSE
test('should setup set expense action object with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    });
});

test('should fetch the expenses from firebase', () => {
    const store = createMockStore(defaultAuthState);
    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        });
        //done():
    });
});