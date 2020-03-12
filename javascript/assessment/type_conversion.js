var a=[{type:"str",value:"hello"},{type:"op",value:"and"},{type:"str",value:"world"}]
  var output=[];
  for(i=0;i<a.length;i++)
  {
      if(a[i].type=='str')
      {
          output.push(a[i].value)
      }
      if(a[i].type=='op')
      {
          if(a[i].value=='and')
          {
              output.push('&&');
          }
          else if(a[i].value=='or')
          {
             output.push('||') ;
          }
      }
  }
  console.log(output.join(' '))
