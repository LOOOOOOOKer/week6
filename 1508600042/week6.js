/**
 * Created by mac on 2016/10/25.
 */
//��һ��һ��n��������Ȼ����

function total1(n){
    var sum=0
    for(i=1;i<=n;i++){
        sum=sum+i;
    }
    return sum;

    //�ڶ���һ��n������ż����

    function total2(n){
        var sum=0;
        for(var i=1;i<=n;i++){
            if(i%2==0){
                sum=sum+i;
            }
            return sum;
    //�����ⶨ��һ�������������������height���Ϳ�width��֮�󣬷���һ�����飨data���������һ��Ԫ�أ�data[0]��Ϊ�þ��ε��ܳ����ڶ���Ԫ�أ�data[1]��Ϊ�þ��ε����
            function square(height,width){

                var data=new Array();

                data[0]=(height+width)*2;
                data[1]=height*width;

                return data;
            }