function add(n)
{
    var sum=0;
    for(var i=1;i<=n;i++){
        sum=sum+i;
    }
    return sum;
}
document.write("1+2+����+100="+add(100)+"<br/>");
function add2(n)
{
    var sum=0;
    for(var i=2;i<=n;){
        sum=sum+i;
        i=i+2;
    }
    return sum;
}
document.write("2+4+����+100="+add2(100)+"<br/>");
function array(height,width)
{
    var data=new Array();
    data[0]=(height+width)*2;
    data[1]=height*width;
    return data;
}
document.write("height=3,width=4ʱ���ܳ�������ǣ�"+array(3,6));