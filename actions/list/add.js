import { APP_ACTIONS } from '../../constants'

const addListAction = payload => ({
    type: APP_ACTIONS.ADD_LIST,
    payload
});

export default addListAction;