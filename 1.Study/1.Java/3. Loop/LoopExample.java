public class LoopExample
{
	public static void main(String[] args)
	{
		// 첫번째 for문에 Loop1 이라고 이름을 지정.
		Loop1 :
			for(int i = 2 ; i <= 9 ; i++)
			{
				for(int j = 1; j <=9 ; j++)
				{
					if(j==5)
					break Loop1;	// 이렇게 사용하면 두번째 포문을 빠져나가는 것이 아니라 첫번째 포문을 빠져나가게 된다.
					//break;
					//continue Loop1;
					//continue;
					System.out.println(i + " * " + j + " = " + i*j);
				}	
				System.out.println();
			}
		return;
	}

}


/*
	반복문의 이름이 지정되지 않은 break문은 자신이 속한 하나의 반복문만 벗어날 수 있지만
	예제처럼 반복문에 이름을 지정하고 break문에 이름을 지정해주면 하나 이상의 반복문을 벗어날 수 있다.
*/	