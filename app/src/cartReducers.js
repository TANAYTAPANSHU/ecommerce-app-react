const cartReducer = (state, { type, payload }) => {
    let isProduct;
    let product;
    switch (type) {
        case 'ADD_PRODUCT':
            isProduct = state.filter(element => element.id === payload.id)

            if (isProduct.length === 0) {
                product = { count: 1, ...payload }
                console.log('here')
                return [
                    ...state,
                    product
                ]
            } else {


                state = state.map((ele, index) => {
                    if (ele === isProduct[0]) {
                        return ({
                                ...ele,
                                count: ele['count'] + 1
                            }

                        )

                    } else {
                        return (ele)
                    }

                })


                return [
                    ...state
                ]
            }

        case 'REMOVE_PRODUCT':
            isProduct = state.filter(element => element.id === payload.id)

         
                state = state.map((ele, index) => {
                    if (ele === isProduct[0]) {
                        return ({
                                ...ele,
                                count: ele['count'] - 1
                            }

                        )

                    } else {
                        return (ele)
                    }

                })


                return [
                    ...state
                ]
            










        default:
            return state
    }
}

export default cartReducer