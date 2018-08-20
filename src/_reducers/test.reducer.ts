import { TestState } from '../_types';

const initialState: TestState = {
    test: "test",
}

export default (state:TestState = initialState): TestState => {
    return state;
}