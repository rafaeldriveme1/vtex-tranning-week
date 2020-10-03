import constants from '../utils/constants'

export const productList = async (_: any,{ topN }: { topN: number },
    { clients: { masterdata } }: Context
) => masterdata.scrollDocuments({
    dataEntity: constants.COURSE_ENTITY,
    fields: ['count', 'slug'],
    schema: 'v1',
    size: topN,
    sort: `count DESC`
}).then((({data}) => data))