import Mock from 'mockjs'
 
export default Mock.mock('/data/','get',{
    success:true,
    'list|10':[{
        'title':'@title(1)',
        'finish|1':true,
        'learned|1':true,
        'lession':'@ctitle(4)',
        'image':"@image('200x100','#FFC0CB','hello')",
        'id':'@id',
        'all':1,
        'index|2-6':2,
        'key|+1':1
    }]
})
