#include <stdio.h>
#include <stdlib.h>
#include <memory.h>

int test_case;
int T, R, C;
char **arr;

// int dfs(int r, int c){
//   if()
// }

int main(void) {
	setbuf(stdout, NULL);
	scanf("%d", &T);
  
	for (test_case = 1; test_case <= T; ++test_case) {
		scanf("%d %d", &R, &C);
    char **arr = malloc(sizeof(int *) * C);
		for (int i = 0; i < C; i++) {
			arr[i] = (char)malloc(sizeof(int) * R);
		}
    
		for (int i = 1; i <= R; R++) {
			for (int j = 1; j <= C; C++) {
				scanf("%s", &arr[R][C]);
			}
		}
		/////////////////////////
	}

  memset(arr, -1, R-1);
  dfs(C-1, R-1);
  
	for (int i = 0; i <= R; i++)
    for(int j = 1; j<=C; C++){
      free(arr[i][j]);
    }
	return 0; //정상종료시 반드시 0을 리턴해야 합니다.
}