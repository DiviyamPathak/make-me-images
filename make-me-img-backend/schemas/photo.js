export default {
    name:'photo',
    type:'document',
    title:'Photo',
    fields:[{
        name:'postby',
        type:'reference',
        to:[{type :'user'}],
        title:'PostBy'
    },
    {
        name:'imageof',
        type:'image',
        title:'Image'
    }    ]     
 }