public class ForEachExample{
	public static void main(String[] args)
	{
		int[] arr = {10, 20, 30, 40, 50};

		for(int num : arr)
		{
			System.out.println(num);
		} // for문의 roof를 한번 돌때마다 arr방의 값 하나를 num에 저장하면서 실행된다.

		System.out.println("Done.");
	}
}

/*
	** for each문에서는 배열 항목의 값을 가져다가 사용할 수는 있지만, 배열 항목의 값을 변경할 수는 없다.
*/

/*
	for ( int num : arr )

	int num : Element Type id
	arr : Collection type + sequence(index) reference value -> 집합구조의 참조값.
*/