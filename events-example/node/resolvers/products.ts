import constants from '../utils/constants'

export const productList = async (_: any,{ topN }: { topN: number },
    { clients: { masterdata } }: Context
) => masterdata.scrollDocuments({
    dataEntity: constants.COURSE_ENTITY,
    fields: ['id', 'email'],
    schema: 'v1',
    size: topN,
}).then((({data}) => {
    console.log("=====>", data)
    return data;
}))